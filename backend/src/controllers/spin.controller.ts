import { Request, Response } from 'express';
import { playSpin } from '../services/spin.service';
import { AuthRequest } from '../middlewares/auth.middleware';
import { getIO } from '../utils/socket';

export const spin = async (req: AuthRequest, res: Response) => {
  try {
    const { wager } = req.body;
    const data = await playSpin(req.userId!, wager);

    // Emit real-time update to this user
    const io = getIO();
    io.to(req.userId!).emit('spin', data);

    res.json(data);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};