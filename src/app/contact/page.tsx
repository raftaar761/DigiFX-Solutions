
"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { LivingGrid } from "@/components/layout/LivingGrid";
import { ScannerCursor } from "@/components/ui/ScannerCursor";
import { CyberButton } from "@/components/ui/cyber-ui";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden cursor-none pt-24">
      <ScannerCursor />
      <LivingGrid />

      <SectionWrapper className="w-full max-w-7xl px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
            Initiate <span className="text-primary">Contact.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to build what&apos;s next? Send us a message and our agents will respond within 24 operational hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/30 group-hover:border-primary transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1 uppercase tracking-tighter">HQ Coordinates</h3>
                  <p className="text-gray-400">Sector-55, Gurugram, <br />Haryana, India</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/30 group-hover:border-secondary transition-colors">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1 uppercase tracking-tighter">Direct Uplink</h3>
                  <p className="text-gray-400">digifxsolutions@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center border border-emerald-400/30 group-hover:border-emerald-400 transition-colors">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1 uppercase tracking-tighter">Voice Comms</h3>
                  <p className="text-gray-400">+91 8090033271</p>
                </div>
              </div>
            </div>

            {/* Futuristic Map Placeholder */}
            <div className="h-64 rounded-2xl glass-panel border border-white/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('/images/map.png')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-primary/20 mix-blend-color" />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center space-y-2">
                    <div className="w-4 h-4 bg-primary rounded-full animate-ping mx-auto" />
                    <p className="text-[10px] font-mono text-primary tracking-widest uppercase">Target Locked: Gurugram</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 md:p-12 rounded-2xl border border-white/10 relative">
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary" />

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Operator Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Uplink Email</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Protocol Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option className="bg-zinc-900">Custom Code Development</option>
                  <option className="bg-zinc-900">AI Automation Architecture</option>
                  <option className="bg-zinc-900">Immersive Experience Design</option>
                  <option className="bg-zinc-900">Performance Marketing</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Message Content</label>
                <textarea rows={4} placeholder="Describe your mission objectives..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
              </div>
              <CyberButton type="submit" variant="primary" className="w-full">
                Transmit Message <Send className="w-4 h-4" />
              </CyberButton>
            </form>
          </div>
        </div>
      </SectionWrapper>

    </main>
  );
}
