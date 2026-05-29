"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let destroyed = false;
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;

    const start = async () => {
      if (destroyed || lenis) return;
      const { default: Lenis } = await import("lenis");
      if (destroyed || lenis) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      });

      frame = requestAnimationFrame(raf);
    };

    function raf(time: number) {
      if (!lenis) return;
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    const idleCallback = window.requestIdleCallback?.(start, { timeout: 1200 });
    const timeout = window.setTimeout(start, 1600);

    return () => {
      destroyed = true;
      if (idleCallback) window.cancelIdleCallback?.(idleCallback);
      window.clearTimeout(timeout);
      if (frame) cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return null;
}
