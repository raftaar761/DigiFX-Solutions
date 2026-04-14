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
    icon: <Code2 className="w-8 h-8" />,
    iconColor: "text-primary",
    features: ["React & Next.js", "Python & Node", "WordPress & CMS", "Custom Architecture"],
    accent: "primary",
    glowColor: "rgba(0,243,255,0.15)",
    href: "/services/web-development",
  },
  {
    id: "ai-automation",
    title: "AUTOMATE",
    subtitle: "AI & Automation",
    description: "Autonomous AI agents and integrated neural workflows that optimize operations 24/7.",
    icon: <Cpu className="w-8 h-8" />,
    iconColor: "text-secondary",
    features: ["Make.com & Zapier", "n8n Workflows", "Custom AI Agents", "Support Automation"],
    accent: "secondary",
    glowColor: "rgba(189,0,255,0.15)",
    href: "/services/ai-automation",
  },
  {
    id: "content-creation",
    title: "CREATE",
    subtitle: "Content & Media",
    description: "Viral-engineered content and immersive 3D motion graphics that capture global attention.",
    icon: <FileVideo className="w-8 h-8" />,
    iconColor: "text-pink-400",
    features: ["AI Commercials", "Social Media", "3D Motion Graphics", "Brand Storytelling"],
    accent: "pink",
    glowColor: "rgba(244,114,182,0.15)",
    href: "/services/content-creation",
  },
  {
    id: "e-commerce",
    title: "SCALE",
    subtitle: "E-Commerce",
    description: "End-to-end e-commerce solutions with custom funnels and seamless payment integrations.",
    icon: <Globe className="w-8 h-8" />,
    iconColor: "text-emerald-400",
    features: ["Shopify Plus", "Headless Commerce", "Conversion Funnels", "Analytics Suite"],
    accent: "emerald",
    glowColor: "rgba(52,211,153,0.15)",
    href: "/services/e-commerce",
  },
  {
    id: "branding",
    title: "DEFINE",
    subtitle: "Brand & UI/UX",
    description: "Future-proof visual identities and strategic branding that separates you from the noise.",
    icon: <Palette className="w-8 h-8" />,
    iconColor: "text-yellow-400",
    features: ["Logo & Style-guides", "Brand Voice", "UI/UX Design", "Design Systems"],
    accent: "yellow",
    glowColor: "rgba(250,204,21,0.15)",
    href: "/services/branding",
  },
  {
    id: "marketing",
    title: "GROW",
    subtitle: "Performance Marketing",
    description: "Precision-targeted campaigns powered by data-driven algorithms and AI optimization.",
    icon: <BarChart3 className="w-8 h-8" />,
    iconColor: "text-orange-400",
    features: ["Meta & Google Ads", "SEO Supremacy", "Growth Hacking", "Reporting Dashboard"],
    accent: "orange",
    glowColor: "rgba(251,146,60,0.15)",
    href: "/services/marketing",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-28 px-4">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <p className="text-xs font-mono text-primary tracking-[0.5em] uppercase">What We Do</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
            The DigiFX{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Arsenal
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            We don&apos;t just write code — we build ecosystems. Choose your vector of growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
            >
              <Link href={service.href} className="block h-full group">
                <div
                  className="relative h-full glass-panel card-hover shimmer-hover p-7 rounded-2xl flex flex-col border border-white/5 cursor-pointer overflow-hidden"
                  style={{ "--glow": service.glowColor } as React.CSSProperties}
                >
                  {/* Top-left corner accent */}
                  <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute top-0 left-0 w-full h-px bg-gradient-to-r from-current to-transparent ${service.iconColor}`} />
                    <div className={`absolute top-0 left-0 h-full w-px bg-gradient-to-b from-current to-transparent ${service.iconColor}`} />
                  </div>

                  {/* Inner glow on hover — pure CSS */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 40px ${service.glowColor}` }}
                  />

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                    {service.icon}
                  </div>

                  {/* Title + subtitle */}
                  <div className="mb-3">
                    <h3 className="text-2xl font-black text-white font-display tracking-tight group-hover:tracking-wide transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.2em] mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 pt-4 border-t border-white/5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-200">
                        <Zap className={`w-3 h-3 shrink-0 ${service.iconColor}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`pt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${service.iconColor}`}>
                    Explore <ArrowRight className="w-3.5 h-3.5" />
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
