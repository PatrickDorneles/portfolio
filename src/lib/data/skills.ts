export interface Skill {
  name: string;
  level: number; // 1-100 for RPG style progression
  description: string;
  experience: string[];
}

export const skills: Record<string, Skill> = {
  // Frontend
  JavaScript: {
    name: "JavaScript",
    level: 85,
    description:
      "Proficient in modern JavaScript (ES6+) for dynamic web development",
    experience: [
      "Developed complex frontend applications",
      "Implemented asynchronous programming with Promises and async/await",
      "Used JavaScript extensively in React and Next.js projects",
    ],
  },
  TypeScript: {
    name: "TypeScript",
    level: 90,
    description:
      "Expert in type-safe JavaScript superset and scalable codebases",
    experience: [
      "Implemented complex type systems in large projects",
      "Created reusable and strongly typed components",
      "Improved code maintainability and reduced runtime errors",
    ],
  },
  React: {
    name: "React",
    level: 85,
    description: "Advanced skills in component-based UI development with React",
    experience: [
      "Built responsive, reusable components",
      "Managed state with Redux and Zustand",
      "Implemented React Query for efficient data fetching",
    ],
  },
  NextJS: {
    name: "Next.js",
    level: 75,
    description:
      "Specialist in SSR, static site generation, and optimized routing",
    experience: [
      "Built server-rendered and statically generated apps",
      "Optimized applications for performance and SEO",
      "Used Next.js API routes for backend integration",
    ],
  },
  TailwindCSS: {
    name: "TailwindCSS",
    level: 80,
    description: "Utility-first CSS framework for rapid UI styling",
    experience: [
      "Styled complex components with Tailwind",
      "Customized themes and responsive designs",
    ],
  },
  Astro: {
    name: "Astro",
    level: 50,
    description: "Static site builder optimized for performance",
    experience: [
      "Built small projects using Astro",
      "Built a big project focusing on fast and stable server rendering",
      "Integrated React components within Astro projects",
    ],
  },
  HTML: {
    name: "HTML",
    level: 90,
    description: "Strong foundation in semantic HTML and accessibility",
    experience: [
      "Created SEO-friendly markup",
      "Implemented accessible web standards",
    ],
  },
  CSS: {
    name: "CSS",
    level: 85,
    description: "Proficient in responsive design and modern CSS techniques",
    experience: [
      "Built layouts using Flexbox and Grid",
      "Implemented animations and transitions",
    ],
  },
  Remix: {
    name: "Remix",
    level: 35,
    description:
      "Familiar with Remix framework for React-based routing and data loading",
    experience: [
      "Built small proof of concept projects",
      "Explored Remix loader and action APIs",
    ],
  },
  Redux: {
    name: "Redux",
    level: 70,
    description: "State management library for predictable application state",
    experience: [
      "Managed complex app state in React projects",
      "Implemented Redux Toolkit for streamlined code",
    ],
  },
  Zustand: {
    name: "Zustand",
    level: 50,
    description: "Lightweight state management with hooks",
    experience: [
      "Used Zustand for local state in React components",
      "Simplified state logic with minimal boilerplate",
    ],
  },

  // Backend
  NodeJS: {
    name: "Node.js",
    level: 85,
    description:
      "Experienced server-side JavaScript runtime for scalable applications",
    experience: [
      "Built RESTful APIs and microservices",
      "Handled asynchronous workflows and event-driven programming",
      "Optimized backend performance",
    ],
  },
  NestJS: {
    name: "NestJS",
    level: 80,
    description:
      "Progressive Node.js framework for building scalable server-side apps",
    experience: [
      "Developed modular backends using NestJS",
      "Implemented WebSocket and REST APIs",
      "Integrated with various databases and ORMs",
    ],
  },
  "Express.js": {
    name: "Express.js",
    level: 70,
    description: "Minimalist web framework for Node.js",
    experience: [
      "Created backend services and middleware",
      "Handled routing and error management",
    ],
  },
  Java: {
    name: "Java",
    level: 70,
    description: "Familiar with Java for backend development and Android",
    experience: [
      "Maintained Android app codebases",
      "Worked on Java Spring backend projects",
      "Studied OPP principles through Java",
      "Developed desktop applications for studies using Java",
    ],
  },
  "Spring Framework": {
    name: "Spring Framework",
    level: 35,
    description: "Experience with Spring ecosystem for Java backend",
    experience: [
      "Worked on backend maintenance and bug fixes",
      "Implemented features in Spring Boot apps",
    ],
  },
  "C#": {
    name: "C#",
    level: 55,
    description: "Developed backend systems using C# and .NET frameworks",
    experience: [
      "Maintained legacy .NET and .NET Core applications",
      "Fixed bugs and improved system stability",
    ],
  },
  ".Net Core": {
    name: ".Net Core",
    level: 50,
    description: "Cross-platform framework for modern C# development",
    experience: [
      "Implemented bug fixes and feature updates",
      "Worked on APIs and backend services",
    ],
  },
  Rust: {
    name: "Rust",
    level: 30,
    description: "Basic knowledge of Rust programming language",
    experience: [
      "Studied Rust for systems programming",
      "Implemented small experimental projects",
    ],
  },
  AWS: {
    name: "AWS",
    level: 40,
    description: "Experience with cloud services for hosting and storage",
    experience: [
      "Deployed applications using EC2 and S3",
      "Configured environments for production systems",
      "Used AWS services in conjunction with Firebase and Google Cloud",
    ],
  },
  "CI/CD": {
    name: "CI/CD",
    level: 35,
    description:
      "Basic experience with continuous integration and deployment pipelines",
    experience: [
      "Implemented basic pipelines for automated testing and deployment",
      "Integrated CI/CD tools with Git repositories",
      "Maintained build and release workflows",
    ],
  },
  "React Native": {
    name: "React Native",
    level: 60,
    description:
      "Development of cross-platform mobile applications using React Native and Expo.",
    experience: [
      "Built mobile features using React Native",
      "Integrated APIs in mobile projects",
      "Used Expo for rapid development",
    ],
  },
  "Android (Java)": {
    name: "Android (Java)",
    level: 50,
    description:
      "Experience in maintaining and developing Android applications using Java.",
    experience: [
      "Maintained Android applications",
      "Developed new features using Java",
      "Fixed bugs in production apps",
    ],
  },
  Lua: {
    name: "Lua",
    level: 30,
    description:
      "Experience in game development using Lua with the LÖVE framework.",
    experience: [
      "Developed prototyped games using the LÖVE framework",
      "Implemented game logic in Lua",
    ],
  },
  Godot: {
    name: "Godot",
    level: 50,
    description:
      "Game development using the Godot engine for personal and educational projects.",
    experience: [
      "Created game prototypes with Godot",
      "Explored 2D game development",
      "Studied GDScript syntax and features",
      "Experimented with game prototypes",
    ],
  },
  Git: {
    name: "Git",
    level: 85,
    description: "Version control using Git in team-based and solo projects.",
    experience: [
      "Used Git for collaborative development",
      "Managed branches and pull requests",
      "Resolved merge conflicts",
    ],
  },
  Vim: {
    name: "Vim",
    level: 75,
    description: "Proficiency in using Vim as a primary code editor.",
    experience: [
      "Configured Vim for JavaScript and TypeScript development",
      "Utilized Vim keybindings for productivity",
      "Worked efficiently in terminal environments",
    ],
  },
  Tmux: {
    name: "Tmux",
    level: 65,
    description: "Terminal multiplexer for improved workflow and productivity.",
    experience: [
      "Managed multiple sessions in Tmux",
      "Integrated Tmux with Vim",
      "Automated workflows with Tmux scripting",
    ],
  },
  NeoVim: {
    name: "NeoVim",
    level: 70,
    description:
      "Advanced configurations and usage of NeoVim for modern development workflows.",
    experience: [
      "Configured NeoVim with LSP and Tree-sitter",
      "Created custom plugins and keybindings",
      "Streamlined development setup",
      "Developed a customized NeoVim setting to maximize productivity",
    ],
  },
  "Google Cloud": {
    name: "Google Cloud",
    level: 35,
    description:
      "Experience with Google Cloud for deploying and managing applications.",
    experience: [
      "Deployed projects on Google Cloud",
      "Managed services using GCP console",
      "Configured Firebase integrations",
    ],
  },
  "Object-Oriented Programming": {
    name: "Object-Oriented Programming",
    level: 80,
    description: "Strong grasp of OOP principles applied in multiple projects.",
    experience: [
      "Applied SOLID principles in backend development",
      "Designed modular and scalable systems",
      "Utilized design patterns in real-world applications",
    ],
  },
  "Functional Programming": {
    name: "Functional Programming",
    level: 60,
    description:
      "Knowledge of functional programming paradigms and their application.",
    experience: [
      "Used FP techniques in JavaScript and TypeScript",
      "Explored immutability and pure functions",
      "Studied functional libraries and concepts",
    ],
  },

  Expo: {
    name: "Expo",
    level: 35,
    description: "Framework and platform for React Native development",
    experience: [
      "Utilized Expo to speed up development",
      "Managed app builds and deployment",
    ],
  },
};
