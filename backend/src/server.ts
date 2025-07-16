import http from 'http';
import mongoose from 'mongoose';
import app from './app';
import { initSocket } from './utils/socket';
import 'dotenv/config';

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI!;

mongoose.connect(MONGO_URI)
  .then(() => {
    const server = http.createServer(app);
    initSocket(server);
    server.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
  })
  .catch(err => console.error('DB connection error:', err));