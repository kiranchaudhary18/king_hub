const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    foodname: {
        type: String,
        required: true,
        lowercase: true 
    },
    restaurantName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

// Ensuring unique foodname per restaurant
menuSchema.index({ foodname: 1, restaurantName: 1 }, { unique: true });

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
