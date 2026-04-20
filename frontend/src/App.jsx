import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cgs-presentation" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
