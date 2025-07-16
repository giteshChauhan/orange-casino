import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export type Role = 'user' | 'admin';

export interface UserDoc extends Document {
  username: string;
  password: string;
  balance: number;
  freeSpins: number;
  role: Role;
  comparePassword(candidate: string): Promise<boolean>;
}

const userSchema = new Schema<UserDoc>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  balance: { type: Number, default: 1000 },
  freeSpins: { type: Number, default: 0 },
  role: { type: String, enum: ['user','admin'], default: 'user' }
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = function(candidate: string) {
  return bcrypt.compare(candidate, this.password);
};

export const User = model<UserDoc>('User', userSchema);