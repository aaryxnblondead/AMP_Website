import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { validate, validateLogin, validateRegister } from '../middleware/validation';

const router = Router();

router.post('/register', validate(validateRegister), AuthController.register);
router.post('/login', validate(validateLogin), AuthController.login);
router.post('/refresh', AuthController.refresh);

export default router;
