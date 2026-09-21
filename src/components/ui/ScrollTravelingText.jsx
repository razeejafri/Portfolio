import React, { useRef, useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * ScrollTravelingText
 *
 * A reusable, responsive component that animates any text or word visually traveling
 * from a source section to a destination section linked directly to scroll progress.
 *
 * @param {Object} props
 * @param {string|React.ReactNode} props.content - Text or element to travel
 * @param {string|React.RefObject|HTMLElement} props.target - Target element selector, ref, or DOM node
 * @param {string} [props.sourceClassName] - Styling applied to the text at the source
 * @param {string} [props.targetClassName] - Additional styling classes applied at the destination
 * @param {string} [props.className] - Wrapper class for the in-flow source placeholder
 * @param {string} [props.as='span'] - HTML element tag for the source placeholder
 * @param {Object} [props.options] - GSAP ScrollTrigger and visual options
 * @param {number|boolean} [props.options.scrub=1] - Scrub smoothing value (default 1)
 * @param {string} [props.options.start='top center'] - ScrollTrigger start position
 * @param {string} [props.options.end='top center'] - ScrollTrigger end position
 * @param {string|HTMLElement} [props.options.trigger] - Custom trigger element (defaults to source element)
 * @param {string|HTMLElement} [props.options.endTrigger] - Custom end trigger element (defaults to target element)
 * @param {string} [props.options.ease='power1.inOut'] - GSAP easing curve
 * @param {number} [props.options.rotate=0] - Degrees of rotation during mid-flight (e.g. -2 or 3)
 * @param {number} [props.options.zIndex=80] - Stacking order for the unclipped traveling clone
 * @param {boolean} [props.options.scale=true] - Dynamically scale proxy to match target element dimensions
 * @param {boolean} [props.options.hideTargetUntilArrival=true] - Hide destination anchor until traveling element arrives
 */
export default function ScrollTravelingText({
  content,
  target,
  sourceClassName = '',
  targetClassName = '',
  className = '',
  as: Component = 'span',
  options = {},
}) {
  const sourceRef = useRef(null);
  const proxyRef = useRef(null);
  const timelineRef = useRef(null);
  const targetElementRef = useRef(null);

  const [mounted] = useState(() => typeof window !== 'undefined');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const {
    scrub = 1,
    start = 'top center',
    end = 'top center',
    trigger = null,
    endTrigger = null,
    ease = 'power1.inOut',
    rotate = 0,
    zIndex = 80,
    scale = true,
    hideTargetUntilArrival = true,
  } = options;

  // Listen for prefers-reduced-motion changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleMediaChange = (e) => setPrefersReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMediaChange);
    } else {
      mediaQuery.addListener(handleMediaChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      } else {
        mediaQuery.removeListener(handleMediaChange);
      }
    };
  }, []);

  // Helper to resolve target element from string selector, ref, or node
  const resolveTarget = useCallback(() => {
    if (!target) return null;
    if (typeof target === 'string') {
      return document.querySelector(target);
    }
    if (target && typeof target === 'object' && 'current' in target) {
      return target.current;
    }
    if (target instanceof HTMLElement) {
      return target;
    }
    return null;
  }, [target]);

  // Main setup and recalculation function (synchronous direct DOM manipulation: 0 re-renders)
  const setupTimeline = useCallback(() => {
    if (prefersReducedMotion || !sourceRef.current || !proxyRef.current) return;

    const targetEl = resolveTarget();
    if (!targetEl) return;
    targetElementRef.current = targetEl;

    // Reset proxy transform before recalculating
    gsap.set(proxyRef.current, { clearProps: 'transform' });

    // Clean up any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }

    const sourceEl = sourceRef.current;
    const sourceRect = sourceEl.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();

    // Guard against unmeasured zero-dimension rects during layout settling
    if (sourceRect.width === 0 || targetRect.width === 0) {
      return;
    }

    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Invariant absolute document coordinates
    const sourcePageX = sourceRect.left + scrollX;
    const sourcePageY = sourceRect.top + scrollY;
    const targetPageX = targetRect.left + scrollX;
    const targetPageY = targetRect.top + scrollY;

    // Dynamic travel deltas
    const deltaX = targetPageX - sourcePageX;
    const deltaY = targetPageY - sourcePageY;

    // Dynamic scale ratio
    const scaleRatio =
      scale && sourceRect.height > 0
        ? targetRect.height / sourceRect.height
        : 1;

    // Position the floating unclipped proxy directly over the source element
    gsap.set(proxyRef.current, {
      top: `${sourcePageY}px`,
      left: `${sourcePageX}px`,
      width: `${sourceRect.width}px`,
      height: `${sourceRect.height}px`,
      transformOrigin: 'top left',
      zIndex,
      opacity: 1,
      visibility: 'visible',
    });

    // Make source element invisible in flow so proxy is seen without duplication
    sourceEl.style.visibility = 'hidden';

    // Make target element transparent while traveling clone is en route
    if (hideTargetUntilArrival) {
      targetEl.style.opacity = '0';
      targetEl.style.transition = 'opacity 0.15s ease-out';
    }

    // Determine trigger elements
    const triggerElement = trigger
      ? typeof trigger === 'string'
        ? document.querySelector(trigger)
        : trigger
      : sourceEl;

    const endTriggerElement = endTrigger
      ? typeof endTrigger === 'string'
        ? document.querySelector(endTrigger)
        : endTrigger
      : targetEl;

    // Create GSAP Scroll-Linked Scrub Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        endTrigger: endTriggerElement,
        start,
        end,
        scrub,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (hideTargetUntilArrival && targetEl) {
            if (self.progress >= 0.98) {
              targetEl.style.opacity = '1';
              if (proxyRef.current) proxyRef.current.style.opacity = '0';
            } else {
              targetEl.style.opacity = '0';
              if (proxyRef.current) proxyRef.current.style.opacity = '1';
            }
          }
        },
      },
    });

    // Animate the proxy: translation, scale, and optional rotation tilt
    tl.to(proxyRef.current, {
      x: deltaX,
      y: deltaY,
      scale: scaleRatio,
      rotation: rotate,
      ease,
      duration: 1,
    });

    timelineRef.current = tl;
  }, [
    prefersReducedMotion,
    resolveTarget,
    trigger,
    endTrigger,
    start,
    end,
    scrub,
    ease,
    rotate,
    zIndex,
    scale,
    hideTargetUntilArrival,
  ]);

  // Effect to wait for target element if lazy loaded, then initialize
  useEffect(() => {
    if (!mounted || prefersReducedMotion) return;

    let observer = null;
    let retryInterval = null;

    const init = () => {
      const targetEl = resolveTarget();
      if (targetEl && sourceRef.current && proxyRef.current) {
        setupTimeline();
        ScrollTrigger.refresh();
        return true;
      }
      return false;
    };

    if (!init()) {
      // Observe DOM additions (e.g., when React.lazy chunk loads)
      observer = new MutationObserver(() => {
        if (init()) {
          if (observer) observer.disconnect();
          observer = null;
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });

      // Fallback interval check
      retryInterval = setInterval(() => {
        if (init()) {
          if (retryInterval) clearInterval(retryInterval);
          retryInterval = null;
        }
      }, 200);
    }

    // Refresh calculations when fonts finish loading
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        setupTimeline();
        ScrollTrigger.refresh();
      });
    }

    // Resize listeners with debounce
    let resizeTimer = null;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setupTimeline();
        ScrollTrigger.refresh();
      }, 150);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    const sourceEl = sourceRef.current;

    return () => {
      if (observer) observer.disconnect();
      if (retryInterval) clearInterval(retryInterval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
      if (sourceEl) {
        sourceEl.style.visibility = 'visible';
      }
      if (targetElementRef.current && hideTargetUntilArrival) {
        targetElementRef.current.style.opacity = '1';
      }
    };
  }, [mounted, prefersReducedMotion, resolveTarget, setupTimeline, hideTargetUntilArrival]);

  // If prefers-reduced-motion is true, render standard static semantic element with no animation
  if (prefersReducedMotion) {
    return (
      <Component className={`${sourceClassName} ${className}`}>
        {content}
      </Component>
    );
  }

  return (
    <>
      {/* In-flow Source Anchor: Preserves exact semantic flow and layout geometry */}
      <Component
        ref={sourceRef}
        className={`${sourceClassName} ${className} inline-block`}
      >
        {content}
      </Component>

      {/* Unclipped Traveling Proxy Element portalled directly to document.body */}
      {mounted &&
        createPortal(
          <div
            ref={proxyRef}
            aria-hidden="true"
            className={`${sourceClassName} ${targetClassName} will-change-transform select-none`.trim()}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              transformOrigin: 'top left',
              zIndex,
              pointerEvents: 'none',
              visibility: 'hidden',
            }}
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
}
