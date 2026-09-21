import React from 'react';
import { ArrowUp } from 'lucide-react';
import Logo from '../icons/Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#EDE3D0] border-t-2 border-[#351C15] py-8 relative z-10 text-[#5A382C] text-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
        
        {/* Brand & Status */}
        <div className="flex items-center gap-3">
          <button onClick={scrollToTop} className="hover:opacity-90 transition-opacity cursor-pointer" title="Back to top">
            <Logo size="xs" showText={false} animated={false} />
          </button>
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse border border-[#351C15]" />
          <span className="text-[#351C15] font-bold">Available for Full-Stack Roles</span>
          <span className="text-[#7A5042] hidden sm:inline">•</span>
          <span className="hidden sm:inline font-bold text-[#5A382C]">&copy; {new Date().getFullYear()} Razee Jafri</span>
        </div>

        {/* Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-[#7A5042] font-semibold">Engineered for Performance &amp; Scalability</span>
          <button
            onClick={scrollToTop}
            className="clay-btn-secondary px-3.5 py-1.5 rounded-xl text-[#351C15] font-bold hover:text-[#C84B31] transition-all cursor-pointer flex items-center gap-1.5"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C84B31]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
