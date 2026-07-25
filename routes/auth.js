const express = require('express');
const router = express.Router();

// Mock User Database
const users = [
  { id: 1, email: "student@rmuti.ac.th", password: "password123", name: "Thaworn Saengsawang" }
];

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password required' });
  }

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid email or password' });
  }

  return res.json({
    success: true,
    token: `mock-jwt-token-${user.id}`,
    user: { id: user.id, email: user.email, name: user.name }
  });
});

// POST /api/auth/register
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  const existing = users.find(u => u.email === email);
  if (existing) {
    return res.status(409).json({ success: false, message: 'Email already registered' });
  }

  const newUser = { id: users.length + 1, email, password, name };
  users.push(newUser);

  return res.status(201).json({
    success: true,
    token: `mock-jwt-token-${newUser.id}`,
    user: { id: newUser.id, email: newUser.email, name: newUser.name }
  });
});

module.exports = router;
