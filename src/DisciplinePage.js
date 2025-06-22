import React from 'react';

const DisciplinePage = ({ navigateTo, commonStyles }) => {
  const { sectionClasses, contentWrapperClasses, headingClasses, subHeadingClasses, textClasses, anecdoteClasses, exampleClasses, quoteClasses, listClasses, linkClasses } = commonStyles;

  return (
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

        <blockquote className={commonStyles.quoteClasses}>
          "Consistency doesn't guarantee that you'll be successful, but not being consistent will guarantee that you won't reach success."
        </blockquote>
      </div>
    </div>
  );
};

export default DisciplinePage;
