"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  Gem,
  Sparkles,
  ArrowUpCircle,
  ArrowLeft,
  ArrowRight,
  Star,
  Play,
  Users,
  ClipboardList,
  Wrench,
  BadgeCheck,
} from "lucide-react";

/* ---------------- Why choose us ---------------- */

const SKILLS = [
  { label: "First Visit Fixes", value: 96 },
  { label: "On Time Arrival", value: 94 },
  { label: "Drain Cleaning Success", value: 92 },
  { label: "Customer Satisfaction", value: 98 },
];

const PERKS = [
  {
    icon: Clock,
    title: "24/7 Services",
    text: "Day or night, our emergency line connects you with a real plumber, not an answering machine.",
  },
  {
    icon: Gem,
    title: "Quality Materials",
    text: "We install trusted brands and proper parts, because a cheap fitting today becomes next month's leak.",
  },
  {
    icon: Sparkles,
    title: "Professional Touch",
    text: "Shoe covers, drop cloths, and a full cleanup when the job is done. Your home stays spotless.",
  },
  {
    icon: ArrowUpCircle,
    title: "Water Heater Upgrades",
    text: "From tank to tankless, we size and install heaters that cut energy bills and never run cold.",
  },
];

export function WhyChooseUs() {
  const barsRef = useRef<HTMLDivElement>(null);
  const barsInView = useInView(barsRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-ice py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-3 font-heading text-[15px] font-semibold text-brand">
                Why Choose Us
              </p>
              <h2 className="font-heading text-[28px] font-bold leading-tight text-ink sm:text-[38px]">
                Trust A Plumber When You
                <br />
                Do Not Know What To Do
              </h2>
            </motion.div>

            <div ref={barsRef} className="mt-10 space-y-7">
              {SKILLS.map((skill, i) => (
                <div key={skill.label}>
                  <div className="mb-2.5 flex items-center justify-between">
                    <span className="font-heading text-[15px] font-semibold text-ink">
                      {skill.label}
                    </span>
                    <span className="font-heading text-[15px] font-bold text-brand">
                      {skill.value}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded bg-white">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={barsInView ? { width: `${skill.value}%` } : {}}
                      transition={{ duration: 1.2, delay: i * 0.15, ease: "easeOut" }}
                      className="h-full rounded bg-brand"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* video style image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative cursor-pointer overflow-hidden"
          >
            <img
              src="/images/whyvideo.png"
              alt="TrueFlow plumber checking a water meter"
              className="aspect-[4/3.2] w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/25 transition group-hover:bg-navy/15" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-2xl transition group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 text-brand" />
            </span>
          </motion.div>
        </div>

        {/* perk cards */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 text-center shadow-[0_10px_40px_rgba(11,21,38,0.05)] transition hover:-translate-y-1"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand/30 text-brand">
                <perk.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                {perk.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted-ink">
                {perk.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

const TESTIMONIALS = [
  {
    quote:
      "I had TrueFlow out to fix a burst pipe behind our washing machine and I could not be happier with the service. Marcus showed up inside forty minutes, explained exactly what needed to happen, and had everything back in working order the same afternoon. The final bill matched the quote to the dollar.",
    name: "David Coleman",
    role: "Homeowner in Westerville",
    avatar: "/images/team1.png",
  },
  {
    quote:
      "We have used TrueFlow for years, from a full bathroom remodel to small fixes like a running toilet. Every plumber they send is polite, tidy, and honest about what is urgent and what can wait a month. That kind of trust is hard to find in this trade.",
    name: "Rachel Simmons",
    role: "Property Manager, Grandview",
    avatar: "/images/team2.png",
  },
  {
    quote:
      "Our water heater quit on a Sunday night and I expected to wait days for help. TrueFlow had a new one installed by lunch the next morning, and they hauled the old tank away for free. Fair price and a friendly crew, what else can you ask for.",
    name: "Anthony Brooks",
    role: "Homeowner in Dublin",
    avatar: "/images/team3.png",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const go = (next: number) =>
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const t = setInterval(() => go(index + 1), 8000);
    return () => clearInterval(t);
  }, [index]);

  const t = TESTIMONIALS[index];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-heading text-[15px] font-semibold text-brand">
            Testimonials
          </p>
          <h2 className="font-heading text-[28px] font-bold text-ink sm:text-[38px]">
            What Our Customers Say?
          </h2>
        </motion.div>

        <div className="grid overflow-hidden bg-white shadow-[0_20px_70px_rgba(11,21,38,0.09)] lg:grid-cols-2">
          <div className="relative min-h-[300px]">
            <img
              src="/images/testimonial.png"
              alt="TrueFlow plumber tightening a valve on copper pipes"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative flex flex-col justify-center p-8 sm:p-12">
            <div className="flex gap-1 text-accent-red">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mt-6 text-[17px] italic leading-relaxed text-muted-ink"
            >
              {t.quote}
            </motion.blockquote>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-14 w-14 rounded-sm object-cover object-top"
              />
              <div>
                <p className="font-heading text-lg font-bold text-ink">{t.name}</p>
                <p className="text-sm text-muted-ink">{t.role}</p>
              </div>
              <span className="ml-auto hidden select-none font-heading text-7xl leading-none text-brand/10 sm:block">
                ”
              </span>
            </div>

            <div className="mt-9 flex gap-3">
              <button
                onClick={() => go(index - 1)}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-ink transition hover:bg-brand hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => go(index + 1)}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-ink transition hover:bg-brand hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Partners ---------------- */

const PARTNERS = [
  "Ohio Pipe Supply",
  "AquaLine Fittings",
  "Midwest Water Works",
  "ProPlumber Tools",
  "ClearFlow Materials",
];

export function Partners() {
  return (
    <section className="bg-navy py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="relative mb-12 text-center font-heading text-[26px] font-bold text-white sm:text-[32px]">
          <span className="relative z-10">Our Trusted Partner</span>
          <span className="absolute inset-x-0 top-1/2 mx-auto hidden h-px w-full max-w-3xl bg-white/10 sm:block" />
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {PARTNERS.map((p) => (
            <span
              key={p}
              className="font-heading text-lg font-bold uppercase tracking-wider text-white/30 transition hover:text-white/70"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Working process ---------------- */

const STEPS = [
  {
    icon: Users,
    title: "Meet Our Team",
    text: "Give us a call or book online and we will schedule a visit that fits your day, not just ours.",
  },
  {
    icon: ClipboardList,
    title: "Get Estimation",
    text: "Your plumber inspects the problem, explains the options in plain language, and gives you a written price before any work starts.",
  },
  {
    icon: Wrench,
    title: "Start Your Project",
    text: "Once you approve the quote we get straight to work, test everything twice, and clean up before we leave.",
  },
];

export function WorkingProcess() {
  return (
    <section className="bg-blueprint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-heading text-[15px] font-semibold text-brand">
            How It Works
          </p>
          <h2 className="font-heading text-[28px] font-bold text-ink sm:text-[38px]">
            Our Standard Working Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* connector image, echoes theme center circle */}
          <div className="mx-auto mb-12 hidden w-fit rounded-full border-[10px] border-white shadow-xl lg:block">
            <img
              src="/images/process.png"
              alt="TrueFlow plumber greeting a homeowner"
              className="h-44 w-44 rounded-full object-cover"
            />
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-navy px-5 py-1.5 text-xs font-bold tracking-wide text-white">
              STEP 02
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center"
              >
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-brand/25 bg-white text-brand shadow-lg">
                  <step.icon className="h-8 w-8" />
                </span>
                <span className="mt-4 block text-xs font-bold tracking-[0.2em] text-brand">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-heading text-[22px] font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-muted-ink">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Counters ---------------- */

const COUNTERS = [
  { target: 2400, suffix: "+", label: "Successful Projects" },
  { target: 1900, suffix: "+", label: "Satisfied Customers" },
  { target: 32, suffix: "", label: "Expert Plumbers" },
  { target: 24, suffix: "", label: "Years Of Experience" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-heading text-4xl font-extrabold text-brand sm:text-5xl">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Counters() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {COUNTERS.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative bg-white px-6 py-10 text-center shadow-[0_14px_45px_rgba(11,21,38,0.08)]"
            style={{ clipPath: "polygon(3% 0, 97% 0, 100% 50%, 97% 100%, 3% 100%, 0 50%)" }}
          >
            <Counter target={c.target} suffix={c.suffix} />
            <p className="mt-2 font-heading text-[15px] font-semibold text-ink">
              {c.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Blog ---------------- */

const POSTS = [
  {
    title: "Five Plumbing Sounds You Should Never Ignore",
    category: "Pipe Care",
    date: "19",
    month: "Jan",
    image: "/images/blog1.png",
  },
  {
    title: "When To Repair A Water Heater And When To Replace It",
    category: "Water Heaters",
    date: "15",
    month: "Jan",
    image: "/images/blog2.png",
  },
  {
    title: "Simple Habits That Keep Your Drains Clear",
    category: "Drain Care",
    date: "16",
    month: "Jan",
    image: "/images/blog3.png",
  },
];

export function BlogSection() {
  return (
    <section className="bg-ice py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 font-heading text-[15px] font-semibold text-brand">
            Blogs
          </p>
          <h2 className="font-heading text-[28px] font-bold text-ink sm:text-[38px]">
            Our Latest News And Articles
          </h2>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white p-4 pb-7 shadow-[0_12px_40px_rgba(11,21,38,0.06)] transition hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(11,21,38,0.12)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-brand px-3.5 py-2 text-center font-heading text-white">
                  <span className="block text-lg font-bold leading-none">{post.date}</span>
                  <span className="mt-1 block text-[10px] font-semibold tracking-widest">
                    {post.month.toUpperCase()}
                  </span>
                </span>
              </div>
              <div className="mt-5 flex items-center gap-4 px-1 text-[13px] font-semibold text-muted-ink">
                <span className="flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-brand" /> By TrueFlow Team
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-brand" /> {post.category}
                </span>
              </div>
              <h3 className="mt-3 px-1 font-heading text-[19px] font-semibold leading-snug text-ink transition group-hover:text-brand">
                {post.title}
              </h3>
              <button className="mt-5 ml-1 rounded-sm bg-brand px-6 py-2.5 font-heading text-[12px] font-bold tracking-wider text-white transition hover:bg-brand-dark">
                READ MORE
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
