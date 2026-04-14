export default function TestimonialsSection() {
  const testimonials = [
    { name: "Sarah Jenkins", company: "TechNova Nexus", text: "DigiFX completely transformed our digital presence. The 3D WebGL integration increased our user retention by 40%. It's not just a website, it's an experience." },
    { name: "Michael Torres", company: "E-Comm Plus", text: "Their custom headless architecture made our storefront lightning fast. Our conversion rates doubled within the first month of deployment." },
    { name: "Priya Sharma", company: "Nexus AI Solutions", text: "The AI automation workflows they built saved our operations team hundreds of hours a month. Brilliant engineering minds operating at top speed." }
  ];

  return (
    <section className="py-20 text-center relative max-w-7xl mx-auto px-6 w-full">
      <div className="mb-12">
         <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Client <span className="text-primary">Intel.</span></h2>
         <p className="text-gray-400 max-w-2xl mx-auto">Declassified mission reports from our partners across the globe.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-panel p-8 rounded-2xl border border-white/10 text-left hover:border-primary/50 transition-colors relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
            <div className="relative">
                <div className="flex gap-1 text-primary mb-4">
                {/* 5 star rating */}
                {[...Array(5)].map((_, j) => (
                    <svg key={j} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">&quot;{t.text}&quot;</p>
                <div className="mt-auto">
                <p className="font-bold text-white tracking-wide">{t.name}</p>
                <p className="text-xs font-mono text-primary uppercase mt-1 tracking-widest">{t.company}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
