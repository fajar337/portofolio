"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./hero-scene").then((m) => m.HeroScene), {
  ssr: false,
});

export function CanvasWrapper() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    if (prefersReducedMotion.matches || !desktop.matches) return;

    let rendered = false;
    const render = () => {
      if (rendered) return;
      rendered = true;
      setShouldRender(true);
    };
    const idleCallback = window.requestIdleCallback?.(render, { timeout: 1800 });
    const timeout = window.setTimeout(render, 2400);

    return () => {
      if (idleCallback) window.cancelIdleCallback?.(idleCallback);
      window.clearTimeout(timeout);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div className="absolute inset-0 -z-10">
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </div>
  );
}
