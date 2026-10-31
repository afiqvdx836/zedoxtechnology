import { testimonials } from "@/config/site";
import SectionHead from "./ui/SectionHead";

export default function Testimonials() {
  return (
    <section className="py-[60px] sm:py-20">
      <div className="wrap">
        <SectionHead eyebrow={testimonials.eyebrow} title={testimonials.title} />
        <div className="grid gap-[18px] min-[900px]:grid-cols-3">
          {testimonials.items.map((t) => (
            <figure key={t.initial} className="rounded-[18px] border border-line bg-card p-[26px]">
              <div className="mb-2.5 tracking-[2px] text-promo" role="img" aria-label="5 bintang">
                ★★★★★
              </div>
              <blockquote className="mb-4 text-[15px]">“{t.quote}”</blockquote>
              <figcaption className="flex items-center gap-2.5 text-[13px] text-muted">
                <span className="grid size-9 place-items-center rounded-full bg-line font-bold text-fg">{t.initial}</span>
                {t.who}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted">{testimonials.note}</p>
      </div>
    </section>
  );
}
