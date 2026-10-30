import { offer } from "@/config/site";
import { waLink } from "@/lib/whatsapp";
import Rich from "./ui/Rich";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import BookingNote from "./ui/BookingNote";

export default function LeadMagnet() {
  return (
    <section id="offer" className="relative z-10 scroll-mt-28 lg:-mt-10">
      <div className="container-page">
        <Reveal className="relative grid items-center gap-10 overflow-hidden rounded-[28px] border-[1.5px] border-orange/25 bg-gradient-to-br from-orange/5 to-cyan/3 px-7 py-10 shadow-[0_25px_50px_rgb(255_123_0/0.1)] lg:grid-cols-[1.3fr_0.7fr] lg:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 animate-pulse-border rounded-[28px] border-[1.5px] border-orange opacity-0"
          />
          <div>
            <Badge tone="orange">{offer.badge}</Badge>
            <h3 className="mb-4 text-[1.8rem] leading-tight md:text-[2.2rem]">
              {offer.title}
              <span className="mt-1 block text-[1.4rem] font-medium text-rose">
                {offer.subtitle}
              </span>
            </h3>
            <p className="mb-6 max-w-[620px] text-[1.05rem]">
              <Rich text={offer.description} />
            </p>
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
              {offer.highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-2.5 text-sm font-medium text-fg"
                >
                  <i
                    className={`fa-solid ${h.icon} text-lg text-orange`}
                    aria-hidden
                  />
                  {h.label}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Button
              href={waLink("scan")}
              external
              icon="fa-calendar-check"
              className="w-full"
            >
              {offer.cta}
            </Button>
            <BookingNote className="mt-4 text-left" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
