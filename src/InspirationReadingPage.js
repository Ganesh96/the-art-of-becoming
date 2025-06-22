import React from 'react';

const InspirationReadingPage = ({ commonStyles }) => {
  const { sectionClasses, contentWrapperClasses, headingClasses, subHeadingClasses, textClasses, quoteClasses, listClasses } = commonStyles;

  return (
    <div className={`${sectionClasses} pt-32 pb-16`}>
      <div className={contentWrapperClasses}>
        <h1 className={headingClasses}>Ignite Your Spirit: Wisdom for the Path Ahead</h1>
        <p className={textClasses}>
          This section offers a curated collection of words and resources to serve as a beacon, providing continuous fuel for your journey of transformation. Inspiration reminds you of your potential, and reading equips you with the mental models and strategies to achieve it.
        </p>

        <h2 className={subHeadingClasses}>5.1 Inspiration & Quotes: Words to Live By</h2>
        <p className={textClasses}>
          These quotes are drawn from various sources and distilled wisdom. Reflect on them, carry them with you, and let them guide your actions and mindset.
        </p>

        <div className="space-y-8 mb-8">
          <div className="p-6 bg-indigo-50 dark:bg-gray-600 rounded-lg shadow-md border border-indigo-200 dark:border-gray-500">
            <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">On Perseverance and Pain</h3>
            <blockquote className={quoteClasses}>
              "If you want to achieve success, you're going to have to pay the price... It'll be tireless nights, long days, empty bank accounts, depressing thoughts, loneliness, and a lot of pain. But on the other side of pain is success."
            </blockquote>
            <p className="text-sm italic text-gray-600 dark:text-gray-400"><em>Reflection:</em> Success is earned through embracing the struggle, not avoiding it. The temporary discomfort is a prerequisite for lasting achievement.</p>
            <blockquote className={quoteClasses}>
              "I know if I don't risk and not give everything I got. I can't create the future."
            </blockquote>
            <p className="text-sm italic text-gray-600 dark:text-gray-400"><em>Reflection:</em> True progress demands courage and full commitment. Holding back guarantees stagnation.</p>
            <blockquote className={quoteClasses}>
              "Every day do something that will inch you closer to a better tomorrow."
            </blockquote>
            <p className="text-sm italic text-gray-600 dark:text-gray-400"><em>Reflection:</em> Consistency in small, deliberate actions builds monumental results over time. Focus on the daily "inch."</p>
          </div>

          <div className="p-6 bg-blue-50 dark:bg-gray-600 rounded-lg shadow-md border border-blue-200 dark:border-gray-500">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">On Mindset and Clarity</h3>
            <blockquote className={quoteClasses}>
              "Your best ideas are on the other side of the silence you're avoiding."
            </blockquote>
            <p className="text-sm italic text-gray-600 dark:text-gray-400"><em>Reflection:</em> In a noisy world, true clarity and creative breakthroughs often require deliberate disengagement and solitude.</p>
            <blockquote className={quoteClasses}>
              "Instead of complaining on how broken the world is, try to fix it."
            </blockquote>
            <p className="text-sm italic text-gray-600 dark:text-gray-400"><em>Reflection:</em> Shift from passive criticism to active contribution. Be a solution-finder.</p>
            <blockquote className={quoteClasses}>
              "The quality of your life depends on the quality of your questions."
            </blockquote>
            <p className="text-sm italic text-gray-600 dark:text-gray-400"><em>Reflection:</em> Better questions lead to better understanding, better decisions, and ultimately, a better life.</p>
            <blockquote className={quoteClasses}>
              "The task is not to see what has never been seen before, but to think what has never been thought before about what you see every day."
            </blockquote>
            <p className="text-sm italic text-gray-600 dark:text-gray-400"><em>Reflection:</em> Innovation often comes from fresh perspectives on familiar concepts, not just discovering new ones.</p>
          </div>

          <div className="p-6 bg-green-50 dark:bg-gray-600 rounded-lg shadow-md border border-green-200 dark:border-gray-500">
            <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-3">On Action and Consistency</h3>
            <blockquote className={quoteClasses}>
              "It is better to take small steps in the right direction than to make a great leap forward only to stumble backward."
            </blockquote>
            <p className="text-sm italic text-gray-600 dark:text-gray-400"><em>Reflection:</em> Consistent, incremental progress is more sustainable and effective than grand, unsustainable gestures. Link this to micro habits.</p>
            <blockquote className={quoteClasses}>
              "The rarest of all human qualities is consistency."
            </blockquote>
            <p className="text-sm italic text-gray-600 dark:text-gray-400"><em>Reflection:</em> True power lies in showing up, day after day, especially when it's difficult. Cultivate this rare quality.</p>
          </div>

          <div className="p-6 bg-purple-50 dark:bg-gray-600 rounded-lg shadow-md border border-purple-200 dark:border-gray-500">
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300 mb-3">On Belief, Reason & Perspective</h3>
            <blockquote className={quoteClasses}>
              "Those who believe without reason cannot be convinced by reason."
            </blockquote>
            <p className="text-sm italic text-gray-600 dark:text-gray-400"><em>Reflection:</em> Understand the limits of logic when confronting deeply held, irrational beliefs, both in yourself and others.</p>
            <blockquote className={quoteClasses}>
              "What are you afraid of losing when nothing in this world actually belongs to you."
            </blockquote>
            <p className="text-sm italic text-gray-600 dark:text-gray-400"><em>Reflection:</em> A powerful Stoic reminder to detach from outcomes and possessions, freeing you from fear and attachment.</p>
            <blockquote className={quoteClasses}>
              "It's a basic truth of the human condition that everybody lies. The only variable is about what."
            </blockquote>
            <p className="text-sm italic text-gray-600 dark:text-gray-400"><em>Reflection:</em> A pragmatic view of human nature; cultivate discernment without becoming cynical.</p>
          </div>
        </div>

        <h2 className={subHeadingClasses}>5.2 Recommended Reading for the Mind: Your Curated Library</h2>
        <p className={textClasses}>
          Reading is an unparalleled tool for cognitive enhancement and personal growth. These books directly support the principles found throughout this framework, offering deeper insights and actionable strategies.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400"><em>(Note: For a live website, these would link to external purchase pages. Here, they are illustrative.)</em></p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-600 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.01]">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Personal Development & Mindset</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Awaken the Giant Within</strong> by Tony Robbins
                <p className="text-sm text-gray-600 dark:text-gray-400"><em>Why it's relevant:</em> A comprehensive guide to mastering your emotions, body, relationships, and finances. Powerful strategies for immediate action and belief change, aligning with "Psycho-Cybernetics."</p>
              </li>
              <li>
                <strong>Designing the Mind: The Principles of Psychitecture</strong> by Ryan A. Bush
                <p className="text-sm text-gray-600 dark:text-gray-400"><em>Why it's relevant:</em> Offers a systematic approach to consciously engineering your own mind, providing tools to build mental resilience and clarity, combating "Intelligence Entropy."</p>
              </li>
              <li>
                <strong>Mindset: The New Psychology of Success</strong> by Carol S. Dweck
                <p className="text-sm text-gray-600 dark:text-gray-400"><em>Why it's relevant:</em> Introduces the concepts of fixed vs. growth mindset. Essential for embracing imperfection and viewing challenges as opportunities for growth.</p>
              </li>
              <li>
                <strong>Psycho-Cybernetics, A New Way to Get More Living Out of Life</strong> by Maxwell Maltz
                <p className="text-sm text-gray-600 dark:text-gray-400"><em>Why it's relevant:</em> The foundational text on self-image psychology. Teaches how to update your internal blueprint for success and well-being, directly impacting your ability to follow through.</p>
              </li>
              <li>
                <strong>Deep Work: Rules for Focused Success in a Distracted World</strong> by Cal Newport
                <p className="text-sm text-gray-600 dark:text-gray-400"><em>Why it's relevant:</em> Provides actionable strategies to cultivate intense, distraction-free concentration, crucial for high-quality output and resisting the pull of shallow distractions.</p>
              </li>
              <li>
                <strong>The 5 AM Club</strong> by Robin Sharma
                <p className="text-sm text-gray-600 dark:text-gray-400"><em>Why it's relevant:</em> Offers a detailed framework for mastering your mornings, empowering you to start your day with energy, focus, and growth, directly supporting the "Daily Rhythm and Routine."</p>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-600 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.01]">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Philosophy & Psychology</h3>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>The Obstacle Is the Way</strong> by Ryan Holiday
                <p className="text-sm text-gray-600 dark:text-gray-400"><em>Why it's relevant:</em> A practical guide to Stoic philosophy, teaching how to reframe challenges and turn adversity into advantage. Directly supports the "Kangiten" character study.</p>
              </li>
              <li>
                <strong>Meditations</strong> by Marcus Aurelius
                <p className="text-sm text-gray-600 dark:text-gray-400"><em>Why it's relevant:</em> Timeless Stoic wisdom on self-mastery, virtue, and resilience. Offers profound insights into controlling one's perceptions and reactions, fostering mental fortitude.</p>
              </li>
              <li>
                <strong>Man’s Search for Meaning</strong> by Viktor E. Frankl
                <p className="text-sm text-gray-600 dark:text-gray-400"><em>Why it's relevant:</em> A powerful testament to the human capacity to find meaning even in extreme suffering. Reinforces the idea that purpose is a choice, echoing the "Count Rostov" study.</p>
              </li>
              <li>
                <strong>12 Rules for Life: An Antidote to Chaos</strong> by Jordan B. Peterson
                <p className="text-sm text-gray-600 dark:text-gray-400"><em>Why it's relevant:</em> Offers a compelling framework for taking responsibility, finding meaning, and imposing order on the chaos of life through practical wisdom.</p>
              </li>
            </ul>
          </div>
        </div>

        <p className={`${textClasses} mt-8`}>
          <strong>Call to Action:</strong> Don't try to read them all at once! Pick one book from this list that resonates most with your current challenge or area of focus. Commit to reading a small portion daily (e.g., 20 minutes during your "Grow" time in the morning routine). Consistent engagement with these ideas will profoundly impact your journey of becoming.
        </p>
      </div>
    </div>
  );
};

export default InspirationReadingPage;
