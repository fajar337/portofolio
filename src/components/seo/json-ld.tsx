import { siteConfig } from "@/lib/constants";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: "Web Developer",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bekasi",
      addressCountry: "ID",
    },
    sameAs: [
      siteConfig.github,
      "https://www.linkedin.com/in/fajarmustofa/",
      "https://www.instagram.com/fjr.muustafa/",
    ],
    knowsAbout: [
      "Laravel",
      "React",
      "Next.js",
      "PHP",
      "JavaScript",
      "TypeScript",
      "Java",
      "MySQL",
      "Tailwind CSS",
      "Web Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
