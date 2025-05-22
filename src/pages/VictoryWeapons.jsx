import React, { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import WeaponCard from '../components/VictoryWeapons/WeaponCard';
import WeaponModal from '../components/VictoryWeapons/WeaponModal';

const weaponTypes = ['Все', 'Пехотное', 'Артиллерия', 'Авиация', 'Бронетехника', 'Флот'];

const dummyWeapons = [
    {
      id: '1',
      name: 'ППШ-41',
      type: 'Пехотное',
      usage: 'Пистолет-пулемёт ближнего боя',
      years: '1941–1960',
      startYear: 1941,
      image: 'https://avatars.mds.yandex.net/i?id=8f1a81b2838741637e973226ab91798562696da4-5888061-images-thumbs&n=13',
      description: 'ППШ-41 — один из самых массовых и узнаваемых пистолетов-пулемётов Второй мировой войны. Он отличался высокой скорострельностью, простотой конструкции и надёжностью в боевых условиях. Оружие особенно эффективно применялось в уличных и ближних боях. Благодаря барабанному магазину на 71 патрон, пехота получала мощную огневую поддержку на коротких дистанциях.',
      specs: { armor: '—', speed: '900 выстр/мин' }
    },
    {
      id: '2',
      name: 'Винтовка Мосина',
      type: 'Пехотное',
      usage: 'Основное стрелковое оружие пехоты',
      years: '1891–1960',
      startYear: 1891,
      image: 'https://avatars.mds.yandex.net/i?id=6a7d7463599d4303b257969d2549ac78e821e2dd-3947589-images-thumbs&n=13',
      description: 'Винтовка Мосина состояла на вооружении более 50 лет и стала символом русского и советского солдата. Её простота, надёжность и точность сделали её незаменимой на всех фронтах. Снайперская модификация с оптическим прицелом использовалась лучшими стрелками Красной армии. Это оружие сыграло важную роль в обороне Сталинграда, Ленинграда и других сражениях.',
      specs: { armor: '—', speed: '15 выстр/мин' }
    },
  
    {
      id: '3',
      name: 'ЗиС-3',
      type: 'Артиллерия',
      usage: '76-мм дивизионная пушка',
      years: '1942–1950-е',
      startYear: 1942,
      image: 'https://avatars.mds.yandex.net/i?id=76943a02c2c51341d3ba02c733f537a4baf44772-4265079-images-thumbs&n=13',
      description: 'ЗиС-3 — универсальная 76-мм дивизионная пушка, ставшая самой массовой в своём классе. Она успешно применялась как в борьбе с пехотой, так и против бронетехники. Производство этой пушки было дешевле и быстрее, чем у аналогов, благодаря передовым технологическим решениям. ЗиС-3 сочетала простоту, точность и эффективность в условиях массовой войны.',
      specs: { armor: '—', speed: '20 выстр/мин' }
    },
    {
      id: '4',
      name: 'БМ-13 «Катюша»',
      type: 'Артиллерия',
      usage: 'Реактивная система залпового огня',
      years: '1941–1950-е',
      startYear: 1941,
      image: 'https://avatars.mds.yandex.net/i?id=53a88c1c4458c606db910e1976f96b8eb34f3c5d-5481528-images-thumbs&n=13',
      description: 'Катюша — легендарная советская реактивная система залпового огня. Её залпы оказывали мощное психологическое воздействие на противника и могли мгновенно накрыть большие площади. Установка базировалась на автомобилях и могла быстро сменить позицию после выстрела. Это оружие стало символом советского инженерного гения и решимости.',
      specs: { armor: '—', speed: '16 ракет/залп' }
    },
    {
      id: '5',
      name: 'ИЛ-2',
      type: 'Авиация',
      usage: 'Бронированный штурмовик',
      years: '1941–1945',
      startYear: 1941,
      image: 'https://avatars.mds.yandex.net/i?id=818f528d956408ea7897cf0d446e8160f85f5fa9-5221585-images-thumbs&n=13',
      description: 'Штурмовик ИЛ-2 стал самым массовым боевым самолётом в истории и настоящей «летающей броней». Он имел хорошую защиту пилота и критических узлов, что позволяло ему выживать даже после тяжёлых повреждений. ИЛ-2 эффективно действовал по колоннам танков и укреплениям противника. Его вклад в поддержку сухопутных войск был неоценим.',
      specs: { armor: '12–15 мм', speed: '410 км/ч' }
    },
    {
      id: '6',
      name: 'Як-3',
      type: 'Авиация',
      usage: 'Фронтовой истребитель',
      years: '1944–1952',
      startYear: 1944,
      image: 'https://avatars.mds.yandex.net/i?id=b8811a3b226e42742f154bdf8f031e6973a62913-5227965-images-thumbs&n=13',
      description: 'Як-3 — советский истребитель, отличавшийся высокой манёвренностью и лёгкостью в управлении. Он превосходил многие немецкие самолёты в воздушных дуэлях на малых и средних высотах. Лётчики союзников и врагов признавали его эффективность и скорость реакции. Як-3 стал одним из символов советского воздушного превосходства в 1944–1945 годах.',
      specs: { armor: 'кабина с бронеспинкой', speed: '655 км/ч' }
    },
  
    {
      id: '7',
      name: 'Т-34',
      type: 'Бронетехника',
      usage: 'Средний танк Красной армии',
      years: '1940–1958',
      startYear: 1940,
      image: 'https://avatars.mds.yandex.net/i?id=d560722e60a15f61f11786aecec6fd124a5d314a-4884623-images-thumbs&n=13',
      description: 'Танк Т-34 считается лучшим средним танком Второй мировой войны по совокупности характеристик. Он сочетал бронирование, подвижность и огневую мощь, превосходя своих противников на ранних этапах войны. Простота конструкции позволила наладить массовое производство. Т-34 сыграл ключевую роль в победе под Москвой, Сталинградом и Курском.',
      specs: { armor: '45 мм', speed: '55 км/ч' }
    },
    {
      id: '8',
      name: 'ИС-2',
      type: 'Бронетехника',
      usage: 'Тяжёлый танк прорыва',
      years: '1943–1950-е',
      startYear: 1943,
      image: 'https://avatars.mds.yandex.net/i?id=c54fb90c0d51178e305b7f7ad1266a361e73e4b0-8497822-images-thumbs&n=13',
      description: 'ИС-2 был тяжёлым танком прорыва с мощным 122-мм орудием, способным уничтожать немецкие «Тигры» и укреплённые точки. Его броня защищала экипаж от большинства снарядов на средних дистанциях. ИС-2 часто применялся в штурмовых операциях в 1944–1945 годах, включая Берлинскую операцию. Он стал символом советской силы на финальном этапе войны.',
      specs: { armor: '90–120 мм', speed: '37 км/ч' }
    },
  
    {
      id: '9',
      name: 'Подводная лодка серии «Щ»',
      type: 'Флот',
      usage: 'Массовые подводные лодки',
      years: '1930-е – 1950-е',
      startYear: 1934,
      image: 'https://avatars.mds.yandex.net/i?id=edd71fb410049eb7c0f20c032f1cbfe3dc81ca66-5340698-images-thumbs&n=13',
      description: 'Подводные лодки серии «Щ» (Щука) были основой советского подводного флота в годы войны. Они активно применялись на Балтийском, Чёрном и Северном морях. Использовались для торпедных атак, разведки и минной постановки. Щуки были достаточно надёжными и сыграли заметную роль в сдерживании вражеского флота.',
      specs: { armor: '—', speed: '14 узлов (над водой)' }
    },
    {
      id: '10',
      name: 'Крейсер «Киров»',
      type: 'Флот',
      usage: 'Лёгкий крейсер Балтийского флота',
      years: '1938–1960-е',
      startYear: 1938,
      image: 'https://avatars.mds.yandex.net/i?id=d3c955b89dc928ebc16eefb8481c95e3077e7d0a-7554713-images-thumbs&n=13',
      description: 'Крейсер «Киров» был одним из немногих крупных кораблей, активно действовавших в годы войны. Он принимал участие в обороне Ленинграда и обеспечивал артиллерийскую поддержку сухопутным войскам. Корабль был хорошо вооружён и защищён, что делало его грозным противником. «Киров» стал флагманом Балтийского флота и символом морского сопротивления.',
      specs: { armor: '50–70 мм', speed: '36 узлов' }
    }
  ];

const VictoryWeapons = () => {
  const [selectedType, setSelectedType] = useState('Все');
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredWeapons = dummyWeapons
    .filter(w => selectedType === 'Все' || w.type === selectedType)
    .sort((a, b) => sortOrder === 'asc' ? a.startYear - b.startYear : b.startYear - a.startYear);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="">
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
            {filteredWeapons.map(w => (
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