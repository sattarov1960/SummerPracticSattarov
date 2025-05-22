import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="max-w-xl text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl mb-6">Страница не найдена</p>
          <p className="text-gray-600 mb-6">
            К сожалению, страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-[#C62828] text-white font-semibold rounded hover:bg-red-700 transition-colors"
          >
            Вернуться на главную
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;