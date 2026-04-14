
"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LivingGrid } from "@/components/layout/LivingGrid";
import { ScannerCursor } from "@/components/ui/ScannerCursor";
import { CyberButton } from "@/components/ui/cyber-ui";
import { Code2, ArrowRight, Zap, BarChart, Shield, Cpu } from "lucide-react";
import Link from "next/link";

export default function WebDevPage() {
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
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/30 neon-border">
              <Code2 className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-white uppercase tracking-tighter">
              Next-Gen <br /> <span className="text-primary">WEB ARCHITECTURE</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              We don&apos;t just build websites; we engineer high-performance digital engines. 
              Our web solutions are designed for sub-second load times and infinite scalability, 
              ensuring your business stays ahead of the digital curve.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <CyberButton variant="primary">
                  Start Building <ArrowRight className="w-4 h-4 inline" />
                </CyberButton>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Performance First", icon: <Zap className="text-yellow-400" />, desc: "Edge-rendered applications for maximum speed." },
              { title: "Enterprise Grade", icon: <Shield className="text-emerald-400" />, desc: "Bank-level security and data encryption." },
              { title: "Scalability", icon: <BarChart className="text-primary" />, desc: "Built to handle millions of requests." },
              { title: "Modern Tech", icon: <Cpu className="text-secondary" />, desc: "Next.js 15, React 19, and Tailwind CSS." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-xl border border-white/10 space-y-4 hover:border-primary/50 transition-all font-sans"
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

      {/* Business Value Section */}
      <SectionWrapper className="w-full max-w-7xl px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Driving <span className="text-primary">Business Growth</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">How our custom development impacts your bottom line.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Conversion Rate", value: "+120%", impact: "Optimized funnels and custom UX drive more sales." },
            { label: "Infrastructure Cost", value: "-40%", impact: "Modern serverless architecture reduces overhead." },
            { label: "Site Reliability", value: "99.99%", impact: "Bulletproof code ensures zero downtime." }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
              <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
              <div className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">{item.label}</div>
              <p className="text-sm text-gray-400">{item.impact}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Technical Architecture */}
      <SectionWrapper className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Technical <span className="text-primary">Architecture.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We don&apos;t use monolithic, clunky CRM templates. We build modern headless instances engineered for zero-latency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Frontend Core", desc: "Next.js 14, React 18, and Vercel edge deployment for sub-second rendering." },
            { title: "Backend API", desc: "Serverless Node.js and Python microservices orchestrating complex data flows." },
            { title: "Database Layer", desc: "PostgreSQL & Prisma for relational integrity, Redis for lightning caching." },
            { title: "WebGL Engine", desc: "Three.js and React Three Fiber for immersive, low-overhead 3D visualizations." },
          ].map((item, idx) => (
             <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
               <h4 className="text-white font-bold text-xl mb-3">{item.title}</h4>
               <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </SectionWrapper>

    </main>
  );
}
