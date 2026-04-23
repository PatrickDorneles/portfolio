export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  fullDescription: string;
  challenges: string;
  solutions: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  description: string;
  experience: string[];
}

export interface Stat {
  name: string;
  value: number;
  description: string;
  details: string;
}

export type ProficiencyIcon =
  | "code"
  | "database"
  | "terminal"
  | "book"
  | "tools"
  | "smartphone"
  | "gamepad";

export interface Proficiency {
  title: string;
  icon: ProficiencyIcon;
  skills: string[];
}
