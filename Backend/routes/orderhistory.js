const express = require("express");
const router = express.Router();
const Order = require("../models/Orderhistory"); // Import Order model

// POST request to add a new order
router.post("/", async (req, res) => {
  try {
    const { userId, items, total } = req.body;
    const newOrder = new Order({ userId, items, total });
    await newOrder.save();
    res.status(201).json({ success: true, message: "Order added successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding order" });
  }
});

// GET request to get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate('userId').populate('items.productId');
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
});

module.exports = router;