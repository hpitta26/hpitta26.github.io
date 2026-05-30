import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Sky Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/hero-background.avif)',
            transform: `translateY(${scrollY * 0.1}px)`,
            willChange: 'transform'
          }}
        />

        {/* Drifting aurora glows in complementary tones */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="aurora-blob"
            style={{
              top: '-15%',
              left: '0%',
              width: '50vw',
              height: '50vw',
              background: 'radial-gradient(circle at center, rgba(13,148,136,0.75), rgba(13,148,136,0) 70%)',
              animation: 'auroraDriftA 13s ease-in-out infinite'
            }}
          />
          <div
            className="aurora-blob"
            style={{
              top: '-5%',
              right: '-5%',
              width: '42vw',
              height: '42vw',
              background: 'radial-gradient(circle at center, rgba(29,78,216,0.70), rgba(29,78,216,0) 70%)',
              animation: 'auroraDriftB 16s ease-in-out infinite'
            }}
          />
          <div
            className="aurora-blob"
            style={{
              top: '10%',
              left: '28%',
              width: '46vw',
              height: '46vw',
              background: 'radial-gradient(circle at center, rgba(4,120,87,0.65), rgba(4,120,87,0) 70%)',
              animation: 'auroraDriftC 19s ease-in-out infinite'
            }}
          />
          <div
            className="aurora-blob"
            style={{
              top: '0%',
              right: '22%',
              width: '26vw',
              height: '26vw',
              background: 'radial-gradient(circle at center, rgba(180,83,9,0.55), rgba(180,83,9,0) 70%)',
              animation: 'auroraDriftA 22s ease-in-out infinite reverse'
            }}
          />
        </div>
      </div>

      {/* Film grain overlay */}
      <div className="hero-grain absolute inset-0 z-10 pointer-events-none" />      

      {/* Hero content with Developer */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto mt-12">
          <div className="animate-fade-in-up">
            <h1
              className="font-bold text-white tracking-tight"
              style={{ fontSize: 'clamp(2.45rem, 8vw, 4.5rem)' }}
            >
              Henrique Pitta
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
              <h2
                className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-medium text-purple-50 backdrop-blur-md shadow-sm"
                style={{ fontSize: 'clamp(0.7rem, 2.2vw, 1rem)' }}
              >
                CS & Math @ FIU
              </h2>
              <h2
                className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-medium text-purple-50 backdrop-blur-md shadow-sm"
                style={{ fontSize: 'clamp(0.7rem, 2.2vw, 1rem)' }}
              >
                Dir. of Tech @ INIT
              </h2>
            </div>
            <p
              className="text-purple-50 mb-14 max-w-2xl mx-auto leading-relaxed"
              style={{ fontSize: 'clamp(0.85rem, 3.2vw, 1.25rem)' }}
            >
              I enjoy finding creative solutions to complex problems
            </p>
          </div>
        </div>
        
        {/* Developer and Ground - Grouped with hero content */}
        <div className="w-screen pointer-events-none scale-180 sm:scale-130 lg:scale-105">
          <img 
            src="/assets/coder-ground-combined.svg" 
            alt="Developer at workstation with ground transition" 
            className="h-auto"
          />
        </div>
        
        {/* Fill remaining space with background - cover any pixel gaps */}
        <div className="flex-1 w-screen bg-[#1a0836]" style={{ marginBottom: '-2px', minHeight: '2px' }}></div>
      </div>
    </section>
  );
};

export default Hero;