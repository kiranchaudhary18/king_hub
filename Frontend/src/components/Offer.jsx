import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OfferPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const offerSlides = [
    {
      image: 'https://res.cloudinary.com/dkombksnu/image/upload/v1740049183/zkdm63zrhlxptzroc6dr.png',
      title: 'DELIVERY',
      subtitle: 'UP TO 50% OFF',
      description: 'Get the best discounts on your favorite meals!',
      discount: '50% OFF',
      subtext: 'On your first order',
    },
    {
      image: 'https://res.cloudinary.com/dkombksnu/image/upload/v1740049213/n4nbl39lb0lpymnd4i0c.png',
      title: 'MEGA DEAL',
      subtitle: 'FLAT ₹100 OFF',
      description: 'Exclusive discounts for limited time.',
      discount: '₹100 OFF',
      subtext: 'Use Code: MEGA100',
    },
    {
      image: 'https://res.cloudinary.com/dkombksnu/image/upload/v1740143778/lc1lcprlsovhruakxdt8.png',
      title: 'NEW OFFER',
      subtitle: 'FLAT ₹200 OFF',
      description: 'Special deal for new users only.',
      discount: '₹200 OFF',
      subtext: 'Use Code: NEW200',
    }
  ];

  const availableOffers = [
    { icon: '🏷️', title: '50% OFF up to ₹100', description: 'Use code: WELCOME50', validity: 'Valid till 31 March 2023', terms: 'Min order ₹700 | All restaurants' },
    { icon: '💳', title: 'Flat ₹150 OFF', description: 'HDFC Bank Cards', validity: 'Valid till 15 April 2023', terms: 'Min order ₹500 | Selected restaurants' },
    { icon: '🍔', title: 'Buy 1 Get 1 Free', description: 'Premium Burgers', validity: 'Valid till 30 April 2023', terms: 'Selected outlets | Weekend only' },
    { icon: '🌙', title: '60% OFF on Late Night', description: '11 PM - 5 AM', validity: 'Valid till 1 May 2023', terms: 'Min order ₹300 | Selected restaurants' },
    { icon: '🍕', title: 'Free Pizza', description: 'On orders above ₹999', validity: 'Valid till 10 April 2023', terms: 'Pizza outlets | Limited time' },
    { icon: '🎂', title: 'Special Birthday Offer', description: '25% extra discount', validity: 'Valid throughout 2023', terms: 'Birthday month only | All restaurants' },
  ];

  const popularCuisines = [
    { name: 'Italian', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IVvRMCEFRY1M0eUz7W5VXlWwv8XeQ_WSuQ&s' },
    { name: 'Mexican', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxZBvj9TN6Zu7mIN8SEuscYJCQ1hGHpFoUw&s' },
    { name: 'Indian', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0faqgSpFHkRI0b-qK5ew7MKdkAHD-ve0VfQ&s' },
    { name: 'Chinese', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnDjqO5Hq0YNI81biaJNB42XRPfgNNciJhtg&s' },
    { name: 'Japanese', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCeIRBsNcKZFdsKdPhkYR-mXfzRWdkKcDCJQ&s' },
  ];

  const faqs = [
    {
      question: 'How do I place an order?',
      answer: 'Browse through our restaurant menus, add items to your cart, and proceed to checkout. Your food will be delivered to your doorstep.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit/debit cards, UPI, and cash on delivery.',
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes, you can track your order in real-time using the tracking feature in the app.',
    },
    {
      question: 'What if my food arrives late?',
      answer: 'We strive to deliver on time, but if there’s a delay, please contact our support team for assistance.',
    },
    {
      question: 'Do you have vegetarian options?',
      answer: 'Yes, most of our partner restaurants offer vegetarian dishes. You can filter by dietary preferences.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % offerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Special Offers</h1>
      </header>

      {/* Offer Slider */}
      <section className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Static Container */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg bg-white p-6 text-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Dynamic Image */}
          <motion.img
            key={offerSlides[currentSlide].image} // Key ensures smooth transitions for the image
            src={offerSlides[currentSlide].image}
            alt={offerSlides[currentSlide].title}
            className="w-full h-64 object-cover mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Dynamic Title */}
          <motion.h2
            key={offerSlides[currentSlide].title} // Key ensures smooth transitions for the title
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {offerSlides[currentSlide].title}
          </motion.h2>

          {/* Dynamic Subtitle */}
          <motion.p
            key={offerSlides[currentSlide].subtitle} // Key ensures smooth transitions for the subtitle
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {offerSlides[currentSlide].subtitle}
          </motion.p>

          {/* Dynamic Description */}
          <motion.p
            key={offerSlides[currentSlide].description} // Key ensures smooth transitions for the description
            className="text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {offerSlides[currentSlide].description}
          </motion.p>

          {/* Dynamic Discount */}
          <motion.p
            key={offerSlides[currentSlide].discount} // Key ensures smooth transitions for the discount
            className="text-red-600 font-bold text-lg mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {offerSlides[currentSlide].discount}
          </motion.p>

          {/* Dynamic Subtext */}
          <motion.p
            key={offerSlides[currentSlide].subtext} // Key ensures smooth transitions for the subtext
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {offerSlides[currentSlide].subtext}
          </motion.p>
        </motion.div>
      </div>
    </section>

      {/* Available Offers */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Available Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableOffers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{offer.icon}</span>
                  <h3 className="text-xl font-semibold">{offer.title}</h3>
                </div>
                <p className="text-gray-600 mb-2">{offer.description}</p>
                <p className="text-green-600 font-bold">{offer.validity}</p>
                <p className="text-sm text-gray-500">{offer.terms}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cuisines */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">Popular Cuisines</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {popularCuisines.map((cuisine, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <img src={cuisine.image} alt={cuisine.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">{cuisine.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refer & Earn */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Refer & Earn</h2>
          <p className="text-lg mb-6">Invite your friends and get ₹200 off on your next order!</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-300 ease-in-out cursor-pointer">
            Refer Now
          </button>
        </div>
      </section>

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

export default OfferPage;