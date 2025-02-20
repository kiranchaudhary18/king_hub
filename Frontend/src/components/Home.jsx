import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Footer from './Footer';
import PopularLocalities from './Location';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleExploreMenu = () => {
    navigate('/menu'); // Navigate to the Menu page
  };

  const handleOrderNow = () => {
    navigate('/restaurants'); // Navigate to the restaurants page
  };

   const [openFAQIndex, setOpenFAQIndex] = useState(null);

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

  return (

    <div className="max-screen bg-gradient-to-br from-red-500 to-green-500 font-sans">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Delicious Food Delivered to Your Doorstep
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-8">
            Enjoy your favorite meals from top-rated restaurants near you.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleOrderNow}
              className="bg-white text-red-500 font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 cursor-pointer">
              Order Now
            </button>
            <button
              onClick={handleExploreMenu} // Add onClick handler
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-red-500 transition duration-300 cursor-pointer"
            >
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Featured Restaurants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Restaurant Card */}
            {[
              {
                name: "Burger King",
                cuisine: "Fast Food",
                price: "$",
                rating: "4.5 (1.2k)",
                image:
                  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
              },
              {
                name: "Pizza Hut",
                cuisine: "Italian",
                price: "$$",
                rating: "4.7 (2.5k)",
                image:
                  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
              },
              {
                name: "Sushi House",
                cuisine: "Japanese",
                price: "$$$",
                rating: "4.8 (3.1k)",
                image:
                  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
              },
            ].map((restaurant, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">View More</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {restaurant.name}
                  </h3>
                  <p className="text-gray-700">
                    {restaurant.cuisine} • {restaurant.price} • ⭐ {restaurant.rating}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white bg-opacity-10">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-black text-center mb-12">
      How It Works
    </h2>
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Step 1 */}
      <div className="flex flex-col items-center relative">
        <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          1
        </div>
        <h3 className="text-xl font-semibold text-black mt-4">Choose Your Meal</h3>
        <p className="text-black text-center">Browse through our extensive menu options.</p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center relative">
        <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          2
        </div>
        <h3 className="text-xl font-semibold text-black mt-4">Place Your Order</h3>
        <p className="text-black text-center">Select your favorites and check out securely.</p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center relative">
        <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          3
        </div>
        <h3 className="text-xl font-semibold text-black mt-4">Track Your Order</h3>
        <p className="text-black text-center">Follow your order in real-time.</p>
      </div>

      {/* Step 4 */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          4
        </div>
        <h3 className="text-xl font-semibold text-black mt-4">Enjoy Your Food</h3>
        <p className="text-black text-center">Receive and enjoy your delicious meal.</p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center shadow-lg">
              <p className="text-black italic mb-4">
                "The food was amazing, and the delivery was super fast!"
              </p>
              <div className="flex items-center justify-center mt-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORyQzNiEfMRaKvWyir-CcQ6EX7pMFfuhCRA&s" alt="John Doe" className="w-10 h-10 rounded-full mr-3" />
                <p className="font-semibold text-black">John Doe</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center shadow-lg">
              <p className="text-black italic mb-4">
                "I love the variety of options available. Highly recommend!"
              </p>
              <div className="flex items-center justify-center mt-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAvN-aze1APwMZW6MErdau1RVDwA9aD_9_Q&s" alt="Jane Smith" className="w-10 h-10 rounded-full mr-3" />
                <p className="font-semibold text-black">Jane Smith</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center shadow-lg">
              <p className="text-black italic mb-4">
                "Best food delivery service I've ever used. Keep it up!"
              </p>
              <div className="flex items-center justify-center mt-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrwV_UKE0oghzxOIgNQeBsv3EdnIK044fnw&s" alt="Alex Johnson" className="w-10 h-10 rounded-full mr-3" />
                <p className="font-semibold text-black">Alex Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopularLocalities />
      
      {/* Footer Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg">
                {/* Question */}
                <button
                  onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-colors duration-300 ease-in-out"
                >
                  <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                  <span className="text-xl text-gray-600">
                    {openFAQIndex === index ? '-' : '+'}
                  </span>
                </button>

                {/* Answer */}
                {openFAQIndex === index && (
                <div className="bg-white p-6 rounded-b-md border border-t-0 border-gray-300">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;