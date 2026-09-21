import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 1. React / Next.js Atom Orbit Artifact
function ReactOrbit({ size = 48, color = '#388087' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[2px_2px_0px_rgba(53,28,21,0.12)]"
      aria-hidden="true"
    >
      <ellipse cx="24" cy="24" rx="21" ry="8" stroke={color} strokeWidth="1.35" transform="rotate(0 24 24)" strokeOpacity="0.75" />
      <ellipse cx="24" cy="24" rx="21" ry="8" stroke={color} strokeWidth="1.35" transform="rotate(60 24 24)" strokeOpacity="0.75" />
      <ellipse cx="24" cy="24" rx="21" ry="8" stroke={color} strokeWidth="1.35" transform="rotate(120 24 24)" strokeOpacity="0.75" />
      <circle cx="24" cy="24" r="3.5" fill={color} fillOpacity="0.9" />
    </svg>
  );
}

// 2. Terminal Code Prompt Chip (>_ code / <dev />)
function CodePromptChip({ text = '>_ dev', color = '#C84B31' }) {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border-[1.5px] border-[#351C15]/40 bg-[#FAF6F0]/90 shadow-[2px_2px_0px_rgba(53,28,21,0.15)] select-none backdrop-blur-xs"
      aria-hidden="true"
    >
      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
      <span className="text-[11px] font-mono font-bold tracking-tight text-[#351C15]">
        {text}
      </span>
    </div>
  );
}

// 3. Database Cylinder Stack (MongoDB / Redis)
function DbCylinder({ size = 42, color = '#EAA838' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[2px_2px_0px_rgba(53,28,21,0.12)]"
      aria-hidden="true"
    >
      {/* Top Tier */}
      <ellipse cx="20" cy="9" rx="16" ry="5.5" stroke={color} strokeWidth="1.35" fill="#FAF6F0" fillOpacity="0.75" />
      {/* Mid Tier */}
      <path d="M4 9v9c0 3 7.2 5.5 16 5.5s16-2.5 16-5.5V9" stroke={color} strokeWidth="1.35" />
      {/* Bottom Tier */}
      <path d="M4 18v9c0 3 7.2 5.5 16 5.5s16-2.5 16-5.5V18" stroke={color} strokeWidth="1.35" />
      <circle cx="10" cy="18" r="1.5" fill={color} />
      <circle cx="10" cy="27" r="1.5" fill={color} />
    </svg>
  );
}

// 4. Docker / Microservice Isometric Container Box
function MicroserviceCube({ size = 44, color = '#388087' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[2px_2px_0px_rgba(53,28,21,0.12)]"
      aria-hidden="true"
    >
      {/* Top Isometric Face */}
      <path d="M22 4L38 13L22 22L6 13L22 4Z" stroke={color} strokeWidth="1.35" fill="#FAF6F0" fillOpacity="0.8" />
      {/* Left Face */}
      <path d="M6 13V30L22 39V22L6 13Z" stroke={color} strokeWidth="1.35" fill={color} fillOpacity="0.08" />
      {/* Right Face */}
      <path d="M22 22V39L38 30V13L22 22Z" stroke={color} strokeWidth="1.35" fill={color} fillOpacity="0.18" />
      {/* Container Slots / Grid */}
      <line x1="14" y1="26" x2="14" y2="18" stroke={color} strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
      <line x1="30" y1="26" x2="30" y2="18" stroke={color} strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.6" />
    </svg>
  );
}

