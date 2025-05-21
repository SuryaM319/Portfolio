import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Award, Medal } from 'lucide-react';

const achievementsData = [
  {
    id: 1,
    title: 'Semifinalist – Technoxian Maze Solving 2024',
    description: 'Reached the semifinal round of the national-level Technoxian Maze Solving robotics competition.',
    icon: Award,
  },
  {
    id: 2,
    title: '3rd Place – Robo Race (VEDA Tech Fest)',
    description: 'Won 3rd place in the Robo Race competition at the VEDA Technical Festival.',
    icon: Medal,
  },
];

const Achievements: React.FC = () => {
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
      id="achievements"
      ref={sectionRef}
      className="section bg-dark-800 opacity-0"
    >
      <div className="container">
        <SectionHeading
          title="Achievements"
          subtitle="Awards and recognition for my work"
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((achievement) => {
            const IconComponent = achievement.icon;
            
            return (
              <div
                key={achievement.id}
                className="bg-dark-700 rounded-lg overflow-hidden glow-on-hover group transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                    <div className="p-2 rounded-full bg-dark-900/50">
                      <span className="text-accent font-bold">#{achievement.id}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;