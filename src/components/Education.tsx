import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';
import { EducationItem } from '../types';

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section
      id="education"
      className="py-24 bg-white px-6 print:hidden border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center space-x-4 mb-12">
          <span className="text-xs font-black text-slate-400 font-mono tracking-widest bg-slate-100 px-2 py-1">01</span>
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-[0.2em] text-slate-900 font-display">
            Education Milestones
          </h2>
          <div className="flex-grow h-px bg-slate-200"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-8 border-l border-slate-300 space-y-8 max-w-3xl mx-auto">
          {education.map((item, index) => {
            const isPursuing = item.status.toLowerCase() === 'pursuing';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot Icon */}
                <div
                  className={`absolute -left-11 md:-left-13 top-0.5 w-9 h-9 rounded-none flex items-center justify-center border-4 border-white shadow-sm text-white transition-colors ${
                    isPursuing ? 'bg-indigo-600 scale-110' : 'bg-slate-400'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>

                {/* Content Card with strict Indigo/Slate parameters */}
                <div className={`p-6 md:p-8 bg-slate-50 border-l-4 transition-all duration-305 relative group ${
                  isPursuing ? 'border-indigo-600' : 'border-slate-300'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 block ${
                        isPursuing ? 'text-indigo-600' : 'text-slate-500'
                      }`}>
                        {isPursuing ? 'Active / Currently Pursuing' : 'Secondary Education'}
                      </span>
                      <h3 className="text-lg font-display font-bold text-slate-900 leading-tight">
                        {item.degree}
                      </h3>
                      <p className="text-slate-600 font-semibold text-xs mt-0.5 font-mono">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 md:text-right">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-600 border border-slate-200 rounded-none text-xs font-mono font-bold tracking-tight">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  {item.details && (
                    <div className="mt-4 border-t border-slate-200/65 pt-4 text-slate-500 text-xs leading-relaxed font-sans flex items-start gap-2.5">
                      <BookOpen className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                      <p>{item.details}</p>
                    </div>
                  )}

                  {/* Highlights section to add student feel */}
                  {isPursuing && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-none text-[10px] font-bold font-mono tracking-wider">
                        <Award className="w-3 h-3 text-indigo-600" /> BCA 1ST YEAR STUDENT
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900 text-white rounded-none text-[10px] font-bold font-mono tracking-wider">
                        <Award className="w-3 h-3 text-indigo-400" /> TAMIL NADU SYLLABUS
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
