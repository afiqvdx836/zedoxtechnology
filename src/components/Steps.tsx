import { steps } from "@/config/site";
import SectionHead from "./ui/SectionHead";

export default function Steps() {
  return (
    <section id="cara" className="scroll-mt-16 pt-5 pb-[60px] sm:pb-20">
      <div className="wrap">
        <SectionHead eyebrow={steps.eyebrow} title={steps.title} />
        <ol className="grid gap-[18px] min-[900px]:grid-cols-3">
          {steps.items.map((s, i) => (
            <li key={s.title} className="rounded-[18px] border border-line bg-gradient-to-b from-card to-transparent p-7">
              <span className="text-grad mb-2 block text-[44px] leading-none font-extrabold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mb-1.5 text-lg">{s.title}</h3>
              <p className="text-sm text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
