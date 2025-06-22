import React from 'react';

const MindsetPage = ({ navigateTo, commonStyles }) => {
  const { sectionClasses, contentWrapperClasses, headingClasses, subHeadingClasses, textClasses, anecdoteClasses, exampleClasses, quoteClasses, listClasses, linkClasses } = commonStyles;

  return (
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
};

export default MindsetPage;
