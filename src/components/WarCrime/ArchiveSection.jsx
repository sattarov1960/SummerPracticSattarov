import React from 'react';

const archiveLinks = [
  {
    title: 'Документы о Хатыни',
    url: 'https://storyofvictory.sb.by/khatyn',
    type: 'Цифровая библиотека'
  },
  {
    title: 'Архив Бабьего Яра',
    url: 'https://babynyar.org/ru/archive',
    type: 'Сайт / Архив'
  },
  {
    title: 'Музей Саласпилса',
    url: 'https://salaspilsmemorials.lv/ru/sakumlapa-ru/',
    type: 'Официальный сайт'
  }
];

const ArchiveSection = () => (
  <section className="py-12 bg-[#1C1C1C] border-t border-gray-700">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-6">Архивные материалы</h2>
      <ul className="space-y-4">
        {archiveLinks.map((item, idx) => (
          <li key={idx} className="bg-[#2a2a2a] p-4 rounded-lg border border-gray-600">
            <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              {item.url}
            </a>
            <p className="text-sm text-gray-400">{item.type}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ArchiveSection;
