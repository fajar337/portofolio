"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import type { BlogPostMeta } from "@/types/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({ post, index }: { post: BlogPostMeta; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-white/10 hover:bg-card-hover hover:shadow-xl hover:shadow-purple-500/5"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.06]" />

        <div className="mb-3 flex items-center gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readingTime}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-white">
          {post.title}
          <ArrowUpRight className="ml-1 inline-block h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-muted line-clamp-2">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-white/[0.03] px-2.5 py-0.5 text-xs text-muted transition-colors duration-300 group-hover:border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

export function BlogContent({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Blog"
          subtitle="Thoughts on web development and tech"
        />

        {posts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center rounded-xl border border-border bg-card p-12 text-center"
          >
            <h3 className="mb-2 text-lg font-medium">Coming Soon</h3>
            <p className="text-sm text-muted">
              I&apos;m working on some articles. Stay tuned!
            </p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {posts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
