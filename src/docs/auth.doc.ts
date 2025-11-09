import z                    from 'zod';

import { loginSchemas, 
    registerSchemas }       from '../schemas/auth.schema';
import { registry }         from './setup';

registry.registerPath({
    method: 'post',
    path: '/api/v1/auth/register',
    description: 'Register new account',
    summary: 'New account',
    tags : ['Auth'],
    request : {
        body : {
            content : {
                'application/json' : {
                    schema : registerSchemas,
                },
            },
        },
    },
    responses : {
        201 : {
            description : 'Account created successfuly',
            content : {
                'application/json' : {
                    schema : z.object({
                        status : z.string(),
                        message : z.string(),
                    }),
                },
            },
        },
        400 : {
            description : 'Invalid data',
        },
        409 : {
            description : 'User already exist',
        }
    },
});

registry.registerPath({
    method: 'post',
    path: '/api/v1/auth/login',
    description: 'Login',
    summary: 'Login',
    tags : ['Auth'],
    request : {
        body : {
            content : {
                'application/json' : {
                    schema : loginSchemas,
                },
            },
        },
    },
    responses : {
        201 : {
            description : 'Log in successfully',
            content : {
                'application/json' : {
                    schema : z.object({
                            id          :   z.number().gte(1),
                            name        :   z.string(),
                    }),
                },
            },
        },
        401 : {
            description : 'Unauthorized: The request requires user authentication or the provided credentials are invalid',
        },
        400 : {
            description : 'Invalid data',
        },
    },
});