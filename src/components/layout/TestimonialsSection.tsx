"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    company: "TechNova Nexus",
    role: "Chief Digital Officer",
    text: "DigiFX completely transformed our digital presence. The 3D WebGL integration increased user retention by 40%. It's not just a website — it's an experience that converts.",
    avatar: "SJ",
    color: "from-primary/30 to-cyan-900/30",
  },
  {
    name: "Michael Torres",
    company: "E-Comm Plus",
    role: "Founder & CEO",
    text: "Their custom headless architecture made our storefront lightning fast. Conversion rates doubled within the first month. ROI was visible within weeks.",
    avatar: "MT",
    color: "from-secondary/30 to-purple-900/30",
  },
  {
    name: "Priya Sharma",
    company: "Nexus AI Solutions",
    role: "Head of Operations",
    text: "The AI automation workflows they built saved our team hundreds of hours per month. Brilliant engineering that scales with us. We won't work with anyone else.",
    avatar: "PS",
    color: "from-emerald-500/30 to-emerald-900/30",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 px-4 relative max-w-7xl mx-auto w-full">
      {/* Section header */}
      <div className="text-center mb-16 space-y-4">
        <p className="text-xs font-mono text-primary tracking-[0.5em] uppercase">Social Proof</p>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
          Client{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Intel.
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Declassified mission reports from our partners across the globe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
          >
            <div className="glass-panel card-hover shimmer-hover neon-hover relative h-full p-8 rounded-2xl border border-white/5 flex flex-col group overflow-hidden">
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-6xl font-serif text-white/5 select-none">&ldquo;</div>

              {/* Stars */}
              <div className="flex gap-1 mb-5 relative z-10">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#00f3ff">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 relative z-10 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-4 relative z-10">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white border border-white/10`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {t.role} · <span className="text-primary">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
