"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tournament = void 0;
const mongoose_1 = require("mongoose");
const tournamentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    participants: [
        { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }
    ]
});
exports.Tournament = (0, mongoose_1.model)('Tournament', tournamentSchema);
