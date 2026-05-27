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
    description: "Website untuk Dunia Fantasi (Dufan) theme park.",
    longDescription:
      "Website lengkap untuk Dunia Fantasi theme park dengan fitur informasi wahana, pembelian tiket, dan galeri foto.",
    tags: ["Laravel", "Blade", "PHP", "MySQL"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/Website-Dufan",
    featured: true,
    date: "2024",
  },
  {
    slug: "amb-monitoring",
    title: "AMB Monitoring",
    description: "Sistem monitoring AMB berbasis web.",
    longDescription:
      "Aplikasi monitoring berbasis web untuk tracking dan manajemen data AMB secara real-time.",
    tags: ["Laravel", "Blade", "PHP", "MySQL"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/amb-monitoring",
    featured: true,
    date: "2024",
  },
  {
    slug: "palugada",
    title: "PaluGada",
    description: "Aplikasi web multi-purpose.",
    longDescription: "Aplikasi web serbaguna dengan berbagai fitur utility.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/PaluGada",
    featured: true,
    date: "2024",
  },
  {
    slug: "daily-box",
    title: "Daily Box",
    description: "Aplikasi manajemen tugas harian.",
    longDescription:
      "Aplikasi desktop untuk manajemen tugas dan aktivitas harian dengan fitur tracking dan reminder.",
    tags: ["Java"],
    category: "desktop",
    githubUrl: "https://github.com/fajar337/Daily-Box",
    featured: false,
    date: "2024",
  },
  {
    slug: "sistem-pemilihan-jurusan",
    title: "Sistem Pemilihan Jurusan",
    description: "Sistem pendukung keputusan pemilihan jurusan kuliah.",
    longDescription:
      "Aplikasi sistem pendukung keputusan untuk membantu siswa memilih jurusan kuliah yang sesuai.",
    tags: ["Java"],
    category: "desktop",
    githubUrl: "https://github.com/fajar337/sistem-pemilihan-jurusan",
    featured: false,
    date: "2024",
  },
  {
    slug: "website-thr",
    title: "Website THR",
    description: "Website bertema THR (Tunjangan Hari Raya).",
    longDescription: "Website interaktif bertema Tunjangan Hari Raya.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/website-thr",
    featured: false,
    date: "2024",
  },
];
