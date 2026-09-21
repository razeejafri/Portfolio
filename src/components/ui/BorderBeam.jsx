import React from 'react';

export default function BorderBeam({
  className = '',
  size = 85, // beam arc length in degrees (e.g. 60 - 120)
  duration = 8, // duration in seconds for one full loop
  borderWidth = 1.5, // border width in pixels
  colorFrom = '#38bdf8', // starting gradient color (cyan)
  colorTo = '#6366f1', // ending gradient color (indigo)
  delay = 0,
  reverse = false,
  glow = true,
  glowIntensity = 0.6,
}) {
  return (
    <>
      {/* Primary Crisp Border Beam */}
      <div
        style={{
          padding: `${borderWidth}px`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
        className={`pointer-events-none absolute inset-0 z-10 rounded-[inherit] overflow-hidden ${className}`}
        aria-hidden="true"
      >
        <div
          style={{
            animation: `borderBeamSpin ${duration}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
            animationDelay: `${delay}s`,
            background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent ${360 - size}deg, ${colorFrom} ${360 - size / 2}deg, ${colorTo} 360deg)`,
          }}
          className="absolute inset-[-150%] m-auto aspect-square will-change-transform transform-gpu"
        />
      </div>

      {/* Ambient Outer Specular Glow */}
      {glow && (
        <div
          style={{
            padding: `${borderWidth}px`,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            opacity: glowIntensity,
          }}
          className="pointer-events-none absolute -inset-[1px] z-10 rounded-[inherit] overflow-hidden blur-[4px]"
          aria-hidden="true"
        >
          <div
            style={{
              animation: `borderBeamSpin ${duration}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
              animationDelay: `${delay}s`,
              background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent ${360 - size}deg, ${colorFrom} ${360 - size / 2}deg, ${colorTo} 360deg)`,
            }}
            className="absolute inset-[-150%] m-auto aspect-square will-change-transform transform-gpu"
          />
        </div>
      )}
    </>
  );
}
