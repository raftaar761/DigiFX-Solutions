
"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LivingGrid } from "@/components/layout/LivingGrid";
import { ScannerCursor } from "@/components/ui/ScannerCursor";
import { CyberButton } from "@/components/ui/cyber-ui";
import { Globe, ArrowRight, ShoppingCart, Lock, CreditCard, RefreshCw, Zap } from "lucide-react";
import Link from "next/link";

export default function ECommercePage() {
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
            <div className="w-20 h-20 rounded-2xl bg-emerald-400/10 flex items-center justify-center border border-emerald-400/30 neon-border">
              <Globe className="w-12 h-12 text-emerald-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-white uppercase tracking-tighter">
              Algorithmic <br /> <span className="text-emerald-400">COMMERCE</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
               Transform passive browsers into lifelong customers with high-conversion commerce architecture. 
               We specialize in headless Shopify solutions and custom checkout funnels designed to 
               maximize Average Order Value (AOV).
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <CyberButton variant="outline" className="border-emerald-400/50 hover:bg-emerald-400/10 text-emerald-400">
                  Scale My Store <ArrowRight className="w-4 h-4 inline" />
                </CyberButton>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Headless Shop", icon: <RefreshCw />, desc: "Decoupled frontend for sub-second load times that destroy bounce rates." },
              { title: "One-Tap Pay", icon: <CreditCard />, desc: "Frictionless checkout flows that directly boost your conversion rate." },
              { title: "Secure Vault", icon: <Lock />, desc: "Enterprise-grade fraud protection to safeguard your revenue." },
              { title: "Smart Cart", icon: <ShoppingCart />, desc: "AI algorithms that automatically upsell, driving up Average Order Value." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-xl border border-white/10 space-y-4 hover:border-emerald-400/50 transition-all font-sans"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-emerald-400">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Business Metrics */}
      <SectionWrapper className="w-full max-w-7xl px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Store <span className="text-emerald-400">Optimization</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Performance metrics from our headless implementations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Checkout Speed", value: "0.2s", impact: "Zero friction from cart to confirmation." },
            { label: "AOV Increase", value: "+34%", impact: "Intelligent cross-selling and tiered offers." },
            { label: "Conversion", value: "6.8%", impact: "Industry-leading performance for modern brands." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 group hover:border-emerald-400/30 transition-all text-center">
              <Zap className="w-6 h-6 text-emerald-400 mx-auto mb-4 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <div className="text-4xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4">{item.label}</div>
              <p className="text-sm text-gray-400">{item.impact}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CRO Strategies */}
      <SectionWrapper className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Conversion <span className="text-emerald-400">Optimization.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We employ data-driven psychological triggers and seamless UX to convert browsers into buyers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Frictionless Checkout", desc: "One-click purchasing, guest checkout options, and localized payment gateways to reduce cart abandonment.", value: "+40% Cart Recovery" },
            { title: "Dynamic Merchandising", desc: "AI algorithms that recommend products based on real-time browsing behavior and past purchases.", value: "Higher AOV" },
            { title: "Headless Speed", desc: "A storefront that loads instantly on any device, keeping the impulsive buyer hooked.", value: "Sub 1-Sec Load" }
          ].map((item, idx) => (
             <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-emerald-400/50 transition-colors group">
               <h4 className="text-white font-bold text-2xl mb-4">{item.title}</h4>
               <p className="text-gray-400 leading-relaxed mb-6">{item.desc}</p>
               <div className="inline-block px-4 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-mono tracking-widest uppercase">Target: {item.value}</div>
             </div>
          ))}
        </div>
      </SectionWrapper>

    </main>
  );
}
