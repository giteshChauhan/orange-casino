import { Router } from 'express';
import * as LeaderboardCtrl from '../controllers/leaderboard.controller';

const router = Router();
router.get('/', LeaderboardCtrl.leaderboard);

export default router;