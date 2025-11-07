import { Request, 
    Response }                  from 'express';
import { StatusCodes }          from 'http-status-codes';
import { Register }             from '../schemas/auth.schema';
import { addNewUser, 
    findUserByEmail }           from '../services/auth.service';



export const register = async ( req : Request<{}, {}, Register>, res : Response) => {
    // body 
    const body = req.body;

    // Check email exist in db 
    await findUserByEmail( body.email );
    // not exist create new user
    await addNewUser( body );
    // return success creation to client
    res.status( StatusCodes.CREATED ).json({
        status : 'success',
        message : 'Account created successfully',
    });
};