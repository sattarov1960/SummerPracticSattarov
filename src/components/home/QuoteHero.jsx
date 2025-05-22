import React, { useEffect, useState } from 'react';
import img1 from '../../images/img1.jpeg';
import img2 from '../../images/img2.webp';
import img3 from '../../images/img3.webp';
import img4 from '../../images/img4.webp';
import img5 from '../../images/img5.webp';


const quotes = [
  {
    text: "Стоять насмерть! Ни шагу назад!",
    author: "Приказ №227, И.В. Сталин, 28 июля 1942",
    imageUrl: img3
  },
  {
    text: 'Я умер, чтобы ты мог жить. Живи так, чтобы мне не было стыдно.',
    author: 'Неизвестный солдат, цитата из архива писем 1943 года',
    imageUrl: img2
  },
  {
    text: "Никто не забыт, ничто не забыто.",
    author: "Надпись на Пискарёвском мемориале",
    imageUrl: img1
  },
  {
    text: 'Они сражались за Родину — не ради славы, а ради жизни.',
    author: 'Из речи на Параде Победы 1945 года',
    imageUrl: img4
  },
  {
    text: 'Для нас война — это не прошлое. Это боль, которая жива.',
    author: 'Фронтовой поэт Константин Симонов',
    imageUrl: img5
  },
  {
    text: "Погибаю, но не сдаюсь! Прощай, Родина!",
    author: "Надпись на стене Брестской крепости",
    imageUrl: img1
  }
];

const QuoteHero = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setFadeIn(true);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentQuoteIndex];
  const backgroundImage = currentQuote.imageUrl;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-50"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-4xl text-[#ff0000]">
  "{currentQuote.text}"
</h2>
  <p className="text-lg md:text-xl text-gray-200 italic mb-6">
    — {currentQuote.author}
  </p>
</div>

    </div>
  );
  
  
};

export default QuoteHero;
