import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectRoadmap from './components/ProjectRoadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-purple-600">
      <Navbar />
      <Hero />
      <ProjectRoadmap />
      <Footer />
    </div>
  );
}

export default App;