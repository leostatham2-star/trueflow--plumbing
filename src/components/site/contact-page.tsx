"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Siren } from "lucide-react";
import { PageBanner } from "./shared";
import { BRAND } from "@/lib/site-data";

const SUBJECTS = [
  "Leak Detection & Repair",
  "Drain Cleaning",
  "Water Heater Services",
  "Faucet & Fixture Installation",
  "Repiping",
  "Emergency Plumbing",
  "Something Else",
];

const INFO = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["1182 Maple Ridge Drive", "Columbus OH 43215, United States"],
  },
  {
    icon: Phone,
    title: "Call Us Anytime",
    lines: [BRAND.phone, BRAND.phoneAlt],
  },
  {
    icon: Mail,
    title: "Send An Email",
    lines: [BRAND.email, "quotes@trueflowplumbing.com"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Mon to Sat: 7:30 am to 6:00 pm", "Sunday: Emergency Only"],
  },
];

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  const field =
    "w-full rounded-sm border border-border bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-muted-ink/70 focus:border-brand focus:outline-none";

  return (
    <>
      <PageBanner title="Contact Us" crumb="Contact" />

      {/* info cards */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {INFO.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-t-4 border-brand bg-ice p-7 text-center transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(14,94,216,0.12)]"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                {item.lines.map((l) => (
                  <p key={l} className="mt-1.5 text-[14px] leading-relaxed text-muted-ink">
                    {l}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* form + hours */}
      <section className="bg-blueprint py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-7 shadow-[0_16px_50px_rgba(11,21,38,0.06)] sm:p-10"
          >
            <h2 className="font-heading text-[26px] font-bold text-ink">
              Tell Us What Is Going On
            </h2>
            <p className="mt-2 text-[15px] text-muted-ink">
              Fill this out and a coordinator calls you back within one business
              hour. For emergencies, calling is always faster.
            </p>
            <form onSubmit={submit} className="mt-7 grid gap-4 sm:grid-cols-2">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your Name"
                aria-label="Your name"
                className={field}
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email Address"
                aria-label="Email address"
                className={field}
              />
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone Number"
                aria-label="Phone number"
                className={field}
              />
              <select
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                aria-label="Service needed"
                className={`${field} ${form.subject ? "" : "text-muted-ink/70"}`}
              >
                <option value="" disabled>
                  What Do You Need?
                </option>
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe the problem, anything you already tried helps too."
                aria-label="Your message"
                className={`${field} sm:col-span-2`}
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-sm bg-brand px-8 py-4 font-heading text-[13px] font-bold tracking-wider text-white transition hover:bg-brand-dark sm:col-span-2"
              >
                SEND MESSAGE
                <Send className="h-4 w-4" />
              </button>
              {sent && (
                <p className="flex items-center justify-center gap-2 text-[15px] font-semibold text-emerald-600 sm:col-span-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Message received! We will call you back shortly.
                </p>
              )}
            </form>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="space-y-6"
          >
            <div className="bg-navy-dots p-8 text-white">
              <h3 className="font-heading text-xl font-semibold">Working Hours</h3>
              <ul className="mt-5 divide-y divide-white/10 text-[15px]">
                {[
                  ["Monday - Friday", "8:00 AM - 6:00 PM"],
                  ["Saturday", "9:00 AM - 5:00 PM"],
                  ["Sunday", "Emergency Only"],
                ].map(([d, h]) => (
                  <li key={d} className="flex items-center justify-between py-3.5 text-white/70">
                    <span>{d}</span>
                    <span className="font-semibold text-white">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-accent-red/30 bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-red text-white">
                <Siren className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-ink">
                Water Where It Should Not Be?
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-ink">
                Close your main shutoff first, then call our emergency line. A
                live dispatcher answers around the clock and a plumber is
                usually on the road within minutes.
              </p>
              <a
                href="tel:4145550198"
                className="mt-5 inline-block rounded-sm bg-accent-red px-7 py-3.5 font-heading text-[13px] font-bold tracking-wider text-white transition hover:bg-accent-red-dark"
              >
                CALL {BRAND.phoneAlt}
              </a>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
