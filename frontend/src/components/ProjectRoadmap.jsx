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
      description: "AI-powered personal project management assistant. Describe your vision and get a end-to-end implementation plan tailored to your needs and experience level. This plan can be edited and expanded overtime as your project evolves.",
      tags: ["React", "FastAPI", "PostgreSQL", "OpenAI API"],
      gradient: "from-purple-500 to-pink-500",
      position: "right",
      images: ["roadmap/roadmap-light.png", "roadmap/roadmap-dark.png"],
      underConstruction: true,
      arrowLabel: "ComingSoon",
      prjectLink: null
    },
    {
      id: 2,
      title: "TalentBridge",
      description: "Platform for connecting EB1 and EB2 visa holders with US based employers. Currently in the proposal stage, with 70+ EB1/EB2 visa holders agreeing to join the platform on launch.",
      tags: ["React", "Django", "PostgreSQL"],
      gradient: "from-pink-500 to-red-500",
      position: "left",
      images: ["bridge/bridge-1.png"],
      underConstruction: true,
      arrowLabel: "ComingSoon",
      prjectLink: null
    },
    {
      id: 3,
      title: "Investor Tinder",
      description: "Platform for connecting startups with potential investors. My first big full-stack web application, built while learning frontend and backend development.",
      tags: ["React", "Express", "MongoDB"],
      gradient: "from-red-500 to-orange-500",
      position: "right",
      images: ["invest/invest-1.png", "invest/invest-2.png", "invest/invest-3.png", "invest/invest-4.png", "invest/invest-5.png"],
      arrowLabel: "ClickMe",
      prjectLink: "https://github.com/hpitta26/Investor-Tinder-MERN"
    },
    {
      id: 4,
      title: "Simple Machine",
      description: "Semester long project for CPSC 213. Implemented a simple CPU simulator which supports uploading and running SM213 assembly code.",
      tags: ["Java Swing", "SM213 Assembly"],
      gradient: "from-orange-500 to-yellow-500",
      position: "left",
      images: ["sm/sm-2.png", "sm/sm-1.png"],
      arrowLabel: "ClickMe",
      prjectLink: null
    },
    {
      id: 5,
      title: "Expense Manager",
      description: "Semester long project for CPSC 210. Implemented a desktop application for managing personal finances, with features such as expense tracking, budgeting, and data visualization.",
      tags: ["Java Swing", "JUnit", "JFreeChart"],
      gradient: "from-yellow-500 to-green-500",
      position: "right",
      images: ["expense/expense-1.png"],
      arrowLabel: "ClickMe",
      prjectLink: "https://github.com/hpitta26/Personal_Expense_Manager_Project-JavaSwing"
    }
  ];

  const group = [
    {
      id: 1,
      title: "Euleris AI",
      description: "Tasked with R&D and buliding out a problem agnostic AI Competitive Programming Tutor. Worked on full-stack tutor feature as well as Multi-Agent system which handles user interaction, quality assurance, etc. Worked on the project end-to-end from ideation to deployment.",
      tags: ["React", "FastAPI", "Django", "PostgreSQL", "OpenAI API", "LangChain"],
      gradient: "from-purple-500 to-pink-500",
      position: "right",
      role: "Software/AI Engineer Intern",
      images: ["euleris/severus-rsvp.png"],
      underConstruction: true,
      arrowLabel: "SecretProject",
      prjectLink: null
    },
    {
      id: 2,
      title: "PokerBots FIU",
      description: "Platform for running competitions for the annual FIU PokerBots hackathon. Platform supports a plugged-in game engine with customizable rule sets. Competitants iteratively build and test their bots on the platform with goal of winning the final competition.",
      tags: ["Flask", "RabbitMQ", "Celery", "PostgreSQL", "MinIO"],
      gradient: "from-pink-500 to-red-500",
      position: "left",
      role: "President, Server Lead",
      images: ["pokerbots/pokerbots-1.png", "pokerbots/pokerbots-2.png", "pokerbots/pokerbots-3.png", "pokerbots/pokerbots-4.png", "pokerbots/pokerbots-splash-1.png", "pokerbots/pokerbots-splash-2.png"],
      arrowLabel: "ClickMe",
      prjectLink: "https://github.com/FIU-PokerBots"
    },
    {
      id: 3,
      title: "INIT Build FIU - GatherU",
      description: "Led a team of 11 students to build a social media style university event discovery page, with gamification to encourage student engagement.",
      tags: ["React", "Django", "PostgreSQL", "MinIO"],
      gradient: "from-red-500 to-orange-500",
      position: "right",
      role: "Project Lead",
      images: ["gatheru/gatheru-2.png", "gatheru/gatheru-3.png", "gatheru/gatheru-4.png", "gatheru/gatheru-5.png", "gatheru/gatheru-6.png", "gatheru/gatheru-admin-1.png", "gatheru/gatheru-admin-2.png", "gatheru/gatheru-admin-3.png", "gatheru/gatheru-admin-4.png", "gatheru/gatheru-1.png"],
      arrowLabel: "ClickMe",
      prjectLink: "https://github.com/hpitta26/club-event-hub"
    },
    {
      id: 4,
      title: "INIT Build FIU - CashCore",
      description: "Backend Lead of a personal finance management web application. Integrated with Plaid API to allow users to link their bank accounts and view transactions, budgets, and financial insights all in one place.",
      tags: ["Next.js", "Django", "PostgreSQL", "Plaid API"],
      gradient: "from-orange-500 to-yellow-500",
      position: "right",
      role: "Backend Lead",
      images: ["cashcore/cashcore-1.png", "cashcore/cashcore-2.png", "cashcore/cashcore-3.png"],
      arrowLabel: "ClickMe",
      prjectLink: "https://github.com/Ceaseless04/Cashcore"
    }
  ];

  const hackathon = [
    {
      id: 1,
      title: "FinTerra",
      description: "Financial dashboard with Elowen, your multi-agent financial advisor democratizing institutional-quality financial planning. Expert guidance that traditionally costs thousands annually, now accessible through AI-powered portfolio analysis and personalized recommendations.",
      tags: ["React", "FastAPI", "Google ADK", "PostgreSQL", "Vultr VPS"],
      gradient: "from-blue-500 to-purple-500",
      position: "right",
      role: "1st place out of 188 projects at KnightHacks 2025",
      images: ["finterra/finterra-3.png", "finterra/finterra-2.png", "finterra/finterra-1.png"],
      arrowLabel: "ClickMe",
      prjectLink: "https://finterras.com"
    },
    {
      id: 2,
      title: "Translate Flow",
      description: "Multi-agent translation system that mimics professional translation workflows (translator-reviewer pattern). Provides context aware translations by identifying UI element groups (e.g. header and its paragraphs) while also preserving brand voice and avoiding translation of brand terms.",
      tags: ["React", "FastAPI", "Google ADK", "SQLite"],
      gradient: "from-purple-500 to-pink-500",
      position: "left",
      role: "Placed top 10 of 245 projects at ShellHacks 2025",
      images: ["translateflow/image.png"],
      arrowLabel: "ClickMe",
      prjectLink: "https://github.com/hpitta26/Shellhacks-2025"
    }
  ];

  // Get current data based on active section
  const getCurrentData = () => {
    switch(activeSection) {
      case 'group': return group;
      case 'hackathon': return hackathon;
      default: return solo;
    }
  };

  // Get section title
  const getSectionTitle = () => {
    switch(activeSection) {
      case 'group': return 'My Group Projects';
      case 'hackathon': return 'My Hackathon Projects';
      default: return 'My Solo Projects';
    }
  };

  return (
    <section id="projects" className="relative min-h-screen py-20 bg-[#1a0836]">

      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16">
          {/* Section Slider */}
          <div className="flex justify-center mb-8">
            <div className=" rounded-lg border border-[#b098d0] p-2 pr-3 relative">
              {/* Animated sliding button (same as Back to Top button) */}
              <div 
                className="absolute top-1 bottom-1 bg-white text-[#7147ab] font-semibold rounded-lg border border-[#b098d0] transition-all duration-300 ease-out transform cursor-pointer"
                style={{
                  width: 'calc(33.333% - 4px)',
                  left: activeSection === 'solo' ? '4px' : activeSection === 'group' ? 'calc(33.333% + 0px)' : 'calc(66.666% + 0px)'
                }}
              >
                <div className="h-full border-b-3 border-b-[#f2ccd7] rounded-[7px]"></div>
              </div>
              
              <div className="flex relative z-10">
                {['solo', 'group', 'hackathon'].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`px-4 py-3 rounded-[7px] text-sm font-semibold transition-all duration-300 capitalize transform cursor-pointer ${
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