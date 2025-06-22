import React from 'react';

const HomePage = ({ navigateTo, commonStyles }) => {
  const { sectionClasses, contentWrapperClasses, headingClasses, subHeadingClasses, textClasses, quoteClasses, listClasses } = commonStyles;

  return (
    <div className={`${sectionClasses} pt-32 pb-16`}>
      <div className={contentWrapperClasses}>
        <h1 className={`${headingClasses} text-indigo-800 dark:text-indigo-300`}>
          Unlock Your Potential: Master the Art of Becoming
        </h1>
        <p className={`${textClasses} text-center text-xl font-medium mb-8`}>
          Principles and Practices for Personal Evolution, Discipline, and Purposeful Living.
        </p>

        <div className="text-center mb-10">
          <button
            onClick={() => navigateTo('corePhilosophy')}
            className="px-8 py-4 bg-indigo-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-75"
          >
            Start Your Journey
          </button>
        </div>

        <h2 className={subHeadingClasses}>Welcome to Your Transformation</h2>
        <p className={textClasses}>
          Life is a dynamic journey, not a static destination. "The Art of Becoming" is your guide to personal evolution, built on the profound understanding that our flaws are not failures, but powerful opportunities for growth. Here, you'll discover a systematic approach to "getting sharpened"—learning from every mistake, turning challenges into lessons, and continuously refining who you are.
        </p>
        <p className={textClasses}>
          This framework illuminates the interconnectedness of your **Mindset**, your **Discipline**, and your capacity for **Action**. By mastering these pillars, you gain the clarity, focus, and sustained progress needed to truly thrive.
        </p>

        <h2 className={subHeadingClasses}>Why This Matters: Your Path to Clarity and Progress</h2>
        <p className={textClasses}>
          Do you ever feel stuck, overwhelmed by distractions, or battling a nagging sense of unfulfilled potential? Many of us do. In an age of endless information and constant demands, it's easy to lose focus, struggle with consistency, and feel like you're treading water.
        </p>
        <p className={textClasses}>
          This website offers a clear, actionable path forward. By delving into these principles, you will learn to:
        </p>
        <ul className={listClasses}>
          <li>Overcome procrastination and act with intention.</li>
          <li>Build unshakeable habits and consistent routines.</li>
          <li>Transform negative self-talk into powerful mental frameworks.</li>
          <li>Find purpose and meaning even in challenging circumstances.</li>
          <li>Turn your weaknesses into surprising strengths.</li>
        </ul>
        <p className={textClasses}>
          Your journey to becoming your best self starts now.
        </p>

        <div className="mt-8">
          <blockquote className={quoteClasses}>
            "If you want to achieve success, you're going to have to pay the price... But on the other side of pain is success."
          </blockquote>
          <p className="text-right text-sm text-gray-500 dark:text-gray-400">- Inspiration & Quotes</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
