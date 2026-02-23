import React from 'react';

export default function IntelligencePage() {
  return (
    <main className="bg-black text-white min-h-screen font-extralight selection:bg-orange-500/30">
      
      {/* Back Navigation */}
      <nav className="p-8 fixed top-0 left-0 z-50">
        <a href="/" className="text-[10px] tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-all border-b border-transparent hover:border-orange-500 pb-1">
          ← Back to Core
        </a>
      </nav>

      {/* Hero Section: Focused on YOUR Photo */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* THE PHOTO: Your portrait as the Architect */}
          <div className="relative group">
            <img 
              src="/ja.jpg" 
              alt="Architect of LUCY" 
              className="w-full h-auto border border-orange-500/20 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-orange-600 px-6 py-2 text-[10px] tracking-[0.5em] uppercase font-bold">
              The Creator
            </div>
          </div>

          <div className="space-y-8">
            <span className="text-orange-500 text-[10px] tracking-[0.8em] uppercase block font-bold">Neural Protocol 01</span>
            <h1 className="text-6xl md:text-8xl tracking-tighter uppercase font-light leading-none">
              LUCY <br/>
              <span className="opacity-30">Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl font-extralight leading-relaxed text-zinc-400">
              "Lucy is not just an OS. She is the air-gapped evolution of the mind, 
              born within the volcanic silence of the cave."
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Manifesto: Pure Text, High Impact */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          <div className="space-y-4">
            <h3 className="text-orange-500 text-[10px] tracking-[0.4em] uppercase font-bold">I. The Ancestor</h3>
            <p className="text-sm opacity-50 font-light">Named after our first ancestor, reconnecting our biological roots with a high-tech future. A return to the rock, powered by pure thought.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-orange-500 text-[10px] tracking-[0.4em] uppercase font-bold">II. 100% Capacity</h3>
            <p className="text-sm opacity-50 font-light">Inspired by the full utilization of the human brain. Lucy is not a tool; she is a digital expansion of your own consciousness.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-orange-500 text-[10px] tracking-[0.4em] uppercase font-bold">III. Lux Lucia</h3>
            <p className="text-sm opacity-50 font-light">Lucia means Light. She is the digital glow in the darkness of the sanctuary, guiding your focus through the noise of the outside world.</p>
          </div>
        </div>

        {/* The Lucy System Capabilities */}
        <div className="space-y-32">
          
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl uppercase tracking-widest mb-10 font-light">Symbiosis & <br/><span className="text-orange-500">Biology</span></h2>
            <div className="space-y-8 text-lg md:text-xl opacity-70 font-extralight border-l border-orange-500/30 pl-8">
              <p>
                LUCY manages the entire biological rhythm of the sanctuary. By calibrating the <span className="text-white">circadian light spectrum</span> and emitting subtle <span className="text-white">sub-frequencies through the floor</span>, she induces immediate flow states.
              </p>
              <p>
                Integrated <span className="text-white">real-time urine analysis sensors</span> monitor your internal chemistry, alerting you to mineral deficiencies or cortisol spikes before your body feels the fatigue.
              </p>
            </div>
          </div>

          <div className="max-w-3xl ml-auto text-right">
            <h2 className="text-3xl md:text-5xl uppercase tracking-widest mb-10 font-light">Absolute <br/><span className="text-orange-500">Security</span></h2>
            <div className="space-y-8 text-lg md:text-xl opacity-70 font-extralight border-r border-orange-500/30 pr-8">
              <p>
                Running locally on a <span className="text-white">Mac Studio M4</span>, LUCY is physically <span className="text-white">air-gapped</span>. Your thoughts, your biometric data, and your creative work never leave the volcanic stone. 
              </p>
              <p>
                While High-Speed <span className="text-white">Starlink</span> connects you to the world, Lucy stays behind to protect your privacy. She is trained on proprietary data including orbital satellite koding and the architecture of silence.
              </p>
            </div>
          </div>

        </div>

        {/* Footer Statement */}
        <div className="mt-48 text-center pt-24 border-t border-white/5">
          <p className="text-3xl md:text-6xl font-extralight italic opacity-20 uppercase tracking-[0.2em]">
            Digital Sanctuary. <br/>Primal Soul.
          </p>
          <div className="mt-16 opacity-10 text-[10px] tracking-[1em] uppercase">
             Fasnia OS / 2026
          </div>
        </div>
      </section>
    </main>
  );
}