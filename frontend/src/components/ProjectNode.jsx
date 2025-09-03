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
      <div className={`${isLeft ? 'lg:order-2 lg:text-right' : 'lg:order-1'} order-2 z-10 text-center lg:text-left ${isLeft ? 'lg:text-right' : ''}`}>
        <h3 className="text-3xl font-bold text-white mb-2">
          {project.title}
        </h3>
        {project.role && (
          <p className="text-purple-300 text-sm font-medium mb-4">
            {project.role}
          </p>
        )}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {project.description}
        </p>
        <div className={`flex flex-wrap gap-1 justify-center ${isLeft ? 'lg:justify-end' : 'lg:justify-start'}`}>
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Under Construction Banner */}
        {project.underConstruction && (
          <div className={`mt-4 flex ${isLeft ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
            <div className="bg-yellow-500/90 backdrop-blur-sm text-black px-3 py-2 rounded-lg border border-yellow-400 shadow-lg">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold">Under Construction</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Larger Project Node */}
      <div className={`${isLeft ? 'lg:order-1' : 'lg:order-2'} order-1 flex justify-center relative`}>
        <div className="relative">
          {/* Top connection point */}
          {/* <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-2.5 bg-white rounded-t-sm border-1 border-white shadow-lg z-20"></div> */}
          
          {/* Bigger Node card with outer frame - responsive width with maintained aspect ratio */}
          <div className="w-full max-w-[600px] min-w-[320px] relative z-5" style={{aspectRatio: '600/380'}}>
            {/* Outer Frosted Glass Frame */}
            <div className="w-full h-full bg-[#33204a] rounded-3xl p-3 shadow-2xl border border-[#5b4c6e]">
              {/* Inner Glass Card */}
              {project.images && project.images.length > 0 ? (
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
                        className={`absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 ${
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
                        className={`absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 ${
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
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
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
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${project.gradient} bg-opacity-20 backdrop-blur-md rounded-lg border border-white/30 overflow-hidden`} style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
                  <div className="relative z-10 p-8 h-full">
                    <div className="flex items-center justify-between h-full">
                      <div className="flex-1 flex items-center justify-center">
                        <div className="w-48 h-32 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-lg">🎯</span>
                            </div>
                            <span className="text-white/60 text-xs">Project Demo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom connection point */}
          {/* {!isLast && (
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2.5 bg-white rounded-b-sm border-1 border-white shadow-lg z-20"></div>
          )} */}
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