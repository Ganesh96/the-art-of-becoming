import React from 'react';

const ActionProductivityPage = ({ navigateTo, commonStyles }) => {
  const { sectionClasses, contentWrapperClasses, headingClasses, subHeadingClasses, textClasses, anecdoteClasses, exampleClasses, listClasses, linkClasses } = commonStyles;

  return (
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
};

export default ActionProductivityPage;
