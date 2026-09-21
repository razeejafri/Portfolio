import React, { useState, useRef, useCallback } from 'react';
import { projects } from '../../data/portfolioData';
import InteractiveProjectCard from '../projects/InteractiveProjectCard';
import ScrollReveal from '../ui/ScrollReveal';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef(null);
  const spotlightRef = useRef(null);

  // Section-wide ambient mouse spotlight via direct DOM ref (0 React re-renders)
  const handleSectionMouseMove = useCallback((e) => {
    if (!sectionRef.current || !spotlightRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.opacity = '1';
    spotlightRef.current.style.background = `radial-gradient(850px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.08), transparent 70%)`;
  }, []);

  const handleSectionMouseLeave = useCallback(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = '0';
    }
  }, []);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'saas') return p.id === 'pdf-saas' || p.id === 'vingo-food' || p.id === 'vybe-social';
    if (filter === 'ai') return p.id === 'imagify' || p.id === 'multimedia-chatbot' || p.id === 'vybe-social';
    if (filter === 'tools') return p.id === 'weather-app' || p.id === 'simon-game';
    return true;
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      className="relative py-28 bg-transparent overflow-hidden"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-20" />

      {/* Dynamic Section Mousemove Spotlight (Direct DOM manipulated for 60fps) */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out opacity-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header with Staggered Character Reveal */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <ScrollReveal direction="down" delay={0.05} distance={15}>
            <div className="retro-stamp mb-2 inline-flex">
              <span className="w-2 h-2 rounded-full bg-[#388087]" />
              <span>FEATURED PROJECTS</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15} distance={20}>
            <h2 className="text-3xl sm:text-5xl font-retro font-black text-[#351C15] tracking-tight">
              Featured Production{' '}
              <span className="italic text-[#C84B31]">
                Projects
              </span>
              .
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.25} distance={20}>
            <p className="text-[#5A382C] text-xs sm:text-sm leading-relaxed font-sans">
              End-to-end full-stack applications engineered for high performance, modular architecture, and real-world scale.
            </p>
          </ScrollReveal>

          {/* Clean Filter Tabs with Scroll Reveal */}
          <ScrollReveal direction="up" delay={0.35} distance={20}>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: 'all', label: `All Projects (${projects.length})` },
                { id: 'saas', label: 'Production SaaS & Real-Time' },
                { id: 'ai', label: 'AI & Generative' },
                { id: 'tools', label: 'Interactive Utilities' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                    filter === tab.id
                      ? 'bg-[#C84B31] text-[#FAF6F0] border-2 border-[#351C15] shadow-[3px_3px_0px_#351C15] scale-105'
                      : 'bg-[#FAF6F0] text-[#351C15] border-2 border-[#351C15] shadow-[2px_2px_0px_#351C15] hover:bg-[#EDE3D0] hover:scale-105'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Alternating Project Cards */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((proj, idx) => (
            <ScrollReveal
              key={proj.id}
              direction={idx % 2 === 0 ? 'up' : 'up'}
              delay={0.1}
              distance={40}
            >
              <InteractiveProjectCard
                proj={proj}
                idx={idx}
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
