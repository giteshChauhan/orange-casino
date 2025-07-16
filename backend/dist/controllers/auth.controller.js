"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const register = async (req, res) => {
    const { username, password } = req.body;
    const user = new user_model_1.User({ username, password });
    await user.save();
    res.status(201).json({ message: 'Registered' });
};
exports.register = register;
const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await user_model_1.User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
};
exports.login = login;
