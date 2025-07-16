"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeaderboard = void 0;
const redis_1 = __importDefault(require("../utils/redis"));
const transaction_model_1 = require("../models/transaction.model");
const user_model_1 = require("../models/user.model");
const getLeaderboard = async (days) => {
    const cacheKey = `leaderboard:${days}`;
    const cached = await redis_1.default.get(cacheKey);
    if (cached)
        return cached;
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
    const agg = await transaction_model_1.Transaction.aggregate([
        { $match: { createdAt: { $gte: since } } },
        { $group: { _id: '$user', netWin: { $sum: '$payout' } } },
        { $sort: { netWin: -1 } },
        { $limit: 10 }
    ]);
    const result = await Promise.all(agg.map(async (r) => {
        const user = await user_model_1.User.findById(r._id);
        return { username: user?.username, netWin: r.netWin };
    }));
    await redis_1.default.set(cacheKey, result, { ex: 120 });
    return result;
};
exports.getLeaderboard = getLeaderboard;
