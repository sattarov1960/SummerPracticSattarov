import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import HeroCard from '../components/Heroes/HeroCard';
import HeroModal from '../components/Heroes/HeroModal';
import AddHero from '../components/Heroes/AddHero';
import EditHero from '../components/Heroes/EditHero';
import { useHeroes } from '../context/HeroContext';
import { useUI } from '../context/UIContext';

const Heroes = () => {
  const { heroes, addHero, updateHero, deleteHero } = useHeroes();
  const {
    isAddingHero, isEditHero, selectedHero, selectedEditHero,
    openAddHero, closeAddHero, openEditHero, closeEditHero, openHeroModal, closeHeroModal
  } = useUI();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('all');

  const branches = ['Генералиссимус', 'Сухопутные войска', 'Военно-воздушные силы', 'Военно-морской флот', 'Пехота'];

  const filteredHeroes = useMemo(() => {
    return heroes.filter(hero => {
      const matchesSearch = hero.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBranch = selectedBranch === 'all' || hero.branch === selectedBranch;
      return matchesSearch && matchesBranch;
    });
  }, [heroes, searchTerm, selectedBranch]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main>
        <section className="bg-[#1C1C1C] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Герои войны
              <span className="block mt-2 w-24 h-1 bg-[#C62828] mx-auto"></span>
            </h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              Истории подвигов и мужества героев Великой Отечественной войны
            </p>
          </div>
        </section>

        <section className="bg-white py-8 shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Поиск по имени..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C62828]"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
              >
                <option value="all">Все рода войск</option>
                {branches.map(branch => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHeroes.map((hero, index) => (
                <HeroCard
                  key={hero.id}
                  hero={hero}
                  index={index}
                  onClick={() => openHeroModal(hero)}
                  onEdit={() => openEditHero(hero)}
                />
              ))}

              <div
                onClick={openAddHero}
                className="border-2 border-dashed border-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer rounded-lg hover:bg-gray-100 transition-all"
              >
                <span className="text-4xl font-bold">+</span>
                <p className="mt-2 text-lg text-gray-600">Добавить героя</p>
              </div>
            </div>
          </div>
        </section>

        {selectedHero && <HeroModal hero={selectedHero} onClose={closeHeroModal} />}
      </main>

      <Footer />

      {isAddingHero && (
        <AddHero
          onAddHero={addHero}
          onCancel={closeAddHero}
        />
      )}

      {isEditHero && (
        <EditHero
          hero={selectedEditHero}
          onUpdateHero={updateHero}
          onDeleteHero={deleteHero}
          onCancel={closeEditHero}
        />
      )}
    </div>
  );
};

export default Heroes;
