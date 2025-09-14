function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center font-poppins overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/assets/agents-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* White overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/85 z-10" />

      {/* Glow blobs */}
      <div className="absolute top-[-150px] left-[-120px] w-[350px] h-[350px] bg-yellow-300 rounded-full blur-[120px] opacity-40 z-20" />
      <div className="absolute bottom-[-150px] right-[-120px] w-[350px] h-[350px] bg-yellow-400 rounded-full blur-[120px] opacity-40 z-20" />

      {/* Gradient animation */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Text & CTA */}
      <div className="z-30 px-6 animate-fadeInUp">
        <h2
          className="text-[52px] md:text-[72px] font-extrabold leading-tight 
          bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 
          bg-clip-text text-transparent 
          drop-shadow-[0_4px_15px_rgba(255,215,0,0.7)]
          animate-[gradientMove_5s_ease_infinite]
          tracking-tight"
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          Get Your Agent
        </h2>
        
        <h3
          className="mt-2 text-[32px] md:text-[42px] font-bold leading-tight 
          bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 
          bg-clip-text text-transparent 
          drop-shadow-[0_3px_12px_rgba(255,215,0,0.6)]
          animate-[gradientMove_5s_ease_infinite]
          tracking-tight"
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          And Automate Your Workflow Like Never Before
        </h3>

        {/* Stylish Button */}
        <button
          className="mt-10 px-10 py-4 text-lg font-extrabold rounded-full
          bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300
          shadow-[0_8px_30px_rgba(255,215,0,0.6)]
          hover:shadow-[0_12px_40px_rgba(255,215,0,0.9)]
          hover:scale-110 transition-all duration-300
          text-zapDark tracking-wide"
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          GET AGENT
        </button>
      </div>
    </section>
  );
}

export default Hero;
