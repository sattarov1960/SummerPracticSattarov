import React, { useState, useEffect } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import MemorialCard from '../components/Memorials/MemorialCard';
import AddMemorial from '../components/Memorials/AddMemorial';
import MemorialModal from '../components/Memorials/MemorialModal';

const Memorials = () => {
  const [memorials, setMemorials] = useState([]);
  const [selectedMemorial, setSelectedMemorial] = useState(null);
  const [regionFilter, setRegionFilter] = useState('Все');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const regions = ['Все', 'Россия', 'Беларусь', 'Украина', 'Германия', 'Казахстан'];

  useEffect(() => {
    const fetchMemorials = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/memorials');
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.statusText}`);
        }
        const data = await response.json();
        setMemorials(data);
      } catch (err) {
        console.error('Ошибка при загрузке мемориалов:', err);
        setError('Не удалось загрузить данные');
      } finally {
        setLoading(false);
      }
    };

    fetchMemorials();
  }, []);

  const handleDeleteMemorial = async (id) => {
    if (window.confirm('Удалить мемориал?')) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/memorials/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Ошибка удаления');
        }
        setMemorials((prev) => prev.filter((m) => m.id !== id));
      } catch (err) {
        console.error(err);
        alert('Ошибка при удалении мемориала');
      }
    }
  };

  const filteredMemorials = memorials.filter(memorial => {
    const regionMatches = regionFilter === 'Все' || (memorial.location && memorial.location.includes(regionFilter));
    const searchMatches = memorial.name.toLowerCase().includes(searchTerm.toLowerCase());
    return regionMatches && searchMatches;
  });

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main>
        <section className="bg-[#1C1C1C] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Места Памяти</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Мемориалы, символизирующие жертву и подвиг советского народа в годы Великой Отечественной войны.
            </p>
          </div>
        </section>

        <section className="bg-white py-8 shadow-md">
          <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Поиск по названию..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg w-full md:max-w-xs"
            />
            <select
              value={regionFilter}
              onChange={e => setRegionFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg w-full md:max-w-xs"
            >
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {loading && <p className="col-span-full text-center text-gray-500">Загрузка...</p>}
            {error && <p className="col-span-full text-center text-red-500">{error}</p>}
            {!loading && !error && filteredMemorials.map(memorial => (
              <MemorialCard
                key={memorial.id}
                memorial={memorial}
                onClick={setSelectedMemorial}
                onDelete={handleDeleteMemorial}
              />
            ))}

            {!loading && !error && (
              <div
                onClick={() => setIsAdding(true)}
                className="border-2 border-dashed border-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer rounded-lg hover:bg-gray-100 transition-all"
              >
                <span className="text-4xl font-bold">+</span>
                <p className="mt-2 text-lg text-gray-600">Добавить мемориал</p>
              </div>
            )}
          </div>
        </section>

        {selectedMemorial && (
          <MemorialModal
            memorial={selectedMemorial}
            onClose={() => setSelectedMemorial(null)}
          />
        )}

        {isAdding && (
          <AddMemorial
            onAdd={(newMemorial) => {
              setMemorials(prev => [...prev, newMemorial]);
              setIsAdding(false);
            }}
            onCancel={() => setIsAdding(false)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Memorials;
