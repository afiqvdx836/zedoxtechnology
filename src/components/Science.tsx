import { science } from "@/config/site";
import Rich from "./ui/Rich";
import Badge from "./ui/Badge";
import Reveal from "./ui/Reveal";
import H2Illustration from "./illustrations/H2Illustration";

export default function Science() {
  return (
    <section id="science" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="flex h-80 items-center justify-center rounded-[20px] border border-line bg-white/1 p-7 lg:h-[400px]">
          <H2Illustration />
        </Reveal>

        <Reveal>
          <Badge tone="rose">{science.badge}</Badge>
          <h3 className="mb-4 text-[2rem]">{science.title}</h3>
          {science.paragraphs.map((p, i) => (
            <p key={i} className="mb-5 text-[1.05rem]">
              <Rich text={p} />
            </p>
          ))}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-bad/15 bg-white/2 p-6">
              <h4 className="mb-2.5 flex items-center gap-2 text-lg !text-bad">
                <i className="fa-solid fa-triangle-exclamation" aria-hidden /> {science.bad.title}
              </h4>
              <p className="text-sm">
                <Rich text={science.bad.body} />
              </p>
            </div>
            <div className="rounded-2xl border border-cyan/15 bg-white/2 p-6">
              <h4 className="mb-2.5 flex items-center gap-2 text-lg !text-cyan">
                <i className="fa-solid fa-circle-check" aria-hidden /> {science.good.title}
              </h4>
              <p className="text-sm">
                <Rich text={science.good.body} />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
