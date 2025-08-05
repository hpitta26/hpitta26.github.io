import React, { useState, useEffect } from 'react';
import ProjectNode from './ProjectNode';

const ProjectRoadmap = () => {
  // Initialize state from localStorage or default to 'solo'
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('projectRoadmapSection') || 'solo';
    }
    return 'solo';
  });

  // Save to localStorage whenever activeSection changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('projectRoadmapSection', activeSection);
    }
  }, [activeSection]);

  const solo = [
    {
      id: 1,
      title: "Roadmap AI",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["React", "FastAPI", "PostgreSQL", "OpenAI API"],
      gradient: "from-purple-500 to-pink-500",
      position: "right",
      images: ["roadmap/roadmap-light.png", "roadmap/roadmap-dark.png"],
      underConstruction: true
    },
    {
      id: 2,
      title: "TalentBridge",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["React", "Django", "SQLite"],
      gradient: "from-pink-500 to-red-500",
      position: "left",
      images: ["bridge/bridge-1.png"],
      underConstruction: true
    },
    {
      id: 3,
      title: "Investor Tinder",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["React", "Express", "MongoDB"],
      gradient: "from-red-500 to-orange-500",
      position: "right",
      images: ["invest/invest-1.png", "invest/invest-2.png", "invest/invest-3.png", "invest/invest-4.png", "invest/invest-5.png"]
    },
    {
      id: 4,
      title: "Simple Machine",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["Java Swing", "SM213 Assembly"],
      gradient: "from-orange-500 to-yellow-500",
      position: "left",
      images: ["sm/sm-2.png", "sm/sm-1.png"]
    },
    {
      id: 5,
      title: "Expense Manager",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["Java Swing", "JUnit", "JFreeChart"],
      gradient: "from-yellow-500 to-green-500",
      position: "right",
      images: ["expense/expense-1.png"]
    }
  ];

  const group = [
    {
      id: 1,
      title: "Euleris AI",
      description: "This is a short description about the group project. It explains what the project does and highlights the main technologies used.",
      tags: ["React", "FastAPI", "Django", "PostgreSQL", "OpenAI API", "LangChain"],
      gradient: "from-purple-500 to-pink-500",
      position: "right",
      role: "Software/AI Engineer Intern",
      images: ["euleris/severus-rsvp.png"],
      underConstruction: true
    },
    {
      id: 2,
      title: "PokerBots FIU",
      description: "This is a short description about the group project. It explains what the project does and highlights the main technologies used.",
      tags: ["Flask", "RabbitMQ", "Celery", "PostgreSQL", "MinIO"],
      gradient: "from-pink-500 to-red-500",
      position: "left",
      role: "President, Server Lead",
      images: ["pokerbots/pokerbots-1.png", "pokerbots/pokerbots-2.png", "pokerbots/pokerbots-3.png", "pokerbots/pokerbots-4.png", "pokerbots/pokerbots-splash-1.png", "pokerbots/pokerbots-splash-2.png"]
    },
    {
      id: 3,
      title: "INIT Build FIU - GatherU",
      description: "This is a short description about the group project. It explains what the project does and highlights the main technologies used.",
      tags: ["React", "Django", "PostgreSQL", "MinIO"],
      gradient: "from-red-500 to-orange-500",
      position: "right",
      role: "Project Lead",
      images: ["gatheru/gatheru-2.png", "gatheru/gatheru-3.png", "gatheru/gatheru-4.png", "gatheru/gatheru-5.png", "gatheru/gatheru-6.png", "gatheru/gatheru-admin-1.png", "gatheru/gatheru-admin-2.png", "gatheru/gatheru-admin-3.png", "gatheru/gatheru-admin-4.png", "gatheru/gatheru-1.png"]
    },
    {
      id: 4,
      title: "INIT Build FIU - CashCore",
      description: "This is a short description about the group project. It explains what the project does and highlights the main technologies used.",
      tags: ["Next.js", "Django", "PostgreSQL", "Plaid API"],
      gradient: "from-orange-500 to-yellow-500",
      position: "right",
      role: "Backend Lead",
      images: ["cashcore/cashcore-1.png", "cashcore/cashcore-2.png", "cashcore/cashcore-3.png"]
    },
    // {
    //   id: 5,
    //   title: "Dawn UBC",
    //   description: "This is a short description about the group project. It explains what the project does and highlights the main technologies used.",
    //   tags: ["React Native", "Firebase"],
    //   gradient: "from-orange-500 to-yellow-500",
    //   position: "left",
    //   role: "Frontend Developer",
    //   images: ["dawn/dawn-1.png"]
    // },
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