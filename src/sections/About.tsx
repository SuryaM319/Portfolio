import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import { User, MapPin, GraduationCap, Code } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section bg-dark-800 opacity-0"
    >
      <div className="container">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about me and my background"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image or Animation */}
        <div className="relative flex justify-center items-center">
  <img
    src="https://media.licdn.com/dms/image/v2/D5603AQFH6oEo9bSZOA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730174355314?e=1752710400&v=beta&t=90OPCRAX0dZnjROHTdMqx3mq4hVl33LzBpVmXnLmm_4"
    alt="Robotics Engineer Working"
    className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary shadow-lg"
    loading="lazy"
  />
  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-dark-900 to-transparent opacity-60"></div>
</div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary/20 mr-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm Sunkara Syam Veera Surya Prakash, a Mechanical Engineer and Robotics Enthusiast passionate about creating intelligent machines and systems. My work focuses on the intersection of mechanical design, automation, and intelligent control systems.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary/20 mr-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">My Background</h3>
                <p className="text-gray-300 leading-relaxed">
                  Based in Rajamahendravaram, Andhra Pradesh, I've developed a diverse skill set in robotics, embedded systems, and mechanical design. I've created a variety of robots including maze solvers, line followers, and remote-controlled vehicles.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary/20 mr-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                <p className="text-gray-300 leading-relaxed">
                  Iam pursuing a degree in Mechanical Engineering with a focus on mechatronics and robotics systems. My education has equipped me with a strong foundation in both mechanical principles and the electronics needed for advanced automation.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 p-3 rounded-full bg-primary/20 mr-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">My Approach</h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe in hands-on learning and practical application. My approach combines theoretical knowledge with real-world implementation, focusing on creating robust, efficient, and innovative solutions to engineering challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;