import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import * as TransactionCtrl from '../controllers/transaction.controller';

const router = Router();
router.get('/', authenticate, TransactionCtrl.getTransactions);

export default router;