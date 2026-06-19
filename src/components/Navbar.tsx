import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Download } from 'lucide-react';

interface NavbarProps {
  onPrint: () => void;
}

export default function Navbar({ onPrint }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 print:hidden ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-2 group cursor-pointer text-left"
        >
          <div className="w-9 h-9 rounded-none bg-slate-900 flex items-center justify-center text-white font-medium group-hover:bg-indigo-600 transition-colors border border-slate-700">
            <Code2 className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <span className="font-display font-black text-slate-900 tracking-tight text-base block leading-none uppercase">
              VEERESWARAN S
            </span>
            <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase block mt-1">
              BCA Student / Developer
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans text-xs font-bold uppercase tracking-wider relative py-1 cursor-pointer transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-indigo-600 font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600" />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={onPrint}
            className="flex items-center gap-1.5 px-5 py-2.5 bg-indigo-600 text-white hover:bg-indigo-500 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-indigo-400 cursor-pointer shadow-md shadow-indigo-500/10 hover:-translate-y-0.5"
          >
            <Download className="w-3.5 h-3.5" />
            Resume PDF
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={onPrint}
            className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-705 border border-slate-200 rounded-none cursor-pointer transition-colors"
            title="Download PDF"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-900 hover:bg-slate-100 rounded-none border border-transparent hover:border-slate-300 focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-6 absolute top-full left-0 w-full shadow-lg flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left py-2 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                activeSection === item.id ? 'text-indigo-600' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onPrint();
            }}
            className="flex items-center justify-center gap-2 mt-2 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold uppercase tracking-widest border border-indigo-400 cursor-pointer transition-colors"
          >
            <Download className="w-4 h-4" />
            Print / Save Resume (PDF)
          </button>
        </div>
      )}
    </nav>
  );
}
