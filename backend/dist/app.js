"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const spin_routes_1 = __importDefault(require("./routes/spin.routes"));
const balance_routes_1 = __importDefault(require("./routes/balance.routes"));
const leaderboard_routes_1 = __importDefault(require("./routes/leaderboard.routes"));
const tournament_routes_1 = __importDefault(require("./routes/tournament.routes"));
const transaction_routes_1 = __importDefault(require("./routes/transaction.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// API routes
app.use('/api/auth', auth_routes_1.default);
app.use('/api/spin', spin_routes_1.default);
app.use('/api/balance', balance_routes_1.default);
app.use('/api/transactions', transaction_routes_1.default);
app.use('/api/leaderboard', leaderboard_routes_1.default);
app.use('/api/admin/tournament', tournament_routes_1.default);
// Serve frontend
const clientBuildPath = path_1.default.resolve(__dirname, '../public');
app.use(express_1.default.static(clientBuildPath));
app.get('*', (_req, res) => {
    res.sendFile(path_1.default.join(clientBuildPath, 'index.html'));
});
exports.default = app;
