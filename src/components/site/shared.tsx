"use client";

import { Droplets, Cog } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  title,
  dark = false,
  align = "center",
  className,
}: {
  label: string;
  title: React.ReactNode;
  dark?: boolean;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-14",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <p
        className={cn(
          "mb-3 flex items-center gap-2 font-heading text-[15px] font-semibold text-brand",
          align === "center" && "justify-center"
        )}
      >
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-brand/40">
          <Droplets className="h-3.5 w-3.5 text-accent-red" />
          <span className="absolute inset-0 rounded-full border border-brand/20 animate-ping" />
        </span>
        {label}
      </p>
      <h2
        className={cn(
          "font-heading text-[28px] font-bold leading-[1.2] sm:text-[38px]",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
    </div>
  );
}

export function PageBanner({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-dots py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "linear-gradient(105deg, transparent 55%, rgba(14,94,216,0.35) 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
          <Cog className="h-4 w-4 text-brand" />
          <span>TrueFlow</span>
          <span className="text-brand">/</span>
          <span className="text-white/85">{crumb}</span>
        </p>
      </div>
    </section>
  );
}
