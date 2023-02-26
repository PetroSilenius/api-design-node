import { Router } from 'express';

const router = Router();

router.get('/products', (req, res) => {
  res.json({ message: 'Hello World!' });
});
router.post('/product', () => {});
router.get('/product/:id', () => {});
router.put('/product/:id', () => {});
router.delete('/product/:id', () => {});

router.get('/product/:productId/updates', (req, res) => {
  res.json({ message: 'Hello World!' });
});
router.post('/product/:productId/updates', () => {});
router.get('/product/:productId/update/:id', () => {});
router.put('/product/:productId/update/:id', () => {});
router.delete('/product/:productId/update/:id', () => {});

router.get('/product/:productId/update/:id/updatePoints', () => {});
router.post('/product/:productId/update/:id/updatePoint', () => {});
router.get('/product/:productId/update/:id/updatePoint/:id', () => {});
router.put('/product/:productId/update/:id/updatePoint/:id', () => {});
router.delete('/product/:productId/update/:id/updatePoint/:id', () => {});

export default router;
