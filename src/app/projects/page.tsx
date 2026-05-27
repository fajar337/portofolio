import type { Metadata } from "next";
import { ProjectsContent } from "@/components/projects/projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Browse my projects — web apps, tools, and experiments built with Laravel, React, Java, and more.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
