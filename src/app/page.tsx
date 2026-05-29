import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { TechMarquee } from "@/components/home/tech-marquee";
import { ScrollStatement } from "@/components/home/scroll-statement";
import { BentoSection } from "@/components/home/bento-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechMarquee />
      <ScrollStatement />
      <BentoSection />
      <FeaturedProjects />
    </>
  );
}
