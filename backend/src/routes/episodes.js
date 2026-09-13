const express = require('express');
const router = express.Router();

// GET /api/episodes/:dramaId — list episodes for a drama
router.get('/:dramaId', (req, res) => {
  res.json({ message: `Episodes for drama ${req.params.dramaId}` });
});

// POST /api/episodes — upload a new episode
router.post('/', (req, res) => {
  // TODO: handle episode upload
  res.json({ message: 'Create episode' });
});

module.exports = router;
