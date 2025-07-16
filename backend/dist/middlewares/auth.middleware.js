"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer '))
        return res.status(401).json({ message: 'Missing token' });
    const token = authHeader.split(' ')[1];
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const user = await user_model_1.User.findById(payload.id);
        if (!user)
            return res.status(401).json({ message: 'Invalid token' });
        req.userId = user.id;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
exports.authenticate = authenticate;
