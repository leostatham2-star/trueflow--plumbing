"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  CheckCircle2,
  ClipboardList,
  Phone,
  PhoneCall,
  RotateCcw,
  Send,
  ShieldCheck,
  Siren,
} from "lucide-react";
import { PageBanner } from "./shared";
import {
  BRAND,
  CONTACT_PREFS,
  PROPERTY_TYPES,
  QUOTE_SUBJECTS,
  QUOTE_URGENCY,
} from "@/lib/site-data";

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  service: "",
  propertyType: "",
  urgency: "",
  contactPreference: "",
  message: "",
  company: "", // honeypot, leave empty
};

const field =
  "w-full rounded-sm border border-border bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-muted-ink/70 focus:border-brand focus:outline-none";
const labelCls =
  "mb-1.5 block font-heading text-[13px] font-semibold tracking-wide text-ink";

const NEXT_STEPS = [
  {
    title: "We review it",
    text: "During office hours a coordinator reads your request within the hour and picks the right plumber for the job.",
  },
  {
    title: "We call you back",
    text: "A short call to confirm access, timing, and anything else we should know. No sales pitch, we promise.",
  },
  {
    title: "You get a written price",
    text: "For planned work you receive a written quote before anyone touches a pipe. Approve it and we schedule.",
  },
];

