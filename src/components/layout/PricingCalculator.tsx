
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CyberButton } from "@/components/ui/cyber-ui";
import { Check, Loader2, ArrowRight, DollarSign, Zap } from "lucide-react";

type ServiceType = "web" | "app" | "ai" | "marketing";

interface PricingState {
  service: ServiceType | null;
  features: string[];
  timeline: "standard" | "rush" | null;
}

const services = [
  { id: "web", label: "Web Dev" },
  { id: "app", label: "Mobile App" },
  { id: "ai", label: "AI Automation" },
  { id: "marketing", label: "Brand/Ads" },
];

const featuresList: Record<ServiceType, string[]> = {
  web: ["CMS Integration", "E-commerce", "SEO Optimization", "3D Animations"],
  app: ["iOS & Android", "Push Notifications", "User Auth", "Offline Mode"],
  ai: ["Chatbot Integration", "Workflow Automation", "Custom Agents", "Data Scraping"],
  marketing: ["Video Production", "Social Strategy", "Copywriting", "Logo Design"],
};

export default function PricingCalculator() {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState<PricingState>({
    service: null,
    features: [],
    timeline: null,
  });
  const [isCalculating, setIsCalculating] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const toggleFeature = (feature: string) => {
    setConfig((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCalculate = () => {
    setIsCalculating(true);
    timerRef.current = setTimeout(() => {
      setIsCalculating(false);
      setShowEmailModal(true);
    }, 1500);
  };

  // Calculate Mock "Complexity" Score (0-100)
  const calculateComplexity = () => {
    let score = 0;
    if (config.service) score += 30;
    score += config.features.length * 10;
    if (config.timeline === "rush") score += 20;
    return Math.min(score, 100);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Project <span className="text-primary">Configurator</span>
          </h2>
          <p className="text-gray-400">
            Define your parameters. Get a tailored implementation roadmap.
          </p>
        </div>

        {/* The Calculator Interface */}
        <div className="glass-panel rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }} />

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="text-xl font-mono text-white">01 // SELECT CORE VECTOR</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setConfig({ ...config, service: s.id as ServiceType, features: [] })}
                      className={`p-4 rounded-xl border transition-all duration-200 text-left ${
                        config.service === s.id
                          ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                      }`}
                    >
                      <span className="block text-lg font-bold">{s.label}</span>
                    </button>
                  ))}
                </div>
                <div className="flex justify-end">
                  <CyberButton 
                    onClick={() => setStep(2)} 
                    disabled={!config.service}
                    className={!config.service ? "opacity-50 cursor-not-allowed" : ""}
                  >
                    Next Phase <ArrowRight className="w-4 h-4" />
                  </CyberButton>
                </div>
              </motion.div>
            )}

            {step === 2 && config.service && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="text-xl font-mono text-white">02 // ADD MODULES</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuresList[config.service].map((feature) => (
                    <button
                      key={feature}
                      onClick={() => toggleFeature(feature)}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 ${
                        config.features.includes(feature)
                          ? "bg-secondary/20 border-secondary text-white"
                          : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                      }`}
                    >
                      <span>{feature}</span>
                      {config.features.includes(feature) && <Check className="w-4 h-4 text-secondary" />}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button onClick={() => setStep(1)} className="text-gray-500 hover:text-white transition-colors">
                    Back
                  </button>
                  <CyberButton onClick={() => setStep(3)}>
                    Finalize Specs <ArrowRight className="w-4 h-4" />
                  </CyberButton>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="text-xl font-mono text-white">03 // TIMELINE & EXECUTION</h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => setConfig({ ...config, timeline: "standard" })}
                    className={`flex-1 p-6 rounded-xl border text-center transition-all ${
                        config.timeline === "standard" ? "bg-white/10 border-white text-white" : "border-white/10 text-gray-500"
                    }`}
                  >
                    <div className="text-lg font-bold">Standard</div>
                    <div className="text-sm opacity-60">Normal Delivery</div>
                  </button>
                  <button
                    onClick={() => setConfig({ ...config, timeline: "rush" })}
                    className={`flex-1 p-6 rounded-xl border text-center transition-all ${
                        config.timeline === "rush" ? "bg-primary/20 border-primary text-white" : "border-white/10 text-gray-500"
                    }`}
                  >
                    <div className="text-lg font-bold flex items-center justify-center gap-2">
                        <Zap className="w-4 h-4 text-primary" /> Rapid
                    </div>
                    <div className="text-sm opacity-60">Accelerated Delivery</div>
                  </button>
                </div>

                {/* Live Complexity Meter */}
                <div className="bg-black/50 p-4 rounded-xl border border-white/10 space-y-2">
                    <div className="flex justify-between text-xs font-mono text-gray-400">
                        <span>ESTIMATED COMPLEXITY</span>
                        <span>{calculateComplexity()}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${calculateComplexity()}%` }}
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <button onClick={() => setStep(2)} className="text-gray-500 hover:text-white transition-colors">
                        Back
                    </button>
                    <CyberButton onClick={handleCalculate} variant="primary" className="w-48">
                        {isCalculating ? (
                            <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                        ) : (
                            "Generate Quote"
                        )}
                    </CyberButton>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Email Capture Modal (Simplified) */}
        <AnimatePresence>
          {showEmailModal && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm rounded-2xl">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-900 border border-white/10 p-8 rounded-xl max-w-sm w-full text-center space-y-6"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary">
                    <DollarSign className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Estimate Ready</h3>
                    <p className="text-gray-400 text-sm mt-2">
                       Based on your config, we have generated a detailed cost breakdown. Where should we send it?
                    </p>
                </div>
                <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
                <button 
                  onClick={() => setShowEmailModal(false)}
                  className="w-full py-3 bg-primary text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors"
                >
                    Unlock Estimate
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
