import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const FlowPage = ({ commonStyles }) => {
  const { sectionClasses, headingClasses, subHeadingClasses, textClasses } = commonStyles;

  useEffect(() => {
    // --- Theme Detection for Charts ---
    const isDarkMode = document.documentElement.classList.contains('dark');
    const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.15)' : '#e2e8f0';
    const tickColor = isDarkMode ? '#9ca3af' : '#475569'; // gray-400 vs slate-600
    const legendLabelColor = isDarkMode ? '#d1d5db' : '#334155'; // gray-300 vs slate-700
    const pointLabelColor = isDarkMode ? '#d1d5db' : '#334155';
    const tooltipBgColor = isDarkMode ? '#374151' : '#fff'; // gray-700 vs white
    const tooltipTitleColor = isDarkMode ? '#f9fafb' : '#111827'; // gray-50 vs gray-900
    const tooltipBodyColor = isDarkMode ? '#d1d5db' : '#6b7280'; // gray-300 vs gray-500
    const doughnutBorderColor = isDarkMode ? '#374151' : '#f8fafc'; // gray-700 vs slate-50

    // --- Chart Colors ---
    const brilliantBlues = ['#005F73', '#0A9396', '#94D2BD', '#EE9B00', '#CA6702', '#AE2012', '#9B2226'];
    const bluesAndYellows = ['#005F73', '#0A9396', '#94D2BD', '#E9D8A6', '#EE9B00', '#CA6702'];

    function wrapLabel(str, maxLen) {
        if (str.length <= maxLen) return str;
        const words = str.split(' ');
        let currentLine = '';
        const lines = [];
        for (const word of words) {
            if ((currentLine + ' ' + word).trim().length > maxLen) {
                lines.push(currentLine.trim());
                currentLine = '';
            }
            currentLine += ' ' + word;
        }
        lines.push(currentLine.trim());
        return lines;
    }

    const defaultTooltipCallbacks = {
        title: function(tooltipItems) {
            const item = tooltipItems[0];
            let label = item.chart.data.labels[item.dataIndex];
            return Array.isArray(label) ? label.join(' ') : label;
        }
    };

    const defaultChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: legendLabelColor,
                    font: { family: "'Inter', sans-serif" }
                }
            },
            tooltip: {
                ...defaultTooltipCallbacks,
                backgroundColor: tooltipBgColor,
                titleColor: tooltipTitleColor,
                bodyColor: tooltipBodyColor,
                borderColor: gridColor,
                borderWidth: 1,
                padding: 10,
                cornerRadius: 6,
            }
        },
        scales: {
            y: {
                ticks: { color: tickColor },
                grid: { color: gridColor }
            },
            x: {
                ticks: { color: tickColor },
                grid: { color: gridColor }
            }
        }
    };

    let charts = [];

    const neuroCtx = document.getElementById('neurochemicalsChart');
    if(neuroCtx) {
        charts.push(new Chart(neuroCtx, {
            type: 'doughnut',
            data: {
                labels: ['Dopamine', 'Norepinephrine', 'Endorphins', 'Anandamide', 'Serotonin'],
                datasets: [{
                    label: 'Neurochemical Mix',
                    data: [20, 20, 20, 20, 20],
                    backgroundColor: bluesAndYellows,
                    borderColor: doughnutBorderColor,
                    borderWidth: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: legendLabelColor,
                            font: { family: "'Inter', sans-serif" },
                            boxWidth: 15,
                            padding: 15
                        }
                    },
                    tooltip: {
                         ...defaultChartOptions.plugins.tooltip,
                         callbacks: defaultTooltipCallbacks
                    }
                }
            }
        }));
    }

    const blockersCtx = document.getElementById('flowBlockersChart');
    if (blockersCtx) {
         charts.push(new Chart(blockersCtx, {
            type: 'bar',
            data: {
                labels: ['The Phone', 'Distraction', 'Friction', 'Dispersion', wrapLabel('Life Maintenance Load', 16)].map(l => typeof l === 'string' ? wrapLabel(l, 16) : l),
                datasets: [{
                    label: 'Cognitive Disruption Score',
                    data: [95, 80, 60, 75, 50],
                    backgroundColor: brilliantBlues.slice(1),
                    borderColor: brilliantBlues,
                    borderWidth: 1
                }]
            },
            options: {
                ...defaultChartOptions,
                indexAxis: 'y',
                plugins: {
                    ...defaultChartOptions.plugins,
                    legend: { display: false },
                }
            }
        }));
    }

    const triggersCtx = document.getElementById('flowTriggersChart');
    if (triggersCtx) {
         charts.push(new Chart(triggersCtx, {
            type: 'radar',
            data: {
                labels: [wrapLabel('Clear Goals', 16), wrapLabel('Immediate Feedback', 16), wrapLabel('Challenge/Skills Balance', 16), wrapLabel('High Consequences', 16), 'Novelty'],
                datasets: [{
                    label: 'Ideal Trigger Mix',
                    data: [90, 80, 95, 75, 70],
                    fill: true,
                    backgroundColor: 'rgba(148, 210, 189, 0.4)',
                    borderColor: '#0A9396',
                    pointBackgroundColor: '#0A9396',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#0A9396'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    ...defaultChartOptions.plugins,
                    legend: { display: false },
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        angleLines: { color: gridColor },
                        grid: { color: gridColor },
                        pointLabels: {
                            color: pointLabelColor,
                            font: { size: 10 }
                         },
                        ticks: {
                            color: tickColor,
                            backdropColor: isDarkMode ? 'rgba(55, 65, 81, 0.75)' : 'rgba(255, 255, 255, 0.75)', // gray-700 vs white
                            font: { size: 8 }
                        }
                    }
                }
            }
        }));
    }

    const outputDipCtx = document.getElementById('outputDipChart');
    if(outputDipCtx) {
        charts.push(new Chart(outputDipCtx, {
            type: 'line',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8'],
                datasets: [
                    {
                        label: 'Grinding (Linear Growth)',
                        data: [10, 12, 14, 16, 18, 20, 22, 24],
                        borderColor: '#CA6702',
                        backgroundColor: 'rgba(202, 103, 2, 0.1)',
                        tension: 0.1,
                        borderWidth: 2,
                    },
                     {
                        label: 'Building Leverage (Exponential Growth)',
                        data: [10, 11, 9, 10, 15, 22, 35, 50],
                        borderColor: '#0A9396',
                        backgroundColor: 'rgba(10, 147, 150, 0.1)',
                        fill: true,
                        tension: 0.4,
                        borderWidth: 3,
                    }
                ]
            },
            options: defaultChartOptions
        }));
    }

    return () => {
      charts.forEach(chart => chart.destroy());
    };
  }, []);

  const cardClasses = "bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-colors duration-500 ease-in-out";
  const cardHeadingClasses = "text-xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200";
  const cardTextClasses = "text-slate-600 dark:text-slate-300 text-sm mb-4";

  return (
    <div className={`${sectionClasses} pt-32 pb-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="md:col-span-2 lg:col-span-3 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 md:p-8 transition-colors duration-500 ease-in-out">
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">What is Flow?</h2>
                <p className="text-slate-600 dark:text-slate-300 max-w-4xl">Flow is an optimal state of consciousness where you feel and perform at your best. It's a state of deep absorption where action and awareness merge, time dilates, and performance soars. This infographic visualizes the key concepts and actionable protocols to help you engineer more flow into your life.</p>
            </div>

            <div className={cardClasses}>
                <h3 className={cardHeadingClasses}>The Neurochemical Cocktail</h3>
                <p className={cardTextClasses}>Flow is driven by a potent mix of five performance-enhancing neurochemicals. This chart shows their equal contribution to creating the state of effortless exertion.</p>
                <div className="chart-container">
                    <canvas id="neurochemicalsChart"></canvas>
                </div>
            </div>

            <div className={cardClasses}>
                <h3 className={cardHeadingClasses}>The Four Pillars of Flow</h3>
                <p className={cardTextClasses}>Consistently accessing flow requires training four key areas. These pillars form the foundation of peak performance.</p>
                <ul className="space-y-3 mt-6 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><span className="text-2xl mr-4">🚫</span><div><strong className="text-[#AE2012]">Flow Blockers:</strong> Obstacles that suppress flow.</div></li>
                    <li className="flex items-center"><span className="text-2xl mr-4">📈</span><div><strong className="text-[#0A9396]">Flow Proneness:</strong> Your natural tendency to find flow.</div></li>
                    <li className="flex items-center"><span className="text-2xl mr-4">🎯</span><div><strong className="text-[#EE9B00]">Flow Triggers:</strong> Preconditions that drive you into flow.</div></li>
                    <li className="flex items-center"><span className="text-2xl mr-4">🔄</span><div><strong className="text-[#005F73]">Flow Cycle:</strong> The four distinct phases of a flow state.</div></li>
                </ul>
            </div>
            
            <div className={`${cardClasses} flex flex-col justify-center text-center`}>
                <div className="text-6xl font-extrabold text-indigo-600 dark:text-indigo-400">4%</div>
                <div className="text-lg font-bold mt-2 text-gray-800 dark:text-gray-200">The Challenge/Skill Sweet Spot</div>
                <p className="text-sm mt-2 text-slate-500 dark:text-slate-400">Flow is triggered when a task is roughly 4% more challenging than your current skill level.</p>
            </div>

            <div className={`md:col-span-2 ${cardClasses}`}>
                <h3 className={cardHeadingClasses}>The Cost of Flow Blockers</h3>
                <p className={cardTextClasses}>Modern life is filled with "flow assassins." This chart illustrates the relative cognitive cost and disruption caused by common blockers, with the phone being the most potent interrupter.</p>
                <div className="chart-container h-80 md:h-96 max-h-[450px]">
                    <canvas id="flowBlockersChart"></canvas>
                </div>
            </div>

            <div className="lg:col-span-3 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 md:p-8 transition-colors duration-500 ease-in-out">
                <h3 className={cardHeadingClasses}>The Flow Cycle: Riding the Wave of Performance</h3>
                <p className={`${cardTextClasses} text-center max-w-3xl mx-auto`}>Flow isn't a single event but a four-stage cycle. Understanding this process allows you to persist through the difficult initial stage and intentionally seek recovery to repeat the cycle.</p>
                <div className="flow-cycle-container grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 md:gap-x-12 relative text-gray-700 dark:text-gray-300">
                    {/* Flow Cycle Items */}
                </div>
            </div>
            
            <div className={cardClasses}>
                <h3 className={cardHeadingClasses}>Balancing Flow Triggers</h3>
                <p className={cardTextClasses}>The more triggers you can stack, the faster and deeper you'll enter flow. This chart shows an ideal balance of key internal and external triggers.</p>
                <div className="chart-container">
                    <canvas id="flowTriggersChart"></canvas>
                </div>
            </div>

            <div className={`md:col-span-2 ${cardClasses}`}>
                <h3 className={cardHeadingClasses}>Leverage vs. Output: The Dip</h3>
                <p className={cardTextClasses}>When you stop grinding to build leverage (new skills, systems), your immediate output temporarily dips. Tolerating this dip is crucial for long-term, exponential growth, as leverage creates a much higher performance ceiling.</p>
                <div className="chart-container h-80 md:h-96 max-h-[450px]">
                    <canvas id="outputDipChart"></canvas>
                </div>
            </div>

            <div className="lg:col-span-3 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 md:p-8 transition-colors duration-500 ease-in-out">
                <h3 className={cardHeadingClasses}>The 80/20 Rule for High Flow Sleep</h3>
                <p className={`${cardTextClasses} text-center max-w-3xl mx-auto`}>Sleep is not downtime; it's a high-performance state. Master 80% of your sleep quality by focusing on these core principles every night.</p>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                    {/* Sleep Rule Items */}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default FlowPage;