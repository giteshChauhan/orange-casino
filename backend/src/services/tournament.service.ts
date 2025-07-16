import { Tournament } from '../models/tournament.model';

// get the list of tournaments
export const listTournaments = async () => {
  const tour = await Tournament.find().sort({ startTime: -1 });
  return tour;
};

// Create a new tournament window
export const createTournament = async (name: string, startTime: Date, endTime: Date) => {
  const tour = new Tournament({ name, startTime, endTime });
  return tour.save();
};

// join the tournament
export const joinTournament = async (userId: string, tournamentId: string) => {
  const tour = await Tournament.findById(tournamentId);
  if (!tour) throw new Error('Tournament not found');
  if (tour.participants.includes(userId as any)) throw new Error('Already joined');
  tour.participants.push(userId as any);
  await tour.save();
  return tour;
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