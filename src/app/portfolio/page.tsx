
"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LivingGrid } from "@/components/layout/LivingGrid";
import { ScannerCursor } from "@/components/ui/ScannerCursor";
import { ComparisonSlider } from "@/components/ui/ComparisonSlider";
import { Globe, Cpu, FileVideo } from "lucide-react";

const projects = [
  {
    category: "Web & E-Commerce",
    title: "NEO-CLOTHING",
    description: "Transformed a slow Shopify store into a headless React powerhouse.",
    metrics: { speed: "0.2s", conversion: "+150%", revenue: "3.2x" },
    icon: <Globe className="text-emerald-400" />,
    id: "neo-clothing"
  },
  {
    category: "AI Automation",
    title: "SUPPORT-NET",
    description: "Implemented a multi-agent AI customer support system for a global SaaS.",
    metrics: { efficiency: "+60%", cost: "-40%", uptime: "100%" },
    icon: <Cpu className="text-secondary" />,
    id: "support-net"
  },
  {
    category: "Content & Branding",
    title: "CYBER-DRIVE",
    description: "Launch campaign for an electric vehicle featuring 3D motion graphics.",
    metrics: { reach: "1.2M", engagement: "x10", awareness: "+80%" },
    icon: <FileVideo className="text-pink-500" />,
    id: "cyber-drive"
  }
];

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden cursor-none pt-24">
      <ScannerCursor />
      <LivingGrid />

      <SectionWrapper className="w-full max-w-7xl px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
          Our <span className="text-primary">Expertise.</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-16 font-light">
          A curated selection of our highest-impact deployments. We measure success strictly through business metrics: revenue scaled, costs reduced, and attention captured.
        </p>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl border border-white/10 text-left group hover:border-primary/50 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    {project.icon}
                  </div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest px-3 py-1 border border-white/5 rounded-full">
                    {project.category}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
                   {Object.entries(project.metrics).map(([key, val]) => (
                     <div key={key}>
                        <div className="text-primary font-bold">{val}</div>
                        <div className="text-[9px] text-gray-600 uppercase tracking-tighter">{key}</div>
                     </div>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Transformation Case Study */}
        <div className="space-y-12">
            <h2 className="text-3xl font-display font-bold text-white uppercase tracking-widest">
              Visual <span className="text-primary">Metamorphosis</span>
            </h2>
            <div className="max-w-4xl mx-auto glass-panel p-4 rounded-3xl border border-white/10 relative">
               <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/50 border border-white/10 rounded-full text-[10px] text-white backdrop-blur-md">LEGACY INTERFACE</div>
               <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-[10px] text-primary backdrop-blur-md">DIGIFX OPTIMIZED</div>
               <ComparisonSlider />
               <p className="mt-6 text-xs text-gray-500 font-mono">[ SLIDE TO REVEAL TRANSFORMATION ]</p>
            </div>
            <div className="flex justify-center gap-12 pt-8">
               <div className="text-center">
                  <div className="text-3xl font-bold text-white">40ms</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Load Speed</div>
               </div>
               <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">A11y Score</div>
               </div>
               <div className="text-center">
                  <div className="text-3xl font-bold text-white">X2.4</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Sales Velocity</div>
               </div>
            </div>
        </div>
      </SectionWrapper>

    </main>
  );
}
