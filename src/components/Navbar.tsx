import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// Define navigation items
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  // Handle section highlighting based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl md:text-2xl font-bold text-white flex items-center glow-on-hover"
          >
            <Zap size={24} className="mr-2 text-primary" />
            <span className="glow-text">Surya<span className="text-primary">.</span>Prakash</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-dark-800 hover:bg-primary/20 transition-all duration-300 glow-on-hover"
              aria-label="Toggle theme"
            >
              <Zap size={18} className="text-primary" />
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary/20 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.href.substring(1)
                    ? 'text-white bg-primary/20'
                    : 'text-gray-300 hover:bg-dark-700 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className="mt-4 w-full flex items-center justify-center p-2 rounded-md bg-dark-800 hover:bg-primary/20 transition-all duration-300"
              aria-label="Toggle theme"
            >
              <Zap size={18} className="mr-2 text-primary" />
              <span>{theme === 'dark' ? 'Darker Theme' : 'Dark Theme'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;