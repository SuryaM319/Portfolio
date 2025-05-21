import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Maze-Solving Robot',
    description: 'An autonomous robot that navigates and solves complex mazes using advanced path-finding algorithms.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Arduino', 'Sensors', 'Algorithms']
  },
  {
    id: 2,
    title: 'Line-Following Bot',
    description: 'A robot that precisely follows line paths using IR sensors for smooth navigation.',
    image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['IR Sensors', 'Motor Control','Autonomous']
  },
  {
    id: 3,
    title: 'Racing Robot (PS-2 Controller)',
    description: 'High-speed racing robot controlled via PS-2 controller for real-time maneuvering.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Remote Control', 'High-Speed Motors', 'Chassis Design']
  },
  {
    id: 4,
    title: 'Edge Detection Bot',
    description: 'Robot that detects and navigates along edges using advanced sensor arrays.',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQG0tnnUhITAvQ/feedshare-shrink_2048_1536/B56ZP5T4.eG8As-/0/1735054562265?e=1750291200&v=beta&t=-BTm02W__NdWr07znNs6Hfemhv5auVRiqYTYFKuMfzE',
    tags: ['Sensors', 'Edge Detection', 'Autonomous']
  },
  // {
  //   id: 5,
  //   title: 'AR Educational App',
  //   description: 'Augmented reality application for educational purposes related to mechanical engineering.',
  //   image: 'https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   tags: ['AR', 'Unity', 'Education']
  // },
  {
    id: 6,
    title: 'Aeroponic System',
    description: 'Advanced aeroponic system for efficient plant growth with automated nutrient delivery.',
    image: 'https://timesofagriculture.in/wp-content/uploads/2024/05/aeroponics-4-1024x576.webp',
    tags: ['Aeroponics', 'Automation', 'Agriculture']
  },
  {
    id: 7,
    title: 'Hydroponic System',
    description: 'Sustainable hydroponic growing system with optimized water and nutrient usage.',
    image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Hydroponics', 'Sensors', 'Sustainable']
  }
];

const Projects: React.FC = () => {
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
      id="projects"
      ref={sectionRef}
      className="section bg-dark opacity-0"
    >
      <div className="container">
        <SectionHeading
          title="Projects"
          subtitle="Explore my latest projects and technical work"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;