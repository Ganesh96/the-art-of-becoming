import React from 'react';

const CorePhilosophyPage = ({ navigateTo, commonStyles }) => {
  const { sectionClasses, contentWrapperClasses, headingClasses, subHeadingClasses, textClasses, anecdoteClasses, exampleClasses, linkClasses } = commonStyles;

  return (
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
};

export default CorePhilosophyPage;
