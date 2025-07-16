"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spin = void 0;
const spin_service_1 = require("../services/spin.service");
const socket_1 = require("../utils/socket");
const spin = async (req, res) => {
    try {
        const { wager } = req.body;
        const io = (0, socket_1.getIO)();
        const data = await (0, spin_service_1.playSpin)(req.userId, wager, io);
        io.to(req.userId).emit('spin', data);
        res.json(data);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.spin = spin;
