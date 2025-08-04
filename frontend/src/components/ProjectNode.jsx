import React from 'react';

const ProjectNode = ({ project, isLast, nextProject }) => {
  const isLeft = project.position === 'left';
  
  return (
    <div className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
      {/* Project Description - Below node on small screens */}
      <div className={`${isLeft ? 'lg:order-2 lg:text-right' : 'lg:order-1'} order-2 z-10 text-center lg:text-left ${isLeft ? 'lg:text-right' : ''}`}>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>
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
      </div>

      {/* Larger Project Node */}
      <div className={`${isLeft ? 'lg:order-1' : 'lg:order-2'} order-1 flex justify-center relative`}>
        <div className="relative">
          {/* Top connection point */}
          {/* <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-2.5 bg-white rounded-t-sm border-1 border-white shadow-lg z-20"></div> */}
          
          {/* Bigger Node card with outer frame - responsive width starting at 600px */}
          <div className="w-[600px] max-w-[calc(100vw-4rem)] sm:max-w-[calc(100vw-4rem)] lg:max-w-[600px] h-95 relative z-5">
            {/* Outer Frosted Glass Frame */}
            <div className="w-full h-full bg-[#33204a] rounded-3xl p-3 shadow-2xl border border-[#5b4c6e]">
              {/* Inner Glass Card */}
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
          bottom: '-250px',
          left: '0',
          zIndex: 0,
          height: '500px'
        }}>
          <svg 
            className="w-4 h-full" 
            viewBox="0 0 4 80"
            preserveAspectRatio="none"
          >
            <path
              d="M2 0L2 80"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="0.4"
              strokeDasharray="0.6,0.4"
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