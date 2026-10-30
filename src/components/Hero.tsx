import { hero } from "@/config/site";
import Bottle from "./ui/Bottle";
import OrderButton from "./order/OrderButton";
import { btn } from "./ui/styles";

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-[72px] pb-16">
      <div aria-hidden className="pointer-events-none absolute -top-[150px] -right-[200px] size-[700px] bg-[radial-gradient(circle,rgb(46_197_255/0.22),transparent_60%)]" />
      <div className="wrap relative grid items-center gap-10 min-[900px]:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/8 px-3 py-1.5 text-xs font-semibold text-mint">
            <i className="size-[7px] rounded-full bg-mint shadow-[0_0_10px_var(--color-mint)]" />
            {hero.pill}
          </div>
          <h1 className="mb-[18px] text-[clamp(34px,5vw,56px)] leading-[1.08] tracking-[-1.2px]">
            {hero.titleLead}
            <br />
            <span className="text-grad">{hero.titleAccent}</span>
          </h1>
          <p className="mb-7 max-w-[520px] text-[17px] text-muted">{hero.lead}</p>
          <div className="mb-8 flex flex-wrap gap-3">
            <OrderButton>{hero.primaryCta}</OrderButton>
            <a href={hero.secondaryCta.href} className={`${btn.base} ${btn.ghost}`}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <div className="flex flex-wrap gap-5 sm:gap-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <b className="block text-2xl font-extrabold">{s.value}</b>
                <span className="text-[13px] text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative grid h-[340px] place-items-center min-[900px]:h-[460px]">
          <div aria-hidden className="absolute bottom-[30px] h-[30px] w-[220px] bg-[radial-gradient(ellipse,rgb(46_197_255/0.45),transparent_70%)] blur-[6px]" />
          <div className="h-full animate-float drop-shadow-[0_30px_40px_rgb(0_0_0/0.5)]">
            <Bottle id="hero-bottle" animated />
          </div>
        </div>
      </div>
    </header>
  );
}
