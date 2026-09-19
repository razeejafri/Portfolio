import React, { useRef, useState, useCallback } from 'react';

export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  textStrength = 0.2,
  as: Component = 'div',
  ...restProps
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      containerRef.current.style.transform = `translate3d(${deltaX.toFixed(2)}px, ${deltaY.toFixed(2)}px, 0)`;

      if (contentRef.current && textStrength > 0) {
        const textDeltaX = (e.clientX - centerX) * textStrength;
        const textDeltaY = (e.clientY - centerY) * textStrength;
        contentRef.current.style.transform = `translate3d(${textDeltaX.toFixed(2)}px, ${textDeltaY.toFixed(2)}px, 0)`;
      }
    },
    [strength, textStrength]
  );

  const handleMouseEnter = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.12s ease-out';
    }
    if (contentRef.current) {
      contentRef.current.style.transition = 'transform 0.12s ease-out';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)';
      containerRef.current.style.transform = 'translate3d(0px, 0px, 0)';
    }
    if (contentRef.current) {
      contentRef.current.style.transition = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)';
      contentRef.current.style.transform = 'translate3d(0px, 0px, 0)';
    }
  }, []);

  const [ripples, setRipples] = useState([]);

  const handleClick = useCallback(
    (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const newRipple = { x, y, id: Date.now() + Math.random() };
        setRipples((prev) => [...prev, newRipple]);
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);
      }
      if (restProps.onClick) {
        restProps.onClick(e);
      }
    },
    [restProps]
  );

  return (
    <Component
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`relative inline-block overflow-hidden will-change-transform transform-gpu ${className}`}
      {...restProps}
    >
      {/* Click ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute rounded-full bg-white/35 animate-ripple z-20"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: 24,
            height: 24,
          }}
        />
      ))}

      <div
        ref={contentRef}
        className="w-full h-full flex items-center justify-center will-change-transform transform-gpu pointer-events-none"
      >
        <div className="pointer-events-auto w-full h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </Component>
  );
}
