export interface Stat {
  name: string;
  value: number;
  description: string;
  details: string;
}

export const stats: Stat[] = [
  {
    name: "Problem Solving",
    value: 19,
    description: "Problem Solving & Algorithm Design",
    details:
      "Expert in developing efficient algorithms and solving complex technical challenges. Skilled in breaking down problems and implementing optimal solutions.",
  },
  {
    name: "Frontend",
    value: 17,
    description: "Frontend Development & UI/UX",
    details:
      "Proficient in creating responsive, accessible, and performant user interfaces. Strong focus on user experience and modern design principles.",
  },
  {
    name: "Backend",
    value: 18,
    description: "Backend Development & System Design",
    details:
      "Experienced in designing scalable architectures, RESTful APIs, and microservices. Strong understanding of system design principles.",
  },
  {
    name: "DevOps",
    value: 14,
    description: "DevOps & Infrastructure Management",
    details:
      "Skilled in basic CI/CD principles, containerization, and cloud infrastructure. Experience with automated testing and deployment pipelines.",
  },
  {
    name: "Database",
    value: 16,
    description: "Database Design & Optimization",
    details:
      "Expert in database design, optimization, and management. Proficient in both SQL and NoSQL databases.",
  },
  {
    name: "Leadership",
    value: 14,
    description: "Team Leadership & Communication",
    details:
      "Looking forward to acquire experience mentoring teams and managing projects. Currently improving communication and collaboration abilities.",
  },
];
