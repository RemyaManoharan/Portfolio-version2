import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { portfolioData } from '../../data/portfolio';

const Hero: React.FC = () => {
  const { personal, social } = portfolioData;

  const handleViewWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetInTouch = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-dark flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Gradient fade at top for smooth blending with navbar */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-primary to-transparent pointer-events-none"></div>
      
      {/* Gradient fade at bottom for smooth blending */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-dark-primary pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Photo - LEFT SIDE (40%) */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-start animate-fade-in-scale">
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={personal.image || '/assets/images/placeholder.jpg'}
                alt={personal.name}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-2xl shadow-primary/50"
              />
            </div>
          </div>

          {/* Content - RIGHT SIDE (60%) */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-4 animate-fade-in-up animation-delay-200">
              {personal.name}
            </h1>

            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-3 min-h-[40px] md:min-h-[48px] animate-fade-in-up animation-delay-400">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Frontend Focused',
                  2000,
                  'Software Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={80}
                repeat={Infinity}
                cursor={true}
                className="inline-block"
              />
            </h2>

            <p className="text-xl md:text-2xl text-text-secondary mb-6 animate-fade-in-up animation-delay-600">
              Finance × Technology
            </p>

            <p className="text-lg text-text-secondary mb-8 max-w-2xl animate-fade-in-up animation-delay-800">
              {personal.bio}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-start mb-8 animate-fade-in-up animation-delay-900">
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-primary transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={32} />
                </a>
              )}
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-primary transition-colors duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={32} />
                </a>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-1000">
              <button onClick={handleViewWork} className="btn-primary">
                View My Work
              </button>
              <button onClick={handleGetInTouch} className="btn-secondary">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
