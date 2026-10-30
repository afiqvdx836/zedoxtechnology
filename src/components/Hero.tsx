import { hero, media, trust } from "@/config/site";
import Bottle from "./ui/Bottle";
import Icon from "./ui/Icon";
import SpotlightStage from "./ui/SpotlightStage";
import OrderButton from "./order/OrderButton";
import { btn } from "./ui/styles";

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="wrap grid items-center gap-10 min-[900px]:grid-cols-[1.05fr_0.95fr] min-[900px]:gap-14">
        <div>
          <p className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            <span className="flex items-center gap-1.5 font-semibold text-fg">
              <span className="text-[#ff3b5c]" aria-hidden>
                ♥
              </span>
              {hero.proof}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/8 px-3 py-1 text-xs font-semibold text-mint">
              <i className="size-[7px] rounded-full bg-mint shadow-[0_0_10px_var(--color-mint)]" />
              {hero.pill}
            </span>
          </p>
          <h1 className="mb-6 text-[clamp(42px,5.6vw,72px)] leading-[1]">
            {hero.titleLead}
            <br />
            <span className="text-grad">{hero.titleAccent}</span>
          </h1>
          <p className="mb-8 max-w-[520px] text-lg text-muted">{hero.lead}</p>
          <div className="mb-8 flex flex-wrap gap-3">
            <OrderButton className="!px-7 !py-4 !text-base">{hero.primaryCta}</OrderButton>
            <a href={hero.secondaryCta.href} className={`${btn.base} ${btn.ghost} !px-7 !py-4 !text-base`}>
              {hero.secondaryCta.label}
            </a>
          </div>
          <ul className="grid gap-x-6 gap-y-2 text-sm text-muted sm:grid-cols-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-mint">
                  <Icon name="check" size={16} strokeWidth={2.5} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <SpotlightStage className="h-[440px] min-[900px]:h-[600px]">
          {media.heroVideo ? (
            <video
              className="absolute inset-0 -z-10 size-full object-cover"
              src={media.heroVideo}
              poster={media.heroPoster || undefined}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <div className="h-[340px] animate-float drop-shadow-[0_30px_40px_rgb(0_0_0/0.6)] min-[900px]:h-[460px]">
              <Bottle id="hero-bottle" active />
            </div>
          )}
        </SpotlightStage>
      </div>
    </header>
  );
}
