export interface Proficiency {
  title: string;
  icon:
  | "code"
  | "database"
  | "terminal"
  | "book"
  | "tools"
  | "smartphone"
  | "gamepad";
  skills: string[];
}

export const proficiencies: Proficiency[] = [
  {
    title: "Frontend",
    icon: "code",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "NextJS",
      "TailwindCSS",
      "Astro",
      "HTML",
      "CSS",
      "Remix",
      "Redux",
      "Zustand",
    ],
  },
  {
    title: "Backend",
    icon: "database",
    skills: [
      "NodeJS",
      "NestJS",
      "Express.js",
      "Java",
      "Spring Framework",
      "C#",
      ".Net Core",
      "Rust",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "GraphQL",
      "tRPC",
    ],
  },
  {
    title: "Mobile",
    icon: "smartphone",
    skills: ["Android (Java)", "React Native", "Expo"],
  },
  {
    title: "Game Development",
    icon: "gamepad",
    skills: ["Lua", "Love2D", "Godot"],
  },
  {
    title: "DevOps",
    icon: "terminal",
    skills: ["Docker", "AWS", "Azure", "Google Cloud", "CI/CD"],
  },
  {
    title: "Tools",
    icon: "tools",
    skills: ["Git", "Vim", "Tmux", "NeoVim"],
  },
  {
    title: "Concepts",
    icon: "book",
    skills: [
      "Unit Testing",
      "Design Patterns",
      "UI/UX",
      "Functional Programming",
      "Object-Oriented Programming",
      "Clean Architecture",
    ],
  },
];
