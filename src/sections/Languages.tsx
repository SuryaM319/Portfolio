import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Globe } from 'lucide-react';

const languagesData = [
  {
    id: 'telugu',
    name: 'Telugu',
    proficiency: 'Native',
    flagCode: '🇮🇳',
  },
  {
    id: 'hindi',
    name: 'Hindi',
    proficiency: 'Fluent',
    flagCode: '🇮🇳',
  },
  {
    id: 'english',
    name: 'English',
    proficiency: 'Proficient',
    flagCode: '🇬🇧',
  },
  {
    id: 'japanese',
    name: 'Japanese',
    proficiency: 'Beginner',
    flagCode: '🇯🇵',
  },
];

const Languages: React.FC = () => {
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
      id="languages"
      ref={sectionRef}
      className="section bg-dark opacity-0"
    >
      <div className="container">
        <SectionHeading
          title="Languages"
          subtitle="Languages I speak and communicate in"
        />

        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {languagesData.map((language) => (
            <div
              key={language.id}
              className="bg-dark-700 rounded-lg p-6 text-center glow-on-hover group transition-all duration-300"
            >
              <div className="text-4xl mb-3">{language.flagCode}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {language.name}
              </h3>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                {language.proficiency}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Globe size={32} className="text-primary mr-2" />
            <h3 className="text-2xl font-bold text-white">Global Communication</h3>
          </div>
          <p className="text-gray-400">
            My language skills enable me to collaborate with diverse teams and communicate effectively across different cultures and regions. I continue to expand my language capabilities to enhance international collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Languages;