"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type SpringOptions,
} from "framer-motion";

const springConfig: SpringOptions = { damping: 25, stiffness: 300, mass: 0.5 };

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches
  );
  const isPointerRef = useRef(false);
  const isVisibleRef = useRef(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='pointer']") !== null;
      if (isPointerRef.current !== isClickable) {
        isPointerRef.current = isClickable;
        setIsPointer(isClickable);
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };
    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-white mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: 8,
          height: 8,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      />
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-white/50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
