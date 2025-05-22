// pages/AfterVictoryPage.jsx
import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import PageHeader from '../components/PostVictory/PageHeader';
import HomecomingStoriesSection from '../components/PostVictory/HomecomingStoriesSection';
import ReconstructionGrid from '../components/PostVictory/ReconstructionGrid';
import VeteranLivesSection from '../components/PostVictory/VeteranLivesSection';
import MemoryDatesBlock from '../components/PostVictory/MemoryDatesBlock';
import FinalQuoteSection from '../components/PostVictory/FinalQuoteSection';

const AfterVictory = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="pt-20">
        <PageHeader />
        <HomecomingStoriesSection />
        <ReconstructionGrid />
        <VeteranLivesSection />
        <MemoryDatesBlock />
        <FinalQuoteSection />
      </main>

      <Footer />
    </div>
  );
};

export default AfterVictory;
