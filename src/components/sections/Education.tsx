
import { HiAcademicCap, HiCalendar, HiOutlineBadgeCheck } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import type { Education as EducationType, Certification } from '../../types';

const SectionTitle = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center gap-2 mb-2">
      <span className="text-primary text-3xl md:text-4xl">{icon}</span>
      <h2 className="text-4xl md:text-5xl font-bold text-text-primary">{title}</h2>
    </div>
    <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
    {subtitle && <p className="text-lg text-text-secondary max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Card = ({
  icon,
  title,
  subtitle,
  duration,
  description,
  inProgress,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  inProgress?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="bg-dark-secondary rounded-xl p-6 border border-primary/20 hover:border-primary/50 shadow transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 transform hover:scale-[1.02] flex items-start gap-4"
  >
    <div className="shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary w-12 h-12 md:w-16 md:h-16 text-2xl md:text-3xl shadow-[0_0_12px_0_rgba(0,255,255,0.08)] transition-all duration-300">
      {icon}
    </div>
    <div className="flex-1 min-w-0 ml-2 md:ml-4">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold text-text-primary truncate">{title}</h3>
        {inProgress && (
          <span className="bg-accent/20 text-accent px-2 py-1 rounded text-xs ml-2">In Progress</span>
        )}
      </div>
      <div className="text-primary text-sm font-semibold mt-1 truncate">{subtitle}</div>
      <div className="flex items-center gap-1 text-accent text-xs mt-2">
        <HiCalendar className="inline-block" />
        <span>{duration}</span>
      </div>
      <div className="text-text-secondary text-sm mt-3">{description}</div>
    </div>
  </motion.div>
);

const isInProgress = (duration: string) => {
  // Only show 'In Progress' if duration contains 'present' (case-insensitive) or exactly 'In Progress'
  // Do NOT show for durations that contain 'Completed' or similar
  if (/present/i.test(duration)) return true;
  if (/in progress/i.test(duration)) return true;
  if (/completed/i.test(duration)) return false;
  const yearMatch = duration.match(/\d{4}/g);
  if (yearMatch) {
    return yearMatch.some((y) => parseInt(y) > new Date().getFullYear());
  }
  return false;
};

const EducationSection: React.FC = () => {
  const { education, certifications } = portfolioData;
  return (
    <section id="education" className="py-20 px-6 bg-dark-primary">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          icon={<HiAcademicCap />}
          title="Education"
          subtitle="Academic background and formal education"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu: EducationType) => (
            <Card
              key={edu.id}
              icon={<HiAcademicCap />}
              title={edu.degree}
              subtitle={edu.institution}
              duration={edu.duration}
              description={edu.description}
            />
          ))}
        </div>
        <div className="h-px bg-primary/20 my-16" />
        <SectionTitle
          icon={<HiOutlineBadgeCheck />}
          title="Certifications"
          subtitle="Professional training and skill development"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert: Certification) => (
            <Card
              key={cert.id}
              icon={<HiOutlineBadgeCheck />}
              title={cert.name}
              subtitle={cert.provider}
              duration={cert.duration}
              description={cert.description}
              inProgress={isInProgress(cert.duration)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
