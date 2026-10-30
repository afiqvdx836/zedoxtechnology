import { sessions } from "@/config/site";
import { waLink } from "@/lib/whatsapp";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";
import BookingNote from "./ui/BookingNote";

export default function Sessions() {
  return (
    <section id="sessions" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="container-page">
        <SectionHeader {...sessions} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sessions.tiers.map((tier) => (
            <Reveal
              key={tier.name}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                tier.featured ? "border-orange/40 bg-orange/5 shadow-[0_20px_40px_rgb(255_123_0/0.08)]" : "border-line bg-card"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-gradient-to-br from-orange to-[#ff4d4d] px-3 py-1 text-[0.7rem] font-bold tracking-wider text-white uppercase">
                  Start here
                </span>
              )}
              <h3 className="mb-1 text-lg">{tier.name}</h3>
              <p className="mb-4 text-sm">{tier.blurb}</p>
              <div className="mb-5 flex items-baseline gap-1.5">
                <span className="font-heading text-3xl font-extrabold text-white tabular-nums">{tier.price}</span>
                <span className="text-sm text-fg-3">{tier.unit}</span>
              </div>
              <ul className="mb-7 space-y-2.5 text-sm">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex gap-2.5 text-fg">
                    <i className="fa-solid fa-check mt-1 text-cyan" aria-hidden />
                    {perk}
                  </li>
                ))}
              </ul>
              <Button
                href={waLink(tier.whatsapp)}
                external
                variant={tier.featured ? "orange" : "outline"}
                icon="fa-brands fa-whatsapp"
                className="mt-auto w-full !px-5"
              >
                {tier.cta}
              </Button>
            </Reveal>
          ))}
        </div>
        <BookingNote className="mx-auto mt-8 max-w-[760px] justify-center text-center" />
      </div>
    </section>
  );
}
