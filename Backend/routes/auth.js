const express = require('express');
const router = express.Router();
const Auth = require('../models/Auth');

router.post("/", async (req, res) => {
    try {
        const { sub, name, email, picture } = req.body;

        // Validate required fields
        if (!sub || !name || !email) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Check if user already exists
        let user = await Auth.findOne({ auth0Id: sub });

        if (!user) {
            // Create new user
            user = new Auth({ auth0Id: sub, name, email, picture });
            await user.save();
            return res.status(201).json({ message: "User saved successfully", userId: user._id });
        }

        // If user exists, send back response with user details
        res.status(200).json({ message: "User already exists", user });

    } catch (error) {
        console.error("🔴 Error saving user:", error);

        // Handle duplicate key error
        if (error.code === 11000) {
            return res.status(400).json({
                message: "Duplicate entry detected, this user already exists.",
                error
            });
        }

        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;