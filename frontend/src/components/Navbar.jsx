import React, { useEffect, useState } from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const NAV_ITEMS = [
  { href: '/#', label: 'Home' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-400 ${
        scrolled ? 'border-ember/12 bg-night-deep/85 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a
              href="/#"
              className="font-display text-xl font-bold tracking-tight text-white transition-colors duration-200 hover:text-ember"
            >
              HP
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-baseline gap-8">
              {NAV_ITEMS.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group relative text-sm font-medium text-star/75 transition-colors duration-200 hover:text-white"
                >
                  {label}
                  <span
                    className="absolute -bottom-1.5 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="cursor-pointer text-star/80 transition-colors duration-200 hover:text-white"
            >
              {mobileMenuOpen ? (
                <CgClose className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Full width outside container */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div
          className={`space-y-1 border-t px-4 pt-3 pb-4 transition-all duration-400 ${
            scrolled
              ? 'border-ember/12 bg-night-deep/95 backdrop-blur-md'
              : 'border-white/15 bg-night/70 backdrop-blur-md'
          }`}
        >
          {NAV_ITEMS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-star/75 transition-colors duration-200 hover:bg-white/5 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
