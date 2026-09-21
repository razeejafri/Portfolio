import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import CyberCat from './CyberCat';

/**
 * ScrollProgressBar Component (Smooth 60fps Edition)
 * 
 * Features:
 * - Solid Continuous Visibility: Zero disappearance or flickering during scrolling.
 * - Robust 320ms Debounce: Cat stays smoothly in running stride between scroll wheel notches.
 * - 100% Synchronized Head: The cat's center contact point and the progress bar head
 *   move in lockstep across the entire viewport with zero drift.
 * - Dynamic 2-Frame Gallop Cycle with pumping paws and trailing sparks.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  // Fine-tuned spring for snappy yet fluid 60fps tracking
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 340,
    damping: 36,
    mass: 0.7,
    restDelta: 0.0004,
  });

  const [isRunning, setIsRunning] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [meowText, setMeowText] = useState(null);

  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(0);
  const scrollTimeout = useRef(null);
  const meowTimeout = useRef(null);

  useEffect(() => {
    lastScrollTime.current = Date.now();
    const handleScroll = () => {
      const currentY = window.scrollY;
      const now = Date.now();
      const deltaY = currentY - lastScrollY.current;
      const deltaTime = Math.max(1, now - lastScrollTime.current);

      if (Math.abs(deltaY) > 1) {
        const speed = Math.abs(deltaY) / deltaTime;
        setSpeedMultiplier(Math.min(2.4, Math.max(0.9, speed * 1.4)));
        setDirection(deltaY > 0 ? 1 : -1);
        setIsRunning(true);

        // Generous 320ms debounce so scroll wheel ticks don't cause stutter/disappearance
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          setIsRunning(false);
          setSpeedMultiplier(1);
        }, 320);
      }

      lastScrollY.current = currentY;
      lastScrollTime.current = now;

      // Calculate percentage & boundaries
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const pct = Math.min(100, Math.max(0, Math.round((currentY / maxScroll) * 100)));
        setScrollPercent(pct);
        setIsAtStart(pct <= 1);
        setIsAtEnd(pct >= 99);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (meowTimeout.current) clearTimeout(meowTimeout.current);
    };
  }, []);

  /**
   * MATHEMATICAL SYNCHRONIZATION:
   * Cat width = 56px. Center contact point = 28px.
   * Progress bar line starts at left: 0 and extends to EXACTLY the cat's contact point!
   */
  const catLeft = useTransform(smoothProgress, (p) => `calc(${p * 100}% - ${p * 56}px)`);

  const barWidth = useTransform(smoothProgress, (p) => {
    if (p <= 0.002) return '0%';
    if (p >= 0.998) return '100%';
    return `calc(${p * 100}% - ${p * 56}px + 28px)`;
  });

  const handleCatClick = () => {
    const phrases = [
      'Meow! 🐾',
      'Purrrr~ ✨',
      'Cyber Cat ⚡',
      'Keep exploring! 🚀',
      'Razee x Cat 💻',
      '100% Tech! ⚡',
    ];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setMeowText(randomPhrase);

    if (meowTimeout.current) clearTimeout(meowTimeout.current);
    meowTimeout.current = setTimeout(() => {
      setMeowText(null);
    }, 1900);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[48px] pointer-events-none select-none">
      {/* Background full-width subtle rail track */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white/[0.06]" />

      {/* Active Laser Progress Bar (locked to cat's paws) */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-amber-600 via-amber-400 to-amber-300 shadow-[0_0_14px_rgba(245,158,11,0.95)] rounded-r-full"
        style={{ width: barWidth }}
      >
        {/* Trailing soft amber ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-amber-400/60 blur-[3px]" />

        {/* The Head of the Progress Bar (Glowing laser bead right beneath paws) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-200 shadow-[0_0_12px_#fbbf24] animate-pulse" />
          <div className="absolute w-6 h-6 rounded-full bg-amber-400/40 blur-[3px]" />
        </div>
      </motion.div>

      {/* The Cyber Cat Container (Travels in 100% lockstep with progress head) */}
      <motion.div
        className="absolute bottom-[2px] pointer-events-auto flex flex-col items-center cursor-pointer"
        style={{ left: catLeft }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCatClick}
      >
        {/* Dynamic 2-Frame Galloping Cat */}
        <CyberCat
          isRunning={isRunning}
          direction={direction}
          speedMultiplier={speedMultiplier}
          isAtEnd={isAtEnd}
          isAtStart={isAtStart}
        />

        {/* Contact Laser Sparks pulse under paws */}
        <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-5 h-1 bg-amber-400 rounded-full blur-[1px] opacity-85 pointer-events-none" />

        {/* Sleek Frosted Glass Tooltip (Positioned safely below the progress line) */}
        <AnimatePresence>
          {(isHovered || isRunning || meowText || isAtEnd) && (
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.88 }}
              transition={{ duration: 0.16, ease: 'easeOut' }}
              className="absolute top-[44px] whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider bg-[#14100D]/95 text-amber-300 border border-amber-400/40 shadow-[0_4px_16px_rgba(245,158,11,0.35)] backdrop-blur-md pointer-events-none flex items-center gap-1.5 z-30"
            >
              {/* Pointing caret */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#14100D] border-l border-t border-amber-400/40" />

              {meowText ? (
                <span className="relative z-10 text-amber-200 font-sans">{meowText}</span>
              ) : isAtEnd ? (
                <div className="relative z-10 flex items-center gap-1.5 text-amber-300">
                  <span>🏆</span>
                  <span>100% Completed!</span>
                  <span className="text-[9px] text-amber-300">Purrr~</span>
                </div>
              ) : isAtStart ? (
                <div className="relative z-10 flex items-center gap-1.5 text-stone-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  <span>Scroll to explore 🐾</span>
                </div>
              ) : (
                <div className="relative z-10 flex items-center gap-1.5 text-stone-200">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isRunning ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'
                    }`}
                  />
                  <span>{scrollPercent}%</span>
                  <span className="text-[8px] text-slate-400 font-normal">
                    {isRunning ? (direction > 0 ? 'sprinting ⚡' : 'returning 🐾') : 'resting'}
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
