import { Schema, model, Document, Types } from 'mongoose';

export interface TransactionDoc extends Document {
  user: Types.ObjectId;
  wager: number;
  payout: number;
  createdAt: Date;
}

const transactionSchema = new Schema<TransactionDoc>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  wager: { type: Number, required: true },
  payout: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Transaction = model<TransactionDoc>('Transaction', transactionSchema);