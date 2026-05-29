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
    title: "Rekayasa Perangkat Lunak (RPL)",
    organization: "SMKN 2 Kota Bekasi",
    location: "Bekasi, Indonesia",
    startDate: "2023",
    endDate: "2026",
    description: [
      "Mempelajari dasar-dasar pemrograman dan pengembangan perangkat lunak",
      "Fokus pada web development dengan PHP, Laravel, dan JavaScript",
      "Mengembangkan berbagai project aplikasi web dan desktop",
      "Mempelajari database management dengan MySQL",
      "Membuat project monitoring system, marketplace, dan aplikasi berbasis Java",
    ],
    skills: ["PHP", "Laravel", "Java", "JavaScript", "MySQL", "HTML", "CSS", "Git"],
  },
];
