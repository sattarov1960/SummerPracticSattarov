// components/Timeline/YearSummary.jsx
import React from 'react';

const YearSummary = ({ year, summary }) => (
  <div className="bg-white rounded-lg shadow-lg p-8">
    <h2 className="text-3xl font-bold mb-4">{year} год</h2>
    <p className="text-xl text-gray-700">{summary}</p>
  </div>
);

export default YearSummary;