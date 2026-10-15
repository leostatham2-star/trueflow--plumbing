"use client";

import { ArrowUp, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Logo } from "./logo";
import { goToRoute } from "./shared";
import { BRAND, FOOTER_SERVICES } from "@/lib/site-data";

type Props = {
  onNavigate: (route: string) => void;
};

export function SiteFooter({ onNavigate }: Props) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-navy-hex text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <div className="grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1.2fr]">
          {/* brand */}
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/60">
              TrueFlow is a family run plumbing company serving homes and small
              businesses across central Ohio. Licensed, insured, and on call
              around the clock.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-white/10 text-white/70 transition hover:bg-brand hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* services */}
          <nav aria-label="Footer services">
            <h3 className="font-heading text-lg font-semibold">Popular Services</h3>
            <span className="mt-3 block h-0.5 w-8 bg-brand" />
            <ul className="mt-5 space-y-3 text-[15px] text-white/60">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => onNavigate("services")}
                    className="transition hover:text-brand"
                  >
                    {s}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => goToRoute("quote")}
                  className="inline-flex items-center gap-1.5 font-heading text-[14px] font-bold text-brand transition hover:text-white"
                >
                  Request a Free Quote <ArrowRight className="h-4 w-4" />
                </button>
              </li>
            </ul>
          </nav>

          {/* contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold">Contact Us</h3>
            <span className="mt-3 block h-0.5 w-8 bg-brand" />
            <ul className="mt-5 space-y-4 text-[15px] text-white/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>
                  {BRAND.phone}
                  <br />
                  {BRAND.phoneAlt}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                <span>{BRAND.email}</span>
              </li>
            </ul>
          </div>

          {/* newsletter */}
          <div>
            <h3 className="font-heading text-lg font-semibold">Newsletter</h3>
            <span className="mt-3 block h-0.5 w-8 bg-brand" />
            <p className="mt-5 text-[15px] text-white/60">
              Sign up to get seasonal maintenance tips and updates from our
              crew. No spam, we promise.
            </p>
            <form onSubmit={subscribe} className="mt-5 space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                aria-label="Email for newsletter"
                className="w-full rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-sm bg-brand px-4 py-3 font-heading text-[13px] font-bold tracking-wide text-white transition hover:bg-brand-dark"
              >
                SUBSCRIBE
                <Send className="h-4 w-4" />
              </button>
              {subscribed && (
                <p className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" /> You are on the list, talk soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* bottom bar with designer credit */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-white/55 sm:px-6 md:flex-row">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <button
              onClick={() => onNavigate("home")}
              className="text-brand transition hover:text-white"
            >
              TrueFlow
            </button>
            . All Rights Reserved.
          </p>
          <p>
            <a
              href="https://m-webcraftstudio.space-z.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Designed By M-Webcraft Studio
            </a>
          </p>
        </div>
      </div>

      {/* back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
