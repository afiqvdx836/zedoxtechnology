"use client";

import { useState } from "react";
import { faqs, faqSection } from "@/config/site";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="container-page">
        <SectionHeader {...faqSection} />
        <Reveal className="mx-auto max-w-[800px] space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="overflow-hidden rounded-2xl border border-line transition hover:border-line-strong">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 bg-card p-6 text-left font-heading text-lg font-semibold text-white transition hover:bg-card-hover"
                >
                  {faq.q}
                  <i className={`fa-solid fa-chevron-down text-rose transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} aria-hidden />
                </button>
                <div
                  id={`faq-${i}`}
                  className={`grid bg-[rgb(9_13_22/0.3)] transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-line p-6 text-[0.95rem]">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
