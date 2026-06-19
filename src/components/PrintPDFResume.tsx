import React from 'react';
import { Mail, Phone, MapPin, Code2 } from 'lucide-react';
import { PortfolioData } from '../types';

interface PrintableResumeProps {
  data: PortfolioData;
}

export default function PrintableResume({ data }: PrintableResumeProps) {
  const { profile, education, skills, projects, languages, hobbies } = data;

  return (
    <div className="hidden print:block bg-white text-gray-950 p-6 max-w-4xl mx-auto font-sans leading-relaxed text-xs">
      {/* Header Info */}
      <div className="border-b-2 border-slate-900 pb-4 mb-5 flex justify-between items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight uppercase text-slate-900">
            {profile.name}
          </h1>
          <p className="text-sm font-semibold text-slate-700 tracking-wide mt-0.5">
            {profile.title}
          </p>
        </div>

        <div className="text-right space-y-0.5 font-mono text-[10px] text-slate-800">
          <div className="flex items-center justify-end gap-1.5">
            <span>{profile.email}</span>
            <Mail className="w-3 h-3 text-slate-600" />
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <span>+91 {profile.phone}</span>
            <Phone className="w-3 h-3 text-slate-600" />
          </div>
          <div className="flex items-center justify-end gap-1.5">
            <span>{profile.location}</span>
            <MapPin className="w-3 h-3 text-slate-600" />
          </div>
        </div>
      </div>

      {/* Grid segments */}
      <div className="space-y-5">
        {/* Career Objective */}
        <div className="space-y-1.5">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-slate-900 border-b border-gray-300 pb-1">
            Career Objective
          </h2>
          <p className="text-gray-700 leading-relaxed text-[11px] font-medium">
            {profile.objective}
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-2">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-slate-900 border-b border-gray-300 pb-1">
            Education Milestones
          </h2>
          <div className="space-y-3">
            {education.map((item, index) => (
              <div key={index} className="flex justify-between items-start gap-4">
                <div className="space-y-0.5">
                  <h3 className="font-bold text-[11px] text-slate-950">
                    {item.degree}
                  </h3>
                  <p className="text-slate-700 font-medium">{item.institution}</p>
                  {item.details && (
                    <p className="text-gray-500 italic text-[10px] leading-relaxed mt-0.5">
                      {item.details}
                    </p>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono text-[10px] text-slate-600 font-bold block">
                    {item.duration}
                  </span>
                  <span className="inline-block px-1.5 py-0.2 bg-slate-100 border border-slate-200 text-slate-700 text-[8px] font-bold tracking-wide uppercase rounded-[2px] mt-0.5">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-1.5">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-slate-900 border-b border-gray-300 pb-1">
            Technical Skills
          </h2>
          {/* List category items */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-bold text-[10px] text-slate-800 uppercase tracking-wider block mb-1">
                Development Technologies
              </span>
              <p className="text-[11px] text-gray-700 tracking-wide font-medium leading-loose">
                {skills
                  .filter((s) => s.category === 'frontend')
                  .map((s) => s.name)
                  .join(', ')}
              </p>
            </div>
            <div>
              <span className="font-bold text-[10px] text-slate-800 uppercase tracking-wider block mb-1">
                Programming Languages / OOP
              </span>
              <p className="text-[11px] text-gray-700 tracking-wide font-medium leading-loose">
                {skills
                  .filter((s) => s.category === 'languages')
                  .map((s) => s.name)
                  .join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* Academic Projects */}
        <div className="space-y-2">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-slate-900 border-b border-gray-300 pb-1">
            Key Programming Projects
          </h2>
          <div className="space-y-3">
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-0.5">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-[11px] text-slate-950">
                    {proj.title}
                  </h3>
                  <span className="font-mono text-[9px] text-slate-600 bg-slate-50 border border-slate-100 px-1 py-0.2">
                    {proj.technologies.join(', ')}
                  </span>
                </div>
                <p className="text-gray-600 text-[10px] leading-relaxed">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Language, hobbies, details row */}
        <div className="grid grid-cols-2 gap-6 pt-1">
          {/* Languages */}
          <div className="space-y-1.5">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-slate-900 border-b border-gray-300 pb-1">
              Languages Known
            </h2>
            <p className="text-[11px] text-gray-700 tracking-wide font-medium">
              {languages.join(', ')}
            </p>
          </div>

          {/* Hobbies */}
          <div className="space-y-1.5">
            <h2 className="text-xs uppercase font-extrabold tracking-widest text-slate-900 border-b border-gray-300 pb-1">
              Hobbies & Interests
            </h2>
            <p className="text-[11px] text-gray-700 tracking-wide font-medium">
              {hobbies.join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* Simple Footer credentials */}
      <div className="border-t border-slate-200 mt-10 pt-4 flex justify-between items-center text-[8px] text-gray-400 font-mono">
        <span>Generated via Veereswaran\'s Professional Student Portfolio app</span>
        <span>© {new Date().getFullYear()} Veereswaran S. All rights reserved.</span>
      </div>
    </div>
  );
}
