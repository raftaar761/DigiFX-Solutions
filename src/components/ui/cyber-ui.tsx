
"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CyberButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export function CyberButton({ children, className, variant = "primary", ...props }: CyberButtonProps) {
  const variants = {
    primary: "bg-primary text-black hover:bg-cyan-400 shadow-[0_0_15px_rgba(0,243,255,0.4)]",
    secondary: "bg-secondary text-white hover:bg-purple-600 shadow-[0_0_15px_rgba(189,0,255,0.4)]",
    outline: "border border-white/20 hover:bg-white/10 text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-6 py-3 font-mono font-bold uppercase tracking-wider text-sm transition-all duration-200 relative overflow-hidden group",
        variants[variant],
        className
      )}
      {...props}
    >
      {/* Glitch Overlay Effect */}
      <span className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}

export function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      "glass-panel rounded-xl p-6 border border-white/5 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-white/10 group relative isolate overflow-hidden",
      className
    )}>
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:border-primary transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:border-primary transition-colors duration-300" />
      
      {children}
    </div>
  );
}
