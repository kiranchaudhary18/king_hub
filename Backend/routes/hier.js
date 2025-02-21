const express = require('express');
const router = express.Router();
const Hier = require('../models/Hier');

router.post('/', async (req, res) => {
    try {
        const {
            fullName,
            email,
            phone,
            address,
            vehicleType,
            licenseNumber,
            experience
        } = req.body;

        // Check if the email or license number already exists
        const existingApplicant = await Hier.findOne({ 
            $or: [{ email }, { licenseNumber }] 
        });
        
        if (existingApplicant) {
            return res.status(400).json({ message: 'Email or License Number already registered' });
        }

        // Create a new application
        const newApplicant = new Hier({
            fullName,
            email,
            phone,
            address,
            vehicleType,
            licenseNumber,
            experience
        });

        await newApplicant.save();

        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
