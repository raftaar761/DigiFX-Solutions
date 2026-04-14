
import HeroSection from "@/components/hero/HeroSection";
import { LivingGrid } from "@/components/layout/LivingGrid";
import ServicesSection from "@/components/layout/ServicesSection";
import ValuePropSection from "@/components/layout/ValuePropSection";
import PricingCalculator from "@/components/layout/PricingCalculator";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import { ScannerCursor } from "@/components/ui/ScannerCursor";
import WorkSection from "@/components/layout/WorkSection";


export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-x-hidden cursor-none">
      
      {/* 0. Custom Cursor */}
      <ScannerCursor />

      {/* 1. Global Background */}
      <LivingGrid />

      {/* 2. Hero Section */}
      <SectionWrapper className="w-full">
        <HeroSection />
      </SectionWrapper>

      {/* 2.5 Value Proposition */}
      <SectionWrapper className="w-full relative z-20">
        <ValuePropSection />
      </SectionWrapper>

      {/* 3. Services Section (The Trinity) */}
      <SectionWrapper className="w-full" id="services">
        <ServicesSection />
      </SectionWrapper>

      {/* 4. Work Section (Case Study) */}
      <SectionWrapper className="w-full" id="work">
        <WorkSection />
      </SectionWrapper>

      {/* 5. Client Intel (Testimonials) */}
      <TestimonialsSection />

      <SectionWrapper className="w-full" id="configurator">
        <PricingCalculator />
      </SectionWrapper>

    </main>
  );
}
