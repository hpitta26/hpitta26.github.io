import React, { useState } from 'react';

const ProjectNode = ({ project, isLast, nextProject }) => {
  const isLeft = project.position === 'left';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
  
  return (
    <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
      {/* Project Description - Below node on small screens */}
      <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} order-2 z-10 flex justify-center`}>
        <div className={`${isLeft ? 'lg:text-right' : 'lg:text-left'} text-center w-full max-w-[600px] min-w-[320px] px-4 sm:px-8 lg:px-0`}>
          <h2 className="text-4xl font-bold text-white mb-2">
            {project.title}
          </h2>
          {project.role && (
            <p className="text-purple-300 text-sm font-medium mb-4">
              {project.role}
            </p>
          )}
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {project.description}
          </p>
          <div className={`flex flex-wrap gap-1 ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Larger Project Node */}
      <div className={`${isLeft ? 'lg:order-1' : 'lg:order-2'} order-1 flex justify-center relative`}>
        <div className="relative">
          {/* Bigger Node card with outer frame - responsive width with maintained aspect ratio */}
          <div className="w-full max-w-[600px] min-w-[320px] relative z-5" style={{aspectRatio: '600/380'}}>
            {/* Outer Frosted Glass Frame */}
            <div className="w-full h-full bg-[#33204a] rounded-3xl p-3 shadow-2xl border border-[#5b4c6e]">
              {/* Inner Glass Card */}
                <div className="w-full h-full rounded-lg overflow-hidden relative group">
                  <img 
                    src={`/assets/${project.images[currentImageIndex]}`}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  
                  {/* Navigation arrows - only show if multiple images */}
                  {project.images.length > 1 && (
                    <>
                      {/* Previous arrow */}
                      <button
                        onClick={prevImage}
                        disabled={isFirstImage}
                        className={`absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 opacity-100 transition-all duration-300 z-10 ${
                          isFirstImage 
                            ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed' 
                            : 'bg-black/50 hover:bg-black/70 text-white cursor-pointer'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      {/* Next arrow */}
                      <button
                        onClick={nextImage}
                        disabled={isLastImage}
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 opacity-100 transition-all duration-300 z-10 ${
                          isLastImage 
                            ? 'bg-gray-600/50 text-gray-400 cursor-not-allowed' 
                            : 'bg-black/50 hover:bg-black/70 text-white cursor-pointer'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {/* Image indicators */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-100 transition-all duration-300">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
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

      {/* Connection SVG to next node - only show on large screens */}
      {!isLast && nextProject && (
        <div className="absolute pointer-events-none overflow-visible w-full hidden lg:block" style={{
          bottom: '-145px',
          left: '0',
          zIndex: 5,
          height: '160px'
        }}>
          <svg 
            className="absolute overflow-visible w-full" 
            height="160"
            viewBox="0 0 800 160"
            preserveAspectRatio="none"
          >
            <path
              d={
                // Current node is left, next is right
                isLeft && nextProject.position === 'right' 
                  ? "M188 0L188 20L188,60Q188,80 208,80L592,80Q612,80 612,100L612 140L612 160"
                // Current node is right, next is left  
                : !isLeft && nextProject.position === 'left'
                  ? "M612 0L612 20L612,60Q612,80 592,80L208,80Q188,80 188,100L188 140L188 160"
                // Same side connections (both left-left and right-right) - simple straight down
                  : isLeft 
                    ? "M188 0L188 160"
                    : "M612 0L612 160"
              }
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="1.5"
              strokeDasharray="3,2"
              className=""
              style={{
                filter: 'drop-shadow(0 0 12px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))'
              }}
            />
          </svg>
        </div>
      )}
      
      {/* Simple vertical connection line for smaller screens */}
      {!isLast && (
        <div className="absolute pointer-events-none w-full flex justify-center lg:hidden" style={{
          bottom: '-400px',
          left: '0',
          zIndex: 0,
          height: '800px'
        }}>
          <svg 
            className="w-4 h-full" 
            viewBox="0 0 4 800"
            preserveAspectRatio="none"
          >
            <path
              d="M2 0L2 800"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="0.4"
              strokeDasharray="4,3"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 4px rgba(255, 255, 255, 0.3))'
              }}
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ProjectNode;