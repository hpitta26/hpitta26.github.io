import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-[#1a0836] backdrop-blur-sm border-b-[1px] border-[#220f3c]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white font-bold text-xl">
              HP
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#" 
                className="text-white hover:text-purple-200 transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a 
                href="#projects" 
                className="text-white hover:text-purple-200 transition-colors duration-200 font-medium"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-purple-200 transition-colors duration-200 font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-purple-200 focus:outline-none transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Full width outside container */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className={`px-4 pt-2 pb-3 space-y-1 border-t transition-all duration-400 ${
          scrolled 
            ? 'bg-[#1a0836] backdrop-blur-sm border-[#220f3c]' 
            : 'bg-white/10 backdrop-blur-md border-white/20 shadow-lg'
        }`}>
          <a 
            href="#" 
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 text-white hover:text-purple-200 rounded-md transition-colors duration-200 font-medium ${
              scrolled ? 'hover:bg-[#220f3c]' : 'hover:bg-white/20'
            }`}
          >
            Home
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 text-white hover:text-purple-200 rounded-md transition-colors duration-200 font-medium ${
              scrolled ? 'hover:bg-[#220f3c]' : 'hover:bg-white/20'
            }`}
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 text-white hover:text-purple-200 rounded-md transition-colors duration-200 font-medium ${
              scrolled ? 'hover:bg-[#220f3c]' : 'hover:bg-white/20'
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;