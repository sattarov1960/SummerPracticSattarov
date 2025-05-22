import React from 'react';

const MemorialCard = ({ memorial, onClick }) => (
  <div
    className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
    onClick={() => onClick(memorial)}
  >
    <img
      src={memorial.image}
      alt={memorial.name}
      className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
      <h3 className="text-2xl font-bold text-white drop-shadow-md">{memorial.name}</h3>
      <p className="text-sm text-gray-200">{memorial.location}</p>
    </div>
  </div>
);

export default MemorialCard;