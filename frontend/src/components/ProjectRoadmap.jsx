import React from 'react';
import ProjectNode from './ProjectNode';

const ProjectRoadmap = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, payment processing, and inventory management.",
      tags: ["React", "Node.js", "MongoDB"],
      gradient: "from-purple-500 to-pink-500",
      position: "right"
    },
    {
      id: 2,
      title: "Data Analytics Dashboard",
      description: "Real-time data visualization dashboard for business intelligence. Built with D3.js and Python Flask, featuring interactive charts and custom reporting.",
      tags: ["D3.js", "Python", "Flask"],
      gradient: "from-pink-500 to-red-500",
      position: "left"
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "Cross-platform mobile application for fitness tracking and workout planning. Built with React Native and Firebase for real-time synchronization.",
      tags: ["React Native", "Firebase", "TypeScript"],
      gradient: "from-red-500 to-orange-500",
      position: "right"
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, file sharing, and team communication features. Built with Vue.js and Socket.io.",
      tags: ["Vue.js", "Socket.io", "PostgreSQL"],
      gradient: "from-orange-500 to-yellow-500",
      position: "left"
    },
    {
      id: 5,
      title: "AI Chatbot",
      description: "Intelligent customer service chatbot powered by machine learning. Integrates with multiple platforms and provides personalized responses.",
      tags: ["Python", "TensorFlow", "NLP"],
      gradient: "from-yellow-500 to-green-500",
      position: "right"
    },
    {
      id: 6,
      title: "Weather Application",
      description: "Progressive web app for weather forecasting with location-based services. Features include 7-day forecasts, radar maps, and weather alerts.",
      tags: ["PWA", "JavaScript", "Weather API"],
      gradient: "from-green-500 to-teal-500",
      position: "left"
    },
    {
      id: 7,
      title: "Social Media Platform",
      description: "Full-featured social networking platform with user profiles, posts, comments, and real-time messaging. Built with Angular and .NET Core.",
      tags: ["Angular", ".NET Core", "SignalR"],
      gradient: "from-teal-500 to-blue-500",
      position: "right"
    },
    {
      id: 8,
      title: "Learning Management System",
      description: "Comprehensive educational platform for online learning. Features include course creation, student progress tracking, and interactive assessments.",
      tags: ["Laravel", "Vue.js", "MySQL"],
      gradient: "from-blue-500 to-indigo-500",
      position: "left"
    },
    {
      id: 9,
      title: "Inventory Management System",
      description: "Enterprise-level inventory tracking solution with barcode scanning, automated reordering, and comprehensive reporting capabilities.",
      tags: ["Java", "Spring Boot", "Oracle"],
      gradient: "from-indigo-500 to-purple-500",
      position: "right"
    },
    {
      id: 10,
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-currency support, transaction history, and integration with major blockchain networks.",
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