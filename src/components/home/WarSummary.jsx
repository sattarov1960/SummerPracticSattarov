import React from 'react';

const WarSummary = () => {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-8 text-center">
          Великая Отечественная война
          <span className="block mt-2 w-24 h-1 bg-[#C62828] mx-auto"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:scale-105 duration-300">
            <div className="text-5xl font-bold text-[#C62828] mb-4">1941</div>
            <h3 className="text-xl font-semibold mb-2">Начало войны</h3>
            <p className="text-gray-700">
              22 июня 1941 года нацистская Германия без объявления войны напала на Советский Союз, 
              начав одну из самых кровопролитных войн в истории человечества.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:scale-105 duration-300">
            <div className="text-5xl font-bold text-[#C62828] mb-4">27 000 000</div>
            <h3 className="text-xl font-semibold mb-2">Потери</h3>
            <p className="text-gray-700">
              Советский Союз понес самые большие потери во Второй мировой войне — 
              около 27 миллионов человек, включая военных и гражданское население.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform hover:scale-105 duration-300">
            <div className="text-5xl font-bold text-[#C62828] mb-4">1945</div>
            <h3 className="text-xl font-semibold mb-2">Победа</h3>
            <p className="text-gray-700">
              9 мая 1945 года был подписан акт о безоговорочной капитуляции Германии, 
              ознаменовавший победу советского народа в Великой Отечественной войне.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Великая Отечественная война — самая разрушительная и кровопролитная война в истории человечества.
            Она затронула судьбы миллионов людей и изменила ход мировой истории. 
            Наш долг — хранить память о подвиге народа, отстоявшего свободу и независимость Родины.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WarSummary;