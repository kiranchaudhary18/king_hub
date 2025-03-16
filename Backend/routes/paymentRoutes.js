const express = require("express");
const dotenv = require("dotenv");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Load Stripe secret key

dotenv.config();
const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { items } = req.body;

    console.log("✅ Received Cart Items:", JSON.stringify(items, null, 2));

    if (!Array.isArray(items) || items.length === 0) {
      console.error("❌ Error: Cart is empty or invalid");
      return res.status(400).json({ error: "Cart is empty or invalid" });
    }

    // Transform cart items into Stripe line items
    const lineItems = [
      {
          price_data: {
              currency: "usd",
              product_data: {
                  name: "Product Name",
              },
              unit_amount: 1000,
          },
          quantity: 1,
      },
  ];

    console.log("✅ Line Items Sent to Stripe:", JSON.stringify(lineItems, null, 2));

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://kinghub-1.netlify.app/success",
      cancel_url: "https://kinghub-1.netlify.app/cancel",
    });

    console.log("✅ Session Created Successfully:", session.url);
    res.json({ url: session.url });
  } catch (error) {
    console.error("❌ Stripe Error:", error.message);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

module.exports = router;