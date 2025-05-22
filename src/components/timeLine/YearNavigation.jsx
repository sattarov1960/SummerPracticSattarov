const YearNavigation = ({ years, selectedYear, onSelectYear }) => (
    <section className="bg-white py-8 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center space-x-4 overflow-x-auto">
          {years.map((data) => (
            <button
              key={data.year}
              onClick={() => onSelectYear(data.year)}
              className={`flex-shrink-0 px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedYear === data.year
                  ? 'bg-[#C62828] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-2xl font-bold">{data.year}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default YearNavigation;
  