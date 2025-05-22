import { Shield, Crosshair, Truck } from 'lucide-react';

const WeaponCard = ({ weapon, onClick }) => (
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
    onClick={() => onClick(weapon)}
  >
    <div className="relative h-56">
      <img
        src={weapon.image}
        alt={weapon.name}
        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-xl font-bold text-white mb-1">{weapon.name}</h3>
        <p className="text-gray-200 text-sm">{weapon.years}</p>
      </div>
    </div>
    <div className="p-4 space-y-1">
      <div className="flex items-center text-gray-700">
        <Crosshair className="w-4 h-4 text-[#C62828] mr-2" />
        <span>{weapon.type}</span>
      </div>
      <div className="flex items-center text-gray-700">
        <Truck className="w-4 h-4 text-[#C62828] mr-2" />
        <span>{weapon.usage}</span>
      </div>
    </div>
  </div>
);

export default WeaponCard;