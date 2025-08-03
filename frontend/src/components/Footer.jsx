import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-purple-400">Henrique Pitta</h3>
            <p className="text-gray-300 leading-relaxed">
              Software Engineer passionate about creating innovative solutions and building the future of web technology.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-purple-400">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-center">
                <span className="mr-2">📧</span>
                henrique.pitta@email.com
              </p>
              <p className="text-gray-300 flex items-center">
                <span className="mr-2">📱</span>
                +1 (555) 123-4567
              </p>
              <p className="text-gray-300 flex items-center">
                <span className="mr-2">📍</span>
                Somewhere
              </p>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-purple-400">Connect</h4>
            <div className="flex flex-wrap gap-3">
              <a 
                href="#" 
                className="px-4 py-2 bg-gray-800 hover:bg-purple-600 rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                LinkedIn
              </a>
              <a 
                href="#" 
                className="px-4 py-2 bg-gray-800 hover:bg-purple-600 rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                GitHub
              </a>
              <a 
                href="#" 
                className="px-4 py-2 bg-gray-800 hover:bg-purple-600 rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; 2024 Henrique Pitta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;