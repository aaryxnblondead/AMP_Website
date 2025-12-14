import { Router } from 'express';
import { NGOController } from '../controllers/ngoController';
import { authMiddleware } from '../middleware/authMiddleware';
import { validate, validateNGORegistration, validateActivitySubmission } from '../middleware/validation';

const router = Router();

router.get('/search', NGOController.search);
router.get('/:id', NGOController.getById);
router.get('/dashboard', authMiddleware, NGOController.dashboard);
router.post('/register', authMiddleware, validate(validateNGORegistration), NGOController.register);
router.post('/:id/activities', authMiddleware, validate(validateActivitySubmission), NGOController.submitActivity);

export default router;
