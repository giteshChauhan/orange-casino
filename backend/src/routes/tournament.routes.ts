import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import { authorizeAdmin } from '../middlewares/admin.middleware';
import * as TournamentCtrl from '../controllers/tournament.controller';

const router = Router();
router.post('/', authenticate, authorizeAdmin, TournamentCtrl.create);
router.delete('/:id', authenticate, authorizeAdmin, TournamentCtrl.reset);

export default router;