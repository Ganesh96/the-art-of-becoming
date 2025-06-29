import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const FlowPage = ({ commonStyles }) => {
  const { sectionClasses, contentWrapperClasses, headingClasses, subHeadingClasses, textClasses } = commonStyles;

  useEffect(() => {
    const brilliantBlues = ['#005F73', '#0A9396', '#94D2BD', '#EE9B00', '#CA6702', '#AE2012', '#9B2226'];
    const bluesAndYellows = ['#005F73', '#0A9396', '#94D2BD', '#E9D8A6', '#EE9B00', '#CA6702'];

    function wrapLabel(str, maxLen) {
        if (str.length <= maxLen) {
            return str;
        }
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
            if (Array.isArray(label)) {
              return label.join(' ');
            } else {
              return label;
            }
        }
    };

    const defaultChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#334155',
                    font: {
                        family: "'Inter', sans-serif"
                    }
                }
            },
            tooltip: {
                callbacks: defaultTooltipCallbacks
            }
        },
        scales: {
            y: {
                ticks: {
                   color: '#475569'
                },
                grid: {
                   color: '#e2e8f0'
                }
            },
            x: {
                ticks: {
                   color: '#475569'
                },
                grid: {
                   color: '#e2e8f0'
                }
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
                    borderColor: '#f8fafc',
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
                            color: '#334155',
                            font: {
                                family: "'Inter', sans-serif"
                            },
                            boxWidth: 15,
                            padding: 15
                        }
                    },
                     tooltip: {
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
                    legend: { display: false },
                    tooltip: { callbacks: defaultTooltipCallbacks }
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
                    legend: { display: false },
                    tooltip: { callbacks: defaultTooltipCallbacks }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        angleLines: { color: '#e2e8f0' },
                        grid: { color: '#e2e8f0' },
                        pointLabels: {
                            color: '#334155',
                            font: { size: 10 }
                         },
                        ticks: {
                            color: '#475569',
                            backdropColor: 'rgba(255, 255, 255, 0.75)',
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

  return (
    <div className={`${sectionClasses} pt-32 pb-16`}>
      <div className={contentWrapperClasses}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-2">What is Flow?</h2>
                <p className="text-slate-600 max-w-4xl">Flow is an optimal state of consciousness where you feel and perform at your best. It's a state of deep absorption where action and awareness merge, time dilates, and performance soars. This infographic visualizes the key concepts and actionable protocols to help you engineer more flow into your life.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-center">The Neurochemical Cocktail</h3>
                <p className="text-slate-600 text-sm mb-4">Flow is driven by a potent mix of five performance-enhancing neurochemicals. This chart shows their equal contribution to creating the state of effortless exertion.</p>
                <div className="chart-container">
                    <canvas id="neurochemicalsChart"></canvas>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-center">The Four Pillars of Flow</h3>
                <p className="text-slate-600 text-sm mb-4">Consistently accessing flow requires training four key areas. These pillars form the foundation of peak performance.</p>
                <ul className="space-y-3 mt-6">
                    <li className="flex items-center"><span className="text-2xl mr-4">🚫</span><div><strong className="text-[#AE2012]">Flow Blockers:</strong> Obstacles that suppress flow.</div></li>
                    <li className="flex items-center"><span className="text-2xl mr-4">📈</span><div><strong className="text-[#0A9396]">Flow Proneness:</strong> Your natural tendency to find flow.</div></li>
                    <li className="flex items-center"><span className="text-2xl mr-4">🎯</span><div><strong className="text-[#EE9B00]">Flow Triggers:</strong> Preconditions that drive you into flow.</div></li>
                    <li className="flex items-center"><span className="text-2xl mr-4">🔄</span><div><strong className="text-[#005F73]">Flow Cycle:</strong> The four distinct phases of a flow state.</div></li>
                </ul>
            </div>
            
            <div className="kpi-card flex flex-col justify-center">
                <div className="kpi-number">4%</div>
                <div className="kpi-label">The Challenge/Skill Sweet Spot</div>
                <p className="text-sm mt-2 opacity-80">Flow is triggered when a task is roughly 4% more challenging than your current skill level.</p>
            </div>

            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-center">The Cost of Flow Blockers</h3>
                <p className="text-slate-600 text-sm mb-4">Modern life is filled with "flow assassins." This chart illustrates the relative cognitive cost and disruption caused by common blockers, with the phone being the most potent interrupter.</p>
                <div className="chart-container h-80 md:h-96 max-h-[450px]">
                    <canvas id="flowBlockersChart"></canvas>
                </div>
            </div>

            <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6 text-center">The Flow Cycle: Riding the Wave of Performance</h3>
                <p className="text-slate-600 text-sm mb-8 text-center max-w-3xl mx-auto">Flow isn't a single event but a four-stage cycle. Understanding this process allows you to persist through the difficult initial stage and intentionally seek recovery to repeat the cycle.</p>
                <div className="flow-cycle-container grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 md:gap-x-12 relative">
                    <div className="text-center relative">
                        <div className="flow-cycle-item">
                            <div className="text-5xl mb-2">🧗</div>
                            <h4 className="font-bold text-lg text-[#AE2012]">1. Struggle</h4>
                            <p className="text-xs text-slate-600">Pushing your limits. Feels like hard work. Characterized by high stress and cortisol.</p>
                        </div>
                    </div>
                    <div className="text-center relative">
                        <div className="flow-cycle-item">
                            <div className="text-5xl mb-2">🧘</div>
                            <h4 className="font-bold text-lg text-[#EE9B00]">2. Release</h4>
                            <p className="text-xs text-slate-600">Stepping back from the problem. Triggered by "boring breaks." Alpha brainwaves take over.</p>
                        </div>
                    </div>
                    <div className="text-center relative">
                        <div className="flow-cycle-item">
                            <div className="text-5xl mb-2">🚀</div>
                            <h4 className="font-bold text-lg text-[#0A9396]">3. Flow</h4>
                            <p className="text-xs text-slate-600">The peak performance state. Effortless exertion and total absorption.</p>
                        </div>
                    </div>
                    <div className="text-center relative">
                        <div className="flow-cycle-item">
                            <div className="text-5xl mb-2">🔋</div>
                            <h4 className="font-bold text-lg text-[#005F73]">4. Recovery</h4>
                            <p className="text-xs text-slate-600">Active recuperation. Replenishing neurochemicals and consolidating memory.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Balancing Flow Triggers</h3>
                <p className="text-slate-600 text-sm mb-4">The more triggers you can stack, the faster and deeper you'll enter flow. This chart shows an ideal balance of key internal and external triggers.</p>
                <div className="chart-container">
                    <canvas id="flowTriggersChart"></canvas>
                </div>
            </div>

            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Leverage vs. Output: The Dip</h3>
                <p className="text-slate-600 text-sm mb-4">When you stop grinding to build leverage (new skills, systems), your immediate output temporarily dips. Tolerating this dip is crucial for long-term, exponential growth, as leverage creates a much higher performance ceiling.</p>
                <div className="chart-container h-80 md:h-96 max-h-[450px]">
                    <canvas id="outputDipChart"></canvas>
                </div>
            </div>

            <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6 text-center">The 80/20 Rule for High Flow Sleep</h3>
                <p className="text-slate-600 text-sm mb-8 text-center max-w-3xl mx-auto">Sleep is not downtime; it's a high-performance state. Master 80% of your sleep quality by focusing on these core principles every night.</p>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                    <div className="bg-slate-100 p-4 rounded-lg">
                        <div className="text-4xl mb-2">🔇</div>
                        <h4 className="font-bold">Deaf</h4>
                        <p className="text-xs text-slate-600">Eliminate noise with earplugs or white noise.</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-lg">
                        <div className="text-4xl mb-2">🕶️</div>
                        <h4 className="font-bold">Blind</h4>
                        <p className="text-xs text-slate-600">Ensure total darkness with a mask or blackout curtains.</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-lg">
                        <div className="text-4xl mb-2">❄️</div>
                        <h4 className="font-bold">Cold</h4>
                        <p className="text-xs text-slate-600">Keep room temp between 60-67°F (15-19°C).</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-lg">
                        <div className="text-4xl mb-2">🍽️</div>
                        <h4 className="font-bold">Hungry</h4>
                        <p className="text-xs text-slate-600">Avoid food, caffeine, and alcohol before bed.</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-lg col-span-2 lg:col-span-1">
                        <div className="text-4xl mb-2">⏰</div>
                        <h4 className="font-bold">Consistent</h4>
                        <p className="text-xs text-slate-600">Same bedtime and wakeup time, every day.</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default FlowPage;