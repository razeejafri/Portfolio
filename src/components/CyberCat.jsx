import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * CyberCat Component (High-Fidelity Frame-by-Frame Animated Edition)
 * 
 * Fixes Applied:
 * - NO DISAPPEARING: All image elements remain permanently mounted in the DOM with 
 *   instant/smooth cross-fading. Zero unmounting, zero blank frames.
 * - TRUE RUNNING CYCLE: Cycles between Extended Stride (/cat-run-1.png) and 
 *   Contracted Stride (/cat-run-2.png) at 8-10fps when running, creating an authentic 
 *   feline gallop with pumping legs!
 * - SMOOTH IDLE: Settles into the standing anime pose (/cat-idle.png) with gentle breathing.
 */
export default function CyberCat({
  isRunning = false,
  direction = 1,
  speedMultiplier = 1,
  isAtEnd = false,
}) {
  // Stride frame toggle (0: extended, 1: contracted)
  const [runFrame, setRunFrame] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    // Cycle interval scales dynamically with scroll velocity
    const intervalTime = Math.max(90, Math.round(150 / Math.min(speedMultiplier, 2.2)));
    const timer = setInterval(() => {
      setRunFrame((prev) => (prev === 0 ? 1 : 0));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isRunning, speedMultiplier]);

  // Gallop bounce timing
  const gallopDuration = Math.max(0.18, 0.3 / Math.min(speedMultiplier, 2.2));

  return (
    <motion.div
      className="relative select-none pointer-events-auto cursor-pointer flex items-end justify-center"
      style={{ transformOrigin: 'center bottom' }}
      animate={{
        scaleX: direction,
        rotate: isRunning ? direction * 2.5 : 0,
      }}
      transition={{
        scaleX: { type: 'spring', stiffness: 500, damping: 32 },
        rotate: { duration: 0.15, ease: 'easeOut' },
      }}
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.92, y: -4 }}
    >
      {/* Container with bright neon drop-shadow */}
      <motion.div
        animate={
          isRunning
            ? {
                y: [0, -4, 0.5, -3, 0],
              }
            : isAtEnd
            ? {
                y: [0, -3, 0],
                scale: 1.05,
              }
            : {
                y: [0, -1.2, 0],
                scale: 1,
              }
        }
        transition={{
          y: {
            duration: isRunning ? gallopDuration : isAtEnd ? 1.4 : 2.6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        className="relative w-[56px] h-[40px] flex items-end justify-center drop-shadow-[0_0_12px_rgba(56,189,248,0.85)]"
      >
        {/* ================= POSE 1: IDLE / STANDING (Always mounted) ================= */}
        <img
          src="/cat-idle.png"
          alt="Cyber Cat Standing"
          className={`absolute bottom-0 w-[42px] h-[46px] object-contain pointer-events-none select-none transition-opacity duration-150 ${
            isRunning ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          draggable={false}
        />

        {/* ================= POSE 2: RUNNING FRAME 1 (Extended Stride) ================= */}
        <img
          src="/cat-run-1.png"
          alt="Cyber Cat Run 1"
          className={`absolute bottom-0 w-[58px] h-[35px] object-contain pointer-events-none select-none ${
            isRunning && runFrame === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          draggable={false}
        />

        {/* ================= POSE 3: RUNNING FRAME 2 (Contracted Stride) ================= */}
        <img
          src="/cat-run-2.png"
          alt="Cyber Cat Run 2"
          className={`absolute bottom-0 w-[54px] h-[37px] object-contain pointer-events-none select-none ${
            isRunning && runFrame === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          draggable={false}
        />

        {/* Contact Laser Sparks pulse under paws when galloping */}
        {isRunning && (
          <>
            <motion.span
              className="absolute -bottom-1 left-2 w-1.5 h-1.5 rounded-full bg-cyan-300 blur-[0.5px]"
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
              transition={{ duration: gallopDuration, repeat: Infinity }}
            />
            <motion.span
              className="absolute -bottom-1 right-2 w-1.5 h-1.5 rounded-full bg-blue-400 blur-[0.5px]"
              animate={{ opacity: [1, 0, 1], scale: [1.3, 0.4, 1.3] }}
              transition={{ duration: gallopDuration, repeat: Infinity }}
            />
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
