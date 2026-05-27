"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { ContributionData } from "@/types/github";

const CELL_SIZE = 12;
const GAP = 3;
const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function getLevel(count: number): string {
  if (count === 0) return "rgba(255,255,255,0.03)";
  if (count <= 3) return "rgba(139,92,246,0.25)";
  if (count <= 6) return "rgba(139,92,246,0.45)";
  if (count <= 9) return "rgba(139,92,246,0.65)";
  return "rgba(139,92,246,0.9)";
}

interface TooltipData {
  x: number;
  y: number;
  date: string;
  count: number;
}

export function ContributionGraph({ data }: { data: ContributionData }) {
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);

  const weeks = data.weeks;
  const width = weeks.length * (CELL_SIZE + GAP) + 40;
  const height = 7 * (CELL_SIZE + GAP) + 30;

  // Month labels
  const monthPositions: { label: string; x: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const firstDay = week.contributionDays[0];
    if (firstDay) {
      const month = new Date(firstDay.date).getMonth();
      if (month !== lastMonth) {
        monthPositions.push({
          label: MONTH_LABELS[month],
          x: wi * (CELL_SIZE + GAP) + 40,
        });
        lastMonth = month;
      }
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="relative overflow-x-auto rounded-xl border border-border bg-card p-6"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium">Contributions</h3>
        <span className="text-xs text-muted">
          {data.totalContributions} contributions in the last year
        </span>
      </div>

      <svg width={width} height={height} className="min-w-full">
        {/* Month labels */}
        {monthPositions.map((m, i) => (
          <text
            key={i}
            x={m.x}
            y={10}
            className="fill-muted text-[10px]"
          >
            {m.label}
          </text>
        ))}

        {/* Grid */}
        {weeks.map((week, wi) =>
          week.contributionDays.map((day, di) => (
            <rect
              key={`${wi}-${di}`}
              x={wi * (CELL_SIZE + GAP) + 40}
              y={di * (CELL_SIZE + GAP) + 20}
              width={CELL_SIZE}
              height={CELL_SIZE}
              rx={2}
              fill={getLevel(day.contributionCount)}
              className="transition-colors duration-150 hover:stroke-white/20 hover:stroke-1"
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const parent = e.currentTarget.closest("div")?.getBoundingClientRect();
                if (parent) {
                  setTooltip({
                    x: rect.left - parent.left + CELL_SIZE / 2,
                    y: rect.top - parent.top - 8,
                    date: day.date,
                    count: day.contributionCount,
                  });
                }
              }}
              onMouseLeave={() => setTooltip(null)}
            />
          ))
        )}
      </svg>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-md border border-border bg-[#111] px-2.5 py-1.5 text-xs shadow-lg"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <span className="font-medium text-foreground">
            {tooltip.count} contribution{tooltip.count !== 1 ? "s" : ""}
          </span>{" "}
          <span className="text-muted">on {tooltip.date}</span>
        </div>
      )}

      {/* Legend */}
      <div className="mt-3 flex items-center justify-end gap-1 text-[10px] text-muted">
        <span>Less</span>
        {[0, 2, 5, 8, 12].map((count) => (
          <div
            key={count}
            className="h-3 w-3 rounded-sm"
            style={{ background: getLevel(count) }}
          />
        ))}
        <span>More</span>
      </div>
    </motion.div>
  );
}
