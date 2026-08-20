import React, { useEffect, useMemo, useRef, useState } from 'react';
import { makeStars } from '../lib/atmosphere';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const frame = useRef(null);

  // Parallax, but coalesced into one update per frame — a raw scroll handler
  // setting state fires far more often than the sky needs to move.
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

        {/* Dusk wash. The source sky art is bright lavender while the rest of
            the page is deep purple. This grades the top down to night so the
            starfield reads, keeps a band of last light at the horizon behind
            the coder, and lands on the ground colour at the very bottom. */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,2,22,0.94) 0%, rgba(11,3,28,0.88) 22%, rgba(18,6,44,0.72) 42%, rgba(38,14,80,0.44) 62%, rgba(52,21,102,0.26) 78%, rgba(26,8,54,0.55) 100%)'
          }}
          aria-hidden="true"
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

        {/* Starfield — above the screen-blended aurora so the glows cannot
            wash it out, below the clouds so the closer banks pass in front. */}
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


        {/* Drifting clouds */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.04}px)` }}
        >
          {/* Deep, faint clouds high in the sky */}
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
          {/* Mid-depth clouds */}
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
          {/* Closer, brighter clouds framing the coder */}
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

        {/* Vignette — darkens the corners so the name holds the centre and the
            ground seam at the bottom reads as intentional depth. */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(120% 85% at 50% 34%, rgba(13,3,32,0) 42%, rgba(13,3,32,0.45) 100%)'
          }}
          aria-hidden="true"
        />
      </div>

      {/* Film grain overlay */}
      <div className="hero-grain absolute inset-0 z-10 pointer-events-none" />

      {/* Hero content with Developer.
          justify-between pins the workstation to the bottom of the viewport and
          lets the leftover height fall as sky above it. Centring the stack and
          padding underneath instead left a tall band of flat ground below the
          horizon on narrow screens. */}
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
            {/* Standing meta, deliberately quiet: it sits between the name and
                the line that actually says something, so it should read third. */}
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

        {/* Developer and Ground. The -2px closes a subpixel seam between the
            artwork's ground and the section below it, which share a colour. */}
        <div
          className="relative pointer-events-none w-[180vw] sm:w-screen sm:scale-130 lg:scale-105"
          style={{ marginBottom: '-2px' }}
        >
          <img
            src="/assets/coder-ground.svg"
            alt="Developer at workstation with ground transition"
            className="h-auto"
          />
          {/* Coffee steam rising from the white mug */}
          <div className="coffee-steam" aria-hidden="true">
            <span className="steam s1" />
            <span className="steam s2" />
            <span className="steam s3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
