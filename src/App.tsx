import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import PrintableResume from './components/PrintPDFResume';
import { portfolioData } from './data';
import { Sparkles, Printer, ArrowUp } from 'lucide-react';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased text-base">
      
      {/* 1. Normal Screen Website Layout (Hidden during print) */}
      <div className="print:hidden">
        
        {/* Navigation Bar */}
        <Navbar onPrint={handlePrint} />

        {/* Hero Landing showcase */}
        <Hero profile={portfolioData.profile} onPrint={handlePrint} />

        {/* Main interactive and info segments */}
        <main>
          
          {/* Education Timeline */}
          <Education education={portfolioData.education} />

          {/* Interactive Skills Badges & Inspector */}
          <Skills skills={portfolioData.skills} />

          {/* Interactive Project Showcase with Live Sorting Visualizer / Code Sandbox */}
          <Projects projects={portfolioData.projects} />

          {/* Clean contact block */}
          <ContactSection
            profile={portfolioData.profile}
            languages={portfolioData.languages}
            hobbies={portfolioData.hobbies}
          />
          
        </main>

        {/* Global Web Footer */}
        <footer className="bg-slate-900 border-t border-slate-950 py-12 px-6 text-center text-slate-400">
          <div className="max-w-4xl mx-auto space-y-4">
            
            <div className="flex justify-center items-center gap-1.5 font-display font-extrabold text-white text-sm tracking-widest uppercase">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Veereswaran S
            </div>
            
            <p className="text-xs uppercase font-mono tracking-widest text-slate-500 max-w-md mx-auto">
              BCA student & Aspiring Web Developer
            </p>
            
            <div className="flex justify-center gap-6 text-xs pt-2">
              <a href="mailto:veeresveeres29@gmail.com" className="hover:text-emerald-400 transition-colors">
                veeresveeres29@gmail.com
              </a>
              <span className="text-slate-800">|</span>
              <a href="tel:9342432028" className="hover:text-emerald-400 transition-colors">
                +91 93424 32028
              </a>
            </div>

            <div className="border-t border-slate-800/80 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
              <span>© {new Date().getFullYear()} Veereswaran S. All rights reserved.</span>
              <div className="flex gap-4">
                <button
                  onClick={handlePrint}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Printer className="w-3 h-3" /> Save / Print PDF
                </button>
                <span>•</span>
                <button
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Back to Top <ArrowUp className="w-3 h-3" />
                </button>
              </div>
            </div>
            
          </div>
        </footer>
        
      </div>

      {/* 2. Print-media exclusive single-page layout (Hidden on normal screen, visible exclusively during window.print()) */}
      <PrintableResume data={portfolioData} />

    </div>
  );
}
