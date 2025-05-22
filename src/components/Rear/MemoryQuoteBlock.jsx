import React from 'react';

const MemoryQuoteBlock = ({ quotes }) => (
  <section className="py-12 bg-white border-t border-gray-200">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Воспоминания</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotes.map((q, i) => (
          <blockquote
            key={i}
            className="border-l-4 border-[#C62828] pl-4 italic text-gray-700 bg-gray-50 p-4 rounded"
          >
            “{q.text}”
            <footer className="mt-2 text-sm text-gray-500">— {q.author}</footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default MemoryQuoteBlock;
