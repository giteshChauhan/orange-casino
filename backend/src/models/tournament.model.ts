import { Schema, model, Document } from 'mongoose';

export interface TournamentDoc extends Document {
  name: string;
  startTime: Date;
  endTime: Date;
}

const tournamentSchema = new Schema<TournamentDoc>({
  name: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true }
});

export const Tournament = model<TournamentDoc>('Tournament', tournamentSchema);