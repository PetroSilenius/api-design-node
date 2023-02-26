import prisma from '../db';
import type { TokenRequest } from '../modules/auth';
import type { Response } from 'express';

export const getUpdates = async (req: TokenRequest, res: Response) => {
  const product = await prisma.user.findUnique({
    where: {
      id: req.params.productId,
    },
    include: {
      updates: true,
    },
  });

  res.json({ data: product?.updates });
};

export const getUpdateById = async (req: TokenRequest, res: Response) => {
  const id = req.params.id;

  const update = await prisma.update.findUnique({
    where: {
      id,
    },
  });

  res.json({ data: update });
};

export const createUpdate = async (req: TokenRequest, res: Response) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.params.productId,
    },
  });

  if (!product) {
    return res.json({ message: 'No such product found' });
  }

  const { title, content } = req.body;

  const update = await prisma.update.create({
    data: {
      title,
      content,
      author: { connect: { id: req.user?.id } },
      product: { connect: { id: product.id } },
      ...req.body,
    },
  });

  res.json({ data: update });
};

export const updateUpdate = async (req: TokenRequest, res: Response) => {
  const id = req.params.id;

  const update = await prisma.update.update({
    where: {
      id_productId: {
        id,
        productId: req.params.productId,
      },
    },
    data: {
      ...req.body,
    },
  });

  res.json({ data: update });
};

export const deleteUpdate = async (req: TokenRequest, res: Response) => {
  const id = req.params.id;

  await prisma.update.delete({
    where: {
      id_productId: {
        id,
        productId: req.params.productId,
      },
    },
  });

  res.json({ message: 'Successfully deleted' });
};
