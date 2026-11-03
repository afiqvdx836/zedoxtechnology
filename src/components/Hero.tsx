import { hero, heroChapters, heroIntro, trust } from "@/config/site";
import CinematicScrol, { type Chapter } from "./ui/scroll-triggered-video-hero";
import Icon from "./ui/Icon";
import OrderButton from "./order/OrderButton";
import { btn } from "./ui/styles";

export default function Hero() {
  const chapters: Chapter[] = [
    {
      ...heroIntro,
      eyebrow: hero.proof,
      title: (
        <>
          {hero.titleLead}
          <br />
          <span className="text-grad">{hero.titleAccent}</span>
        </>
      ),
      description: hero.lead,
      actions: (
        <>
          <div className="mb-6 flex flex-wrap gap-3">
            <OrderButton className="!px-7 !py-4 !text-base">
              {hero.primaryCta}
            </OrderButton>
            <a
              href={hero.secondaryCta.href}
              className={`${btn.base} ${btn.ghost} !px-7 !py-4 !text-base backdrop-blur-sm`}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <ul className="hidden gap-x-6 gap-y-2 text-sm text-white/70 sm:grid sm:grid-cols-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="text-mint">
                  <Icon name="check" size={16} strokeWidth={2.5} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    ...heroChapters.map(({ cta, ...c }) => ({
      ...c,
      actions: cta ? (
        <a
          href={cta.href}
          className={`${btn.base} ${btn.ghost} backdrop-blur-sm`}
        >
          {cta.label}
        </a>
      ) : (
        <OrderButton>{hero.primaryCta}</OrderButton>
      ),
    })),
  ];

  return <CinematicScrol chapters={chapters} />;
}
