import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillTag from '../components/SkillTag';

const skillCategories = [
  {
    id: 'mechanical',
    title: 'Mechanical',
    skills: ['AutoCAD', 'SolidWorks', 'CNC', '3D Printing', 'CAM', 'Prototyping','Fusion 360'],
    color: 'primary',
  },
  {
    id: 'electronics',
    title: 'Electronics',
    skills: ['Robotics', 'Sensor Integration', 'PCB Design', 'Microcontrollers', 'Circuit Design'],
    color: 'primary',
  },
  {
    id: 'programming',
    title: 'Programming',
    skills: ['C', 'Arduino', 'ESP32', 'C++',  ],
    color: 'primary',
  },
];

const Skills: React.FC = () => {
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
      id="skills"
      ref={sectionRef}
      className="section bg-dark opacity-0"
    >
      <div className="container">
        <SectionHeading
          title="Skills"
          subtitle="My technical expertise and capabilities"
        />

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-dark-700 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill) => (
                  <SkillTag
                    key={skill}
                    name={skill}
                    color={category.color as 'primary' | 'primary' | 'primary' }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;