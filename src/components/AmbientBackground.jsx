import React from 'react';

export default function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#04060E]"
      aria-hidden="true"
    >
      {/* Dynamic Multi-Chromatic Ambient Floating Blobs matching the high-end sapphire/cyan palette */}
      
      {/* Orb 1: Deep Royal Sapphire (Top-Left / Hero Area) */}
      <div
        className="absolute -top-24 -left-24 w-[650px] h-[650px] rounded-full animate-drift-slow will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.16) 0%, rgba(30, 58, 138, 0.08) 45%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Orb 2: Electric Cyan & Azure (Top-Right / Media Showcase) */}
      <div
        className="absolute top-1/4 -right-32 w-[700px] h-[700px] rounded-full animate-drift-inverted will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(56, 189, 248, 0.08) 45%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Orb 3: Luminous Azure & Cobalt (Mid / Projects Showcase) */}
      <div
        className="absolute top-1/2 -left-40 w-[720px] h-[720px] rounded-full animate-drift-slow will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(37, 99, 235, 0.07) 45%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Orb 4: Subtle Celestial Violet Accent (Lower Mid / Tech Stack) */}
      <div
        className="absolute top-2/3 right-10 w-[600px] h-[600px] rounded-full animate-drift-inverted will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(139, 92, 246, 0.06) 45%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Orb 5: Deep Electric Cyan Glow (Bottom / Contact Section) */}
      <div
        className="absolute -bottom-32 left-1/3 w-[700px] h-[700px] rounded-full animate-drift-slow will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.14) 0%, rgba(37, 99, 235, 0.08) 45%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Fine Procedural Cyber Grid with Vignette Fade */}
      <div
        className="absolute inset-0 cyber-grid opacity-20"
        style={{
          maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, #000 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, #000 35%, transparent 100%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Subtle Ambient Vignette on Viewport Edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#04060E]/20 to-[#04060E] pointer-events-none" />
    </div>
  );
}
