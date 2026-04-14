"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Check } from "lucide-react";
import Link from "next/link";
import { CyberButton } from "@/components/ui/cyber-ui";

// Lazy load Three.js ONLY after first paint — critical path stays clean
const ThreeDObject = dynamic(
  () => import("./ThreeDObject").then((m) => m.ThreeDObject),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Pulsing rings */}
          <div className="absolute w-64 h-64 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: "2s" }} />
          <div className="absolute w-48 h-48 rounded-full border border-secondary/20 animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.3s" }} />
          <div className="absolute w-32 h-32 rounded-full border border-primary/30 animate-ping" style={{ animationDuration: "3s", animationDelay: "0.6s" }} />
          {/* Core */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 blur-xl animate-pulse" />
          <p className="absolute bottom-0 text-center text-[10px] font-mono text-primary/60 tracking-[0.4em] uppercase animate-pulse">
            Booting Core
          </p>
        </div>
      </div>
    ),
  }
);

const typingPhrases = [
  "Digital Empires.",
  "Intelligent Agents.",
  "Immersive Realities.",
  "Neural Ecosystems.",
];

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[textIndex];
    const speed = isDeleting ? 45 : 90;
    let innerTimer: ReturnType<typeof setTimeout>;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        innerTimer = setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingPhrases.length);
      } else {
        setDisplayText(
          currentPhrase.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }
    }, speed);

    return () => {
      clearTimeout(timer);
      if (innerTimer) clearTimeout(innerTimer);
    };
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-0 pt-20">

      {/* Ambient background orbs — CSS only, no JS */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full opacity-40 pointer-events-none animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full opacity-30 pointer-events-none animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-7xl">

        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8 text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-mono">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            SYSTEM STATUS: ONLINE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight font-display tracking-tight">
            Architecting{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary inline-block uppercase tracking-tighter min-h-[1.2em]">
              {displayText}
              <span className="text-white animate-pulse">_</span>
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed">
            We bridge the gap between{" "}
            <span className="text-white font-medium">high-performance code</span> and{" "}
            <span className="text-white font-medium">autonomous AI</span>. The laboratory
            for brands that demand what&apos;s next.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact">
              <CyberButton variant="primary">
                Initialize Project <Terminal className="w-4 h-4 inline ml-1" />
              </CyberButton>
            </Link>
            <Link href="/portfolio">
              <CyberButton variant="outline">View Case Studies</CyberButton>
            </Link>
          </div>

          <div className="pt-6 flex items-center gap-6 border-t border-white/10">
            <div className="flex -space-x-3">
              {["A", "B", "C"].map((letter, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border-2 border-black flex items-center justify-center text-xs text-white font-bold"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" /> 50+ Global Clients
              </p>
              <p className="text-xs text-gray-500 mt-0.5">From Gurugram to San Francisco</p>
            </div>
          </div>
        </motion.div>

        {/* Right: 3D Orb — lazy loaded post first-paint */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative h-[420px] md:h-[600px] w-full flex items-center justify-center"
        >
          <div className="absolute inset-0 w-full h-full">
            <ThreeDObject />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
