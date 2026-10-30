import { site } from "@/config/site";

export default function Logo() {
  return (
    <span className="flex items-center gap-2 font-heading text-[1.45rem] font-extrabold text-white">
      <i className="fa-solid fa-square-h text-cyan drop-shadow-[0_0_5px_rgb(0_245_255/0.4)]" aria-hidden />
      {site.brand.name}
      <span className="font-normal text-cyan">{site.brand.suffix}</span>
    </span>
  );
}
