import { Medal, Users, MapPin, Edit } from 'lucide-react';
import { useUI } from '../../context/UIContext';

const HeroCard = ({ hero, index }) => {
  const { openHeroModal, openEditHero } = useUI();

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 relative"
      onClick={() => openHeroModal(hero)}
    >
      <div className="relative h-64">
        <img
          src={hero.image}
          alt={hero.name}
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{hero.name}</h3>
          <p className="text-gray-200 text-sm">{hero.dates}</p>
        </div>

        {/* Иконка редактирования */}
        <div
          className="absolute top-3 right-3 bg-white rounded-full p-1 hover:bg-gray-200 z-10"
          onClick={(e) => {
            e.stopPropagation(); // Чтобы не срабатывал onClick карточки
            openEditHero(hero);
          }}
        >
          <Edit className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center mb-2">
          <Medal className="w-5 h-5 text-[#C62828] mr-2" />
          <span className="text-gray-700">{hero.rank}</span>
        </div>
        <div className="flex items-center mb-2">
          <Users className="w-5 h-5 text-[#C62828] mr-2" />
          <span className="text-gray-700">{hero.branch}</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-[#C62828] mr-2" />
          <span className="text-gray-700">{hero.birthplace}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
