import request  from        'supertest';
import app      from        '../src/app';


describe('/POST Regiter endpoint', () => {
    const user = {
        email           :   'test@gmail.com',
        password        :   'HelloTest1@',
        confirmPassword :   'HelloTest1@',
        name            :   'Test'
    }
    it('Should return 400 invalid data', async () => {
        const response = await request(app)
            .post('/api/v1/auth/register')
            .send(user);
        expect(response.status).toBe(201);
        expect( response.body ).toEqual( {
            status : 'success',
            message : 'Account created successfully',
        })
    });

})