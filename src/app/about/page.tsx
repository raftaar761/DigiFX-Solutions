
"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LivingGrid } from "@/components/layout/LivingGrid";
import { ScannerCursor } from "@/components/ui/ScannerCursor";
import { Rocket, Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden cursor-none pt-24">
      <ScannerCursor />
      <LivingGrid />

      <SectionWrapper className="w-full max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
              Architecting the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Frontier.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              DigiFX Solutions isn&apos;t a traditional agency. We operate as an elite collective—a global network spanning seasoned developers, 
              top-tier freelancers, and brilliant minds from prestigious institutions like IIT. We deploy specialized task forces 
              engineered specifically for your project&apos;s unique challenges.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">10+</div>
                <div className="text-sm font-mono text-gray-500 uppercase">Elite Specialists</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">24/7</div>
                <div className="text-sm font-mono text-gray-500 uppercase">Global Operation</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 glass-panel"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
             <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center space-y-4">
                  <Zap className="w-16 h-16 text-primary mx-auto animate-float" />
                  <p className="text-sm font-mono text-primary animate-pulse tracking-[0.3em]">RECON_MODE: ACTIVE</p>
                </div>
             </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper className="w-full max-w-7xl px-6 py-20 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
            <Rocket className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white">Our Structure</h3>
            <p className="text-gray-400">Agile, decentralized, and lethal. We eliminate bloated agency overhead, ensuring your budget goes directly toward elite engineering and design.</p>
          </div>
          <div className="space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary/50 transition-all group">
            <Target className="w-10 h-10 text-secondary group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white">The Brain Trust</h3>
            <p className="text-gray-400">Powered by minds from the Indian Institutes of Technology (IIT) and seasoned industry veterans. We solve the problems others can&apos;t.</p>
          </div>
          <div className="space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/50 transition-all group">
            <Users className="w-10 h-10 text-emerald-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white">Global Talent</h3>
            <p className="text-gray-400">Headquartered in Gurugram, India, but operating globally. We deploy the best global freelancers exactly when and where they&apos;re needed in your stack.</p>
          </div>
        </div>
      </SectionWrapper>

        {/* New Workflow Section */}
        <SectionWrapper className="mt-24 w-full max-w-7xl mx-auto px-6 mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Operations <span className="text-primary">Protocol.</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                How we move from concept to deployment at warp speed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               <div className="glass-panel p-6 rounded-xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary/20" />
                  <div className="text-3xl font-mono text-primary/40 font-bold mb-4">01</div>
                  <h4 className="text-white font-bold text-lg mb-2">Discovery & Intel</h4>
                  <p className="text-gray-400 text-sm">We audit your existing stacks, parse market gaps, and align on heavy-hitting ROI goals.</p>
               </div>
               <div className="glass-panel p-6 rounded-xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-secondary/20" />
                  <div className="text-3xl font-mono text-secondary/40 font-bold mb-4">02</div>
                  <h4 className="text-white font-bold text-lg mb-2">Systems Architecture</h4>
                  <p className="text-gray-400 text-sm">Our IIT engineering minds draft a scalable blueprint for seamless system integration and UI logic.</p>
               </div>
               <div className="glass-panel p-6 rounded-xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400/20" />
                  <div className="text-3xl font-mono text-emerald-400/40 font-bold mb-4">03</div>
                  <h4 className="text-white font-bold text-lg mb-2">Agile Deployment</h4>
                  <p className="text-gray-400 text-sm">Global task forces get to work. Continuous integration. Rapid sprints. No bureaucratic delays.</p>
               </div>
               <div className="glass-panel p-6 rounded-xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
                  <div className="text-3xl font-mono text-white/40 font-bold mb-4">04</div>
                  <h4 className="text-white font-bold text-lg mb-2">Launch & Scale</h4>
                  <p className="text-gray-400 text-sm">We don&apos;t just deliver code. We monitor KPIs, optimize performance, and scale the servers.</p>
               </div>
            </div>
        </SectionWrapper>

    </main>
  );
}
