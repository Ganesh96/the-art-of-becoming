import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const FlowPage = () => {
  // Use a ref to hold the chart instances. This persists across re-renders.
  const chartRefs = useRef({});

  useEffect(() => {
    // This function will run when the component mounts.
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

    // A robust function to merge options deeply
    function mergeDeep(...objects) {
        const isObject = obj => obj && typeof obj === 'object';
        return objects.reduce((prev, obj) => {
            Object.keys(obj).forEach(key => {
                const pVal = prev[key];
                const oVal = obj[key];
                if (Array.isArray(pVal) && Array.isArray(oVal)) {
                    prev[key] = pVal.concat(...oVal);
                } else if (isObject(pVal) && isObject(oVal)) {
                    prev[key] = mergeDeep(pVal, oVal);
                } else {
                    prev[key] = oVal;
                }
            });
            return prev;
        }, {});
    }

    const defaultChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#334155',
                    font: { family: "'Inter', sans-serif" }
                }
            },
            tooltip: {
                callbacks: defaultTooltipCallbacks
            }
        },
        scales: {
            y: {
                ticks: { color: '#475569' },
                grid: { color: '#e2e8f0' }
            },
            x: {
                ticks: { color: '#475569' },
                grid: { color: '#e2e8f0' }
            }
        }
    };
    
    // This function is now safer and will not throw errors.
    function applyChartDarkModeColors(options) {
        const isDarkMode = document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (!isDarkMode) return options;

        const darkGridColor = '#475569';
        const darkTickColor = '#e2e8f0';

        const darkOptions = {
            plugins: {
                legend: { labels: { color: darkTickColor } }
            },
            scales: {
                y: {
                    ticks: { color: darkTickColor },
                    grid: { color: darkGridColor }
                },
                x: {
                    ticks: { color: darkTickColor },
                    grid: { color: darkGridColor }
                },
                r: {
                    angleLines: { color: darkGridColor },
                    grid: { color: darkGridColor },
                    pointLabels: { color: darkTickColor },
                    ticks: {
                        color: darkTickColor,
                        backdropColor: 'rgba(31, 41, 55, 0.75)'
                    }
                }
            }
        };

        return mergeDeep(JSON.parse(JSON.stringify(options)), darkOptions);
    }

    function createChart(canvasId, config) {
        // Destroy existing chart on the canvas if it exists
        if (chartRefs.current[canvasId]) {
            chartRefs.current[canvasId].destroy();
        }
        
        const ctx = document.getElementById(canvasId);
        if (ctx) {
            chartRefs.current[canvasId] = new Chart(ctx, config);
        }
    }

    // --- Chart Configurations ---
    const neuroOptions = applyChartDarkModeColors({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#334155',
                    font: { family: "'Inter', sans-serif" },
                    boxWidth: 15,
                    padding: 15
                }
            },
             tooltip: { callbacks: defaultTooltipCallbacks }
        }
    });

    createChart('neurochemicalsChart', {
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
        options: neuroOptions
    });

    const blockersOptions = applyChartDarkModeColors({
        ...defaultChartOptions,
        indexAxis: 'y',
         plugins: {
            legend: { display: false },
            tooltip: { callbacks: defaultTooltipCallbacks }
        }
    });
    
    createChart('flowBlockersChart', {
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
        options: blockersOptions
    });

    const triggersOptions = applyChartDarkModeColors({
        ...defaultChartOptions,
        scales: {
            ...defaultChartOptions.scales,
            r: {
                beginAtZero: true,
                max: 100,
                pointLabels: { font: { size: 10 } }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: { callbacks: defaultTooltipCallbacks }
        }
    });

    createChart('flowTriggersChart', {
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
         options: triggersOptions
    });

    const outputDipOptions = applyChartDarkModeColors({ ...defaultChartOptions });
    
    createChart('outputDipChart', {
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
        options: outputDipOptions
    });

    // Cleanup function: This will be called when the component unmounts.
    return () => {
      Object.values(chartRefs.current).forEach(chart => chart.destroy());
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount.

  const styles = `
    body { font-family: 'Inter', sans-serif; background-color: #f8fafc; }
    .dark body { background-color: #111827; }
    .chart-container { position: relative; width: 100%; max-width: 500px; margin: auto; height: 300px; max-height: 400px; }
    @media (min-width: 768px) { .chart-container { height: 350px; } }
    .kpi-card { background: linear-gradient(145deg, #0A9396, #005F73); color: white; border-radius: 0.75rem; padding: 2rem; text-align: center; }
    .kpi-number { font-size: 4rem; font-weight: 900; line-height: 1; }
    .kpi-label { font-size: 1.125rem; font-weight: 600; margin-top: 0.5rem; }
    .flow-cycle-item::after { content: '→'; position: absolute; right: -2rem; top: 50%; transform: translateY(-50%); font-size: 2.5rem; color: #94D2BD; }
    .flow-cycle-container > div:last-child .flow-cycle-item::after { content: ''; }
  `;

  return (
    <>
      <style>{styles}</style>
      <main className="container mx-auto px-6 py-12 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow-md p-6 md:p-8 dark:bg-gray-700">
                <h2 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">What is Flow?</h2>
                <p className="text-slate-600 max-w-4xl dark:text-slate-300">Flow is an optimal state of consciousness where you feel and perform at your best. It's a state of deep absorption where action and awareness merge, time dilates, and performance soars. This infographic visualizes the key concepts and actionable protocols to help you engineer more flow into your life.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-700">
                <h3 className="text-xl font-bold mb-4 text-center text-slate-800 dark:text-white">The Neurochemical Cocktail</h3>
                <p className="text-slate-600 text-sm mb-4 dark:text-slate-300">Flow is driven by a potent mix of five performance-enhancing neurochemicals. This chart shows their equal contribution to creating the state of effortless exertion.</p>
                <div className="chart-container">
                    <canvas id="neurochemicalsChart"></canvas>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-700">
                <h3 className="text-xl font-bold mb-4 text-center text-slate-800 dark:text-white">The Four Pillars of Flow</h3>
                <p className="text-slate-600 text-sm mb-4 dark:text-slate-300">Consistently accessing flow requires training four key areas. These pillars form the foundation of peak performance.</p>
                <ul className="space-y-3 mt-6 text-slate-800 dark:text-white">
                    <li className="flex items-center"><span className="text-2xl mr-4">🚫</span><div><strong style={{color: '#AE2012'}}>Flow Blockers:</strong> Obstacles that suppress flow.</div></li>
                    <li className="flex items-center"><span className="text-2xl mr-4">📈</span><div><strong style={{color: '#0A9396'}}>Flow Proneness:</strong> Your natural tendency to find flow.</div></li>
                    <li className="flex items-center"><span className="text-2xl mr-4">🎯</span><div><strong style={{color: '#EE9B00'}}>Flow Triggers:</strong> Preconditions that drive you into flow.</div></li>
                    <li className="flex items-center"><span className="text-2xl mr-4">🔄</span><div><strong style={{color: '#005F73'}}>Flow Cycle:</strong> The four distinct phases of a flow state.</div></li>
                </ul>
            </div>
            
            <div className="kpi-card flex flex-col justify-center">
                <div className="kpi-number">4%</div>
                <div className="kpi-label">The Challenge/Skill Sweet Spot</div>
                <p className="text-sm mt-2 opacity-80">Flow is triggered when a task is roughly 4% more challenging than your current skill level.</p>
            </div>

            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6 dark:bg-gray-700">
                <h3 className="text-xl font-bold mb-4 text-center text-slate-800 dark:text-white">The Cost of Flow Blockers</h3>
                <p className="text-slate-600 text-sm mb-4 dark:text-slate-300">Modern life is filled with "flow assassins." This chart illustrates the relative cognitive cost and disruption caused by common blockers, with the phone being the most potent interrupter.</p>
                <div className="chart-container h-80 md:h-96 max-h-[450px]">
                    <canvas id="flowBlockersChart"></canvas>
                </div>
            </div>

            <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6 md:p-8 dark:bg-gray-700">
                <h3 className="text-xl font-bold mb-6 text-center text-slate-800 dark:text-white">The Flow Cycle: Riding the Wave of Performance</h3>
                <p className="text-slate-600 text-sm mb-8 text-center max-w-3xl mx-auto dark:text-slate-300">Flow isn't a single event but a four-stage cycle. Understanding this process allows you to persist through the difficult initial stage and intentionally seek recovery to repeat the cycle.</p>
                <div className="flow-cycle-container grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 md:gap-x-12 relative">
                    <div className="text-center relative">
                        <div className="flow-cycle-item">
                            <div className="text-5xl mb-2">🧗</div>
                            <h4 className="font-bold text-lg" style={{color: '#AE2012'}}>1. Struggle</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Pushing your limits. Feels like hard work. Characterized by high stress and cortisol.</p>
                        </div>
                    </div>
                    <div className="text-center relative">
                        <div className="flow-cycle-item">
                            <div className="text-5xl mb-2">🧘</div>
                            <h4 className="font-bold text-lg" style={{color: '#EE9B00'}}>2. Release</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Stepping back from the problem. Triggered by "boring breaks." Alpha brainwaves take over.</p>
                        </div>
                    </div>
                    <div className="text-center relative">
                        <div className="flow-cycle-item">
                            <div className="text-5xl mb-2">🚀</div>
                            <h4 className="font-bold text-lg" style={{color: '#0A9396'}}>3. Flow</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-300">The peak performance state. Effortless exertion and total absorption.</p>
                        </div>
                    </div>
                    <div className="text-center relative">
                        <div className="flow-cycle-item">
                            <div className="text-5xl mb-2">🔋</div>
                            <h4 className="font-bold text-lg" style={{color: '#005F73'}}>4. Recovery</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-300">Active recuperation. Replenishing neurochemicals and consolidating memory.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-700">
                <h3 className="text-xl font-bold mb-4 text-center text-slate-800 dark:text-white">Balancing Flow Triggers</h3>
                <p className="text-slate-600 text-sm mb-4 dark:text-slate-300">The more triggers you can stack, the faster and deeper you'll enter flow. This chart shows an ideal balance of key internal and external triggers.</p>
                <div className="chart-container">
                    <canvas id="flowTriggersChart"></canvas>
                </div>
            </div>

            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6 dark:bg-gray-700">
                <h3 className="text-xl font-bold mb-4 text-center text-slate-800 dark:text-white">Leverage vs. Output: The Dip</h3>
                <p className="text-slate-600 text-sm mb-4 dark:text-slate-300">When you stop grinding to build leverage (new skills, systems), your immediate output temporarily dips. Tolerating this dip is crucial for long-term, exponential growth, as leverage creates a much higher performance ceiling.</p>
                <div className="chart-container h-80 md:h-96 max-h-[450px]">
                    <canvas id="outputDipChart"></canvas>
                </div>
            </div>

            <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6 md:p-8 dark:bg-gray-700">
                <h3 className="text-xl font-bold mb-6 text-center text-slate-800 dark:text-white">The 80/20 Rule for High Flow Sleep</h3>
                <p className="text-slate-600 text-sm mb-8 text-center max-w-3xl mx-auto dark:text-slate-300">Sleep is not downtime; it's a high-performance state. Master 80% of your sleep quality by focusing on these core principles every night.</p>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                    <div className="bg-slate-100 p-4 rounded-lg dark:bg-gray-800">
                        <div className="text-4xl mb-2">🔇</div>
                        <h4 className="font-bold text-slate-800 dark:text-white">Deaf</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300">Eliminate noise with earplugs or white noise.</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-lg dark:bg-gray-800">
                        <div className="text-4xl mb-2">🕶️</div>
                        <h4 className="font-bold text-slate-800 dark:text-white">Blind</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300">Ensure total darkness with a mask or blackout curtains.</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-lg dark:bg-gray-800">
                        <div className="text-4xl mb-2">❄️</div>
                        <h4 className="font-bold text-slate-800 dark:text-white">Cold</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300">Keep room temp between 60-67°F (15-19°C).</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-lg dark:bg-gray-800">
                        <div className="text-4xl mb-2">🍽️</div>
                        <h4 className="font-bold text-slate-800 dark:text-white">Hungry</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300">Avoid food, caffeine, and alcohol before bed.</p>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-lg col-span-2 lg:col-span-1 dark:bg-gray-800">
                        <div className="text-4xl mb-2">⏰</div>
                        <h4 className="font-bold text-slate-800 dark:text-white">Consistent</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-300">Same bedtime and wakeup time, every day.</p>
                    </div>
                </div>
            </div>

        </div>
      </main>
    </>
  );
};

export default FlowPage;