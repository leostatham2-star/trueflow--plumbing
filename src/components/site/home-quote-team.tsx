"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Phone,
  CalendarCheck,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { BRAND, QUOTE_SUBJECTS } from "@/lib/site-data";
import { goToRoute } from "./shared";

export function QuoteSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [senderName, setSenderName] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    company: "", // honeypot
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.subject,
          message: form.message,
          company: form.company,
          source: "home quick quote",
        }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setSenderName(form.name.trim().split(/\s+/)[0] ?? "friend");
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", subject: "", message: "", company: "" });
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-sm border border-border bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-muted-ink/70 focus:border-brand focus:outline-none";

  return (
    <section className="bg-navy-dots py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* left copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 flex items-center gap-2 font-heading text-[15px] font-semibold text-brand">
            <PhoneCall className="h-5 w-5" />
            Get Emergency Help
          </p>
          <h2 className="font-heading text-[30px] font-bold leading-tight text-white sm:text-[40px]">
            Need Any Urgent Help?
            <br />
            To Hire Us Now!
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-white/60">
            If water is going somewhere it should not, turn off the main valve
            and call us right away. We keep a licensed plumber on call around
            the clock, day or night, weekends and holidays included.
          </p>

          <h3 className="mt-9 font-heading text-lg font-semibold text-white">
            Working Hours:
          </h3>
          <ul className="mt-4 max-w-md divide-y divide-white/10 text-[15px]">
            {[
              ["Mon - Fri", "8:00 AM - 6:00 PM"],
              ["Saturday", "9:00 AM - 5:00 PM"],
              ["Sunday", "Emergency Only"],
            ].map(([day, hours]) => (
              <li key={day} className="flex items-center justify-between py-3.5 text-white/70">
                <span>{day}</span>
                <span className="font-semibold text-white/90">{hours}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${BRAND.phone.replace(/[^0-9]/g, "")}`}
              className="rounded-sm bg-brand px-8 py-4 font-heading text-[13px] font-bold tracking-wider text-white transition hover:bg-brand-dark"
            >
              BOOK A SERVICE
            </a>
            <a
              href={`tel:${BRAND.phoneAlt.replace(/[^0-9]/g, "")}`}
              className="rounded-sm bg-accent-red px-8 py-4 font-heading text-[13px] font-bold tracking-wider text-white transition hover:bg-accent-red-dark"
            >
              CONTACT US
            </a>
          </div>
        </motion.div>

        {/* form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-ice p-6 sm:p-10"
        >
          <h3 className="text-center font-heading text-[26px] font-bold text-ink">
            Get A <span className="text-brand">Free</span> Quote
          </h3>
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
              aria-label="Select subject"
              className={`${field} ${form.subject ? "" : "text-muted-ink/70"}`}
            >
              <option value="" disabled>
                Select Subject
              </option>
              {QUOTE_SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your Message"
              aria-label="Your message"
              rows={5}
              className={`${field} sm:col-span-2`}
            />
            {/* honeypot: hidden from people, irresistible to bots */}
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-2 rounded-sm bg-brand px-8 py-4 font-heading text-[13px] font-bold tracking-wider text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
            >
              {status === "sending" ? "SENDING..." : "SUBMIT NOW"}
              <Send className="h-4 w-4" />
            </button>
            {status === "sent" && (
              <p className="flex items-center justify-center gap-2 text-[15px] font-semibold text-emerald-600 sm:col-span-2">
                <CheckCircle2 className="h-5 w-5" />
                Got it, {senderName}! A real person will call you back within one business hour.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center justify-center gap-2 text-[14px] font-semibold text-accent-red sm:col-span-2">
                <AlertCircle className="h-5 w-5" />
                That did not go through. Please check your details and try again, or call {BRAND.phone}.
              </p>
            )}
            <button
              type="button"
              onClick={() => goToRoute("quote")}
              className="flex items-center justify-center gap-2 text-[14px] font-semibold text-brand transition hover:text-accent-red sm:col-span-2"
            >
              Planning a bigger project? Use the full quote form
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-6 border-t border-border pt-5 text-[13px] text-muted-ink">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand" /> Reply within 1 business hour
            </span>
            <span className="hidden items-center gap-2 sm:flex">
              <Phone className="h-4 w-4 text-brand" /> {BRAND.phone}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function TeamSection() {
  const team = [
    {
      name: "Marcus Bennett",
      role: "Master Plumber",
      image: "/images/team1.png",
    },
    {
      name: "Sofia Reyes",
      role: "Drain Specialist",
      image: "/images/team2.png",
    },
    {
      name: "Tom Gallagher",
      role: "Service Technician",
      image: "/images/team3.png",
    },
    {
      name: "Jake Morrow",
      role: "Installation Expert",
      image: "/images/team4.png",
    },
  ];

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
            Expert Team
          </p>
          <h2 className="font-heading text-[28px] font-bold text-ink sm:text-[38px]">
            Meet The Expert Team Member
          </h2>
        </motion.div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-border bg-white p-4 pb-6 text-center shadow-[0_10px_40px_rgba(11,21,38,0.05)] transition hover:-translate-y-1.5 hover:shadow-[0_22px_55px_rgba(14,94,216,0.13)]"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} at TrueFlow`}
                  className="aspect-[4/4.4] w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-brand">{member.role}</p>
              <div className="mx-auto mt-4 h-px w-16 bg-border" />
              <div className="mt-4 flex justify-center gap-4 text-muted-ink">
                {["Facebook", "Twitter", "WhatsApp", "LinkedIn"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    aria-label={`${member.name} on ${s}`}
                    className="transition hover:text-brand"
                  >
                    <span className="text-[11px] font-bold tracking-wider">
                      {s.slice(0, 2).toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-dots py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left">
        <div>
          <h2 className="font-heading text-[26px] font-bold text-white sm:text-[34px]">
            Drip Becoming A Flood? Let Us Take A Look.
          </h2>
          <p className="mt-3 max-w-xl text-white/60">
            Book a visit today and get a written price before any work starts.
            Same day slots are usually available.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:4145550134"
            className="flex items-center gap-2 rounded-sm bg-brand px-8 py-4 font-heading text-[13px] font-bold tracking-wider text-white transition hover:bg-brand-dark"
          >
            <Phone className="h-4 w-4" /> {BRAND.phone}
          </a>
          <button
            onClick={() => goToRoute("quote")}
            className="flex items-center gap-2 rounded-sm bg-accent-red px-8 py-4 font-heading text-[13px] font-bold tracking-wider text-white transition hover:bg-accent-red-dark"
          >
            <CalendarCheck className="h-4 w-4" /> REQUEST A QUOTE
          </button>
        </div>
      </div>
    </section>
  );
}
