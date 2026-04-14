
"use client";

import { ComparisonSlider } from "@/components/ui/ComparisonSlider";
import { CyberButton } from "@/components/ui/cyber-ui";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WorkSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <div className="space-y-8">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono">
             <span>CASE STUDY: E-COMMERCE REDESIGN</span>
           </div>
           
           <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
             From Simple Template <br />
             to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Conversion Machine.</span>
           </h2>
           
           <p className="text-gray-400 text-lg leading-relaxed">
             We took a standard Shopify theme and injected custom React components, 
             improving Load Time by <span className="text-white font-bold">40%</span> and 
             Conversion Rate by <span className="text-white font-bold">150%</span>.
           </p>

           <div className="flex gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center flex-1">
                 <div className="text-2xl font-bold text-primary">0.4s</div>
                 <div className="text-xs text-gray-500 uppercase tracking-widest">Load Time</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center flex-1">
                 <div className="text-2xl font-bold text-secondary">3.2x</div>
                 <div className="text-xs text-gray-500 uppercase tracking-widest">ROAS</div>
              </div>
           </div>

           <Link href="/portfolio">
             <CyberButton variant="outline">
               View Full Case Study <ArrowUpRight className="w-4 h-4 inline" />
             </CyberButton>
           </Link>
        </div>

        {/* Right: The Comparison Interactive */}
        <div>
           <ComparisonSlider />
           <p className="text-center text-xs text-gray-600 mt-4 font-mono">
              [DRAG SLIDER TO REVEAL OPTIMIZATION]
           </p>
        </div>

      </div>
    </section>
  );
}
