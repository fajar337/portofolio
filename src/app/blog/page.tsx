import type { Metadata } from "next";
import { BlogContent } from "@/components/blog/blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about web development, programming, and tech.",
};

export default function BlogPage() {
  return <BlogContent />;
}
