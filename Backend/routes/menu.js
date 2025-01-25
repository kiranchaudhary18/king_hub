const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Get all menu items
router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get menu items by restaurant ID
router.get('/restaurant/:restaurantId', async (req, res) => {
    try {
        const menuItems = await MenuItem.find({ restaurant: req.params.restaurantId });
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Add a new menu item
router.post('/', async (req, res) => {
    try {
        const { name,description, price,restaurantId, category, image } = req.body;
        const newMenuItem = new MenuItem({ name,description, price,restaurantId, category, image });
        await newMenuItem.save();
        res.status(201).json({ message: 'Menu item added successfully', newMenuItem });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Update a menu item
router.put('/:id', async (req, res) => {
    try {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMenuItem);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete a menu item
router.delete('/:id', async (req, res) => {
    try {
        await MenuItem.findByIdAndDelete(req.params.id);
        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
