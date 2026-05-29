import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { BlogContent } from "@/components/blog/blog-content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles about web development, programming, and tech.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogContent posts={posts} />;
}
