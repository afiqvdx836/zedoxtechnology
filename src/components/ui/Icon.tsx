import type { IconName } from "@/config/site";

const paths: Record<IconName | "check", React.ReactNode> = {
  membrane: <path d="M12 2v6M5 9h14l-1 13H6L5 9Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  drop: <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" />,
  check: <path d="M20 6 9 17l-5-5" />,
};

export default function Icon({ name, size = 22, strokeWidth = 2 }: { name: IconName | "check"; size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24" aria-hidden>
      {paths[name]}
    </svg>
  );
}
