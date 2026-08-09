import bcrypt           from 'bcryptjs';
import prisma           from '../db/setup';
import { Register }     from '../schemas/auth.schema';
import { AppError }     from '../utils/AppError';
import { Role }         from '@prisma/client';

export const findUserByEmail = async ( email : string ) => (
    await prisma.user.findUnique({
        where : {
            email,
        },
    })   
);

export const countUsers =async () => (
    await prisma.user.count()
);

export const addNewUser = async ( body : Register, isAdmin : boolean , role? : Role ) => {
    const hashPassword = await bcrypt.hash( body.password, 10 );
    const data = {
        email       :   body.email,
        password    :   hashPassword,
        name        :   body.name,
        role        :   isAdmin == true ? role : Role.USER
    }
    await prisma.user.create({
        data: data,
    });
}