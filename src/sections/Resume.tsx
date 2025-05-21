import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import { FileText, GraduationCap, Calendar } from 'lucide-react';

const Resume: React.FC = () => {
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
      id="resume"
      ref={sectionRef}
      className="section bg-dark-800 opacity-0"
    >
      <div className="container">
        <SectionHeading
          title="Resume"
          subtitle="Download my resume for a more detailed look at my experience and skills"
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-700 p-8 rounded-lg mb-8 text-center glow-on-hover">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/20">
                <FileText size={48} className="text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Sunkara Syam Veera Surya Prakash
            </h3>
            <p className="text-gray-300 mb-6">
              Mechanical Engineer & Robotics Enthusiast
            </p>
            <a
              href="https://drive.google.com/file/d/1_B2B4gjMgj1VkGuuRkH1BVqMh2lmVPMm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center glow-on-hover"
            >
              <FileText size={20} className="mr-2" />
              Open Resume
            </a>
          </div>

          <div className="bg-dark-700 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <GraduationCap size={24} className="text-primary mr-3" />
              <h3 className="text-2xl font-bold text-white">Education Timeline</h3>
            </div>
            
            <div className="space-y-8">
              {/* B.Tech */}
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-2">
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-primary mr-2" />
                    <span className="text-gray-400">2023 - 2026</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">Bachelor of Technology in Mechanical Engineering</h4>
                  <p className="text-primary">Aditya Engineering College</p>
                  <p className="text-gray-400 mt-2">CGPA: 8.07/10</p>
                </div>
              </div>

              {/* Intermediate */}
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-2">
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-primary mr-2" />
                    <span className="text-gray-400">2020 - 2023</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">Diploma in Mechanical Engineering</h4>
                  <p className="text-primary">Aditya Polytechnic College</p>
                  <p className="text-gray-400 mt-2">Percentage: 84.56%</p>
                </div>
              </div>

              {/* Secondary Education */}
              <div className="relative pl-8 border-l-2 border-primary">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div>
                  <div className="flex items-center mb-2">
                    <Calendar size={16} className="text-primary mr-2" />
                    <span className="text-gray-400">2019 - 2020</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">Secondary School Certificate (SSC)</h4>
                  <p className="text-primary">A.E.L.C.Schade E.M.High School</p>
                  <p className="text-gray-400 mt-2">GPA: 10/10</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-dark-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Work Experience</h3>
              <div className="border-l-2 border-primary pl-4 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white">Robotics Intern</h4>
                  <p className="text-gray-300">K12 Techno Services</p>
                  <p className="text-gray-400 text-sm">September,2024 - December,2024</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Product Designer</h4>
                  <p className="text-gray-300">Hydrotribe Pvt Ltd</p>
                  <p className="text-gray-400 text-sm">August,2022 - January,2023</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Key Achievements</h3>
              <div className="border-l-2 border-primary pl-4 space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">Technoxian Maze Solving 2024</h4>
                  <p className="text-gray-400">Semifinalist</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Aditya University</h4>
                  <p className="text-gray-400">3rd Place - Robo Race</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;