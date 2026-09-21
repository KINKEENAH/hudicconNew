// const express = require("express");
// const router = express.Router();
const router = require('express').Router();
const pool = require("../config/db");

// Sends one email via SendGrid's HTTPS API (port 443) instead of raw SMTP
// (port 465/587), which Render's free tier blocks outbound.
async function sendGridEmail({ to, subject, html }) {
  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: process.env.EMAIL_USER },
      subject,
      content: [{ type: "text/html", value: html }],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`SendGrid ${response.status}: ${errorBody}`);
  }
}

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: "Name, email, and message are required." });

  try {
    // 1. Save to database first
    const result = await pool.query(
      `INSERT INTO contact_messages (name, email, subject, message)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, email, subject, message]
    );

    // 2. Respond immediately — don't wait for email
    res.status(201).json({ message: "Message sent successfully.", data: result.rows[0] });

    // 3. Send email after responding — failure won't affect the user
    if (process.env.SENDGRID_API_KEY && process.env.EMAIL_USER) {
      // Send both emails but don't crash if they fail
      sendGridEmail({
        to: process.env.EMAIL_USER,
        subject: `New Contact Message: ${subject || "No Subject"}`,
        html: `<h3>From ${name} (${email})</h3><p>${message}</p>`,
      }).catch(err => console.error("Admin email failed:", err.message));

      sendGridEmail({
        to: email,
        subject: "We received your message — Hudiccon",
        html: `<p>Dear ${name},</p><p>Thank you for reaching out. We will get back to you shortly.</p><p>Hudiccon Team</p>`,
      }).catch(err => console.error("Confirmation email failed:", err.message));
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send message." });
  }
});
module.exports = router;