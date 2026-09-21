import React, { useState, useEffect } from 'react';

/**
 * CatLoader Component
 * 
 * A minimalist line-art style feline loading screen for modern dark-themed portfolios.
 * - Minimalist line-art cat drawn using pure SVG (outline only, white stroke #FFFFFF)
 * - Tail swishing gently side-to-side in a continuous loop via CSS keyframes
 * - Cat blinks naturally every 2-3 seconds (quick eye close and open)
 * - Playful batting paw moving up and down in sync with loading progress near a ball of yarn
 * - Ball of yarn with subtle rolling animation and soft cyan thread accent
 * - Monospace real-time percentage text below the cat
 * - Cat stretch/jump bounce animation triggered upon reaching 100%
 * - Smooth 0.5s opacity fadeout and clean DOM unmounting
 * - Reusable wrapper around children or standalone overlay
 * 
 * @param {Object} props
 * @param {React.ReactNode} [props.children] - Optional content revealed once loading completes
 * @param {number} [props.progress] - Optional external loading progress (0-100)
 * @param {number} [props.duration=2500] - Total loading duration in ms for simulated 0-100%
 * @param {number} [props.completeDelay=900] - Duration in ms for the stretch/jump celebration before fading out
 * @param {Function} [props.onComplete] - Callback fired once loader has faded out and unmounted
 * @param {string} [props.statusMessage] - Optional status text displayed below percentage
 */
