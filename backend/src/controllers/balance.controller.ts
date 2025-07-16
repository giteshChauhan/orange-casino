import { AuthRequest } from '../middlewares/auth.middleware';
import { Response } from 'express';
import { User } from '../models/user.model';

export const getBalance = async (req: AuthRequest, res: Response) => {
  const user = await User.findById(req.userId!);
  res.json({ balance: user?.balance ?? 0 });
};