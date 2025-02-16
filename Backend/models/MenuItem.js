const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    restaurant: String,
    foodname: String,
    category: Array
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);

