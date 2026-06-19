import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Download, ArrowDown, Sparkles } from 'lucide-react';
import { Profile } from '../types';
import fallbackImage from "../assets/images/image.png";
interface HeroProps {
  profile: Profile;
  onPrint: () => void;
}

export default function Hero({ profile, onPrint }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center bg-slate-50 border-8 border-slate-900 overflow-hidden print:hidden"
    >
      {/* Absolute decorative geometric line grids instead of bubbles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute -top-12 -left-12 w-48 h-48 border-4 border-indigo-100 rotate-12 pointer-events-none -z-10" />
      <div className="absolute -bottom-12 -right-12 w-72 h-72 border-r-8 border-b-8 border-slate-200 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Intro details column */}
        <div className="md:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-900 text-indigo-100 rounded-none text-xs font-bold tracking-widest uppercase font-mono border border-indigo-400"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Vanakkam / Hello World 👋
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-slate-900 tracking-tight leading-none uppercase"
            >
              Veereswaran<br/>S
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm font-black text-indigo-600 uppercase tracking-widest font-mono"
            >
              {profile.title}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative pl-5 border-l-4 border-indigo-600 bg-slate-100/50 py-3 pr-4"
          >
            <p className="text-slate-650 font-sans leading-relaxed text-xs sm:text-sm max-w-lg italic">
              "{profile.objective}"
            </p>
          </motion.div>

          {/* Core Contact Badges in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 text-sm text-slate-800 font-medium w-full"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-slate-250 hover:border-indigo-500 text-slate-700 hover:text-indigo-600 rounded-none transition-all duration-200"
            >
              <div className="w-5 h-5 bg-indigo-50 flex items-center justify-center">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
              </div>
              <span className="font-mono text-xs">{profile.email}</span>
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-slate-250 hover:border-indigo-500 text-slate-700 hover:text-indigo-600 rounded-none transition-all duration-200"
            >
              <div className="w-5 h-5 bg-indigo-50 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-indigo-600" />
              </div>
              <span className="font-mono text-xs">+91 {profile.phone}</span>
            </a>

            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white border border-slate-250 text-slate-700 rounded-none">
              <div className="w-5 h-5 bg-indigo-50 flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider">{profile.location}</span>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={onPrint}
              className="flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-slate-900 hover:border-slate-800 text-white rounded-none text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-indigo-400 cursor-pointer shadow-md hover:shadow-xl"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('education');
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 text-white hover:bg-indigo-600 hover:border-indigo-400 rounded-none text-xs font-bold uppercase tracking-widest border border-slate-750 transition-all duration-300 cursor-pointer"
            >
              Explore Portfolio
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </motion.div>
        </div>

        {/* Visual profile illustration column */}
        <div className="md:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Minimalist styled rigid outer boundary frame */}
            <div className="absolute -inset-4 border-2 border-dashed border-indigo-200 pointer-events-none" />
            <div className="absolute top-2 left-2 w-full h-full border-4 border-slate-900 pointer-events-none" />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-none bg-white p-4 border-4 border-slate-900 group overflow-hidden">
              <div className="absolute inset-1 rounded-none border border-slate-200 bg-slate-100 flex items-center justify-center overflow-hidden">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback avatar
                    (e.target as HTMLImageElement).src = fallbackImage;
                  }}
                />
              </div>

              {/* Status Badge overlay */}
              <div className="absolute bottom-4 right-4 bg-slate-900 text-white rounded-none px-3.5 py-1.5 shadow-md text-[10px] font-mono uppercase font-bold border border-slate-750 flex items-center gap-1.5 tracking-wider">
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                Active Student
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none opacity-50">
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
          Scroll Down
        </span>
        <ArrowDown className="w-3.5 h-3.5 text-indigo-500" />
      </div>
    </section>
  );
}
