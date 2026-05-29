"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/types/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostLayout({
  post,
  children,
}: {
  post: BlogPost;
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 py-24">
      <article className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Meta */}
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>

          {/* Description */}
          <p className="mb-6 text-lg text-muted">{post.description}</p>

          {/* Tags */}
          <div className="mb-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <hr className="mb-8 border-border" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose-custom"
        >
          {children}
        </motion.div>
      </article>
    </div>
  );
}
