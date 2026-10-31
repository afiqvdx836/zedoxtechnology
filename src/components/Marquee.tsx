import { marquee } from "@/config/site";

export default function Marquee() {
  // Two copies side by side; the strip slides by half its width and loops seamlessly.
  const items = [...marquee, ...marquee];
  return (
    <div className="overflow-hidden border-y border-line bg-bg-2 py-5" aria-label={marquee.join(", ")}>
      <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused] font-display text-2xl font-bold whitespace-nowrap text-muted md:text-3xl" aria-hidden>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-10">
            <span className={i % 3 === 0 ? "text-grad" : ""}>{item}</span>
            <span className="size-2 rounded-full bg-mint/60" />
          </li>
        ))}
      </ul>
    </div>
  );
}
