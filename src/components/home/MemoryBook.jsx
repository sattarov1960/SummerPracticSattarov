import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const MemoryBook = () => {
  const memories = [
    {
      image: 'https://avatars.mds.yandex.net/i?id=df19910e929f8a8695a09bc2d21655bef90d372a-4386106-images-thumbs&n=13',
      title: 'Брестская крепость',
      description: 'Оборона Брестской крепости в июне 1941 года стала одним из первых актов героического сопротивления советских солдат. В течение многих дней, несмотря на окружение и отсутствие снабжения, защитники крепости сражались до последнего патрона, показав миру силу духа и стойкость народа.'
    },
    {
      image: 'https://avatars.mds.yandex.net/i?id=95ccc263a6581995def6cd6aa8b3ecdd99230760-9844111-images-thumbs&n=13',
      title: 'Блокада Ленинграда',
      description: 'С сентября 1941 по январь 1944 года Ленинград находился в полной блокаде, лишённый продовольствия и тепла. Несмотря на страшные условия и массовый голод, жители и защитники города выстояли. Их мужество стало символом несгибаемой воли и любви к Родине.'
    },
    {
      image: 'https://avatars.mds.yandex.net/i?id=2b938020e2c6eaa69724806fa0aa81cfff3b61a5-5869613-images-thumbs&n=13',
      title: 'Сталинградская битва',
      description: 'Сражение за Сталинград (август 1942 — февраль 1943) стало переломным моментом Великой Отечественной войны. Героическое сопротивление советских войск, окружение и разгром 6-й армии вермахта изменили ход всей войны, ознаменовав начало стратегической инициативы СССР.'
    },
    {
      image: 'https://avatars.mds.yandex.net/i?id=c3a5f1793fdda1f48845e81675cd965a_l-4320611-images-thumbs&n=13',
      title: 'Курская дуга',
      description: 'Курская битва (лето 1943 года) — крупнейшее танковое сражение в истории человечества. Силами миллионов бойцов и десятков тысяч машин удалось остановить наступление врага и перейти в контрнаступление. Победа под Курском окончательно переломила ход войны в пользу Советского Союза.'
    }
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? memories.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === memories.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-16 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Книга памяти
          <span className="block mt-2 w-24 h-1 bg-[#C62828] mx-auto"></span>
        </h2>
        
        <div className="relative max-w-5xl mx-auto mt-12 overflow-hidden">
          <div className="bg-[#8D6E63] rounded-lg shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <img 
                  src={memories[currentIndex].image} 
                  alt={memories[currentIndex].title}
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {memories[currentIndex].title}
                </h3>
                <p className="text-white/80 mb-6">
                  {memories[currentIndex].description}
                </p>
                <div className="flex justify-between items-center text-white/60 text-sm">
                  <span>Страница {currentIndex + 1} из {memories.length}</span>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={goToPrevious} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={goToNext} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition-colors duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        
      </div>
    </section>
  );
};

export default MemoryBook;