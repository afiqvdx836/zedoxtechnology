import { faqs } from "@/config/site";
import SectionHead from "./ui/SectionHead";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 py-[60px] sm:py-20">
      <div className="wrap">
        <SectionHead eyebrow={faqs.eyebrow} title={faqs.title} />
        <div className="mx-auto max-w-[760px]">
          {faqs.items.map((f, i) => (
            <details key={f.q} open={i === 0} className="group border-b border-line py-5">
              <summary className="flex cursor-pointer list-none justify-between gap-4 text-base font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="text-[22px] leading-none text-accent group-open:hidden">
                  +
                </span>
                <span aria-hidden className="hidden text-[22px] leading-none text-accent group-open:inline">
                  –
                </span>
              </summary>
              <p className="mt-2.5 text-[15px] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
