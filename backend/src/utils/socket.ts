import { Server as IOServer, Socket } from 'socket.io';
import http from 'http';

let io: IOServer;

export const initSocket = (server: http.Server) => {
  io = new IOServer(server, {
    cors: { origin: '*' }
  });

  io.on('connection', (socket: Socket) => {
    console.log(`Client connected: ${socket.id}`);
    // client can join room by userId
    socket.on('join', (userId: string) => {
      socket.join(userId);
    });
    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });

  return io;
};

export const getIO = (): IOServer => {
  if (!io) throw new Error('Socket.IO not initialized');
  return io;
};