const Stripe = require("stripe");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (lineItems, successUrl, cancelUrl) => {
    try {
        console.log("Creating Stripe session with:", lineItems);
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: successUrl,
            cancel_url: cancelUrl,
        });

        return session.url;
    } catch (error) {
        console.error("Stripe error:", error);
        throw new Error(error.message);
    }
};


module.exports = { createCheckoutSession };
