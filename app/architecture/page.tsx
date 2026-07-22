export default function ArchitecturePage() {
  return (
    <main className="bg-black text-white min-h-screen font-extralight selection:bg-orange-500/20">
      
      {/* Navigácia */}
      <nav className="p-8 fixed top-0 left-0 z-50">
        <a href="/" className="text-[10px] tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-all border-b border-transparent hover:border-orange-500 pb-1">
          ← Back to Core
        </a>
      </nav>

      {/* 1. HERO: SUBTRACTIVE & PARAMETRIC ART */}
      <section className="max-w-4xl mx-auto px-6 pt-40 pb-24">
        <span className="text-orange-400 text-[10px] tracking-[0.6em] uppercase block mb-4 font-bold">Protocol 01</span>
        <h1 className="text-5xl md:text-7xl tracking-[0.2em] uppercase mb-12">Subtractive <br/>Living</h1>
        <p className="text-xl opacity-60 leading-relaxed italic border-l border-white/10 pl-8">
          "We do not add unnecessary space. We reveal the functional intelligence hidden within the stone."
        </p>
      </section>

      {/* 2. AI MATERIAL PHYSICS: Mayská chémia, PINNs & VR execution */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <h2 className="text-xs tracking-[0.5em] uppercase text-orange-500 font-bold">
              Material Physics & AI Execution
            </h2>
            <h3 className="text-3xl tracking-widest uppercase font-light">
              Mayan Chemistry & PINNs Optimization.
            </h3>
            <div className="space-y-6 opacity-60 text-lg leading-relaxed">
              <p>
                We evolved an ancient **Mayan plaster recipe** by fusing porous volcanic tuff with natural opuntia mucilage (plant polysaccharides) instead of animal proteins. The result is an ultra-breathable, bio-active skin with exceptional hygrothermal performance.
              </p>
              <p>
                Using custom **Physics-Informed Neural Networks (PINNs)**, we calculated the precise material ratios and optimized exterior fluting (cannelures) for passive facade cooling without active air conditioning.
              </p>
              <p>
                The complex geometry was applied using industrial 3D-printed parametric stencils and executed by artisans wearing **VR spatial alignment headsets** for sub-millimeter precision.
              </p>
            </div>
          </div>
          <div className="aspect-[3/4] bg-zinc-900 border border-white/5 relative overflow-hidden group">
             <img src="/stol.jpg" alt="Parametric Monolithic Table in the Cave" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
             <div className="absolute bottom-8 left-8 text-[9px] tracking-widest uppercase opacity-40 leading-loose">
                PINNs Optimized Ratios<br/>Opuntia-Tuff Organic Matrix<br/>VR Assisted Craftsmanship
             </div>
          </div>
        </div>
      </section>

      {/* 3. PARAMETRIC TADELAKT & SANITARY DESIGN */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 aspect-video bg-zinc-800 border border-white/5 overflow-hidden">
             <img src="/kupelna.jpg" alt="The Monolithic Bath" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 md:order-2 space-y-8 text-right md:text-left">
            <h2 className="text-xs tracking-[0.5em] uppercase text-orange-500 font-bold">The Bathroom</h2>
            <h3 className="text-3xl tracking-widest uppercase">Tadelakt <br/>Monolith.</h3>
            <p className="opacity-60 text-lg leading-relaxed">
              In the sanctuary, water meets non-Euclidean geometry through **Tadelakt**—a traditional Moroccan waterproof plaster applied over 3D-printed structural scaffolds. 
              Polished with river stones and treated with olive oil soap, it forms a seamless, velvety surface free of synthetic joints or commercial ceramics.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE CURATED DETAIL: Industrial 3D printing & Autonomy */}
      <section className="max-w-5xl mx-auto px-6 py-40 text-center">
        <h2 className="text-[10px] tracking-[0.6em] uppercase opacity-40 mb-12">The Curated Detail</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/5 hover:border-orange-500/30 transition-all">
            <h4 className="text-xs tracking-widest uppercase mb-4 text-orange-400">Large-Format 3D Design</h4>
            <p className="text-[10px] opacity-40 leading-relaxed uppercase tracking-widest">
              Parametric furniture and sanitary elements designed with non-Euclidean curves and printed on industrial 3D systems.
            </p>
          </div>
          <div className="p-8 border border-white/5 hover:border-orange-500/30 transition-all">
            <h4 className="text-xs tracking-widest uppercase mb-4 text-orange-400">Bioclimatic Optics</h4>
            <p className="text-[10px] opacity-40 leading-relaxed uppercase tracking-widest">
              Light shafts calculated using solar spectrum physics to capture optimal daylight while shielding from heat.
            </p>
          </div>
          <div className="p-8 border border-white/5 hover:border-orange-500/30 transition-all">
            <h4 className="text-xs tracking-widest uppercase mb-4 text-orange-400">Zero Waste Autonomy</h4>
            <p className="text-[10px] opacity-40 leading-relaxed uppercase tracking-widest">
              Volcanic stone excavated directly from the 19,000m² land is repurposed back into structural binders and lime plasters.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center opacity-20">
         <p className="text-[9px] tracking-[0.5em] uppercase">Engineered to endure for millennia. Calculated by AI, refined by hand.</p>
      </footer>

    </main>
  );
}