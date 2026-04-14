
"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function LivingGrid() {
  
  // Connect scroll to grid movement
  const { scrollY } = useScroll();
  
  // Transform scroll into forward movement (Z-axis illusion via Y translation)
  const gridY = useTransform(scrollY, [0, 1000], [0, 500]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.2]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background via-background to-black opacity-90 z-10" />
      
      {/* The Grid Layer */}
      <motion.div 
        style={{ y: gridY, opacity }}
        className="absolute inset-[-100%] w-[300%] h-[300%] bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:perspective(500px)_rotateX(60deg)] origin-top"
      />
      
      {/* Horizon Glow */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-primary/10 to-transparent blur-3xl" />
    </div>
  );
}
