"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeAdmin = void 0;
const user_model_1 = require("../models/user.model");
const authorizeAdmin = async (req, res, next) => {
    const user = await user_model_1.User.findById(req.userId);
    if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: 'Admin only' });
    }
    next();
};
exports.authorizeAdmin = authorizeAdmin;
