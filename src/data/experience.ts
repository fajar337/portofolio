export interface ExperienceItem {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "edu-1",
    type: "education",
    title: "Computer Science",
    organization: "University",
    location: "Indonesia",
    startDate: "2020",
    endDate: "2024",
    description: [
      "Studied computer science fundamentals",
      "Focused on web development and software engineering",
      "Completed various projects in Laravel, Java, and JavaScript",
    ],
    skills: ["Java", "PHP", "Laravel", "JavaScript", "MySQL"],
  },
];
