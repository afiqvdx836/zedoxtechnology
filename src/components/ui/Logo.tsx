import { site } from "@/config/site";

export default function Logo() {
  return (
    <span className="flex items-center gap-2.5 font-extrabold tracking-wide">
      <span className="grid size-8 place-items-center rounded-[9px] bg-grad text-ink">{site.brand[0]}</span>
      <span className="leading-tight">
        {site.brand}
        <small className="-mt-0.5 block text-[11px] font-medium tracking-[1.5px] text-muted">{site.brandSub}</small>
      </span>
    </span>
  );
}
