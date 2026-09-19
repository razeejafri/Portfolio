import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';
import GithubIcon from './GithubIcon';
import MagneticButton from './MagneticButton';

import Logo from './Logo';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'projects', 'technologies', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SERVICES', href: '#services', id: 'services' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'SKILLS', href: '#technologies', id: 'technologies' },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060709]/80 backdrop-blur-md border-b border-white/[0.04] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Custom Proprietary Quantum Nexus Logo with Magnetic response */}
        <MagneticButton strength={0.3} textStrength={0.15}>
          <a href="#about" className="inline-block" aria-label="Razee Jafri Home">
            <Logo size="sm" showText={true} />
          </a>
        </MagneticButton>

        {/* Center: Minimal Text Links with Active Dot Indicator */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-xs tracking-widest font-semibold transition-colors uppercase ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 -translate-y-0.5 shadow-sm shadow-blue-500" />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Solid Blue Pill Button with Magnetic Pull & Micro-interactions */}
        <div className="hidden md:flex items-center gap-4">
          <MagneticButton strength={0.25} textStrength={0.12}>
            <a
              href="#contact"
              className="btn-shine px-7 py-2.5 rounded-full text-xs tracking-wider font-bold text-white bg-[#1877F2] hover:bg-[#1565C0] shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all hover:scale-[1.02] active:scale-95 inline-block"
            >
              Contact
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full text-xs font-bold text-white bg-[#1877F2]"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#060709] border-b border-white/10 px-6 py-4 space-y-3 animate-in slide-in-from-top-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold tracking-wider text-slate-300 hover:text-blue-400 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center gap-4 text-xs font-mono text-slate-400">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-slate-300">
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
