import React from 'react';
import { metrics } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function MetricsBanner() {
  return (
    <section className="relative z-10 py-16 organic-wave-container overflow-hidden">
      {/* Dynamic Specular Highlights */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />

      {/* Subtle organic background wave gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[250px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Top Narrative Row (Inspired by Image's "Code is my medium...") */}
        <div className="mb-12 max-w-3xl">
          <ScrollReveal direction="down" delay={0.05} distance={15}>
            <div className="inspiration-pill-badge mb-4">
              <span className="badge-dot" />
              <span>ABOUT ME &amp; PHILOSOPHY</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} distance={20}>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight leading-[1.2]">
              Code is my medium. Architecture is my{' '}
              <span className="font-editorial text-cyan-300 font-normal italic drop-shadow-[0_0_18px_rgba(56,189,248,0.45)]">
                craft
              </span>
              .
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} distance={20}>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl font-normal">
              Full-Stack Developer specializing in high-performance web systems, real-time WebSocket pipelines, and containerized Docker deployments — solving complex engineering problems with precision and clarity.
            </p>
          </ScrollReveal>
        </div>

        {/* High-Contrast Frosted Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-6 border-t border-white/[0.08]">
          {metrics.map((item, index) => (
            <ScrollReveal
              key={item.label}
              direction="up"
              delay={0.1 + index * 0.08}
              distance={25}
            >
              <div className="space-y-1.5 group">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight group-hover:text-cyan-200 transition-colors drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                    {item.value}
                  </span>
                  {index === 0 && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      LIVE
                    </span>
                  )}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-white transition-colors">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
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

