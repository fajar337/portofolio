import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Fajar — a web developer passionate about Laravel, React, and modern web technologies.",
};

export default function AboutPage() {
  return <AboutContent />;
}
