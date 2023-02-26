// Write a test for the auth module

import { User } from '@prisma/client';
import type { Request } from 'express';
import { createJWT, protect } from '../auth';

process.env.JWT_SECRET = 'test';

describe('auth', () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };

  const next = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a JWT', () => {
    const user = {
      id: '1',
      name: 'John Doe',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const token = createJWT(user);
    expect(token).toBeDefined();
  });

  it('return 401 on missing headers', () => {
    const req = {
      headers: {},
    };

    protect(req as Request, res as any, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Missing bearer token' });
  });

  it('return 401 on wrong token', () => {
    const req = {
      headers: {
        authorization: 'Bearer 123456',
      },
    };

    protect(req as Request, res as any, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Not a valid token' });
  });

  it('should call next on valid token', () => {
    const req = {
      headers: {
        authorization: `Bearer ${createJWT({
          id: '1',
          name: 'John Doe',
        } as User)}`,
      },
    };

    protect(req as Request, res as any, next);
    expect(next).toHaveBeenCalled();
  });
});
