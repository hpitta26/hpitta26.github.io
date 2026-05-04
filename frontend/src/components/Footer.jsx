import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { HiOutlineArrowUp } from "react-icons/hi";


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="relative bg-[#1a0836] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Separator */}
        <div className="border-t border-[#46375d] border-dashed mb-14"></div>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-12 mb-14">
          {/* Email */}
          <a 
            href="mailto:business@henriquepitta.com" 
            className="text-gray-400 hover:text-white transition-colors duration-200 transform"
            title="Email"
          >
            <MdEmail className="w-9 h-9" />
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/hpitta26" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 transform"
            title="GitHub"
          >
            <IoLogoGithub className="w-9 h-9" />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/henrique-pitta-19594b249/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200 transform"
            title="LinkedIn"
          >
            <IoLogoLinkedin className="w-9 h-9" />
          </a>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center">
            <button 
              onClick={scrollToTop}
              className="bg-white text-[#7147ab] font-semibold rounded-lg border border-[#b098d0] transition-all duration-300 transform cursor-pointer"
            >
            <div className='flex items-center space-x-2 px-6 py-3 border-b-3 border-b-[#f2ccd7] rounded-[7px]'>
              <HiOutlineArrowUp className="w-6 h-6" />
              <span>Back to Top</span>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;