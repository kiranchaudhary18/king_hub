import React, { useState, useEffect } from 'react';

const PaymentCancelPage = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    total: (Math.random() * 1000).toFixed(2),
    items: [
      { name: 'Cancelled Service', price: (Math.random() * 500).toFixed(2) },
      { name: 'Additional Feature', price: (Math.random() * 300).toFixed(2) }
    ]
  });

  // Generate a random order number
  useEffect(() => {
    const generateOrderNumber = () => {
      return `#${Math.floor(100000 + Math.random() * 900000)}`;
    };
    setOrderNumber(generateOrderNumber());
  }, []);

  // Copy order number
  const copyOrderNumber = () => {
    navigator.clipboard.writeText(orderNumber);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Create subtle background pattern
  const BackgroundPattern = () => (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div 
          key={i} 
          className="absolute bg-red-100 rounded-full" 
          style={{
            width: `${Math.random() * 100 + 20}px`,
            height: `${Math.random() * 100 + 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.2
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden p-4">
      {/* Subtle Background Pattern */}
      <BackgroundPattern />

      {/* Main Content Container */}
      <div 
        className="relative z-10 bg-red-50 rounded-2xl shadow-2xl p-8 sm:p-12 max-w-2xl w-full"
      >
        {/* Cancellation Indicator */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-24 w-24 text-red-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1} 
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
            Payment Cancelled
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-xl">
            Your transaction has been cancelled. If this was unintentional, you can retry the payment or contact support.
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-700">Order Number:</span>
            <div className="flex items-center">
              <span className="font-bold text-red-700 mr-2">{orderNumber}</span>
              <button 
                onClick={copyOrderNumber}
                className="text-gray-500 hover:text-red-600 transition"
                aria-label="Copy Order Number"
              >
                {isCopied ? (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-red-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                ) : (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Order Item Details */}
          <div className="space-y-2 mb-4">
            {orderDetails.items.map((item, index) => (
              <div key={index} className="flex justify-between text-gray-600 line-through">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-red-700 line-through">${orderDetails.total}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => {/* Retry Payment */}}
              className="flex items-center justify-center bg-yellow-100 text-yellow-700 py-3 rounded-lg hover:bg-yellow-200 transition transform hover:scale-105 active:scale-95"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                />
              </svg>
              Retry Payment
            </button>
            <button 
              onClick={() => {/* Contact Support */}}
              className="flex items-center justify-center bg-purple-100 text-purple-700 py-3 rounded-lg hover:bg-purple-200 transition transform hover:scale-105 active:scale-95"
            >
              Contact Support
            </button>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center">
          <a
            href="/"
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300 shadow-lg transform hover:scale-105 active:scale-95"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelPage;