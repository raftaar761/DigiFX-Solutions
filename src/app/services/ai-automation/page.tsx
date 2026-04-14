
"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LivingGrid } from "@/components/layout/LivingGrid";
import { ScannerCursor } from "@/components/ui/ScannerCursor";
import { CyberButton } from "@/components/ui/cyber-ui";
import { Cpu, ArrowRight, Zap, Brain, Network, Bot } from "lucide-react";
import Link from "next/link";

export default function AIAutomationPage() {
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
            <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/30 neon-border">
              <Cpu className="w-12 h-12 text-secondary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-white uppercase tracking-tighter">
              Neural <br /> <span className="text-secondary">AUTOMATION</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              Stop bleeding revenue on manual processes. We architect autonomous AI 
              ecosystems that handle customer support, data entry, and predictive 
              analysis 24/7. Turn your operational bottlenecks into high-speed automation.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <CyberButton variant="secondary">
                  Deploy AI Agents <ArrowRight className="w-4 h-4 inline" />
                </CyberButton>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Autonomous Agents", icon: <Bot className="text-primary" />, desc: "AI that resolves 80% of customer queries instantly, scaling your support without headcounts." },
              { title: "Predictive Analytics", icon: <Brain className="text-secondary" />, desc: "Forecast market trends and inventory needs with machine learning models." },
              { title: "Seamless Integration", icon: <Network className="text-emerald-400" />, desc: "Connect AI directly into your CRM (HubSpot, Salesforce) and n8n workflows." },
              { title: "Rapid Execution", icon: <Zap className="text-yellow-400" />, desc: "Process millions of data points in seconds, saving hundreds of manual hours." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 rounded-xl border border-white/10 space-y-4 hover:border-secondary/50 transition-all font-sans"
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

      {/* Strategic Approach */}
      <SectionWrapper className="w-full max-w-7xl px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">The <span className="text-secondary">Cognitive</span> Workflow</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our 3-step process to full business autonomy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Neural Audit", desc: "We map your current workflows and identify automation potential." },
            { step: "02", title: "Agent Training", desc: "We build and train custom LLMs on your proprietary data." },
            { step: "03", title: "Autonomous Launch", desc: "Your agents are deployed and monitored by our core team." }
          ].map((item, i) => (
            <div key={i} className="relative p-10 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group">
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-white/5 group-hover:text-secondary/10 transition-colors uppercase">{item.step}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              <div className="mt-6 w-12 h-1 bg-secondary/30 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* AI Integration Matrix */}
      <SectionWrapper className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Integration <span className="text-secondary">Matrix.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our autonomous agents interface directly with the tools your team already uses.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "OpenAI API", "Anthropic Claude", "Local LLMs", "n8n / Make.com",
            "Salesforce CRM", "HubSpot", "Stripe API", "AWS SageMaker"
          ].map((item, idx) => (
             <div key={idx} className="glass-panel p-6 rounded-xl border border-white/10 text-center hover:bg-white/5 transition-colors">
               <span className="text-white font-mono text-sm tracking-widest">{item}</span>
             </div>
          ))}
        </div>
      </SectionWrapper>

    </main>
  );
}
