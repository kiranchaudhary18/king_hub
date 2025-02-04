const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact"); // Import Contact model

// POST request to save contact form data
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message saved!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error saving message" });
  }
});

module.exports = router;
