import React from 'react';

const ProjectNode = ({ project, isLast, nextProject }) => {
  const isLeft = project.position === 'left';
  
  return (
    <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Project Description - No container styling */}
      <div className={`${isLeft ? 'md:order-2 md:text-right' : 'md:order-1'} z-10`}>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {project.description}
        </p>
        <div className={`flex flex-wrap gap-1 ${isLeft ? 'justify-end' : 'justify-start'}`}>
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
      <div className={`${isLeft ? 'md:order-1' : 'md:order-2'} flex justify-center relative`}>
        <div className="relative">
          {/* Top connection point */}
          {/* <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-2.5 bg-white rounded-t-sm border-1 border-white shadow-lg z-20"></div> */}
          
          {/* Bigger Node card with outer frame */}
          <div className="w-[600px] h-95 relative z-5">
            {/* Outer Frosted Glass Frame */}
            <div className="w-full h-full bg-[#33204a] rounded-3xl p-3 shadow-2xl border border-[#5b4c6e]">
              {/* Inner Glass Card */}
              <div className={`w-full h-full bg-gradient-to-br ${project.gradient} bg-opacity-20 backdrop-blur-md rounded-lg border border-white/30 overflow-hidden`} style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
              <div className="relative z-10 p-8 h-full">
                <div className="flex items-center justify-between h-full">
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 border-2 border-white/30">
                      <span className="text-2xl font-bold text-white">{project.id}</span>
                    </div>
                    <h4 className="text-white font-bold text-2xl mb-3">{project.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-xs">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-white/20 text-white text-xs rounded-full border border-white/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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

      {/* Connection SVG to next node */}
      {!isLast && nextProject && (
        <div className="absolute pointer-events-none overflow-visible w-full" style={{
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
    </div>
  );
};

export default ProjectNode;