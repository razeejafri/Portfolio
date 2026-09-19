import React from 'react';
import { ArrowUp } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/[0.04] py-8 relative z-10 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
        
        {/* Brand & Status */}
        <div className="flex items-center gap-3">
          <button onClick={scrollToTop} className="hover:opacity-90 transition-opacity" title="Back to top">
            <Logo size="xs" showText={false} animated={false} />
          </button>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-400">Available for Full-Stack Roles</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="hidden sm:inline">&copy; {new Date().getFullYear()} Razee Jafri</span>
        </div>

        {/* Back to top */}
        <div className="flex items-center gap-4">
          <span className="text-slate-600">Built with React 19 &amp; Tailwind CSS</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/40 text-slate-400 hover:text-white transition-all cursor-pointer flex items-center gap-1"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
