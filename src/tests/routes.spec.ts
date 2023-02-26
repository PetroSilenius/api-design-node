import app from '../server';
import supertest from 'supertest';

describe('POST /signin', () => {
  it('should successfully register', async () => {
    const res = await supertest(app).post('/user').send({
      name: 'Jack',
      password: 'The man 3',
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should successfully login', async () => {
    const res = await supertest(app).post('/signin').send({
      name: 'Jack',
      password: 'The man 3',
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should fail to login', async () => {
    const res = await supertest(app).post('/signin').send({
      name: 'Jack',
      password: '',
    });

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('message');
  });
});
