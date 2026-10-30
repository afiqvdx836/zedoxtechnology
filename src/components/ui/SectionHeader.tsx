import Badge from "./Badge";
import Reveal from "./Reveal";

type Props = {
  badge: string;
  titleLead: string;
  titleAccent: string;
  accent?: "orange" | "cyan";
  subtitle: string;
};

export default function SectionHeader({ badge, titleLead, titleAccent, accent = "orange", subtitle }: Props) {
  return (
    <Reveal className="mx-auto mb-14 max-w-[750px] text-center">
      <Badge>{badge}</Badge>
      <h2 className="mb-5 text-3xl leading-tight md:text-[2.8rem]">
        {titleLead} <span className={accent === "orange" ? "grad-orange" : "grad-cyan"}>{titleAccent}</span>
      </h2>
      <p className="text-lg">{subtitle}</p>
    </Reveal>
  );
}
