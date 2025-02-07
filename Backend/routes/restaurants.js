const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant.js');

// Get all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get restaurants by location
router.get('/:location', async (req, res) => {
    try {
        const location = req.params.location;
        // Use a case-insensitive regex to match the location
        const restaurants = await Restaurant.find({ location: new RegExp(location, 'i') });
        if (restaurants.length === 0) {
            return res.status(404).json({ error: 'No restaurants found in this location' });
        }
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get a single restaurant by ID
router.get('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
        res.json(restaurant);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Create a new restaurant
router.post('/', async (req, res) => {
    try {
        const { name, location, cuisine, rating, contact, image } = req.body;
        const newRestaurant = new Restaurant({ name, location, cuisine, rating, contact, image });
        await newRestaurant.save();
        res.status(201).json({ message: 'Restaurant added successfully', newRestaurant });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Update a restaurant
router.put('/:id', async (req, res) => {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedRestaurant);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete a restaurant
router.delete('/:id', async (req, res) => {
    try {
        await Restaurant.findByIdAndDelete(req.params.id);
        res.json({ message: 'Restaurant deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;