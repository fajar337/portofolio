export const siteConfig = {
  name: "Fajar",
  title: "Fajar — Web Developer",
  description:
    "Portfolio website of Fajar, a passionate web developer specializing in Laravel, React, and modern web technologies.",
  url: "https://fajar.dev",
  github: "https://github.com/fajar337",
  githubUsername: "fajar337",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/github", label: "GitHub" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/fajar337",
    icon: "github" as const,
  },
  {
    label: "Email",
    href: "mailto:claudeai2@saan.web.id",
    icon: "mail" as const,
  },
] as const;
