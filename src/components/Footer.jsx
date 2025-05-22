import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center">
          
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <Flame className="h-6 w-6 text-[#C62828] mr-2" />
              <h2 className="text-xl font-bold">Память Победы</h2>
            </div>
            <p className="text-gray-400 mb-4 max-w-xs">
              Сохраняя память о подвиге народа в Великой Отечественной войне
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Разделы сайта</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/timeline" className="text-gray-400 hover:text-white transition-colors">Хронология</Link></li>
              <li><Link to="/heroes" className="text-gray-400 hover:text-white transition-colors">Герои</Link></li>
              <li><Link to="/victory-weapons" className="text-gray-400 hover:text-white transition-colors">Оружие</Link></li>
              <li><Link to="/memorials" className="text-gray-400 hover:text-white transition-colors">Памятники</Link></li>
              <li><Link to="/war-crimes" className="text-gray-400 hover:text-white transition-colors">Без срока давности</Link></li>
              <li><Link to="/rear" className="text-gray-400 hover:text-white transition-colors">Тыл</Link></li>
              <li><Link to="/documents" className="text-gray-400 hover:text-white transition-colors">Документы</Link></li>
              <li><Link to="/after-victory" className="text-gray-400 hover:text-white transition-colors">После войны</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
