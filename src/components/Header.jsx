import React from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-gradient-to-b from-[#1C1C1C] to-transparent z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Flame className="h-8 w-8 text-[#C62828] mr-2" />
          <h1 className="text-white text-xl font-bold">Память Победы</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`text-white hover:text-[#C62828] transition-colors ${
              location.pathname === '/' ? 'text-[#C62828]' : ''
            }`}
          >
            Главная
          </Link>
          <Link 
            to="/timeline" 
            className={`text-white hover:text-[#C62828] transition-colors ${
              location.pathname === '/timeline' ? 'text-[#C62828]' : ''
            }`}
          >
            Хронология
          </Link>
          <Link 
            to="/heroes" 
            className={`text-white hover:text-[#C62828] transition-colors ${
              location.pathname === '/heroes' ? 'text-[#C62828]' : ''
            }`}
          >
            Герои
          </Link>
          <Link 
            to="/victory-weapons" 
            className={`text-white hover:text-[#C62828] transition-colors ${
              location.pathname === '/victory-weapons' ? 'text-[#C62828]' : ''
            }`}
          >
            Оружие
          </Link>
          <Link 
            to="/memorials" 
            className={`text-white hover:text-[#C62828] transition-colors ${
              location.pathname === '/memorials' ? 'text-[#C62828]' : ''
            }`}
          >
            Памятники
          </Link>
          <Link 
            to="/war-crimes" 
            className={`text-white hover:text-[#C62828] transition-colors ${
              location.pathname === '/war-crimes' ? 'text-[#C62828]' : ''
            }`}
          >
            Без срока давности
          </Link>
          <Link 
            to="/rear" 
            className={`text-white hover:text-[#C62828] transition-colors ${
              location.pathname === '/rear' ? 'text-[#C62828]' : ''
            }`}
          >
            Тыл
          </Link>
          <Link 
            to="/documents" 
            className={`text-white hover:text-[#C62828] transition-colors ${
              location.pathname === '/documents' ? 'text-[#C62828]' : ''
            }`}
          >
            Документы
          </Link>
          <Link 
            to="/after-victory" 
            className={`text-white hover:text-[#C62828] transition-colors ${
              location.pathname === '/after-victory' ? 'text-[#C62828]' : ''
            }`}
          >
            После войны
          </Link>
        </nav>
        
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-[#1C1C1C] w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-white hover:text-[#C62828] transition-colors ${
                location.pathname === '/' ? 'text-[#C62828]' : ''
              }`}
            >
              Главная
            </Link>
            <Link 
              to="/timeline" 
              className={`text-white hover:text-[#C62828] transition-colors ${
                location.pathname === '/timeline' ? 'text-[#C62828]' : ''
              }`}
            >
              Хронология
            </Link>
            <Link 
              to="/heroes" 
              className={`text-white hover:text-[#C62828] transition-colors ${
                location.pathname === '/heroes' ? 'text-[#C62828]' : ''
              }`}
            >
              Герои
            </Link>
            <a href="#" className="text-white hover:text-[#C62828] transition-colors">Оружие</a>
            <a href="#" className="text-white hover:text-[#C62828] transition-colors">Памятники</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;