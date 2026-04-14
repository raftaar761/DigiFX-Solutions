
"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LivingGrid } from "@/components/layout/LivingGrid";
import { ScannerCursor } from "@/components/ui/ScannerCursor";
import { CyberButton } from "@/components/ui/cyber-ui";
import { FileVideo, ArrowRight, Sparkles, Video, Layers, Smartphone, Box } from "lucide-react";
import Link from "next/link";

export default function ContentCreationPage() {
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
            <div className="w-20 h-20 rounded-2xl bg-pink-500/10 flex items-center justify-center border border-pink-500/30 neon-border">
              <FileVideo className="w-12 h-12 text-pink-500" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-white uppercase tracking-tighter">
              Immersive <br /> <span className="text-pink-500">REALITIES</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              Stop fighting for attention and start commanding it. We engineer viral content, 
              high-end 3D motion graphics, and AI-driven commercial production that builds 
              unshakeable brand authority and lowers your customer acquisition cost (CAC).
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <CyberButton variant="outline" className="border-pink-500/50 hover:bg-pink-500/10">
                  View Reel <ArrowRight className="w-4 h-4 inline" />
                </CyberButton>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "3D Motion Design", icon: <Box className="text-pink-400" />, desc: "Hyper-realistic product renders that increase perceived brand value." },
              { title: "AI Commercials", icon: <Video className="text-secondary" />, desc: "Generate unlimited, hyper-targeted ad variations to scale ROAS." },
              { title: "Social Domination", icon: <Smartphone className="text-emerald-400" />, desc: "End-to-end Social Media Management designed for algorithmic virality." },
              { title: "Asset Generation", icon: <Layers className="text-primary" />, desc: "Custom graphics, copy, and UI that define industry standards." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-xl border border-white/10 space-y-4 hover:border-pink-500/50 transition-all font-sans"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Visual Impact */}
      <SectionWrapper className="w-full max-w-7xl px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Measured <span className="text-pink-500">Impact</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Visual excellence translated into business metrics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Engagement", value: "x10", icon: <Sparkles /> },
            { label: "Reach", value: "2.4M", icon: <Layers /> },
            { label: "Retention", value: "85%", icon: <Video /> },
            { label: "Conversion", value: "x3.2", icon: <Smartphone /> }
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center relative group overflow-hidden">
               <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="text-xl text-pink-500 mb-2 flex justify-center">{stat.icon}</div>
               <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
               <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Omni-Channel Distribution */}
      <SectionWrapper className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Omni-Channel <span className="text-pink-500">Distribution.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            One piece of hero content, algorithmically adapted for every platform.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { platform: "TikTok", format: "Short-Form Vertical" },
            { platform: "YouTube", format: "Hero Long-Form" },
            { platform: "Instagram", format: "Reels & Carousels" },
            { platform: "LinkedIn", format: "B2B Thought Auth" },
            { platform: "X/Twitter", format: "Viral Threads" }
          ].map((item, idx) => (
             <div key={idx} className="glass-panel p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform">
               <div className="text-white font-bold text-lg mb-2">{item.platform}</div>
               <div className="text-pink-500 text-xs font-mono uppercase tracking-widest">{item.format}</div>
             </div>
          ))}
        </div>
      </SectionWrapper>

    </main>
  );
}
