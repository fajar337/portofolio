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
      "Website informasi Dunia Fantasi (Dufan) dengan fitur daftar wahana dan pembelian tiket.",
    longDescription:
      "Website lengkap untuk Dunia Fantasi theme park yang menampilkan informasi wahana, galeri foto, dan fitur pembelian tiket online. Dibangun dengan Laravel dan Blade templating engine, menggunakan MySQL sebagai database.",
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
      "Sistem monitoring AMB berbasis web untuk tracking dan manajemen data secara real-time.",
    longDescription:
      "Aplikasi web monitoring yang digunakan untuk memantau dan mengelola data AMB secara real-time. Fitur meliputi dashboard statistik, pencatatan data, dan laporan. Dibangun menggunakan Laravel dengan antarmuka yang responsif.",
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
      "Platform marketplace jual beli online dengan fitur manajemen produk dan transaksi.",
    longDescription:
      "Aplikasi e-commerce marketplace yang memungkinkan pengguna untuk menjual dan membeli produk secara online. Fitur meliputi manajemen produk, keranjang belanja, proses checkout, dan manajemen order.",
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
      "Aplikasi web multi-purpose dengan berbagai fitur utility.",
    longDescription:
      "Aplikasi web serbaguna yang menyediakan berbagai fitur utility dalam satu platform. Dibangun dengan JavaScript vanilla, HTML, dan CSS tanpa framework tambahan.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/PaluGada",
    featured: false,
    date: "2024",
  },
  {
    slug: "system-monitoring-parkir",
    title: "System Monitoring Parkir",
    description:
      "Sistem monitoring parkir untuk memantau kendaraan masuk/keluar dan ketersediaan slot.",
    longDescription:
      "Aplikasi desktop berbasis Java untuk monitoring area parkir. Fitur meliputi pencatatan kendaraan masuk dan keluar, monitoring ketersediaan slot parkir, serta pembuatan laporan harian dan bulanan.",
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
      "Aplikasi manajemen tugas harian untuk mengatur aktivitas dan produktivitas.",
    longDescription:
      "Aplikasi desktop untuk manajemen tugas dan aktivitas harian. Pengguna dapat menambah, mengedit, dan menghapus tugas, serta melacak progress penyelesaian tugas.",
    tags: ["Java"],
    category: "desktop",
    githubUrl: "https://github.com/fajar337/Daily-Box",
    featured: false,
    date: "2024",
  },
  {
    slug: "sistem-pemilihan-jurusan",
    title: "Sistem Pemilihan Jurusan",
    description:
      "Sistem pendukung keputusan untuk membantu siswa memilih jurusan kuliah.",
    longDescription:
      "Aplikasi sistem pendukung keputusan (SPK) yang membantu siswa SMA/SMK dalam memilih jurusan kuliah yang sesuai dengan minat, bakat, dan kemampuan mereka. Menggunakan metode pengambilan keputusan terstruktur.",
    tags: ["Java"],
    category: "desktop",
    githubUrl: "https://github.com/fajar337/sistem-pemilihan-jurusan",
    featured: false,
    date: "2024",
  },
  {
    slug: "master-barang",
    title: "Master Barang",
    description:
      "Aplikasi pengelolaan master data barang untuk inventaris dan stok.",
    longDescription:
      "Sistem pengelolaan master data barang yang digunakan untuk mencatat dan mengelola inventaris. Fitur meliputi CRUD data barang, pencarian, dan pengelompokan berdasarkan kategori.",
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
      "Versi alternatif aplikasi bertema Dunia Fantasi.",
    longDescription:
      "Aplikasi web bertema Dunia Fantasi (Dufan) dengan pendekatan dan fitur yang berbeda dari versi Website Dufan. Dibangun sebagai project pengembangan skill Laravel.",
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
      "Website interaktif bertema Tunjangan Hari Raya.",
    longDescription:
      "Website bertema Tunjangan Hari Raya (THR) dengan desain interaktif dan animasi. Dibangun menggunakan JavaScript, HTML, dan CSS.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/website-thr",
    featured: false,
    date: "2024",
  },
];
