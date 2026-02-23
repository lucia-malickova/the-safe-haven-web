export default function ArchitecturePage() {
  return (
    <main className="bg-black text-white min-h-screen font-extralight selection:bg-orange-500/20">
      
      {/* Navigácia */}
      <nav className="p-8 fixed top-0 left-0 z-50">
        <a href="/" className="text-[10px] tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-all border-b border-transparent hover:border-orange-500 pb-1">
          ← Back to Core
        </a>
      </nav>

      {/* 1. HERO: SUBTRACTIVE ART */}
      <section className="max-w-4xl mx-auto px-6 pt-40 pb-24">
        <span className="text-orange-400 text-[10px] tracking-[0.6em] uppercase block mb-4 font-bold">Protocol 01</span>
        <h1 className="text-5xl md:text-7xl tracking-[0.2em] uppercase mb-12">Subtractive <br/>Living</h1>
        <p className="text-xl opacity-60 leading-relaxed italic border-l border-white/10 pl-8">
          "We do not add to the space. We reveal what is already hidden within the stone."
        </p>
      </section>

      {/* 2. ANCIENT ALCHEMY: Vápno a Kazeín */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <h2 className="text-xs tracking-[0.5em] uppercase text-orange-500 font-bold">The Material</h2>
            <h3 className="text-3xl tracking-widest uppercase font-light">Ancient Lime & Casein.</h3>
            <div className="space-y-6 opacity-60 text-lg leading-relaxed">
              <p>
                Using precise ratios from Ancient Rome and Greece, we create **Lime-Casein plasters**. By mixing slaked lime with milk protein (casein), we produce a surface that is not just a wall, but a living, breathing skin.
              </p>
              <p>
                This organic chemistry creates a high-pH, antimicrobial environment that naturally purifies the air. No expensive filters, no synthetic coatings—just the eternal physics of nature.
              </p>
            </div>
          </div>
          <div className="aspect-[3/4] bg-zinc-900 border border-white/5 relative overflow-hidden group">
             <img src="/stol.jpg" alt="The Monolithic Table in the Cave" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
             <div className="absolute bottom-8 left-8 text-[9px] tracking-widest uppercase opacity-40 leading-loose">
               Hand-mixed Ratios<br/>100% Organic Chemistry<br/>Living Organism
             </div>
          </div>
        </div>
      </section>

      {/* 3. TADELAKT: The Moroccan Secret */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 aspect-video bg-zinc-800 border border-white/5 overflow-hidden">
             <img src="/kupelna.jpg" alt="The Monolithic Bath" className="w-full h-full object-cover" />
             <div className="w-full h-full flex items-center justify-center text-[10px] uppercase tracking-widest opacity-20 italic">
               src="/kupelna.jpg" 
             </div>
          </div>
          <div className="order-1 md:order-2 space-y-8 text-right md:text-left">
            <h2 className="text-xs tracking-[0.5em] uppercase text-orange-500 font-bold">The Bathroom</h2>
            <h3 className="text-3xl tracking-widest uppercase">Tadelakt <br/>Monolith.</h3>
            <p className="opacity-60 text-lg leading-relaxed">
              In the sanctuary, water meets stone through **Tadelakt**—a traditional Moroccan waterproof plaster. It is polished with river stones and treated with olive oil soap to create a seamless, velvety surface. 
              Entirely hand-carved, with no foreign ceramics or synthetic joints.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE DESIGNER'S HAND: Tvoja osobná práca */}
      <section className="max-w-5xl mx-auto px-6 py-40 text-center">
        <h2 className="text-[10px] tracking-[0.6em] uppercase opacity-40 mb-12">The Curated Detail</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/5 hover:border-orange-500/30 transition-all">
            <h4 className="text-xs tracking-widest uppercase mb-4 text-orange-400">The Stone Desk</h4>
            <p className="text-[10px] opacity-40 leading-relaxed uppercase tracking-widest">
              Massive working desk supported by stones found directly on the 19,000m² land.
            </p>
          </div>
          <div className="p-8 border border-white/5 hover:border-orange-500/30 transition-all">
            <h4 className="text-xs tracking-widest uppercase mb-4 text-orange-400">Natural Optics</h4>
            <p className="text-[10px] opacity-40 leading-relaxed uppercase tracking-widest">
              Precision door openings and light shafts designed using ancient physics to capture the perfect spectrum.
            </p>
          </div>
          <div className="p-8 border border-white/5 hover:border-orange-500/30 transition-all">
            <h4 className="text-xs tracking-widest uppercase mb-4 text-orange-400">Zero Waste</h4>
            <p className="text-[10px] opacity-40 leading-relaxed uppercase tracking-widest">
              Everything extracted from the cave is repurposed back into the furniture and structure.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/5 text-center opacity-20">
         <p className="text-[9px] tracking-[0.5em] uppercase">Built to endure for millennia. Curated by hand.</p>
      </footer>

    </main>
  );
}