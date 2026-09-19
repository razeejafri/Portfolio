import React from 'react';
import { experience, education, achievements } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14">
          <ScrollReveal direction="down" delay={0.05} distance={15}>
            <div className="inspiration-pill-badge mb-3">
              <span className="badge-dot" />
              <span>THE JOURNEY</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} distance={20}>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
              The journey that{' '}
              <span className="font-editorial text-cyan-300 font-normal italic drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                shaped me
              </span>
              .
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} distance={20}>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2 max-w-xl">
              From algorithmic problem-solving to architecting high-scale full-stack systems and shipping production code.
            </p>
          </ScrollReveal>
        </div>

        {/* Connected Milestone Roadmap Track (Inspired by image's connected nodes) */}
        <div className="mb-16 relative">
          {/* Connecting Track Line */}
          <div className="hidden md:block absolute top-6 left-8 right-8 h-[2px] bg-gradient-to-r from-blue-500/20 via-cyan-400/40 via-indigo-500/40 to-cyan-400/40" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {[
              {
                period: '2022 – 2023',
                title: 'Foundations & DSA',
                context: 'B.Tech IT & Algorithms',
                detail: 'Built strong computer science fundamentals, data structures, and solved 100+ LeetCode problems.',
                icon: '01',
              },
              {
                period: '2023 – 2024',
                title: 'Full-Stack & SaaS',
                context: 'ConvertRova & Imagify',
                detail: 'Engineered 50+ Wasm document tools, microservices, and AI SaaS integrations with Razorpay.',
                icon: '02',
              },
              {
                period: '2024 – 2025',
                title: 'Real-Time & Cloud',
                context: 'Vingo & Docker',
                detail: 'Architected Socket.io live GPS telemetry, multi-stage Docker suites, and earned OCI AI Certification.',
                icon: '03',
              },
              {
                period: '2025 – Present',
                title: 'Production Engineering',
                context: 'Pulpy Digital Media',
                detail: 'Shipping live features into production codebases with structured Git workflows and peer reviews.',
                icon: '04',
                active: true,
              },
            ].map((node, nIdx) => (
              <ScrollReveal
                key={node.period}
                direction="up"
                delay={0.1 + nIdx * 0.1}
                distance={25}
              >
                <div className="p-5 rounded-2xl bg-[#090D18]/90 border border-white/[0.08] hover:border-cyan-400/40 transition-all group">
                  {/* Glowing Milestone Beacon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-transform group-hover:scale-110 ${
                        node.active
                          ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.6)]'
                          : 'bg-white/10 text-cyan-300 border border-cyan-500/20'
                      }`}
                    >
                      {node.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {node.period}
                    </span>
                  </div>

                  <h4 className="text-sm font-heading font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {node.title}
                  </h4>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    {node.context}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {node.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Work Experience */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="right" delay={0.15} distance={20}>
              <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span>Production Experience</span>
              </h3>
            </ScrollReveal>

            {experience.map((item, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={0.1 + idx * 0.12}
                distance={30}
              >
                <div
                  className="rounded-2xl glass-card-premium p-7 space-y-4 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                      {item.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-heading font-bold text-white">
                      {item.role}
                    </h4>
                    <div className="text-sm text-slate-300 font-medium mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-1">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-interactive text-[10px] font-mono text-slate-400 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Education */}
            <div className="pt-4">
              <ScrollReveal direction="right" delay={0.2} distance={20}>
                <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2 mb-4 group/edu">
                  <GraduationCap className="w-4 h-4 text-indigo-400 group-hover/edu:scale-110 transition-transform duration-200" />
                  <span>Education</span>
                </h3>
              </ScrollReveal>

              {education.map((edu, eIdx) => (
                <ScrollReveal
                  key={eIdx}
                  direction="up"
                  delay={0.25}
                  distance={30}
                >
                  <div
                    className="group rounded-2xl glass-card-premium p-7 space-y-2 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                      <span>{edu.period}</span>
                      <span className="text-blue-400 font-semibold group-hover:text-cyan-300 transition-colors">{edu.grade}</span>
                    </div>
                    <h4 className="text-lg font-heading font-bold text-white group-hover:text-blue-200 transition-colors">
                      {edu.degree}
                    </h4>
                    <div className="text-sm text-slate-400">
                      {edu.institution} • {edu.location}
                    </div>
                    <p className="text-xs text-slate-500 pt-2 border-t border-white/[0.04]">
                      {edu.details}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Certifications & Highlights with Micro-Interactions */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="left" delay={0.15} distance={20}>
              <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2 group/ach">
                <Award className="w-4 h-4 text-amber-400 group-hover/ach:scale-110 transition-transform duration-200" />
                <span>Certifications &amp; Achievements</span>
              </h3>
            </ScrollReveal>

            {achievements.map((ach, aIdx) => (
              <ScrollReveal
                key={ach.title}
                direction="left"
                delay={0.15 + aIdx * 0.1}
                distance={30}
              >
                <div
                  className="group rounded-2xl glass-card-premium p-6 space-y-2 transition-all duration-200 hover:scale-[1.01]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-400/50 group-hover:text-cyan-300 transition-all duration-200">
                      {ach.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {ach.year}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-blue-200 transition-colors duration-200">
                    {ach.title}
                  </h4>
                  <div className="text-xs text-blue-400">
                    {ach.subtitle}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {ach.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
