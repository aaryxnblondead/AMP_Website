import { Router } from 'express';

const router = Router();

// GET /api/events - list events
router.get('/', async (req, res) => {
  res.json({ success: true, data: [] });
});

// GET /api/events/:id - event detail
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  res.json({ success: true, data: { id, title: 'Sample Event' } });
});

// POST /api/events/:id/register - register for event
router.post('/:id/register', async (req, res) => {
  res.json({ success: true, message: 'Registered' });
});

export default router;
