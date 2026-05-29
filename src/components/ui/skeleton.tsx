"use client";

export function LoadingSkeleton() {
  return (
    <div className="animate-pulse px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading skeleton */}
        <div className="mb-12 flex flex-col items-center gap-3">
          <div className="h-8 w-48 rounded-lg bg-white/[0.05]" />
          <div className="h-4 w-64 rounded-md bg-white/[0.03]" />
        </div>

        {/* Cards skeleton */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex justify-between">
                <div className="h-5 w-5 rounded bg-white/[0.05]" />
                <div className="h-4 w-16 rounded-full bg-white/[0.03]" />
              </div>
              <div className="mb-2 h-5 w-3/4 rounded bg-white/[0.05]" />
              <div className="mb-1 h-4 w-full rounded bg-white/[0.03]" />
              <div className="mb-5 h-4 w-2/3 rounded bg-white/[0.03]" />
              <div className="flex gap-2">
                <div className="h-6 w-16 rounded-full bg-white/[0.03]" />
                <div className="h-6 w-12 rounded-full bg-white/[0.03]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="animate-pulse px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center gap-3">
          <div className="h-8 w-56 rounded-lg bg-white/[0.05]" />
          <div className="h-4 w-72 rounded-md bg-white/[0.03]" />
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-5 text-center"
            >
              <div className="mx-auto mb-2 h-5 w-5 rounded bg-white/[0.05]" />
              <div className="mx-auto mb-1 h-7 w-12 rounded bg-white/[0.05]" />
              <div className="mx-auto h-3 w-16 rounded bg-white/[0.03]" />
            </div>
          ))}
        </div>

        {/* Heatmap */}
        <div className="mb-8 h-40 rounded-xl border border-border bg-card" />

        {/* Two columns */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="h-64 rounded-xl border border-border bg-card" />
          <div className="space-y-8">
            <div className="h-40 rounded-xl border border-border bg-card" />
            <div className="grid grid-cols-2 gap-4">
              <div className="h-28 rounded-xl border border-border bg-card" />
              <div className="h-28 rounded-xl border border-border bg-card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
