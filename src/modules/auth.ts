import { User } from '@prisma/client';
import type { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface TokenRequest extends Request {
  user?: string | JwtPayload;
}

export const createJWT = (user: User) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
    },
    process.env.JWT_SECRET!
  );
};

export const protect = (req: TokenRequest, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Missing bearer token' });
  }

  const token = bearer.split('Bearer ')[1].trim();

  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  try {
    const userJWTToken = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = userJWTToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Not a valid token' });
  }
};
