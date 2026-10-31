import Image from "next/image";
import { hero, media, site } from "@/config/site";

// Act 1, recognition. Four planes that move at different rates off the act's
// --sc-p: far wall, light cone, the bottle, and near bubbles in front of it.
export default function Hero() {
  return (
    <section
      data-sc-act="pin"
      data-sc-span="1.8"
      className="zx-hero"
      aria-labelledby="hero-title"
    >
      <div data-sc-stage className="zx-hero__stage">
        <Image
          className="zx-hero__far"
          src={media.heroFar}
          alt=""
          width={480}
          height={960}
          priority
          aria-hidden
        />
        <div className="zx-hero__cone" aria-hidden />
        <Image
          className="zx-hero__bottle"
          src={media.heroBottle}
          alt={hero.imageAlt}
          width={720}
          height={1280}
          priority
        />
        <div className="zx-hero__near" aria-hidden>
          {Array.from({ length: 7 }, (_, i) => (
            <i key={i} />
          ))}
        </div>

        <div className="zx-hero__copy" data-sc-cue="0 0.6 0">
          <h1
            id="hero-title"
            className="sc-display zx-hero__title"
            data-sc-kinetic="lines"
          >
            {hero.title}
          </h1>
          <p className="zx-hero__lead">{hero.lead}</p>
          <a href="#order" className="zx-btn">
            {site.cta}
          </a>
        </div>
        <p
          className="zx-hero__copy zx-hero__beat"
          data-sc-cue="0.5 1 0.14 0.22"
        >
          {hero.beat}
        </p>
      </div>
    </section>
  );
}
