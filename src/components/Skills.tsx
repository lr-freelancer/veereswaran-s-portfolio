import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Terminal, Code2, Globe, Cpu, Layers, Star, ExternalLink, HelpCircle } from 'lucide-react';
import { SkillItem } from '../types';

interface SkillsProps {
  skills: SkillItem[];
}

interface SkillDetail {
  title: string;
  level: string;
  description: string;
  academicExperience: string;
  keyFeature: string;
}

const skillDetailsMap: Record<string, SkillDetail> = {
  "HTML5": {
    title: "Hypertext Markup Language (HTML5)",
    level: "Advanced Foundation",
    description: "Designing semantic markup structures that ensure high accessibility, clean document object models (DOM), and SEO compliance.",
    academicExperience: "Applied in building custom portfolio layouts, academic web design templates, and structuring multi-form submission web templates.",
    keyFeature: "Semantic elements, lists, media containers, grid structuring basics"
  },
  "CSS3": {
    title: "Cascading Style Sheets (CSS3)",
    level: "Intermediate-Advanced Mastery",
    description: "Creating highly responsive layouts utilizing Tailwind CSS, CSS Flexbox, CSS Grid, media queries, custom colors, variables, and transition timelines.",
    academicExperience: "Applied in styling this premium portfolio, custom layouts, hover cards, dark-mode styling, and smooth layout scroll patterns.",
    keyFeature: "Tailwind CSS utility alignment, custom transitions, viewport calculations, layout density control"
  },
  "JavaScript": {
    title: "Interactive Client Scripting (JavaScript)",
    level: "Intermediate Proficiency",
    description: "Adding reactive functionality to client user interfaces, capturing DOM events, client security loops, dynamic listing, and states.",
    academicExperience: "Implemented form listeners, multi-step triggers, and interactive algorithm sliders inside academic projects.",
    keyFeature: "Array manipulation, interactive menus, state sync, timer actions"
  },
  "Java": {
    title: "Object-Oriented Programming in Java",
    level: "Functional Foundation / College Syllabus",
    description: "In-depth understanding of standard Object-Oriented Principles: classes, objects, interfaces, encapsulation, inheritance, exceptions, and array indexes.",
    academicExperience: "Currently learning as a primary academic programming language in college. Developed basic search solvers and structure layouts.",
    keyFeature: "Object structures, conditional pathways, file scanning, core compiler syntax"
  },
  "Python": {
    title: "Modern Scripting in Python",
    level: "Functional Foundations",
    description: "Utilizing Python for general-purpose programming, lists and dictionaries, automation loops, mathematical scripts, and command-line scripts.",
    academicExperience: "Practiced personal algorithm logic solving, creating basic calculators, sorting loops, and local automated scripts.",
    keyFeature: "Clean runtime loops, list parsing, function declarations, computational modules"
  },
  "Web Development": {
    title: "Modern Web Engineering Practices",
    level: "Core Competency",
    description: "An encompassing approach to creating full functional website assets. Understanding layout responsive hierarchies, performance, dev server hosting, and modern rendering engines like Vite and React.",
    academicExperience: "Developed, deployed, and designed clean portfolios and interactive academic code playgrounds using TypeScript-driven builds.",
    keyFeature: "Full-stack client architectures, accessibility compliance, mobile design systems"
  }
};

