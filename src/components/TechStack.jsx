import React, { useState } from 'react';
import { skillsCategories, skillsList } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import TechIcon from './TechIcon';

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Spotlight featured core competencies matching inspiration image
  const spotlightSkills = [
    {
      name: 'Next.js & React 19',
      category: 'Frontend Core',
      proficiency: 95,
      icon: <TechIcon name="React" color="#38BDF8" className="w-6 h-6" />,
      highlight: true,
      color: '#38BDF8',
      desc: 'App Router, Server Components, SSR & Client State'
    },
    {
      name: 'Node.js & Express',
      category: 'Backend & APIs',
      proficiency: 92,
      icon: <TechIcon name="Node.js" color="#34D399" className="w-6 h-6" />,
      highlight: false,
      color: '#34D399',
      desc: 'Microservices, REST, JWT RBAC & Socket.io'
    },
    {
      name: 'MongoDB & Redis',
      category: 'Databases & Caching',
      proficiency: 88,
      icon: <TechIcon name="MongoDB" color="#FBBF24" className="w-6 h-6" />,
      highlight: false,
      color: '#FBBF24',
      desc: 'Aggregation Pipelines, Schema Design & In-Memory Queues'
    },
    {
      name: 'Docker & DevOps',
      category: 'Containerization',
      proficiency: 85,
      icon: <TechIcon name="Docker" color="#818CF8" className="w-6 h-6" />,
      highlight: false,
      color: '#818CF8',
      desc: 'Multi-stage builds, Linux Admin & CI/CD Pipelines'
    },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsList
    : skillsList.filter((s) => s.category === activeCategory);

  return (
    <section id="technologies" className="relative py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14">
          <ScrollReveal direction="down" delay={0.05} distance={15}>
            <div className="inspiration-pill-badge mb-3">
              <span className="badge-dot" />
              <span>MY SKILLS</span>
            </div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <ScrollReveal direction="up" delay={0.12} distance={20}>
                <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
                  Expertise with{' '}
                  <span className="font-editorial text-cyan-300 font-normal italic drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                    Passion
                  </span>
                  .
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2} distance={20}>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2 max-w-xl">
                  I combine architectural discipline with modern frontend craftsmanship to build products that are resilient, fast, and future-ready.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Featured Spotlight Skills Grid (Inspired by the glowing cards in the image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {spotlightSkills.map((item, idx) => (
            <ScrollReveal
              key={item.name}
              direction="up"
              delay={0.1 + idx * 0.08}
              distance={30}
            >
              <div
                className={`p-5 rounded-2xl relative overflow-hidden transition-all duration-300 ${
                  item.highlight
                    ? 'spotlight-hero-card'
                    : 'spotlight-skill-card'
                }`}
              >
                {/* Glow pill badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                    {item.proficiency}%
                  </span>
                </div>

                <h3 className="text-base font-heading font-bold text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-[11px] text-slate-400 mb-3 line-clamp-1">
                  {item.desc}
                </p>

                {/* Animated Glowing Progress Bar */}
                <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${item.proficiency}%`,
                      backgroundColor: item.color,
                      boxShadow: `0 0 10px ${item.color}88`,
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Filter Tabs Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pt-4 border-t border-white/[0.06]">
          <span className="text-xs font-mono text-slate-400">
            Comprehensive Toolkit ({filteredSkills.length} technologies):
          </span>

          <div className="flex flex-wrap gap-2">
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/40 scale-105 border border-blue-400/40'
                    : 'bg-white/5 text-slate-400 border border-white/5 hover:text-cyan-300 hover:bg-blue-500/15 hover:border-blue-500/30 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] hover:scale-105'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Tool Badges Grid with Scroll Reveal & Micro-Interactions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredSkills.map((skill, idx) => (
            <ScrollReveal
              key={skill.name}
              direction="up"
              delay={Math.min(idx * 0.02, 0.35)}
              distance={20}
            >
              <div
                className="group rounded-xl bg-[#090C14] hover:bg-[#0C1222] border border-white/[0.05] hover:border-blue-400/50 p-3 transition-all duration-200 flex items-center justify-between gap-2.5 hover:scale-[1.03] hover:shadow-[0_0_16px_rgba(59,130,246,0.25)] cursor-default"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 shadow-sm"
                    style={{
                      backgroundColor: `${skill.color}18`,
                      border: `1px solid ${skill.color}35`,
                      boxShadow: `0 0 10px ${skill.color}15`,
                    }}
                  >
                    <TechIcon name={skill.name} icon={skill.icon} color={skill.color} className="w-3.5 h-3.5 shrink-0" />
                  </div>
                  <span className="text-xs font-medium text-slate-300 group-hover:text-white truncate transition-colors duration-200">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 shrink-0 transition-colors duration-200">
                  {skill.level.split(' ')[0]}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

