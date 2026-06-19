import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Globe, Sparkles, RefreshCw, Play, Pause, ChevronRight, Check } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsProps {
  projects: ProjectItem[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'demo'>('details');
  const [selectedProjectId, setSelectedProjectId] = useState<string>("personal-portfolio");

  // Sorting Visualizer State (Algorithm Sandbox)
  const [sortArray, setSortArray] = useState<number[]>([45, 23, 76, 12, 89, 54, 31, 65]);
  const [isSorting, setIsSorting] = useState(false);
  const [sortingStep, setSortingStep] = useState<string>("Click Animate or Walk to start sorting!");
  const [compareIndices, setCompareIndices] = useState<[number, number] | null>(null);
  const [swapIndices, setSwapIndices] = useState<[number, number] | null>(null);
  const [sortIntervalId, setSortIntervalId] = useState<NodeJS.Timeout | null>(null);

  // Mini portfolio color customizer state
  const [portfolioHue, setPortfolioHue] = useState<string>("bg-emerald-500");
  const [portfolioThemeName, setPortfolioThemeName] = useState<string>("Emerald Teal");

  // Reset/Generate random array
  const generateRandomArray = () => {
    if (isSorting) {
      stopSorting();
    }
    const newArr = Array.from({ length: 8 }, () => Math.floor(Math.random() * 85) + 15);
    setSortArray(newArr);
    setCompareIndices(null);
    setSwapIndices(null);
    setSortingStep("New array generated! Press Animate to Sort.");
  };

  const stopSorting = () => {
    if (sortIntervalId) {
      clearInterval(sortIntervalId);
      setSortIntervalId(null);
    }
    setIsSorting(false);
    setCompareIndices(null);
    setSwapIndices(null);
  };

  // Perform a full visual bubble sort
  const runBubbleSort = async () => {
    if (isSorting) {
      stopSorting();
      return;
    }

    setIsSorting(true);
    let arr = [...sortArray];
    let n = arr.length;
    let i = 0;
    let j = 0;

    const interval = setInterval(() => {
      if (i >= n - 1) {
        clearInterval(interval);
        setIsSorting(false);
        setCompareIndices(null);
        setSwapIndices(null);
        setSortingStep("Complete! Array sorted successfully in O(N²).");
        return;
      }

      setCompareIndices([j, j + 1]);
      setSortingStep(`Comparing Index ${j} (${arr[j]}) and Index ${j + 1} (${arr[j + 1]})`);

      setTimeout(() => {
        if (arr[j] > arr[j + 1]) {
          setSwapIndices([j, j + 1]);
          setSortingStep(`Swap: ${arr[j]} is larger than ${arr[j + 1]}! Moving the larger value up.`);
          
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setSortArray([...arr]);
        } else {
          setSwapIndices(null);
          setSortingStep(`No swap: ${arr[j]} is less than or equal to ${arr[j + 1]}.`);
        }
      }, 350);

      j++;
      if (j >= n - i - 1) {
        j = 0;
        i++;
      }
    }, 900);

    setSortIntervalId(interval);
  };

  useEffect(() => {
    return () => {
      if (sortIntervalId) clearInterval(sortIntervalId);
    };
  }, [sortIntervalId]);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 border-b border-slate-200 px-6 print:hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-12">
          <span className="text-xs font-black text-slate-400 font-mono tracking-widest bg-slate-100 px-2 py-1">03</span>
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-[0.2em] text-slate-900 font-display">
            Selected Projects
          </h2>
          <div className="flex-grow h-px bg-slate-200"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Project List / Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {projects.map((project) => {
              const isSelected = selectedProjectId === project.id;

              return (
                <button
                  key={project.id}
                  onClick={() => {
                    setSelectedProjectId(project.id);
                    setActiveTab('details');
                    stopSorting();
                  }}
                  className={`p-6 rounded-none border text-left cursor-pointer transition-all duration-200 relative overflow-hidden group ${
                    isSelected
                      ? 'bg-white border-2 border-indigo-600 shadow-md'
                      : 'bg-white border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <span className="inline-block px-2.5 py-0.5 rounded-none text-[9px] font-bold tracking-wider uppercase font-mono bg-slate-100 text-slate-650 border border-slate-205 mb-3">
                    {project.category}
                  </span>

                  <h3 className="text-base font-display font-black uppercase text-slate-950 mb-2 group-hover:text-indigo-650 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono font-bold uppercase text-slate-500 px-2 py-0.5 bg-slate-50 rounded-none border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* /* {/* Interactive Playgrounds and Demos / Right Column */}
          {/* <div className="lg:col-span-7 flex flex-col bg-white border-2 border-slate-900 rounded-none overflow-hidden shadow-sm"> */}
            {/* Playgrounds Tabs header */}
            {/* <div className="flex border-b-2 border-slate-900 bg-slate-100 p-1">
              <button
                onClick={() => setActiveTab('details')}
                className={`flex-1 py-3 px-4 text-[10px] font-mono font-bold uppercase tracking-widest rounded-none cursor-pointer transition-colors ${
                  activeTab === 'details'
                    ? 'bg-slate-900 text-white border border-slate-850'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              > }
                Project Focus Details
              </button>
              <button
                onClick={() => setActiveTab('demo')}
                className={`flex-1 py-3 px-4 text-[10px] font-mono font-bold uppercase tracking-widest rounded-none cursor-pointer transition-colors flex items-center justify-center gap-1.5 ${
                  activeTab === 'demo'
                    ? 'bg-slate-900 text-white border border-slate-850 font-black'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                Live Interactive Sandbox
              </button>
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === 'details' ? (
                  <motion.div
                    key="details-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-600 font-bold block mb-1">
                        PROJECT CASE STUDY
                      </span>
                      <h3 className="text-xl font-display font-black text-slate-950 tracking-tight uppercase">
                        {selectedProjectId === 'personal-portfolio'
                          ? "Veereswaran's Portfolio Website"
                          : 'OOP Algorithms & Sorters'}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-655 leading-relaxed font-sans">
                      {selectedProjectId === 'personal-portfolio'
                        ? 'Designed as a responsive web identity card. This provides a direct, highly scannable grid profile to easily capture the attention of technical interviewers and showcase modern front-end layouts, whitespace discipline, and clean custom cards.'
                        : 'Developed during academic coursework in Python and Java. These algorithmic solvers focus on learning the core mechanics of recursive programs, iteration bounds, structural pointers, space-time complexity analysis (Big O), and class constructs.'}
                    </p>

                    <div className="space-y-3">
                      <span className="text-[10px] uppercase font-mono font-bold text-slate-400 block">
                        Core Learning Outcomes:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-600 font-mono uppercase font-bold">
                        {selectedProjectId === 'personal-portfolio' ? (
                          <>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-indigo-600" />
                              Mobile-first layouts with flexible grid setups
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-indigo-600" />
                              Interactive CSS translation actions & tags
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-indigo-600" />
                              Clean responsive imagery with robust loaders
                            </li>
                          </>
                        ) : (
                          <>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-indigo-600" />
                              Class properties, scopes, and loops boundary logic
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-indigo-600" />
                              Object definitions, scopes, and encapsulation
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-indigo-600" />
                              Interactive sorting visualizer canvas engine
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="demo-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    {selectedProjectId === 'personal-portfolio' ? (
                      /* Demo 1: Mini portfolio real-time hue color simulator */
                      {/* <div className="space-y-6">
                        <div>
                          <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-600 font-bold block mb-1">
                            HTML/CSS DESIGN LAB
                          </span>
                          <h4 className="text-base font-display font-black text-slate-950 uppercase">
                            Interactive Palette Explorer
                          </h4>
                          <p className="text-xs text-slate-505 leading-relaxed mt-1">
                            Simulate how CSS utility overrides instantly adapt visual hierarchy and font layout contrast.
                          </p>
                        </div> */}

                        {/* Interactive UI card wrapper */}
                        {/* <div className="bg-slate-50 border border-slate-200 p-5 rounded-none space-y-4">
                          <span className="text-[9px] font-mono text-slate-500 font-bold uppercase block">REAL-TIME PREVIEW MOCKUP:</span>
                          
                          <div className="bg-white border-2 border-slate-900 rounded-none p-4 text-center space-y-3">
                            <div className={`w-12 h-12 rounded-none mx-auto ${portfolioHue} flex items-center justify-center text-white font-bold text-xs shadow-md border border-black/10 transition-all duration-300`}>
                              VS
                            </div>
                            <div>
                              <h5 className="font-extrabold text-xs text-slate-900 uppercase">Veereswaran S</h5>
                              <span className="text-[9px] text-slate-400 font-mono uppercase block mt-0.5 font-bold">BCA Developer Student</span>
                            </div>
                            <button className={`px-4 py-1.5 text-[9px] font-mono font-bold uppercase text-white rounded-none mx-auto transition-colors duration-300 ${portfolioHue}`}>
                              Active Theme
                            </button>
                          </div>

                          <div className="flex flex-col gap-2 pt-2">
                            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase">Pick a highlight color shade:</span>
                            <div className="flex flex-wrap gap-2.5">
                              {[
                                { class: 'bg-indigo-650 bg-indigo-600', name: 'Indigo Royal hex/4f46e5' },
                                { class: 'bg-indigo-500', name: 'Metro Violet hex/6366f1' },
                                { class: 'bg-slate-900', name: 'Minimalist Slate hex/0f172a' },
                                { class: 'bg-indigo-700', name: 'Indigo Midnight hex/4338ca' }
                              ].map((theme) => (
                                <button
                                  key={theme.class}
                                  onClick={() => {
                                    setPortfolioHue(theme.class.split(' ').pop() || '');
                                    setPortfolioThemeName(theme.name);
                                  }}
                                  className={`w-7 h-7 rounded-none cursor-pointer border border-slate-300 transition-all ${
                                    portfolioHue === (theme.class.split(' ').pop() || '') ? 'ring-2 ring-indigo-500 ring-offset-2 scale-110' : 'hover:scale-105'
                                  } ${theme.class}`}
                                  title={theme.name}
                                >
                                  {portfolioHue === (theme.class.split(' ').pop() || '') && <Check className="w-3.5 h-3.5 text-white" />}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div> */}

                        {/* Interactive dynamic code display output */}
                        {/* <div className="p-3 bg-slate-900 rounded-none text-left">
                          <code className="text-[9px] text-indigo-305 text-indigo-300 font-mono leading-relaxed block overflow-x-auto whitespace-pre">
                            {`<!-- Real-time Styled output -->\n<div class="p-4 rounded-none border border-slate-900">\n  <button class="px-4 py-2 ${portfolioHue} text-white font-bold uppercase">\n    Active Theme: ${portfolioThemeName.split(' ')[0]}\n  </button>\n</div>`}
                          </code>
                        </div>
                      </div>
                    ) : (
                      /* Demo 2: Algorithm visualizer! */
                      {/* <div className="space-y-6 flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-600 font-bold block">
                              BUBBLE SORT SIMULATION
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">O(N²) Complex</span>
                          </div>
                          <h4 className="text-base font-display font-black text-slate-950 uppercase mt-1">
                            Sorting visualizer logic loop */}
                        //   </h4> */}
                        //   <p className="text-xs text-slate-505 leading-relaxed mt-1">
                        //     See how array index swaps resolve and order randomized variables sequentially down the track.
                        //   </p>
                        // </div>

                        {/* Chart representation */}
                        {/* <div className="bg-slate-50 border border-slate-200 p-6 rounded-none flex flex-col justify-between min-h-[220px]"> */}
                          {/* Columns container */}
                          {/* <div className="flex items-end justify-center gap-2.5 sm:gap-4.5 h-36 border-b border-slate-250 pb-2">
                            {sortArray.map((val, idx) => {
                              const isComparing = compareIndices?.includes(idx);
                              const isSwapping = swapIndices?.includes(idx);

                              let barColor = 'bg-slate-300';
                              if (isSwapping) {
                                barColor = 'bg-indigo-600 shadow-md';
                              } else if (isComparing) {
                                barColor = 'bg-slate-900';
                              }

                              return (
                                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 max-w-[28px] sm:max-w-[36px]"> */}
                                  {/* Value label */}
                                  {/* <span className={`text-[9px] font-bold font-mono ${
                                    isComparing || isSwapping ? 'text-slate-900' : 'text-slate-400'
                                  }`}>
                                    {val}
                                  </span> */}
                                  {/* Bar graphic - strictly geometric rounded-none */}
                                  {/* <motion.div
                                    style={{ height: `${val * 1.2}px` }}
                                    className={`w-full rounded-none transition-colors duration-250 ${barColor}`}
                                    layout
                                  />
                                </div>
                              );
                            })}
                          </div> */}

                          /* {/* Trace Status Line */}
                          {/* <div className="mt-4 bg-white border border-slate-205 px-3 py-2 rounded-none text-[10px] font-mono font-bold uppercase text-slate-600 text-center leading-normal">
                            🔀 Status: <span className="text-indigo-600">{sortingStep}</span>
                          </div>
                        </div> */ */}

                        {/* Actions control bar */}
                        {/* <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                          <button
                            onClick={generateRandomArray}
                            className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-mono font-bold uppercase text-slate-700 hover:text-slate-950 bg-slate-50 border border-slate-200 rounded-none cursor-pointer hover:bg-slate-100 transition-colors"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            Random Inputs
                          </button>

                          <button
                            onClick={runBubbleSort}
                            className={`flex items-center gap-2 px-5 py-2.5 text-[10px] font-mono font-bold uppercase rounded-none cursor-pointer transition-all ${
                              isSorting
                                ? 'bg-indigo-700 text-white hover:bg-indigo-800' */}
                                {/* : 'bg-slate-900 text-white hover:bg-indigo-600'
                            }`}
                          >
                            {isSorting ? (
                              <>
                                <Pause className="w-3.5 h-3.5" /> Stop Sorting
                              </>
                            ) : (
                              <>
                                <Play className="w-3.5 h-3.5" /> Animate Sort
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence> */}
            {/* </div> */}
          {/* </div> */ */} */}
        </div>
      </div>
    </section>
  );
}
