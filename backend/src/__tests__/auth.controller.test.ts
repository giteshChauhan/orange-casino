import request from 'supertest';
import app from '../app';
import mongoose from 'mongoose';
import { User } from '../models/user.model';

describe('Auth Controller', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI!);
    await User.deleteMany({});
  });
  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('registers and logs in a user', async () => {
    const resReg = await request(app)
      .post('/api/auth/register')
      .send({ username: 'u1', password: 'p1' });
    expect(resReg.status).toBe(201);

    const resLogin = await request(app)
      .post('/api/auth/login')
      .send({ username: 'u1', password: 'p1' });
    expect(resLogin.status).toBe(200);
    expect(resLogin.body.token).toBeDefined();
  });
});