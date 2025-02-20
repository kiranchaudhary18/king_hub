import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://king-hub-1.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setSuccess(response.ok ? "Message sent successfully!" : "Something went wrong, try again.");
      if (response.ok) setFormData({ name: "", email: "", message: "" });
    } catch {
      setSuccess("Error connecting to server.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative w-full h-[400px] overflow-hidden"
      >
        <img
          src="https://source.unsplash.com/1600x900/?food,delivery"
          alt="Food Delivery"
          className="w-full h-full object-cover brightness-75 transform scale-110 transition-transform duration-300 hover:scale-125"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 drop-shadow-lg animate-pulse">
            About <span className="text-white">King Hub</span>
          </h1>
        </div>
      </motion.div>

      {/* About Us Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="container mx-auto px-6 py-20 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl shadow-2xl mt-[-60px] relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
          Welcome to <span className="text-gray-800">King Hub</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          At King Hub, we bring delicious food from your favorite restaurants straight to your doorstep.
        </p>
      </motion.div>

      {/* Why Choose Us Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl p-10 md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-16">
            Why Choose <span className="text-black">Us?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Fast Delivery",
                description: "Get your food delivered within minutes, hot and fresh!",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTSSWNopnfHKCHDTS8wnWGj5FmDrCEYyVuQ&s",
              },
              {
                title: "Top Restaurants",
                description: "We partner with the best restaurants to bring you quality food.",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRAU8UqOEiy-jtfSALHR-NqBhYDNabjX2VA&s",
              },
              {
                title: "24/7 Support",
                description: "Need help? Our customer support is available anytime, anywhere.",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAOMAtkzhEx6Z-9TV41y7KuO0kQzQ5Q9agQ&s",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-br from-red-50 to-orange-50"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 object-cover rounded-full mb-6 transition-transform duration-300 transform hover:scale-110"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="container mx-auto px-6 py-20 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl shadow-2xl mt-[-60px] relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          At King Hub, our mission is to bring convenience and joy to every mealtime. We strive to connect you with your favorite restaurants, ensuring fast, reliable, and delightful food delivery experiences.
        </p>
      </motion.div>

      {/* Our Story Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-24 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl p-10 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-16">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            King Hub was born out of a simple idea: to make delicious food accessible to everyone, anytime, anywhere. What started as a small team passionate about food has grown into a trusted platform connecting thousands of customers with their favorite restaurants.
          </p>
        </div>
      </motion.div>

      {/* Sustainability Commitment Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="container mx-auto px-6 py-20 bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl shadow-2xl mt-[-60px] relative z-10"
      >
        <h2 className="text-4xl md:text-5xl p-10 font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
          Sustainability Commitment
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          At King Hub, we believe in delivering not just food but also a better future. We partner with restaurants that use eco-friendly packaging and support local farmers to reduce our carbon footprint.
        </p>
      </motion.div>

      {/* Meet the Team Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-24 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-16">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "John Doe",
                role: "Founder & CEO",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORyQzNiEfMRaKvWyir-CcQ6EX7pMFfuhCRA&s",
              },
              {
                name: "Jane Smith",
                role: "Head of Operations",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAvN-aze1APwMZW6MErdau1RVDwA9aD_9_Q&s",
              },
              {
                name: "Alex Johnson",
                role: "Tech Lead",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrwV_UKE0oghzxOIgNQeBsv3EdnIK044fnw&s",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-br from-red-50 to-orange-50"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 object-cover rounded-full mb-6 transition-transform duration-300 transform hover:scale-110"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Join Our Community Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 via-rose-100 to-amber-50 p-6"
      >
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-amber-300 mb-6">
            Join Our Community
          </h2>
          <p className="text-lg md:text-xl text-gray-700 text-center mb-6">
            Stay updated with the latest offers, restaurant updates, and food trends by joining our community!
          </p>
          <form className="space-y-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-xl text-lg bg-gray-50"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-300 to-amber-300 text-white font-semibold py-3 rounded-xl"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>

      {/* Contact Us Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-100 via-rose-100 to-amber-50 p-6"
      >
        <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-amber-300 mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl text-lg bg-gray-50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl text-lg bg-gray-50"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl text-lg bg-gray-50 h-32"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-rose-300 to-amber-300 text-white font-semibold py-3 rounded-xl"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
            {success && <p className="mt-4 text-green-600 font-medium">{success}</p>}
          </form>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* About Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-400">
                The best food delivery service in your city. Order now and enjoy delicious meals from your favorite restaurants.
              </p>
            </div>
            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/restaurants" className="text-sm text-gray-400 hover:text-white transition">
                    Restaurants
                  </a>
                </li>
                <li>
                  <a href="/promotions" className="text-sm text-gray-400 hover:text-white transition">
                    Promotions
                  </a>
                </li>
                <li>
                  <a href="/popular-food" className="text-sm text-gray-400 hover:text-white transition">
                    Popular Food
                  </a>
                </li>
                <li>
                  <a href="/help-center" className="text-sm text-gray-400 hover:text-white transition">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            {/* Support Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/contact-us" className="text-sm text-gray-400 hover:text-white transition">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-conditions" className="text-sm text-gray-400 hover:text-white transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-400">123 Food Street, City, Country</p>
              <p className="text-sm text-gray-400">+1 234 567 890</p>
              <p className="text-sm text-gray-400">
                <a href="mailto:support@kinghub.com" className="hover:text-white transition">
                  support@kinghub.com
                </a>
              </p>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
            © 2025 KingHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;