// 5. Real-Time Socket Telemetry Wave (Socket.io)
function SocketWave({ size = 46, color = '#10B981' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[2px_2px_0px_rgba(53,28,21,0.12)]"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="21" stroke={color} strokeWidth="1.25" strokeOpacity="0.4" strokeDasharray="3 3" />
      {/* Concentric Signal Arcs */}
      <path d="M14 24C14 18.5 18.5 14 24 14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 24C10 16.3 16.3 10 24 10" stroke={color} strokeWidth="1.35" strokeLinecap="round" strokeOpacity="0.75" />
      <path d="M34 24C34 29.5 29.5 34 24 34" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M38 24C38 31.7 31.7 38 24 38" stroke={color} strokeWidth="1.35" strokeLinecap="round" strokeOpacity="0.75" />
      {/* Center Pulse Node */}
      <circle cx="24" cy="24" r="4" fill={color} fillOpacity="0.9" />
      <circle cx="24" cy="24" r="7" stroke={color} strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  );
}

// 6. Algorithmic DSA O(1) Binary Node Chip
function DsaNodeChip({ size = 46, color = '#C84B31' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[2px_2px_0px_rgba(53,28,21,0.12)]"
      aria-hidden="true"
    >
      {/* Binary Tree Structure */}
      <line x1="23" y1="10" x2="13" y2="24" stroke={color} strokeWidth="1.35" />
      <line x1="23" y1="10" x2="33" y2="24" stroke={color} strokeWidth="1.35" />
      <line x1="13" y1="24" x2="8" y2="36" stroke={color} strokeWidth="1.25" strokeDasharray="2 2" strokeOpacity="0.7" />
      <line x1="13" y1="24" x2="18" y2="36" stroke={color} strokeWidth="1.25" strokeDasharray="2 2" strokeOpacity="0.7" />
      <line x1="33" y1="24" x2="38" y2="36" stroke={color} strokeWidth="1.25" strokeDasharray="2 2" strokeOpacity="0.7" />
      {/* Nodes */}
      <circle cx="23" cy="10" r="5" fill="#FAF6F0" stroke={color} strokeWidth="1.5" />
      <circle cx="13" cy="24" r="4" fill={color} fillOpacity="0.85" />
      <circle cx="33" cy="24" r="4" fill={color} fillOpacity="0.85" />
      <circle cx="8" cy="36" r="3" fill="#FAF6F0" stroke={color} strokeWidth="1" />
      <circle cx="18" cy="36" r="3" fill="#FAF6F0" stroke={color} strokeWidth="1" />
      <circle cx="38" cy="36" r="3" fill="#FAF6F0" stroke={color} strokeWidth="1" />
    </svg>
  );
}

// 7. Git Branch / Commit Fork (CI/CD Production)
function GitBranchFork({ size = 44, color = '#EAA838' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[2px_2px_0px_rgba(53,28,21,0.12)]"
      aria-hidden="true"
    >
      <circle cx="14" cy="34" r="4" fill="#FAF6F0" stroke={color} strokeWidth="1.5" />
      <circle cx="14" cy="10" r="4" fill="#FAF6F0" stroke={color} strokeWidth="1.5" />
      <circle cx="30" cy="20" r="4" fill={color} fillOpacity="0.9" />
      {/* Main Trunk */}
      <line x1="14" y1="14" x2="14" y2="30" stroke={color} strokeWidth="1.35" />
      {/* Branch Curve */}
      <path d="M14 26C14 22 18 20 26 20" stroke={color} strokeWidth="1.35" />
    </svg>
  );
}

// 8. Refined 1970s Reel Spool (Subtle & Elegant)
function TapeSpool({ size = 52, color = '#C84B31' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[2px_2px_0px_rgba(53,28,21,0.12)]"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="29" stroke={color} strokeWidth="1.35" fill="#FAF6F0" fillOpacity="0.7" />
      <circle cx="32" cy="32" r="24" stroke={color} strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.75" />
      <circle cx="32" cy="32" r="11" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.15" />
      <circle cx="32" cy="32" r="4.5" fill={color} />
      <circle cx="32" cy="13" r="3.5" fill={color} fillOpacity="0.6" />
      <circle cx="15" cy="41" r="3.5" fill={color} fillOpacity="0.6" />
      <circle cx="49" cy="41" r="3.5" fill={color} fillOpacity="0.6" />
      <line x1="32" y1="17" x2="32" y2="24" stroke={color} strokeWidth="1.35" />
      <line x1="19" y1="38" x2="25" y2="34" stroke={color} strokeWidth="1.35" />
      <line x1="45" y1="38" x2="39" y2="34" stroke={color} strokeWidth="1.35" />
    </svg>
  );
}

