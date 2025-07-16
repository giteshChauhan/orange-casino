"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset = exports.join = exports.create = exports.list = void 0;
const admin_middleware_1 = require("../middlewares/admin.middleware");
const tournament_service_1 = require("../services/tournament.service");
// GET /admin/tournament
const list = async (req, res) => {
    try {
        const tournaments = await (0, tournament_service_1.listTournaments)();
        res.json(tournaments);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.list = list;
// POST /admin/tournament
exports.create = [admin_middleware_1.authorizeAdmin, async (req, res) => {
        try {
            const { name, startTime, endTime } = req.body;
            if (!name || !startTime || !endTime) {
                return res.status(400).json({ message: 'Missing required fields' });
            }
            const start = new Date(startTime);
            const end = new Date(endTime);
            if (start >= end) {
                return res.status(400).json({ message: 'endTime must be after startTime' });
            }
            const tournament = await (0, tournament_service_1.createTournament)(name, start, end);
            res.status(201).json(tournament);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }];
// POST /admin/tournament/:id/join
const join = async (req, res) => {
    try {
        await (0, tournament_service_1.joinTournament)(req.userId, req.params.id);
        res.json({ message: 'Joined tournament' });
    }
    catch (err) {
        if (err.message === 'Tournament not found') {
            return res.status(404).json({ message: err.message });
        }
        if (err.message === 'Already joined') {
            return res.status(400).json({ message: err.message });
        }
        res.status(500).json({ message: err.message });
    }
};
exports.join = join;
// DELETE /admin/tournament/:id
exports.reset = [admin_middleware_1.authorizeAdmin, async (req, res) => {
        try {
            const { id } = req.params;
            await (0, tournament_service_1.resetTournament)(id);
            res.json({ message: 'Tournament reset' });
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }];
