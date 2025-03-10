const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant.js');

// Get all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Get restaurants by location
router.get('/location/:location', async (req, res) => {
    try {
        const location = req.params.location;
        const restaurants = await Restaurant.find({ location: new RegExp(location, 'i') });
        if (restaurants.length === 0) {
            return res.status(404).json({ message: 'No restaurants found in this location' });
        }
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Get a single restaurant by ID (Updated)
router.get('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Get restaurants by food type (NEW)
router.get('/food-type/:type', async (req, res) => {
    try {
        const foodType = req.params.type;
        const restaurants = await Restaurant.find({ foodType: new RegExp(foodType, 'i') });
        if (restaurants.length === 0) {
            return res.status(404).json({ message: 'No restaurants found for this food type' });
        }
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Create a new restaurant (Updated)
router.post('/', async (req, res) => {
    try {
        const newRestaurant = new Restaurant(req.body);
        await newRestaurant.save();
        res.status(201).json({ message: "Restaurant added successfully", newRestaurant });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Update a restaurant
router.put('/:id', async (req, res) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedRestaurant);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

// Delete a restaurant
router.delete('/:id', async (req, res) => {
    try {
        await Restaurant.findByIdAndDelete(req.params.id);
        res.json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

module.exports = router;