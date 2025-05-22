import React, { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import MemorialCard from '../components/Memorials/MemorialCard';
import MemorialModal from '../components/Memorials/MemorialModal';

const dummyMemorials = [
  {
    id: '1',
    name: 'Мамаев курган',
    location: 'Волгоград, Россия',
    year: 1967,
    image: 'https://avatars.mds.yandex.net/i?id=55f52d178b82fac2801ed2b6978ee76837ce99ba-4935775-images-thumbs&n=13',
    description: 'Один из крупнейших памятников мира, посвящённый Сталинградской битве. Центральная фигура — «Родина-мать зовёт!» высотой 85 метров, символ мужества. Комплекс включает братские могилы, вечный огонь и террасу воинской славы. Место стало символом несгибаемости советского народа.'
  },
  {
    id: '2',
    name: 'Пискарёвское кладбище',
    location: 'Санкт-Петербург, Россия',
    year: 1960,
    image: 'https://avatars.mds.yandex.net/i?id=be66dacff5364cac4b664c1539c68c41252f59f0-5282838-images-thumbs&n=13',
    description: 'Мемориальное кладбище жертв блокады Ленинграда. Здесь захоронено более 500 000 человек — мирных жителей и солдат. Мемориал включает вечный огонь, статуи и надписи, символизирующие стойкость. Это одно из самых скорбных и святых мест России.'
  },
  {
    id: '3',
    name: 'Поклонная гора',
    location: 'Москва, Россия',
    year: 1995,
    image: 'https://avatars.mds.yandex.net/i?id=b2c53caf211b52e8f509621f890655d7fd17c1ca-4351135-images-thumbs&n=13',
    description: 'Один из главных мемориалов победы в Великой Отечественной войне. Включает Музей Победы, обелиск, храмы и выставки военной техники. Является местом массовых празднований 9 мая. Символизирует общенародную память и воинскую доблесть.'
  },
  {
    id: '4',
    name: 'Брестская крепость',
    location: 'Брест, Беларусь',
    year: 1971,
    image: 'https://avatars.mds.yandex.net/i?id=537b2496744d6558b668ea1340b610229775a5a7-4737877-images-thumbs&n=13',
    description: 'Мемориал защитникам Брестской крепости, принявшим на себя первый удар 22 июня 1941 года. Скульптуры «Жажда» и «Мужество» стали символами героизма. Комплекс включает музей, руины крепости и вечный огонь. Это место начало отсчёт истории войны.'
  },
  {
    id: '5',
    name: 'Хатынь',
    location: 'Минская область, Беларусь',
    year: 1969,
    image: 'https://avatars.mds.yandex.net/i?id=eaa5e332b8cc0acfddac8560d4e19cd021c0bf50-10018920-images-thumbs&n=13',
    description: 'Мемориал уничтоженной деревне Хатынь и сожжённым вместе с жителями 186 деревням Беларуси. Главная скульптура — мужчина с погибшим ребёнком. Колокола и дымящиеся трубы напоминают о трагедии. Это национальный символ боли и памяти.'
  },
  {
    id: '6',
    name: 'Родина-мать (Киев)',
    location: 'Киев, Украина',
    year: 1981,
    image: 'https://avatars.mds.yandex.net/i?id=c37f15965af79db61a9e72a607493865cab1f8d4-10636447-images-thumbs&n=13',
    description: 'Гигантская статуя высотой 102 метра, увенчанная мечом и щитом. Входит в состав Музея истории Украины во Второй мировой войне. Видна практически с любой точки Киева. Символизирует силу и независимость народа.'
  },
  {
    id: '7',
    name: 'Трептов-парк',
    location: 'Берлин, Германия',
    year: 1949,
    image: 'https://avatars.mds.yandex.net/i?id=88fb7bfafeb57b54c9bcb4a79130618343fa96e4-5075316-images-thumbs&n=13',
    description: 'Мемориал советским солдатам, павшим в боях за Берлин. Центральная фигура — солдат с ребёнком и мечом, разбивающим свастику. Вокруг — братские могилы и барельефы. Один из крупнейших памятников Красной армии за рубежом.'
  },
  {
    id: '8',
    name: 'Парк 28 панфиловцев',
    location: 'Алматы, Казахстан',
    year: 1975,
    image: 'https://avatars.mds.yandex.net/i?id=93e0e231bc656e957834b10cded1559f6f42e4ec-9053088-images-thumbs&n=13',
    description: 'Мемориал героическим бойцам дивизии Панфилова, сражавшимся под Москвой. В центре — внушительный барельеф с лицами солдат. Комплекс окружён вечным огнём и аллеями памяти. Символ воинского братства и подвига казахстанцев.'
  },
  {
    id: '9',
    name: 'Малая земля',
    location: 'Новороссийск, Россия',
    year: 1982,
    image: 'https://avatars.mds.yandex.net/i?id=25a3a1ba855115ce7dcc05988caa228f3d9ef9c7-5522477-images-thumbs&n=13',
    description: 'Монумент в честь морского десанта 1943 года. Архитектурный образ напоминает надвигающийся корабль. Внутри находится музей и зала памяти. Комплекс символизирует силу духа защитников Кавказа.'
  },
  {
    id: '10',
    name: 'Мемориал Славы',
    location: 'Хабаровск, Россия',
    year: 1975,
    image: 'https://avatars.mds.yandex.net/i?id=be2ed84e06c59507907fae04c640e3850d524f6f-10310841-images-thumbs&n=13',
    description: 'Памятник воинам-дальневосточникам, участвовавшим в Великой Отечественной. Три скульптуры символизируют разные рода войск. Мемориал расположен в центре города у набережной Амура. Место торжеств и военных парадов.'
  }
];

const Memorials = () => {
  const [selectedMemorial, setSelectedMemorial] = useState(null);
  const [regionFilter, setRegionFilter] = useState('Все');
  const [searchTerm, setSearchTerm] = useState('');

  const regions = ['Все', 'Россия', 'Беларусь', 'Украина', 'Германия', 'Казахстан'];

  const filteredMemorials = dummyMemorials.filter(memorial => {
    const regionMatches = regionFilter === 'Все' || memorial.location.includes(regionFilter);
    const searchMatches = memorial.name.toLowerCase().includes(searchTerm.toLowerCase());
    return regionMatches && searchMatches;
  });

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="">
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
            {filteredMemorials.map(memorial => (
              <MemorialCard
                key={memorial.id}
                memorial={memorial}
                onClick={setSelectedMemorial}
              />
            ))}
          </div>
        </section>

        {selectedMemorial && (
          <MemorialModal
            memorial={selectedMemorial}
            onClose={() => setSelectedMemorial(null)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Memorials;