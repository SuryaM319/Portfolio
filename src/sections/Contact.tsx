import React, { useEffect, useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
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
      id="contact"
      ref={sectionRef}
      className="section bg-dark-900 opacity-0"
    >
      <div className="container">
        <SectionHeading
          title="Contact Me"
          subtitle="Get in touch for collaborations or inquiries"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the following methods.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/20 mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">Email</h4>
                  <a
                    href="mailto:suryaprakash23319@gmail.com"
                    className="text-white hover:text-primary transition-colors"
                  >
                    suryaprakash23319@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/20 mr-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/surya319"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                  >
                    linkedin.com/in/surya319
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/20 mr-4">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">GitHub</h4>
                  <a
                    href="https://github.com/SuryaM319"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                  >
                    github.com/SuryaM319
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary/20 mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400">Location</h4>
                  <p className="text-white">
                    Rajamahendravaram, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-dark-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;