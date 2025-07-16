"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playSpin = exports.spinReels = void 0;
const transaction_model_1 = require("../models/transaction.model");
const user_model_1 = require("../models/user.model");
const tournament_service_1 = require("./tournament.service");
const slot_config_1 = require("../config/slot.config");
// Extract symbols, weights, and payout map from config
const symbols = slot_config_1.symbolConfig.map(c => c.symbol);
const weights = slot_config_1.symbolConfig.map(c => c.weight);
const payoutMap = slot_config_1.symbolConfig.reduce((acc, c) => {
    acc[c.symbol] = c.payoutMultiplier;
    return acc;
}, {});
// Simulate weighted random spins for 3 reels
const spinReels = () => (Array.from({ length: 3 }).map(() => {
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    let random = Math.random() * totalWeight;
    for (let i = 0; i < symbols.length; i++) {
        random -= weights[i];
        if (random <= 0)
            return symbols[i];
    }
    return symbols[0];
}));
exports.spinReels = spinReels;
// Handle a spin: free spins, wagers, payouts based on matches
const playSpin = async (userId, wager, io) => {
    const user = await user_model_1.User.findById(userId);
    if (!user)
        throw new Error('User not found');
    // Free spin allocation: use existing or award 1 in 10
    let isFree = false;
    if (user.freeSpins > 0) {
        isFree = true;
        user.freeSpins -= 1;
    }
    else if (Math.random() < 0.1) {
        user.freeSpins += 1;
    }
    io.to(userId).emit('spin', { message: isFree ? "Free Spin" : "Paid Spin" });
    // Deduct paid wager
    if (!isFree) {
        if (user.balance < wager)
            throw new Error('Insufficient balance');
        user.balance -= wager;
    }
    const result = (0, exports.spinReels)();
    io.to(userId).emit('spin', { message: "Reels Spinning" });
    const [a, b, c] = result;
    let payout = 0;
    if (a === b && b === c) {
        payout = wager * (payoutMap[a] || 1);
        io.to(userId).emit('spin', { message: "Complete Match" });
    }
    else if (a === b || a === c || b === c) {
        io.to(userId).emit('spin', { message: "Partial Match" });
        payout = wager * 2; // simple partial match
    }
    else
        io.to(userId).emit('spin', { message: "No Match" });
    user.balance += payout;
    await user.save();
    // Record the transaction
    await new transaction_model_1.Transaction({ user: user.id, wager: isFree ? 0 : wager, payout }).save();
    // Update tournament score for net win/loss
    await (0, tournament_service_1.recordTournamentScore)(user.id, payout - (isFree ? 0 : wager));
    return { result, balance: user.balance, wager: isFree ? 0 : wager, payout, isFree };
};
exports.playSpin = playSpin;
