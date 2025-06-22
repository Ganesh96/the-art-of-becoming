import React from 'react';

const DailyRhythmPage = ({ navigateTo, commonStyles }) => {
  const { sectionClasses, contentWrapperClasses, headingClasses, subHeadingClasses, textClasses, anecdoteClasses, exampleClasses, listClasses, linkClasses } = commonStyles;

  return (
    <div className={`${sectionClasses} pt-32 pb-16`}>
      <div className={contentWrapperClasses}>
        <h1 className={headingClasses}>Master Your Day: The Power of a Structured Life</h1>
        <p className={textClasses}>
          A structured day isn't about rigid constraints; it's about liberation. It's the essential foundation of <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('discipline'); }} className={linkClasses}>Discipline and Willpower</a> and a powerful catalyst for <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('actionProductivity'); }} className={linkClasses}>Action and Productivity</a>. By intentionally designing your daily rhythm, you create a framework that supports your highest goals, reduces decision fatigue, and naturally minimizes space for unproductive distractions.
        </p>

        <h2 className={subHeadingClasses}>The Ideal Daily Template: Your Blueprint for Consistency</h2>
        <p className={textClasses}>
          This template is inspired by the principles of the 5 AM Club and Circadian Rhythm optimization. Remember, this is a guide—adjust it to fit your own personal energy cycles and commitments. The goal is intentionality, not perfection.
        </p>

        <div className={exampleClasses}>
          <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">Morning (Pre-Work): The Victory Hour</h3>
          <p className="text-sm">This is your sacred time, dedicated entirely to self-improvement before the demands of the day begin. It sets a proactive,而非reactive, tone.</p>
          <ul className="list-disc list-inside text-green-800 dark:text-green-200 space-y-2">
            <li>
              <strong>5:00 AM - 5:20 AM: Move.</strong>
              <p className="text-xs">Engage in intense physical activity. This isn't just about fitness; it's about waking your body, boosting blood flow to the brain, and releasing endorphins that energize your mind. Sweat is a great cleanser for the mind, clearing out mental fog and stress from the previous day. This foundational burst of energy will help you resist the urge for distractions later.</p>
              <p className="text-xs"><em>Example:</em> High-intensity interval training (HIIT), a brisk run, bodyweight exercises, or even dynamic yoga. Get your heart rate up!</p>
            </li>
            <li>
              <strong>5:20 AM - 5:40 AM: Reflect.</strong>
              <p className="text-xs">Dedicate this time to stillness and mental clarity. This is where you connect with your inner wisdom and set your daily intentions. Options include:</p>
              <ul className="list-disc list-inside ml-4 text-green-800 dark:text-green-200">
                <li><em>Journaling:</em> Process thoughts, express gratitude, or explore challenges.</li>
                <li><em>Meditation:</em> Practice mindfulness to calm the mind and enhance focus.</li>
                <li><em>Prayer:</em> Connect with your spiritual self.</li>
                <li><em>Plan the Day Ahead:</em> Crucially, during this time, identify your "One Thing" (from the Hunter Method) for the day. Write it down. This singular focus will guide your efforts and minimize decision fatigue.</li>
              </ul>
            </li>
            <li>
              <strong>5:40 AM - 6:00 AM: Grow.</strong>
              <p className="text-xs">Invest in intellectual and personal growth. This is continuous learning that keeps your mind sharp and expands your capabilities.</p>
              <ul className="list-disc list-inside ml-4 text-green-800 dark:text-green-200">
                <li><em>Read:</em> Engage with material from your <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('inspirationReading'); }} className={linkClasses}>Recommended Reading</a> list.</li>
                <li><em>Take a Course:</em> Dedicate time to online courses or skill development.</li>
                <li><em>Learn a New Skill:</em> Practice a musical instrument, coding, or any skill that stimulates your mind.</li>
              </ul>
            </li>
          </ul>
        </div>

        <h3 className={subHeadingClasses}>Work Blocks: Strategic Focus</h3>
        <p className={textClasses}>
          Design your workday around periods of intense focus and planned breaks, minimizing distractions and maximizing high-quality output.
        </p>
        <ul className={listClasses}>
          <li>
            <strong>Deep Work Sessions:</strong> These are your dedicated, uninterrupted blocks for tackling your most important, cognitively demanding tasks. Use the <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('discipline'); }} className={linkClasses}>Pomodoro Technique</a> (25-minute focused sprints) within these blocks. Eliminate all distractions – turn off notifications, close unnecessary tabs, and communicate your focus time to others.
          </li>
          <li>
            <strong>Shallow Work:</strong> Group emails, meetings, administrative tasks, and other low-cognitive-load activities into dedicated blocks. Avoid letting these tasks interrupt your deep work sessions, which is a major source of context switching and lost productivity. Schedule specific times to check email, for example, rather than reacting instantly.
          </li>
        </ul>

        <h3 className={subHeadingClasses}>Evening: Prepare for Success & Recharge</h3>
        <p className={textClasses}>
          The evening is crucial not just for rest, but for setting the stage for a successful tomorrow.
        </p>
        <ul className={listClasses}>
          <li>
            <strong>Shutdown Ritual:</strong> Clearly define the end of your workday. This can be a physical act (closing a laptop, tidying your desk) or a mental one (a brief reflection on what was accomplished). This signals to your brain that it's time to switch off "work mode" and reduces rumination.
          </li>
          <li>
            <strong>Plan Tomorrow, Tonight:</strong> This is a powerful micro habit. Lay out your clothes for the morning, prepare your "One Thing" and other top priorities, and ensure your workspace is tidy. This eliminates decision fatigue and friction, making it easier to start strong the next day.
          </li>
          <li>
            <strong>Digital Sunset:</strong> Disconnect from screens (phones, tablets, computers, TV) at least an hour before bed. The blue light from screens interferes with melatonin production, impacting sleep quality. Engage in relaxing activities like reading a physical book, listening to calm music, or talking with family.
            <p className="text-sm mt-1"><em>Note on 6 hours of sleep:</em> If your aim is 6 hours of sleep and a 5 AM wake-up, this means consistently being in bed by 11 PM. Adhering to the Digital Sunset and a consistent bedtime is critical for making 6 hours of sleep restorative.</p>
          </li>
        </ul>
        <p className={textClasses}>
          This template is a guide. Adjust it to fit your own personal circadian rhythm and life circumstances. The key is to be intentional with your time and energy, creating a rhythm that propels you towards "becoming."
        </p>
      </div>
    </div>
  );
};

export default DailyRhythmPage;