export function QuotePage() {
  const [form, setForm] = useState({ ...EMPTY });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorNotes, setErrorNotes] = useState<string[]>([]);
  const [firstName, setFirstName] = useState("");

  const set = (key: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorNotes([]);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "quote page" }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setFirstName(form.name.trim().split(/\s+/)[0] ?? "friend");
        setStatus("sent");
        setForm({ ...EMPTY });
      } else {
        setErrorNotes(Array.isArray(data.errors) ? data.errors : ["Something went wrong on our end. Please call us instead."]);
        setStatus("error");
      }
    } catch {
      setErrorNotes(["We could not reach the server. Please call us and we will take the details over the phone."]);
      setStatus("error");
    }
  };

  return (
    <>
      <PageBanner title="Request a Quote" crumb="Request a Quote" />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.55fr_1fr]">
          {/* form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-border bg-white p-7 shadow-[0_16px_50px_rgba(11,21,38,0.06)] sm:p-10"
          >
            {status === "sent" ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h2 className="mt-6 font-heading text-[28px] font-bold text-ink">
                  Request Received, {firstName}!
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-muted-ink">
                  Thanks for reaching out. A coordinator will look over the
                  details and call you back within one business hour during
                  office hours. If anything changes before then, just give us
                  a ring.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href={`tel:${BRAND.phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-2 rounded-sm bg-brand px-7 py-3.5 font-heading text-[13px] font-bold tracking-wider text-white transition hover:bg-brand-dark"
                  >
                    <Phone className="h-4 w-4" /> CALL {BRAND.phone}
                  </a>
                  <button
                    onClick={() => setStatus("idle")}
                    className="flex items-center gap-2 rounded-sm border border-border px-7 py-3.5 font-heading text-[13px] font-bold tracking-wider text-ink transition hover:border-brand hover:text-brand"
                  >
                    <RotateCcw className="h-4 w-4" /> SUBMIT ANOTHER REQUEST
                  </button>
                </div>
                <p className="mt-7 flex items-center gap-2 text-sm text-muted-ink">
                  <Siren className="h-4 w-4 text-accent-red" />
                  Water everywhere right now? Call{" "}
                  <a href={`tel:${BRAND.phoneAlt.replace(/[^0-9]/g, "")}`} className="font-semibold text-accent-red">
                    {BRAND.phoneAlt}
                  </a>{" "}
                  and skip the queue.
                </p>
              </div>
            ) : (
              <>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand">
                  <ClipboardList className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-heading text-[26px] font-bold text-ink">
                  Tell Us About Your Job
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-ink">
                  Fill in the details below and we will come back with a clear
                  written price. It takes about two minutes, and there is
                  never any obligation.
                </p>

                <form onSubmit={submit} className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="q-name" className={labelCls}>Full Name *</label>
                    <input
                      id="q-name"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="e.g. Sarah Miller"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="q-phone" className={labelCls}>Phone Number *</label>
                    <input
                      id="q-phone"
                      required
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="(555) 000 0000"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="q-email" className={labelCls}>Email Address</label>
                    <input
                      id="q-email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@example.com"
                      className={field}
                    />
                  </div>
                  <div>
                    <label htmlFor="q-service" className={labelCls}>Service Needed *</label>
                    <select
                      id="q-service"
                      required
                      value={form.service}
                      onChange={set("service")}
                      className={`${field} ${form.service ? "" : "text-muted-ink/70"}`}
                    >
                      <option value="" disabled>
                        What do you need done?
                      </option>
                      {QUOTE_SUBJECTS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="q-property" className={labelCls}>Property Type</label>
                    <select
                      id="q-property"
                      value={form.propertyType}
                      onChange={set("propertyType")}
                      className={`${field} ${form.propertyType ? "" : "text-muted-ink/70"}`}
                    >
                      <option value="" disabled>
                        Home or business?
                      </option>
                      {PROPERTY_TYPES.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="q-urgency" className={labelCls}>How Soon Do You Need Help?</label>
                    <select
                      id="q-urgency"
                      value={form.urgency}
                      onChange={set("urgency")}
                      className={`${field} ${form.urgency ? "" : "text-muted-ink/70"}`}
                    >
                      <option value="" disabled>
                        Pick a timeline
                      </option>
                      {QUOTE_URGENCY.map((u) => (
                        <option key={u} value={u}>{u}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="q-contact" className={labelCls}>Best Way To Reach You</label>
                    <select
                      id="q-contact"
                      value={form.contactPreference}
                      onChange={set("contactPreference")}
                      className={`${field} ${form.contactPreference ? "" : "text-muted-ink/70"}`}
                    >
                      <option value="" disabled>
                        How should we get back to you?
                      </option>
                      {CONTACT_PREFS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="q-message" className={labelCls}>Describe The Job *</label>
                    <textarea
                      id="q-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="What is going on, which room or fixture is involved, and anything you already tried. The more we know, the sharper the quote."
                      aria-label="Describe the job"
                      className={field}
                    />
                  </div>

                  {/* honeypot: hidden from people, irresistible to bots */}
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={set("company")}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  {status === "error" && errorNotes.length > 0 && (
                    <div className="rounded-sm border border-accent-red/40 bg-red-50 px-5 py-4 text-[14px] text-red-700 sm:col-span-2">
                      <p className="font-semibold">Almost there:</p>
                      <ul className="mt-1.5 list-inside space-y-1">
                        {errorNotes.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="flex w-full items-center justify-center gap-2 rounded-sm bg-brand px-8 py-4 font-heading text-[13px] font-bold tracking-wider text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {status === "sending" ? "SENDING..." : "REQUEST MY QUOTE"}
                      <Send className="h-4 w-4" />
                    </button>
                    <p className="mt-3 text-[13px] text-muted-ink">
                      Free estimates for planned work. We reply within one
                      business hour, Monday to Saturday.
                    </p>
                  </div>
                </form>
              </>
            )}
          </motion.div>

          {/* sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="space-y-6"
          >
            <div className="bg-navy-dots p-8 text-white">
              <h3 className="flex items-center gap-2 font-heading text-xl font-semibold">
                <PhoneCall className="h-5 w-5 text-brand" /> What Happens Next
              </h3>
              <ul className="mt-6 space-y-5">
                {NEXT_STEPS.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand font-heading text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-heading text-[16px] font-semibold">{s.title}</p>
                      <p className="mt-1 text-[14px] leading-relaxed text-white/60">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border bg-white p-8 shadow-[0_10px_40px_rgba(11,21,38,0.04)]">
              <h3 className="flex items-center gap-2 font-heading text-xl font-semibold text-ink">
                <BadgeDollarSign className="h-5 w-5 text-brand" /> Straight Pricing
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-ink">
                Estimates are free for planned work like repipes, water
                heater replacement, and remodels. For repair visits we quote
                the flat trip charge upfront and waive it when you go ahead
                with the fix.
              </p>
              <ul className="mt-5 space-y-2.5 text-[15px] font-semibold text-ink">
                {[
                  "No obligation, ever",
                  "Prices in writing before we start",
                  "Same day slots when available",
                ].map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-brand" /> {p}
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-[13px] text-muted-ink">
                <ShieldCheck className="h-4 w-4 text-brand" /> Ohio licensed and fully insured
              </p>
            </div>

            <div className="border border-accent-red/30 bg-white p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-red text-white">
                <Siren className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-ink">
                Emergency Instead?
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-ink">
                A quote form is the wrong tool for water pouring through a
                ceiling. Close your main shutoff and call our emergency line.
              </p>
              <a
                href={`tel:${BRAND.phoneAlt.replace(/[^0-9]/g, "")}`}
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
