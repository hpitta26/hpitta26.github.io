import React, { useState } from 'react';
import ProjectNode from './ProjectNode';

const ProjectRoadmap = () => {
  const [activeSection, setActiveSection] = useState('solo');

  const solo = [
    {
      id: 1,
      title: "Roadmap AI",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["React", "Node.js", "MongoDB"],
      gradient: "from-purple-500 to-pink-500",
      position: "right",
      role: "Full Stack Developer"
    },
    {
      id: 2,
      title: "TalentBridge",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["D3.js", "Python", "Flask"],
      gradient: "from-pink-500 to-red-500",
      position: "left",
      role: "AI/ML Engineer"
    },
    {
      id: 3,
      title: "Investor Tinder",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["React Native", "Firebase", "TypeScript"],
      gradient: "from-red-500 to-orange-500",
      position: "right",
      role: "Mobile Developer"
    },
    {
      id: 4,
      title: "Simple Machine",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["Vue.js", "Socket.io", "PostgreSQL"],
      gradient: "from-orange-500 to-yellow-500",
      position: "left",
      role: "Full Stack Developer"
    },
    {
      id: 5,
      title: "Expense Manager",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["Python", "TensorFlow", "NLP"],
      gradient: "from-yellow-500 to-green-500",
      position: "right",
      role: "AI/ML Engineer"
    }
  ];

  const group = [
    {
      id: 1,
      title: "Euleris AI",
      description: "This is a short description about the group project. It explains what the project does and highlights the main technologies used.",
      tags: ["React", "TypeScript", "AWS"],
      gradient: "from-purple-500 to-pink-500",
      position: "right",
      role: "Software Engineer"
    },
    {
      id: 2,
      title: "PokerBots FIU",
      description: "This is a short description about the group project. It explains what the project does and highlights the main technologies used.",
      tags: ["Python", "Django", "PostgreSQL"],
      gradient: "from-pink-500 to-red-500",
      position: "left",
      role: "Backend Developer"
    },
    {
      id: 3,
      title: "INIT Build FIU",
      description: "This is a short description about the group project. It explains what the project does and highlights the main technologies used.",
      tags: ["HTML", "CSS", "JavaScript"],
      gradient: "from-red-500 to-orange-500",
      position: "right",
      role: "Web Developer"
    },
    {
      id: 4,
      title: "GatherU",
      description: "This is a short description about the group project. It explains what the project does and highlights the main technologies used.",
      tags: ["React", "Firebase", "Figma"],
      gradient: "from-orange-500 to-yellow-500",
      position: "left",
      role: "UI/UX Developer"
    },
    {
      id: 5,
      title: "CashCore",
      description: "This is a short description about the group project. It explains what the project does and highlights the main technologies used.",
      tags: ["Vue.js", "Socket.io", "PostgreSQL"],
      gradient: "from-yellow-500 to-green-500",
      position: "right",
      role: "Full Stack Developer"
    }
  ];

  // Get current data based on active section
  const getCurrentData = () => {
    switch(activeSection) {
      case 'group': return group;
      default: return solo;
    }
  };

  // Get section title
  const getSectionTitle = () => {
    switch(activeSection) {
      case 'group': return 'My Group Projects';
      default: return 'My Solo Projects';
    }
  };

  return (
    <section id="projects" className="relative min-h-screen py-20 bg-[#1a0836]">

      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16">
                  {/* Section Slider */}
          <div className="flex justify-center mb-8">
            <div className=" rounded-lg border border-[#b098d0] p-1 relative">
              {/* Animated sliding button (same as Back to Top button) */}
              <div 
                className="absolute top-1 bottom-1 bg-white text-[#7147ab] font-semibold rounded-lg border border-[#b098d0] transition-all duration-300 ease-out transform cursor-pointer"
                style={{
                  width: 'calc(50% - 4px)',
                  left: activeSection === 'solo' ? '4px' : 'calc(50% + 0px)'
                }}
              >
                <div className="h-full border-b-3 border-b-[#f2ccd7] rounded-[7px]"></div>
              </div>
              
              <div className="flex relative z-10">
                {['solo', 'group'].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`px-6 py-3 rounded-[7px] text-sm font-semibold transition-all duration-300 capitalize transform cursor-pointer ${
                      activeSection === section
                        ? 'text-[#7147ab]'
                        : 'text-white hover:text-gray-200'
                    }`}
                    style={{ width: '90px' }}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          </div>

        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {getSectionTitle()}
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Explore the depths of my development journey through these interconnected experiences
          </p>
        </div>

        <div className="relative">
          {getCurrentData().map((item, index) => (
            <div key={`${activeSection}-${item.id}`} className="relative mb-32 last:mb-0">
              <ProjectNode 
                project={item}
                isLast={index === getCurrentData().length - 1}
                nextProject={index < getCurrentData().length - 1 ? getCurrentData()[index + 1] : null}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectRoadmap;