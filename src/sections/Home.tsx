import React, { useEffect, useRef } from 'react';
import { ChevronDown, Cpu, Cog } from 'lucide-react';

const Home: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Cog size={120} className="absolute top-1/4 left-1/6 text-primary/10 gear-animation" style={{ animationDuration: '25s' }} />
        <Cog size={80} className="absolute top-1/3 right-1/4 text-secondary/10 gear-animation" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
        <Cpu size={100} className="absolute bottom-1/4 right-1/6 text-accent/10 gear-animation" style={{ animationDuration: '30s' }} />
        <Cog size={60} className="absolute bottom-1/3 left-1/4 text-primary/10 gear-animation" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text leading-tight">
          Sunkara Syam Veera <br />
          <span className="text-primary">Surya Prakash</span>
        </h1>

        <div className="h-1 w-24 md:w-32 bg-primary mx-auto mb-6 rounded-full"></div>

        <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-300">
          <span className="typing-animation">Designing the Future with Mechanics & Intelligence</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>

        <a
          href="#about"
          title="Scroll to About section"
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Home;
