import { features } from "@/config/site";
import Icon from "./ui/Icon";
import SectionHead from "./ui/SectionHead";

export default function Features() {
  return (
    <section id="kenapa" className="scroll-mt-16 py-[60px] sm:py-20">
      <div className="wrap">
        <SectionHead eyebrow={features.eyebrow} title={features.title} subtitle={features.subtitle} />
        <div className="grid gap-[18px] sm:grid-cols-2 min-[900px]:grid-cols-4">
          {features.items.map((f) => (
            <div key={f.title} className="rounded-[18px] border border-line bg-card p-[26px]">
              <div className="mb-4 grid size-11 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon name={f.icon} />
              </div>
              <h3 className="mb-1.5 text-[17px]">{f.title}</h3>
              <p className="text-sm text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
