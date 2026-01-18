export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video na pozadí */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-70"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Prekrytie */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/40 text-white text-center px-4">
        
        {/* Nadpis s animáciou definovanou cez inline štýl pre istotu */}
        <h1 
          className="text-5xl md:text-8xl font-light tracking-[0.2em] italic mb-6"
          style={{
            animation: 'fadeInUp 1.5s ease-out forwards'
          }}
        >
          The Safe Haven
        </h1>
        
        <div 
          className="h-[1px] bg-white/40 mb-8"
          style={{
            animation: 'grow 2s ease-in-out forwards',
            width: '0'
          }}
        ></div>
        
        <p 
          className="text-lg md:text-2xl font-light tracking-[0.5em] uppercase"
          style={{
            animation: 'fadeIn 2s ease-out 0.8s forwards',
            opacity: 0
          }}
        >
          AI Powered Retreats
        </p>
      </div>

      {/* CSS Animácie vložené bezpečne */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 0.8; }
        }
        @keyframes grow {
          from { width: 0; }
          to { width: 150px; }
        }
      `}} />
    </main>
  );
}