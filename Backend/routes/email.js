const express = require('express');
const router = express.Router();
const { sendMail } = require('../services/mailService');

router.post('/send-email', async (req, res) => {
  const { to, subject, text, html } = req.body;
  try {
    await sendMail(to, subject, text, html);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;
