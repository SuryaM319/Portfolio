import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import CertificationCard from '../components/CertificationCard';

const certificationsData = [
  {
    id: 1,
    title: 'Robotics Certification',
    issuer: 'Tech Institute',
    date: 'January 2023',
    description: 'Advanced certification in robotics design and programming.',
  },
  {
    id: 2,
    title: 'CNC Turning Certification',
    issuer: 'Manufacturing Academy',
    date: 'March 2022',
    description: 'Specialized training in CNC machine operation and programming.',
  },
  {
    id: 3,
    title: 'Four-Wheeler Foundation',
    issuer: 'Automobile Association',
    date: 'August 2021',
    description: 'Comprehensive course on automobile mechanics and design principles.',
  },
  {
    id: 4,
    title: 'C Programming',
    issuer: 'Code Institute',
    date: 'May 2021',
    description: 'Complete certification in C programming with focus on embedded systems.',
  },
];

const Certifications: React.FC = () => {
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
      id="certifications"
      ref={sectionRef}
      className="section bg-dark-800 opacity-0"
    >
      <div className="container">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and credentials I've obtained"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((certification) => (
            <CertificationCard
              key={certification.id}
              title={certification.title}
              issuer={certification.issuer}
              date={certification.date}
              description={certification.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;