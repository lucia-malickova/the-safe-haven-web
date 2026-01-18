export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video na pozadí */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Prekrytie a Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/40 text-white text-center px-4">
        <h1 className="text-4xl md:text-7xl font-light tracking-[0.4em] uppercase mb-4 drop-shadow-2xl text-white">
          The Safe Haven
        </h1>
        <div className="w-16 h-[1px] bg-white/50 mb-6 mx-auto"></div>
        <p className="text-lg md:text-2xl font-extralight tracking-[0.2em] uppercase opacity-90 text-white">
          AI Powered Retreats
        </p>
      </div>
    </main>
  );
}