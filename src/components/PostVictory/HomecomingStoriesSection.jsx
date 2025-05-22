import React from 'react';

const stories = [
  {
    id: 1,
    title: 'Возвращение домой',
    image: 'https://avatars.mds.yandex.net/i?id=f78b9de03880a4549a3e1eab365cb97a835b7d75-5231932-images-thumbs&n=13',
    text: 'Миллионы солдат вернулись с фронта к разрушенным домам. Встречи с родными были слезами и радостью. Но не все вернулись. Память о погибших оставалась в каждой семье.'
  },
  {
    id: 2,
    title: 'Женщины ждали годами',
    image: 'https://avatars.mds.yandex.net/i?id=762d350a2cbb014a758c49eb1d1648d1-4234813-images-thumbs&n=13',
    text: 'Многие вдовы не дожидались вестей и продолжали работать. Каждый поезд с фронта — шанс на чудо. Во дворах вывешивали списки вернувшихся. Люди узнавали друг друга спустя годы.'
  },
  {
    id: 3,
    title: 'Встречи на вокзалах',
    image: 'https://avatars.mds.yandex.net/i?id=302bcbeae7d70965a9720c4444d847927a1e8c20-11844875-images-thumbs&n=13',
    text: 'Толпы людей стояли на перронах в ожидании своих героев. Объятия, слёзы и цветы стали частью каждого возвращения. Для многих это было начало новой жизни. Даже малознакомые встречались как братья.'
  },
  {
    id: 4,
    title: 'Письма с фронта',
    image: 'https://avatars.mds.yandex.net/i?id=9fef5f7d61f8750f4c91976c49b45ac4518d4ed0-4145917-images-thumbs&n=13',
    text: 'Не все солдаты смогли вернуться живыми, но оставили письма. Эти треугольники хранили в шкафах десятилетиями. В них — любовь, страх, надежда. Письма стали ниточкой памяти между поколениями.'
  },
  {
    id: 5,
    title: 'Дети ждали отцов',
    image: 'https://avatars.mds.yandex.net/i?id=d5f4521879f5498582c03427ac6d9ad7728b9d3d-8548977-images-thumbs&n=13',
    text: 'Дети войны взрослели раньше времени. Они встречали отцов, которых не видели годами. Иногда отцы не узнавали подросших детей. Эти сцены врезались в память навсегда.'
  },
  {
    id: 6,
    title: 'Возвращение инвалидов войны',
    image: 'https://avatars.mds.yandex.net/i?id=ac61e158a5eceed053f4ac2bd680fe6db64c1bef-6630857-images-thumbs&n=13',
    text: 'Многие бойцы вернулись с тяжёлыми ранениями. Их ждали не только родные, но и долгие годы борьбы за нормальную жизнь. Общество встречало их с уважением и болью. Инвалиды войны стали живыми напоминаниями о цене Победы.'
  }
];



const HomecomingStoriesSection = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Возвращение с войны</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map(story => (
          <div key={story.id} className="bg-gray-50 rounded-lg overflow-hidden shadow">
            <img src={story.image} alt={story.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{story.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomecomingStoriesSection;
