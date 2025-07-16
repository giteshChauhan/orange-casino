import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import 'dotenv/config';

import authRoutes from './routes/auth.routes';
import spinRoutes from './routes/spin.routes';
import balanceRoutes from './routes/balance.routes';
import leaderboardRoutes from './routes/leaderboard.routes';
import tournamentRoutes from './routes/tournament.routes';
import transactionRoutes from './routes/transaction.routes';

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/spin', spinRoutes);
app.use('/api/balance', balanceRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/admin/tournament', tournamentRoutes);

// Serve frontend
const clientBuildPath = path.resolve(__dirname, '../public');
app.use(express.static(clientBuildPath));
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

export default app;