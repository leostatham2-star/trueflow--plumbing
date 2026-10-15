"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Users, Wrench, Cog } from "lucide-react";
import { IMAGES } from "@/lib/site-data";
import { SectionHeading } from "./shared";

type Props = {
  onNavigate: (route: string) => void;
};

const FEATURES = [
  {
    icon: Wrench,
    title: "Quality Services",
    text: "Workmanship backed by a written guarantee on every job.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    text: "Licensed plumbers with decades of combined field time.",
  },
  {
    icon: BadgeCheck,
    title: "100% Certified",
    text: "Ohio licensed, fully insured, and background checked.",
  },
];

export function HomeAbout({ onNavigate }: Props) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden">
              <img
                src={IMAGES.about}
                alt="TrueFlow plumber fixing pipes under a kitchen sink"
                className="aspect-[4/3.6] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-0 flex items-center gap-4 bg-white px-7 py-6 shadow-[0_20px_50px_rgba(11,21,38,0.12)] lg:-left-8">
              <span className="font-heading text-5xl font-extrabold leading-none text-brand">
                24
              </span>
              <span className="text-[15px] font-bold leading-snug text-ink">
                Years Experiences
                <br />
                <span className="text-brand">Plumbing Services</span>
              </span>
            </div>
          </motion.div>

          {/* copy side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionHeading
              align="left"
              label="About Us"
              title={
                <>
                  Running Water Is Not A Luxury,
                  <br />
                  It Is A Daily Necessity
                </>
              }
              className="mb-6"
            />
            <div className="border-l-4 border-brand pl-5">
              <p className="italic leading-relaxed text-muted-ink">
                Most people never think about their pipes until something goes
                wrong. That is exactly when you need a plumber who answers the
                phone, shows up when promised, and fixes the problem the right
                way instead of the fast way. That has been our whole approach
                since we opened the doors in 2002.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button
                onClick={() => onNavigate("about")}
                className="rounded-sm bg-brand px-8 py-4 font-heading text-[13px] font-bold tracking-wider text-white transition hover:bg-brand-dark"
              >
                ABOUT MORE
              </button>
              <div className="flex items-center gap-3">
                <img
                  src={IMAGES.ceo}
                  alt="Dan Whitfield, owner of TrueFlow Plumbing"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading text-lg font-semibold text-ink">
                    Dan Whitfield
                  </p>
                  <p className="text-sm text-muted-ink">Owner, TrueFlow Plumbing</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* feature cards */}
        <div className="mt-24 grid gap-6 sm:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-border bg-white p-8 text-center shadow-[0_10px_40px_rgba(11,21,38,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,94,216,0.12)]"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand/25 text-brand transition group-hover:bg-brand group-hover:text-white">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted-ink">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeServices({ onNavigate }: Props) {
  const preview = [
    {
      title: "Leak Detection & Repair",
      text: "A small leak can quietly waste hundreds of gallons and stain your walls. We find the source fast and fix it so it stays fixed.",
      image: "/images/service1.png",
    },
    {
      title: "Drain Cleaning",
      text: "Slow sink or standing shower water? Our machines clear stubborn blockages without harming your pipes.",
      image: "/images/service2.png",
    },
    {
      title: "Water Heater Services",
      text: "Quick repairs or full replacement, we install reliable water heaters sized for your household and budget.",
      image: "/images/service3.png",
    },
  ];

  return (
    <section className="bg-blueprint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          label="Our Services"
          title="The Best Services For You"
        />
        <div className="grid gap-7 md:grid-cols-3">
          {preview.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white p-4 pb-7 shadow-[0_12px_40px_rgba(11,21,38,0.06)] transition hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(11,21,38,0.12)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-0 left-0 flex h-16 w-16 items-center justify-center bg-accent-red text-white [clip-path:polygon(0_0,100%_0,100%_78%,78%_100%,0_100%)]">
                  <Cog className="h-7 w-7" />
                </span>
              </div>
              <h3 className="mt-6 px-2 font-heading text-[22px] font-semibold text-ink transition group-hover:text-brand">
                {s.title}
              </h3>
              <p className="mt-3 px-2 text-[15px] leading-relaxed text-muted-ink">
                {s.text}
              </p>
              <button
                onClick={() => onNavigate("services")}
                className="mt-5 px-2 font-heading text-[13px] font-bold tracking-wider text-brand transition hover:text-accent-red"
              >
                LEARN MORE
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactStrip() {
  const items = [
    {
      bg: "bg-brand",
      title: "WE ARE OPEN MONDAY TO SATURDAY",
      value: "7:30 am to 6:00 pm",
    },
    {
      bg: "bg-accent-red",
      title: "HAVE A QUESTION?",
      value: "(414) 555 0134",
      href: "tel:4145550134",
    },
    {
      bg: "bg-brand",
      title: "ANY QUESTION? EMAIL US!",
      value: "help@trueflowplumbing.com",
      href: "mailto:help@trueflowplumbing.com",
    },
  ];
  return (
    <section className="grid text-white md:grid-cols-3">
      {items.map((item) => {
        const inner = (
          <div
            className={`${item.bg} flex h-full flex-col items-center justify-center gap-1 px-6 py-9 text-center transition group-hover:brightness-110`}
          >
            <span className="text-[13px] font-bold tracking-wide text-white/80">
              {item.title}
            </span>
            <span className="font-heading text-xl font-bold sm:text-2xl">
              {item.value}
            </span>
          </div>
        );
        return item.href ? (
          <a key={item.title} href={item.href} className="group block">
            {inner}
          </a>
        ) : (
          <div key={item.title} className="group">
            {inner}
          </div>
        );
      })}
    </section>
  );
}
