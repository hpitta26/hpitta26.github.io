import React from 'react';
import Hero from './components/Hero';
import ProjectRoadmap from './components/ProjectRoadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectRoadmap />
      <Footer />
    </div>
  );
}

export default App;