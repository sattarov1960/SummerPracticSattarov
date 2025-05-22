import { X, Gauge, Shield, Crosshair, Users } from 'lucide-react';

const WeaponModal = ({ weapon, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
      <div className="relative">
        <button
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <img src={weapon.image} alt={weapon.name} className="w-full h-96 object-cover" />
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{weapon.name}</h2>
        <p className="text-gray-600 mb-4">{weapon.years}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <div className="flex items-center">
              <Crosshair className="w-5 h-5 text-[#C62828] mr-2" />
              <span>{weapon.type}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-[#C62828] mr-2" />
              <span>{weapon.usage}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <Gauge className="w-5 h-5 text-[#C62828] mr-2" />
              <span>Скорость: {weapon.specs.speed}</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-[#C62828] mr-2" />
              <span>Броня: {weapon.specs.armor}</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Описание</h3>
          <p className="text-gray-700">{weapon.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default WeaponModal;