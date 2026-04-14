"use client";

import { useEffect, useRef } from "react";

// Pure canvas-based grid — 0 React re-renders, runs on GPU compositor thread
export function LivingGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let offset = 0;
    const CELL = 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      offset = (offset + 0.4) % CELL;

      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = -CELL + (offset % CELL); x < canvas.width + CELL; x += CELL) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines with perspective fade
      const rows = Math.ceil(canvas.height / CELL) + 2;
      for (let i = 0; i < rows; i++) {
        const y = (i * CELL - offset + canvas.height * 0.5) % canvas.height;
        const fade = Math.max(0, 1 - Math.abs(y - canvas.height * 0.5) / (canvas.height * 0.6));
        ctx.strokeStyle = `rgba(255,255,255,${0.06 * fade})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Neon horizon glow
      const grad = ctx.createLinearGradient(0, canvas.height * 0.3, 0, canvas.height * 0.6);
      grad.addColorStop(0, "rgba(0,243,255,0.04)");
      grad.addColorStop(1, "rgba(0,243,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-100"
        style={{ willChange: "transform" }}
      />
      {/* Radial vignette to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,#050505_100%)]" />
      {/* Top glow streak */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );
}
