import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import * as SpinCtrl from '../controllers/spin.controller';

const router = Router();
router.post('/', authenticate, SpinCtrl.spin);

export default router;