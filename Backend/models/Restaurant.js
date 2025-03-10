const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    image: { type: String, required: true }, // Image URL of the menu item
    price: { type: Number, required: true },
    description: { type: String, required: true },
    allergies: { type: [String], default: [] }, // List of allergens
    rating: { type: Number, min: 1, max: 5, default: 0 },
    isPopular: { type: Boolean, default: false }
});

const menuCategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true }, // Example: Burgers, Sides, Beverages
    items: [menuItemSchema] // List of menu items under this category
});

const restaurantSchema = new mongoose.Schema({
    // 🔹 Old Fields (DO NOT MODIFY)
    name: { type: String, required: true },
    location: { type: String, required: true },
    cuisine: { type: String, required: true },
    rating: { type: Number, default: 0 },
    contact: { type: Number, required: true },
    image: { type: String, required: true }, // URL for the restaurant image

    // 🔹 New Fields (Added)
    bgImage: { type: String, required: true }, // Background image URL
    logo: { type: String, required: true }, // Logo image URL
    reviews: [
        {
            review: { type: String, required: true },
            rating: { type: Number, min: 1, max: 5, required: true },
            date: { type: Date, default: Date.now }
        }
    ],
    openTime: { type: String, required: true }, // Example: "10:00 AM"
    closeTime: { type: String, required: true }, // Example: "11:00 PM"
    contactDetails: {
        phone: { type: String, required: true },
        email: { type: String, required: true }
    },
    foodType: { type: String, required: true }, // Example: "Fast Food"
    menu: [menuCategorySchema], // Menu categories containing menu items
    
    // 🔹 Delivery Details
    distance: { type: Number, required: true }, // Distance in km
    deliveryTime: { type: String, required: true }, // Example: "30-40 mins"
    deliveryFees: { type: Number, required: true } // Delivery charge in currency
}, { timestamps: true });

module.exports = mongoose.model("Restaurant", restaurantSchema);