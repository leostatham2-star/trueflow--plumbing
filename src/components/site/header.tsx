"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, X, Facebook, Twitter, Instagram, Linkedin, MapPin, Clock } from "lucide-react";
import { Logo } from "./logo";
import { BRAND, NAV_ITEMS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type Props = {
  route: string;
  onNavigate: (route: string) => void;
};

export function SiteHeader({ route, onNavigate }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (r: string) => {
    setOpen(false);
    onNavigate(r);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* top bar */}
      <div className="hidden bg-navy text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-[13px]">
          <div className="flex items-center gap-6 text-white/75">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              {BRAND.address}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-brand" />
              {BRAND.hoursLine}, {BRAND.hours}
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/75">
            <span className="text-white/90">Follow us:</span>
            <a href="#" aria-label="Facebook" className="transition hover:text-brand">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="transition hover:text-brand">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="transition hover:text-brand">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition hover:text-brand">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div
        className={cn(
          "border-b border-border bg-white transition-shadow",
          scrolled && "shadow-[0_10px_30px_rgba(11,21,38,0.08)]"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <button
            onClick={() => go("home")}
            aria-label="TrueFlow home"
            className="shrink-0"
          >
            <Logo />
          </button>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.route}
                onClick={() => go(item.route)}
                className={cn(
                  "relative py-2 font-heading text-[15px] font-medium transition hover:text-brand",
                  route === item.route ? "text-brand" : "text-ink"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-0.5 rounded bg-brand transition-opacity",
                    route === item.route ? "opacity-100" : "opacity-0"
                  )}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BRAND.phone.replace(/[^0-9]/g, "")}`}
              className="hidden items-center gap-3 md:flex"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Phone className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs font-semibold text-muted-ink">
                  Call Anytime
                </span>
                <span className="block font-heading text-[15px] font-bold text-ink">
                  {BRAND.phone}
                </span>
              </span>
            </a>
            <button
              onClick={() => go("contact")}
              className="hidden rounded-sm bg-accent-red px-6 py-3 font-heading text-[13px] font-bold tracking-wide text-white transition hover:bg-accent-red-dark sm:block"
            >
              GET APPOINTMENT
            </button>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-border text-ink lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-border bg-white lg:hidden"
              aria-label="Mobile"
            >
              <div className="space-y-1 px-4 py-4">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.route}
                    onClick={() => go(item.route)}
                    className={cn(
                      "block w-full rounded-sm px-4 py-3 text-left font-heading text-[15px] font-medium transition",
                      route === item.route
                        ? "bg-brand-soft text-brand"
                        : "text-ink hover:bg-ice"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href={`tel:${BRAND.phone.replace(/[^0-9]/g, "")}`}
                  className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-accent-red px-4 py-3 font-heading text-sm font-bold text-white"
                >
                  <Phone className="h-4 w-4" /> {BRAND.phone}
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
