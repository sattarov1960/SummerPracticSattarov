import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import CrimeCard from '@components/WarCrime/CrimeCard';
import GallerySection from '@components/WarCrime/GallerySection';
import ArchiveSection from '@components/WarCrime/ArchiveSection';

const dummyCrimes = [
  {
    id: '1',
    title: 'Расстрел в Хатыни',
    location: 'Хатынь, Беларусь',
    year: 1943,
    image: 'https://avatars.mds.yandex.net/i?id=2acb87759c6d1b89f94e257e5c206f6c22affeaa-2368479-images-thumbs&n=13',
    description: '22 марта 1943 года карательный отряд сжёг деревню Хатынь вместе с жителями. В живых остались лишь несколько человек. Это символ трагедии 186 сожжённых деревень Беларуси. Преступление стало одним из ярчайших примеров геноцида.'
  },
  {
    id: '2',
    title: 'Бабий Яр',
    location: 'Киев, Украина',
    year: 1941,
    image: 'https://avatars.mds.yandex.net/i?id=ae6ed269ff5ddb0a85bc4c0f519c81c95a033e76-8491894-images-thumbs&n=13',
    description: '29–30 сентября 1941 года нацисты расстреляли более 33 000 евреев. Это было одно из крупнейших массовых убийств Холокоста. Место памяти стало символом бесчеловечности. Впоследствии здесь были убиты и другие группы людей.'
  },
  {
    id: '3',
    title: 'Детский концлагерь Саласпилс',
    location: 'Латвия',
    year: 1942,
    image: 'https://avatars.mds.yandex.net/i?id=e765fefa9a8114af85d5ff72978d4c2ea653e073-5014030-images-thumbs&n=13',
    description: 'В лагере содержались тысячи детей. Многие умерли от голода, болезней, медицинских опытов. Мемориал в Латвии напоминает о трагедии детских жертв войны. Это место стало символом невинного страдания.'
  },
  {
    id: '4',
    title: 'Массовое уничтожение в Харькове',
    location: 'Харьков, Украина',
    year: 1941,
    image: 'https://avatars.mds.yandex.net/i?id=a7914623317d09a3cdefe512b489d8c578ecf2af-8186070-images-thumbs&n=13',
    description: 'После оккупации города нацисты устроили массовые казни евреев, коммунистов и партизан. Одним из мест массового расстрела стало урочище Дробицкий Яр. Здесь были убиты тысячи мирных жителей. Памятник напоминает о трагедии Харькова.'
  },
  {
    id: '5',
    title: 'Сожжение деревни Ола',
    location: 'Гомельская область, Беларусь',
    year: 1944,
    image: 'https://i.ytimg.com/vi/BvRON6nGNt4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgUyhSMA8=&amp;rs=AOn4CLDK5bZJjNDF9YLy6YXPbpdWQsYqRw',
    description: 'В феврале 1944 года фашисты окружили деревню и уничтожили более 1 700 мирных жителей. Людей сжигали заживо в сараях. Среди погибших было много женщин и детей. Место трагедии стало символом народной боли.'
  },
  {
    id: '6',
    title: 'Концлагерь Аушвиц (Освенцим)',
    location: 'Польша',
    year: 1940,
    image: 'https://avatars.mds.yandex.net/i?id=ae2864a940c989e05c2115a389267dabc5659a1c-10257390-images-thumbs&n=13',
    description: 'Самый известный лагерь смерти, где было убито более миллиона человек, преимущественно евреев. Заключённых массово убивали в газовых камерах. Лагерь стал символом Холокоста. Освенцим — вечное напоминание о чудовищности нацизма.'
  },
  {
    id: '7',
    title: 'Резня в Ейске',
    location: 'Ейск, Краснодарский край, СССР',
    year: 1942,
    image: 'https://avatars.mds.yandex.net/i?id=6ae09e3b4ab78783247ed49e5828043d3941d0e7-12441729-images-thumbs&n=13',
    description: 'Осенью 1942 года в городе были уничтожены более 200 еврейских детей-сирот. Их утопили в противогазах в грузовиках. Это было целенаправленное истребление. В городе установлен мемориал погибшим детям.'
  },
  {
    id: '8',
    title: 'Катынский расстрел',
    location: 'Смоленская область, Россия',
    year: 1940,
    image: 'https://avatars.mds.yandex.net/i?id=9caf08581e8e1100dbad5d1893b18e44b774d170-5272099-images-thumbs&n=13',
    description: 'Более 20 000 польских офицеров, полицейских и интеллигенции были расстреляны советскими НКВД в лесу под Катынью. Долгое время СССР отрицал свою причастность. Сегодня Катынь стала символом политических репрессий. Память о жертвах признана официально.'
  },
  {
    id: '9',
    title: 'Массовые казни в Минске',
    location: 'Минск, Беларусь',
    year: 1941,
    image: 'https://avatars.mds.yandex.net/i?id=3142bb173649e017eecf53e9809ebe128ab9bf86-5859957-images-thumbs&n=13',
    description: 'На окраине Минска было уничтожено около 100 000 евреев, в том числе из Минского гетто. Большинство казней проходило в Тростенце. Это стало крупнейшим местом уничтожения в Беларуси. Мемориал Тростенец теперь напоминает о массовом истреблении.'
  }
];


const WarCrime = () => (
  <div className="min-h-screen bg-[#1C1C1C] text-white">
    <Header />
    <main className="pt-20">
      <section className="py-16 bg-[#111] text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Без срока давности</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Документальные свидетельства преступлений нацистов против мирного населения СССР.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyCrimes.map((crime) => (
            <CrimeCard key={crime.id} crime={crime} />
          ))}
        </div>
      </section>
      <GallerySection />
      <ArchiveSection />
    </main>
    <Footer />
  </div>
);

export default WarCrime;
