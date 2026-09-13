const express = require('express');
const router = express.Router();

// GET /api/users/profile
router.get('/profile', (req, res) => {
  // TODO: return user profile
  res.json({ message: 'User profile' });
});

// PUT /api/users/profile
router.put('/profile', (req, res) => {
  // TODO: update profile
  res.json({ message: 'Update profile' });
});

// GET /api/users/watchlist
router.get('/watchlist', (req, res) => {
  // TODO: return user watchlist
  res.json({ message: 'User watchlist' });
});

module.exports = router;
