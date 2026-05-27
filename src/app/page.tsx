import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { TechMarquee } from "@/components/home/tech-marquee";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechMarquee />
      <FeaturedProjects />
    </>
  );
}
