import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("https://king-hub-1.onrender.com/api/restaurants");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <div className="text-center text-xl py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-10">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">All Restaurants</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant._id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="relative">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              {restaurant.isPromoted && (
                <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Promoted
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
              <p className="text-gray-700 text-sm">{restaurant.cuisine} • {restaurant.price} • ⭐ {restaurant.rating}</p>
              <p className="text-gray-600 text-sm">{restaurant.location}</p>

              {restaurant.discount && (
                <div className="mt-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 inline-block rounded">
                  {restaurant.discount}
                </div>
              )}

              {/* Opening Time */}
              <p className="text-red-500 font-semibold mt-2 text-sm">
                {restaurant.openingTime}
              </p>

              {/* Contact Details */}
              <p className="text-gray-700 text-sm mt-2">
                📞 Contact: <span className="font-medium">{restaurant.contact}</span>
              </p>

              <button
                onClick={() => navigate(`/restaurants/${restaurant._id}`)}
                className="mt-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full shadow-md hover:from-blue-500 hover:to-purple-600 transition duration-300 ease-in-out"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsPage;
