import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  res.json({ success: true, data: [] });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  res.json({ success: true, data: { id, title: 'Sample Resource' } });
});

export default router;
