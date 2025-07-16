import { Request, Response } from 'express';
import { getLeaderboard } from '../services/leaderboard.service';

export const leaderboard = async (req: Request, res: Response) => {
  const days = parseInt(req.query.days as string) || 7;
  const data = await getLeaderboard(days);
  res.json(data);
};