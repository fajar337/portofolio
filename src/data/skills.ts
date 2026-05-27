export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML/CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Laravel" },
      { name: "PHP" },
      { name: "Java" },
      { name: "Node.js" },
      { name: "REST API" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Git" },
      { name: "Docker" },
      { name: "VS Code" },
      { name: "Figma" },
    ],
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Laravel",
  "PHP",
  "Java",
  "Tailwind CSS",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "Git",
  "Node.js",
  "JavaScript",
  "Figma",
];