// 9. Soft Translucent Glass Bead
function LiquidDroplet({ size = 36, color = '#388087' }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle at 35% 30%, #FFFFFF 0%, ${color}CC 55%, ${color}99 85%, #351C15 100%)`,
        boxShadow: `2px 2px 0px rgba(53, 28, 21, 0.15), inset -2px -2px 5px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.8)`,
        border: `1.25px solid rgba(53, 28, 21, 0.25)`,
      }}
      className="rounded-full relative select-none"
      aria-hidden="true"
    >
      <div className="absolute top-1 left-1.5 w-2 h-1 rounded-full bg-white/90 blur-[0.2px] -rotate-12" />
    </div>
  );
}

// Curated list tailored to the user's stack, skills, and sections
const ARTIFACT_DEFINITIONS = [
  // --- Section 1: HERO (Developer Identity & Stack) ---
  {
    id: 'hero-react-left',
    type: 'react',
    top: 240,
    left: '3%',
    color: '#388087',
    speed: 0.4,
    rot: 180,
    size: 50,
  },
  {
    id: 'hero-prompt-right',
    type: 'prompt',
    top: 210,
    right: '3.5%',
    text: '<MERN.js />',
    color: '#C84B31',
    speed: 0.3,
    rot: -4,
  },
  {
    id: 'hero-spool-left',
    type: 'spool',
    top: 520,
    left: '4%',
    color: '#C84B31',
    speed: 0.6,
    rot: 90,
    size: 46,
  },
  {
    id: 'hero-droplet-right',
    type: 'droplet',
    top: 560,
    right: '4.5%',
    color: '#EAA838',
    speed: 0.5,
    rot: 0,
    size: 34,
  },

  // --- Section 2: METRICS BANNER (Engineering Principles & DSA) ---
  {
    id: 'metrics-dsa-left',
    type: 'dsa',
    top: 1100,
    left: '3.5%',
    color: '#C84B31',
    speed: 0.45,
    rot: 25,
    size: 44,
  },
  {
    id: 'metrics-chip-right',
    type: 'prompt',
    top: 1300,
    right: '3%',
    text: 'O(1) • 100+ DSA',
    color: '#10B981',
    speed: 0.55,
    rot: 3,
  },
  {
    id: 'metrics-db-left',
    type: 'db',
    top: 1580,
    left: '4%',
    color: '#EAA838',
    speed: 0.5,
    rot: -12,
    size: 40,
  },

  // --- Section 3: BENTO SERVICES (Architecture, WebSockets & APIs) ---
  {
    id: 'bento-socket-left',
    type: 'socket',
    top: 2150,
    left: '3%',
    color: '#10B981',
    speed: 0.5,
    rot: 140,
    size: 46,
  },
  {
    id: 'bento-cube-right',
    type: 'cube',
    top: 2450,
    right: '3.5%',
    color: '#388087',
    speed: 0.65,
    rot: -15,
    size: 44,
  },
  {
    id: 'bento-prompt-left',
    type: 'prompt',
    top: 2850,
    left: '3.5%',
    text: '⚡ <50ms Socket',
    color: '#EAA838',
    speed: 0.4,
    rot: -3,
  },

  // --- Section 4: PROJECTS (Production SaaS, Docker, Git) ---
  {
    id: 'proj-git-left',
    type: 'git',
    top: 3600,
    left: '3%',
    color: '#EAA838',
    speed: 0.55,
    rot: 40,
    size: 44,
  },
  {
    id: 'proj-cube-right',
    type: 'cube',
    top: 4150,
    right: '3%',
    color: '#388087',
    speed: 0.6,
    rot: 20,
    size: 44,
  },
  {
    id: 'proj-prompt-left',
    type: 'prompt',
    top: 4750,
    left: '3.5%',
    text: 'PROD DOCKER',
    color: '#388087',
    speed: 0.7,
    rot: 4,
  },
  {
    id: 'proj-react-right',
    type: 'react',
    top: 5350,
    right: '3.5%',
    color: '#C84B31',
    speed: 0.5,
    rot: -120,
    size: 48,
  },

  // --- Section 5: TECH STACK & TIMELINE ---
  {
    id: 'tech-db-left',
    type: 'db',
    top: 6500,
    left: '3%',
    color: '#EAA838',
    speed: 0.55,
    rot: 15,
    size: 42,
  },
  {
    id: 'tech-spool-right',
    type: 'spool',
    top: 7200,
    right: '3%',
    color: '#388087',
    speed: 0.6,
    rot: 180,
    size: 50,
  },
  {
    id: 'time-prompt-right',
    type: 'prompt',
    top: 7950,
    right: '3.5%',
    text: '2022 ➔ 2026',
    color: '#C84B31',
    speed: 0.45,
    rot: -3,
  },
  {
    id: 'time-dsa-left',
    type: 'dsa',
    top: 8650,
    left: '3.5%',
    color: '#10B981',
    speed: 0.5,
    rot: -30,
    size: 44,
  },

  // --- Section 6: CONTACT & LET'S TALK ---
  {
    id: 'contact-prompt-left',
    type: 'prompt',
    top: 9800,
    left: '4%',
    text: 'STATUS: READY',
    color: '#10B981',
    speed: 0.4,
    rot: 2,
  },
  {
    id: 'contact-socket-right',
    type: 'socket',
    top: 10450,
    right: '3.5%',
    color: '#EAA838',
    speed: 0.5,
    rot: 90,
    size: 46,
  },
];

