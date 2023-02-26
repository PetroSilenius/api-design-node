import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

export const createJWT = (user: User) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
    },
    process.env.JWT_SECRET!
  );
};
