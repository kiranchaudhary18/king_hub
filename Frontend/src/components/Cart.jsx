import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Peppy Paneer Cheese Burst', price: 354, quantity: 1 },
    { id: 2, name: 'Margherita Pizza', price: 239, quantity: 1 },
    { id: 3, name: 'Mexican McAloo Tikki Burger', price: 150, quantity: 2 },
    { id: 4, name: 'Indi Tandoori Paneer Pizza', price: 150, quantity: 1 },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const updateQuantity = (id, action) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                action === 'add'
                  ? item.quantity + 1
                  : item.quantity > 1
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Cart Items */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Cart ({cartItems.length} Items)</h2>
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-500 py-6">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6 p-6"
                >
                  <div className="flex items-center">
                    <img
                      src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeeikefRy1BUDxwBE5K9nzF4dwPqcu90JpQ&s=${encodeURIComponent(item.name)}`}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="ml-6 flex-1">
                      <p className="text-xl font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <p className="text-lg font-medium text-gray-800">₹{item.price}</p>
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => updateQuantity(item.id, 'subtract')}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg focus:outline-none transition-colors duration-200"
                          >
                            -
                          </button>
                          <span className="text-gray-700 font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 'add')}
                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg focus:outline-none transition-colors duration-200"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 focus:outline-none transition-colors duration-200"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Delivery Address and Price Details */}
          <div className="w-full md:w-1/3">
            <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose a delivery address</h3>
              <div className="mb-6">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your location"
                />
                <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg focus:outline-none transition-all duration-200">
                  Add Location
                </button>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Login to use your saved addresses
                </label>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg focus:outline-none transition-all duration-200">
                  My Address
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Price Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-700">Sub Total</p>
                  <p className="font-medium text-gray-900">₹{calculateTotal()}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Discount</p>
                  <p className="font-medium text-gray-900">₹0</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Taxes and Charges</p>
                  <p className="font-medium text-gray-900">₹0</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <p className="text-lg font-bold text-gray-900">Grand Total</p>
                    <p className="text-lg font-bold text-gray-900">₹{calculateTotal()}</p>
                  </div>
                </div>
                <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-3 rounded-lg focus:outline-none transition-all duration-200">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;