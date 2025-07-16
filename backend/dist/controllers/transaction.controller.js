"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactions = void 0;
const transaction_model_1 = require("../models/transaction.model");
const getTransactions = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const [transactions, total] = await Promise.all([
        transaction_model_1.Transaction.find({ user: req.userId })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit),
        transaction_model_1.Transaction.countDocuments({ user: req.userId })
    ]);
    res.json({
        page,
        limit,
        total,
        data: transactions
    });
};
exports.getTransactions = getTransactions;
