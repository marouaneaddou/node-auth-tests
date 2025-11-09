
import Router        from 'express';
import { validatorBody } from '../middlewares/validator.middlware';
import { loginSchemas, 
    registerSchemas 
}                   from '../schemas/auth.schema';
import { tryCatch } from '../middlewares/tryCatch.middleware';
import { login, 
    register 
}                   from '../controllers/auth.controller';

const router = Router();

router.post( '/register', validatorBody( registerSchemas ), tryCatch( register ) );
router.post( '/login', validatorBody( loginSchemas ), tryCatch( login ) );

export default router;