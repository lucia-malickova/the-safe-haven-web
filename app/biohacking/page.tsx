export default function BiohackingPage() {
  return (
    <main className="bg-black text-white min-h-screen font-extralight selection:bg-blue-500/30">
      
      {/* Fixná navigácia späť */}
      <nav className="p-8 fixed top-0 left-0 z-50">
        <a href="/" className="text-[10px] tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-all border-b border-transparent hover:border-blue-500 pb-1">
          ← Back to Core
        </a>
      </nav>

      {/* 1. HERO VIDEO SECTION: Bio-Neural Integrity */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50">
          <source src="/vyhlad.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-gradient-to-b from-black/20 via-transparent to-black text-center px-4">
          <span className="text-blue-400 text-[10px] tracking-[0.8em] uppercase block mb-6 font-bold animate-pulse">Protocol 02: Optimization</span>
          <h1 className="text-5xl md:text-8xl tracking-[0.3em] uppercase font-light">
            Bio-Neural <br/> Integrity
          </h1>
        </div>
      </section>

      {/* 2. HLAVNÝ OBSAH */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        
        <div className="space-y-48">
          
          {/* SEKICA: SIGNAL SILENCE & COPPER */}
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="space-y-8">
              <h2 className="text-xs tracking-[0.5em] uppercase text-blue-500 font-bold italic">Phase 01: Signal Silence</h2>
              <h3 className="text-4xl tracking-widest uppercase leading-tight">Passive <br/>Shielding.</h3>
              <div className="space-y-6 opacity-60 text-lg leading-relaxed border-l border-white/10 pl-8">
                <p>
                  Embedded within the volcanic stone are **pure copper grids**. These act as a physical Faraday shield, neutralizing external electromagnetic interference (EMI) and creating a sanctuary of signal silence.
                </p>
                <p>
                  Integrated layers of **Shungite (C60 Carbon)** block 99.9% of high-frequency noise, allowing the human nervous system to terminate its constant "threat-scanning" state and initiate deep recovery.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 aspect-square relative border border-white/5 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-7xl">0.00</span>
              </div>
              <div className="absolute bottom-8 left-8 text-[9px] tracking-widest uppercase opacity-40">EMI Noise Level: Neutralized</div>
            </div>
          </div>

          {/* SEKICA: MOLECULAR RECOVERY & GROUNDING */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative group">
              <img 
                src="/postel.jpg" 
                alt="Grounded high-performance sleep system" 
                className="w-full shadow-[0_0_100px_rgba(59,130,246,0.1)] border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute top-4 right-4 text-[8px] uppercase tracking-[0.4em] bg-blue-900/40 px-3 py-2 backdrop-blur-md">
                Electron Transfer Active
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-xs tracking-[0.5em] uppercase text-blue-500 font-bold italic">Phase 02: Homeostasis</h2>
              <h3 className="text-4xl tracking-widest uppercase leading-tight">Molecular <br/>Recovery.</h3>
              <div className="space-y-6 opacity-60 text-lg leading-relaxed border-l border-white/10 pl-8 font-extralight">
                <p>
                  The sleep architecture is physically integrated into the volcanic bedrock. This direct grounding allows for continuous electron transfer, stabilizing the body’s electrical potential and reducing systemic inflammation.
                </p>
                <p>
                  Hydration is optimized through **Molecular Hydrogen ($H_2$) infusion**, providing selective antioxidant support that targets oxidative stress at the mitochondrial level during intensive cognitive sessions.
                </p>
              </div>
            </div>
          </div>

          {/* SEKICA: LIGHT & LIME (Environment) */}
          <div className="max-w-4xl mx-auto text-center space-y-16">
             <h2 className="text-xs tracking-[0.5em] uppercase text-blue-500 font-bold italic">Phase 03: Environment</h2>
             <h3 className="text-4xl md:text-6xl tracking-[0.2em] uppercase leading-tight font-light">Adaptive Architecture.</h3>
             
             <div className="grid md:grid-cols-2 gap-12 text-left">
                <div className="p-10 border border-white/5 bg-zinc-950/50 hover:border-blue-500/20 transition-all group">
                  <h4 className="text-[10px] tracking-widest uppercase mb-6 opacity-30 group-hover:opacity-100 transition-opacity">Circadian Engine</h4>
                  <p className="opacity-50 font-extralight leading-relaxed">
                    Lucy AI manages automated lighting cycles that eliminate blue-light friction. By mimicking the solar spectrum, melatonin production is triggered 120 minutes faster than in urban environments.
                  </p>
                </div>
                <div className="p-10 border border-white/5 bg-zinc-950/50 hover:border-blue-500/20 transition-all group">
                  <h4 className="text-[10px] tracking-widest uppercase mb-6 opacity-30 group-hover:opacity-100 transition-opacity">Bio-Active Surfaces</h4>
                  <p className="opacity-50 font-extralight leading-relaxed">
                    Our Roman-Egyptian lime plaster creates a high-pH, antimicrobial atmosphere. This living wall system regulates air quality through mineral alchemy, maintaining peak oxygen saturation.
                  </p>
                </div>
             </div>
          </div>

        </div>

        {/* FOOTER MANIFESTO */}
        <div className="mt-64 text-center border-t border-white/5 pt-32">
          <p className="text-2xl md:text-4xl font-extralight italic opacity-30 max-w-3xl mx-auto leading-relaxed uppercase tracking-widest">
            "Eliminate systemic friction. Optimize the human machine."
          </p>
          <div className="mt-20 opacity-10 text-[10px] tracking-[1em] uppercase">
             Safe Haven / High Performance Living / 2026
          </div>
        </div>

      </section>
    </main>
  );
}