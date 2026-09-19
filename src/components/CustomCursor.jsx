import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Lazy check to avoid calling setState inside useEffect
  const [isTouchDevice] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    }
    return false;
  });

  // Position tracking using refs for zero-lag RAF
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const isLoopRunning = useRef(false);

  useEffect(() => {
    if (isTouchDevice) return;

    // Smooth animation loop for trailing ring with Idle Sleep to conserve CPU/Battery
    const render = () => {
      // Direct dot update (snappy zero lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Ring lerp update (smooth lag ~0.16)
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;
      ringPos.current.x += dx * 0.16;
      ringPos.current.y += dy * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      // Keep running if distance > 0.15px; otherwise sleep until next interaction
      if (Math.abs(dx) > 0.15 || Math.abs(dy) > 0.15) {
        rafId.current = requestAnimationFrame(render);
      } else {
        isLoopRunning.current = false;
      }
    };

    const startLoop = () => {
      if (!isLoopRunning.current) {
        isLoopRunning.current = true;
        rafId.current = requestAnimationFrame(render);
      }
    };

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
      startLoop();

      // Check if hovering over clickable or interactive elements
      const target = e.target;
      if (target) {
        const interactive = target.closest(
          'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"], .cursor-pointer'
        );
        setIsPointer(!!interactive);
      }
    };

    const onMouseDown = () => {
      setIsClicking(true);
      startLoop();
    };

    const onMouseUp = () => {
      setIsClicking(false);
      startLoop();
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
      startLoop();
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    startLoop();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      isLoopRunning.current = false;
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Crisp Pinpoint Center Dot (Zero CSS transition delay, pure 120fps hardware sync) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 will-change-transform pointer-events-none"
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isClicking
              ? 'w-1.5 h-1.5 bg-blue-400 scale-75'
              : isPointer
              ? 'w-2 h-2 bg-blue-300 scale-125 shadow-[0_0_10px_rgba(96,165,250,0.8)]'
              : 'w-2 h-2 bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.9)]'
          }`}
        />
      </div>

      {/* Lagging Trailing Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 will-change-transform pointer-events-none"
      >
        <div
          className={`rounded-full border transition-all duration-300 ease-out flex items-center justify-center ${
            isClicking
              ? 'w-8 h-8 border-blue-400/80 bg-blue-500/20 scale-75'
              : isPointer
              ? 'w-12 h-12 border-blue-400/60 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-[1px] scale-110'
              : 'w-9 h-9 border-blue-400/40 bg-transparent shadow-[0_0_12px_rgba(59,130,246,0.15)] scale-100'
          }`}
        />
      </div>
    </div>
  );
}
