
const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Get all menu items
router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// Get menu items by restaurant ID (placed above dynamic foodname route to prevent conflicts)
router.get('/restaurant/:restaurantId', async (req, res) => {
    try {
        const menuItems = await MenuItem.find({ restaurantId: req.params.restaurantId });

        if (menuItems.length === 0) {
            return res.status(404).json({ error: 'No menu items found for this restaurant' });
        }

        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});



router.get('/:foodname', async (req, res) => {
    try {
        const foodname = req.params.foodname;
        const lower=foodname.toLowerCase();
        // console.log(lower)
        const areaname = await MenuItem.findOne({ foodname: lower });

        if (!areaname) {
            return res.status(404).json({ message: "No hostels found in this foodname." });
        }

        res.status(200).json(areaname);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


// Add a new menu item
router.post('/', async (req, res) => {
    try {
        const { foodname, description, price, restaurantId, category, image } = req.body;

        if (!foodname || !price || !restaurantId) {
            return res.status(400).json({ error: 'Food name, price, and restaurant ID are required' });
        }

        const newMenuItem = new MenuItem({ foodname, description, price, restaurantId, category, image });
        await newMenuItem.save();
        res.status(201).json({ message: 'Menu item added successfully', newMenuItem });
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// Update a menu item
router.put('/:id', async (req, res) => {
    try {
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedMenuItem) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.json({ message: 'Menu item updated successfully', updatedMenuItem });
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// Delete a menu item
router.delete('/:id', async (req, res) => {
    try {
        const deletedMenuItem = await MenuItem.findByIdAndDelete(req.params.id);

        if (!deletedMenuItem) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

module.exports = router;
