import React, { useState, useEffect, useMemo } from 'react';
import ProjectNode from './ProjectNode';
import { makeMotes } from '../lib/atmosphere';

const SECTIONS = ['solo', 'group', 'hackathon'];

const ProjectRoadmap = () => {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('projectRoadmapSection') || 'solo';
    }
    return 'solo';
  });

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
      prjectLink: null
    },
    {
      id: 3,
      title: "Simple Machine",
      description: "Semester long project for CPSC 213. Implemented a simple CPU simulator which supports uploading and running SM213 assembly code.",
      tags: ["Java Swing", "SM213 Assembly"],
      gradient: "from-orange-500 to-yellow-500",
      position: "right",
      images: ["sm/sm-2.png", "sm/sm-1.png"],
      prjectLink: null
    },
    {
      id: 4,
      title: "Expense Manager",
      description: "Semester long project for CPSC 210. Implemented a desktop application for managing personal finances, with features such as expense tracking, budgeting, and data visualization.",
      tags: ["Java Swing", "JUnit", "JFreeChart"],
      gradient: "from-yellow-500 to-green-500",
      position: "left",
      images: ["expense/expense-1.png"],
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
      prjectLink: "https://github.com/hpitta26/Shellhacks-2025"
    }
  ];

  const getCurrentData = () => {
    switch(activeSection) {
      case 'group': return group;
      case 'hackathon': return hackathon;
      default: return solo;
    }
  };

  const getSectionTitle = () => {
    switch(activeSection) {
      case 'group': return 'My Group Projects';
      case 'hackathon': return 'My Hackathon Projects';
      default: return 'My Solo Projects';
    }
  };

  const motes = useMemo(() => makeMotes(20, 74123), []);

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden py-24"
      style={{
        background:
          'linear-gradient(180deg, #1a0836 0%, #170a2c 14%, #120720 42%, #0d0518 72%, #0b0418 100%)'
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {motes.map((mote) => (
          <span
            key={mote.id}
            className="mote"
            style={{
              left: mote.left,
              top: mote.top,
              width: mote.size,
              height: mote.size,
              '--mote-peak': mote.peak,
              '--mote-x': mote.drift,
              opacity: 0,
              animation: `moteDrift ${mote.duration} linear ${mote.delay} infinite`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16">
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-[340px] rounded-lg border border-white/12 bg-white/[0.03] p-1.5">
            <div
              className="pointer-events-none absolute top-1.5 bottom-1.5 rounded-lg border border-ember/40 bg-[#f7efe0] transition-[left] duration-300 ease-out"
              style={{
                width: 'calc((100% - 12px) / 3)',
                left: `calc(6px + ${SECTIONS.indexOf(activeSection)} * (100% - 12px) / 3)`,
                boxShadow: '0 2px 10px rgba(11,4,24,0.6)'
              }}
              aria-hidden="true"
            >
              <div className="h-full rounded-[7px] border-b-[3px] border-b-gilt/70"></div>
            </div>

            <div className="relative z-10 grid grid-cols-3">
              {SECTIONS.map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  aria-pressed={activeSection === section}
                  className={`cursor-pointer rounded-lg py-3 text-sm font-semibold capitalize transition-colors duration-300 ${
                    activeSection === section
                      ? 'text-grape'
                      : 'text-star/60 hover:text-star'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-28">
          <h2
            className="font-display font-bold text-white mb-4"
            style={{
              fontSize: 'clamp(2.1rem, 6vw, 3.4rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05
            }}
          >
            {getSectionTitle()}
          </h2>
          <p className="mx-auto max-w-xl text-lg font-light leading-relaxed text-star/60">
            Below are some projects I'm proud of working on...
          </p>
        </div>

        <div className="relative">
          {getCurrentData().map((item, index) => (
            <div key={`${activeSection}-${item.id}`} className="relative mb-36 last:mb-0">
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
