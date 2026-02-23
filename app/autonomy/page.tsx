import React from 'react';

export default function AutonomyPage() {
  return (
    <main className="bg-black text-white min-h-screen font-extralight selection:bg-emerald-500/30">
      
      {/* Navigation */}
      <nav className="p-8 fixed top-0 left-0 z-50">
        <a href="/" className="text-[10px] tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-all border-b border-transparent hover:border-emerald-500 pb-1">
          ← Back to Core
        </a>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <span className="text-emerald-500 text-[10px] tracking-[0.8em] uppercase block mb-6 font-bold">Protocol 03</span>
        <h1 className="text-6xl md:text-9xl tracking-tighter uppercase font-light leading-none mb-12">
          Closed Loop <br/>
          <span className="opacity-30">Autonomy</span>
        </h1>
        <p className="text-xl md:text-2xl font-extralight leading-relaxed text-zinc-400 max-w-3xl">
          A regenerative habitat where technology and nature breathe together. 
          The sanctuary is not connected to the grid; it is the grid.
        </p>
      </section>

      {/* Systems Grid */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-24">
          
          {/* Energy & Light */}
          <div className="space-y-12">
            <div className="p-1 border-l-2 border-emerald-500 pl-8">
              <h2 className="text-xs tracking-[0.5em] uppercase text-emerald-500 font-bold mb-6">Power Generation</h2>
              <h3 className="text-3xl uppercase tracking-widest mb-6">The Solar Vault</h3>
              <p className="opacity-60 text-lg font-extralight leading-relaxed">
                Harnessing Tenerife’s relentless sun through high-efficiency photovoltaics. Energy is stored in a massive battery array within the rock, ensuring seamless power for LUCY and your hardware, 24/7.
              </p>
            </div>

            <div className="p-1 border-l-2 border-emerald-500 pl-8">
              <h2 className="text-xs tracking-[0.5em] uppercase text-emerald-500 font-bold mb-6">Water Harvesting</h2>
              <h3 className="text-3xl uppercase tracking-widest mb-6">Atmospheric Alchemy</h3>
              <p className="opacity-60 text-lg font-extralight leading-relaxed">
                Water is pulled directly from the Teide mist. Using high-tech mesh "fog-catchers" and deep volcanic galleries, we collect moisture in massive reservoirs. Every drop is recycled through a sophisticated septic-to-irrigation system.
              </p>
            </div>
          </div>

          {/* Agriculture & AI Soil */}
          <div className="space-y-12">
            <div className="bg-zinc-950 p-12 border border-white/5 relative overflow-hidden group">
               <h2 className="text-xs tracking-[0.5em] uppercase text-emerald-500 font-bold mb-8 italic">Phase: Subsistence</h2>
               <h3 className="text-4xl uppercase tracking-[0.1em] leading-tight mb-8">Self-Sustaining <br/>Soil.</h3>
               <p className="opacity-60 text-lg font-extralight leading-relaxed mb-8">
                 The surrounding land is a calibrated ecosystem. Crops are selected for high-yield survival, ensuring nutritional independence even in times of crisis.
               </p>
               <div className="p-6 bg-emerald-900/10 border-l-2 border-emerald-500">
                  <h4 className="text-[10px] tracking-widest uppercase mb-2 opacity-100 text-white">AI Soil Monitoring</h4>
                  <p className="text-sm opacity-50">
                    LUCY monitors the mineral composition of the soil in real-time. Sensors track deficiencies, adjusting hydration and nutrients automatically to maintain peak agricultural output.
                  </p>
               </div>
               {/* Ambient decorative element */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full" />
            </div>
          </div>

        </div>

        {/* Closing Statement */}
        <div className="mt-48 text-center pt-24 border-t border-white/5">
          <p className="text-3xl md:text-5xl font-extralight italic opacity-20 uppercase tracking-[0.2em]">
            Independent. <br/>Resilient. Free.
          </p>
          <div className="mt-16 opacity-10 text-[10px] tracking-[1em] uppercase">
             Autonomous Living / Tenerife / 2026
          </div>
        </div>

      </section>
    </main>
  );
}