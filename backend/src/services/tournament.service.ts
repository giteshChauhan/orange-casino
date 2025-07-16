import { Tournament } from '../models/tournament.model';

// Create a new tournament window
export const createTournament = async (name: string, startTime: Date, endTime: Date) => {
  const tour = new Tournament({ name, startTime, endTime });
  return tour.save();
};

// Record net win into current tournament
export const recordTournamentScore = async (userId: string, net: number) => {
  const now = new Date();
  const tour = await Tournament.findOne({ startTime: { $lte: now }, endTime: { $gte: now } });
  if (!tour) return;
};

// Reset (delete) a tournament by ID
export const resetTournament = async (id: string) => {
  return Tournament.findByIdAndDelete(id);
};