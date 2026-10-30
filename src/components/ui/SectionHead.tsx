export default function SectionHead({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-[620px] text-center">
      <div className="mb-2.5 text-xs font-bold tracking-[2px] text-accent uppercase">{eyebrow}</div>
      <h2 className="mb-3 text-[clamp(26px,3.6vw,38px)] leading-tight tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted">{subtitle}</p>}
    </div>
  );
}
