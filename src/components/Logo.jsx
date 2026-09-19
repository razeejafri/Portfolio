import React from 'react';

/**
 * Modern Proprietary Tech Logo Mark: "Hyper-Loop Nexus / Quantum Prism"
 * 
 * Replaces generic text initials (RJ) with a custom, futuristic,
 * interlocking geometric prism emblem. Designed with high-specular gradients,
 * neon cyan to violet chromatic energy, and precision micro-facets.
 * 
 * @param {Object} props
 * @param {'sm' | 'md' | 'lg' | 'xl' | number} [props.size='sm'] - Display size preset or pixel value
 * @param {boolean} [props.showText=true] - Whether to display the styled brand name "Razee."
 * @param {boolean} [props.animated=true] - Whether to include ambient breathing & hover glow animations
 * @param {string} [props.className] - Additional classes for container
 */
export default function Logo({
  size = 'sm',
  showText = true,
  animated = true,
  className = ''
}) {
  // Map size presets to numeric pixel dimensions
  const sizeMap = {
    xs: 26,
    sm: 34,
    md: 44,
    lg: 64,
    xl: 84
  };

  const pixelSize = typeof size === 'number' ? size : (sizeMap[size] || 34);

  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Visual Logo Icon Mark */}
      <div
        className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-out group-hover:scale-105"
        style={{ width: pixelSize, height: pixelSize }}
      >
        {/* Ambient Glow Aura */}
        {animated && (
          <div
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-purple-600/30 blur-md opacity-40 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"
          />
        )}

        <svg
          viewBox="0 0 100 100"
          className="w-full h-full relative z-10 overflow-visible drop-shadow-[0_2px_10px_rgba(0,212,255,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Primary Chromatic Cyan-to-Blue Ribbon Gradient */}
            <linearGradient id="cyberRibbonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="60%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>

            {/* Secondary Deep Electric Indigo-to-Purple Ribbon Gradient */}
            <linearGradient id="cyberRibbonPurple" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>

            {/* Specular Ridge Highlight */}
            <linearGradient id="specularGlint" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#38BDF8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
            </linearGradient>

            {/* Inner Core Energy Gradient */}
            <radialGradient id="quantumCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#00F0FF" />
              <stop offset="85%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#06080F" />
            </radialGradient>

            {/* Backdrop Chassis Fill Gradient */}
            <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#060913" />
            </linearGradient>

            {/* Border Stroke Gradient */}
            <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Chamfered Outer Chassis (High-tech shield tile) */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="24"
            fill="url(#chassisGrad)"
            stroke="url(#borderGrad)"
            strokeWidth="1.75"
          />

          {/* Micro Grid Circuit Accents */}
          <g opacity="0.25" stroke="#38BDF8" strokeWidth="0.75" strokeDasharray="2 3">
            <line x1="16" y1="50" x2="28" y2="50" />
            <line x1="72" y1="50" x2="84" y2="50" />
            <line x1="50" y1="16" x2="50" y2="28" />
            <line x1="50" y1="72" x2="50" y2="84" />
          </g>

          {/* 
            GEOMETRIC EMBLEM: "Hyper-Loop Nexus"
            Precision interlocking isometric ribbons creating an infinite prism
          */}

          {/* Top-Left Wing Loop */}
          <path
            d="M 50 20 L 76 35 L 76 54 L 50 69 L 24 54 L 24 35 Z"
            fill="none"
            stroke="url(#borderGrad)"
            strokeWidth="1"
            opacity="0.3"
          />

          {/* Ribbon Segment 1: Cyan Ascending Facet */}
          <path
            d="M 50 22 L 75 36.5 L 61 44.5 L 50 38 Z"
            fill="url(#cyberRibbonCyan)"
            className="transition-all duration-300 group-hover:brightness-110"
          />

          {/* Ribbon Segment 2: Deep Blue Interlock */}
          <path
            d="M 75 36.5 L 75 63.5 L 61 55.5 L 61 44.5 Z"
            fill="#1E40AF"
            opacity="0.9"
          />

          {/* Ribbon Segment 3: Violet Descending Base */}
          <path
            d="M 75 63.5 L 50 78 L 50 63.5 L 61 55.5 Z"
            fill="url(#cyberRibbonPurple)"
            className="transition-all duration-300 group-hover:brightness-110"
          />

          {/* Ribbon Segment 4: Amethyst Left Base */}
          <path
            d="M 50 78 L 25 63.5 L 39 55.5 L 50 63.5 Z"
            fill="#7C3AED"
          />

          {/* Ribbon Segment 5: Neon Sky Returning Facet */}
          <path
            d="M 25 63.5 L 25 36.5 L 39 44.5 L 39 55.5 Z"
            fill="url(#cyberRibbonCyan)"
          />

          {/* Ribbon Segment 6: Closing Top Facet */}
          <path
            d="M 25 36.5 L 50 22 L 50 38 L 39 44.5 Z"
            fill="#0284C7"
          />

          {/* Specular Glint along Central Ridge */}
          <path
            d="M 50 22 L 50 38 L 61 44.5"
            stroke="url(#specularGlint)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Floating Quantum Core (Central Diamond Crystal) */}
          <polygon
            points="50,42 57,50 50,58 43,50"
            fill="url(#quantumCore)"
            className="transition-transform duration-500 ease-out group-hover:rotate-45 group-hover:scale-110"
            style={{ transformOrigin: '50px 50px' }}
          />

          {/* Glowing Center Micro Point */}
          <circle
            cx="50"
            cy="50"
            r="1.8"
            fill="#FFFFFF"
            className="animate-pulse"
          />

          {/* Corner High-Tech Ticks */}
          <path
            d="M 12 22 L 12 12 L 22 12"
            stroke="#00F0FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M 88 78 L 88 88 L 78 88"
            stroke="#A855F7"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Styled Brand Name (Razee.) with Modern Typography */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-heading font-extrabold text-white text-base tracking-tight leading-none flex items-baseline gap-0.5">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-white group-hover:via-cyan-100 group-hover:to-cyan-300 transition-all duration-300">
              Razee
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block ml-0.5 shadow-sm shadow-cyan-400 animate-pulse" />
          </span>
          <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-0.5 opacity-70 group-hover:opacity-100 group-hover:text-cyan-300 transition-colors">
            DEV_STUDIO
          </span>
        </div>
      )}
    </div>
  );
}
