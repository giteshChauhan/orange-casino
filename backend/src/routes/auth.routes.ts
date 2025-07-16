import { Router } from 'express';
import * as AuthCtrl from '../controllers/auth.controller';

const router = Router();
router.post('/register', AuthCtrl.register);
router.post('/login', AuthCtrl.login);

export default router;