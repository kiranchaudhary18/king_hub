const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

// Get all menu items
router.get('/', async (req, res) => {
    try {
        // Check if any menu items exist
        const menuCount = await Menu.countDocuments();
        if (menuCount === 0) {
            console.log('No menu items found in the database.');
            return res.status(404).json({ error: 'No menu items available' });
        }

        const menu = await Menu.find().lean(); // Use lean() for better performance
        console.log('Menu items fetched:', menu);

        res.json(menu);
    } catch (error) {
        console.error('Error fetching menu items:', error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

router.get('/:foodname', async (req, res) => {
    try {
      const foodname = req.params.foodname.toLowerCase();
      // Use a case-insensitive regular expression to match the foodname.
      const menuItems = await Menu.find({
        foodname: { $regex: new RegExp(`^${foodname}$`, 'i') }
      });
  
      if (!menuItems || menuItems.length === 0) {
        return res.status(404).json({ message: "No menu items found with this foodname." });
      }
  
      res.status(200).json(menuItems);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
  


// Get menu items by restaurant ID
router.get('/restaurant/:restaurantId', async (req, res) => {
    try {
        const menu = await Menu.find({ restaurantId: req.params.restaurantId }).lean();

        if (menu.length === 0) {
            console.log(`No menu items found for restaurant ID: ${req.params.restaurantId}`);
            return res.status(404).json({ error: 'No menu items found for this restaurant' });
        }

        console.log('Menu items for restaurant:', menu);
        res.json(menu);
    } catch (error) {
        console.error('Error fetching menu items for restaurant:', error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});


// Add a new menu item
router.post('/', async (req, res) => {
    try {
        const { foodname, description, price, restaurantId, category, image } = req.body;

        if (!foodname || !price || !restaurantId) {
            console.log('Missing required fields');
            return res.status(400).json({ error: 'Food name, price, and restaurant ID are required' });
        }

        const newMenu = new Menu({ foodname, description, price, restaurantId, category, image });
        await newMenu.save();

        console.log('New menu item added:', newMenu);
        res.status(201).json({ message: 'Menu item added successfully', newMenu });
    } catch (error) {
        console.error('Error adding new menu item:', error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// Update a menu item
router.put('/:id', async (req, res) => {
    try {
        const updatedMenu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedMenu) {
            console.log('Menu item not found');
            return res.status(404).json({ error: 'Menu item not found' });
        }

        console.log('Menu item updated:', updatedMenu);
        res.json({ message: 'Menu item updated successfully', updatedMenu });
    } catch (error) {
        console.error('Error updating menu item:', error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

// Delete a menu item
router.delete('/:id', async (req, res) => {
    try {
        const deletedMenu = await Menu.findByIdAndDelete(req.params.id);

        if (!deletedMenu) {
            console.log('Menu item not found');
            return res.status(404).json({ error: 'Menu item not found' });
        }

        console.log('Menu item deleted:', deletedMenu);
        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu item:', error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

module.exports = router;
