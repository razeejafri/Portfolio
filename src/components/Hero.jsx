import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { MapPin, Mail, ArrowRight } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { LinkedinIcon } from './SocialIcons';
import MagneticButton from './MagneticButton';
import TiltCard from './TiltCard';
import CharacterReveal from './CharacterReveal';
import ScrollReveal from './ScrollReveal';
import BorderBeam from './BorderBeam';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-transparent">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-25" />

      {/* Subtle ambient glow in center */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clean Minimal Narrative (Rondeo Balos style) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Status & Role Badges (Inspired by Image) */}
            <ScrollReveal direction="down" delay={0.03} distance={15}>
              <div className="flex flex-wrap items-center gap-2.5 mb-1">
                <div className="inspiration-pill-badge">
                  <span className="badge-dot" />
                  <span>FULL-STACK DEVELOPER</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Handwriting Hello World with Aurora Gradient */}
            <ScrollReveal direction="down" delay={0.08} distance={20}>
              <div className="font-script text-4xl sm:text-5xl gradient-text-aurora tracking-wide font-bold leading-none select-none">
                Hello world!
              </div>
            </ScrollReveal>

            {/* Staggered Character-by-Character Name Headline */}
            <CharacterReveal
              text="I'm Razee Jafri"
              as="h1"
              className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight leading-[1.1]"
              delay={0.15}
              stagger={0.03}
            />

            {/* Editorial Sub-Headline (Inspired by Image) */}
            <ScrollReveal direction="up" delay={0.22} distance={20}>
              <p className="text-xl sm:text-2xl font-heading text-slate-100 font-semibold tracking-tight">
                Crafting high-performance web systems that{' '}
                <span className="font-editorial text-cyan-300 font-normal italic drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                  People Love
                </span>
                .
              </p>
            </ScrollReveal>

            {/* Clean, unhurried Bio */}
            <ScrollReveal direction="up" delay={0.3} distance={25}>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                A Full-Stack Developer specializing in the MERN stack and Next.js. Each web application is engineered with respect for system architecture, real-time performance, and containerized deployment.
              </p>
            </ScrollReveal>

            {/* Location */}
            <ScrollReveal direction="up" delay={0.4} distance={20}>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Kanpur, India</span>
              </div>
            </ScrollReveal>

            {/* Social Icons Row with Magnetic Pull */}
            <ScrollReveal direction="up" delay={0.5} distance={20}>
              <div className="flex items-center gap-3 pt-1">
                <MagneticButton strength={0.4} textStrength={0.2}>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group hover-icon-bounce w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-600/25 border border-white/10 hover:border-blue-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-5 h-5 transition-transform duration-200" />
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.4} textStrength={0.2}>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group hover-icon-bounce w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-600/25 border border-white/10 hover:border-blue-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4 transition-transform duration-200" />
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.4} textStrength={0.2}>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="group hover-icon-bounce w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-600/25 border border-white/10 hover:border-blue-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4 transition-transform duration-200" />
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Action Buttons with Magnetic Attraction & Sheen Sweep */}
            <ScrollReveal direction="up" delay={0.6} distance={20}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <MagneticButton strength={0.25} textStrength={0.12}>
                  <a
                    href="#contact"
                    className="btn-shine px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#1877F2] hover:bg-[#1565C0] shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all hover:scale-[1.02] active:scale-95 inline-block"
                  >
                    Let's Talk
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.25} textStrength={0.12}>
                  <a
                    href="#projects"
                    className="btn-shine group px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#0E1E38] hover:bg-[#15294A] border border-blue-500/20 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2"
                  >
                    <span>Featured Projects</span>
                    <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Responsive Video Showcase with 3D Tilt and Border Beam */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <ScrollReveal direction="left" delay={0.2} distance={40} className="w-full">
              <TiltCard
                maxTilt={6}
                scale={1.02}
                glare={true}
                glareOpacity={0.15}
                className="relative w-full max-w-lg lg:max-w-xl mx-auto group"
              >
              {/* Subtle ambient back-glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-cyan-500/15 to-indigo-600/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Video Card Container with Animated Border Beam */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#080B14] shadow-2xl shadow-blue-900/20">
                {/* Glowing Laser Border Beam */}
                <BorderBeam duration={7} size={90} colorFrom="#38bdf8" colorTo="#6366f1" borderWidth={2} />

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/hero-video-poster.jpg"
                  className="w-full h-auto aspect-video object-cover block"
                  aria-label="Developer and cat working on laptop animation"
                >
                  <source
                    src="https://res.cloudinary.com/dcs7wsr8b/video/upload/v1789745230/Man_and_cat_on_laptop_20260918194513_gxlpvf.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Subtle glass rim accent */}
                <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
            </TiltCard>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
