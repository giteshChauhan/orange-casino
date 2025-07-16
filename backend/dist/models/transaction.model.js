"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    wager: { type: Number, required: true },
    payout: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});
exports.Transaction = (0, mongoose_1.model)('Transaction', transactionSchema);
