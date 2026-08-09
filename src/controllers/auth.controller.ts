import { Request, 
    Response }                  from 'express';
import { StatusCodes }          from 'http-status-codes';
import { Login, 
    Register 
}                               from '../schemas/auth.schema';
import { addNewUser, 
    countUsers, 
    findUserByEmail }           from '../services/auth.service';
import bcrypt                   from 'bcryptjs';
import { AppError }             from '../utils/AppError';
import jwt                      from 'jsonwebtoken';
import { config }               from '../config';
import { Role }                 from '@prisma/client';

export const register = async ( req : Request<{}, {}, Register>, res : Response) => {
    // body 
    const body = req.body;
    // count
    const count = await countUsers();
    if ( count == 0 ) {
        await addNewUser( body , true, Role.ADMIN );
    }
    else {
        // Check email exist in db 
        const user = await findUserByEmail( body.email );
        // if exist thrw error 
        if ( user ) {
            throw new AppError( 'User already exist', 409 );
        };
        // not exist create new user
        await addNewUser( body, false );
    }
    // return success creation to client
    res.status( StatusCodes.CREATED ).json({
        status : 'success',
        message : 'Account created successfully',
    });
};

export const login = async ( req : Request<{}, {}, Login>, res : Response) => {
    // body 
    const body = req.body;

    // find user by id
    const user = await findUserByEmail( body.email );
    // check user exist
    if ( !user )
        throw new AppError( 'Invalid email or password', 401 );
    // check password
    const checkPassword = await bcrypt.compare( body.password, user.password );
    if ( !checkPassword ) 
        throw new AppError( 'Invalid email or password', 401 );
    // generate token
    const payload = {
        id : user.id,
    }
    const token = jwt.sign(payload, config.jwt_secret, {
        expiresIn : '1d',
    })
    // save JWT token in http_only cokie
    res.cookie( 'token', token, {
        maxAge   :  900000,
        httpOnly :  true,
    });
    // return user data to client
    res.status( StatusCodes.OK ).json({
        status  :   'sucess',
        message :   'User logged in successfully',
        id      :   user.id,
        name    :   user.name,
        role    :   user.role
    });
}