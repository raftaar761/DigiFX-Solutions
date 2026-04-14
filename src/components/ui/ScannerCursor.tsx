"use client";

import { useEffect, useRef } from "react";

/**
 * Magnetic dot cursor — the industry standard for premium agency websites.
 * - Tiny neon dot that snaps instantly to mouse (no lag = feels native)
 * - No outer ring (removed the laggy ring that felt bad)
 * - Subtle scale-up on interactive elements
 * - mix-blend-difference so it inverts whatever it's over (looks incredible on text)
 */
export function ScannerCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let x = -100, y = -100;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a") || t.closest("button") || t.closest("input") || t.closest("textarea")) {
        dotRef.current?.classList.add("scale-[3]", "bg-white", "mix-blend-difference");
        dotRef.current?.classList.remove("bg-primary");
      }
    };

    const onLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a") || t.closest("button") || t.closest("input") || t.closest("textarea")) {
        dotRef.current?.classList.remove("scale-[3]", "bg-white", "mix-blend-difference");
        dotRef.current?.classList.add("bg-primary");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onEnter, { passive: true });
    document.addEventListener("mouseout", onLeave, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] will-change-transform transition-[transform,background-color,opacity] duration-150 ease-out"
      style={{ transform: "translate3d(-100px,-100px,0)" }}
    />
  );
}
