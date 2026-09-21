import React from 'react';

export default function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#F4EFE6]"
      aria-hidden="true"
    >
      {/* 1970s Sun-Drenched Retro Warm Orbs: Mustard Yellow, Burnt Terracotta & Retro Teal */}
      
      {/* Orb 1: Warm Mustard Gold (Top-Left / Hero Area) */}
      <div
        className="absolute -top-24 -left-24 w-[650px] h-[650px] rounded-full animate-drift-slow will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(234, 168, 56, 0.15) 0%, rgba(200, 75, 49, 0.05) 45%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Orb 2: Burnt Terracotta & Sunset Rust (Top-Right / Media Showcase) */}
      <div
        className="absolute top-1/4 -right-32 w-[700px] h-[700px] rounded-full animate-drift-inverted will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(200, 75, 49, 0.12) 0%, rgba(234, 168, 56, 0.05) 45%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Orb 3: Retro Teal Wave Accent (Mid / Projects Showcase) */}
      <div
        className="absolute top-1/2 -left-40 w-[720px] h-[720px] rounded-full animate-drift-slow will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(56, 128, 135, 0.12) 0%, rgba(56, 128, 135, 0.04) 45%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Orb 4: Warm Ochre & Mustard (Lower Mid / Tech Stack) */}
      <div
        className="absolute top-2/3 right-10 w-[600px] h-[600px] rounded-full animate-drift-inverted will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(234, 168, 56, 0.14) 0%, rgba(200, 75, 49, 0.04) 45%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Orb 5: Terracotta Amber Glow (Bottom / Contact Section) */}
      <div
        className="absolute -bottom-32 left-1/3 w-[700px] h-[700px] rounded-full animate-drift-slow will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(200, 75, 49, 0.12) 0%, rgba(234, 168, 56, 0.05) 45%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Retro Halftone & Paper Grid with Vignette Fade */}
      <div
        className="absolute inset-0 cyber-dots opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, #000 45%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, #000 45%, transparent 100%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Warm Parchment Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4EFE6]/40 via-transparent to-[#F4EFE6]/60 pointer-events-none" />
    </div>
  );
}
