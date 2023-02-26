import { Router } from 'express';
import { body } from 'express-validator';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from './handlers/product';
import { handleInputErrors } from './modules/middlewares';
import {
  getUpdates,
  createUpdate,
  getUpdateById,
  updateUpdate,
  deleteUpdate,
} from './handlers/update';

const router = Router();

router.get('/products', getProducts);
router.post('/product', body('name').isString(), handleInputErrors, createProduct);
router.get('/product/:id', getProductById);
router.put('/product/:id', body('name').isString(), handleInputErrors, updateProduct);
router.delete('/product/:id', deleteProduct);

router.get('/product/:productId/updates', getUpdates);
router.post(
  '/product/:productId/update',
  body('title').isString(),
  body('content').isString(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  body('version').optional().isString(),
  handleInputErrors,
  createUpdate
);
router.get('/product/:productId/update/:id', getUpdateById);
router.put(
  '/product/:productId/update/:id',
  body('title').isString(),
  body('content').isString(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  body('version').optional().isString(),
  handleInputErrors,
  updateUpdate
);
router.delete('/product/:productId/update/:id', deleteUpdate);

router.get('/product/:productId/update/:id/updatePoints', () => {});
router.post(
  '/product/:productId/update/:id/updatePoint',
  body('name').isString(),
  body('description').isString(),
  handleInputErrors,
  () => {}
);
router.get('/product/:productId/update/:id/updatePoint/:id', () => {});
router.put(
  '/product/:productId/update/:id/updatePoint/:id',
  body('name').optional().isString(),
  body('description').optional().isString(),
  handleInputErrors,
  () => {}
);
router.delete('/product/:productId/update/:id/updatePoint/:id', () => {});

export default router;
