import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import { User } from '../models/user.model';
import { Transaction } from '../models/transaction.model';

let token: string;

describe('Transaction Controller', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI!);
    await User.deleteMany({});
    await Transaction.deleteMany({});
    // register and login
    await request(app).post('/api/auth/register').send({ username: 'txu', password: 'pass' });
    const res = await request(app).post('/api/auth/login').send({ username: 'txu', password: 'pass' });
    token = res.body.token;
    // seed transactions
    const user = await User.findOne({ username: 'txu' });
    if (user) {
      await Transaction.create([
        { user: user._id, wager: 50, payout: 0 },
        { user: user._id, wager: 100, payout: 200 }
      ]);
    }
  });
  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('returns paginated transactions', async () => {
    const res = await request(app)
      .get('/api/transactions?page=1&limit=1')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('page', 1);
    expect(res.body).toHaveProperty('limit', 1);
    expect(res.body).toHaveProperty('total', 2);
    expect(res.body.data).toHaveLength(1);
  });
});