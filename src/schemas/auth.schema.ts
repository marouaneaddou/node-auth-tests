
import { z } from 'zod';

const passwordSchemas = z.string()
    .min(8, { message : 'password must contain 8 characters' })
    .max(32, { message : 'The maximum number of characters allowed in the password is 32' } )
    .superRefine((password, ctx) => {
        if (!/[A-Z]/.test(password)) {
            ctx.addIssue({
                message :	'Password must contain at least one uppercase letter',
                code	:	z.ZodIssueCode.custom,
            });
        }
        if (!/[a-z]/.test(password)) {
            ctx.addIssue({
                message :	'Password must contain at least one lower letter',
                code	:	z.ZodIssueCode.custom,
            });
        }
        if (!/[0-9]/.test(password)) {
            ctx.addIssue({
                message :	'Password must contain at least one number',
                code	:	z.ZodIssueCode.custom,
            });
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            ctx.addIssue({
                message :	'Password must contain at least one special character',
                code	:	z.ZodIssueCode.custom,
            });
        }
    });

export const registerSchema = z.object({
    name : z.string()
        .min(1, 'Name cannot be empty')
        .max(100, 'Name must be less than 100 characters'),
    email : z.string()
        .email()
        .max(254),
    password : passwordSchemas,
    confirmPassword :   z.string()
        .min(1, {message : "Please confirm your password"})
}).strict()
    .superRefine((val, ctx) => {
        if (val.password !== val.confirmPassword) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Password is not the same as confirm password',
                path: ['confirmPassword'],
            });
        };
    });
    export type Register    =  z.infer<typeof registerSchema>