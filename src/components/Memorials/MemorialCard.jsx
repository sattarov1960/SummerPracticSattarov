import React from 'react';
import { Trash2 } from 'lucide-react';

const MemorialCard = ({ memorial, onClick, onDelete }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg group">
    <img
      src={memorial.image}
      alt={memorial.name}
      className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
      onClick={() => onClick(memorial)}
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
      <h3 className="text-2xl font-bold text-white drop-shadow-md">{memorial.name}</h3>
      <p className="text-sm text-gray-200">{memorial.location}</p>
    </div>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDelete(memorial.id);
      }}
      className="absolute top-2 right-2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
    >
      <Trash2 className="w-5 h-5" />
    </button>
  </div>
);

export default MemorialCard;
