import React from 'react';

const CrimeCard = ({ crime }) => (
  <div className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg border border-gray-700">
    <img src={crime.image} alt={crime.title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{crime.title}</h3>
      <p className="text-sm text-gray-400 mb-1">{crime.location}, {crime.year}</p>
      <p className="text-gray-300 text-sm leading-relaxed">{crime.description}</p>
    </div>
  </div>
);

export default CrimeCard;
