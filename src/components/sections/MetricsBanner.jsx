import React from 'react';
import { metrics } from '../../data/portfolioData';
import ScrollReveal from '../ui/ScrollReveal';

export default function MetricsBanner() {
  return (
    <section className="relative z-10 py-16 organic-wave-container overflow-hidden">
      {/* Dynamic Specular Highlights */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-amber-600/25 to-transparent pointer-events-none" />

      {/* Subtle organic background wave gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[250px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Top Narrative Row */}
        <div className="mb-12 max-w-3xl">
          <ScrollReveal direction="down" delay={0.05} distance={15}>
            <div className="retro-stamp mb-4">
              <span className="badge-dot" />
              <span>ENGINEERING PRINCIPLES</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} distance={20}>
            <h2 className="text-2xl sm:text-4xl font-retro font-black text-[#351C15] tracking-tight leading-[1.2]">
              Architectural Discipline. Production-Ready{' '}
              <span className="text-[#C84B31] italic underline decoration-[#EAA838] decoration-2">
                Execution
              </span>
              .
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} distance={20}>
            <p className="text-[#5A382C] text-sm sm:text-base leading-relaxed mt-3 max-w-2xl font-normal">
              Specializing in high-performance web systems, real-time WebSocket telemetry, and containerized cloud deployments — solving complex full-stack challenges with architectural rigor.
            </p>
          </ScrollReveal>
        </div>

        {/* 1970s Analog Hardware Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t-2 border-[#351C15]/20">
          {metrics.map((item, index) => (
            <ScrollReveal
              key={item.label}
              direction="up"
              delay={0.1 + index * 0.08}
              distance={25}
            >
              <div className="p-5 sm:p-6 rounded-2xl bg-[#EDE3D0] border-2 border-[#351C15] shadow-[5px_5px_0px_#351C15] hover:shadow-[7px_7px_0px_#351C15] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all space-y-1.5 group">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-retro font-black text-[#351C15] tracking-tight group-hover:text-[#C84B31] transition-colors">
                    {item.value}
                  </span>
                  {index === 0 && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#FAF6F0] text-[#10B981] border border-[#351C15] shadow-[2px_2px_0px_#351C15]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      LIVE
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#351C15] group-hover:text-[#C84B31] transition-colors font-mono">
                  {item.label}
                </div>
                <div className="text-[11px] text-[#6E493B] font-mono">
                  {item.sub}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

