"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetTournament = exports.recordTournamentScore = exports.joinTournament = exports.createTournament = exports.listTournaments = void 0;
const tournament_model_1 = require("../models/tournament.model");
// get the list of tournaments
const listTournaments = async () => {
    const tour = await tournament_model_1.Tournament.find().sort({ startTime: -1 });
    return tour;
};
exports.listTournaments = listTournaments;
// Create a new tournament window
const createTournament = async (name, startTime, endTime) => {
    const tour = new tournament_model_1.Tournament({ name, startTime, endTime });
    return tour.save();
};
exports.createTournament = createTournament;
// join the tournament
const joinTournament = async (userId, tournamentId) => {
    const tour = await tournament_model_1.Tournament.findById(tournamentId);
    if (!tour)
        throw new Error('Tournament not found');
    if (tour.participants.includes(userId))
        throw new Error('Already joined');
    tour.participants.push(userId);
    await tour.save();
    return tour;
};
exports.joinTournament = joinTournament;
// Record net win into current tournament
const recordTournamentScore = async (userId, net) => {
    const now = new Date();
    const tour = await tournament_model_1.Tournament.findOne({ startTime: { $lte: now }, endTime: { $gte: now } });
    if (!tour)
        return;
};
exports.recordTournamentScore = recordTournamentScore;
// Reset (delete) a tournament by ID
const resetTournament = async (id) => {
    return tournament_model_1.Tournament.findByIdAndDelete(id);
};
exports.resetTournament = resetTournament;
