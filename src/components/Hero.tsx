import { contact, hero } from "@/config/site";
import Rich from "./ui/Rich";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import DeviceIllustration from "./illustrations/DeviceIllustration";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-14 lg:pb-0">
      <div className="container-page grid items-center gap-12 text-center lg:grid-cols-[1.25fr_0.75fr] lg:text-left">
        <div className="relative z-10">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Badge tone="rose">{hero.badge}</Badge>
            <span className="mb-5 flex items-center gap-1.5 rounded-full border border-line bg-white/3 px-3 py-1 text-xs text-fg-2">
              <i className="fa-brands fa-tiktok text-[#ff3b5c]" aria-hidden /> @{contact.tiktokHandle} ({contact.tiktokFollowers} Followers)
            </span>
          </div>
          <h1 className="mb-6 text-[2.5rem] leading-[1.15] md:text-[3.6rem]">
            {hero.titleLead} <span className="grad-orange block">{hero.titleAccent}</span>
          </h1>
          <p className="mx-auto mb-9 max-w-[580px] text-lg lg:mx-0">
            <Rich text={hero.description} />
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button href={hero.primaryCta.href} icon={hero.primaryCta.icon}>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} icon={hero.secondaryCta.icon} variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div aria-hidden className="absolute top-1/4 left-1/4 -z-10 size-[200px] rounded-full bg-cyan/25 blur-[70px]" />
          <div className="aspect-[1/1.15] w-full max-w-[380px] rounded-[36px] border border-line-strong bg-gradient-to-br from-white/3 to-white/1 p-7 shadow-[0_30px_60px_rgb(0_0_0/0.5)] backdrop-blur-md">
            <DeviceIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
