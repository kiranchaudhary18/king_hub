const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');
const MenuItem = require('../models/MenuItem');

// Search for restaurants or menu items
router.get('/', async (req, res) => {
    try {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        // Search for restaurants or menu items containing the query in their name
        const restaurants = await Restaurant.find({ name: { $regex: query, $options: 'i' } });
        const menuItems = await MenuItem.find({ name: { $regex: query, $options: 'i' } });

        res.json({ restaurants, menuItems });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
