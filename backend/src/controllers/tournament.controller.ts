import { Request, Response } from 'express';
import { authorizeAdmin } from '../middlewares/admin.middleware';
import { createTournament, resetTournament } from '../services/tournament.service';

// POST /admin/tournament
export const create = [authorizeAdmin, async (req: Request, res: Response) => {
  try {
    const { name, startTime, endTime } = req.body;
    if (!name || !startTime || !endTime) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const start = new Date(startTime);
    const end = new Date(endTime);
    if (start >= end) {
      return res.status(400).json({ message: 'endTime must be after startTime' });
    }
    const tournament = await createTournament(name, start, end);
    res.status(201).json(tournament);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}];

// DELETE /admin/tournament/:id
export const reset = [authorizeAdmin, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await resetTournament(id);
    res.json({ message: 'Tournament reset' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}];