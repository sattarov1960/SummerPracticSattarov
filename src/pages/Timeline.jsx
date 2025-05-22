import React, { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import YearNavigation from '../components/timeLine/YearNavigation';
import YearSummary from '../components/timeLine/YearSummary';
import EventCard from '../components/timeLine/EventCard';
import { timelineData } from '../components/timeLine/data';

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState('1941');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const currentYearData = timelineData.find((data) => data.year === selectedYear);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />

      <main className="">
        <section className="bg-[#1C1C1C] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Хронология войны
              <span className="block mt-2 w-24 h-1 bg-[#C62828] mx-auto"></span>
            </h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              Основные события Великой Отечественной войны 1941–1945 годов
            </p>
          </div>
        </section>

        <YearNavigation
          years={timelineData}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
        />

        {currentYearData && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <YearSummary
                year={currentYearData.year}
                summary={currentYearData.summary}
              />

              <div className="mt-12 space-y-8">
                {currentYearData.events.map((event, index) => (
                  <EventCard
                    key={event.date}
                    event={event}
                    index={index}
                    onClick={setSelectedEvent}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Timeline;
