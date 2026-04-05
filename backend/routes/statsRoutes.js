const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET /api/stats
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM stats ORDER BY sort_order ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch stats.' });
  }
});

// PUT /api/stats/:id
router.put('/:id', async (req, res) => {
  const { label, value } = req.body;
  try {
    const result = await pool.query(
      'UPDATE stats SET label=$1, value=$2 WHERE id=$3 RETURNING *',
      [label, value, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update stat.' });
  }
});

module.exports = router;