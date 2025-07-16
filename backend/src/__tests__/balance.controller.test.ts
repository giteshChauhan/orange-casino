import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import { User } from '../models/user.model';

let token: string;
describe('Balance Controller', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI!);
    await User.deleteMany({});
    // create and authenticate user
    await request(app).post('/api/auth/register').send({ username: 'u2', password: 'p2' });
    const res = await request(app).post('/api/auth/login').send({ username: 'u2', password: 'p2' });
    token = res.body.token;
  });
  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('returns initial balance', async () => {
    const res = await request(app)
      .get('/api/balance')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body.balance).toBe(1000);
  });
});