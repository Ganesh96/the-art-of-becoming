import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  // State to manage current active section/page
  const [currentPage, setCurrentPage] = useState('home');

  // Function to navigate to a new page
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  // Common styles for sections
  const sectionClasses = "min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-500 ease-in-out";
  const contentWrapperClasses = "max-w-4xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:scale-[1.005]";
  const headingClasses = "text-4xl sm:text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-6 text-center leading-tight tracking-tight";
  const subHeadingClasses = "text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mt-8 mb-4";
  const textClasses = "text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4";
  const anecdoteClasses = "border-l-4 border-indigo-500 pl-4 py-2 italic text-gray-600 dark:text-gray-400 my-6 bg-indigo-50 dark:bg-gray-600 rounded-r-lg shadow-sm";
  const exampleClasses = "bg-green-50 dark:bg-green-800 p-4 rounded-lg shadow-sm my-4 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-700";
  const quoteClasses = "text-xl italic font-semibold text-indigo-600 dark:text-indigo-300 mt-6 mb-4 border-l-4 border-indigo-400 pl-4";
  const listClasses = "list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2";
  const linkClasses = "text-indigo-600 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-500 transition-colors duration-200 ease-in-out";

  // Navigation Component
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

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 sm:px-6 lg:px-8 text-center mt-12">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4">© 2025 The Art of Becoming. All rights reserved.</p>
        <p className="text-sm">
          Built with principles of continuous improvement and purposeful living.
          <br/>
          *Note: This content is for informational purposes only and not professional advice.
        </p>
      </div>
    </footer>
  );

  // --- Page Components ---

  const HomePage = () => (
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

  const CorePhilosophyPage = () => (
    <div className={`${sectionClasses} pt-32 pb-16`}>
      <div className={contentWrapperClasses}>
        <h1 className={headingClasses}>The Blueprint: Core Tenets for a Purposeful Life</h1>
        <p className={textClasses}>
          This section lays the fundamental beliefs and principles that form the bedrock of personal evolution. These are not just ideas; they are foundational truths designed to guide every decision and action you take.
        </p>

        <h2 className={subHeadingClasses}>1.1 Embrace Imperfection: The Power of the Pencil's Eraser</h2>
        <p className={textClasses}>
          "Being human does not entail absolute correctness or flawless perfection." True growth begins with acknowledging our fallibility. This isn't an excuse for mediocrity, but a liberation from the crippling fear of failure. When we accept that mistakes are inevitable, we free ourselves to take action and learn.
        </p>
        <p className={textClasses}>
          Think about **The Pencil Metaphor - Lesson 3:** "You have the ability to correct any mistakes you might make." The eraser isn't a sign of weakness; it's a tool for refinement. Every error is simply an opportunity to adjust, improve, and try again with new insight.
        </p>
        <div className={anecdoteClasses}>
          <p><strong>Anecdote: Thomas Edison's "Failures"</strong></p>
          <p>When asked about his numerous failed attempts to invent the lightbulb, Thomas Edison famously said, "I have not failed. I've just found 10,000 ways that won't work." His genius wasn't in avoiding errors, but in embracing each one as a step closer to success. He understood that every "mistake" provided invaluable data, guiding him toward the right solution. This mindset allowed him to persevere where others would have given up.</p>
        </div>
        <p className={textClasses}>
          <strong>Practical Application:</strong> Practice self-compassion. After a mistake, instead of self-criticism, ask: "What did I learn from this? How can I apply that lesson next time?" This transforms a setback into a springboard.
        </p>

        <h2 className={subHeadingClasses}>1.2 Live Forward, Understand Backward: Navigating Life's Labyrinth</h2>
        <p className={textClasses}>
          This core Kierkegaardian idea reminds us that while we must live life moving forward, often amidst uncertainty and ambiguity, true understanding only crystallizes when we reflect on the past. We can't know the full impact of our decisions until we've lived through them.
        </p>
        <p className={textClasses}>
          This principle is a powerful antidote to analysis paralysis. It encourages **action despite ambiguity** because it reassures us that clarity isn't a prerequisite for movement. It will come.
        </p>
        <div className={anecdoteClasses}>
          <p><strong>Anecdote: The Leap into the Unknown</strong></p>
          <p>Sarah felt trapped in her corporate job but had a burning desire to start a non-profit. She had no clear business plan, limited funding, and many doubts. Her friends advised caution, waiting for "the right time." But Sarah, fueled by an intuitive sense of purpose, took the leap, resigning without a safety net. The first few years were a struggle, filled with unexpected challenges and pivots. Five years later, her non-profit was thriving, impacting thousands. Looking back, she realized that many of the "wrong turns" and "unforeseen obstacles" were actually crucial experiences that taught her resilience, forced innovation, and connected her with key allies she'd never have met otherwise. She had to live it forward to understand it backward.</p>
        </div>
        <p className={textClasses}>
          <strong>Practical Application:</strong> Don't wait for perfect clarity. Take small, intentional steps towards your goals. Regularly use journaling (as discussed in "Mindset") to reflect on past actions and uncover hidden lessons, gaining understanding that was impossible in the moment.
        </p>

        <h2 className={subHeadingClasses}>1.3 Action Over Mood: The Engine of Momentum</h2>
        <p className={textClasses}>
          "Instead of spending time getting in the mood to work, just start working." This is a profound shift from a passive, emotion-led approach to a proactive, discipline-led one. The common misconception is that motivation precedes action. In reality, motivation often *follows* action. When you engage with the work, even for a few minutes, you build momentum, and the desire to continue often emerges.
        </p>
        <div className={anecdoteClasses}>
          <p><strong>Anecdote: The Reluctant Runner</strong></p>
          <p>John hated running, but he knew it was good for him. Most mornings, he'd lie in bed, waiting for "the mood to strike." It rarely did. He'd spend hours procrastinating, feeling guilty. One day, he decided: "I don't need to *want* to run, I just need to put on my shoes and step outside for 5 minutes." He started this small ritual. Often, after those 5 minutes, he'd find himself running for 20 or 30. The action itself generated the mood and the energy to continue. He learned that simply starting was the most powerful motivator.</p>
        </div>
        <p className={textClasses}>
          <strong>Practical Application:</strong> Identify your "starting ritual." It could be opening the relevant software, sitting at your desk, or doing the first 5 minutes of a task. Focus only on starting, and trust that momentum will follow. Link this to "Complete One Unwanted Task Daily" from the "Discipline" section – tackling a small, avoided task builds that "action over mood" muscle.
        </p>

        <h2 className={subHeadingClasses}>1.4 Discipline is the Ultimate Choice: What Do You Want Most?</h2>
        <p className={textClasses}>
          "Discipline is the constant choice 'between what you want now and what you want the most.'" This powerful tenet, central to our "Discipline and Willpower" section, forms the very foundation of all lasting accomplishment. Every decision you make, from hitting snooze to scrolling mindlessly, is a choice between immediate gratification and your highest aspirations.
        </p>
        <p className={textClasses}>
          True discipline isn't about deprivation; it's about making a deliberate choice for your future self. It’s about aligning your daily actions with your long-term vision.
        </p>
        <div className={anecdoteClasses}>
          <p><strong>Anecdote: The Concert Pianist's Daily Grind</strong></p>
          <p>A world-renowned concert pianist was once asked about the secret to her success. She smiled and said, "There's no secret. Every single day, I choose between sleeping in and practicing for hours, between going out with friends and refining a difficult passage, between easy comfort and the call of the music inside me. It's not always fun, but I consistently choose what I want 'most'—to be the best musician I can be. That choice, made thousands of times, is my discipline."</p>
        </div>
        <p className={textClasses}>
          <strong>Practical Application:</strong> Before making a decision (especially one involving a potential distraction), pause and ask yourself: "Is this choice moving me closer to what I want *now*, or closer to what I want *most*?" This simple question can reframe your perspective and empower you to make more aligned choices. Start cultivating an "identity-based habit": instead of saying "I need to go to the gym," say "I am a person who exercises daily." This shifts focus from the action to the identity.
        </p>

        <h2 className={subHeadingClasses}>1.5 The Pencil Metaphor: Five Timeless Lessons for Life</h2>
        <p className={textClasses}>
          This simple story offers profound insights for living a meaningful and impactful life, serving as a cornerstone of this entire philosophy.
        </p>
        <div className={exampleClasses}>
          <p><strong>Lesson 1: You are capable of great things, but you must allow yourself to be held and guided.</strong></p>
          <p className="text-sm italic">Just as a pencil needs a hand to write, our greatest achievements come when we open ourselves to guidance. This 'hand' could be a mentor, a set of guiding principles, or a profound sense of purpose. It means humility to learn, and wisdom to accept help.</p>
          <p className="text-sm"><em>Example:</em> A young entrepreneur struggling to scale their business finally seeks out an experienced mentor, who provides crucial guidance and opens new doors. By allowing themselves to be "held and guided," they unlock their business's true potential.</p>

          <p><strong>Lesson 2: The painful sharpening you experience will make you better.</strong></p>
          <p className="text-sm italic">Life's challenges, struggles, and moments of correction are not meant to break you, but to shape you. Just as a dull pencil needs sharpening to write clearly, you need friction to become more effective, resilient, and insightful. Embrace the discomfort of growth.</p>
          <p className="text-sm"><em>Example:</em> An artist faces repeated rejections for their work. Each rejection is a "sharpening" that forces them to refine their technique, explore new styles, and strengthen their resolve, ultimately leading to a breakthrough.</p>

          <p><strong>Lesson 3: You have the ability to correct any mistakes you might make.</strong></p>
          <p className="text-sm italic">The eraser is perhaps the most forgiving part of the pencil. It signifies our inherent capacity for forgiveness, learning, and course correction. A mistake is never the end; it's an opportunity to reset, to learn, and to draw a better line next time. This is fundamental to overcoming the fear of failure.</p>
          <p className="text-sm"><em>Example:</em> A student performs poorly on an exam. Instead of giving up, they review their errors, adjust their study methods, and seek help from their professor. The "eraser" allows them to improve their understanding and perform better on the next assessment.</p>

          <p><strong>Lesson 4: The most important part of you is what's inside.</strong></p>
          <p className="text-sm italic">The graphite, the core of the pencil, is its true purpose. Similarly, your external appearance, status, or possessions are secondary. Your true value lies in your character, your principles, your integrity, and your inner strength. Cultivate what's within, for that is your enduring worth.</p>
          <p className="text-sm"><em>Example:</em> A person renowned for their outward success (wealth, fame) finds themselves unfulfilled. They begin to prioritize inner growth—integrity, kindness, resilience—and discover true happiness, demonstrating that internal qualities are more vital than external accolades.</p>

          <p><strong>Lesson 5: On every surface you walk, you must leave your mark.</strong></p>
          <p className="text-sm italic">Your actions matter. Every interaction, every project, every effort you make leaves an imprint. Strive to make that mark positive, meaningful, and reflective of your best self. Your life is a story being written, and each day is a chance to contribute a profound sentence.</p>
          <p className="text-sm"><em>Example:</em> A dedicated teacher may not achieve fame, but their consistent, caring efforts leave an indelible "mark" on the lives of hundreds of students, shaping their futures and inspiring them to pursue their own passions.</p>
        </div>
      </div>
    </div>
  );

  const MindsetPage = () => (
    <div className={`${sectionClasses} pt-32 pb-16`}>
      <div className={contentWrapperClasses}>
        <h1 className={headingClasses}>Reshape Your Reality: Tools for a Sharper Mind</h1>
        <p className={textClasses}>
          Your mindset is the lens through which you see reality. Cultivating a robust mental framework is essential for navigating life's complexities, transforming challenges into opportunities, and maintaining clarity in a noisy world.
        </p>

        <h2 className={subHeadingClasses}>2.1 Cognitive Enhancement: Sharpening Your Internal Blade</h2>
        <p className={textClasses}>
          Your brain is not static; it's a dynamic organ capable of remarkable plasticity. Actively engaging it enhances its function, builds cognitive reserves, and helps you think more clearly and creatively.
        </p>
        <ul className={listClasses}>
          <li>
            <strong>Challenge Your Comfort Zone:</strong> Regularly engage in mentally stimulating activities. This doesn't mean huge leaps; it can be small, consistent efforts.
            <div className={exampleClasses}>
              <p><em>Examples:</em> Learn a few phrases in a new language, try a different route to work, tackle a complex puzzle, engage in a debate on a topic you're unfamiliar with, or deliberately seek out conversations with people holding different perspectives.</p>
            </div>
          </li>
          <li>
            <strong>Journaling:</strong> A powerful tool for cognitive function, memory, and stress management. It externalizes your thoughts, allowing you to examine them critically, gain perspective, and uncover hidden insights.
            <div className={exampleClasses}>
              <p><em>Practical Exercise:</em> Try "stream of consciousness" writing for 10-15 minutes daily. Don't edit, just write whatever comes to mind. Or use prompts: "What am I grateful for today?", "What challenge am I facing and what are 3 possible solutions?", "What did I learn yesterday?"</p>
            </div>
          </li>
          <li>
            <strong>Reading:</strong> As the saying goes, "Reading is to the mind what exercise is to the body." It demonstrably improves brain connectivity, expands vocabulary, and slows cognitive decline.
            <div className={exampleClasses}>
              <p><em>Practical Application:</em> Refer to the <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('inspirationReading'); }} className={linkClasses}>Recommended Reading</a> section. Don't just read; engage in "active reading" by highlighting, taking notes, and summarizing key ideas in your own words.</p>
            </div>
          </li>
          <li>
            <strong>Silence and Solitude:</strong> Scheduled downtime is crucial for creativity, problem-solving, and memory formation. In our constantly connected world, finding deliberate silence is a superpower.
            <div className={quoteClasses}>
              "Your best ideas are on the other side of the silence you're avoiding."
            </div>
            <div className={anecdoteClasses}>
              <p><strong>Anecdote: The CEO's "Thinking Walks"</strong></p>
              <p>A highly successful CEO was known for her innovative strategies. Her secret weapon wasn't more meetings or more emails; it was her daily "thinking walks." Every morning, she'd spend an hour walking in a nearby park, leaving her phone at home. During this time, with no distractions, her mind would connect disparate ideas, solve complex problems, and generate fresh perspectives. She found that the more silence she cultivated, the clearer her decisions became.</p>
            </div>
            <p className="text-sm"><em>Practical Method:</em> Schedule 15-30 minutes of "quiet time" daily. This could be meditation, a walk without music or phone, or simply sitting in a quiet room, letting your thoughts settle. This allows your Default Mode Network to work its magic, consolidating memories and sparking new connections.</p>
          </li>
        </ul>

        <h2 className={subHeadingClasses}>2.2 Foundational Principles: Anchors in a Chaotic World</h2>
        <p className={textClasses}>
          These principles serve as powerful mental models—pre-designed frameworks—that help you navigate complex situations, make better decisions, and understand the world more effectively.
        </p>
        <ul className={listClasses}>
          <li>
            <strong>Intelligence Entropy:</strong> Our minds naturally tend towards disorder. Just like a room left untended becomes messy, our mental space can become cluttered with distractions, unexamined beliefs, and unhelpful thought patterns.
            <p className="text-sm"><em>Relevance:</em> This explains why distractions like endless scrolling, binge-watching, or engaging with unhelpful content are so pervasive. You must actively work to maintain mental clarity and focus by curating your information diet (what you consume) and consistently practicing discipline (how you act).</p>
            <div className={exampleClasses}>
              <p><em>Application:</em> Treat your mind like a garden. You wouldn't let weeds grow rampant. Similarly, you need to actively "weed out" distracting or negative inputs and "cultivate" positive, growth-oriented information. This means conscious media consumption, setting boundaries with digital devices, and being mindful of who and what you allow into your mental space.</p>
            </div>
          </li>
          <li>
            <strong>The Obstacle Is the Way:</strong> A core Stoic principle popularized by Ryan Holiday. This powerful idea teaches us the art of turning trials into triumphs. It posits that the very thing impeding your progress can be transformed into the path forward.
            <p className="text-sm"><em>Relevance:</em> When you encounter a problem or setback, instead of viewing it as a barrier, ask: "How can this obstacle be used to my advantage? What lesson is it trying to teach me? How can it force me to innovate or become stronger?"</p>
            <div className={anecdoteClasses}>
              <p><strong>Anecdote: J.K. Rowling's Rock Bottom</strong></p>
              <p>Before Harry Potter, J.K. Rowling was a struggling single mother on welfare. She describes herself as "a rock-bottom failure." But instead of giving up, this dire situation gave her an unexpected freedom: the freedom to pursue her true passion without fear of further failure. "I was set free, because my greatest fear had been realized," she later said. This massive obstacle—her poverty and perceived failure—became the very catalyst that forced her to commit fully to her writing, ultimately leading to one of the most successful book series in history.</p>
            </div>
          </li>
          <li>
            <strong>Psycho-Cybernetics:</strong> Developed by Maxwell Maltz, this principle suggests that your self-image dictates the boundaries of your accomplishments. Your internal self-perception creates a "cybernetic mechanism" that guides your actions towards outcomes consistent with that self-image.
            <p className="text-sm"><em>Relevance:</em> To change your life and overcome ingrained habits (like distraction), you must first change your mind about who you are and what you're capable of. If you see yourself as a disciplined, focused individual, your actions will naturally align with that identity.</p>
            <div className={exampleClasses}>
              <p><em>Practical Application:</em> Engage in "self-image re-scripting." Identify a limiting belief (e.g., "I'm easily distracted"). Replace it with an empowering affirmation (e.g., "I am a person with incredible focus and discipline"). Visualize yourself successfully completing tasks, ignoring distractions, and achieving your goals. Consistency in this mental work can profoundly shift your reality.</p>
            </div>
          </li>
          <li>
             <strong>"Ask yourself if you should, not if you could."</strong> (from ALL.md)
             <p className="text-sm"><em>Explanation:</em> In an age of infinite possibilities, it's easy to get caught up in what you *can* do. This mental model shifts your focus to what aligns with your deepest values and long-term goals. It ensures your actions are truly rewarding and contribute to the "ideal" version of yourself. External achievements can feel meaningless if they don't resonate with your inner values.</p>
             <div className={anecdoteClasses}>
               <p><strong>Anecdote: The Overcommitted Executive</strong></p>
               <p>A high-flying executive was constantly taking on new projects because she *could*. Her resume was impressive, but she felt perpetually stressed and unfulfilled. A mentor introduced her to the "should vs. could" principle. She started declining opportunities that didn't align with her core values or primary long-term vision, even if they were prestigious. This allowed her to say "yes" more powerfully to the things that truly mattered, leading to deeper satisfaction and a healthier life.</p>
             </div>
          </li>
        </ul>

        <h2 className={subHeadingClasses}>2.3 Character Studies as Mental Models: Learning from Exemplars</h2>
        <p className={textClasses}>
          Studying individuals who embody these principles offers powerful mental models—living examples of how to apply these ideas in complex situations.
        </p>
        <ul className={listClasses}>
          <li>
            <strong>Kangiten: The Art of Turning Weakness into Weapon</strong>
            <p className="text-sm">Kangiten represents a philosophy of transforming adversity into strength. This is a profound application of "The Obstacle Is the Way."</p>
            <div className={quoteClasses}>
              "Failure and Frustration are sources of growth."
            </div>
            <div className={quoteClasses}>
              "Your faults and weaknesses can be your weapons."
            </div>
            <p className="text-sm"><em>Explanation:</em> Don't view setbacks as absolute negatives; they are data points for learning and opportunities to build resilience. True strength doesn't come from being flawless, but from understanding your weaknesses so well that you can either turn them into advantages or render them irrelevant through strategy and skill. If you're easily distracted, perhaps that awareness can be your "weapon" to create impenetrable focus zones.</p>
            <div className={anecdoteClasses}>
              <p><strong>Anecdote: The Entrepreneur Who Embraced Introversion</strong></p>
              <p>Mark was an aspiring entrepreneur but felt his introversion was a major weakness, especially in networking. He tried to force himself to be outgoing, but it drained him. Then he learned about Kangiten's principle. He realized his introversion meant he was a deep listener and thoughtful communicator. He turned this "weakness" into a "weapon" by focusing on one-on-one, in-depth conversations rather than large networking events. He built a highly successful business based on strong, personal client relationships, leveraging his quiet strength rather than fighting against it.</p>
            </div>
          </li>
          <li>
            <strong>Count Alexander Ilyich Rostov: Resilience in Confinement</strong>
            <p className="text-sm">From *A Gentleman in Moscow*, Count Rostov is a powerful model of resilience, demonstrating that one's circumstances do not have to define one's life. He embodies the principles of "Discipline and Willpower" [cite: Character Study - Count Alexander Ilyich Rostov.md].</p>
            <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
              <li>
                **Mastery of Circumstance:** Despite being under house arrest for decades, the Count built a rich, meaningful life within the hotel's walls. He chose purpose over despair, showing that meaning is a choice, not a product of environment.
              </li>
              <li>
                **The Power of Routine:** He maintained his dignity and sanity through a structured routine of meals, work, reading, and social interaction. This demonstrates how a well-defined daily rhythm provides stability in chaotic times.
              </li>
            </ul>
            <p className="text-sm"><em>Relevance to You:</em> We all face "confinements"—it could be a demanding job, limited resources, or the constant pull of digital distractions. Rostov's lesson is that you can choose to define your internal world regardless of external constraints. You can create discipline and meaning even within the "confines" of your daily struggles against distraction.</p>
            <div className={anecdoteClasses}>
              <p><strong>Anecdote: The Remote Worker's Daily Ritual</strong></p>
              <p>After transitioning to remote work, Emily felt her productivity plummet. Her home, once a sanctuary, became a "confinement" of distractions—the fridge, the TV, the urge to nap. Inspired by Rostov, she implemented a strict daily routine: dressing for "work," designating a specific "office" corner, scheduling breaks, and even having a "commute" walk around the block before and after work. By mastering her daily routine within her confined space, she regained her focus and productivity, transforming her environment into a place of purpose.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  const DisciplinePage = () => (
    <div className={`${sectionClasses} pt-32 pb-16`}>
      <div className={contentWrapperClasses}>
        <h1 className={headingClasses}>Forge Your Will: Building Unshakeable Consistency</h1>
        <p className={textClasses}>
          Discipline is not about brute-force willpower; it's the sophisticated engine of progress. It’s about strategically building systems and habits that ensure consistency, especially on the days you lack inspiration. Discipline is the essential bridge between your goals and their accomplishment.
        </p>

        <h2 className={subHeadingClasses}>3.1 The Philosophy of Keizoku (継続): The Art of Not Quitting</h2>
        <p className={textClasses}>
          Keizoku is a profound Japanese philosophy of "continuation." It’s the art of preventing yourself from abandoning what you start, a crucial component in mastering any skill or achieving any goal. It is the conscious and repeated choice to endure the "pain of discipline" today, knowing it prevents the far deeper and more insidious "pain of regret" tomorrow.
        </p>
        <div className={anecdoteClasses}>
          <p><strong>Anecdote: The Marathoner's Unseen Miles</strong></p>
          <p>Consider a marathon runner. The glory is in crossing the finish line, but the victory is forged in the thousands of "unseen miles" during training. There are days when the weather is terrible, the runner is tired, and motivation is nowhere to be found. But the committed runner embraces Keizoku. They don't quit that day's run, even if it's shorter or slower than planned. They choose the momentary pain of pushing through over the long-term regret of not being prepared. This consistent continuation builds the endurance, both physical and mental, needed for race day.</p>
        </div>
        <p className={textClasses}>
          <strong>Relevance to Distraction:</strong> Every time you choose to look away from a distracting screen and return to your work, you are practicing Keizoku. You are preventing yourself from quitting on your focus, on your task, and ultimately, on your future self.
        </p>
        <p className={textClasses}>
          <strong>Practical Application: The "Never Miss Twice" Rule:</strong> This simple but powerful rule is a cornerstone of Keizoku. If you miss a day of your new habit (e.g., journaling, exercising, deep work), *never miss the next day*. A single slip is just that—a slip. Two slips often lead to abandonment. This rule ensures that consistency remains the default.
        </p>

        <h2 className={subHeadingClasses}>3.2 Building Micro Habits: Small Steps, Massive Momentum</h2>
        <p className={textClasses}>
          Micro habits are tiny, actionable steps that require minimal willpower to start, yet build immense momentum over time. They are strategically designed to lower the barrier to entry for important tasks, making consistency inevitable.
        </p>
        <ul className={listClasses}>
          <li>
            <strong>Delay Your Reactions:</strong> When an urge for distraction (checking social media, opening a new tab, or any tempting procrastination) arises, postpone your immediate response for at least ten seconds. This creates a crucial gap between impulse and action, allowing your rational mind to intervene.
            <div className={exampleClasses}>
              <p><em>Practical Exercise:</em> The next time you feel the pull to switch tasks or open a distracting app, pause. Count to ten slowly. During this pause, ask yourself: "Is this action moving me closer to what I want *most* right now?" Often, the urge dissipates, or you gain enough clarity to make a better choice.</p>
            </div>
          </li>
          <li>
            <strong>Complete One Unwanted Task Daily:</strong> This is a powerful momentum builder. Pick one small task that you've been avoiding and tackle it first thing in your work block. The sense of accomplishment creates positive energy that spills over into the rest of your day.
            <div className={exampleClasses}>
              <p><em>Examples:</em> Reply to that difficult email, make that quick phone call, organize one small corner of your workspace, or review a challenging document for 5 minutes. The key is small and consistent.</p>
            </div>
          </li>
          <li>
            <strong>Plan Tomorrow, Tonight:</strong> This is a simple but profoundly effective habit for eliminating decision fatigue and reducing friction for the next morning.
            <div className={exampleClasses}>
              <p><em>Practical Steps:</em> Before bed, lay out your clothes for the morning, prepare your "One Thing" task for the next day, write down your top 3 priorities, and tidy your workspace. This prepares your environment and your mind for immediate action upon waking.</p>
            </div>
          </li>
          <li>
            <strong>The Pomodoro Technique:</strong> A focused work method using a timer to break down work into intense, concentrated intervals (traditionally 25 minutes), separated by short breaks (5 minutes). After four "pomodoros," take a longer break (15-30 minutes).
            <div className={exampleClasses}>
              <p><em>Application for Focus:</em> During the 25-minute work interval, absolutely no distractions. If a distracting thought arises, quickly jot it down and return to your task. The short breaks allow for mental recovery without losing momentum, and the structured nature helps train your focus muscle.</p>
            </div>
          </li>
        </ul>

        <h2 className={subHeadingClasses}>3.3 Physical Discipline: The Body-Mind Connection</h2>
        <p className={textClasses}>
          "A strong body helps build a strong mind." Physical discipline is intrinsically linked to mental fortitude. When you consistently challenge your body, you build resilience, perseverance, and a stronger capacity for discomfort – all qualities that directly translate to mental discipline and the ability to resist distractions.
        </p>
        <div className={anecdoteClasses}>
          <p><strong>Anecdote: The Entrepreneur and the Morning Run</strong></p>
          <p>Sarah, a successful startup founder, attributes much of her mental toughness and ability to handle stress to her non-negotiable morning runs. "It's not just about physical health," she explains. "There are days I don't want to get out of bed, especially when faced with a tough decision at work. But pushing through that initial resistance on a cold morning run trains my brain to push through resistance in the boardroom. It builds a belief that I can overcome discomfort, no matter the context."</p>
        </div>
        <p className={textClasses}>
          <strong>Practical Application:</strong> Integrate the "Move" segment into your <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('dailyRhythm'); }} className={linkClasses}>Daily Rhythm and Routine</a> (5:00 AM - 5:20 AM). This doesn't require a gym; it can be bodyweight exercises, a brisk walk, or a short high-intensity interval training (HIIT) session. The key is consistent, intentional physical exertion to build both physical and mental strength.
        </p>

        <blockquote className={quoteClasses}>
          "Consistency doesn't guarantee that you'll be successful, but not being consistent will guarantee that you won't reach success."
        </blockquote>
      </div>
    </div>
  );

  const ActionProductivityPage = () => (
    <div className={`${sectionClasses} pt-32 pb-16`}>
      <div className={contentWrapperClasses}>
        <h1 className={headingClasses}>Execute with Precision: Turning Ideas into Tangible Results</h1>
        <p className={textClasses}>
          Ideas are potential. Execution is power. This section focuses on developing robust systems for converting your vision into tangible reality. It's about closing the gap between what you intend to do and what you actually accomplish.
        </p>

        <h2 className={subHeadingClasses}>4.1 From Idea to Action: The Structured Path</h2>
        <p className={textClasses}>
          Many great ideas languish because they lack a structured path to execution. This systematic approach ensures your vision moves from concept to completion.
        </p>
        <ul className={listClasses}>
          <li>
            <strong>1. Outline Your Vision:</strong> Clearly define what you want to achieve. Be specific. What does success look, feel, and sound like?
            <div className={exampleClasses}>
              <p><em>Example:</em> Instead of "I want to be healthy," define it as: "I want to run a 10K race in under an hour by December 31st, feeling energetic and sleeping 7 hours a night."</p>
            </div>
          </li>
          <li>
            <strong>2. Break It Down:</strong> Deconstruct the vision into smaller, manageable tasks. A large goal can be intimidating; small steps are inviting.
            <div className={exampleClasses}>
              <p><em>Technique:</em> Use "reverse engineering." Start from the end goal and work backward: "To run a 10K, I need to consistently run 8K, which means 5K, which means starting with walking 2K."</p>
            </div>
          </li>
          <li>
            <strong>3. Set SMART Goals:</strong> Ensure your goals are Specific, Measurable, Achievable, Relevant, and Time-bound. This framework adds precision and accountability.
            <div className={exampleClasses}>
              <p><em>SMART Example:</em> "I will complete the first draft of my novel (Specific, Measurable) by writing 500 words every weekday morning (Achievable, Relevant, Time-bound) by October 31st."</p>
            </div>
          </li>
          <li>
            <strong>4. Seek Feedback:</strong> Collaborate with trusted mentors, peers, or friends to uncover blind spots and innovate. Fresh perspectives can highlight potential issues or reveal more efficient paths.
            <div className={anecdoteClasses}>
              <p><strong>Anecdote: The Architect's Critique</strong></p>
              <p>A young architect spent months on a complex building design, convinced it was perfect. Before submitting, she shared it with an experienced senior architect. The feedback was brutal but constructive, pointing out flaws she'd entirely missed. Initially stung, she realized the critique was invaluable. By incorporating the feedback, her final design was not only stronger but also received accolades, proving the power of external perspectives.</p>
            </div>
          </li>
          <li>
            <strong>5. Act, Reflect, Adjust:</strong> Take small, consistent steps, then review what works, what doesn't, and adapt your approach. This iterative process is crucial for long-term progress.
            <div className={exampleClasses}>
              <p><em>The Iterative Loop:</em> "Try a new productivity technique for a week (Act). At the end of the week, review your results (Reflect). Did it improve focus? Did it cause stress? Based on that, modify the technique or try another (Adjust)."</p>
            </div>
          </li>
        </ul>

        <h2 className={subHeadingClasses}>4.2 Productivity Systems: Your Daily Playbook</h2>
        <p className={textClasses}>
          These systems provide a structured framework to channel your energy and focus on what truly matters, minimizing distractions and maximizing output.
        </p>
        <ul className={listClasses}>
          <li>
            <strong>The Hunter Method: Focus on Your "One Thing"</strong>
            <p className="text-sm">A daily planning method to ensure you complete high-impact work. The core idea is to identify the single most important task for the day – the one thing that, if completed, would make the biggest difference or make everything else easier or unnecessary.</p>
            <div className={exampleClasses}>
              <p><em>Practical Application:</em> First thing in your "Reflect" time (5:20 AM - 5:40 AM), decide your "One Thing." Write it on a Post-it note and place it prominently on your desk. This visual cue acts as your central focus, relentlessly pulling your attention back to what truly matters and combating the urge to multitask or get sidetracked by lesser tasks or distractions.</p>
            </div>
            <div className={anecdoteClasses}>
              <p><strong>Anecdote: The Writer's Daily Page</strong></p>
              <p>A struggling novelist constantly felt overwhelmed by the enormity of writing a book. She tried everything, but perfectionism and distraction always won. Then she adopted the "Hunter Method." Her "One Thing" each day was simply "Write one page." Some days, she wrote more, but even on the hardest days, completing that one page was a victory. This singular focus eliminated analysis paralysis, built consistency, and eventually led to the completion of her novel, proving that relentless focus on the "One Thing" builds powerful momentum.</p>
            </div>
          </li>
          <li>
            <strong>The 5 AM Club & The 20/20/20 Formula: Reclaiming Your Day</strong>
            <p className="text-sm">This powerful strategy, outlined in the <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('dailyRhythm'); }} className={linkClasses}>Daily Rhythm and Routine</a>, is about dedicating the first hour of your day to self-improvement before the world wakes up. It sets a foundation of energy, clarity, and growth that dramatically reduces the likelihood of succumbing to distractions later.</p>
            <div className={exampleClasses}>
              <p><em>Recap of Formula:</em></p>
              <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
                <li><strong>5:00 AM - 5:20 AM: Move.</strong> Intense physical activity to wake up the body and cleanse the mind.</li>
                <li><strong>5:20 AM - 5:40 AM: Reflect.</strong> Journaling, meditation, planning your "One Thing."</li>
                <li><strong>5:40 AM - 6:00 AM: Grow.</strong> Reading, learning a new skill, or taking a course.</li>
              </ul>
            </div>
            <p className="text-sm">The early start provides a buffer against the urgent demands that often hijack the rest of the day, allowing you to invest in yourself and your most important tasks without interruption.</p>
          </li>
          <li>
            <strong>Deep Work Sessions & Shallow Work Grouping: Maximizing Focus</strong>
            <p className="text-sm">
              **Deep Work** (a concept popularized by Cal Newport, from our recommended reading) refers to professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit. This effort creates new value, improves your skill, and is difficult to replicate.
            </p>
            <p className="text-sm">
              **Shallow Work** consists of non-cognitively demanding logistical tasks, often performed while distracted (e.g., email, meetings, administrative tasks).
            </p>
            <div className={exampleClasses}>
              <p><em>Practical Application:</em></p>
              <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
                <li><strong>Schedule Deep Work:</strong> Dedicate specific blocks in your day (e.g., after your 5 AM routine) for deep work. During these times, eliminate all distractions: turn off notifications, close unnecessary tabs, use website blockers if necessary, and inform others not to disturb you.</li>
                <li><strong>Group Shallow Work:</strong> Instead of letting emails and quick tasks interrupt your focus throughout the day, group them into dedicated "shallow work blocks." Check emails only at specific times (e.g., 11 AM and 4 PM). This minimizes context switching, a major productivity killer and distraction amplifier.</li>
              </ul>
            </div>
            <div className={anecdoteClasses}>
              <p><strong>Anecdote: The Programmer's "Monk Mode"</strong></p>
              <p>A software developer struggled with constant interruptions from chat messages and emails. He decided to implement "monk mode" for his coding tasks. For two 90-minute blocks each day, he'd turn off all communication, close his office door, and use a white noise app. The results were astounding: what used to take him half a day now took a fraction of the time, and the quality of his code significantly improved, simply by eliminating shallow distractions during his deep work periods.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  const DailyRhythmPage = () => (
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

  const InspirationReadingPage = () => (
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


  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'corePhilosophy':
        return <CorePhilosophyPage />;
      case 'mindset':
        return <MindsetPage />;
      case 'discipline':
        return <DisciplinePage />;
      case 'actionProductivity':
        return <ActionProductivityPage />;
      case 'dailyRhythm':
        return <DailyRhythmPage />;
      case 'inspirationReading':
        return <InspirationReadingPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    // Main container using Tailwind for font and background
    <div className="font-inter antialiased min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800 transition-colors duration-500 ease-in-out">
      {/* Load Inter font from Google Fonts (Tailwind doesn't load fonts by default) */}
      <link href="[https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap)" rel="stylesheet" />
      {/* Navigation component */}
      <Navigation navigateTo={navigateTo} currentPage={currentPage} />

      {/* Page content area */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App;
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Art of Becoming</title>
    <!-- Tailwind CSS CDN -->
    <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
    <!-- Google Fonts for Inter -->
    <link href="[https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap)" rel="stylesheet">
    <style>
        /* Custom styles for smooth transitions and dark mode */
        :root {
            --bg-light: #f9fafb;
            --text-light: #1f2937;
            --bg-dark: #1f2937;
            --text-dark: #f9fafb;
            --card-light: #ffffff;
            --card-dark: #374151;
            --primary-light: #4f46e5;
            --primary-dark: #a78bfa;
            --accent-light: #6366f1;
            --accent-dark: #818cf8;
        }

        @media (prefers-color-scheme: dark) {
            body {
                background-color: var(--bg-dark);
                color: var(--text-dark);
            }
            .bg-gray-50 { background-color: var(--bg-dark); }
            .text-gray-900 { color: var(--text-dark); }
            .bg-white { background-color: var(--card-dark); }
            .text-gray-700 { color: var(--text-dark); }
            .text-gray-800 { color: var(--text-dark); }
            .border-gray-200 { border-color: var(--card-dark); }
            .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
            .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }

            .dark\:bg-gray-800 { background-color: var(--bg-dark); }
            .dark\:text-gray-100 { color: var(--text-dark); }
            .dark\:bg-gray-700 { background-color: var(--card-dark); }
            .dark\:text-gray-300 { color: var(--text-dark); }
            .dark\:text-gray-200 { color: var(--text-dark); }
            .dark\:text-gray-400 { color: var(--text-dark); }
            .dark\:text-gray-600 { background-color: #4b5563; } /* For anecdote boxes */
            .dark\:text-indigo-400 { color: var(--primary-dark); }
            .dark\:hover\:text-indigo-500 { color: #8b5cf6; }
            .dark\:text-indigo-300 { color: #a78bfa; }
            .dark\:hover\:bg-gray-800 { background-color: #1f2937; }
            .dark\:border-gray-500 { border-color: #6b7280; }
            .dark\:border-gray-600 { border-color: #4b5563; }
            .dark\:bg-gray-900 { background-color: #111827; }
            .dark\:bg-green-800 { background-color: #166534; }
            .dark\:text-green-200 { color: #a7f3d0; }
            .dark\:border-green-700 { border-color: #065f46; }


            /* Specific dark mode adjustments for elements that don't have explicit dark: classes in the React code */
            .bg-indigo-50 { background-color: #4338ca; } /* A deeper indigo for dark mode */
            .border-indigo-200 { border-color: #6366f1; }
            .text-indigo-700 { color: var(--primary-dark); }
            .bg-blue-50 { background-color: #3b82f6; } /* A darker blue for dark mode */
            .border-blue-200 { border-color: #60a5fa; }
            .text-blue-700 { color: #93c5fd; }
            .bg-green-50 { background-color: #10b981; } /* A darker green for dark mode */
            .border-green-200 { border-color: #34d399; }
            .text-green-700 { color: #a7f3d0; }
            .bg-purple-50 { background-color: #8b5cf6; } /* A darker purple for dark mode */
            .border-purple-200 { border-color: #a78bfa; }
            .text-purple-700 { color: #e9d5ff; }
            .border-indigo-500 { border-color: var(--primary-dark); }
            .bg-indigo-600 { background-color: var(--primary-dark); }
            .hover\:bg-indigo-700:hover { background-color: #8b5cf6; }
            .focus\:ring-indigo-500:focus { --tw-ring-color: var(--primary-dark); }
            .text-indigo-600 { color: var(--primary-dark); }
            .hover\:text-indigo-800:hover { color: #6d28d9; }
            .text-indigo-800 { color: var(--primary-dark); }
        }

        /* Base font and smooth transitions for all elements */
        body {
            font-family: 'Inter', sans-serif;
            transition: background-color 0.5s ease, color 0.5s ease;
        }

        /* Smooth page transitions (opacity/transform for mounting/unmounting) */
        .page-transition {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .page-transition.active {
            opacity: 1;
            transform: translateY(0);
        }

        /* Ensure all rounded corners */
        * {
            border-radius: 0.5rem; /* Apply to everything by default, can be overridden by specific Tailwind classes */
        }
        /* Specific overrides for elements that might not get rounded by default */
        .rounded-lg, .rounded-xl, .rounded-full {
             border-radius: var(--tw-border-radius); /* Ensure Tailwind classes take precedence */
        }

    </style>
</head>
<body>
    <div id="root"></div>
    <!-- React and ReactDOM are not required here as the canvas environment provides them.
         The App component will be rendered into the #root div. -->
</body>
</html>
