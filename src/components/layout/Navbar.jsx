import React, { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import { Menu, X, Download } from 'lucide-react';
import GithubIcon from '../icons/GithubIcon';
import MagneticButton from '../ui/MagneticButton';
import Logo from '../icons/Logo';

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF6F0]/95 backdrop-blur-md border-b-2 border-[#351C15] shadow-[0_4px_0px_rgba(53,28,21,0.15)] transition-all">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Custom Proprietary Logo with Vintage Badge */}
        <div className="flex items-center gap-3">
          <MagneticButton strength={0.3} textStrength={0.15}>
            <a href="#about" className="inline-block" aria-label="Razee Jafri Home">
              <Logo size="sm" showText={true} />
            </a>
          </MagneticButton>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#EDE3D0] border-2 border-[#351C15] text-[#351C15] shadow-[2px_2px_0px_#351C15]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            FULL-STACK DEV
          </span>
        </div>

        {/* Center: Minimal Text Links with Active Dot Indicator */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-xs tracking-widest font-mono font-bold transition-colors uppercase ${
                  isActive ? 'text-[#C84B31]' : 'text-[#5A382C] hover:text-[#351C15]'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-2 h-2 rounded-full bg-[#C84B31] mr-1.5 -translate-y-0.5 shadow-[1px_1px_0px_#351C15]" />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Tactile 3D Clay Button with Magnetic Pull */}
        <div className="hidden md:flex items-center gap-3">
          <MagneticButton strength={0.25} textStrength={0.12}>
            <a
              href={personalInfo.resumeUrl}
              download="Razee_Jafri_Resume.pdf"
              className="clay-btn-secondary px-5 py-2.5 text-xs tracking-wider font-bold flex items-center gap-1.5 text-[#351C15]"
              title="Download Razee Jafri CV"
            >
              <Download className="w-3.5 h-3.5 text-[#C84B31]" />
              <span>Download CV</span>
            </a>
          </MagneticButton>
          <MagneticButton strength={0.25} textStrength={0.12}>
            <a
              href="#contact"
              className="clay-btn-primary px-7 py-2.5 text-xs tracking-wider font-bold"
            >
              Contact
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="#contact"
            className="clay-btn-primary px-4 py-1.5 text-xs font-bold"
          >
            Contact
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#351C15] hover:text-[#C84B31]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6F0] border-b-2 border-[#351C15] px-6 py-4 space-y-3 shadow-xl animate-in slide-in-from-top-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono font-bold tracking-wider text-[#351C15] hover:text-[#C84B31] py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download="Razee_Jafri_Resume.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-sm font-mono font-bold tracking-wider text-[#C84B31] py-1"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD CV</span>
          </a>
          <div className="pt-2 border-t-2 border-[#351C15]/20 flex items-center gap-4 text-xs font-mono text-[#5A382C]">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[#351C15] hover:text-[#C84B31] transition-colors">
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
