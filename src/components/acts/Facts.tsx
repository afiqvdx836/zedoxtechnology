import Image from "next/image";
import { facts, media } from "@/config/site";

// Act 4, trust. A wipe across the bubbles (the water has changed state), then the
// facts as plain labels.
export default function Facts() {
  return (
    <section data-sc-act="flow" className="sc-section zx-facts">
      <div className="sc-wrap zx-facts__grid">
        <figure
          className="zx-facts__media"
          data-sc-reveal="up"
          data-sc-reveal-at="0.1 0.42"
        >
          <Image
            src={media.macro}
            alt={facts.imageAlt}
            width={800}
            height={960}
            sizes="(max-width: 860px) 100vw, 40vw"
          />
        </figure>
        <div className="zx-facts__text" data-sc-in data-sc-stagger="60">
          <h2 className="sc-display zx-h2">{facts.title}</h2>
          <dl className="zx-facts__list">
            {facts.rows.map((r) => (
              <div key={r.k}>
                <dt>{r.k}</dt>
                <dd>{r.v}</dd>
              </div>
            ))}
          </dl>
          <p className="zx-small">{facts.footnote}</p>
        </div>
      </div>
    </section>
  );
}
