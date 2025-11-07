
import Router        from 'express';
import { validatorBody } from '../middlewares/validator.middlware';
import { loginSchema, 
    registerSchema 
}                   from '../schemas/auth.schema';
import { tryCatch } from '../middlewares/tryCatch.middleware';
import { login, 
    register 
}                   from '../controllers/auth.controller';

const router = Router();

router.post( '/register', validatorBody( registerSchema ), tryCatch( register ) );
router.post( '/login', validatorBody( loginSchema ), tryCatch( login ) );

export default router;