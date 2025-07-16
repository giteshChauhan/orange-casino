import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';

export interface AuthRequest extends Request {
  userId?: string;
}

export const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ message: 'Missing token' });

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const user = await User.findById(payload.id);
    if (!user) return res.status(401).json({ message: 'Invalid token' });
    req.userId = user.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};