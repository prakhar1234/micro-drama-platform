const express = require('express');
const router = express.Router();

// GET /api/dramas — list all dramas
router.get('/', (req, res) => {
  // TODO: fetch dramas from DB
  res.json({ message: 'List dramas' });
});

// GET /api/dramas/:id — get single drama
router.get('/:id', (req, res) => {
  res.json({ message: `Get drama ${req.params.id}` });
});

// POST /api/dramas — create a new drama series
router.post('/', (req, res) => {
  // TODO: create drama
  res.json({ message: 'Create drama' });
});

module.exports = router;
