import redis from '../utils/redis';
import { Transaction } from '../models/transaction.model';
import { User } from '../models/user.model';

export const getLeaderboard = async (days: number) => {
  const cacheKey = `leaderboard:${days}`;
  const cached = await redis.get<typeof result>(cacheKey);
  if (cached) return cached;

  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  const agg = await Transaction.aggregate([
    { $match: { createdAt: { $gte: since } } },
    { $group: { _id: '$user', netWin: { $sum: '$payout' } } },
    { $sort: { netWin: -1 } },
    { $limit: 10 }
  ]);

  const result = await Promise.all(
    agg.map(async (r) => {
      const user = await User.findById(r._id);
      return { username: user?.username, netWin: r.netWin };
    })
  );

  await redis.set(cacheKey, result, { ex: 120 });

  return result;
};
