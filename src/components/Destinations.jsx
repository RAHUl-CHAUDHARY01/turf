import React from 'react';

const destinations = [
  { name: 'France', image: '/images/france.jpg', vacations: 6 },
  { name: 'Indonesia', image: '/images/indonesia.jpg', vacations: 6 },
  { name: 'Greece', image: '/images/greece.jpg', vacations: 6 },
  { name: 'Egypt', image: '/images/egypt.jpg', vacations: 6 },
];

const Destinations = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Choose a Destination</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {destinations.map((dest) => (
          <div key={dest.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={dest.image} alt={dest.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
              <p className="text-gray-600">{dest.vacations} vacations</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Destinations;
