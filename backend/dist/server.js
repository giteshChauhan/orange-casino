"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const socket_1 = require("./utils/socket");
require("dotenv/config");
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;
mongoose_1.default.connect(MONGO_URI)
    .then(() => {
    const server = http_1.default.createServer(app_1.default);
    (0, socket_1.initSocket)(server);
    server.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
})
    .catch(err => console.error('DB connection error:', err));
