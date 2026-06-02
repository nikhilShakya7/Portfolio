export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'BRANDING' | 'UI/UX' | 'MOTION';
  tag: string;
  image: string;
  client?: string;
  year?: string;
  role?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface SkillProgress {
  name: string;
  percentage: number;
}

export type ViewType = 'studio-home' | 'selected-works' | 'about' | 'contact' | 'nikhil-home';
