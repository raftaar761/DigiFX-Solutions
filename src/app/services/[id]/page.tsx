
"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LivingGrid } from "@/components/layout/LivingGrid";
import { ScannerCursor } from "@/components/ui/ScannerCursor";
import { CyberButton } from "@/components/ui/cyber-ui";
import { 
  Code2, Cpu, FileVideo, Globe, Palette, BarChart3, 
  CheckCircle2, ArrowRight
} from "lucide-react";

interface ServiceDetail {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  stats: Record<string, string>;
}

const serviceDetails: Record<string, ServiceDetail> = {
  "web-dev": {
    title: "Web Development",
    icon: <Code2 className="w-16 h-16 text-primary" />,
    description: "We build decentralized, high-performance web applications using the latest tech stacks like Next.js, React, and Node.js. Our focus is on speed, security, and scalability.",
    features: [
      "Full-stack Next.js Applications",
      "Custom SaaS Infrastructure",
      "E-commerce Ecosystems",
      "API & Microservices Architecture"
    ],
    stats: { speed: "99+", security: "A+", uptime: "99.9%" }
  },
  "ai-automation": {
    title: "AI Automation",
    icon: <Cpu className="w-16 h-16 text-secondary" />,
    description: "Automate your workflows with state-of-the-art AI agents. We build custom LLM-powered systems that handle customer support, data entry, and business logic autonomously.",
    features: [
      "Custom AI Assistants",
      "Workflow Neural Links",
      "Data Processing Pipelines",
      "Predictive Analytics"
    ],
    stats: { efficiency: "+40%", labor: "-60%", accuracy: "98%" }
  },
  "content-creation": {
    title: "Content Creation",
    icon: <FileVideo className="w-16 h-16 text-pink-500" />,
    description: "Captivate your audience with immersive 3D motion graphics and AI-generated commercials. We create high-impact visual content designed at the intersection of art and algorithm.",
    features: [
      "High-Fidelity 3D Renders",
      "AI-Optimized Video Production",
      "Brand Narrative Design",
      "Social Media Engine"
    ],
    stats: { reach: "M+", engage: "10x", conversion: "3x" }
  },
  "e-commerce": {
    title: "E-Commerce",
    icon: <Globe className="w-16 h-16 text-emerald-400" />,
    description: "Launch next-generation digital storefronts that convert visitors into loyal customers. We specialize in headless commerce, custom Shopify integrations, and high-conversion funnels.",
    features: [
      "Headless Shop Architecture",
      "Custom Checkout Flows",
      "Inventory Sync Systems",
      "Omni-channel Presence"
    ],
    stats: { conversion: "+200%", speed: "0.2s", checkout: "1-Click" }
  },
  "branding": {
    title: "Branding & UI/UX",
    icon: <Palette className="w-16 h-16 text-yellow-400" />,
    description: "Define your digital identity with a futuristic aesthetic. We design user interfaces that feel premium, intuitive, and ahead of their time, ensuring your brand stands out in the digital noise.",
    features: [
      "Futuristic UI/UX Design",
      "Visual Brand Architecture",
      "Design Systems for Scale",
      "Interactive Prototypes"
    ],
    stats: { premium: "Yes", retain: "80%", appeal: "World-Class" }
  },
  "marketing": {
    title: "Performance Marketing",
    icon: <BarChart3 className="w-16 h-16 text-orange-500" />,
    description: "Scale your revenue with precision-targeted marketing campaigns. We use data-driven strategies and AI-powered optimization to ensure every dollar of your budget delivers maximum ROAS.",
    features: [
      "Algorithm-Based Ad Targeting",
      "Advanced SEO Dominance",
      "Growth Hacking Strategies",
      "Real-time Data Dashboard"
    ],
    stats: { roas: "5.5x", cpv: "0.01", leads: "K+" }
  }
};

export default function ServicePage() {
  const params = useParams();
  const id = params.id as string;
  const service = serviceDetails[id] || serviceDetails["web-dev"];

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
            <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 neon-border">
              {service.icon}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-white uppercase tracking-tighter">
              {service.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              {service.description}
            </p>
            <div className="flex gap-4">
              <CyberButton variant="primary">
                Get Started <ArrowRight className="w-4 h-4" />
              </CyberButton>
            </div>
          </motion.div>

          {/* Feature Specs */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {service.features.map((feature: string, i: number) => (
              <div key={i} className="glass-panel p-6 rounded-xl border border-white/10 space-y-3 group hover:border-primary transition-all">
                <CheckCircle2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-white font-bold">{feature}</p>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1 + (i * 0.2) }}
                    className="h-full bg-primary" 
                   />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Tech Stack / Details */}
      <SectionWrapper className="w-full max-w-7xl px-6 py-20 border-t border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {Object.entries(service.stats).map(([key, value]) => (
             <div key={key} className="text-center space-y-2 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">{key}</div>
                <div className="text-3xl font-bold text-white">{value}</div>
             </div>
           ))}
        </div>
      </SectionWrapper>

      <footer className="w-full py-10 text-center text-gray-500 text-sm relative z-10 border-t border-white/5 bg-black/50 backdrop-blur-md mt-20">
        <p>DigiFX Solutions © 2026. Sector-55, Gurugram.</p>
        <p className="mt-2 text-xs">Operations Command: ONLINE</p>
      </footer>
    </main>
  );
}
