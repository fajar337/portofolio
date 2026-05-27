"use client";

import { motion } from "framer-motion";
import type { LanguageStat } from "@/types/github";

export function LanguageChart({ languages }: { languages: LanguageStat[] }) {
  const top = languages.slice(0, 8);

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 text-sm font-medium">Languages</h3>

      {/* Bar */}
      <div className="mb-4 flex h-3 overflow-hidden rounded-full bg-white/[0.03]">
        {top.map((lang) => (
          <motion.div
            key={lang.name}
            initial={{ width: 0 }}
            animate={{ width: `${lang.percentage}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full"
            style={{ backgroundColor: lang.color }}
            title={`${lang.name}: ${lang.percentage}%`}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-2">
        {top.map((lang) => (
          <div key={lang.name} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: lang.color }}
            />
            <span className="text-xs text-muted">
              {lang.name}{" "}
              <span className="text-foreground font-medium">
                {lang.percentage}%
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
