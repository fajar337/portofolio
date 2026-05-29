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
    id: "edu-smk",
    type: "education",
    title: "Software Engineering",
    organization: "SMKN 2 Kota Bekasi",
    location: "Bekasi, Indonesia",
    startDate: "2023",
    endDate: "2026",
    description: [
      "Studied programming fundamentals and software development",
      "Focused on web development with PHP, Laravel, and JavaScript",
      "Built web and desktop application projects",
      "Learned database management with MySQL",
      "Created monitoring systems, marketplaces, and Java-based applications",
    ],
    skills: ["PHP", "Laravel", "Java", "JavaScript", "MySQL", "HTML", "CSS", "Git"],
  },
];
