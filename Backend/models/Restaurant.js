const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    cuisine: { type: String, required: true },
    rating: { type: Number, default: 0 },
    contact: { type: Number, required: true },
    image: { type: String, required: true } // URL for the restaurant image
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);