import React, { useState } from 'react';
import useInView from '../hooks/useInView';

/* The vein SVG maps viewBox x linearly across the full row width
   (preserveAspectRatio="none"), so these percentages land exactly on the
   path endpoints at x=188 and x=612 of an 800-unit box. */
const LEFT_ANCHOR = '23.5%';
const RIGHT_ANCHOR = '76.5%';

const ProjectNode = ({ project, isLast, nextProject }) => {
  const isLeft = project.position === 'left';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copyRef, copyInView] = useInView({ threshold: 0.25 });
  const [plateRef, plateInView] = useInView({ threshold: 0.25 });
  const [traceRef, traceInView] = useInView({ threshold: 0.35, rootMargin: '0px' });
  // The desktop trace lives in a `hidden lg:block` wrapper, which never
  // intersects, so the stacked mobile trace needs an observer of its own.
  const [mobileTraceRef, mobileTraceInView] = useInView({ threshold: 0.05, rootMargin: '0px' });

  const nextImage = () => {
    if (project.images && project.images.length > 1 && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (project.images && project.images.length > 1 && currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === project.images?.length - 1;

  const arrowBase =
    'absolute top-1/2 z-10 -translate-y-1/2 rounded-full border p-1.5 backdrop-blur-md transition-all duration-300 sm:p-2';

  return (
    <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
      {/* Project Description - Below node on small screens */}
      <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} order-2 z-10 flex justify-center`}>
        <div
          ref={copyRef}
          className={`reveal ${copyInView ? 'reveal-in' : ''} ${
            isLeft ? 'lg:text-right' : 'lg:text-left'
          } text-center w-full max-w-[600px] min-w-[320px] px-4 sm:px-8 lg:px-0`}
          style={{ transitionDelay: '80ms' }}
        >
          <h2
            className="font-display font-bold text-white mb-3"
            style={{
              fontSize: 'clamp(1.9rem, 4.4vw, 2.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05
            }}
          >
            {project.title}
          </h2>

          {project.role && (
            <p className="mb-5 text-sm font-medium leading-snug text-ember/90">
              {project.role}
            </p>
          )}

          {/* Measure capped in ch: at 600px these lines ran long enough to
              make the eye lose its place on the return sweep. */}
          <p
            className={`mb-6 max-w-[58ch] text-lg font-light leading-relaxed text-star/70 ${
              isLeft ? 'lg:ml-auto' : ''
            } mx-auto lg:mx-0`}
          >
            {project.description}
          </p>

          <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full border border-lilac/30 bg-lilac/8 px-3 py-1 text-sm font-medium text-lilac/90 transition-colors duration-300 hover:border-ember/60 hover:text-ember"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Larger Project Node */}
      <div className={`${isLeft ? 'lg:order-1' : 'lg:order-2'} order-1 z-10 flex justify-center relative`}>
        <div
          ref={plateRef}
          className={`reveal ${plateInView ? 'reveal-in' : ''} relative`}
        >
          {/* Chart plate — responsive width with maintained aspect ratio */}
          <div className="w-full max-w-[600px] min-w-[320px] relative z-5" style={{ aspectRatio: '600/380' }}>
            {/* Outer frame */}
            <div className="group w-full h-full rounded-2xl p-4.5 relative">
              {/* Blurred backing: fill + raised shadows, blurred so the node edges look soft/neumorphic */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: '#1a0836',
                  boxShadow:
                    '10px 12px 20px rgba(0,0,0,0.85), -6px -8px 16px rgba(243,215,163,0.07)',
                  filter: 'blur(2px)'
                }}
              />

              {/* Hairline rim */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none border border-ember/20 transition-colors duration-500 group-hover:border-ember/45"
                aria-hidden="true"
              />

              {/* Inner Glass Card */}
              <div className="w-full h-full rounded-lg overflow-hidden relative z-[1]">
                <img
                  src={`/assets/${project.images[currentImageIndex]}`}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Screenshots are bright and each has its own palette. This
                    layer sinks them into the night; hovering lifts it so the
                    real thing comes forward. */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-25"
                  style={{
                    background:
                      'linear-gradient(200deg, rgba(26,8,54,0.42) 0%, rgba(26,8,54,0.26) 45%, rgba(13,3,32,0.5) 100%)',
                    backdropFilter: 'saturate(0.82)',
                    WebkitBackdropFilter: 'saturate(0.82)',
                    zIndex: 1
                  }}
                  aria-hidden="true"
                />

                {/* Inner edge shadow so the image sits *in* the plate */}
                <div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 22px rgba(13,3,32,0.7)', zIndex: 2 }}
                  aria-hidden="true"
                />

                {/* Navigation arrows - only show if multiple images */}
                {project.images.length > 1 && (
                  <>
                    {/* Previous arrow */}
                    <button
                      onClick={prevImage}
                      disabled={isFirstImage}
                      aria-label="Previous screenshot"
                      className={`${arrowBase} left-2 sm:left-2.5 ${
                        isFirstImage
                          ? 'cursor-not-allowed border-white/5 bg-night-deep/40 text-white/20'
                          : 'cursor-pointer border-lilac/35 bg-night-deep/55 text-star/80 hover:border-ember/60 hover:bg-night-deep/80 hover:text-white'
                      }`}
                    >
                      <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {/* Next arrow */}
                    <button
                      onClick={nextImage}
                      disabled={isLastImage}
                      aria-label="Next screenshot"
                      className={`${arrowBase} right-2 sm:right-2.5 ${
                        isLastImage
                          ? 'cursor-not-allowed border-white/5 bg-night-deep/40 text-white/20'
                          : 'cursor-pointer border-lilac/35 bg-night-deep/55 text-star/80 hover:border-ember/60 hover:bg-night-deep/80 hover:text-white'
                      }`}
                    >
                      <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Image indicators — ticks on a scale rather than dots */}
                    <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-night-deep/55 px-2.5 py-1.5 backdrop-blur-md">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          aria-label={`Screenshot ${index + 1}`}
                          aria-current={index === currentImageIndex}
                          className={`h-[3px] cursor-pointer rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? 'w-5 bg-ember'
                              : 'w-2 bg-white/30 hover:bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The vein, on large screens: a seam of light in the earth that draws
          itself as you descend, then carries a lantern down to the next
          project. */}
      {!isLast && nextProject && (
        <div
          ref={traceRef}
          className={`absolute pointer-events-none overflow-visible w-full hidden lg:block ${
            traceInView ? 'trace-in' : ''
          }`}
          style={{
            bottom: '-145px',
            left: '0',
            zIndex: 0,
            height: '160px'
          }}
          aria-hidden="true"
        >
          {(() => {
            const path =
              // Current node is left, next is right
              isLeft && nextProject.position === 'right'
                ? 'M188 0L188 20L188,60Q188,80 208,80L592,80Q612,80 612,100L612 140L612 160'
                // Current node is right, next is left
                : !isLeft && nextProject.position === 'left'
                ? 'M612 0L612 20L612,60Q612,80 592,80L208,80Q188,80 188,100L188 140L188 160'
                // Same side connections (both left-left and right-right) - simple straight down
                : isLeft
                ? 'M188 0L188 160'
                : 'M612 0L612 160';

            const startAnchor = path.startsWith('M188') ? LEFT_ANCHOR : RIGHT_ANCHOR;
            const endAnchor =
              isLeft === (nextProject.position === 'left') ? startAnchor
                : startAnchor === LEFT_ANCHOR ? RIGHT_ANCHOR : LEFT_ANCHOR;

            return (
              <>
                <svg
                  className="absolute w-full"
                  height="160"
                  viewBox="0 0 800 160"
                  preserveAspectRatio="none"
                  style={{
                    /* The container overlaps the card above by 15px; the
                       plate's blurred edge is semi-transparent, so the
                       tucked-under stretch of line would ghost through it.
                       Clip it off — the line starts at the card edge, under
                       the half-sunk endpoint light. */
                    clipPath: 'inset(15px 0 0 0)'
                  }}
                >
                  {/* The unlit seam, always present so the route reads */}
                  <path
                    d={path}
                    pathLength="1"
                    fill="none"
                    stroke="#7c5cc4"
                    strokeOpacity="0.22"
                    strokeWidth="1.5"
                  />
                  {/* Kindled as you descend */}
                  <path
                    className="trace-line"
                    d={path}
                    pathLength="1"
                    fill="none"
                    stroke="#7c5cc4"
                    strokeWidth="1.5"
                    style={{
                      filter:
                        'drop-shadow(0 0 10px rgba(124, 92, 196, 0.75)) drop-shadow(0 0 3px rgba(236, 230, 247, 0.25))'
                    }}
                  />
                </svg>

                {/* Endpoint lights, in HTML so they stay circular. Each dot
                    is centred on a card edge with only the off-card half
                    showing. z-index alone cannot hide the other half: the
                    plate backing is blurred, so its edge pixels are
                    semi-transparent and anything behind them ghosts through.
                    Instead each light sits in an overflow-hidden box flush
                    with the edge, which clips the on-card half and its glow.
                    This container overlaps the card above by 15px, so the
                    top card's edge crosses it at y=15; the bottom card's
                    edge is at the container's bottom. */}
                <div
                  className="absolute overflow-hidden"
                  style={{ left: startAnchor, top: '15px', width: '56px', height: '31px', marginLeft: '-28px' }}
                >
                  <span className="trace-node" style={{ left: '28px', top: '-3px' }} />
                </div>
                <div
                  className="absolute overflow-hidden"
                  style={{ left: endAnchor, bottom: '0px', width: '56px', height: '31px', marginLeft: '-28px' }}
                >
                  <span className="trace-node" style={{ left: '28px', bottom: '-3px' }} />
                </div>
              </>
            );
          })()}
        </div>
      )}

      {/* Stacked layout: the vein spans only the margin between nodes, so it
          links plate to plate instead of striking through the copy and the
          card. The 144px must stay in step with the mb-36 node wrapper in
          ProjectRoadmap. */}
      {!isLast && (
        <div
          ref={mobileTraceRef}
          className={`absolute left-0 flex w-full justify-center pointer-events-none lg:hidden ${
            mobileTraceInView ? 'trace-in' : ''
          }`}
          style={{ bottom: '-144px', zIndex: 0, height: '144px' }}
          aria-hidden="true"
        >
          <span className="trace-node" style={{ left: '50%', top: '3px' }} />
          <svg className="h-full w-1" viewBox="0 0 2 144" preserveAspectRatio="none">
            <path d="M1 0L1 144" pathLength="1" fill="none" stroke="#7c5cc4" strokeOpacity="0.24" strokeWidth="1.5" />
            <path
              className="trace-line"
              d="M1 0L1 144"
              pathLength="1"
              fill="none"
              stroke="#7c5cc4"
              strokeWidth="1.5"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(124, 92, 196, 0.75)) drop-shadow(0 0 3px rgba(236, 230, 247, 0.25))'
              }}
            />
          </svg>
          <span className="trace-node" style={{ left: '50%', bottom: '-3.5px' }} />
        </div>
      )}
    </div>
  );
};

export default ProjectNode;
