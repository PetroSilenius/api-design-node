import { Router } from 'express';
import { body } from 'express-validator';
import { handleInputErrors } from './modules/middlewares';

const router = Router();

router.get('/products', (req, res) => {
  res.json({ message: 'Hello World!' });
});
router.post('/product', body('name').isString(), handleInputErrors, (req, res) => {});
router.get('/product/:id', () => {});
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {});
router.delete('/product/:id', () => {});

router.get('/product/:productId/updates', (req, res) => {
  res.json({ message: 'Hello World!' });
});
router.post(
  '/product/:productId/updates',
  body('title').isString(),
  body('content').isString(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  body('version').optional().isString(),
  handleInputErrors,
  () => {}
);
router.get('/product/:productId/update/:id', () => {});
router.put(
  '/product/:productId/update/:id',
  body('title').isString(),
  body('content').isString(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  body('version').optional().isString(),
  handleInputErrors,
  () => {}
);
router.delete('/product/:productId/update/:id', () => {});

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
