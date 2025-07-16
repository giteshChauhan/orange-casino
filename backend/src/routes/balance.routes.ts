import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import * as BalanceCtrl from '../controllers/balance.controller';

const router = Router();
router.get('/', authenticate, BalanceCtrl.getBalance);

export default router;