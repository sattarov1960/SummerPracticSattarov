import React, { useState, useEffect } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import WeaponCard from '../components/VictoryWeapons/WeaponCard';
import WeaponModal from '../components/VictoryWeapons/WeaponModal';

const weaponTypes = ['Все', 'Пехотное', 'Артиллерия', 'Авиация', 'Бронетехника', 'Флот'];

const VictoryWeapons = () => {
  const [weapons, setWeapons] = useState([]);
  const [selectedType, setSelectedType] = useState('Все');
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/victory-weapons');
        if (!response.ok) {
          throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
        }
        const data = await response.json();
        setWeapons(data);
      } catch (err) {
        console.error('Ошибка при загрузке оружия:', err);
        setError('Не удалось загрузить данные оружия');
      } finally {
        setLoading(false);
      }
    };

    fetchWeapons();
  }, []);

  const filteredWeapons = weapons
    .filter(w => selectedType === 'Все' || w.type === selectedType)
    .sort((a, b) => sortOrder === 'asc' ? a.startYear - b.startYear : b.startYear - a.startYear);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main>
        <section className="bg-[#1C1C1C] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Оружие Победы
              <span className="block mt-2 w-24 h-1 bg-[#C62828] mx-auto"></span>
            </h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              Основные образцы техники и вооружения, сыгравшие ключевую роль в Победе
            </p>
          </div>
        </section>

        <section className="bg-white py-8 shadow-md">
          <div className="container mx-auto px-4 flex flex-wrap gap-4 justify-center items-center">
            {weaponTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2 rounded-lg border transition-colors duration-200 ${
                  selectedType === type
                    ? 'bg-[#C62828] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Сначала ранние</option>
              <option value="desc">Сначала поздние</option>
            </select>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading && <p className="col-span-full text-center text-gray-500">Загрузка...</p>}
            {error && <p className="col-span-full text-center text-red-500">{error}</p>}
            {!loading && !error && filteredWeapons.map(w => (
              <WeaponCard key={w.id} weapon={w} onClick={setSelectedWeapon} />
            ))}
          </div>
        </section>

        {selectedWeapon && (
          <WeaponModal weapon={selectedWeapon} onClose={() => setSelectedWeapon(null)} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default VictoryWeapons;
