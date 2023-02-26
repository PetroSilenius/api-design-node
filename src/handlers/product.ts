import prisma from '../db';
import type { TokenRequest } from '../modules/auth';
import type { Response } from 'express';

export const getProducts = async (req: TokenRequest, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user?.id,
    },
    include: {
      products: true,
    },
  });

  res.json({ data: user?.products });
};

export const getProductById = async (req: TokenRequest, res: Response) => {
  const id = req.params.id;
  const product = await prisma.product.findFirst({
    where: {
      id,
      authorId: req.user?.id,
    },
  });

  res.json({ data: product });
};
