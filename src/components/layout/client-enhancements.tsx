"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { SmoothScroll } from "@/components/layout/smooth-scroll";

const CustomCursor = dynamic(
  () => import("@/components/cursor/custom-cursor").then((m) => m.CustomCursor),
  { ssr: false }
);

export function ClientEnhancements() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setShowCursor(true);
    };
    const idleCallback = window.requestIdleCallback?.(show, { timeout: 1600 });
    const timeout = window.setTimeout(show, 2200);

    return () => {
      if (idleCallback) window.cancelIdleCallback?.(idleCallback);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <SmoothScroll />
      {showCursor ? <CustomCursor /> : null}
    </>
  );
}
