"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageBanner, SectionHeading } from "./shared";
import { WorkingProcess, Counters } from "./home-extras";
import { CtaBanner } from "./home-quote-team";
import { SERVICES, FAQS } from "@/lib/site-data";

const ICONS: Record<string, React.ElementType> = {
  droplets: CheckCircle2,
  waves: CheckCircle2,
  flame: CheckCircle2,
  "shower-head": CheckCircle2,
  "git-branch": CheckCircle2,
  "alarm-clock": CheckCircle2,
};

export function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" crumb="Services" />

      {/* services list */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            label="What We Do"
            title={
              <>
                Every Job Handled By A
                <br />
                Licensed Professional
              </>
            }
          />
          <div className="grid gap-7 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.12 }}
                className="group grid overflow-hidden border border-border bg-white shadow-[0_10px_40px_rgba(11,21,38,0.04)] transition hover:shadow-[0_24px_60px_rgba(11,21,38,0.1)] sm:grid-cols-[42%_58%]"
              >
                <div className="relative min-h-[220px] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-[21px] font-semibold text-ink transition group-hover:text-brand">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-ink">
                    {s.long}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {s.points.slice(0, 3).map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[14px] font-semibold text-ink">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:4145550134"
                    className="mt-5 inline-block font-heading text-[13px] font-bold tracking-wider text-brand transition hover:text-accent-red"
                  >
                    CALL FOR PRICING
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <WorkingProcess />
      <Counters />

      {/* FAQ */}
      <section className="bg-blueprint py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            label="Common Questions"
            title="Straight Answers Before You Call"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border bg-white px-6 shadow-sm"
                >
                  <AccordionTrigger className="py-5 text-left font-heading text-[16px] font-semibold text-ink hover:no-underline hover:text-brand">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-ink">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
