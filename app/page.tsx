export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-blue-500/30 font-light">
      
      {/* 1. HERO: SYMBOLIC POWER */}
      <section className="relative w-full h-screen overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-8xl font-extralight tracking-[0.4em] uppercase mb-4">Safe Haven</h1>
          <p className="text-sm md:text-xl tracking-[0.3em] uppercase opacity-60">Sovereign Space • Private Intelligence • Rock-Solid Security</p>
          <div className="mt-12 max-w-xl text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-40 leading-relaxed">
            Not just a shelter, but a fortress for your mind, soul, and data.
          </div>
        </div>
      </section>

      {/* 2. THE PHILOSOPHY: Private AI vs. Public Vulnerability */}
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-[10px] tracking-[0.6em] uppercase text-blue-400 mb-10 font-bold">The Philosophy</h2>
        <h3 className="text-3xl md:text-5xl font-extralight leading-tight uppercase tracking-widest mb-10">
          Reverse Aging <span className="italic opacity-50 text-2xl md:text-4xl">inside</span> the Stone.
        </h3>
        <p className="text-lg md:text-xl opacity-60 font-extralight leading-relaxed max-w-3xl mx-auto">
          In a world of constant surveillance, Safe Haven offers a sanctuary where your data never leaves the rock. 
          Built on ancient architectural wisdom and powered by local, private AI, we provide an environment 
          of total autonomy—from water and energy to your digital footprint.
        </p>
      </section>

      {/* 3. THE LOCATION: 19,000 m2 of Pure Stillness */}
      <section className="py-24 bg-zinc-950 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-[10px] tracking-[0.5em] uppercase opacity-40">Location: Fasnia, Tenerife</span>
            <h4 className="text-3xl tracking-widest uppercase">A Microclimate <br/>of Silence.</h4>
            <p className="opacity-60 leading-relaxed">
              At 600m altitude, bordering the ancient Barranco de Herques, we’ve secured a 19,000 m² 
              natural reserve. Shielded from wind and noise, it is a hidden stone quarry where 
              the air is pure and the sun is eternal.
            </p>
          </div>
          <div className="relative aspect-video group">
            <img src="/render-chillout.png" alt="Vision" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 border border-white/10 group-hover:border-blue-500/30 transition-colors"></div>
          </div>
        </div>
      </section>

      {/* 4. THE CORE PILLARS: Interaktívne brány */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-[10px] tracking-[0.6em] uppercase opacity-40 mb-20">The Foundation</h2>
        <div className="grid md:grid-cols-4 gap-6">
          
          {[
            { id: '01', title: 'Architecture', desc: 'Egyptian binders & Copper cooling.' },
            { id: '02', title: 'Biohacking', desc: 'Schumann Resonance & Ion balance.' },
            { id: '03', title: 'Intelligence', desc: 'Local AI Node & Starlink Link.' },
            { id: '04', title: 'Autonomy', desc: 'Total Solar & Water Independence.' }
          ].map((pillar) => (
            <a key={pillar.id} href={`/${pillar.title.toLowerCase()}`} className="group border border-white/10 p-12 flex flex-col items-center justify-center hover:bg-white/[0.02] transition-all duration-700">
              <span className="text-[10px] opacity-20 mb-6 font-bold">{pillar.id}</span>
              <h5 className="text-xl tracking-[0.2em] uppercase mb-4">{pillar.title}</h5>
              <p className="text-[9px] opacity-0 group-hover:opacity-40 transition-opacity uppercase tracking-widest">{pillar.desc}</p>
            </a>
          ))}

        </div>
      </section>
      {/* 5. RESIDENCY & RESERVATIONS */}
<section className="py-32 px-6 bg-blue-500/[0.02] border-y border-blue-500/10">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-[10px] tracking-[0.6em] uppercase text-blue-400 mb-8 font-bold">2027 Residency</h2>
    <h3 className="text-3xl md:text-5xl font-extralight uppercase tracking-[0.2em] mb-10">
      Secure your <span className="italic">Allocation</span>.
    </h3>
    <p className="text-lg opacity-60 font-extralight leading-relaxed mb-12">
      We are opening limited slots for long-term residency starting in 2027. 
      This is not a temporary stay; it is a long-term alignment with the sanctuary's 
      energy, data autonomy, and bio-regenerative systems.
    </p>
    
    <div className="inline-block group">
      <a 
        href="mailto:lucy@thesafehaven.ai?subject=Residency Inquiry 2027" 
        className="px-12 py-5 border border-blue-500/30 text-[10px] tracking-[0.5em] uppercase hover:bg-blue-500 hover:text-black transition-all duration-500"
      >
        Request Private Access
      </a>
    </div>
    
    <p className="mt-8 text-[9px] tracking-[0.3em] uppercase opacity-30">
      Priority is given to long-term leases (6+ months).
    </p>
  </div>
</section>
{/* THE LAB SHORTCUT */}
<section className="py-20 border-t border-white/5 bg-zinc-950/20">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-[10px] tracking-[0.6em] uppercase opacity-40 mb-8 font-bold">The Daily Evolution</h2>
    <a href="/lab" className="group">
      <h3 className="text-2xl tracking-[0.3em] uppercase mb-4 group-hover:text-blue-500 transition-colors underline decoration-blue-500/30 underline-offset-8">
        Enter the Lab
      </h3>
      <p className="text-[9px] tracking-[0.4em] uppercase opacity-30 group-hover:opacity-60 transition-opacity">
        Live research & progress logs
      </p>
    </a>
  </div>
</section>
      {/* FOOTER */}
    {/* FINAL UNIFIED FOOTER */}
      <footer className="py-24 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center">
          
          {/* Status svetielko */}
          <div className="flex items-center gap-3 mb-12">
            <div className="animate-pulse w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></div>
            <span className="text-[8px] tracking-[0.6em] uppercase opacity-30">Location: Sanctuary Hidden • Tenerife</span>
          </div>

          {/* Sociálne siete a Kontakty */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-12 opacity-50 text-[9px] tracking-[0.4em] uppercase">
            <a href="https://x.com/TheSafeHavenAi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">X / Twitter</a>
            <a href="https://www.instagram.com/thesafehaven.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61587826490581" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Facebook</a>
            <a href="https://www.tiktok.com/@safehavenai?lang=sk" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">TikTok</a>
            <a href="https://www.linkedin.com/in/lucia-mal%C3%AD%C4%8Dkov%C3%A1-9b3a5552/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">LinkedIn</a>
            <a href="https://github.com/lucia-malickova/the-safe-haven-web" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">GitHub</a>
          </div>

          {/* Kontakt a Copyright */}
          <div className="flex flex-col items-center gap-6">
            <a href="mailto:lucy@thesafehaven.ai" className="text-[10px] tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity">
              lucy@thesafehaven.ai
            </a>
            <div className="pt-8 border-t border-white/5 w-full max-w-[200px] opacity-20 text-[8px] tracking-[0.3em] uppercase">
              © 2026 THE SAFE HAVEN
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
}