export default function CatLoader({
  children,
  progress: externalProgress,
  duration = 2400,
  completeDelay = 900,
  onComplete
}) {
  const [internalProgress, setInternalProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  const isControlled = typeof externalProgress === 'number';
  const currentProgress = Math.min(100, Math.max(0, isControlled ? externalProgress : internalProgress));
  const isComplete = currentProgress >= 100;

  // Smooth simulated progress from 0 to 100 over duration ms
  useEffect(() => {
    if (isControlled) return;

    const startTime = performance.now();
    let animationFrameId;

    const updateProgress = (now) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min((elapsed / duration) * 100, 100);

      // Smooth cubic ease-out curve for natural loading pace
      const easedProgress = Math.min(
        100,
        Math.round(100 * (1 - Math.pow(1 - rawProgress / 100, 2.5)))
      );

      setInternalProgress(easedProgress);

      if (rawProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isControlled, duration]);

  // Handle completion: trigger stretch/jump, then fade out smoothly and unmount
  useEffect(() => {
    if (isComplete) {
      const celebrationTimer = setTimeout(() => {
        setIsFadingOut(true);

        const unmountTimer = setTimeout(() => {
          setIsUnmounted(true);
          if (onComplete) onComplete();
        }, 500); // 0.5s fade duration

        return () => clearTimeout(unmountTimer);
      }, completeDelay);

      return () => clearTimeout(celebrationTimer);
    }
  }, [isComplete, completeDelay, onComplete]);

  // If unmounted and wrapping children, reveal children cleanly
  if (isUnmounted) {
    return children ? <>{children}</> : null;
  }

  return (
    <>
      {/* Underlying content when CatLoader acts as a wrapper */}
      {children}

      {/* Fullscreen Overlay in Warm Aged Linen Vintage Canvas */}
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none overflow-hidden transition-opacity duration-500 ease-in-out ${
          isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{ backgroundColor: '#F4EFE6' }}
        role="status"
        aria-label="Loading portfolio"
      >
        {/* Subtle vintage halftone grid overlay */}
        <div className="absolute inset-0 cyber-grid pointer-events-none opacity-20" />

        {/* Scoped CSS Keyframes for Cat Tail, Blinking, Paw Batting, and Stretch/Jump */}
        <style>{`
          /* Tail gentle swishing side-to-side */
          @keyframes catTailSwish {
            0% {
              transform: rotate(0deg);
            }
            30% {
              transform: rotate(-13deg);
            }
            70% {
              transform: rotate(8deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }

          /* Cat periodic natural blink every 2.8s */
          @keyframes catBlink {
            0%, 90%, 100% {
              transform: scaleY(1);
            }
            94% {
              transform: scaleY(0.08);
            }
            97% {
              transform: scaleY(1);
            }
          }

          /* Playful batting paw motion */
          @keyframes catPawBat {
            0%, 100% {
              transform: rotate(0deg) translateY(0);
            }
            40% {
              transform: rotate(-10deg) translateY(-6px);
            }
            75% {
              transform: rotate(4deg) translateY(2px);
            }
          }

          /* Yarn ball gentle roll and wobble */
          @keyframes yarnWobble {
            0%, 100% {
              transform: translateX(0) rotate(0deg);
            }
            45% {
              transform: translateX(3px) rotate(18deg);
            }
            80% {
              transform: translateX(-1px) rotate(-8deg);
            }
          }

          /* Sparkle dots pulse near yarn */
          @keyframes sparkFloat {
            0%, 100% {
              opacity: 0.3;
              transform: translateY(0) scale(0.8);
            }
            50% {
              opacity: 1;
              transform: translateY(-4px) scale(1.2);
            }
          }

          /* Cat Stretch / Jump Celebration on 100% */
          @keyframes catStretchJump {
            0% {
              transform: translateY(0) scale(1, 1);
            }
            20% {
              transform: translateY(5px) scale(1.08, 0.92);
            }
            50% {
              transform: translateY(-18px) scale(0.94, 1.12);
            }
            75% {
              transform: translateY(-6px) scale(1.03, 0.97);
            }
            100% {
              transform: translateY(0) scale(1, 1);
            }
          }

          .cat-tail-animated {
            animation: catTailSwish 2.6s ease-in-out infinite;
            transform-origin: 72px 152px;
          }

          .cat-eyes-animated {
            animation: catBlink 2.8s ease-in-out infinite;
            transform-origin: 100px 62px;
          }

          .cat-paw-animated {
            animation: catPawBat 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
            transform-origin: 112px 115px;
          }

          .yarn-animated {
            animation: yarnWobble 0.65s ease-in-out infinite;
            transform-origin: 145px 152px;
          }

          .sparkle-dot-1 {
            animation: sparkFloat 0.7s ease-in-out infinite;
          }
          .sparkle-dot-2 {
            animation: sparkFloat 0.7s ease-in-out infinite 0.25s;
          }
          .sparkle-dot-3 {
            animation: sparkFloat 0.7s ease-in-out infinite 0.45s;
          }

          .cat-stretch-jump {
            animation: catStretchJump 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            transform-origin: center bottom;
          }
        `}</style>

        {/* Warm Ambient Retro Glow Orb */}
        <div
          className="absolute w-96 h-96 rounded-full blur-[120px] pointer-events-none transition-all duration-700"
          style={{
            background: 'radial-gradient(circle, rgba(234, 168, 56, 0.18) 0%, rgba(200, 75, 49, 0.12) 40%, transparent 70%)',
            transform: `scale(${0.9 + (currentProgress / 100) * 0.3})`
          }}
        />

        {/* Center Container with Stretch/Jump Trigger */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          
          {/* SVG Illustration Container */}
          <div
            className={`relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center ${
              isComplete ? 'cat-stretch-jump' : ''
            }`}
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full overflow-visible drop-shadow-[0_4px_12px_rgba(53,28,21,0.12)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* 1. ANIMATED TAIL (Base of spine, curls smoothly side to side) */}
              <g id="cat-tail" className="cat-tail-animated">
                <path
                  d="M 72 152 C 48 152 28 136 32 116 C 35 102 50 100 52 112 C 54 122 45 135 60 145"
                  stroke="#351C15"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
              </g>

              {/* 2. CAT SITTING BODY & BACK HIND LEG */}
              <g id="cat-body">
                {/* Left Back Curve (from nape down to sitting hip) */}
                <path
                  d="M 84 84 C 74 100 68 128 72 152"
                  stroke="#351C15"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Left Sitting Hind Foot */}
                <path
                  d="M 72 152 C 73 158 79 160 90 160"
                  stroke="#351C15"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Sitting Chest Curve */}
                <path
                  d="M 116 84 C 120 100 122 122 118 142"
                  stroke="#351C15"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Left Front Leg (Resting gracefully on ground) */}
                <path
                  d="M 94 108 L 94 154 C 94 158 99 159 104 155 L 104 120"
                  stroke="#351C15"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
                {/* Left Paw Toe Details */}
                <path d="M 97 155 L 97 159" stroke="#351C15" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M 101 155 L 101 159" stroke="#351C15" strokeWidth="2.2" strokeLinecap="round" />
              </g>

              {/* 3. PLAYFUL BATTING PAW (Right Front Leg, moving up and down) */}
              <g id="cat-batting-paw" className="cat-paw-animated">
                {/* Arm reaching forward towards yarn */}
                <path
                  d="M 112 115 C 119 125 127 134 134 142 C 137 146 142 145 142 140 C 140 134 132 128 118 112"
                  stroke="#351C15"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Batting Paw Claws/Pads */}
                <path d="M 136 142 L 138 145" stroke="#351C15" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M 139 140 L 142 142" stroke="#351C15" strokeWidth="2.2" strokeLinecap="round" />
              </g>

              {/* 4. BALL OF YARN & PLAYFUL SPARKLE ACCENTS */}
              <g id="yarn-ball" className="yarn-animated">
                {/* Yarn outer circle */}
                <circle
                  cx="146"
                  cy="152"
                  r="9"
                  fill="#EDE3D0"
                  stroke="#351C15"
                  strokeWidth="2.4"
                />
                {/* Yarn wound thread lines */}
                <path
                  d="M 140 148 C 145 145 150 148 153 153"
                  stroke="#C84B31"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 139 154 C 144 158 149 157 154 151"
                  stroke="#EAA838"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 146 143 C 149 147 147 156 143 161"
                  stroke="#388087"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Trailing loose yarn thread in retro terracotta */}
                <path
                  d="M 149 158 C 158 163 166 158 174 160"
                  stroke="#C84B31"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </g>

              {/* Batting Sparkle Dots in Retro Mustard & Teal */}
              <g id="sparkle-dots">
                <circle cx="134" cy="138" r="1.8" fill="#C84B31" className="sparkle-dot-1" />
                <circle cx="140" cy="132" r="2.2" fill="#EAA838" className="sparkle-dot-2" />
                <circle cx="148" cy="136" r="1.8" fill="#388087" className="sparkle-dot-3" />
              </g>

              {/* 5. CAT HEAD & FACIAL FEATURES */}
              <g id="cat-head">
                {/* Left Ear */}
                <path
                  d="M 80 50 L 69 24 L 92 38"
                  stroke="#351C15"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Left Inner Ear Ridge */}
                <path d="M 78 46 L 73 31 L 88 40" stroke="#C84B31" strokeWidth="2" strokeLinecap="round" />

                {/* Right Ear */}
                <path
                  d="M 108 38 L 131 24 L 120 50"
                  stroke="#351C15"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Right Inner Ear Ridge */}
                <path d="M 112 40 L 127 31 L 122 46" stroke="#C84B31" strokeWidth="2" strokeLinecap="round" />

                {/* Top Crown curve between ears */}
                <path
                  d="M 92 38 C 96 36 104 36 108 38"
                  stroke="#351C15"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Left Cheek */}
                <path
                  d="M 80 50 C 70 60 74 78 84 84"
                  stroke="#351C15"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Right Cheek */}
                <path
                  d="M 120 50 C 130 60 126 78 116 84"
                  stroke="#351C15"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Chin / Throat */}
                <path
                  d="M 84 84 C 92 89 108 89 116 84"
                  stroke="#351C15"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />

                {/* Nose (Cute Inverted Triangle in Terracotta) */}
                <path
                  d="M 97 71 L 103 71 L 100 74 Z"
                  stroke="#C84B31"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  fill="#C84B31"
                />

                {/* W-Shaped Whimsical Mouth */}
                <path
                  d="M 100 74 C 98 77 94 77 92 75"
                  stroke="#351C15"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M 100 74 C 102 77 106 77 108 75"
                  stroke="#351C15"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />

                {/* Whiskers (Left) */}
                <path d="M 76 72 L 52 69" stroke="#351C15" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                <path d="M 76 76 L 50 78" stroke="#351C15" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                <path d="M 76 80 L 54 86" stroke="#351C15" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

                {/* Whiskers (Right) */}
                <path d="M 124 72 L 148 69" stroke="#351C15" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                <path d="M 124 76 L 150 78" stroke="#351C15" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
                <path d="M 124 80 L 146 86" stroke="#351C15" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

                {/* ANIMATED BLINKING EYES */}
                <g id="cat-eyes" className="cat-eyes-animated">
                  {/* Left Eye Arc & Pupil */}
                  <path
                    d="M 83 62 C 86 58 92 58 94 62"
                    stroke="#351C15"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <circle cx="89" cy="62" r="2" fill="#351C15" />

                  {/* Right Eye Arc & Pupil */}
                  <path
                    d="M 106 62 C 108 58 114 58 117 62"
                    stroke="#351C15"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                  />
                  <circle cx="111" cy="62" r="2" fill="#351C15" />
                </g>
              </g>
            </svg>
          </div>

          {/* Retro Analog Loading Status Badge */}
          <div className="retro-stamp mt-5 inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>{isComplete ? 'WORKSPACE READY' : 'INITIALIZING WORKSPACE'}</span>
          </div>

          {/* 1970s Analog Recessed Meter Bar */}
          <div className="w-56 sm:w-64 h-3.5 bg-[#EDE3D0] rounded-full border-2 border-[#351C15] shadow-[3px_3px_0px_#351C15] p-0.5 mt-3 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#388087] via-[#EAA838] to-[#C84B31] transition-all duration-150 ease-out"
              style={{ width: `${currentProgress}%` }}
            />
          </div>

          {/* Monospace Reading & Percentage */}
          <div className="flex items-center justify-between w-56 sm:w-64 mt-2 font-mono text-[11px] font-bold text-[#5A382C]">
            <span className="uppercase tracking-wider">
              {isComplete ? 'READY' : 'LOADING ASSETS'}
            </span>
            <span className="text-[#351C15] font-black">{currentProgress}%</span>
          </div>

        </div>
      </div>
    </>
  );
}
