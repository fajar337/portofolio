export const siteConfig = {
  name: "Fajar Mustofa",
  shortName: "Fajar",
  title: "Fajar Mustofa - Web Developer",
  description:
    "Portfolio website of Fajar Mustofa, a fresh graduate web developer from Bekasi specializing in Laravel, React, and modern web technologies.",
  url: "https://fajar.dev",
  github: "https://github.com/fajar337",
  githubUsername: "fajar337",
  location: "Bekasi, Indonesia",
};

export const navLinks = [
  { href: "/", label: "Home", labelKey: "nav.home" },
  { href: "/about", label: "About", labelKey: "nav.about" },
  { href: "/projects", label: "Projects", labelKey: "nav.projects" },
  { href: "/github", label: "GitHub", labelKey: "nav.github" },
  { href: "/experience", label: "Experience", labelKey: "nav.experience" },
  { href: "/blog", label: "Blog", labelKey: "nav.blog" },
  { href: "/contact", label: "Contact", labelKey: "nav.contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/fajar337",
    icon: "github" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fajarmustofa/",
    icon: "linkedin" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fjr.muustafa/",
    icon: "instagram" as const,
  },
  {
    label: "Email",
    href: "mailto:mustofafajar733@gmail.com",
    icon: "mail" as const,
  },
] as const;
