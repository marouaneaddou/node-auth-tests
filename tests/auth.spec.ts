import request  from        'supertest';
import app      from        '../src/app';
import  prisma  from "../src/db/setup";

afterAll(async () => {
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

describe('/POST Regiter endpoint', () => {
    it( 'Should return 400 missing required fields', async () => {
        const response = await request(app)
            .post('/api/v1/auth/register')
            .send({
                password        :   'HelloTest1@',
                confirmPassword :   'HelloTest1@',
                name            :   'Test'
            })
            expect(response.status).toBe(400);
    });

    it( 'Should return 201  create new user successfully', async () => {
        const response = await request(app)
            .post('/api/v1/auth/register')
            .send({
                email           :   'test@gmail.com',
                password        :   'HelloTest1@',
                confirmPassword :   'HelloTest1@',
                name            :   'Test'
            });
        expect(response.status).toBe(201);

        const user = await prisma.user.findUnique({
            where : {
                email : 'test@gmail.com',
            },
        });
        expect( user ).not.toEqual( null );
        expect( response.body ).toEqual( {
            status : 'success',
            message : 'Account created successfully',
        });
    });

    it('Should return 409 fail if email already exists', async () => {
        const response = await request(app)
            .post('/api/v1/auth/register')
            .send({
                email           :   'test@gmail.com',
                password        :   'HelloTest1@',
                confirmPassword :   'HelloTest1@',
                name            :   'Test'
            });
        expect(response.status).toBe(409);
        expect( response.body ).toEqual( {
            status : 'fail',
            message : 'User already exist',
        });
    });
});

describe('/POST Login endpoint', () => {
    it( 'Should retunr 401 Invalid email or password ( Email incorrect )', async () => {
        const response = await request( app )
            .post('/api/v1/auth/login')
            .send({
                password : "HelloTest1@",
                email    :  'test@gmail1.com'
            })
        expect( response.status ).toBe( 401 );
        expect( response.body.message ).toEqual('Invalid email or password');
    });

    it( 'Should retunr 401 Invalid email or password ( Password incorrect )', async ()=> {
        const response = await request( app )
            .post( '/api/v1/auth/login' )
            .send( {
                password : "HelloTest1",
                email    :  'test@gmail.com'
            } );
        expect( response.status ).toBe( 401 );
        expect( response.body.message ).toEqual('Invalid email or password');
    });

    it( 'Should retunr 400 missing required fields ( Missing required fields ) ', async ()=> {
        const response = await request( app )
            .post('/api/v1/auth/login')
            .send({
                password : "HelloTest1@",
                email1    :  'test@gmail1.com'
            })
        expect( response.status ).toBe( 400 );
        expect( response.body ).toHaveProperty('message');
        expect( response.body.message ).toEqual('Invalid data');
    });

    it( 'Should retun 200 user loged in successfully ', async ()=> {
        const response = await request( app )
            .post('/api/v1/auth/login')
            .send({
                password : "HelloTest1@",
                email    :  'test@gmail.com'
            })
        expect( response.status ).toBe( 200 );
        expect( response.body ).toHaveProperty( 'id' );
        expect( response.body.message ).toEqual( 'User logged in successfully' );
        expect( response.headers ).toHaveProperty( 'set-cookie' );
        expect( response.headers['set-cookie'][0]).toContain('token=');
    });
});