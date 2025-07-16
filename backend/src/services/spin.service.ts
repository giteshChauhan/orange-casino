import { Transaction } from '../models/transaction.model';
import { User } from '../models/user.model';
import { recordTournamentScore } from './tournament.service';
import { symbolConfig } from '../config/slot.config';

// Extract symbols, weights, and payout map from config
const symbols = symbolConfig.map(c => c.symbol);
const weights = symbolConfig.map(c => c.weight);
const payoutMap = symbolConfig.reduce<Record<string, number>>((acc, c) => {
  acc[c.symbol] = c.payoutMultiplier;
  return acc;
}, {});

// Simulate weighted random spins for 3 reels
export const spinReels = (): string[] => (
  Array.from({ length: 3 }).map(() => {
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    let random = Math.random() * totalWeight;
    for (let i = 0; i < symbols.length; i++) {
      random -= weights[i];
      if (random <= 0) return symbols[i];
    }
    return symbols[0];
  })
);

// Handle a spin: free spins, wagers, payouts based on matches
export const playSpin = async (userId: string, wager: number) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  // Free spin allocation: use existing or award 1 in 10
  let isFree = false;
  if (user.freeSpins > 0) {
    isFree = true;
    user.freeSpins -= 1;
  } else if (Math.random() < 0.1) {
    user.freeSpins += 1;
  }

  // Deduct paid wager
  if (!isFree) {
    if (user.balance < wager) throw new Error('Insufficient balance');
    user.balance -= wager;
  }

  const result = spinReels();
  const [a, b, c] = result;
  let payout = 0;

  if (a === b && b === c) {
    payout = wager * (payoutMap[a] || 1);
  } else if (a === b || a === c || b === c) {
    payout = wager * 2; // simple partial match
  }

  user.balance += payout;
  await user.save();

  // Record the transaction
  await new Transaction({ user: user.id, wager: isFree ? 0 : wager, payout }).save();

  // Update tournament score for net win/loss
  await recordTournamentScore(user.id, payout - (isFree ? 0 : wager));

  return { result, balance: user.balance, wager: isFree ? 0 : wager, payout, isFree };
};