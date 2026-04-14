"use client";

import { useEffect, useRef } from "react";

export function ScannerCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId: number;
    let mouseX = -200, mouseY = -200;
    let ringX = -200, ringY = -200;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      }
      // Ring follows with smooth lag
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 20}px, ${ringY - 20}px, 0)`;
      }
      frameId = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      ringRef.current?.classList.add("scale-[2.5]", "border-primary");
      ringRef.current?.classList.remove("border-white/30");
    };

    const onLeaveLink = () => {
      ringRef.current?.classList.remove("scale-[2.5]", "border-primary");
      ringRef.current?.classList.add("border-white/30");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.querySelectorAll("a, button, input").forEach(el => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* Main dot — snaps instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9998] mix-blend-difference will-change-transform"
        style={{ transform: "translate3d(-200px,-200px,0)" }}
      />
      {/* Outer ring — smooth lag follow */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/30 pointer-events-none z-[9997] transition-[transform,border-color,scale] duration-300 ease-out will-change-transform"
        style={{ transform: "translate3d(-200px,-200px,0)" }}
      />
    </>
  );
}
