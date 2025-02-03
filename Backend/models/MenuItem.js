const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    foodname: String,
    category: Array
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);