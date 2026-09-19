import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Clock, UserCheck, ExternalLink, Maximize2, X } from 'lucide-react';
import GithubIcon from './GithubIcon';
import ProjectMockup from './ProjectMockup';

export default function InteractiveProjectCard({ proj, idx }) {
  const cardRef = useRef(null);
  const mockupRef = useRef(null);
  const spotlightRef = useRef(null);
  const glareRef = useRef(null);
  const isMockupLeft = idx % 2 === 0;

  // Scroll reveal visibility
  const [isVisible, setIsVisible] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close lightbox on Escape key and lock body scroll
  useEffect(() => {
    if (!isLightboxOpen) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  // Spring physics references
  const springAnimRef = useRef(null);
  const currentRot = useRef({ x: 0, y: 0, scale: 1 });

  // IntersectionObserver for scroll-reveal animation
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Cleanup any active animation on unmount
  useEffect(() => {
    return () => {
      if (springAnimRef.current) {
        cancelAnimationFrame(springAnimRef.current);
      }
    };
  }, []);

  const spotlightColors = [
    'rgba(6, 182, 212, 0.16)',   // Electric Cyan
    'rgba(168, 85, 247, 0.16)',  // Ultra Violet
    'rgba(16, 185, 129, 0.16)',  // Emerald
    'rgba(244, 114, 182, 0.16)', // Solar Rose
  ];
  const cardSpotlightColor = spotlightColors[idx % spotlightColors.length];

  // Handle mouse move across the ENTIRE card box (0 React re-renders, direct GPU transforms)
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    // Cancel any running spring bounce-back immediately
    if (springAnimRef.current) {
      cancelAnimationFrame(springAnimRef.current);
      springAnimRef.current = null;
    }

    const cardRect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - cardRect.left;
    const mouseY = e.clientY - cardRect.top;

    const normX = mouseX / cardRect.width;
    const normY = mouseY / cardRect.height;

    // Direct DOM Spotlight update
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = '1';
      spotlightRef.current.style.background = `radial-gradient(650px circle at ${mouseX}px ${mouseY}px, ${cardSpotlightColor}, transparent 75%)`;
    }

    // 3D Tilt calculations
    const maxTilt = 11;
    const rotX = (0.5 - normY) * (maxTilt * 2);
    const rotY = (normX - 0.5) * (maxTilt * 2);
    const scale = 1.028;

    currentRot.current.x = rotX;
    currentRot.current.y = rotY;
    currentRot.current.scale = scale;

    const shadowX = -rotY * 1.6;
    const shadowY = rotX * 1.6 + 24;

    if (mockupRef.current) {
      mockupRef.current.style.transform = `perspective(1100px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;
      mockupRef.current.style.boxShadow = `${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px 45px -5px rgba(0, 0, 0, 0.75), 0 0 35px -5px rgba(37, 99, 235, 0.25)`;
      mockupRef.current.style.transition = 'transform 0.08s ease-out, box-shadow 0.08s ease-out';
    }

    if (glareRef.current) {
      glareRef.current.style.opacity = '0.2';
      glareRef.current.style.background = `radial-gradient(circle at ${normX * 100}% ${normY * 100}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.05) 45%, transparent 75%)`;
    }
  }, [cardSpotlightColor]);

  const handleMouseEnter = useCallback(() => {
    if (springAnimRef.current) {
      cancelAnimationFrame(springAnimRef.current);
      springAnimRef.current = null;
    }
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = '1';
    }
  }, []);

  // Spring / Elastic bounce-back with overshoot on mouse leave
  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = '0';
    if (glareRef.current) glareRef.current.style.opacity = '0';

    if (springAnimRef.current) {
      cancelAnimationFrame(springAnimRef.current);
    }

    let posX = currentRot.current.x;
    let posY = currentRot.current.y;
    let posScale = currentRot.current.scale;
    let velX = 0;
    let velY = 0;
    let velScale = 0;

    const stiffness = 0.085;
    const damping = 0.70;
    const scaleStiffness = 0.08;
    const scaleDamping = 0.72;

    const runSpring = () => {
      const forceX = -stiffness * posX;
      velX = (velX + forceX) * damping;
      posX += velX;

      const forceY = -stiffness * posY;
      velY = (velY + forceY) * damping;
      posY += velY;

      const forceScale = -scaleStiffness * (posScale - 1);
      velScale = (velScale + forceScale) * scaleDamping;
      posScale += velScale;

      currentRot.current.x = posX;
      currentRot.current.y = posY;
      currentRot.current.scale = posScale;

      const shadowX = -posY * 1.5;
      const shadowY = posX * 1.5 + 20;

      if (mockupRef.current) {
        mockupRef.current.style.transform = `perspective(1100px) rotateX(${posX.toFixed(3)}deg) rotateY(${posY.toFixed(3)}deg) scale3d(${posScale.toFixed(3)}, ${posScale.toFixed(3)}, ${posScale.toFixed(3)})`;
        mockupRef.current.style.boxShadow = `${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px 40px -8px rgba(0, 0, 0, 0.65), 0 0 25px -5px rgba(37, 99, 235, 0.15)`;
        mockupRef.current.style.transition = 'none';
      }

      if (
        Math.abs(posX) > 0.04 ||
        Math.abs(posY) > 0.04 ||
        Math.abs(velX) > 0.04 ||
        Math.abs(velY) > 0.04 ||
        Math.abs(posScale - 1) > 0.002
      ) {
        springAnimRef.current = requestAnimationFrame(runSpring);
      } else {
        currentRot.current = { x: 0, y: 0, scale: 1 };
        if (mockupRef.current) {
          mockupRef.current.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
          mockupRef.current.style.boxShadow = '0 20px 40px -15px rgba(0, 0, 0, 0.6)';
          mockupRef.current.style.transition = 'transform 0.25s ease-out, box-shadow 0.25s ease-out';
        }
        springAnimRef.current = null;
      }
    };

    springAnimRef.current = requestAnimationFrame(runSpring);
  }, []);

  const displayTitle = proj.title.includes('–') ? proj.title.split('–')[0].trim() : proj.title.split(' - ')[0].trim();
  const displaySubtitle = proj.subtitle || (proj.title.includes('–') ? proj.title.split('–')[1].trim() : '');

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transitionDuration: '800ms',
        transitionDelay: `${(idx % 2) * 120}ms`,
      }}
      className={`relative group rounded-3xl glass-card-premium p-6 sm:p-10 md:p-12 overflow-hidden transition-all ease-out cursor-default transform-gpu ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-[0.98]'
      }`}
    >
      {/* Interactive Cursor Spotlight inside Card (Direct DOM manipulated) */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0"
      />

      {/* Grid pattern highlight inside card */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Mockup Column with macOS Window Frame & 3D Tilt */}
        <div
          className={`lg:col-span-6 xl:col-span-7 ${
            isMockupLeft ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div
            ref={mockupRef}
            style={{
              transform: 'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
              transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out',
            }}
            className="relative rounded-2xl bg-[#05070E] border border-white/15 overflow-hidden will-change-transform transform-gpu shadow-2xl"
          >
            {/* macOS Window Titlebar */}
            <div className="px-4 py-3 bg-[#0B0F1A] border-b border-white/10 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm shadow-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm shadow-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm shadow-emerald-500/50" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 tracking-wider truncate max-w-[180px] sm:max-w-[220px]">
                {proj.liveUrl && proj.liveUrl !== '#'
                  ? proj.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
                  : `${proj.id}.local`}
              </span>
              <div className="flex items-center gap-2">
                {proj.image && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLightboxOpen(true);
                    }}
                    title="Expand high-res snapshot"
                    className="flex items-center gap-1 text-[10px] font-mono text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/5"
                  >
                    <Maximize2 className="w-3 h-3" />
                    <span className="hidden sm:inline">Preview</span>
                  </button>
                )}
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500/50 animate-pulse" />
              </div>
            </div>

            {/* Mockup Screen Content */}
            <div 
              className="aspect-[16/10] w-full overflow-hidden relative cursor-pointer"
              onClick={() => {
                if (proj.image) setIsLightboxOpen(true);
              }}
            >
              <ProjectMockup type={proj.previewType} project={proj} />
            </div>

            {/* Specular Glare Overlay responding to cursor (Direct DOM manipulated) */}
            <div
              ref={glareRef}
              className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 opacity-0 overflow-hidden"
            />
          </div>
        </div>

        {/* Content Column (Title, Description, Tags, Status, Buttons) */}
        <div
          className={`lg:col-span-6 xl:col-span-5 space-y-4 ${
            isMockupLeft ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div>
            <h3 className="text-3xl sm:text-4xl font-merienda font-bold text-white tracking-wide italic group-hover:text-blue-400 transition-colors duration-300">
              {displayTitle}
            </h3>
            {displaySubtitle && (
              <p className="text-xs font-mono text-slate-400 mt-1">
                {displaySubtitle}
              </p>
            )}
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {proj.description}
          </p>

          {/* Tech Stack Pills with Micro-Interaction Color Shift */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {proj.tags.map((tag) => (
              <span
                key={tag}
                className="tag-interactive text-[11px] font-mono px-3.5 py-1.5 rounded-full bg-[#111625] border border-white/10 text-slate-300 font-medium shadow-sm hover:text-cyan-300 hover:border-blue-400/50 hover:bg-blue-500/15 hover:shadow-[0_0_12px_rgba(56,189,248,0.3)] hover:scale-105 cursor-default transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Status & Role Badges */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-300 pt-1">
            <div className="flex items-center gap-1.5 text-slate-300 group/status">
              <Clock className="w-3.5 h-3.5 text-blue-400 group-hover/status:rotate-45 transition-transform duration-300" />
              <span>{proj.status || 'Post-deployment'}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 group/role">
              <UserCheck className="w-3.5 h-3.5 text-blue-400 group-hover/role:scale-110 transition-transform duration-200" />
              <span>{proj.roleType || 'Full-stack'}</span>
            </div>
          </div>

          {/* Action Buttons: Visit Site & GitHub with Sheen & Bounce */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {proj.liveUrl && proj.liveUrl !== '#' && (
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-shine px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-[#080B11] hover:bg-blue-600/20 border border-white/20 hover:border-blue-400/50 shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group/btn cursor-pointer"
              >
                <span>Visit Site</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200 text-blue-400" />
              </a>
            )}

            <a
              href={proj.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-shine px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 hover:border-blue-400/40 hover:scale-[1.02] active:scale-[0.98] border border-white/10 transition-all flex items-center gap-2 cursor-pointer group/gh"
            >
              <GithubIcon className="w-3.5 h-3.5 group-hover/gh:scale-110 transition-transform duration-200" />
              <span>GitHub</span>
            </a>
          </div>

        </div>

      </div>

      {/* Full-Screen High-Res Screenshot Lightbox Modal */}
      {isLightboxOpen && proj.image && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#0A0E1A] border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.95)] flex flex-col max-h-[92vh] select-none"
          >
            {/* Modal Titlebar */}
            <div className="px-5 py-3.5 bg-[#080B14] border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(false)}
                    title="Close (Esc)"
                    className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-125 transition-all cursor-pointer"
                  />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-mono text-white font-bold tracking-wide">
                    {proj.title}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Live UI Preview
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer border border-white/10 flex items-center gap-1 text-xs font-mono"
                aria-label="Close preview"
                title="Close preview (Esc)"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>

            {/* Scrollable Crisp Screenshot - Clicking image closes preview immediately */}
            <div 
              onClick={() => setIsLightboxOpen(false)}
              title="Click image to close preview (Esc)"
              className="flex-1 overflow-auto bg-[#05070D] p-3 sm:p-5 flex flex-col items-center justify-center cursor-pointer relative group/preview"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-auto object-contain rounded-xl border border-white/10 shadow-2xl transition-transform duration-300 group-hover/preview:scale-[0.99]"
              />

              {/* Dismiss prompt pill overlay */}
              <div className="absolute bottom-6 px-4 py-1.5 rounded-full bg-[#0B0F1A]/90 backdrop-blur-md border border-white/20 text-xs font-mono text-slate-300 flex items-center gap-2 shadow-2xl pointer-events-none group-hover/preview:border-cyan-400/50 transition-all">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Click image to close preview (or press Esc)</span>
                <span className="px-1.5 py-0.2 rounded bg-white/10 text-[10px] text-slate-400">✕</span>
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="px-5 py-3.5 bg-[#080B14] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono shrink-0">
              <span className="text-slate-400 truncate max-w-[400px]">
                {proj.subtitle}
              </span>
              <div className="flex items-center gap-3">
                {proj.liveUrl && proj.liveUrl !== '#' && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-md shadow-blue-600/30"
                  >
                    <span>Open Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
