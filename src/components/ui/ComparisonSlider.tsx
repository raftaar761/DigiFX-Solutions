
"use client";

import { useState, useRef } from "react";
import { MoveHorizontal } from "lucide-react";

interface ComparisonSliderProps {
  beforeImage?: string;
  afterImage?: string;
}

export function ComparisonSlider({ }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    // Get clientX based on event type
    let clientX: number;
    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    
    // Clamp between 0 and 100
    const newPos = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(newPos);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 group"
      onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
      onTouchMove={(e) => handleDrag(e)}
      onClick={(e) => handleDrag(e)}
      data-cursor="scan"
    >
      {/* Background Image (After - Full Width) */}
      <div className="absolute inset-0 w-full h-full">
         <img src="/images/after.png" alt="After 3D render" className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-black/40 flex items-center justify-center pointer-events-none">
            <div className="z-10 text-center flex flex-col items-center justify-center p-8 border border-primary/30 rounded-2xl bg-black/50 backdrop-blur-md shadow-[0_0_30px_rgba(0,243,255,0.2)]">
                <h3 className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">AFTER</h3>
                <p className="mt-2 text-sm md:text-base font-mono text-primary uppercase tracking-widest">DigiFX Optimized • 3D Experiential</p>
            </div>
         </div>
      </div>

      {/* Foreground Image (Before - Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
         <img src="/images/before.png" alt="Before generic code" className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-white/70 flex items-center justify-center pointer-events-none">
             <div className="text-center flex flex-col items-center justify-center p-8 bg-white/80 border border-gray-300 shadow-sm mt-12 backdrop-blur-md">
                <h3 className="text-4xl md:text-5xl font-bold font-serif text-gray-800">BEFORE</h3>
                <p className="mt-2 text-sm md:text-base font-sans text-gray-600">Generic Template • Static Layout</p>
            </div>
         </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center group-hover:bg-primary transition-colors"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-8 h-8 rounded-full bg-black border-2 border-white flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-primary transition-colors">
            <MoveHorizontal className="w-4 h-4 text-white group-hover:text-primary" />
        </div>
      </div>

    </div>
  );
}
