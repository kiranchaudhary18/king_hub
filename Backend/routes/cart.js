const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Get all items in the cart
router.get('/', async (req, res) => {
    try {
        const cartItems = await Cart.find();
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Add an item to the cart
router.post('/', async (req, res) => {
    try {
        const { userId, menuItem, quantity } = req.body;
        let cartItem = await Cart.findOne({ userId, menuItem, quantity});

        if (cartItem) {
            cartItem.quantity += quantity; // Increase quantity if item exists
        } else {
            cartItem = new Cart({ userId, menuItem, quantity });
        }

        await cartItem.save();
        res.status(201).json({ message: 'Item added to cart', cartItem });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Remove an item or decrease quantity from the cart
router.delete('/:id', async (req, res) => {
    try {
        const cartItem = await Cart.findById(req.params.id);
        if (!cartItem) {
            return res.status(404).json({ error: 'Cart item not found' });
        }

        if (cartItem.quantity > 1) {
            // Decrease the quantity by 1
            cartItem.quantity -= 1;
            await cartItem.save();
            res.json({ message: 'Item quantity decreased', cartItem });
        } else {
            // Remove the item if quantity is 1
            await Cart.findByIdAndDelete(req.params.id);
            res.json({ message: 'Item removed from cart' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Update item quantity in cart
router.put('/:id', async (req, res) => {
    try {
        const { quantity } = req.body;
        const updatedCartItem = await Cart.findByIdAndUpdate(req.params.id, { quantity }, { new: true });
        res.json(updatedCartItem);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
