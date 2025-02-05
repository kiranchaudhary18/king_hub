import React from 'react';

const PopularLocalities = () => {
  const localities = [
    { name: 'Bodakdev', places: 485 },
    { name: 'Navrangpura', places: 408 },
    { name: 'Prahlad Nagar', places: 254 },
    { name: 'Satellite', places: 426 },
    { name: 'Vastrapur', places: 308 },
    { name: 'C G Road', places: 113 },
    { name: 'Gurukul', places: 125 },
    { name: 'Thaltej', places: 466 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Popular localities in and around Ahmedabad</h1>
      <div className="grid grid-cols-3 gap-4">
        {localities.map((locality, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{locality.name}</p>
              <p className="text-gray-600">{locality.places} places</p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ))}
        <div className="bg-white rounded-lg shadow-md p-4 flex justify-center items-center">
          <div className="flex items-center space-x-2">
            <p className="text-gray-600">see more</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularLocalities;