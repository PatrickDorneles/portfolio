export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export const experiences: Record<string, Experience> = {
  db: {
    title: "Fullstack Developer II",
    company: "DB",
    period: "June 2025 - Present",
    description:
      "Working as a Fullstack Developer on a project for Randon, an ecosystem composed of microservices and microfrontends focused on industrial execution and management solutions.",
    responsibilities: [
      "Develop and maintain microservices using NestJS",
      "Build and maintain microfrontends using React",
      "Fix bugs and improve legacy and new codebases",
      "Participate in refactoring, optimization, and code standardization efforts"
    ],
    achievements: [
      "Worked across both backend and frontend layers in a distributed architecture",
      "Contributed to a scalable microservices and microfrontends ecosystem"
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "React",
      "PostgreSQL",
      "Docker",
      "Git"
    ],
  },
  wedevup: {
    title: "Mid-level Fullstack Developer",
    company: "WeDevUp",
    period: "December 2022 – June 2025",
    description:
      "Participated in multiple projects for various clients, working across all layers from frontend to backend.",
    responsibilities: [
      "Participated in multiple projects for various clients.",
      "Maintained and debugged legacy codebases.",
      "Fully developed websites and dashboards, handling frontend, backend, databases, and integrations.",
    ],
    achievements: [
      "Delivered several complete software solutions from scratch.",
      "Improved legacy systems through bug resolution and maintenance.",
    ],
    technologies: [
      "React",
      "NextJS",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Astro",
      "Tailwind",
      "Google Cloud",
      "Firebase",
      "AWS",
    ],
  },
  grovetech: {
    title: "Fullstack Developer",

    company: "GrooveTech",
    period: "December 2021 – December 2022",
    description:
      "Worked on the development and maintenance of a distributed system composed of several microservices.",
    responsibilities: [
      "Developed and maintained microservices in JavaScript/TypeScript.",
      "Refactored complete microservices for improved architecture.",
      "Designed and implemented event scheduling microservices.",
    ],
    achievements: [
      "Enhanced system scalability through refactoring.",
      "Successfully implemented a custom HTTP event scheduler.",
    ],
    technologies: ["JavaScript", "TypeScript", "Node.js"],
  },
  brazpine: {
    title: "Junior Fullstack Developer",
    company: "Brazpine",
    period: "January 2021 – November 2021",
    description:
      "Worked on maintaining an Android application and contributed to smaller web-based projects.",
    responsibilities: [
      "Maintained Android application using Java with a Java backend.",
      "Contributed to smaller projects using Node.js (Express) and React.",
      "Applied SOLID principles and design patterns in development.",
    ],
    achievements: [
      "Improved application stability through consistent bug fixing.",
      "Enhanced code quality by applying best practices.",
    ],
    technologies: ["Java", "Node.js", "Express", "React"],
  },
  "nova-software": {
    title: "Junior Developer",
    company: "Nova Software",
    period: "March 2020 – September 2020",
    description:
      "Focused on bug fixing and maintenance in a web application built with Angular and C#.",
    responsibilities: [
      "Debugged and maintained an Angular + C# application.",
      "Assisted in system improvements and bug fixes.",
    ],
    achievements: [
      "Consistently resolved bugs to ensure application stability.",
    ],
    technologies: ["Angular", "C#", ".NET Framework"],
  },
  "cwi-crescer": {
    title: "Professional Training / Internship",
    company: "CWI – Crescer Program",
    period: "2018",
    description:
      "Professional initiation program focused on practical learning of multiple software development technologies.",
    responsibilities: [
      "Hands-on experience with JavaScript, React, HTML, CSS, Java Spring, C#, and .NET Core.",
    ],
    achievements: [
      "Successfully completed the training program and gained foundational skills in multiple technologies.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Java Spring",
      "C#",
      ".NET Core",
    ],
  },
};
