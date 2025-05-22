import React from 'react';

const cities = [
  {
    name: 'Сталинград',
    image: 'https://avatars.mds.yandex.net/i?id=017a399f5ccfbee80010ab0571b0621357144b48-5151471-images-thumbs&n=13',
    text: 'Разрушен на 90%. Восстановление шло до 1950-х годов. Возведены новые дома, мосты, памятники.'
  },
  {
    name: 'Минск',
    image: 'https://avatars.mds.yandex.net/i?id=f416f4b1e105687befa762720dbe06420ca35f14-4719838-images-thumbs&n=13',
    text: 'Почти стёрт с лица земли. Восстановлен усилиями всего Советского Союза. Город-герой с новым обликом.'
  }
];

const ReconstructionGrid = () => (
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Восстановление страны</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cities.map((city, index) => (
          <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={city.image} alt={city.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{city.name}</h3>
              <p className="text-gray-700 text-sm">{city.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReconstructionGrid;