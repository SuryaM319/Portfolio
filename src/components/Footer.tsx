import React from 'react';
import { GithubIcon, Linkedin, Mail, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 py-8 border-t border-dark-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and brief */}
          <div>
            <a 
              href="#home" 
              className="text-xl font-bold text-white flex items-center mb-4 glow-on-hover"
            >
              <Zap size={24} className="mr-2 text-primary" />
              <span className="glow-text">S<span className="text-primary">.</span>Prakash</span>
            </a>
            <p className="text-gray-400 mb-4">
              Mechanical Engineer and Robotics Enthusiast from Rajamahendravaram, Andhra Pradesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-400 hover:text-primary transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get In Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a 
                  href="mailto:suryaprakash23319@gmail.com" 
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  suryaprakash23319@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Linkedin size={18} className="mr-2 text-primary" />
                <a 
                  href="https://linkedin.com/in/surya319" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  linkedin.com/in/surya319
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Sunkara Syam Veera Surya Prakash. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors glow-on-hover"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/surya319" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors glow-on-hover"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:suryaprakash23319@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors glow-on-hover"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;