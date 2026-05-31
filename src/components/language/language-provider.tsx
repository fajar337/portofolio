"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Language = "en" | "id";

type TranslationValue = string | Record<string, string>;
type TranslationTree = Record<string, TranslationValue>;

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      github: "GitHub",
      experience: "Experience",
      blog: "Blog",
      contact: "Contact",
    },
    common: {
      connect: "Connect",
      location: "Location",
      pages: "Pages",
      viewAll: "View all",
      viewAllProjects: "View all projects",
      source: "Source",
      details: "Details",
      backToProjects: "Back to Projects",
      viewSource: "View Source",
      liveDemo: "Live Demo",
    },
    home: {
      available: "Available for work",
      introPrefix: "Hi, I'm",
      taglineA: "A",
      freshGraduate: "Fresh Graduate",
      webDeveloper: "Web Developer",
      taglineB: "from Bekasi, building modern web apps with",
      viewProjects: "View Projects",
      githubDashboard: "GitHub Dashboard",
      statement: "I turn ideas into clean, functional, and beautiful web experiences.",
      featuredTitle: "Featured Projects",
      featuredSubtitle: "Some of my recent work",
      githubCtaTitle: "Check my GitHub",
      githubCtaSubtitle: "Real-time stats, contributions & activity",
    },
    bento: {
      frontendTitle: "Frontend Development",
      frontendDescription: "React, Next.js, Tailwind CSS - building fast, responsive UIs",
      backendTitle: "Backend Development",
      backendDescription: "Laravel, PHP, REST APIs",
      desktopTitle: "Desktop Apps",
      desktopDescription: "Java applications",
      responsiveTitle: "Responsive Design",
      responsiveDescription: "Mobile-first approach, pixel-perfect across all devices",
    },
    about: {
      title: "About Me",
      subtitle: "Get to know who I am and what I do",
      bioA: "Hi! I'm",
      bioB: "a fresh graduate from",
      bioC: "majoring in Software Engineering. I'm passionate about building modern web applications with clean code and thoughtful user experiences. My main tech stack includes",
    },
    projects: {
      title: "Projects",
      subtitle: "A collection of things I've built",
      all: "All",
      showing: "Showing",
      project: "project",
      projects: "projects",
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey and education",
    },
    github: {
      title: "GitHub Dashboard",
      subtitle: "Real-time stats & activity",
      unavailable: "GitHub data is currently unavailable. Please configure a",
      unavailableSuffix: "environment variable to enable the dashboard.",
    },
    blog: {
      title: "Blog",
      subtitle: "Thoughts on web development and tech",
      comingSoon: "Coming Soon",
      empty: "I'm working on some articles. Stay tuned!",
    },
    contact: {
      title: "Contact",
      subtitle: "Have a question or want to work together?",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Your message...",
      sending: "Sending...",
      send: "Send Message",
      fallback: "Web3Forms is not configured. Opening your email app as a fallback.",
      success: "Message sent! I'll get back to you soon.",
      failure: "Failed to send message. Please try again.",
      validationName: "Name is required",
      validationEmail: "Invalid email address",
      validationSubject: "Subject is required",
      validationMessage: "Message must be at least 10 characters",
    },
    footer: {
      description: "Fresh Graduate & Web Developer from Bekasi, building modern web apps.",
      builtWith: "Built with Next.js & Tailwind CSS",
    },
    notFound: {
      title: "Page not found",
      back: "Back to Home",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      github: "GitHub",
      experience: "Pengalaman",
      blog: "Blog",
      contact: "Kontak",
    },
    common: {
      connect: "Terhubung",
      location: "Lokasi",
      pages: "Halaman",
      viewAll: "Lihat semua",
      viewAllProjects: "Lihat semua proyek",
      source: "Kode",
      details: "Detail",
      backToProjects: "Kembali ke Proyek",
      viewSource: "Lihat Kode",
      liveDemo: "Demo Live",
    },
    home: {
      available: "Tersedia untuk bekerja",
      introPrefix: "Hai, saya",
      taglineA: "Seorang",
      freshGraduate: "Fresh Graduate",
      webDeveloper: "Web Developer",
      taglineB: "dari Bekasi, membangun aplikasi web modern dengan",
      viewProjects: "Lihat Proyek",
      githubDashboard: "Dashboard GitHub",
      statement: "Saya mengubah ide menjadi pengalaman web yang bersih, fungsional, dan menarik.",
      featuredTitle: "Proyek Pilihan",
      featuredSubtitle: "Beberapa karya terbaru saya",
      githubCtaTitle: "Cek GitHub saya",
      githubCtaSubtitle: "Statistik, kontribusi, dan aktivitas real-time",
    },
    bento: {
      frontendTitle: "Frontend Development",
      frontendDescription: "React, Next.js, Tailwind CSS - membangun UI cepat dan responsif",
      backendTitle: "Backend Development",
      backendDescription: "Laravel, PHP, REST API",
      desktopTitle: "Aplikasi Desktop",
      desktopDescription: "Aplikasi Java",
      responsiveTitle: "Responsive Design",
      responsiveDescription: "Pendekatan mobile-first, rapi di semua perangkat",
    },
    about: {
      title: "Tentang Saya",
      subtitle: "Kenali siapa saya dan apa yang saya kerjakan",
      bioA: "Halo! Saya",
      bioB: "fresh graduate dari",
      bioC: "jurusan Rekayasa Perangkat Lunak. Saya antusias membangun aplikasi web modern dengan kode yang bersih dan pengalaman pengguna yang nyaman. Tech stack utama saya meliputi",
    },
    projects: {
      title: "Proyek",
      subtitle: "Kumpulan hal yang pernah saya buat",
      all: "Semua",
      showing: "Menampilkan",
      project: "proyek",
      projects: "proyek",
    },
    experience: {
      title: "Pengalaman",
      subtitle: "Perjalanan profesional dan pendidikan saya",
    },
    github: {
      title: "Dashboard GitHub",
      subtitle: "Statistik dan aktivitas real-time",
      unavailable: "Data GitHub sedang tidak tersedia. Konfigurasikan",
      unavailableSuffix: "environment variable untuk mengaktifkan dashboard.",
    },
    blog: {
      title: "Blog",
      subtitle: "Catatan tentang web development dan teknologi",
      comingSoon: "Segera Hadir",
      empty: "Saya sedang menyiapkan beberapa artikel. Tunggu ya!",
    },
    contact: {
      title: "Kontak",
      subtitle: "Punya pertanyaan atau ingin bekerja sama?",
      name: "Nama",
      email: "Email",
      subject: "Subjek",
      message: "Pesan kamu...",
      sending: "Mengirim...",
      send: "Kirim Pesan",
      fallback: "Web3Forms belum dikonfigurasi. Membuka aplikasi email sebagai fallback.",
      success: "Pesan terkirim! Saya akan segera membalas.",
      failure: "Gagal mengirim pesan. Silakan coba lagi.",
      validationName: "Nama wajib diisi",
      validationEmail: "Alamat email tidak valid",
      validationSubject: "Subjek wajib diisi",
      validationMessage: "Pesan minimal 10 karakter",
    },
    footer: {
      description: "Fresh Graduate & Web Developer dari Bekasi, membangun aplikasi web modern.",
      builtWith: "Dibuat dengan Next.js & Tailwind CSS",
    },
    notFound: {
      title: "Halaman tidak ditemukan",
      back: "Kembali ke Beranda",
    },
  },
} satisfies Record<Language, TranslationTree>;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_STORAGE_KEY = "portfolio-language";
const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

function getTranslation(language: Language, key: string) {
  const parts = key.split(".");
  let value: TranslationValue | TranslationTree = translations[language];

  for (const part of parts) {
    if (typeof value !== "object" || value === null || !(part in value)) {
      return key;
    }
    value = value[part] as TranslationValue;
  }

  return typeof value === "string" ? value : key;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(
    (callback) => {
      window.addEventListener(LANGUAGE_CHANGE_EVENT, callback);
      window.addEventListener("storage", callback);
      return () => {
        window.removeEventListener(LANGUAGE_CHANGE_EVENT, callback);
        window.removeEventListener("storage", callback);
      };
    },
    () => {
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return saved === "id" ? "id" : "en";
    },
    () => "en"
  );

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage === "id" ? "id" : "en";
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  };

  useEffect(() => {
    document.documentElement.lang = language === "id" ? "id" : "en";
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "en" ? "id" : "en"),
      t: (key: string) => getTranslation(language, key),
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
