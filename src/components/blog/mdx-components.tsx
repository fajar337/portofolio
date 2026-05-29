import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1 className="mb-4 mt-10 text-3xl font-bold tracking-tight" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="mb-3 mt-8 border-b border-border pb-2 text-2xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mb-2 mt-6 text-xl font-semibold" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="mb-4 leading-relaxed text-muted" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline underline-offset-4 transition-colors hover:text-accent-secondary"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="font-medium text-accent underline underline-offset-4 transition-colors hover:text-accent-secondary"
        {...props}
      >
        {children}
      </Link>
    );
  },
  ul: ({ children, ...props }) => (
    <ul className="mb-4 list-disc space-y-1 pl-6 text-muted" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-4 list-decimal space-y-1 pl-6 text-muted" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-4 border-l-2 border-accent pl-4 italic text-muted"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }) => (
    <code
      className="rounded-md bg-white/[0.06] px-1.5 py-0.5 font-mono text-sm text-foreground"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }) => (
    <pre
      className="mb-4 overflow-x-auto rounded-xl border border-border bg-[#0a0a0a] p-4 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),
  img: ({ src, alt, ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt || ""}
      className="my-6 rounded-xl border border-border"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-border" />,
  table: ({ children, ...props }) => (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border border-border bg-white/[0.03] px-4 py-2 text-left font-semibold"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border border-border px-4 py-2 text-muted" {...props}>
      {children}
    </td>
  ),
};
