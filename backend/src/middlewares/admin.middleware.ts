import { Request, Response, NextFunction } from 'express';
import { AuthRequest } from './auth.middleware';
import { User } from '../models/user.model';

export const authorizeAdmin = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const user = await User.findById(req.userId);
  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin only' });
  }
  next();
};