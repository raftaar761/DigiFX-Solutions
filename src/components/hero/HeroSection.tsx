
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Check } from "lucide-react";
import Link from "next/link";
import { CyberButton } from "@/components/ui/cyber-ui";
import { ThreeDObject } from "./ThreeDObject";

const typingPhrases = ["Digital Empires.", "Intelligent Agents.", "Immersive Realities.", "Neural Ecosystems."];

export default function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Effect Logic
  useEffect(() => {
    const currentPhrase = typingPhrases[textIndex];
    const speed = isDeleting ? 50 : 100;
    let innerTimer: NodeJS.Timeout;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        innerTimer = setTimeout(() => setIsDeleting(true), 1500); // Pause at end
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
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-0 pt-20">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-7xl">
        
        {/* Left: Code/Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-mono animate-pulse">
            <div className="w-2 h-2 bg-secondary rounded-full" />
            <span>SYSTEM STATUS: ONLINE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight font-display tracking-tight">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary min-h-[1.2em] inline-block uppercase tracking-tighter">
              {displayText}
              <span className="animate-pulse text-white">_</span>
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-lg font-light leading-relaxed">
            We bridge the gap between <span className="text-white font-medium">high-performance code</span> and <span className="text-white font-medium">autonomous AI</span>. 
            The laboratory for brands that demand what&apos;s next in the digital frontier.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/contact">
              <CyberButton variant="primary">
                Initialize Project <Terminal className="w-4 h-4 inline" />
              </CyberButton>
            </Link>
            <Link href="/portfolio">
              <CyberButton variant="outline">
                View Case Studies
              </CyberButton>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 flex items-center gap-6 border-t border-white/10 mt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-xs text-white uppercase font-bold">
                  Dev
                </div>
              ))}
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" /> 50+ Global Clients
              </p>
              <p className="text-xs text-gray-500">From Gurugram to San Francisco</p>
            </div>
          </div>
        </motion.div>

        {/* Right: The "Mascot/Visual" Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
        >
           {/* The R3F CyberSphere Mascot */}
           <div className="absolute inset-0 w-full h-full">
              <ThreeDObject />
           </div>
        </motion.div>

      </div>
    </section>
  );
}
