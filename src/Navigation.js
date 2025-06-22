import React from 'react';

const Navigation = ({ navigateTo, currentPage }) => {
  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Core Philosophy', page: 'corePhilosophy' },
    { name: 'Mindset & Mental Models', page: 'mindset' },
    { name: 'Discipline & Willpower', page: 'discipline' },
    { name: 'Action & Productivity', page: 'actionProductivity' },
    { name: 'Daily Rhythm & Routine', page: 'dailyRhythm' },
    { name: 'Inspiration & Reading', page: 'inspirationReading' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-500 ease-in-out py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center sm:justify-start items-center">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
          className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-500 transition-colors duration-200 ease-in-out rounded-lg px-3 py-2 mr-6 transform hover:scale-105"
        >
          The Art of Becoming
        </a>
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 sm:mt-0 justify-center">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => navigateTo(item.page)}
              className={`
                ${currentPage === item.page
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }
                px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50
              `}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
