import React, { useState, useEffect } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import YearNavigation from '../components/timeLine/YearNavigation';
import YearSummary from '../components/timeLine/YearSummary';
import EventCard from '../components/timeLine/EventCard';

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/timeLine');
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.statusText}`);
        }
        const data = await response.json();
        setTimelineData(data);
        setSelectedYear(data.length > 0 ? data[0].year : '');
      } catch (err) {
        console.error('Ошибка при загрузке таймлайна:', err);
        setError('Не удалось загрузить данные хронологии');
      } finally {
        setLoading(false);
      }
    };

    fetchTimeline();
  }, []);

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

        {loading && (
          <div className="text-center py-8 text-gray-600">Загрузка данных...</div>
        )}

        {error && (
          <div className="text-center py-8 text-red-500">{error}</div>
        )}

        {!loading && !error && timelineData.length > 0 && (
          <>
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
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Timeline;
