const express = require('express');
const router = express.Router();

// POST /api/auth/register
router.post('/register', (req, res) => {
  // TODO: implement registration
  res.json({ message: 'Register endpoint' });
});

// POST /api/auth/login
router.post('/login', (req, res) => {
  // TODO: implement login
  res.json({ message: 'Login endpoint' });
});

module.exports = router;
