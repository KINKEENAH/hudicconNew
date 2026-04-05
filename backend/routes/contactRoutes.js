const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: 'Name, email, and message are required.' });

  try {
    const result = await pool.query(
      `INSERT INTO contact_messages (name, email, subject, message)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, email, subject, message]
    );

    // Send emails only if credentials are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Contact Message: ${subject || 'No Subject'}`,
        html: `<h3>From ${name} (${email})</h3><p>${message}</p>`,
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'We received your message — Hudiccon',
        html: `<p>Dear ${name},</p><p>Thank you for reaching out. We will get back to you shortly.</p><p>Hudiccon Team</p>`,
      });
    }

    res.status(201).json({ message: 'Message sent successfully.', data: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// GET /api/contact (admin)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contact_messages ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages.' });
  }
});

// PATCH /api/contact/:id/read
router.patch('/:id/read', async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE contact_messages SET is_read = TRUE WHERE id = $1 RETURNING *',
      [req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update message.' });
  }
});

module.exports = router;