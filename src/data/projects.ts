export interface Project {
  slug: string;
  title: string;
  titleId?: string;
  description: string;
  descriptionId: string;
  longDescription: string;
  longDescriptionId: string;
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
    titleId: "Website Dufan",
    description:
      "An informational Dunia Fantasi (Dufan) website with attraction listings and ticket purchasing.",
    descriptionId:
      "Website informasi Dunia Fantasi (Dufan) dengan daftar wahana dan pembelian tiket.",
    longDescription:
      "A complete website for the Dunia Fantasi theme park featuring attraction details, photo galleries, and online ticket purchasing. Built with Laravel, the Blade templating engine, and MySQL as the database.",
    longDescriptionId:
      "Website lengkap untuk Dunia Fantasi yang menampilkan detail wahana, galeri foto, dan pembelian tiket online. Dibangun dengan Laravel, Blade, dan MySQL sebagai database.",
    tags: ["Laravel", "Blade", "PHP", "MySQL"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/Website-Dufan",
    featured: true,
    date: "2024",
  },
  {
    slug: "amb-monitoring",
    title: "AMB Monitoring",
    titleId: "AMB Monitoring",
    description:
      "A web-based AMB monitoring system for real-time tracking and data management.",
    descriptionId:
      "Sistem monitoring AMB berbasis web untuk tracking dan manajemen data real-time.",
    longDescription:
      "A monitoring web application used to track and manage AMB data in real time. Features include a statistics dashboard, data entry, and reporting. Built with Laravel and a responsive interface.",
    longDescriptionId:
      "Aplikasi web monitoring untuk memantau dan mengelola data AMB secara real-time. Fiturnya meliputi dashboard statistik, pencatatan data, dan laporan. Dibangun dengan Laravel dan antarmuka responsif.",
    tags: ["Laravel", "Blade", "PHP", "MySQL"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/amb-monitoring",
    featured: true,
    date: "2024",
  },
  {
    slug: "marketplace",
    title: "Marketplace",
    titleId: "Marketplace",
    description:
      "An online marketplace platform with product and transaction management features.",
    descriptionId:
      "Platform marketplace online dengan fitur manajemen produk dan transaksi.",
    longDescription:
      "An e-commerce marketplace application that allows users to sell and buy products online. Features include product management, shopping cart, checkout flow, and order management.",
    longDescriptionId:
      "Aplikasi e-commerce marketplace yang memungkinkan pengguna menjual dan membeli produk online. Fiturnya meliputi manajemen produk, keranjang belanja, checkout, dan manajemen pesanan.",
    tags: ["PHP", "Laravel"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/Marketplace",
    featured: true,
    date: "2024",
  },
  {
    slug: "palugada",
    title: "PaluGada",
    titleId: "PaluGada",
    description:
      "A multipurpose web application with several utility features.",
    descriptionId:
      "Aplikasi web serbaguna dengan beberapa fitur utilitas.",
    longDescription:
      "A versatile web application that provides multiple utility features in one platform. Built with vanilla JavaScript, HTML, and CSS without additional frameworks.",
    longDescriptionId:
      "Aplikasi web serbaguna yang menyediakan beberapa fitur utilitas dalam satu platform. Dibangun dengan vanilla JavaScript, HTML, dan CSS tanpa framework tambahan.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/PaluGada",
    featured: false,
    date: "2024",
  },
  {
    slug: "system-monitoring-parkir",
    title: "Parking Monitoring System",
    titleId: "Sistem Monitoring Parkir",
    description:
      "A parking monitoring system for tracking vehicle entry, exit, and slot availability.",
    descriptionId:
      "Sistem monitoring parkir untuk memantau kendaraan masuk, keluar, dan ketersediaan slot.",
    longDescription:
      "A Java-based desktop application for monitoring parking areas. Features include recording vehicle entry and exit, tracking available parking slots, and generating daily and monthly reports.",
    longDescriptionId:
      "Aplikasi desktop berbasis Java untuk monitoring area parkir. Fiturnya meliputi pencatatan kendaraan masuk dan keluar, monitoring slot parkir, serta laporan harian dan bulanan.",
    tags: ["Java"],
    category: "desktop",
    githubUrl: "https://github.com/fajar337/SystemMonitoringParkir",
    featured: false,
    date: "2024",
  },
  {
    slug: "daily-box",
    title: "Daily Box",
    titleId: "Daily Box",
    description:
      "A daily task management application for organizing activities and productivity.",
    descriptionId:
      "Aplikasi manajemen tugas harian untuk mengatur aktivitas dan produktivitas.",
    longDescription:
      "A desktop application for managing daily tasks and activities. Users can add, edit, and delete tasks while tracking completion progress.",
    longDescriptionId:
      "Aplikasi desktop untuk mengelola tugas dan aktivitas harian. Pengguna dapat menambah, mengedit, dan menghapus tugas, serta melacak progress penyelesaian.",
    tags: ["Java"],
    category: "desktop",
    githubUrl: "https://github.com/fajar337/Daily-Box",
    featured: false,
    date: "2024",
  },
  {
    slug: "sistem-pemilihan-jurusan",
    title: "Major Selection System",
    titleId: "Sistem Pemilihan Jurusan",
    description:
      "A decision-support system that helps students choose a college major.",
    descriptionId:
      "Sistem pendukung keputusan untuk membantu siswa memilih jurusan kuliah.",
    longDescription:
      "A decision-support application that helps high school and vocational students choose a college major based on their interests, strengths, and abilities using a structured decision-making method.",
    longDescriptionId:
      "Aplikasi sistem pendukung keputusan yang membantu siswa SMA/SMK memilih jurusan kuliah sesuai minat, bakat, dan kemampuan dengan metode pengambilan keputusan terstruktur.",
    tags: ["Java"],
    category: "desktop",
    githubUrl: "https://github.com/fajar337/sistem-pemilihan-jurusan",
    featured: false,
    date: "2024",
  },
  {
    slug: "master-barang",
    title: "Item Master",
    titleId: "Master Barang",
    description:
      "An item master data management application for inventory and stock records.",
    descriptionId:
      "Aplikasi pengelolaan master data barang untuk inventaris dan stok.",
    longDescription:
      "An item master data management system used to record and manage inventory. Features include item CRUD, search, and category-based grouping.",
    longDescriptionId:
      "Sistem pengelolaan master data barang untuk mencatat dan mengelola inventaris. Fiturnya meliputi CRUD data barang, pencarian, dan pengelompokan berdasarkan kategori.",
    tags: ["Java"],
    category: "desktop",
    githubUrl: "https://github.com/fajar337/master-barang",
    featured: false,
    date: "2024",
  },
  {
    slug: "dufan",
    title: "Dufan",
    titleId: "Dufan",
    description:
      "An alternative Dunia Fantasi-themed web application.",
    descriptionId:
      "Versi alternatif aplikasi web bertema Dunia Fantasi.",
    longDescription:
      "A Dunia Fantasi (Dufan) themed web application with a different approach and feature set from the Website Dufan version. Built as a Laravel skill-development project.",
    longDescriptionId:
      "Aplikasi web bertema Dunia Fantasi (Dufan) dengan pendekatan dan fitur yang berbeda dari versi Website Dufan. Dibangun sebagai proyek pengembangan skill Laravel.",
    tags: ["PHP", "Laravel"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/dufan",
    featured: false,
    date: "2025",
  },
  {
    slug: "website-thr",
    title: "Website THR",
    titleId: "Website THR",
    description:
      "An interactive website themed around holiday allowance gifts.",
    descriptionId:
      "Website interaktif bertema Tunjangan Hari Raya.",
    longDescription:
      "A Tunjangan Hari Raya (THR) themed website with interactive design and animation. Built using JavaScript, HTML, and CSS.",
    longDescriptionId:
      "Website bertema Tunjangan Hari Raya (THR) dengan desain interaktif dan animasi. Dibangun menggunakan JavaScript, HTML, dan CSS.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "web-app",
    githubUrl: "https://github.com/fajar337/website-thr",
    featured: false,
    date: "2024",
  },
];