export default function Skills({ skills }: SkillsProps) {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'languages'>('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>("HTML5"); // Default item selected to prompt view

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HtmlIcon':
        return <Layers className="w-5 h-5 text-indigo-500" />;
      case 'CssIcon':
        return <Palette className="w-5 h-5 text-indigo-500" />;
      case 'JsIcon':
        return <Cpu className="w-5 h-5 text-indigo-500" />;
      case 'JavaIcon':
        return <Code2 className="w-5 h-5 text-indigo-500" />;
      case 'PythonIcon':
        return <Terminal className="w-5 h-5 text-indigo-500" />;
      case 'WebIcon':
      default:
        return <Globe className="w-5 h-5 text-indigo-500" />;
    }
  };

  const filteredSkills = skills.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const detail = selectedSkill ? skillDetailsMap[selectedSkill] : null;

  return (
    <section
      id="skills"
      className="py-24 bg-white px-6 print:hidden border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-12">
          <span className="text-xs font-black text-slate-400 font-mono tracking-widest bg-slate-100 px-2 py-1">02</span>
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-[0.2em] text-slate-900 font-display">
            Technical Skillset
          </h2>
          <div className="flex-grow h-px bg-slate-200"></div>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center gap-2 mb-12">
          {(['all', 'frontend', 'languages'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                const matches = skills.filter(s => cat === 'all' ? true : s.category === cat);
                if (matches.length > 0) {
                  setSelectedSkill(matches[0].name);
                }
              }}
              className={`px-4 py-2.5 text-[10px] font-mono font-bold uppercase tracking-widest rounded-none cursor-pointer border transition-all duration-200 ${
                filter === cat
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:border-slate-350'
              }`}
            >
              {cat === 'all' ? 'All Skills' : cat === 'frontend' ? 'Frontend Dev' : 'Languages / OOP'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skills Grid - left column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill === skill.name;

              return (
                <motion.button
                  key={skill.name}
                  layoutId={`skill-card-${skill.name}`}
                  onClick={() => setSelectedSkill(skill.name)}
                  className={`p-5 rounded-none border text-left cursor-pointer transition-all duration-200 relative group flex items-start gap-4 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:bg-white hover:border-slate-400'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-none flex items-center justify-center shrink-0 border transition-all ${
                      isSelected
                        ? 'bg-slate-800 border-slate-700'
                        : 'bg-white border-slate-200 group-hover:scale-105'
                    }`}
                  >
                    {getIcon(skill.iconName)}
                  </div>

                  <div className="space-y-2.5 w-full overflow-hidden">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-display font-bold text-sm tracking-tight text-inherit block group-hover:text-indigo-500 transition-colors uppercase">
                        {skill.name}
                      </span>
                      <span className={`text-[9px] font-mono shrink-0 uppercase tracking-wider px-2 py-0.5 rounded-none font-bold ${
                        isSelected ? 'bg-indigo-900 text-indigo-300' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {skill.category}
                      </span>
                    </div>

                    {/* Proficiency progress track */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] font-mono opacity-80 text-inherit">
                        <span>Familiarity</span>
                        <span>{skill.proficiency}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-none bg-slate-200 overflow-hidden relative">
                        <motion.div
                          className={`h-full rounded-none ${
                            isSelected ? 'bg-indigo-400' : 'bg-indigo-600'
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Interactive Details Inspector panel - right column */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {detail ? (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-50 border-2 border-slate-350 rounded-none p-6 md:p-8 space-y-6 relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-3 relative">
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase font-mono tracking-widest text-indigo-600 font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-indigo-500 text-indigo-505" /> Key Highlight
                      </div>
                      <h3 className="text-lg font-display font-black text-slate-950 leading-tight uppercase">
                        {detail.title}
                      </h3>
                      <span className="inline-block px-2.5 py-0.5 bg-indigo-105 border border-indigo-200 text-indigo-700 text-[9px] font-mono uppercase font-bold rounded-none mt-1">
                        {detail.level}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs text-slate-650 leading-relaxed font-sans border-t border-slate-200 pt-5">
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-400 block">
                        Objective & Coverage:
                      </span>
                      <p className="text-slate-705 text-xs">
                        {detail.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 bg-white border border-slate-200 p-4 rounded-none">
                      <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-405 block">
                        Academic Context:
                      </span>
                      <p className="text-slate-550 text-[11px]">
                        {detail.academicExperience}
                      </p>
                    </div>

                    <div className="space-y-1.5 font-mono">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-slate-405 block">
                        Included Concepts:
                      </span>
                      <span className="text-[10px] text-slate-800 bg-white border border-slate-200 px-2.5 py-1 rounded-none inline-block">
                        {detail.keyFeature}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-slate-50 border border-dashed border-slate-300 rounded-none p-12 text-center text-slate-400 space-y-3">
                  <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
                  <p className="text-xs font-medium">Select any skill card on the left to inspect detailed academic coverage.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
