import { features } from "@/config/site";
import Icon from "./ui/Icon";
import SectionHead from "./ui/SectionHead";

// Bento grid: the item with a `stat` gets the large tile.
export default function Features() {
  const big = features.items.find((f) => "stat" in f && f.stat);
  const rest = features.items.filter((f) => f !== big);

  return (
    <section id="kenapa" className="scroll-mt-16 py-20 sm:py-28">
      <div className="wrap">
        <SectionHead eyebrow={features.eyebrow} title={features.title} subtitle={features.subtitle} />
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {big && (
            <div className="relative overflow-hidden rounded-[24px] border border-accent/25 bg-[radial-gradient(circle_at_30%_20%,rgb(46_197_255/0.18),transparent_60%),var(--color-card)] p-8 md:row-span-2">
              <div className="mb-3 grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon name={big.icon} />
              </div>
              <div className="text-grad font-display text-[clamp(72px,10vw,128px)] leading-none font-extrabold tabular-nums">{"stat" in big ? big.stat : ""}</div>
              <h3 className="mt-4 mb-1.5 text-2xl">{big.title}</h3>
              <p className="max-w-[320px] text-muted">{big.body}</p>
            </div>
          )}
          {rest.map((f, i) => (
            <div key={f.title} className={`rounded-[24px] border border-line bg-card p-7 ${i === rest.length - 1 ? "md:col-span-2" : ""}`}>
              <div className="mb-4 grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon name={f.icon} />
              </div>
              <h3 className="mb-1.5 text-xl">{f.title}</h3>
              <p className="text-sm text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
