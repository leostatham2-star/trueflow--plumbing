"use client";

import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn("h-10 w-10", className)}
      aria-hidden="true"
    >
      {/* house outline */}
      <path
        d="M32 6 8 24v30a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4V24L32 6Z"
        fill="#0e5ed8"
      />
      <path
        d="M32 12 14 26.5V52h36V26.5L32 12Z"
        fill="#ffffff"
      />
      {/* wrench head */}
      <path
        d="M40 22.5a7.5 7.5 0 0 0-10.4 8.6L20 40.7a3.4 3.4 0 0 0 0 4.8l.5.5a3.4 3.4 0 0 0 4.8 0l9.6-9.6a7.5 7.5 0 0 0 8.6-10.4l-4.4 4.4-4-1-1-4 4.4-4.4Z"
        fill="#e8402a"
      />
      {/* water drop */}
      <path
        d="M24 20c0 2.2-1.8 4-4 4s-4-1.8-4-4 4-6 4-6 4 3.8 4 6Z"
        fill="#0e5ed8"
      />
    </svg>
  );
}

export function Logo({
  dark = false,
  className,
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="leading-none">
        <span
          className={cn(
            "block font-heading text-[22px] font-extrabold tracking-tight",
            dark ? "text-white" : "text-navy"
          )}
        >
          TRUE<span className="text-brand">FLOW</span>
        </span>
        <span
          className={cn(
            "mt-1 block text-[10px] font-semibold tracking-[0.18em]",
            dark ? "text-white/60" : "text-muted-ink"
          )}
        >
          PLUMBING & REPAIR
        </span>
      </span>
    </span>
  );
}
