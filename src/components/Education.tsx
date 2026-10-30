import { education, product } from "@/config/site";
import { waLink } from "@/lib/whatsapp";
import Rich from "./ui/Rich";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <Reveal>
          <Badge tone="rose">{education.badge}</Badge>
          <h3 className="mb-4 text-[2.2rem] leading-tight">{education.title}</h3>
          <p className="mb-6 text-[1.05rem]">{education.intro}</p>
          <p className="mb-6 text-[1.05rem]">
            <Rich text={education.lead} />
          </p>
          <ul className="space-y-4">
            {product.features.map((f) => (
              <li key={f.title} className="flex gap-2.5">
                <i className={`fa-solid ${f.icon} mt-1 text-cyan`} aria-hidden />
                <span className="text-fg-2">
                  <strong className="text-white">{f.title}</strong> {f.body}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="flex justify-center">
          <div className="glass-card !border-cyan/25 !p-8 text-center">
            <i className={`fa-solid ${education.support.icon} mb-5 text-[3.5rem] text-cyan`} aria-hidden />
            <h4 className="mb-3 text-[1.35rem]">{education.support.title}</h4>
            <p className="mb-5 text-[0.95rem]">
              <Rich text={education.support.body} />
            </p>
            <Button href={waLink("specs")} external variant="outline" icon="fa-gears" className="w-full">
              {education.support.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
