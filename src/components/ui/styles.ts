// Shared button classes, used by both <a> and <button>.
export const btn = {
  base: "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-[22px] py-3 text-[15px] font-bold transition duration-150",
  primary: "bg-grad text-ink shadow-[0_8px_30px_-8px_rgb(46_197_255/0.6)] hover:-translate-y-0.5",
  ghost: "border border-line text-fg hover:border-accent",
  dark: "bg-ink text-white hover:-translate-y-0.5",
  sm: "!px-4 !py-[9px] !text-[13px]",
};
