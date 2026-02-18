export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  image?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface Skills {
  frontend: string[];
  backend: string[];
  database: string[];
  tools: string[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Certification {
  id: number;
  name: string;
  provider: string;
  duration: string;
  description: string;
}

export interface About {
  title: string;
  paragraphs: string[];
  cvUrl?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  social: SocialLinks;
  about: About;
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}
