import React from 'react';
import Navbar from '../components/Navbar';

const HOSTED_VIDEO_URL = 'https://cdn.henriquepitta.com/Final-Recording2.mp4';

function VideoPage() {
  return (
    <div className="min-h-screen bg-purple-600 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 px-4 pb-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-white text-3xl font-bold mb-6">CGS-3095 Presentation</h1>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={HOSTED_VIDEO_URL}
              title="CGS-3095 Presentation"
              allowFullScreen
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default VideoPage;
