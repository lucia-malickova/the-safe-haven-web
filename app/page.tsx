export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black font-serif">
      {/* Video na pozadí */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Prekrytie s animovaným textom */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/30 text-white text-center px-4">
        
        {/* Hlavný nadpis s animáciou fade-in-up */}
        <h1 className="text-5xl md:text-8xl font-light tracking-[0.2em] italic mb-6 animate-fade-in-up">
          The Safe Haven
        </h1>
        
        {/* Deliaca čiara, ktorá sa roztiahne */}
        <div className="w-24 h-[1px] bg-white/40 mb-8 animate-grow-width"></div>
        
        {/* Podnadpis s miernym oneskorením */}
        <p className="text-lg md:text-2xl font-light tracking-[0.5em] uppercase opacity-0 animate-fade-in delay-700 fill-mode-forwards">
          AI Powered Retreats
        </p>
      </div>

      {/* Definícia animácií priamo v kóde - toto je trik pre rýchle oživenie */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.8; }
        }
        @keyframes grow {
          from { width: 0; }
          to { width: 6rem; }
        }
        .animate-fade-in-up { animation: fadeInUp 1.5s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 2s ease-out forwards; }
        .animate-grow-width { animation: grow 2s ease-in-out forwards; }
        .delay-700 { animation-delay: 0.8s; }
        .fill-mode-forwards { animation-fill-mode: forwards; }
      `}</style>
    </main>
  );
}