import React from 'react';
import Header from '../components/Header';
import QuoteHero from '../components/home/QuoteHero';
import WarSummary from '../components/home/WarSummary';
import SectionLinks from '../components/home/SectionLinks';
import MemoryBook from '../components/home/MemoryBook';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <QuoteHero />
        <WarSummary />
        <SectionLinks /> 
        <MemoryBook />
      </main>
      <Footer />
    </div>
  );
};

export default Home;