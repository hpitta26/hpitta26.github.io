import React from 'react';

const ProjectNode = ({ project, isLast, nextProject }) => {
  const isLeft = project.position === 'left';
  
  return (
    <div className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Project Description - No container styling */}
      <div className={`${isLeft ? 'md:order-2 md:text-right' : 'md:order-1'} z-10`}>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
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
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-2.5 bg-white rounded-t-sm border-1 border-white shadow-lg z-20"></div>
          
          {/* Bigger Node card with sleek white frame */}
          <div className="w-96 h-64 relative">
            <div className={`w-full h-full bg-gradient-to-br ${project.gradient} rounded-3xl shadow-2xl border-2 border-white overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
                    <span className="text-3xl font-bold text-white">{project.id}</span>
                  </div>
                  <h4 className="text-white font-bold text-xl">{project.title}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom connection point */}
          {!isLast && (
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2.5 bg-white rounded-b-sm border-1 border-white shadow-lg z-20"></div>
          )}
        </div>
      </div>

      {/* Connection SVG to next node */}
      {!isLast && nextProject && (
        <div className="absolute pointer-events-none overflow-visible w-full" style={{
          bottom: '-16px',
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
                  ? "M200 0L200 20L200,60Q200,80 220,80L580,80Q600,80 600,100L600 140L600 160"
                // Current node is right, next is left  
                : !isLeft && nextProject.position === 'left'
                  ? "M600 0L600 20L600,60Q600,80 580,80L220,80Q200,80 200,100L200 140L200 160"
                // Current node is left, next is also left
                : isLeft && nextProject.position === 'left'
                  ? "M200 0L200 20L200,60Q200,80 180,80L180,120Q180,140 200,140L200 160"
                // Current node is right, next is also right
                  : "M600 0L600 20L600,60Q600,80 620,80L620,120Q620,140 600,140L600 160"
              }
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="3"
              strokeDasharray="4,2"
              className="drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(139, 92, 246, 0.5))'
              }}
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ProjectNode;