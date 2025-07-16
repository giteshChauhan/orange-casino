"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
const user_model_1 = require("../models/user.model");
const getBalance = async (req, res) => {
    const user = await user_model_1.User.findById(req.userId);
    res.json({ balance: user?.balance ?? 0 });
};
exports.getBalance = getBalance;
