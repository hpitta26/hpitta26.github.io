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
        {/* Sky Background (slowest layer) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/hero-background.avif)',
            transform: `translateY(${scrollY * 0.1}px)`,
            willChange: 'transform'
          }}
        />
      </div>      

      {/* Hero content with Developer */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto mt-12">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Henrique Pitta
            </h1>
            <h2 className="text-xl md:text-2xl text-purple-200 mb-2 font-medium">
              Software & AI Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed">
              tbh I like to build anything as long as it's cool and challenging.
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
        
        {/* Fill remaining space with white background */}
        <div className="flex-1 w-screen bg-[#1a0836]"></div>
      </div>
    </section>
  );
};

export default Hero;