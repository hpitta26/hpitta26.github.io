import React from 'react';
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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-night-deep py-20 text-star">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Separator — the vein, run out flat and fading at both ends */}
        <div className="mb-16" aria-hidden="true">
          <div
            className="h-px w-full"
            style={{
              background:
                'linear-gradient(90deg, rgba(124,92,196,0) 0%, rgba(201,163,106,0.5) 50%, rgba(124,92,196,0) 100%)'
            }}
          />
        </div>

        {/* Social Icons */}
        <div className="mb-16 flex justify-center gap-6 sm:gap-8">
          {/* Referenced as link.Icon rather than destructured: this project's
              ESLint has no React plugin, so a destructured capitalised
              component read only from JSX is reported as unused. */}
          {LINKS.map((link) => (
            <a
              key={link.title}
              href={link.href}
              title={link.title}
              aria-label={link.title}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="grid h-14 w-14 place-items-center rounded-lg border border-white/12 bg-white/[0.03] text-star/75 transition-colors duration-300 hover:border-ember/45 hover:text-ember"
            >
              <link.Icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center">
          <button
            onClick={scrollToTop}
            className="group cursor-pointer rounded-lg border border-ember/40 bg-[#f7efe0] text-grape transition-transform duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: '0 4px 14px rgba(11,4,24,0.6)' }}
          >
            {/* Inner radius is one pixel under the outer so the nested corners
                stay concentric with the 3px keycap edge. */}
            <div className="flex items-center gap-2.5 rounded-[7px] border-b-[3px] border-b-gilt/70 px-6 py-3.5">
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
