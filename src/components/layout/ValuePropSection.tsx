"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Rocket, Users } from "lucide-react";

const valueProps = [
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "10x Speed to Market",
    description: "We utilize modular architecture and AI to deploy enterprise-grade projects in record time."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
    title: "Future-Proof Tech",
    description: "Built on versatile, enduring stacks. No legacy code, no technical debt. Pure scalability."
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-400" />,
    title: "Elite Talent Pool",
    description: "A collective of top-tier freelancers, seasoned developers, and brilliant minds from IITs."
  }
];

export default function ValuePropSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
          {/* Left: The Hook */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Why settle for ordinary when you can have <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Extraordinary?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              We don&apos;t just build websites; we engineer digital ecosystems. At DigiFx Solutions, we combine cutting-edge design with relentless performance optimization to guarantee your business stands out and converts.
            </p>
            
            <ul className="space-y-4 pt-4">
              {['Data-Driven Decisions', 'conversion-focused UI/UX', '24/7 Ongoing AI Support'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                   <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                     <CheckCircle2 className="w-4 h-4 text-primary" />
                   </div>
                   {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: The Grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
             {valueProps.map((prop, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 className="glass-panel p-6 rounded-2xl border border-white/5 flex items-start gap-6 hover:border-white/20 transition-colors bg-white/[0.02]"
               >
                 <div className="bg-black/50 p-4 rounded-xl border border-white/10 shrink-0">
                    {prop.icon}
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-2">{prop.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {prop.description}
                    </p>
                 </div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
