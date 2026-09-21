import React, { useId } from 'react';

/**
 * AnimatedSectionDivider
 * Renders luxurious 3D organic wave ribbons inspired by the design image.
 * Variants:
 *  - 'pearl-wave': Luminous alabaster / pearl frosted silk wave with cyan rim light
 *  - 'azure-ribbon': Electric cyan & deep sapphire liquid ribbon
 *  - 'aurora-wave': Multi-chromatic sapphire, cyan, and violet aurora ribbon
 *  - 'cyan-silk': Bioluminescent electric cyan flowing wave
 *  - 'pearl-reverse': Inverted organic wave for seamless alternating section flow
 */
export default function AnimatedSectionDivider({ variant = 'azure-ribbon', className = '' }) {
  const rawId = useId();
  const uid = rawId.replace(/:/g, '');

  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none -my-1 ${className}`}
      aria-hidden="true"
    >
      {/* Wave Variant 1: Pearl Liquid Silk Ribbon (Warm Champagne & Gold Sheen) */}
      {variant === 'pearl-wave' && (
        <div className="relative w-full">
          {/* Ambient Glow Aura Behind Crest */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-16 bg-amber-500/10 blur-2xl rounded-full" />

          <svg
            className="w-full h-16 sm:h-24 md:h-28 block preserve-3d"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Champagne pearl gradient with specular sheen */}
              <linearGradient id={`${uid}-pearlRibbonGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(254,243,199,0.01)" />
                <stop offset="25%" stopColor="rgba(254,243,199,0.10)" />
                <stop offset="50%" stopColor="rgba(245,158,11,0.18)" />
                <stop offset="75%" stopColor="rgba(254,243,199,0.12)" />
                <stop offset="100%" stopColor="rgba(254,243,199,0.01)" />
              </linearGradient>

              {/* Luminous crest line gradient */}
              <linearGradient id={`${uid}-pearlCrestGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(245,158,11,0)" />
                <stop offset="20%" stopColor="rgba(245,158,11,0.5)" />
                <stop offset="50%" stopColor="#FEF3C7" />
                <stop offset="80%" stopColor="rgba(245,158,11,0.6)" />
                <stop offset="100%" stopColor="rgba(245,158,11,0)" />
              </linearGradient>

              {/* Back ambient ribbon */}
              <linearGradient id={`${uid}-pearlBackGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(217,119,6,0.08)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Back Translucent Ambient Wave */}
            <path
              d="M0,80 C320,30 580,110 880,50 C1140,0 1320,70 1440,60 L1440,120 L0,120 Z"
              fill={`url(#${uid}-pearlBackGrad)`}
            />

            {/* Main Pearl Wave Surface */}
            <path
              d="M0,45 C280,95 560,15 860,65 C1160,115 1320,35 1440,55 L1440,120 L0,120 Z"
              fill={`url(#${uid}-pearlRibbonGrad)`}
            />

            {/* Specular Edge Crest with Glow */}
            <path
              d="M0,45 C280,95 560,15 860,65 C1160,115 1320,35 1440,55"
              stroke={`url(#${uid}-pearlCrestGrad)`}
              strokeWidth="2"
              strokeLinecap="round"
              className="drop-shadow-[0_0_12px_rgba(254,243,199,0.8)]"
            />
          </svg>
        </div>
      )}

      {/* Wave Variant 2: Warm Tuscan Gold & Amber Liquid Ribbon */}
      {(variant === 'azure-ribbon' || variant === 'cyan' || variant === 'pearl') && (
        <div className="relative w-full">
          {/* Ambient Warm Amber Back-Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-20 bg-amber-500/15 blur-3xl rounded-full" />

          <svg
            className="w-full h-16 sm:h-24 md:h-28 block preserve-3d"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Warm Amber-Gold Gradient */}
              <linearGradient id={`${uid}-azureRibbonGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(245,158,11,0.01)" />
                <stop offset="25%" stopColor="rgba(217,119,6,0.18)" />
                <stop offset="50%" stopColor="rgba(245,158,11,0.26)" />
                <stop offset="75%" stopColor="rgba(180,83,9,0.18)" />
                <stop offset="100%" stopColor="rgba(245,158,11,0.01)" />
              </linearGradient>

              {/* Champagne Gold Specular Crest */}
              <linearGradient id={`${uid}-azureCrestGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(245,158,11,0)" />
                <stop offset="25%" stopColor="rgba(251,191,36,0.6)" />
                <stop offset="50%" stopColor="#FDE68A" />
                <stop offset="75%" stopColor="rgba(245,158,11,0.6)" />
                <stop offset="100%" stopColor="rgba(245,158,11,0)" />
              </linearGradient>

              {/* Deep Umber Under-Wave */}
              <linearGradient id={`${uid}-azureUnderGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(120,53,15,0.2)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Back Deep Umber Wave */}
            <path
              d="M0,60 C380,10 700,105 1060,35 C1240,0 1380,70 1440,55 L1440,120 L0,120 Z"
              fill={`url(#${uid}-azureUnderGrad)`}
            />

            {/* Main Gold Liquid Ribbon */}
            <path
              d="M0,70 C360,15 680,110 1020,40 C1220,-5 1360,75 1440,65 L1440,120 L0,120 Z"
              fill={`url(#${uid}-azureRibbonGrad)`}
            />

            {/* Champagne Gold Crest Edge */}
            <path
              d="M0,70 C360,15 680,110 1020,40 C1220,-5 1360,75 1440,65"
              stroke={`url(#${uid}-azureCrestGrad)`}
              strokeWidth="2"
              strokeLinecap="round"
              className="drop-shadow-[0_0_14px_rgba(245,158,11,0.7)]"
            />
          </svg>
        </div>
      )}

      {/* Wave Variant 3: Aurora Wave (Tuscan Gold + Terracotta Iridescent) */}
      {(variant === 'aurora-wave' || variant === 'aurora' || variant === 'rose') && (
        <div className="relative w-full">
          {/* Ambient Multi-Chromatic Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-20 bg-gradient-to-r from-amber-500/10 via-orange-600/15 to-amber-700/10 blur-3xl rounded-full" />

          <svg
            className="w-full h-16 sm:h-24 md:h-28 block preserve-3d"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`${uid}-auroraRibbonGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(245,158,11,0.02)" />
                <stop offset="30%" stopColor="rgba(234,88,12,0.18)" />
                <stop offset="50%" stopColor="rgba(245,158,11,0.22)" />
                <stop offset="70%" stopColor="rgba(217,119,6,0.14)" />
                <stop offset="100%" stopColor="rgba(245,158,11,0.02)" />
              </linearGradient>

              <linearGradient id={`${uid}-auroraCrestGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(245,158,11,0)" />
                <stop offset="25%" stopColor="rgba(251,191,36,0.7)" />
                <stop offset="50%" stopColor="#FEF3C7" />
                <stop offset="75%" stopColor="rgba(245,158,11,0.8)" />
                <stop offset="100%" stopColor="rgba(245,158,11,0)" />
              </linearGradient>
            </defs>

            <path
              d="M0,50 C300,105 620,10 940,75 C1180,120 1340,30 1440,50 L1440,120 L0,120 Z"
              fill={`url(#${uid}-auroraRibbonGrad)`}
            />

            <path
              d="M0,50 C300,105 620,10 940,75 C1180,120 1340,30 1440,50"
              stroke={`url(#${uid}-auroraCrestGrad)`}
              strokeWidth="2"
              strokeLinecap="round"
              className="drop-shadow-[0_0_14px_rgba(245,158,11,0.7)]"
            />
          </svg>
        </div>
      )}

      {/* Wave Variant 4: Emerald / Bronze Wave */}
      {(variant === 'emerald' || variant === 'amber') && (
        <div className="relative w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-20 bg-amber-500/10 blur-3xl rounded-full" />

          <svg
            className="w-full h-16 sm:h-24 md:h-28 block preserve-3d"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`${uid}-emeraldRibbonGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(217,119,6,0.02)" />
                <stop offset="40%" stopColor="rgba(217,119,6,0.16)" />
                <stop offset="60%" stopColor="rgba(245,158,11,0.22)" />
                <stop offset="100%" stopColor="rgba(217,119,6,0.02)" />
              </linearGradient>

              <linearGradient id={`${uid}-emeraldCrestGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(217,119,6,0)" />
                <stop offset="30%" stopColor="#D97706" />
                <stop offset="70%" stopColor="#FBBF24" />
                <stop offset="100%" stopColor="rgba(217,119,6,0)" />
              </linearGradient>
            </defs>

            <path
              d="M0,65 C340,110 660,20 980,70 C1200,105 1350,30 1440,60 L1440,120 L0,120 Z"
              fill={`url(#${uid}-emeraldRibbonGrad)`}
            />

            <path
              d="M0,65 C340,110 660,20 980,70 C1200,105 1350,30 1440,60"
              stroke={`url(#${uid}-emeraldCrestGrad)`}
              strokeWidth="2"
              strokeLinecap="round"
              className="drop-shadow-[0_0_12px_rgba(245,158,11,0.7)]"
            />
          </svg>
        </div>
      )}

      {/* Wave Variant 5: Inverted Pearl Wave */}
      {variant === 'pearl-reverse' && (
        <div className="relative w-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-16 bg-amber-500/10 blur-2xl rounded-full" />

          <svg
            className="w-full h-16 sm:h-24 md:h-28 block preserve-3d transform rotate-180"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`${uid}-pearlRevGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(254,243,199,0.01)" />
                <stop offset="30%" stopColor="rgba(254,243,199,0.12)" />
                <stop offset="50%" stopColor="rgba(245,158,11,0.18)" />
                <stop offset="70%" stopColor="rgba(254,243,199,0.12)" />
                <stop offset="100%" stopColor="rgba(254,243,199,0.01)" />
              </linearGradient>

              <linearGradient id={`${uid}-pearlRevCrest`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(245,158,11,0)" />
                <stop offset="25%" stopColor="rgba(245,158,11,0.5)" />
                <stop offset="50%" stopColor="#FEF3C7" />
                <stop offset="75%" stopColor="rgba(245,158,11,0.6)" />
                <stop offset="100%" stopColor="rgba(245,158,11,0)" />
              </linearGradient>
            </defs>

            <path
              d="M0,45 C280,95 560,15 860,65 C1160,115 1320,35 1440,55 L1440,120 L0,120 Z"
              fill={`url(#${uid}-pearlRevGrad)`}
            />

            <path
              d="M0,45 C280,95 560,15 860,65 C1160,115 1320,35 1440,55"
              stroke={`url(#${uid}-pearlRevCrest)`}
              strokeWidth="2"
              strokeLinecap="round"
              className="drop-shadow-[0_0_12px_rgba(254,243,199,0.8)]"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
