import React, { useEffect, useMemo, useRef, useState } from 'react';
import { makeStars } from '../lib/atmosphere';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (frame.current !== null) return;
      frame.current = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        frame.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  const stars = useMemo(() => makeStars(80, 20260819), []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/hero-background.avif)',
            transform: `translateY(${scrollY * 0.1}px)`,
            willChange: 'transform'
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,2,22,0.94) 0%, rgba(11,3,28,0.88) 22%, rgba(18,6,44,0.72) 42%, rgba(38,14,80,0.44) 62%, rgba(52,21,102,0.26) 78%, rgba(26,8,54,0.55) 100%)'
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="aurora-blob"
            style={{
              top: '-15%',
              left: '0%',
              width: '50vw',
              height: '50vw',
              background: 'radial-gradient(circle at center, rgba(13,148,136,0.42), rgba(13,148,136,0) 70%)',
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
              background: 'radial-gradient(circle at center, rgba(29,78,216,0.40), rgba(29,78,216,0) 70%)',
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
              background: 'radial-gradient(circle at center, rgba(4,120,87,0.34), rgba(4,120,87,0) 70%)',
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
              background: 'radial-gradient(circle at center, rgba(186,52,140,0.34), rgba(186,52,140,0) 70%)',
              animation: 'auroraDriftA 22s ease-in-out infinite reverse'
            }}
          />
        </div>

        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.16}px)` }}
          aria-hidden="true"
        >
          {stars.map((star) => (
            <span
              key={star.id}
              className="star-dot"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: star.opacity
              }}
            />
          ))}
        </div>


        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.04}px)` }}
        >
          <img
            src="/assets/cloud_blue_2.svg"
            alt=""
            aria-hidden="true"
            className="hero-cloud"
            style={{
              top: '2%',
              left: '-8%',
              width: '40vw',
              '--cloud-opacity': 0.5,
              opacity: 0.5,
              filter: 'blur(2px)',
              animation: 'cloudDriftWide 34s ease-in-out infinite, cloudBreathe 18s ease-in-out infinite'
            }}
          />
          <img
            src="/assets/cloud_blue_1.svg"
            alt=""
            aria-hidden="true"
            className="hero-cloud"
            style={{
              top: '6%',
              right: '-6%',
              width: '32vw',
              '--cloud-opacity': 0.55,
              opacity: 0.55,
              filter: 'blur(1.5px)',
              animation: 'cloudDriftMed 28s ease-in-out infinite, cloudBreathe 21s ease-in-out infinite'
            }}
          />
          <img
            src="/assets/cloud_blue_4.svg"
            alt=""
            aria-hidden="true"
            className="hero-cloud"
            style={{
              top: '30%',
              left: '6%',
              width: '34vw',
              '--cloud-opacity': 0.6,
              opacity: 0.6,
              filter: 'blur(0.5px)',
              animation: 'cloudDriftSlow 30s ease-in-out infinite, cloudBreathe 24s ease-in-out infinite'
            }}
          />
          <img
            src="/assets/cloud_blue_3.svg"
            alt=""
            aria-hidden="true"
            className="hero-cloud"
            style={{
              top: '40%',
              right: '4%',
              width: '32vw',
              '--cloud-opacity': 0.65,
              opacity: 0.65,
              animation: 'cloudDriftWide 26s ease-in-out infinite, cloudBreathe 19s ease-in-out infinite'
            }}
          />
          <img
            src="/assets/cloud_blue_1.svg"
            alt=""
            aria-hidden="true"
            className="hero-cloud"
            style={{
              bottom: '18%',
              left: '-10%',
              width: '42vw',
              '--cloud-opacity': 0.9,
              opacity: 0.9,
              filter: 'drop-shadow(0 0 28px rgba(186,210,255,0.45))',
              animation: 'cloudDriftMed 32s ease-in-out infinite'
            }}
          />
          <img
            src="/assets/cloud_blue_4.svg"
            alt=""
            aria-hidden="true"
            className="hero-cloud"
            style={{
              bottom: '12%',
              right: '-12%',
              width: '46vw',
              '--cloud-opacity': 0.92,
              opacity: 0.92,
              filter: 'drop-shadow(0 0 30px rgba(186,210,255,0.5))',
              animation: 'cloudDriftSlow 36s ease-in-out infinite'
            }}
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(120% 85% at 50% 34%, rgba(13,3,32,0) 42%, rgba(13,3,32,0.45) 100%)'
          }}
          aria-hidden="true"
        />
      </div>

      <div className="hero-grain absolute inset-0 z-10 pointer-events-none" />

      <div className="relative z-20 flex h-screen flex-col items-center justify-between px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1
              className="font-display font-bold text-white mb-5"
              style={{
                fontSize: 'clamp(2.45rem, 8vw, 4.75rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.0,
                textShadow: '0 2px 40px rgba(11,4,24,0.6), 0 0 100px rgba(243,215,163,0.2)'
              }}
            >
              Henrique Pitta
            </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 mb-7">
              <h2 className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-star/70">
                CS &amp; Math @{' '}
                <a
                  className="text-star underline decoration-white/25 underline-offset-[5px] transition-colors duration-200 hover:decoration-ember"
                  href="https://www.fiu.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FIU
                </a>
              </h2>
              <h2 className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-star/70">
                Dir. of Tech @{' '}
                <a
                  className="text-star underline decoration-white/25 underline-offset-[5px] transition-colors duration-200 hover:decoration-ember"
                  href="https://www.weareinit.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INIT
                </a>
              </h2>
            </div>
            <p
              className="mx-auto mb-14 max-w-[19rem] text-balance font-light leading-relaxed text-star/80 sm:max-w-xl"
              style={{ fontSize: 'clamp(0.95rem, 3.2vw, 1.3rem)' }}
            >
              I enjoy finding creative solutions to complex problems
            </p>
          </div>
        </div>

        <div
          className="relative pointer-events-none w-[180vw] sm:w-screen sm:scale-130 lg:scale-105"
          style={{ marginBottom: '-2px' }}
        >
          <img
            src="/assets/coder-ground.svg"
            alt="Developer at workstation with ground transition"
            className="h-auto"
          />
          <div className="coffee-steam [--u:1.8vw] sm:[--u:1vw]" aria-hidden="true">
            <svg viewBox="0 0 28 130" preserveAspectRatio="none">
              <defs>
                <linearGradient id="steamNear" x1="0" y1="130" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#fff" stopOpacity="0" />
                  <stop offset="0.1" stopColor="#fff" stopOpacity="0.88" />
                  <stop offset="0.22" stopColor="#fff" stopOpacity="0.68" />
                  <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="steamFar" x1="0" y1="130" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#fff" stopOpacity="0" />
                  <stop offset="0.12" stopColor="#fff" stopOpacity="0.68" />
                  <stop offset="0.52" stopColor="#fff" stopOpacity="0.32" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <mask id="steamMaskNear">
                  <rect x="0" y="0" width="28" height="130" fill="url(#steamNear)" />
                </mask>
                <mask id="steamMaskFar">
                  <rect x="0" y="0" width="28" height="130" fill="url(#steamFar)" />
                </mask>
              </defs>
              <g mask="url(#steamMaskFar)">
                <g className="steam-sway">
                  <path
                    className="steam-flow"
                    d="M14 270q1.6-13 0-26q-2.6-15 0-30q3.4-17 0-34q-4.2-19 0-38q1.6-13 0-26q-2.6-15 0-30q3.4-17 0-34q-4.2-19 0-38q1.6-13 0-26q-2.6-15 0-30q3.4-17 0-34q-4.2-19 0-38"
                    fill="none"
                    stroke="#fffcf5"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </g>
              </g>
              <g mask="url(#steamMaskNear)">
                <g className="steam-sway">
                  <path
                    className="steam-flow"
                    d="M14 270q1.6-13 0-26q-2.6-15 0-30q3.4-17 0-34q-4.2-19 0-38q1.6-13 0-26q-2.6-15 0-30q3.4-17 0-34q-4.2-19 0-38q1.6-13 0-26q-2.6-15 0-30q3.4-17 0-34q-4.2-19 0-38"
                    fill="none"
                    stroke="#fffcf5"
                    strokeWidth="3.4"
                    strokeLinecap="round"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
