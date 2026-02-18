import React from 'react';
import Marquee from 'react-fast-marquee';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiAmazon,
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { portfolioData } from '../../data/portfolio';

const Skills: React.FC = () => {
  const { skills } = portfolioData;

  // Icon mapping for each skill
  const skillIcons: { [key: string]: React.ElementType } = {
    React: SiReact,
    TypeScript: SiTypescript,
    'Tailwind CSS': SiTailwindcss,
    JavaScript: SiJavascript,
    HTML5: SiHtml5,
    CSS3: SiCss3,
    C3: SiDotnet,
    'C#': SiDotnet,
    'Node.js': SiNodedotjs,
    Express: SiExpress,
    Python: SiPython,
    Django: SiDjango,
    'REST APIs': FaCode,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,
    Git: SiGit,
    Docker: SiDocker,
    AWS: SiAmazon,
    'VS Code': VscCode,
  };

  const SkillCard = ({ skill }: { skill: string }) => {
    const Icon = skillIcons[skill] || FaCode;
    
    return (
      <div className="flex flex-col items-center justify-center mx-4 p-6 bg-dark-lighter rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 min-w-[120px]">
        <Icon className="text-primary text-4xl mb-3" />
        <p className="text-text-primary text-sm font-medium text-center whitespace-nowrap">
          {skill}
        </p>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-dark-primary w-full">
      {/* Section Title */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Skills & Technologies
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      {/* All Skills in One Row */}
      <div className="overflow-hidden">
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
        >
          {[...skills.frontend, ...skills.backend, ...skills.database, ...skills.tools].map((skill, index) => (
            <SkillCard key={`skill-${index}`} skill={skill} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
