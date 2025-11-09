import request  from        'supertest';
import app      from        '../src/app';
import  prisma  from "../src/db/setup";

afterAll(async () => {
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

describe('/POST Regiter endpoint', () => {
    it( 'Should return 400 missing required fields', async () => {
        const reponse = await request(app)
            .post('/api/v1/auth/register')
            .send({
                password        :   'HelloTest1@',
                confirmPassword :   'HelloTest1@',
                name            :   'Test'
            })
            expect(reponse.status).toBe(400);
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