import React from 'react';
import ProjectNode from './ProjectNode';

const ProjectRoadmap = () => {
  const projects = [
    {
      id: 1,
      title: "Project Title",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["React", "Node.js", "MongoDB"],
      gradient: "from-purple-500 to-pink-500",
      position: "right"
    },
    {
      id: 2,
      title: "Project Title",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["D3.js", "Python", "Flask"],
      gradient: "from-pink-500 to-red-500",
      position: "left"
    },
    {
      id: 3,
      title: "Project Title",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["React Native", "Firebase", "TypeScript"],
      gradient: "from-red-500 to-orange-500",
      position: "right"
    },
    {
      id: 4,
      title: "Project Title",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["Vue.js", "Socket.io", "PostgreSQL"],
      gradient: "from-orange-500 to-yellow-500",
      position: "left"
    },
    {
      id: 5,
      title: "Project Title",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["Python", "TensorFlow", "NLP"],
      gradient: "from-yellow-500 to-green-500",
      position: "right"
    },
    {
      id: 6,
      title: "Project Title",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["PWA", "JavaScript", "Weather API"],
      gradient: "from-green-500 to-teal-500",
      position: "left"
    },
    {
      id: 7,
      title: "Project Title",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["Angular", ".NET Core", "SignalR"],
      gradient: "from-teal-500 to-blue-500",
      position: "right"
    },
    {
      id: 8,
      title: "Project Title",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["Laravel", "Vue.js", "MySQL"],
      gradient: "from-blue-500 to-indigo-500",
      position: "left"
    },
    {
      id: 9,
      title: "Project Title",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["Java", "Spring Boot", "Oracle"],
      gradient: "from-indigo-500 to-purple-500",
      position: "right"
    },
    {
      id: 10,
      title: "Project Title",
      description: "This is a short description about the project. It explains what the project does and highlights the main technologies used.",
      tags: ["Solidity", "Web3.js", "React"],
      gradient: "from-purple-500 to-pink-500",
      position: "left"
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen py-20 bg-[#1a0836]">

      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Explore the depths of my development journey through these interconnected projects
          </p>
        </div>

        <div className="relative">
          {projects.map((project, index) => (
            <div key={project.id} className="relative mb-32 last:mb-0">
              <ProjectNode 
                project={project}
                isLast={index === projects.length - 1}
                nextProject={index < projects.length - 1 ? projects[index + 1] : null}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectRoadmap;