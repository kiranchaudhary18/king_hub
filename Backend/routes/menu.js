const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

// Get all menu items
router.get('/', async (req, res) => {
    try {
        const menu = await Menu.find();
        res.json(menu);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// Get menu items by restaurant ID (placed above dynamic foodname route to prevent conflicts)
router.get('/restaurant/:restaurantId', async (req, res) => {
    try {
        const menu = await Menu.find({ restaurantId: req.params.restaurantId });

        if (menu.length === 0) {
            return res.status(404).json({ error: 'No menu items found for this restaurant' });
        }

        res.json(menu);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// Add a new menu item
router.post('/', async (req, res) => {
    try {
        const { foodname, description, price, restaurantId, category, image } = req.body;

        if (!foodname || !price || !restaurantId) {
            return res.status(400).json({ error: 'Food name, price, and restaurant ID are required' });
        }

        const newMenu = new Menu({ foodname, description, price, restaurantId, category, image });
        await newMenu.save();
        res.status(201).json({ message: 'Menu item added successfully', newMenu });
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// Update a menu item
router.put('/:id', async (req, res) => {
    try {
        const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedMenu) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.json({ message: 'Menu item updated successfully', updatedMenu });
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// Delete a menu item
router.delete('/:id', async (req, res) => {
    try {
        const deletedMenu = await Menu.findByIdAndDelete(req.params.id);

        if (!deletedMenu) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

module.exports = router;
