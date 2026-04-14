
"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black/50 backdrop-blur-xl border-t border-white/5 py-16 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-6 col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-display font-black tracking-tighter text-white">
            DigiFX Solutions<span className="text-primary">.</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Engineering the digital frontier. We build high-performance ecosystems 
            for brands that demand the future, today.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary transition-colors">
              <Twitter className="w-4 h-4 text-gray-400" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary transition-colors">
              <Linkedin className="w-4 h-4 text-gray-400" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary transition-colors">
              <Github className="w-4 h-4 text-gray-400" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-primary rounded-full"></span>
            SERVICES
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/services/web-development" className="hover:text-primary transition-colors">Web Architecture</Link></li>
            <li><Link href="/services/ai-automation" className="hover:text-primary transition-colors">AI Automation</Link></li>
            <li><Link href="/services/content-creation" className="hover:text-primary transition-colors">Context Creation</Link></li>
            <li><Link href="/services/e-commerce" className="hover:text-primary transition-colors">E-Commerce</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-secondary rounded-full"></span>
            COMPANY
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-secondary transition-colors">Our Mission</Link></li>
            <li><Link href="/portfolio" className="hover:text-secondary transition-colors">Case Studies</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Uplink</Link></li>
            <li><a href="#" className="hover:text-secondary transition-colors">Privacy Protocol</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-emerald-400 rounded-full"></span>
            INITIATE
          </h4>
          <p className="text-sm text-gray-400 mb-6 font-light">
            Ready to deploy your next project? Let&apos;s architect the future together.
          </p>
          <Link href="/contact" className="group inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors">
            GET STARTED <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
        <p>DIGIFX SOLUTIONS © 2026. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
           <span>LAT: 28.4595 | LONG: 77.0266</span>
           <span className="text-primary animate-pulse">SYSTEM STATUS: ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
