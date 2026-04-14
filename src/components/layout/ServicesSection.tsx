"use client";

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code2, Cpu, FileVideo, ArrowRight, Zap, Globe, Palette, BarChart3 } from 'lucide-react';

const services = [
  {
    id: "web-dev",
    title: "BUILD",
    subtitle: "The Foundation",
    description: "High-performance web applications and custom software architecture designed for scale.",
    icon: <Code2 className="w-10 h-10 text-primary" />,
    features: ["React & Next.js", "Python & Node", "WordPress & CMS", "Custom Architecture"],
    gradient: "from-primary/20 to-transparent",
    border: "group-hover:border-primary/50"
  },
  {
    id: "ai-automation",
    title: "AUTOMATE",
    subtitle: "The Efficiency",
    description: "Autonomous AI agents and integrated neural workflows that optimize your operations 24/7.",
    icon: <Cpu className="w-10 h-10 text-secondary" />,
    features: ["Make.com & Zapier", "n8n Integration", "Custom Workflows", "Customer Support AI"],
    gradient: "from-secondary/20 to-transparent",
    border: "group-hover:border-secondary/50"
  },
  {
    id: "content-creation",
    title: "CREATE",
    subtitle: "The Brand",
    description: "Viral-engineered content and immersive 3D motion graphics that capture global attention.",
    icon: <FileVideo className="w-10 h-10 text-pink-500" />,
    features: ["AI Commercials", "Social Media Management", "3D Motion Graphics"],
    gradient: "from-pink-500/20 to-transparent",
    border: "group-hover:border-pink-500/50"
  },
  {
    id: "e-commerce",
    title: "SCALE",
    subtitle: "The Commerce",
    description: "End-to-end e-commerce solutions with custom funnels and seamless payment integrations.",
    icon: <Globe className="w-10 h-10 text-emerald-400" />,
    features: ["Shopify Plus", "Headless Commerce", "Conversion Funnels"],
    gradient: "from-emerald-400/20 to-transparent",
    border: "group-hover:border-emerald-400/50"
  },
  {
    id: "branding",
    title: "DEFINE",
    subtitle: "The Identity",
    description: "Future-proof visual identities and strategic branding that separates you from the noise.",
    icon: <Palette className="w-10 h-10 text-yellow-400" />,
    features: ["Logo & Style-guides", "Brand Voice", "UI/UX Design"],
    gradient: "from-yellow-400/20 to-transparent",
    border: "group-hover:border-yellow-400/50"
  },
  {
    id: "marketing",
    title: "GROW",
    subtitle: "The Performance",
    description: "Precision-targeted marketing campaigns powered by data-driven algorithms and AI.",
    icon: <BarChart3 className="w-10 h-10 text-orange-500" />,
    features: ["Paid Ads (Meta/Google)", "SEO Supremacy", "Growth Hacking"],
    gradient: "from-orange-500/20 to-transparent",
    border: "group-hover:border-orange-500/50"
  }
];

const defaultTiltOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            15,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets
	scale:          1.02,   // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit content
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,   // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
};

export default function ServicesSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            The DigiFX <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Trinity</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don&apos;t just write code. We build ecosystems. Choose your vector of growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Tilt key={index} options={defaultTiltOptions} className="h-full">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative h-full glass-panel p-8 rounded-2xl flex flex-col justify-between border border-white/5 transition-all duration-300 group ${service.border}`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:tracking-wider transition-all">{service.title}</h3>
                    <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">{service.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed min-h-[80px]">
                    {service.description}
                  </p>

                  <ul className="space-y-3 pt-4 border-t border-white/5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                        <Zap className="w-3 h-3 text-primary" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <div className="relative z-10 pt-8 mt-auto">
                   <Link href={service.id === "web-dev" ? "/services/web-development" : `/services/${service.id}`} className="block">
                     <span className="flex items-center gap-2 text-primary text-sm font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 cursor-pointer">
                       EXPLORE <ArrowRight className="w-4 h-4" />
                     </span>
                   </Link>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>

      </div>
    </section>
  );
}
