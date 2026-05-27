import type { Metadata } from "next";
import { ExperienceContent } from "@/components/experience/experience-content";

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional journey — education and work experience.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
