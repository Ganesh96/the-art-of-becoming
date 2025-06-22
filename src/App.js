import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { track } from '@vercel/analytics';

import Navigation from './Navigation';
import Footer from './Footer';
import HomePage from './HomePage';
import CorePhilosophyPage from './CorePhilosophyPage';
import MindsetPage from './MindsetPage';
import DisciplinePage from './DisciplinePage';
import ActionProductivityPage from './ActionProductivityPage';
import DailyRhythmPage from './DailyRhythmPage';
import InspirationReadingPage from './InspirationReadingPage';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    track('Page View', { page: `/${currentPage}` });
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
    track('Page View', { page: `/${page}` });
  };

  const commonStyles = {
    sectionClasses: "min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out",
    contentWrapperClasses: "max-w-4xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:scale-[1.005]",
    headingClasses: "text-4xl sm:text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-6 text-center leading-tight tracking-tight",
    subHeadingClasses: "text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mt-8 mb-4",
    textClasses: "text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4",
    anecdoteClasses: "border-l-4 border-indigo-500 pl-4 py-2 italic text-gray-600 dark:text-gray-400 my-6 bg-indigo-50 dark:bg-gray-600 rounded-r-lg shadow-sm",
    exampleClasses: "bg-green-50 dark:bg-green-800 p-4 rounded-lg shadow-sm my-4 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-700",
    quoteClasses: "text-xl italic font-semibold text-indigo-600 dark:text-indigo-300 mt-6 mb-4 border-l-4 border-indigo-400 pl-4",
    listClasses: "list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2",
    linkClasses: "text-indigo-600 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-500 transition-colors duration-200 ease-in-out",
  };

  const renderPage = () => {
    const props = { navigateTo, commonStyles };
    switch (currentPage) {
      case 'home':
        return <HomePage {...props} />;
      case 'corePhilosophy':
        return <CorePhilosophyPage {...props} />;
      case 'mindset':
        return <MindsetPage {...props} />;
      case 'discipline':
        return <DisciplinePage {...props} />;
      case 'actionProductivity':
        return <ActionProductivityPage {...props} />;
      case 'dailyRhythm':
        return <DailyRhythmPage {...props} />;
      case 'inspirationReading':
        return <InspirationReadingPage {...props} />;
      default:
        return <HomePage {...props} />;
    }
  };

  return (
    <div className="font-sans antialiased min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800 transition-colors duration-500 ease-in-out">
      <Navigation navigateTo={navigateTo} currentPage={currentPage} />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      
      <Analytics />
    </div>
  );
};

export default App;