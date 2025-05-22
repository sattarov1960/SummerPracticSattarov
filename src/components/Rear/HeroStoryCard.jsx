import React from 'react';

const HeroStoryCard = ({ hero }) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden shadow border border-gray-200">
    <img src={hero.image} alt={hero.name} className="w-full h-60 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">{hero.name}</h3>
      <p className="text-sm text-gray-500 mb-1">{hero.role}, {hero.region}</p>
      <p className="text-sm text-gray-400 mb-2">Возраст в годы войны: {hero.ageDuringWar}</p>
      <p className="text-gray-700 text-sm leading-relaxed">{hero.story}</p>
    </div>
  </div>
);

export default HeroStoryCard;
