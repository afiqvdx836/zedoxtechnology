import type { Tone } from "@/config/site";

const tones: Record<Tone, string> = {
  cyan: "bg-cyan/8 text-cyan border-cyan/20",
  orange: "bg-orange/8 text-orange border-orange/20",
  rose: "bg-rose/8 text-rose border-rose/20",
};

export default function Badge({ children, tone = "cyan" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span
      className={`mb-5 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wider uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
