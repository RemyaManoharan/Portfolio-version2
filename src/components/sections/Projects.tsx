import React, { useState } from 'react';
import { HiOutlineCode, HiExternalLink } from 'react-icons/hi';
import { portfolioData } from '../../data/portfolio';

const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  const ProjectCard = ({ project }: { project: any }) => {
    return (
      <div className="group bg-dark-secondary rounded-2xl p-6 border border-primary/20 hover:border-primary/50 hover:scale-[1.02] shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
        {/* Image Container */}
        <div className="relative rounded-xl overflow-hidden aspect-video mb-4">
          {/* Project Image */}
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
          )}
          
          {/* Hover Overlay on Image */}
          <div className="absolute inset-0 bg-dark-primary/0 group-hover:bg-dark-primary/60 transition-all duration-300"></div>

          {/* Action Icons - Top Right on Image */}
          <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-primary/80 backdrop-blur-sm rounded-full text-xl text-primary hover:text-primary-light hover:bg-dark-primary transition-all"
                aria-label="View GitHub Repository"
              >
                <HiOutlineCode />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-primary/80 backdrop-blur-sm rounded-full text-xl text-primary hover:text-primary-light hover:bg-dark-primary transition-all"
                aria-label="View Live Demo"
              >
                <HiExternalLink />
              </a>
            )}
          </div>
        </div>

        {/* Project Info Below Image */}
        <div className="space-y-3">
          {/* Project Title */}
          <h3 className="text-xl font-bold text-text-primary">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.slice(0, 4).map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/30"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs border border-primary/30">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-6 bg-dark-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {projects.length > 4 && (
          <div className="flex justify-center">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="btn-primary"
              >
                Show More Projects
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowAll(false);
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary"
              >
                Show Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
