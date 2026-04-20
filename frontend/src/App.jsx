import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <BrowserRouter basename="/cgs-presentation">
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
