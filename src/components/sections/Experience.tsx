import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';
import { portfolioData } from '../../data/portfolio';

const Experience: React.FC = () => {
  const { experience } = portfolioData;

  // Company website mapping
  const companyWebsites: { [key: string]: string } = {
    'Costbits': 'https://costbits.com/',
    'Tata Consultancy Services': 'https://www.tcs.com/',
    'Kerala State Co-operative Bank Ltd': 'https://www.keralastatecooperativebank.com/',
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ExperienceCard = ({ exp, index }: { exp: any; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
      <div ref={ref} className="relative flex gap-8 mb-12 last:mb-0">
        {/* Left Side - Date */}
        <div className="w-1/4 text-right pr-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-primary font-semibold text-lg sticky top-24"
          >
            {exp.duration}
          </motion.p>
        </div>

        {/* Center - Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Timeline Dot */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            className="relative z-10"
          >
            <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-dark-primary ring-offset-2 ring-offset-primary/20">
              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
            </div>
          </motion.div>
          
          {/* Vertical Line */}
          {index !== experience.length - 1 && (
            <div className="w-0.5 h-full bg-primary/30 absolute top-4"></div>
          )}
        </div>

        {/* Right Side - Experience Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="w-3/4 bg-dark-secondary rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
        >
          <h3 className="text-xl font-bold text-text-primary mb-2">
            {exp.position}
          </h3>
          
          <div className="flex items-center gap-2 mb-4">
            <a
              href={companyWebsites[exp.company] || `https://www.google.com/search?q=${encodeURIComponent(exp.company)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary-light transition-colors inline-flex items-center gap-1"
            >
              {exp.company}
              <HiExternalLink size={16} />
            </a>
          </div>

          <p className="text-text-secondary leading-relaxed">
            {exp.description}
          </p>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 px-6 bg-dark-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-16">
            My professional journey building software across various industries and technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mt-12">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
