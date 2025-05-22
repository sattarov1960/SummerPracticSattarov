import React from 'react';
import { X } from 'lucide-react';

const MemorialModal = ({ memorial, onClose }) => (
  <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={memorial.image}
          alt={memorial.name}
          className="w-full h-96 object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{memorial.name}</h2>
        <p className="text-gray-600 mb-1 text-sm">{memorial.location} — {memorial.year}</p>
        <p className="text-gray-800 leading-relaxed mt-4">{memorial.description}</p>
      </div>
    </div>
  </div>
);

export default MemorialModal;