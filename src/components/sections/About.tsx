import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';

const About: React.FC = () => {
  const { about } = portfolioData;

  const handleDownloadCV = () => {
    if (about.cvUrl) {
      window.open(about.cvUrl, '_blank');
    }
  };

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-dark-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {about.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-text-secondary mb-6 leading-relaxed last:mb-8"
              >
                {paragraph}
              </p>
            ))}

            {/* Download CV Button */}
            {about.cvUrl && (
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={handleDownloadCV}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FaDownload size={18} />
                  Download CV
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
