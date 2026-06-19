export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  avatarUrl: string;
  location: string;
  objective: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  status: string;
  details?: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'languages';
  proficiency: number; // percentage for visual meters
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  category: string;
}

export interface PortfolioData {
  profile: Profile;
  education: EducationItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  languages: string[];
  hobbies: string[];
}
