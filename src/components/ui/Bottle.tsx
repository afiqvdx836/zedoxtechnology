import { product } from "@/config/site";

const bubbles = [
  { cx: 48, r: 2.2, delay: 0.9 },
  { cx: 58, r: 3, delay: 0 },
  { cx: 66, r: 1.8, delay: 2.6 },
  { cx: 72, r: 2, delay: 1.8 },
  { cx: 80, r: 2.5, delay: 0.6 },
  { cx: 86, r: 1.6, delay: 2.1 },
  { cx: 92, r: 2, delay: 2.3 },
  { cx: 100, r: 3.5, delay: 1.2 },
  { cx: 106, r: 1.8, delay: 0.3 },
  { cx: 112, r: 2.2, delay: 1.5 },
];

export function formatCycle(seconds: number) {
  const s = Math.max(0, Math.round(seconds));
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

type Props = {
  id: string; // keeps gradient ids unique when the bottle appears more than once
  metal?: string; // cap/base colour from the colour picker
  level?: number; // water level 0–1
  seconds?: number; // value on the display
  active?: boolean; // cycle running: glow, lit button, bubbles
  intensity?: number; // bubble opacity 0–1
};

export default function Bottle({ id, metal, level = 1, seconds = product.cycleSeconds, active = false, intensity = 1 }: Props) {
  const g = (name: string) => `${id}-${name}`;
  const metalFill = metal ?? `url(#${g("metal")})`;
  const waterH = 150 * Math.min(1, Math.max(0, level));

  return (
    <svg viewBox="0 0 160 420" xmlns="http://www.w3.org/2000/svg" className="h-full overflow-visible" role="img" aria-label="Ilustrasi botol hidrogen Zedox">
      <defs>
        <linearGradient id={g("metal")} x1="0" x2="1">
          <stop offset="0" stopColor="#2a3742" />
          <stop offset=".35" stopColor="#7d8d99" />
          <stop offset=".55" stopColor="#4a5965" />
          <stop offset="1" stopColor="#1b252e" />
        </linearGradient>
        <linearGradient id={g("shine")} x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity=".45" />
          <stop offset=".3" stopColor="#fff" stopOpacity=".3" />
          <stop offset=".45" stopColor="#fff" stopOpacity=".05" />
          <stop offset="1" stopColor="#000" stopOpacity=".5" />
        </linearGradient>
        <linearGradient id={g("glass")} x1="0" x2="1">
          <stop offset="0" stopColor="#9fdcf0" stopOpacity=".12" />
          <stop offset=".5" stopColor="#e6f8ff" stopOpacity=".22" />
          <stop offset="1" stopColor="#9fdcf0" stopOpacity=".1" />
        </linearGradient>
        <linearGradient id={g("water")} x1="0" x2="1">
          <stop offset="0" stopColor="#2ec5ff" stopOpacity=".35" />
          <stop offset=".5" stopColor="#bff0ff" stopOpacity=".55" />
          <stop offset="1" stopColor="#2ec5ff" stopOpacity=".3" />
        </linearGradient>
        <linearGradient id={g("glow")} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#2ec5ff" stopOpacity=".95" />
          <stop offset="1" stopColor="#2ec5ff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={g("glass-clip")}>
          <rect x="32" y="156" width="96" height="150" />
        </clipPath>
      </defs>

      {/* Cap */}
      <rect x="30" y="10" width="100" height="150" rx="16" fill={metalFill} />
      <rect x="30" y="10" width="100" height="150" rx="16" fill={`url(#${g("shine")})`} />
      <rect x="30" y="150" width="100" height="6" fill="#2ec5ff" opacity={active ? 1 : 0.6} />
      <text x="80" y="95" textAnchor="middle" fontFamily="var(--font-jakarta)" fontWeight="800" fontSize="15" fill="#c9d6df" letterSpacing="4" opacity=".75">
        ZEDOX
      </text>

      {/* Glass, water, glow, bubbles */}
      <rect x="32" y="156" width="96" height="150" fill={`url(#${g("glass")})`} />
      <g clipPath={`url(#${g("glass-clip")})`}>
        <rect x="32" y={306 - waterH} width="96" height={waterH} fill={`url(#${g("water")})`} />
        <rect x="32" y="200" width="96" height="106" fill={`url(#${g("glow")})`} opacity={active ? 0.75 * intensity : 0} style={{ transition: "opacity .4s" }} />
        {active && (
          <g fill="#e8fbff" opacity={intensity}>
            {bubbles.map((b) => (
              <circle key={b.cx} className="animate-rise opacity-0" cx={b.cx} cy="304" r={b.r} style={{ animationDelay: `${b.delay}s` }} />
            ))}
          </g>
        )}
      </g>
      <rect x="40" y="160" width="6" height="140" rx="3" fill="#fff" opacity=".12" />

      {/* Base and display */}
      <rect x="30" y="304" width="100" height="106" rx="14" fill={metalFill} />
      <rect x="30" y="304" width="100" height="106" rx="14" fill={`url(#${g("shine")})`} />
      <rect x="30" y="304" width="100" height="5" fill="#2ec5ff" opacity={active ? 1 : 0.6} />
      <circle cx="80" cy="356" r="22" fill="#0a1218" stroke={active ? "#2ec5ff" : "#3a4a56"} strokeWidth="2" />
      <text x="80" y="361" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#2ec5ff">
        {formatCycle(seconds)}
      </text>
    </svg>
  );
}
