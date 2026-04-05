const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// POST /api/newsletter
router.post('/', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required.' });
  try {
    await pool.query(
      'INSERT INTO newsletter_subscribers (email) VALUES ($1) ON CONFLICT (email) DO NOTHING',
      [email]
    );
    res.status(201).json({ message: 'Subscribed successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to subscribe.' });
  }
});

// GET /api/newsletter (admin)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch subscribers.' });
  }
});

// DELETE /api/newsletter/:id
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM newsletter_subscribers WHERE id = $1', [req.params.id]);
    res.json({ message: 'Unsubscribed.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to unsubscribe.' });
  }
});

module.exports = router;