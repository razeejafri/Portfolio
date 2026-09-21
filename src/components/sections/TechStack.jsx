import React, { useState } from 'react';
import { skillsCategories, skillsList } from '../../data/portfolioData';
import ScrollReveal from '../ui/ScrollReveal';
import TechIcon from '../icons/TechIcon';

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
            <div className="retro-stamp mb-3 inline-flex">
              <span className="w-2 h-2 rounded-full bg-[#EAA838]" />
              <span>ENGINEERING TOOLKIT</span>
            </div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <ScrollReveal direction="up" delay={0.12} distance={20}>
                <h2 className="text-3xl sm:text-5xl font-retro font-black text-[#351C15] tracking-tight">
                  Technical Expertise &amp;{' '}
                  <span className="italic text-[#C84B31]">
                    Core Stack
                  </span>
                  .
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2} distance={20}>
                <p className="text-[#5A382C] text-xs sm:text-sm leading-relaxed mt-2 max-w-xl font-sans">
                  I combine architectural discipline with modern frontend craftsmanship to build products that are resilient, fast, and future-ready.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Featured Spotlight Skills Grid - Styled as Vintage Analog Audio Unit Modules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {spotlightSkills.map((item, idx) => (
            <ScrollReveal
              key={item.name}
              direction="up"
              delay={0.1 + idx * 0.08}
              distance={30}
            >
              <div
                className={`p-5 rounded-2xl relative overflow-hidden transition-all duration-300 bg-[#EDE3D0] border-2 border-[#351C15] shadow-[5px_5px_0px_#351C15] hover:shadow-[7px_7px_0px_#351C15] hover:-translate-y-1 ${
                  item.highlight ? 'ring-2 ring-[#C84B31]/40' : ''
                }`}
              >
                {/* Vintage Badge & Percentage */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#FAF6F0] border-2 border-[#351C15] shadow-[2px_2px_0px_#351C15]">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-mono font-black text-[#351C15] bg-[#FAF6F0] px-2.5 py-0.5 rounded-full border-2 border-[#351C15] shadow-[2px_2px_0px_#351C15]">
                    {item.proficiency}%
                  </span>
                </div>

                <h3 className="text-base font-retro font-bold text-[#351C15] mb-1">
                  {item.name}
                </h3>
                <p className="text-[11px] font-mono text-[#5A382C] mb-3 line-clamp-1">
                  {item.desc}
                </p>

                {/* Analog Gauge Style Recessed Meter */}
                <div className="w-full h-3 bg-[#DDD0BA] rounded-full overflow-hidden border border-[#351C15]/40 shadow-inner p-0.5">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${item.proficiency}%`,
                      backgroundColor: item.highlight ? '#C84B31' : '#388087',
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Filter Tabs Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pt-4 border-t-2 border-[#351C15]/15">
          <span className="text-xs font-mono font-bold text-[#5A382C]">
            Comprehensive Toolkit ({filteredSkills.length} technologies):
          </span>

          <div className="flex flex-wrap gap-2">
            {skillsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#C84B31] text-[#FAF6F0] border-2 border-[#351C15] shadow-[3px_3px_0px_#351C15] scale-105'
                    : 'bg-[#FAF6F0] text-[#351C15] border-2 border-[#351C15] shadow-[2px_2px_0px_#351C15] hover:bg-[#EDE3D0] hover:scale-105'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tactile Vintage Tool Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredSkills.map((skill, idx) => (
            <ScrollReveal
              key={skill.name}
              direction="up"
              delay={Math.min(idx * 0.02, 0.35)}
              distance={20}
            >
              <div
                className="group rounded-xl bg-[#FAF6F0] hover:bg-[#EDE3D0] border-2 border-[#351C15] p-3 transition-all duration-200 flex items-center justify-between gap-2.5 hover:-translate-y-1 shadow-[3px_3px_0px_#351C15] hover:shadow-[5px_5px_0px_#351C15] cursor-default"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border border-[#351C15]/25 bg-white shadow-sm"
                  >
                    <TechIcon name={skill.name} icon={skill.icon} color={skill.color} className="w-3.5 h-3.5 shrink-0" />
                  </div>
                  <span className="text-xs font-bold text-[#351C15] truncate transition-colors duration-200">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#C84B31] shrink-0">
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

