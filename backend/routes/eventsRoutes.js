const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET /api/events/featured  ← must be before /:id
router.get('/featured', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM events WHERE is_featured = TRUE ORDER BY event_date ASC'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch featured events.' });
  }
});

// GET /api/events
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events ORDER BY event_date ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch events.' });
  }
});

// GET /api/events/:id
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Event not found.' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch event.' });
  }
});

// POST /api/events
router.post('/', async (req, res) => {
  const { title, description, location, event_date, event_time, image_url, is_featured } = req.body;
  if (!title || !event_date)
    return res.status(400).json({ error: 'Title and event date are required.' });
  try {
    const result = await pool.query(
      `INSERT INTO events (title, description, location, event_date, event_time, image_url, is_featured)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [title, description, location, event_date, event_time, image_url, is_featured ?? false]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create event.' });
  }
});

// PUT /api/events/:id
router.put('/:id', async (req, res) => {
  const { title, description, location, event_date, event_time, image_url, is_featured } = req.body;
  try {
    const result = await pool.query(
      `UPDATE events SET title=$1, description=$2, location=$3, event_date=$4,
       event_time=$5, image_url=$6, is_featured=$7 WHERE id=$8 RETURNING *`,
      [title, description, location, event_date, event_time, image_url, is_featured, req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Event not found.' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update event.' });
  }
});

// DELETE /api/events/:id
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM events WHERE id = $1', [req.params.id]);
    res.json({ message: 'Event deleted.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete event.' });
  }
});

module.exports = router;