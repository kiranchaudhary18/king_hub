import React from 'react';
import Footer from './Footer';
import PopularLocalities from './Location';

const HomePage = () => {

  const handleOrderNow = () => {
    navigate('/restaurants'); // Navigate to the restaurants page
  };


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
              className="bg-white text-red-500 font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300">
              Order Now
            </button>
            <button
              onClick={handleExploreMenu} // Add onClick handler
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-red-500 transition duration-300"
            >
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured Restaurants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Restaurant Card 1 */}
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Restaurant 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-black mb-2">Burger King</h3>
              <p className="text-black">Fast Food • $ • 4.5 (1.2k)</p>
            </div>
            {/* Restaurant Card 2 */}
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Restaurant 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-black mb-2">Pizza Hut</h3>
              <p className="text-black">Italian • $$ • 4.7 (2.5k)</p>
            </div>
            {/* Restaurant Card 3 */}
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Restaurant 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-black mb-2">Sushi House</h3>
              <p className="text-black">Japanese • $$$ • 4.8 (3.1k)</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white bg-opacity-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Choose Your Meal</h3>
              <p className="text-black">
                Browse through our wide selection of delicious meals.
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Place Your Order</h3>
              <p className="text-black">
                Select your favorite dishes and place your order easily.
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Track Your Order</h3>
              <p className="text-black">
                Get real-time updates on your order status.
              </p>
            </div>
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-black">4</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Enjoy Your Food</h3>
              <p className="text-black">
                Savor the taste of freshly prepared meals at your doorstep.
              </p>
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
              <p className="font-semibold text-black">- John Doe</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center shadow-lg">
              <p className="text-black italic mb-4">
                "I love the variety of options available. Highly recommend!"
              </p>
              <p className="font-semibold text-black">- Jane Smith</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white bg-opacity-20 rounded-lg p-6 text-center shadow-lg">
              <p className="text-black italic mb-4">
                "Best food delivery service I've ever used. Keep it up!"
              </p>
              <p className="font-semibold text-black">- Alex Johnson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}

      <Footer />
    </div>
  );
};

export default HomePage;