import React, { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { X } from 'lucide-react';

const documents = [
  {
    id: '1',
    title: 'Акт о безоговорочной капитуляции Германии',
    image: 'https://avatars.mds.yandex.net/i?id=149df5e93cfe061f59a710901b1a7f89714a540e-9882341-images-thumbs&n=13',
    description: 'Документ был подписан 8 мая 1945 года в Карлсхорсте представителями Германии и союзников. Он официально зафиксировал капитуляцию фашистской Германии. С этого момента Великая Отечественная война считалась завершённой. Подписи на акте поставили командующие союзных армий и представители СССР.'
  },
  {
    id: '2',
    title: 'Приказ №227 «Ни шагу назад!»',
    image: 'https://avatars.mds.yandex.net/i?id=79677be9642a293cfcd7361703dd50351ded5ef4-4446390-images-thumbs&n=13',
    description: 'Приказ И.В. Сталина был издан 28 июля 1942 года в критический момент войны. Он запрещал отступление без приказа и предусматривал создание заградотрядов. Этот документ сыграл роль в стабилизации фронта и поднятии боевого духа. Позднее стал одним из самых обсуждаемых и символичных военных актов.'
  },
  {
    id: '3',
    title: 'Приказ о создании штрафбатов',
    image: 'https://avatars.mds.yandex.net/i?id=13c507e8b8ff19e6d5e67569f0dfc216b5c72070-9222726-images-thumbs&n=13',
    description: 'Этот приказ был подписан в августе 1942 года и ввёл понятие "штрафные батальоны". Туда направлялись солдаты, совершившие проступки, но желавшие искупить вину. Многие из них проявили героизм на передовой. Штрафбаты стали неотъемлемой частью системы дисциплины военных лет.'
  },
  {
    id: '4',
    title: 'Речь Жукова на Параде Победы',
    image: 'https://avatars.mds.yandex.net/i?id=a1f1923071ed19465617157a433adb69d24b3091-5213492-images-thumbs&n=13',
    description: 'Маршал Жуков выступил 24 июня 1945 года на Красной площади. Его речь была обращена к солдатам, офицерам, труженикам тыла и всему народу. Это выступление стало кульминацией Парада Победы. Речь сохранилась в архивах и регулярно цитируется в памятные даты.'
  },
  {
    id: '5',
    title: 'Сводка Генштаба за 9 мая',
    image: 'https://avatars.mds.yandex.net/i?id=2a00000196edbda2420fb0cbcca7d64fcefb-1607718-fast-images&n=13',
    description: 'Сводка была подготовлена в ночь с 8 на 9 мая 1945 года. В ней указывались последние бои, капитуляции отдельных подразделений и обстановка на фронтах. Это был первый официальный военный отчёт после Победы. Сводка публиковалась в центральной прессе и зачитывалась по радио.'
  },
  {
    id: '6',
    title: 'Письмо солдата домой, май 1945',
    image: 'https://avatars.mds.yandex.net/i?id=cc14bbde7782b177449aa5c063457a0cbfcc8aba-5400140-images-thumbs&n=13',
    description: 'Письмо написано советским солдатом из Берлина 9 мая 1945 года. В нём он делится своей радостью от окончания войны и благодарностью семье. Также он выражает надежду, что ужасы войны не повторятся. Это письмо стало символом личного подвига и памяти о Победе.'
  }
];


const VictoryDocsPage = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="pt-20">
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Документы Победы</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Архивные приказы, речи, официальные бумаги и личные письма, рассказывающие о Победе.
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc) => (
              <div
                key={doc.id}
                onClick={() => setSelectedDoc(doc)}
                className="cursor-pointer bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <img src={doc.image} alt={doc.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {selectedDoc && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-xl relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setSelectedDoc(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedDoc.image} alt={selectedDoc.title} className="w-full h-80 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{selectedDoc.title}</h2>
              <p className="text-gray-700">{selectedDoc.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default VictoryDocsPage;
