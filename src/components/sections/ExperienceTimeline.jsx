import React from 'react';
import { experience, education, achievements } from '../../data/portfolioData';
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-14">
          <ScrollReveal direction="down" delay={0.05} distance={15}>
            <div className="retro-stamp mb-3 inline-flex">
              <span className="w-2 h-2 rounded-full bg-[#C84B31]" />
              <span>CAREER &amp; EXPERIENCE</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.12} distance={20}>
            <h2 className="text-3xl sm:text-5xl font-retro font-black text-[#351C15] tracking-tight">
              Work Experience &amp;{' '}
              <span className="italic text-[#C84B31]">
                Milestones
              </span>
              .
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} distance={20}>
            <p className="text-[#5A382C] text-xs sm:text-sm leading-relaxed mt-2 max-w-xl font-sans">
              From algorithmic problem-solving to architecting high-scale full-stack systems and shipping production code.
            </p>
          </ScrollReveal>
        </div>

        {/* Connected Milestone Roadmap Track */}
        <div className="mb-16 relative">
          {/* Retro Triple Stripe Connecting Track Line */}
          <div className="hidden md:block absolute top-7 left-8 right-8 h-1.5 flex z-0 rounded-full overflow-hidden">
            <div className="w-1/3 bg-[#388087]" />
            <div className="w-1/3 bg-[#EAA838]" />
            <div className="w-1/3 bg-[#C84B31]" />
          </div>

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
                <div className="p-5 rounded-2xl bg-[#EDE3D0] border-2 border-[#351C15] hover:shadow-[7px_7px_0px_#351C15] shadow-[4px_4px_0px_#351C15] transition-all group">
                  {/* Milestone Beacon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono text-xs font-black border-2 border-[#351C15] transition-transform group-hover:scale-110 ${
                        node.active
                          ? 'bg-[#C84B31] text-[#FAF6F0] shadow-[2px_2px_0px_#351C15]'
                          : 'bg-[#FAF6F0] text-[#351C15] shadow-[2px_2px_0px_#351C15]'
                      }`}
                    >
                      {node.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#C84B31]">
                      {node.period}
                    </span>
                  </div>

                  <h4 className="text-sm font-retro font-bold text-[#351C15] group-hover:text-[#C84B31] transition-colors">
                    {node.title}
                  </h4>
                  <div className="text-[11px] font-mono font-bold text-[#7A5042] mt-0.5">
                    {node.context}
                  </div>
                  <p className="text-xs text-[#5A382C] mt-2 leading-relaxed font-sans">
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
              <h3 className="text-xl font-retro font-bold text-[#351C15] flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#C84B31]" />
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
                  className="rounded-3xl bg-[#EDE3D0] border-2 border-[#351C15] shadow-[6px_6px_0px_#351C15] p-7 space-y-4 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-[#351C15] bg-[#FAF6F0] px-3 py-0.5 rounded-full border border-[#351C15] shadow-[2px_2px_0px_#351C15]">
                      {item.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#5A382C]">
                      <Calendar className="w-3.5 h-3.5 text-[#C84B31]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-2xl font-retro font-bold text-[#351C15]">
                      {item.role}
                    </h4>
                    <div className="text-sm text-[#7A5042] font-mono font-bold mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-1">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-[#5A382C] leading-relaxed font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#C84B31] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t-2 border-[#351C15]/15">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-bold text-[#351C15] bg-[#FAF6F0] border border-[#351C15] px-2.5 py-0.5 rounded shadow-[1.5px_1.5px_0px_#351C15] cursor-default"
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
                <h3 className="text-xl font-retro font-bold text-[#351C15] flex items-center gap-2 mb-4 group/edu">
                  <GraduationCap className="w-5 h-5 text-[#388087] group-hover/edu:scale-110 transition-transform duration-200" />
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
                    className="group rounded-3xl bg-[#EDE3D0] border-2 border-[#351C15] shadow-[6px_6px_0px_#351C15] p-7 space-y-2 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-[#5A382C]">
                      <span>{edu.period}</span>
                      <span className="text-[#C84B31] font-bold">{edu.grade}</span>
                    </div>
                    <h4 className="text-xl font-retro font-bold text-[#351C15] group-hover:text-[#C84B31] transition-colors">
                      {edu.degree}
                    </h4>
                    <div className="text-sm font-sans font-bold text-[#7A5042]">
                      {edu.institution} • {edu.location}
                    </div>
                    <p className="text-xs text-[#5A382C] font-sans pt-2 border-t border-[#351C15]/15">
                      {edu.details}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Certifications & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal direction="left" delay={0.15} distance={20}>
              <h3 className="text-xl font-retro font-bold text-[#351C15] flex items-center gap-2 group/ach">
                <Award className="w-5 h-5 text-[#EAA838] group-hover/ach:scale-110 transition-transform duration-200" />
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
                  className="group rounded-3xl bg-[#EDE3D0] border-2 border-[#351C15] shadow-[5px_5px_0px_#351C15] hover:shadow-[7px_7px_0px_#351C15] p-6 space-y-2 transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded bg-[#FAF6F0] text-[#351C15] border border-[#351C15] shadow-[1.5px_1.5px_0px_#351C15]">
                      {ach.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#5A382C]">
                      {ach.year}
                    </span>
                  </div>
                  <h4 className="text-base font-retro font-bold text-[#351C15] group-hover:text-[#C84B31] transition-colors duration-200">
                    {ach.title}
                  </h4>
                  <div className="text-xs font-mono font-bold text-[#C84B31]">
                    {ach.subtitle}
                  </div>
                  <p className="text-xs text-[#5A382C] font-sans leading-relaxed pt-1">
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
