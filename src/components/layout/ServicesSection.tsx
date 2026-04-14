"use client";

import Link from 'next/link';
import { Code2, Cpu, FileVideo, ArrowRight, Zap, Globe, Palette, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: "web-dev",
    title: "BUILD",
    subtitle: "Web Development",
    description: "High-performance Next.js applications and custom software architecture designed for scale.",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    features: ["React & Next.js", "Python & Node", "WordPress & CMS", "Custom Architecture"],
    accentColor: "group-hover:border-primary/60",
    bgGlow: "group-hover:bg-primary/5",
    href: "/services/web-development",
  },
  {
    id: "ai-automation",
    title: "AUTOMATE",
    subtitle: "AI & Automation",
    description: "Autonomous AI agents and integrated neural workflows that optimize operations 24/7.",
    icon: <Cpu className="w-8 h-8 text-secondary" />,
    features: ["Make.com & Zapier", "n8n Integration", "Custom AI Workflows", "Customer Support AI"],
    accentColor: "group-hover:border-secondary/60",
    bgGlow: "group-hover:bg-secondary/5",
    href: "/services/ai-automation",
  },
  {
    id: "content-creation",
    title: "CREATE",
    subtitle: "Content & Media",
    description: "Viral-engineered content and immersive 3D motion graphics that capture global attention.",
    icon: <FileVideo className="w-8 h-8 text-pink-400" />,
    features: ["AI Commercials", "Social Media", "3D Motion Graphics", "Brand Storytelling"],
    accentColor: "group-hover:border-pink-400/60",
    bgGlow: "group-hover:bg-pink-500/5",
    href: "/services/content-creation",
  },
  {
    id: "e-commerce",
    title: "SCALE",
    subtitle: "E-Commerce",
    description: "End-to-end e-commerce solutions with custom funnels and seamless payment integrations.",
    icon: <Globe className="w-8 h-8 text-emerald-400" />,
    features: ["Shopify Plus", "Headless Commerce", "Conversion Funnels", "Analytics"],
    accentColor: "group-hover:border-emerald-400/60",
    bgGlow: "group-hover:bg-emerald-500/5",
    href: "/services/e-commerce",
  },
  {
    id: "branding",
    title: "DEFINE",
    subtitle: "Brand & UI/UX",
    description: "Future-proof visual identities and strategic branding that separates you from the noise.",
    icon: <Palette className="w-8 h-8 text-yellow-400" />,
    features: ["Logo & Style-guides", "Brand Voice", "UI/UX Design", "Design Systems"],
    accentColor: "group-hover:border-yellow-400/60",
    bgGlow: "group-hover:bg-yellow-500/5",
    href: "/services/branding",
  },
  {
    id: "marketing",
    title: "GROW",
    subtitle: "Performance Marketing",
    description: "Precision-targeted campaigns powered by data-driven algorithms and AI optimization.",
    icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
    features: ["Paid Ads (Meta/Google)", "SEO Supremacy", "Growth Hacking", "Analytics Dashboard"],
    accentColor: "group-hover:border-orange-400/60",
    bgGlow: "group-hover:bg-orange-500/5",
    href: "/services/marketing",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-mono text-primary tracking-[0.4em] uppercase">What We Do</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
            The DigiFX{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Trinity
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            We don&apos;t just write code — we build ecosystems. Choose your vector of growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              <Link href={service.href} className="block h-full">
                <div
                  className={`relative h-full glass-panel p-7 rounded-2xl flex flex-col border border-white/5 transition-all duration-300 group cursor-pointer ${service.accentColor} ${service.bgGlow} hover:-translate-y-1`}
                >
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 rounded-tl-2xl group-hover:border-primary transition-colors duration-300" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 rounded-br-2xl group-hover:border-primary transition-colors duration-300" />

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-5 group-hover:scale-110 group-hover:border-white/20 transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white font-display tracking-wide">{service.title}</h3>
                    <p className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.2em] mt-0.5">{service.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 pt-4 border-t border-white/5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                        <Zap className="w-3 h-3 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="pt-5 flex items-center gap-2 text-primary text-xs font-bold opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    EXPLORE <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
