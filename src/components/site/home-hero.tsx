"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { IMAGES } from "@/lib/site-data";

const SLIDES = [
  {
    label: "WE ARE MASTERS OF PLUMBING",
    title: (
      <>
        TRUST US WITH
        <br />
        YOUR NEEDS <span className="text-brand">!</span>
      </>
    ),
    text: "From a dripping faucet to a full repipe, our licensed plumbers show up on time, explain the work in plain words, and leave your home cleaner than we found it.",
    image: IMAGES.hero1,
  },
  {
    label: "EMERGENCY CREWS ON CALL",
    title: (
      <>
        LEAKS FIXED
        <br />
        DAY OR NIGHT <span className="text-brand">!</span>
      </>
    ),
    text: "Burst pipe at two in the morning? Our emergency line rings to a live dispatcher, and a stocked truck can be outside your door within the hour.",
    image: IMAGES.hero2,
  },
  {
    label: "TWENTY FOUR YEARS IN THE TRADE",
    title: (
      <>
        YOUR PIPES ARE IN
        <br />
        GOOD HANDS <span className="text-brand">!</span>
      </>
    ),
    text: "Neighbors across Columbus have trusted our family run crew since 2002. Written prices, tidy work, and fixes that hold for years.",
    image: IMAGES.hero3,
  },
];

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Facebook, label: "Facebook" },
];

type Props = {
  onNavigate: (route: string) => void;
};

export function HomeHero({ onNavigate }: Props) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number, direction: number) => {
    setDir(direction);
    setIndex((next + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const t = setInterval(() => go(index + 1, 1), 7000);
    return () => clearInterval(t);
  }, [index]);

  const slide = SLIDES[index];

  return (
    <section className="relative overflow-hidden bg-ice">
      {/* diagonal background, echoes theme split */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-y-0 left-0 w-full"
          style={{
            background:
              "linear-gradient(100deg, #e7eefb 0%, #e7eefb 52%, rgba(231,238,251,0.35) 60%, rgba(231,238,251,0) 70%)",
          }}
        />
        <div
          className="absolute -left-24 top-0 h-full w-[38%] bg-brand"
          style={{ clipPath: "polygon(0 0, 55% 0, 26% 100%, 0 100%)" }}
        />
      </div>

      {/* vertical social rail */}
      <div className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-7 bg-brand/95 py-8 text-white/80 lg:flex">
        {SOCIALS.map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="[writing-mode:vertical-rl] rotate-180 text-[11px] font-semibold tracking-[0.22em] transition hover:text-white"
          >
            {label.toUpperCase()}
          </a>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-0 lg:pb-24 lg:pt-24 lg:pl-40">
        {/* copy */}
        <div className="relative min-h-[300px] sm:min-h-[280px] lg:min-h-[330px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 * dir }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 * dir }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="mb-4 font-heading text-sm font-semibold tracking-[0.25em] text-brand">
                {slide.label}
              </p>
              <h1 className="font-heading text-[40px] font-extrabold leading-[1.08] text-navy sm:text-[56px] lg:text-[60px]">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-muted-ink">
                {slide.text}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate("services")}
              className="rounded-sm bg-brand px-8 py-4 font-heading text-[13px] font-bold tracking-wider text-white transition hover:bg-brand-dark"
            >
              EXPLORE MORE
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="rounded-sm bg-accent-red px-8 py-4 font-heading text-[13px] font-bold tracking-wider text-white transition hover:bg-accent-red-dark"
            >
              GET APPOINTMENT
            </button>
          </div>

          {/* slider controls */}
          <div className="mt-10 hidden gap-3 lg:flex">
            <button
              onClick={() => go(index - 1, -1)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-navy/15 bg-white/70 text-navy transition hover:bg-brand hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(index + 1, 1)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-navy/15 bg-white/70 text-navy transition hover:bg-brand hover:text-white"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* image */}
        <div className="relative">
          <div className="relative ml-auto aspect-[4/3.4] w-full overflow-hidden lg:aspect-auto lg:h-[560px] lg:w-[110%] lg:max-w-none lg:translate-x-6 lg:rounded-none">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt="TrueFlow plumber at work"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
            {/* experience badge */}
            <div className="absolute bottom-6 left-0 flex items-center gap-4 bg-brand px-6 py-5 text-white shadow-xl lg:left-6">
              <span className="font-heading text-5xl font-extrabold leading-none">24</span>
              <span className="text-[13px] font-semibold leading-snug">
                Years Experience
                <br />
                <span className="text-white/70">Plumbing Services</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
