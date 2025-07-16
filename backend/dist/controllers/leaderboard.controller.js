"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaderboard = void 0;
const leaderboard_service_1 = require("../services/leaderboard.service");
const leaderboard = async (req, res) => {
    const days = parseInt(req.query.days) || 7;
    const data = await (0, leaderboard_service_1.getLeaderboard)(days);
    res.json(data);
};
exports.leaderboard = leaderboard;
