"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIO = exports.initSocket = void 0;
const socket_io_1 = require("socket.io");
let io;
const initSocket = (server) => {
    io = new socket_io_1.Server(server, {
        cors: { credentials: true }
    });
    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);
        // client can join room by userId
        socket.on('join', (userId) => {
            socket.join(userId);
        });
        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
    return io;
};
exports.initSocket = initSocket;
const getIO = () => {
    if (!io)
        throw new Error('Socket.IO not initialized');
    return io;
};
exports.getIO = getIO;
