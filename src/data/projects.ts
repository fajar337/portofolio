export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "web-app" | "desktop" | "other";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
}

export const projects: Project[] = [
  {
    slug: "website-dufan",
    title: "Website Dufan",
    description:
      "An informational Dunia Fantasi (Dufan) website with attraction listings and ticket purchasing.",
    longDescription:
      "A complete website for the Dunia Fantasi theme park featuring attraction details, photo galleries, and online ticket purchasing. Built with Laravel, the Blade templating engine, and MySQL as the database.",
    tags: ["Laravel", "Blade", "PHP", "MySQL"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/Website-Dufan",
    featured: true,
    date: "2024",
  },
  {
    slug: "amb-monitoring",
    title: "AMB Monitoring",
    description:
      "A web-based AMB monitoring system for real-time tracking and data management.",
    longDescription:
      "A monitoring web application used to track and manage AMB data in real time. Features include a statistics dashboard, data entry, and reporting. Built with Laravel and a responsive interface.",
    tags: ["Laravel", "Blade", "PHP", "MySQL"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/amb-monitoring",
    featured: true,
    date: "2024",
  },
  {
    slug: "marketplace",
    title: "Marketplace",
    description:
      "An online marketplace platform with product and transaction management features.",
    longDescription:
      "An e-commerce marketplace application that allows users to sell and buy products online. Features include product management, shopping cart, checkout flow, and order management.",
    tags: ["PHP", "Laravel"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/Marketplace",
    featured: true,
    date: "2024",
  },
  {
    slug: "palugada",
    title: "PaluGada",
    description:
      "A multipurpose web application with several utility features.",
    longDescription:
      "A versatile web application that provides multiple utility features in one platform. Built with vanilla JavaScript, HTML, and CSS without additional frameworks.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/PaluGada",
    featured: false,
    date: "2024",
  },
  {
    slug: "system-monitoring-parkir",
    title: "Parking Monitoring System",
    description:
      "A parking monitoring system for tracking vehicle entry, exit, and slot availability.",
    longDescription:
      "A Java-based desktop application for monitoring parking areas. Features include recording vehicle entry and exit, tracking available parking slots, and generating daily and monthly reports.",
    tags: ["Java"],
    category: "desktop",
    githubUrl: "https://github.com/fajar337/SystemMonitoringParkir",
    featured: false,
    date: "2024",
  },
  {
    slug: "daily-box",
    title: "Daily Box",
    description:
      "A daily task management application for organizing activities and productivity.",
    longDescription:
      "A desktop application for managing daily tasks and activities. Users can add, edit, and delete tasks while tracking completion progress.",
    tags: ["Java"],
    category: "desktop",
    githubUrl: "https://github.com/fajar337/Daily-Box",
    featured: false,
    date: "2024",
  },
  {
    slug: "sistem-pemilihan-jurusan",
    title: "Major Selection System",
    description:
      "A decision-support system that helps students choose a college major.",
    longDescription:
      "A decision-support application that helps high school and vocational students choose a college major based on their interests, strengths, and abilities using a structured decision-making method.",
    tags: ["Java"],
    category: "desktop",
    githubUrl: "https://github.com/fajar337/sistem-pemilihan-jurusan",
    featured: false,
    date: "2024",
  },
  {
    slug: "master-barang",
    title: "Item Master",
    description:
      "An item master data management application for inventory and stock records.",
    longDescription:
      "An item master data management system used to record and manage inventory. Features include item CRUD, search, and category-based grouping.",
    tags: ["Java"],
    category: "desktop",
    githubUrl: "https://github.com/fajar337/master-barang",
    featured: false,
    date: "2024",
  },
  {
    slug: "dufan",
    title: "Dufan",
    description:
      "An alternative Dunia Fantasi-themed web application.",
    longDescription:
      "A Dunia Fantasi (Dufan) themed web application with a different approach and feature set from the Website Dufan version. Built as a Laravel skill-development project.",
    tags: ["PHP", "Laravel"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/dufan",
    featured: false,
    date: "2025",
  },
  {
    slug: "website-thr",
    title: "Website THR",
    description:
      "An interactive website themed around holiday allowance gifts.",
    longDescription:
      "A Tunjangan Hari Raya (THR) themed website with interactive design and animation. Built using JavaScript, HTML, and CSS.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/website-thr",
    featured: false,
    date: "2024",
  },
];
