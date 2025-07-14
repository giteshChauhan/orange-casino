import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path'

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Client Side (Public Path)

const clientBuildPath = path.resolve(__dirname, '../public');
app.use(express.static(clientBuildPath));

app.get('*', (_req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

export default app;
