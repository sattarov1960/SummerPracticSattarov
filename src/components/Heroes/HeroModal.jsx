import { Medal, Users, MapPin, Star, X } from 'lucide-react';

const HeroModal = ({ hero, onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div className="relative">
        <button
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <img src={hero.image} alt={hero.name} className="w-full h-96 object-cover" />
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{hero.name}</h2>
        <p className="text-gray-600 mb-4">{hero.dates}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Информация</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Medal className="w-5 h-5 text-[#C62828] mr-2" />
                <span>{hero.rank}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-[#C62828] mr-2" />
                <span>{hero.branch}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-[#C62828] mr-2" />
                <span>{hero.birthplace}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Награды</h3>
            <div className="space-y-2">
              {hero.awards.map((award, index) => (
                <div key={index} className="flex items-center">
                  <Star className="w-5 h-5 text-[#C62828] mr-2" />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Описание</h3>
          <p className="text-gray-700">{hero.description}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Подвиги</h3>
          <p className="text-gray-700">{hero.achievements}</p>
        </div>
      </div>
    </div>
  </div>
);

export default HeroModal;
