import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';

const internshipsData = [
  {
    id: 1,
    company: 'K12 Techno Services',
    position: 'Robotics Intern',
    period: 'September 2024 - December 2024',
    description: 'Worked on developing educational robotics kits for K-12 students. Designed and programmed robotic systems for teaching STEM concepts.',
  },
  {
    id: 2,
    company: 'Hydrotribe Pvt Ltd',
    position: 'Product Designer',
    period: 'August 2022 - January 2023',
    description: 'Designed hydroponic and aeroponic systems for urban farming solutions. Created 3D models, prototypes, and implemented sensor systems for automated plant monitoring.',
  },
];

const Internships: React.FC = () => {
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
      id="internships"
      ref={sectionRef}
      className="section bg-dark opacity-0"
    >
      <div className="container">
        <SectionHeading
          title="Internships"
          subtitle="Professional experience and learning opportunities"
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {internshipsData.map((internship) => (
              <div
                key={internship.id}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-10 items-start"
              >
                {/* Line connecting items on mobile */}
                <div className="absolute top-0 left-0 h-full w-px bg-primary md:hidden"></div>
                
                {/* Circle marker on mobile */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-dark-800 border-4 border-primary rounded-full z-10 transform -translate-x-1/2 md:hidden"></div>
                
                {/* Company and duration */}
                <div className="md:col-span-2 mb-4 md:mb-0 md:text-right">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {internship.company}
                  </h3>
                  <div className="flex items-center md:justify-end text-gray-400 mb-2">
                    <Calendar size={16} className="mr-2 text-primary" />
                    <span>{internship.period}</span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary">
                    <Briefcase size={14} className="mr-1" />
                    <span className="text-sm">{internship.position}</span>
                  </div>
                </div>
                
                {/* Line connecting items on desktop */}
                <div className="hidden md:block md:col-span-1 relative">
                  <div className="h-full w-px bg-primary absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"></div>
                </div>
                
                {/* Description */}
                <div className="md:col-span-2 bg-dark-700 p-6 rounded-lg shadow-md glow-on-hover">
                  <p className="text-gray-300">{internship.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;