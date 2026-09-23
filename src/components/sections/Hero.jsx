import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import { MapPin, Mail, ArrowRight, Download } from 'lucide-react';
import GithubIcon from '../icons/GithubIcon';
import { LinkedinIcon } from '../icons/SocialIcons';
import MagneticButton from '../ui/MagneticButton';
import TiltCard from '../ui/TiltCard';
import ScrollReveal from '../ui/ScrollReveal';
import TypewriterText from '../ui/TypewriterText';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-transparent">
      {/* Background Vintage Grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-30" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: 1970s Retro Headline & Editorial Bio */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Status & Role Badges */}
            <ScrollReveal direction="down" delay={0.03} distance={15}>
              <div className="flex flex-wrap items-center gap-2.5 mb-1">
                <div className="retro-stamp">
                  <span className="badge-dot" />
                  <span>FULL-STACK DEVELOPER</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE3D0] border-2 border-[#351C15] text-[#351C15] text-[11px] font-mono font-bold shadow-[3px_3px_0px_#351C15]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Handwriting Hello World with Typewriter Loop */}
            <ScrollReveal direction="down" delay={0.08} distance={20}>
              <div className="font-script text-4xl sm:text-5xl text-[#C84B31] tracking-wide font-bold leading-none select-none min-h-[44px] sm:min-h-[54px] flex items-center">
                <TypewriterText
                  words={[
                    'Hello world!',
                    'Welcome to my space!',
                    'Glad you are here!',
                    'Crafting code with love.',
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDelay={2200}
                />
              </div>
            </ScrollReveal>

            {/* Staggered Name Headline */}
            <ScrollReveal direction="up" delay={0.15} distance={20}>
              <h1 className="text-4xl sm:text-6xl font-retro font-black text-[#351C15] tracking-tight leading-[1.1]">
                I'm Razee Jafri
              </h1>
            </ScrollReveal>

            {/* Editorial Sub-Headline */}
            <ScrollReveal direction="up" delay={0.22} distance={20}>
              <p className="text-xl sm:text-2xl font-retro text-[#351C15] font-bold tracking-tight">
                Crafting high-performance web systems that{' '}
                <span className="italic text-[#C84B31] underline decoration-[#EAA838] decoration-2">
                  People Love
                </span>
                .
              </p>
            </ScrollReveal>

            {/* Clean, unhurried Bio */}
            <ScrollReveal direction="up" delay={0.3} distance={25}>
              <p className="text-[#5A382C] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                A Full-Stack Developer specializing in the MERN stack and Next.js. Each web application is engineered with respect for system architecture, real-time performance, and containerized deployment.
              </p>
            </ScrollReveal>

            {/* Location */}
            <ScrollReveal direction="up" delay={0.38} distance={15}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FAF6F0] border-2 border-[#351C15] text-xs font-mono font-bold text-[#351C15] shadow-[2px_2px_0px_#351C15]">
                <MapPin className="w-3.5 h-3.5 text-[#C84B31]" />
                <span>Kanpur, India</span>
              </div>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal direction="up" delay={0.45} distance={20}>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <MagneticButton strength={0.25} textStrength={0.12}>
                  <a
                    href="#contact"
                    className="clay-btn-primary px-8 py-3.5 text-xs uppercase tracking-wider font-bold"
                  >
                    Let's Talk
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.25} textStrength={0.12}>
                  <a
                    href="#projects"
                    className="clay-btn-secondary group px-8 py-3.5 text-xs uppercase tracking-wider font-bold flex items-center gap-2"
                  >
                    <span>Featured Projects</span>
                    <ArrowRight className="w-4 h-4 text-[#C84B31] group-hover:translate-x-1.5 transition-transform duration-200" />
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.25} textStrength={0.12}>
                  <a
                    href={personalInfo.resumeUrl}
                    download="Razee_Jafri_Resume.pdf"
                    className="clay-btn-secondary group px-7 py-3.5 text-xs uppercase tracking-wider font-bold flex items-center gap-2 text-[#351C15]"
                    title="Download Razee Jafri CV"
                  >
                    <Download className="w-4 h-4 text-[#C84B31] group-hover:translate-y-0.5 transition-transform duration-200" />
                    <span>Download CV</span>
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>


            {/* Social Icons Row with Tactile Cream Clay Buttons */}
            <ScrollReveal direction="up" delay={0.55} distance={20}>
              <div className="flex items-center gap-3 pt-1">
                <MagneticButton strength={0.4} textStrength={0.2}>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="clay-icon-btn w-11 h-11"
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
                    className="clay-icon-btn w-11 h-11"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4 transition-transform duration-200" />
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.4} textStrength={0.2}>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="clay-icon-btn w-11 h-11"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4 transition-transform duration-200" />
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Vintage Transistor Radio & Terminal Bezel */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <ScrollReveal direction="left" delay={0.2} distance={40} className="w-full">
              <TiltCard
                maxTilt={6}
                scale={1.02}
                glare={true}
                glareOpacity={0.12}
                className="relative w-full max-w-lg lg:max-w-xl mx-auto group"
              >
                {/* 1970s Transistor Radio / Vintage Hi-Fi Housing */}
                <div className="relative rounded-3xl bg-[#3D2317] border-[3px] border-[#24130C] shadow-[10px_10px_0px_#24130C] p-4 sm:p-5 overflow-hidden">
                  
                  {/* Video Top Status Bar */}
                  <div className="mb-3 px-3 py-1.5 rounded-xl bg-[#23120B] border-2 border-[#543222] flex items-center justify-between text-[10px] font-mono text-[#EAA838]">
                    <div className="flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                      <span>LIVE PREVIEW • DEVELOPER WORKSPACE</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-[#EAA838]/80">
                      <span>MERN</span>
                      <span>•</span>
                      <span>NEXT.JS</span>
                      <span>•</span>
                      <span>DOCKER</span>
                    </div>
                    <span className="text-[#FAF6F0] font-bold">PROD</span>
                  </div>

                  {/* The Screen Aperture inside Chassis */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#24130C] bg-[#120B07]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      poster="/hero-video-poster.jpg"
                      className="w-full h-auto aspect-video object-cover block"
                      aria-label="Developer workspace preview"
                    >
                      <source
                        src="https://res.cloudinary.com/dcs7wsr8b/video/upload/v1789745230/Man_and_cat_on_laptop_20260918194513_gxlpvf.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  {/* Chassis Bottom Control Panel with Tactile Dials, Grille & Stripes */}
                  <div className="mt-3.5 pt-3 border-t-2 border-[#543222] flex items-center justify-between relative">
                    
                    {/* Left: Dual Tactile Dials */}
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full analog-knob flex items-center justify-center cursor-pointer hover:rotate-45 transition-transform" title="Dial 1">
                        <div className="w-1 h-2.5 bg-[#351C15] rounded-full" />
                      </div>
                      <div className="w-7 h-7 rounded-full analog-knob flex items-center justify-center cursor-pointer hover:rotate-90 transition-transform" title="Dial 2">
                        <div className="w-1 h-2.5 bg-[#C84B31] rounded-full" />
                      </div>
                    </div>

                    {/* Center: Analog Speaker / Ventilation Mesh */}
                    <div className="flex-1 mx-4 h-7 rounded-lg radio-speaker-mesh border border-[#24130C]/60" />

                    {/* Right: Retro Triple Stripes Ribbon Accent */}
                    <div className="w-14 h-7 rounded-md overflow-hidden border border-[#24130C] flex flex-col shadow-inner">
                      <div className="flex-1 bg-[#388087]" />
                      <div className="flex-1 bg-[#EAA838]" />
                      <div className="flex-1 bg-[#C84B31]" />
                    </div>

                  </div>

                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
