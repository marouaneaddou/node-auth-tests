
import Router from 'express';
import { validatorBody } from '../middlewares/validator.middlware';
import { registerSchema } from '../schemas/auth.schema';
import { tryCatch } from '../middlewares/tryCatch.middleware';
import { register } from '../controllers/auth.controller';

const router = Router();

router.post('/register', validatorBody( registerSchema ), tryCatch( register ) );

export default router;