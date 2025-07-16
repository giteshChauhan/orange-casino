import { Schema, model, Document, Types } from 'mongoose';
export interface TournamentDoc extends Document {
  name: string;
  startTime: Date;
  endTime: Date;
  participants: Types.ObjectId[];
}

const tournamentSchema = new Schema<TournamentDoc>({
  name: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  participants: [
    { type: Schema.Types.ObjectId, ref: 'User' }
  ]
});

export const Tournament = model<TournamentDoc>(
  'Tournament',
  tournamentSchema
);
