import 'dotenv/config';
import app from './app';
import { connectDB } from './utils/db';

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI!;

connectDB(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('DB connection error:', err);
    process.exit(1);
  });
