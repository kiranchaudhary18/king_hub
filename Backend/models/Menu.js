const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
    category: String,
    image: String
});

module.exports = mongoose.model('Menu', MenuSchema);
