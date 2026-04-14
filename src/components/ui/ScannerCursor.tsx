
"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function ScannerCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  


  useEffect(() => {
    let ticking = false;
    const moveCursor = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (cursorRef.current) {
             cursorRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Find closest interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button') || target.closest('a') || target.closest('input') || target.closest('[data-cursor="scan"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
      style={{
        transform: "translate3d(-100px, -100px, 0)"
      }}
      animate={{
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? "rgba(0, 243, 255, 0.1)" : "transparent",
        borderColor: isHovering ? "#00f3ff" : "rgba(255, 255, 255, 0.5)",
      }}
    >
      <motion.div 
        className="w-1 h-1 bg-white rounded-full"
        animate={{ scale: isHovering ? 0 : 1 }}
      />
      
      {/* Scanner Reticle Effect - Pre-allocated Object Pool */}
      <motion.div 
          className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
      />
      <motion.div 
          className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
      />
      <motion.div 
          className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
      />
      <motion.div 
          className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
      />
      
      {/* Scan Line - Always mounted but invisible when not hovering */}
      <motion.div 
          className="absolute w-full h-[1px] bg-primary/50"
          initial={{ opacity: 0 }}
          animate={{ 
              opacity: isHovering ? 1 : 0,
              top: isHovering ? ["0%", "100%", "0%"] : "0%"
          }}
          transition={{ duration: 1.5, repeat: isHovering ? Infinity : 0, ease: "linear" }}
      />
    </motion.div>
  );
}
