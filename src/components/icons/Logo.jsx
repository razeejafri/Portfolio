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
  _animated = true,
  className = ''
}) {
  const sizeMap = {
    xs: 28,
    sm: 36,
    md: 46,
    lg: 64,
    xl: 84
  };

  const pixelSize = typeof size === 'number' ? size : (sizeMap[size] || 36);

  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* 1970s Tactile Vintage Chassis Badge */}
      <div
        className="relative flex items-center justify-center flex-shrink-0 rounded-xl bg-[#FAF6F0] border-2 border-[#351C15] shadow-[2.5px_2.5px_0px_#351C15] group-hover:shadow-[4px_4px_0px_#351C15] group-hover:-translate-y-0.5 transition-all duration-200"
        style={{ width: pixelSize, height: pixelSize }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full p-1 overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Retro 70s Triple Stripes Ribbon Gradients */}
            <linearGradient id="retroTeal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4FA0A8" />
              <stop offset="100%" stopColor="#2E6A70" />
            </linearGradient>

            <linearGradient id="retroMustard" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5BE58" />
              <stop offset="100%" stopColor="#D48B1E" />
            </linearGradient>

            <linearGradient id="retroTerracotta" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2654A" />
              <stop offset="100%" stopColor="#B33E26" />
            </linearGradient>
          </defs>

          {/* Isometric Interlocking 70s Monogram / Prism */}
          <g className="transition-transform duration-300 group-hover:scale-105" style={{ transformOrigin: '50px 50px' }}>
            {/* Top Loop: Retro Teal Facet */}
            <path
              d="M 50 18 L 78 34 L 64 42 L 50 34 Z"
              fill="url(#retroTeal)"
              stroke="#351C15"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Right Loop: Mustard Gold Facet */}
            <path
              d="M 78 34 L 78 66 L 64 58 L 64 42 Z"
              fill="url(#retroMustard)"
              stroke="#351C15"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Bottom Right Loop: Terracotta Facet */}
            <path
              d="M 78 66 L 50 82 L 50 66 L 64 58 Z"
              fill="url(#retroTerracotta)"
              stroke="#351C15"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Bottom Left Loop: Teal Return Facet */}
            <path
              d="M 50 82 L 22 66 L 36 58 L 50 66 Z"
              fill="url(#retroTeal)"
              stroke="#351C15"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Left Loop: Mustard Ascending Facet */}
            <path
              d="M 22 66 L 22 34 L 36 42 L 36 58 Z"
              fill="url(#retroMustard)"
              stroke="#351C15"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Top Left Loop: Terracotta Cap Facet */}
            <path
              d="M 22 34 L 50 18 L 50 34 L 36 42 Z"
              fill="url(#retroTerracotta)"
              stroke="#351C15"
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Center Core: Solid Chocolate Diamond */}
            <polygon
              points="50,40 60,50 50,60 40,50"
              fill="#351C15"
              className="transition-transform duration-500 ease-out group-hover:rotate-45"
              style={{ transformOrigin: '50px 50px' }}
            />

            {/* Center Dial Pin in Warm Cream */}
            <circle
              cx="50"
              cy="50"
              r="2.8"
              fill="#FAF6F0"
              stroke="#351C15"
              strokeWidth="1.2"
            />
          </g>
        </svg>
      </div>

      {/* Styled Brand Name with Fraunces Typography */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-retro font-black text-[#351C15] text-lg tracking-tight leading-none flex items-baseline gap-0.5 group-hover:text-[#C84B31] transition-colors">
            <span>Razee</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31] inline-block ml-0.5" />
          </span>
          <span className="text-[9px] font-mono font-bold tracking-widest text-[#7A5042] uppercase -mt-0.5">
            ENGINEERING
          </span>
        </div>
      )}
    </div>
  );
}
