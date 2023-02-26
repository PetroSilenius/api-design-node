import type { Request, Response } from 'express';
import prisma from '../db';
import { createJWT } from '../modules/auth';
import { comparePasswords, hashPassword } from '../modules/password';

export const createUser = async (req: Request, res: Response) => {
  const { name, password } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      password: await hashPassword(password),
    },
  });

  const token = createJWT(user);

  res.json({ token });
};

export const signIn = async (req: Request, res: Response) => {
  const { name, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      name,
    },
  });

  const isPasswordValid = await comparePasswords(user?.password ?? '', password);

  if (!user || !isPasswordValid) {
    return res.status(401).json({ message: 'User not found' });
  }

  const token = createJWT(user);

  res.json({ token });
};
