export type SkillCategory = 
  | 'Front-End' 
  | 'Back-End' 
  | 'Bases de données & Outils' 
  | 'Data Analyst' 
  | 'Data Engineer' 
  | 'Gouvernance & GID'
  | 'IA & Machine Learning';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  badge?: string;
  description?: string;
}

export type ProjectCategory = 'Full-Stack' | 'Backend / Web' | 'Data Science & IA';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  architecture?: {
    frontend?: string;
    backend?: string;
    database?: string;
    devops?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  githubUrl?: string;
  liveUrl?: string;
  imagePlaceholderText: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  topics: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
  proficiency: 'Native' | 'Courant' | 'Intermédiaire' | 'Notions';
  percentage: number;
  flag: string;
  details?: string;
}

export interface QualityItem {
  title: string;
  description: string;
  iconName: string;
}

export interface PersonalInfo {
  fullName: string;
  headline: string;
  status: string;
  institution: string;
  university: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  aboutMeFr: string;
  aboutMeEn: string;
  specialties: string[];
}

export interface ProjectInquiryFormData {
  // Vos informations
  fullName: string;
  email: string;
  phone: string;
  company: string;
  role: string;

  // Type de projet
  projectType: string;

  // Services souhaités (sélection multiple)
  services: string[];

  // Budget estimé
  budget: string;

  // Délai souhaité
  timeline: string;

  // État du projet
  projectState: string;

  // Description du projet
  description: string;

  // Pièces jointes / liens docs
  attachmentsNote: string;

  // Moyen de contact préféré
  preferredContactMethod: string;

  // Informations complémentaires
  additionalMessage: string;

  // Case d'acceptation
  termsAccepted: boolean;
}
