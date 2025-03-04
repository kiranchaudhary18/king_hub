const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// User Registration
router.post('/register', async (req, res) => {
    try {

        const { name, email, password, address, contact } = req.body;

        if (!name || !email || !password || !address || !contact) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Normalize email
        const normalizedEmail = email.toLowerCase();

        // Check if user already exists
        const existingUser = await User.findOne({ email: normalizedEmail });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ 
            name, 
            email: normalizedEmail, 
            password: hashedPassword, 
            address, 
            contact 
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: 'Server error' });
    }
});


// User Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Normalize email to lowercase to avoid case sensitivity issues
        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        res.json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
