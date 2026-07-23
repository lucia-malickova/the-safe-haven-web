import React from 'react';

export default function LabPage() {
  const logs = [
    {
      date: "06 / 01 / 2026",
      title: "Genesis: The Counter-Movement",
      desc: "The world is arming for destruction. Safe Haven is born as the opposite—a sanctuary for regeneration and neural peace.",
      image: "/genesis.jpg",
      hasImage: true
    },
    {
      date: "07 / 01 / 2026",
      title: "The Illegal Beauty",
      desc: "First cave viewing. Legally impossible, but visually transformative. The hunt for a legitimate sanctuary begins.",
      image: "/1.navrh.jpg", 
      hasImage: true
    },
    {
      date: "10 / 01 / 2026",
      title: "Digital Domain Secured",
      desc: "TheSafeHaven.ai registered. The digital twin now has an address.",
      hasImage: false
    },
    {
      date: "29 / 01 / 2026",
      title: "Hardware Genesis",
      desc: "First circuit alive. Moving from visual concepts to physical logic. Arduino integration for frequency control initiated.",
      image: "/arduino.png",
      hasImage: true
    },
    {
      date: "13 / 02 / 2026",
      title: "Friday the 13th: The Sacrifice",
      desc: "The mountain tested us—scratched the car on the narrow path to the future home. A baptism by fire.",
      image: "/auto.jpg",
      hasImage: true
    },
    {
      date: "18 / 02 / 2026",
      title: "Sanctuary Secured",
      desc: "Reservation contract signed. 19,000m² of volcanic rock and silence. The work begins.",
      image: "/dom.jpg", 
      hasImage: true
    },
    {
      date: "23 / 02 / 2026",
      title: "System Online",
      desc: "The bridge is built. Safe Haven officially live on the network.",
      image: "/web.jpeg",
      hasImage: true
    },
    {
      date: "24 / 02 / 2026",
      title: "Neural Uplink Initialized",
      desc: "Established official social media nodes. The mind of the sanctuary is no longer air-gapped from the public. Communication channels live: Instagram, X, TikTok, Facebook.",
      hasImage: false
    },
    {
      date: "09 / 03 / 2026",
      title: "EuroHPC Supercomputing Compute Access",
      desc: "Granted access to the EuroHPC AI Factory supercomputer 'Leonardo' for 50,000 GPU hours (Proposal No. EHPC-AIF-2026FL01-159) to train custom neural networks and spatial PINNs models.",
      image: "/leonardo.jpeg",
      hasImage: true
    },
    {
      date: "19 / 03 / 2026",
      title: "Avatar Genesis: Expectations vs. Reality",
      desc: "LMM deployment protocol. Left: Target result. Center: Horrifying glitches during training—Artifact 01 'Strašidlo'. Right: Sheldon Irony Threshold reached after critical GPU usage. Neural peace requires sacrifice.",
      image: "/lucy1.png",
      hasImage: true
    },
    {
      date: "31 / 03 / 2026",
      title: "Sanctuary Officially Acquired",
      desc: "Signed final purchase agreement for 19,000m² of land in Fasnia, Tenerife, featuring an ancient country house and natural cave systems.",
      hasImage: false
    },
    {
      date: "05 / 04 / 2026",
      title: "Geological Diagnostics & LiDAR Scans",
      desc: "Initiated physical diagnostics using Schmidt rebound hammer, thermal imaging, ambient temperature/humidity telemetry, and high-precision 3D LiDAR spatial mapping.",
      image: "/schmidthammer.jpg",
      hasImage: true
    },
    {
      date: "16 / 04 / 2026",
      title: "Facade Optimization Neural Net Trained",
      desc: "Successfully trained specialized neural network predicting the ideal chemical and thermodynamic composition for natural breathable facades.",
      hasImage: false
    },
    {
      date: "18 / 05 / 2026",
      title: "3D Printed Sanitary Prototypes",
      desc: "First parametric 3D printed sanitary and basin design concepts generated for large-format fabrication.",
      image: "/sink.png",
      hasImage: true
    },
    {
      date: "21 / 05 / 2026",
      title: "Mayan Organic Polymer Formulation",
      desc: "Evolved traditional Roman lime formulas into a bio-inspired Mayan plaster matrix utilizing natural opuntia mucilage (cactus polysaccharides) for moisture control.",
      hasImage: false
    },
    {
      date: "25 / 05 / 2026",
      title: "On-Site Laboratory Material Tests",
      desc: "Direct field application of the Mayan plaster matrix onto existing volcanic walls for empirical structural and humidity stress testing.",
      hasImage: false
    },
    {
      date: "28 / 05 / 2026",
      title: "Generative Bed & Workstation Topology",
      desc: "Neural network engineered a seamless generative daybed and ergonomic computer workstation growing organically out of a single parametric seed structure.",
      hasImage: false
    },
    {
      date: "04 / 06 / 2026",
      title: "Corporate Legal Entity: Modelos IA S.L.",
      desc: "Incorporated 'Modelos Inteligencia Artificial S.L.' in Tenerife and secured Spanish domain infrastructure (.es) to back sovereign AI, PINNs modeling, and large-format 3D architecture.",
      hasImage: false
    },
    {
      date: "26 / 06 / 2026",
      title: "FGF Industrial 3D Printer Order & Print Test",
      desc: "Printed first sanitary unit using Fused Granulate Fabrication (FGF) and officially commissioned custom industrial-grade FGF 3D printer for construction.",
      hasImage: false
    },
    {
      date: "29 / 06 / 2026",
      title: "3D Printed Matrix Stencils for Cannelures",
      desc: "Fabricated physical 3D printed mold matrices required to cast thermodynamic passive cooling flutes (cannelures) along exterior surfaces.",
      hasImage: false
    },
    {
      date: "08 / 07 / 2026",
      title: "Gamified Spatial VR Deployment on Site",
      desc: "Deployed interactive VR application directly on site, enabling masons to align 3D printed stencils and apply complex Mayan plaster with sub-millimeter spatial precision.",
      video: "/vr-gamification.mp4",
      hasVideo: true,
      hasImage: false
    }
  ];

  return (
    <main className="bg-black text-white min-h-screen font-extralight selection:bg-blue-500/30 pb-40">
      <nav className="p-8 fixed top-0 left-0 z-50 w-full flex justify-between bg-black/80 backdrop-blur-md border-b border-white/5">
        <a href="/" className="text-[10px] tracking-[0.4em] uppercase opacity-40 hover:opacity-100 transition-all">← Back</a>
        <span className="text-[10px] tracking-[0.4em] uppercase text-blue-500 font-bold tracking-[0.6em]">System Logs</span>
      </nav>

      <section className="max-w-xl mx-auto px-6 pt-40">
        <div className="space-y-20 relative">
          {/* Vertikálna čiara - časová os */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-blue-600 via-white/10 to-transparent"></div>

          {logs.map((log, i) => (
            <div key={i} className="pl-10 relative group">
              {/* Modrý bod na osi */}
              <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4px] top-1 shadow-[0_0_10px_#3b82f6]"></div>
              
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono opacity-30 text-blue-400">{log.date}</span>
                <h2 className="text-xl tracking-widest uppercase text-white/90 group-hover:text-blue-400 transition-colors">
                  {log.title}
                </h2>
                
                {log.hasImage && (
                  <div className="my-6 border border-white/10 bg-zinc-950 p-1 group-hover:border-blue-500/30 transition-all duration-700 shadow-2xl">
                    <img 
                      src={log.image} 
                      alt={log.title} 
                      className="w-full h-auto opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                    />
                  </div>
                )}

                {log.hasVideo && (
                  <div className="my-6 border border-white/10 bg-zinc-950 p-1 group-hover:border-blue-500/30 transition-all duration-700 shadow-2xl">
                    <video 
                      src={log.video} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-auto opacity-80 group-hover:opacity-100 transition-all duration-1000"
                    />
                  </div>
                )}
                
                <p className={`text-xs leading-relaxed uppercase tracking-widest transition-opacity duration-500 ${log.hasImage || log.hasVideo ? 'opacity-40 group-hover:opacity-70' : 'opacity-20 italic'}`}>
                  {log.desc}
                </p>

                {!log.hasImage && !log.hasVideo && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-[1px] w-4 bg-blue-500/30"></div>
                    <span className="text-[8px] text-blue-500/40 tracking-[0.3em]">DATA ONLY LOG</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}