export default function LiquidParallaxArtifacts() {
  const containerRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setPrefersReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
    } else {
      mediaQuery.addListener(handler);
    }
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, []);

  // Parallax physics with GSAP ScrollTrigger
  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll('[data-parallax-item]');
      if (!items || items.length === 0) return;

      items.forEach((item) => {
        const speed = parseFloat(item.getAttribute('data-speed') || '0.5');
        const targetRot = parseFloat(item.getAttribute('data-rot') || '0');

        gsap.to(item, {
          y: () => -window.innerHeight * speed * 0.6,
          rotation: targetRot,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-x-0 top-0 bottom-0 z-20 overflow-hidden select-none"
      style={{ height: '100%' }}
      aria-hidden="true"
    >
      {ARTIFACT_DEFINITIONS.map((art) => {
        const style = {
          position: 'absolute',
          top: `${art.top}px`,
          ...(art.left ? { left: art.left } : {}),
          ...(art.right ? { right: art.right } : {}),
          willChange: 'transform',
        };

        const renderComponent = () => {
          switch (art.type) {
            case 'react':
              return <ReactOrbit size={art.size} color={art.color} />;
            case 'prompt':
              return <CodePromptChip text={art.text} color={art.color} />;
            case 'db':
              return <DbCylinder size={art.size} color={art.color} />;
            case 'cube':
              return <MicroserviceCube size={art.size} color={art.color} />;
            case 'socket':
              return <SocketWave size={art.size} color={art.color} />;
            case 'dsa':
              return <DsaNodeChip size={art.size} color={art.color} />;
            case 'git':
              return <GitBranchFork size={art.size} color={art.color} />;
            case 'spool':
              return <TapeSpool size={art.size} color={art.color} />;
            case 'droplet':
              return <LiquidDroplet size={art.size} color={art.color} />;
            default:
              return null;
          }
        };

        return (
          <div
            key={art.id}
            data-parallax-item="true"
            data-speed={art.speed}
            data-rot={art.rot}
            style={style}
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            {renderComponent()}
          </div>
        );
      })}
    </div>
  );
}
