import { audience, audienceSection, notSuitable } from "@/config/site";
import Rich from "./ui/Rich";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

export default function Audience() {
  return (
    <section id="audience" className="relative scroll-mt-20 bg-white/1 py-16 md:py-24">
      <div className="container-page">
        <SectionHeader {...audienceSection} />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {audience.map((a) => (
            <Reveal key={a.title} className="glass-card group !p-7">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/8 text-xl text-cyan transition group-hover:bg-cyan group-hover:text-ink-deep group-hover:shadow-[0_0_15px_rgb(0_245_255/0.4)]">
                  <i className={`fa-solid ${a.icon}`} aria-hidden />
                </div>
                <h3 className="text-xl">{a.title}</h3>
              </div>
              <p className="mb-4 text-[0.95rem]">
                <Rich text={a.body} />
              </p>
              <div className="flex flex-wrap gap-2">
                {a.markers.map((m) => (
                  <span key={m} className="rounded-md border border-line bg-white/3 px-2.5 py-1 text-xs text-fg-2">
                    {m}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-rose/25 bg-rose/5 p-7 md:p-8">
          <h3 className="mb-4 flex items-center gap-2.5 text-lg !text-rose">
            <i className="fa-solid fa-user-doctor" aria-hidden /> {notSuitable.title}
          </h3>
          <ul className="mb-4 grid gap-2.5 md:grid-cols-2">
            {notSuitable.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-[0.95rem] text-fg">
                <i className="fa-solid fa-circle-exclamation mt-1 text-rose" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm">{notSuitable.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
