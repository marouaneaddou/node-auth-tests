import bcrypt           from 'bcryptjs';
import prisma           from '../db/setup';
import { Register }     from '../schemas/auth.schema';
import { AppError }     from '../utils/AppError';

export const findUserByEmail = async ( email : string ) => {
    const user = await prisma.user.findUnique({
        where : {
            email,
        },
    });
    if ( user ) {
        throw new AppError( 'User already exist', 409 );
    }
};

export const addNewUser = async ( body : Register ) => {
    const hashPassword = await bcrypt.hash( body.password, 10 );
    await prisma.user.create({
        data: {
            email       :   body.email,
            password    :   hashPassword,
            name        :   body.name,
        },
    })
}