
"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LivingGrid } from "@/components/layout/LivingGrid";
import { ScannerCursor } from "@/components/ui/ScannerCursor";
import { CyberButton } from "@/components/ui/cyber-ui";
import { BarChart3, ArrowRight, TrendingUp, Users, Target, Search, MousePointer2 } from "lucide-react";
import Link from "next/link";

export default function MarketingPage() {
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
            <div className="w-20 h-20 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/30 neon-border">
              <BarChart3 className="w-12 h-12 text-orange-500" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-white uppercase tracking-tighter">
              Performance <br /> <span className="text-orange-500">ENGINEERING</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
               We don&apos;t run ads; we engineer growth. Our data-driven marketing stack utilizes 
               AI-optimized targeting and predictive bidding to ensure every dollar spent returns 
               maximum value to your ecosystem.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <CyberButton variant="outline" className="border-orange-500/50 hover:bg-orange-500/10 text-orange-500">
                  Scale My Revenue <ArrowRight className="w-4 h-4 inline" />
                </CyberButton>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Precision Ads", icon: <TrendingUp />, desc: "AI-optimized ad sets designed to aggressively lower Cost Per Acquisition (CPA)." },
              { title: "SEO Supremacy", icon: <Search />, desc: "Technical SEO that captures high-intent organic traffic." },
              { title: "Targeting", icon: <Users />, desc: "Deep-layer audience segmentation to maximize Return on Ad Spend (ROAS)." },
              { title: "Funnel Analytics", icon: <MousePointer2 />, desc: "Real-time heatmaps to remove friction points in your sales funnels." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-xl border border-white/10 space-y-4 hover:border-orange-500/50 transition-all font-sans"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-orange-500">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ROAS Focus */}
      <SectionWrapper className="w-full max-w-7xl px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">The <span className="text-orange-500">Growth</span> Multiplier</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Real results from our precision targeting pipelines.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Average ROAS", value: "x5.5", impact: "Scale your spend while maintaining consistent profitability." },
            { label: "CPA Reduction", value: "-45%", impact: "Optimized creative and targeting lowers acquisition costs." },
            { label: "Lead Quality", value: "92%", impact: "Higher intent traffic through better segmentation." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 group hover:border-orange-500/30 transition-all text-center">
              <Target className="w-6 h-6 text-orange-500 mx-auto mb-4 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <div className="text-4xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-4">{item.label}</div>
              <p className="text-sm text-gray-400">{item.impact}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Dashboard Analytics Preview */}
      <SectionWrapper className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Performance <span className="text-yellow-500">Dashboard.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We operate on cold, hard data. Total transparency via custom metrics tracking.
          </p>
        </div>
        
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden bg-black/50 p-8 shadow-2xl relative">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4 relative z-10">
                <div className="font-mono text-white text-lg">Q3 CAMPAIGN _ ALPHA</div>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                <div className="space-y-2">
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Total Ad Spend</p>
                    <p className="text-3xl text-white font-mono">$45,200</p>
                </div>
                <div className="space-y-2">
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Gross Revenue</p>
                    <p className="text-3xl text-emerald-400 font-mono">$218,500</p>
                </div>
                <div className="space-y-2">
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Blended ROAS</p>
                    <p className="text-3xl text-yellow-500 font-mono">4.83x</p>
                </div>
                <div className="space-y-2">
                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Cost Per Acq (CPA)</p>
                    <p className="text-3xl text-white font-mono">$18.40</p>
                </div>
            </div>
            
            <div className="mt-8 h-32 w-full flex items-end gap-2 relative z-10">
                {[40, 55, 30, 70, 85, 60, 95, 110, 80, 120, 140, 160].map((height, i) => (
                    <div key={i} className="flex-1 bg-yellow-500/20 hover:bg-yellow-500 transition-colors rounded-t-sm" style={{ height: `${(height / 160) * 100}%` }} />
                ))}
            </div>
        </div>
      </SectionWrapper>

    </main>
  );
}
