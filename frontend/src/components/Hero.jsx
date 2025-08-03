import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">

      {/* Developer coding SVG */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <img 
          src="/assets/coding-setup.svg" 
          alt="Developer Coding" 
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Henrique Pitta
            </h1>
            <h2 className="text-xl md:text-2xl text-purple-200 mb-8 font-medium">
              Software Engineer & Web Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating innovative web applications and solving complex problems through elegant code. 
              I specialize in full-stack development with a focus on user experience and performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore My Work
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-200 border-2 border-purple-400 rounded-full hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;