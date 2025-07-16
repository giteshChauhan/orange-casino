import { spinReels, playSpin } from '../services/spin.service';
import { User } from '../models/user.model';
import mongoose from 'mongoose';

describe('Spin Service', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI!);
    await User.deleteMany({});
  });
  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should return 3 symbols', () => {
    const result = spinReels();
    expect(result).toHaveLength(3);
  });

  it('pays out for three of a kind', async () => {
    // create user
    const user = new User({ username: 'test', password: 'pass', balance: 1000 });
    await user.save();
    // mock spinReels to force triple match
    jest.spyOn(require('../config/slot.config'), 'symbolConfig', 'get').mockReturnValue([
      { symbol: 'X', weight: 1, payoutMultiplier: 2 }
    ]);
    const { payout, balance } = await playSpin(user.id, 100);
    expect(payout).toBe(200);
    expect(balance).toBe(1100);
  });
});