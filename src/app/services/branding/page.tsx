
"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ScannerCursor } from "@/components/ui/ScannerCursor";
import { CyberButton } from "@/components/ui/cyber-ui";
import { Palette, ArrowRight, Eye, Diamond, ShieldCheck, PenTool, Layout } from "lucide-react";
import Link from "next/link";

export default function BrandingPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden cursor-none pt-24">
      <ScannerCursor />
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40">
         <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent" />
      </div>

      <SectionWrapper className="w-full max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-yellow-400/10 flex items-center justify-center border border-yellow-400/30 neon-border">
              <Palette className="w-12 h-12 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-white uppercase tracking-tighter">
              Identity <br /> <span className="text-yellow-400">SYSTEMS</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              We define the visual DNA of market leaders. Our design team architects premium, 
              scalable identity systems that command higher price points, build immediate trust, 
              and increase customer lifetime value by creating unshakeable brand loyalty.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <CyberButton variant="outline" className="border-yellow-400/50 hover:bg-yellow-400/10 text-yellow-400">
                  Audit My Brand <ArrowRight className="w-4 h-4 inline" />
                </CyberButton>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Visual DNA", icon: <Diamond />, desc: "Comprehensive brand guidelines that eliminate design inconsistencies." },
              { title: "UI Architecture", icon: <Layout />, desc: "Modern interfaces designed specifically to reduce friction and bounce rates." },
              { title: "Logo Engineering", icon: <PenTool />, desc: "Instantly recognizable vectors that anchor your brand in the consumer's mind." },
              { title: "Trust Design", icon: <ShieldCheck />, desc: "Aesthetics engineered to communicate absolute authority and reliability." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-xl border border-white/10 space-y-4 hover:border-yellow-400/50 transition-all font-sans"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-yellow-400">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Brand Value */}
      <SectionWrapper className="w-full max-w-7xl px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Strategic <span className="text-yellow-400">Positioning</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Design as a tool for market dominance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div className="p-10 rounded-3xl bg-white/5 border border-white/10 group hover:border-yellow-400/30 transition-all">
              <Eye className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Recognition</h3>
              <p className="text-gray-400">In a world of noise, we ensure your brand is recognized within 0.1 seconds through high-contrast, strategic visual cues.</p>
           </div>
           <div className="p-10 rounded-3xl bg-white/5 border border-white/10 group hover:border-yellow-400/30 transition-all">
              <Diamond className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Value Perception</h3>
              <p className="text-gray-400">Our futuristic aesthetic elevates your perceived value, allowing for premium pricing and better customer retention.</p>
           </div>
        </div>
      </SectionWrapper>

      {/* Identity Pillars */}
      <SectionWrapper className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Identity <span className="text-purple-500">Pillars.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A cohesive brand is built on a foundation of unshakeable strategic pillars.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-10 rounded-2xl border border-white/10 flex gap-6">
             <div className="text-4xl font-mono text-purple-500/50">01</div>
             <div>
                <h4 className="text-white font-bold text-2xl mb-2">Visual System</h4>
                <p className="text-gray-400">Logos, typography, color palettes, and motion guidelines designed to establish authority at first glance.</p>
             </div>
          </div>
          <div className="glass-panel p-10 rounded-2xl border border-white/10 flex gap-6">
             <div className="text-4xl font-mono text-purple-500/50">02</div>
             <div>
                <h4 className="text-white font-bold text-2xl mb-2">Verbal Engine</h4>
                <p className="text-gray-400">Tone of voice, manifesto, and messaging frameworks that compel your target audience to act.</p>
             </div>
          </div>
          <div className="glass-panel p-10 rounded-2xl border border-white/10 flex gap-6">
             <div className="text-4xl font-mono text-purple-500/50">03</div>
             <div>
                <h4 className="text-white font-bold text-2xl mb-2">Market Positioning</h4>
                <p className="text-gray-400">Finding the white space in your industry and aggressively claiming it to make competition irrelevant.</p>
             </div>
          </div>
          <div className="glass-panel p-10 rounded-2xl border border-white/10 flex gap-6">
             <div className="text-4xl font-mono text-purple-500/50">04</div>
             <div>
                <h4 className="text-white font-bold text-2xl mb-2">Experience Design</h4>
                <p className="text-gray-400">Mapping every single touchpoint across web, print, and physical space to enforce brand loyalty.</p>
             </div>
          </div>
        </div>
      </SectionWrapper>

    </main>
  );
}
