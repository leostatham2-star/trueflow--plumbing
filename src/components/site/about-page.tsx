"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Sparkles, Wallet, Award, ShieldCheck, ThumbsUp } from "lucide-react";
import { PageBanner, SectionHeading } from "./shared";
import { TeamSection } from "./home-quote-team";
import { WorkingProcess } from "./home-extras";
import { CtaBanner } from "./home-quote-team";
import { IMAGES } from "@/lib/site-data";

const VALUES = [
  {
    icon: BadgeCheck,
    title: "Honesty First",
    text: "If a repair will hold for years we say so, and if a replacement is the smarter spend we show you the math instead of pushing a sale.",
  },
  {
    icon: Sparkles,
    title: "Clean Work Guaranteed",
    text: "Drop cloths go down before tools come out and we vacuum before we leave. You should not be able to tell we were there, except that everything works.",
  },
  {
    icon: Wallet,
    title: "Fair, Written Prices",
    text: "You approve the price before we start and the number on the invoice matches it. No surprise line items when the truck pulls away.",
  },
];

const CREDENTIALS = [
  {
    icon: Award,
    title: "Ohio Licensed Plumbers",
    text: "Every tech carries state license PH.88412 or higher. Ask and we will happily show it.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    text: "Two million dollars in liability coverage protects your home and our crew on every visit.",
  },
  {
    icon: ThumbsUp,
    title: "A+ Community Rating",
    text: "Fifteen years on local review boards with an average score of 4.8 out of 5.",
  },
];

export function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" crumb="About Us" />

      {/* story */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={IMAGES.about}
                alt="TrueFlow plumber repairing pipes under a kitchen sink"
                className="aspect-[4/3.5] w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SectionHeading
                align="left"
                label="Our Story"
                title="A Plumbing Company Built On Showing Up"
                className="mb-6"
              />
              <div className="space-y-5 leading-relaxed text-muted-ink">
                <p>
                  TrueFlow started in 2002 with one van, a rented garage, and a
                  simple idea. Do the small jobs with the same care as the big
                  ones. Dan Whitfield spent his first ten years in the trade
                  watching homeowners get talked into replacements they did not
                  need, and he figured a plumbing company that tells the truth
                  would never run out of work.
                </p>
                <p>
                  He was right. Twenty four years later we run eleven trucks
                  out of Maple Ridge Drive, and most of our work still comes
                  from neighbors telling other neighbors about us. We have
                  fixed leaks for three generations of some families, and we
                  would like to be the crew your grandkids call too.
                </p>
                <p>
                  What has not changed is how we treat people. Written prices
                  before work starts, plumbers who wear shoe covers, and a
                  phone that gets answered at two in the morning when a pipe
                  lets go.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={IMAGES.ceo}
                  alt="Dan Whitfield, owner of TrueFlow Plumbing"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading text-lg font-semibold text-ink">Dan Whitfield</p>
                  <p className="text-sm text-muted-ink">Owner, TrueFlow Plumbing</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="bg-blueprint py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            label="What We Stand For"
            title="Three Promises We Never Break"
          />
          <div className="grid gap-7 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white p-9 shadow-[0_12px_40px_rgba(11,21,38,0.05)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-brand text-white">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold text-ink">{v.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-ink">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* credentials */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            label="Credentials"
            title="Papers That Prove It"
          />
          <div className="grid gap-7 md:grid-cols-3">
            {CREDENTIALS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-5 border border-border p-7 transition hover:border-brand/40 hover:shadow-[0_16px_45px_rgba(14,94,216,0.1)]"
              >
                <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-brand-soft p-3.5 text-brand">
                  <c.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-ink">{c.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <WorkingProcess />
      <CtaBanner />
    </>
  );
}
