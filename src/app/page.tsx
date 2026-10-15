"use client";

import { useCallback, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { HomeHero } from "@/components/site/home-hero";
import {
  HomeAbout,
  HomeServices,
  ContactStrip,
} from "@/components/site/home-sections";
import {
  QuoteSection,
  TeamSection,
  CtaBanner,
} from "@/components/site/home-quote-team";
import {
  WhyChooseUs,
  Testimonials,
  Partners,
  WorkingProcess,
  Counters,
  BlogSection,
} from "@/components/site/home-extras";
import { AboutPage } from "@/components/site/about-page";
import { ServicesPage } from "@/components/site/services-page";
import { ContactPage } from "@/components/site/contact-page";

type Route = "home" | "about" | "services" | "contact";

const ROUTES: Route[] = ["home", "about", "services", "contact"];

function parseHash(h: string): Route {
  const clean = h.replace(/^#\/?/, "").toLowerCase();
  return (ROUTES as string[]).includes(clean) ? (clean as Route) : "home";
}

function subscribeHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function getHashSnapshot(): string {
  return window.location.hash;
}

function getHashServerSnapshot(): string {
  return "#/";
}

function HomePage({ onNavigate }: { onNavigate: (r: string) => void }) {
  return (
    <>
      <HomeHero onNavigate={onNavigate} />
      <HomeAbout onNavigate={onNavigate} />
      <HomeServices onNavigate={onNavigate} />
      <ContactStrip />
      <QuoteSection />
      <TeamSection />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <WorkingProcess />
      <Counters />
      <BlogSection />
    </>
  );
}

export default function Page() {
  const hash = useSyncExternalStore(
    subscribeHash,
    getHashSnapshot,
    getHashServerSnapshot
  );
  const route = parseHash(hash);

  const navigate = useCallback((r: string) => {
    const next = (ROUTES as string[]).includes(r) ? (r as Route) : "home";
    const target = `#/${next === "home" ? "" : next}`;
    if (window.location.hash !== target) {
      window.location.hash = target;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader route={route} onNavigate={navigate} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={route}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {route === "home" && <HomePage onNavigate={navigate} />}
            {route === "about" && <AboutPage />}
            {route === "services" && <ServicesPage />}
            {route === "contact" && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter onNavigate={navigate} />
    </div>
  );
}
