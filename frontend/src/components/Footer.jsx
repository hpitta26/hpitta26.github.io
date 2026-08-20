import React, { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { HiOutlineArrowUp } from "react-icons/hi";

const LINKS = [
  { href: 'mailto:business@henriquepitta.com', title: 'Email', Icon: MdEmail, external: false },
  { href: 'https://github.com/hpitta26', title: 'GitHub', Icon: IoLogoGithub, external: true },
  {
    href: 'https://www.linkedin.com/in/henrique-pitta-19594b249/',
    title: 'LinkedIn',
    Icon: IoLogoLinkedin,
    external: true
  }
];

const Footer = () => {
  // Retriggers the light sweep on the button each press, closing the
  // traveling-light motif: the page ends by sending you back to the top.
  const [sweep, setSweep] = useState(0);

  const scrollToTop = () => {
    setSweep((n) => n + 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-night-deep py-20 text-star">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Separator — the vein, run out flat and fading at both ends */}
        <div className="relative mb-16 flex items-center justify-center" aria-hidden="true">
          <div
            className="h-px w-full"
            style={{
              background:
                'linear-gradient(90deg, rgba(124,92,196,0) 0%, rgba(201,163,106,0.5) 50%, rgba(124,92,196,0) 100%)'
            }}
          />
          <span
            className="absolute h-1.5 w-1.5 rounded-full bg-ember"
            style={{ boxShadow: '0 0 12px rgba(243,215,163,0.95), 0 0 26px rgba(201,163,106,0.55)' }}
          />
        </div>

        {/* Social Icons */}
        <div className="mb-16 flex justify-center gap-6 sm:gap-8">
          {LINKS.map(({ href, title, Icon, external }) => (
            <a
              key={title}
              href={href}
              title={title}
              aria-label={title}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group relative grid h-14 w-14 place-items-center rounded-xl border border-ember/30 bg-night/60 text-star/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-ember/55 hover:text-ember"
            >
              <span
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: '0 0 26px rgba(243,215,163,0.28)' }}
                aria-hidden="true"
              />
              <Icon className="relative h-7 w-7" />
            </a>
          ))}
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center">
          <button
            onClick={scrollToTop}
            className="group relative cursor-pointer overflow-hidden rounded-lg border border-ember/50 bg-[#f7efe0] text-grape transition-all duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: '0 0 24px rgba(243,215,163,0.3), 0 4px 14px rgba(11,4,24,0.65)' }}
          >
            {/* Light sweeping upward through the button on press */}
            <span
              key={sweep}
              className={`pointer-events-none absolute inset-x-0 h-full ${sweep ? 'sweep-up' : ''}`}
              style={{
                background:
                  'linear-gradient(0deg, rgba(243,215,163,0) 0%, rgba(255,240,205,0.9) 50%, rgba(243,215,163,0) 100%)',
                opacity: 0
              }}
              aria-hidden="true"
            />
            <div className="relative flex items-center gap-2.5 rounded-[7px] border-b-[3px] border-b-gilt/70 px-6 py-3.5">
              <HiOutlineArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="text-sm font-semibold">Back to Top</span>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
