import { product } from "@/config/site";

const bubbles = [
  { cx: 60, r: 3, delay: 0 },
  { cx: 80, r: 2.5, delay: 0.6 },
  { cx: 100, r: 3.5, delay: 1.2 },
  { cx: 70, r: 2, delay: 1.8 },
  { cx: 92, r: 2, delay: 2.3 },
  { cx: 50, r: 2.2, delay: 0.9 },
  { cx: 112, r: 2.2, delay: 1.5 },
];

function formatCycle(seconds: number) {
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

// The Zedox bottle. `id` keeps gradient ids unique when it appears twice on a page.
// `metal` overrides the cap/base colour (used by the colour picker).
export default function Bottle({ id, animated = false, metal }: { id: string; animated?: boolean; metal?: string }) {
  const g = (name: string) => `${id}-${name}`;
  const metalFill = metal ?? `url(#${g("metal")})`;
  return (
    <svg viewBox="0 0 160 420" xmlns="http://www.w3.org/2000/svg" className="h-full" role="img" aria-label="Ilustrasi botol hidrogen Zedox">
      <defs>
        <linearGradient id={g("metal")} x1="0" x2="1">
          <stop offset="0" stopColor="#2a3742" />
          <stop offset=".35" stopColor="#7d8d99" />
          <stop offset=".55" stopColor="#4a5965" />
          <stop offset="1" stopColor="#1b252e" />
        </linearGradient>
        <linearGradient id={g("glass")} x1="0" x2="1">
          <stop offset="0" stopColor="#2ec5ff" stopOpacity=".35" />
          <stop offset=".5" stopColor="#bff0ff" stopOpacity=".55" />
          <stop offset="1" stopColor="#2ec5ff" stopOpacity=".3" />
        </linearGradient>
        <linearGradient id={g("glow")} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#2ec5ff" stopOpacity=".9" />
          <stop offset="1" stopColor="#2ec5ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={g("shine")} x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity=".35" />
          <stop offset=".35" stopColor="#fff" stopOpacity=".25" />
          <stop offset="1" stopColor="#000" stopOpacity=".4" />
        </linearGradient>
      </defs>

      <rect x="30" y="10" width="100" height="150" rx="16" fill={metalFill} />
      {metal && <rect x="30" y="10" width="100" height="150" rx="16" fill={`url(#${g("shine")})`} />}
      <rect x="30" y="150" width="100" height="6" fill="#2ec5ff" opacity=".9" />
      <text x="80" y="95" textAnchor="middle" fontFamily="var(--font-jakarta)" fontWeight="800" fontSize="15" fill="#c9d6df" letterSpacing="4" opacity=".75">
        ZEDOX
      </text>

      <rect x="32" y="156" width="96" height="150" fill={`url(#${g("glass")})`} />
      {animated && (
        <>
          <rect x="32" y="200" width="96" height="106" fill={`url(#${g("glow")})`} opacity=".7" />
          <g fill="#e8fbff">
            {bubbles.map((b) => (
              <circle key={b.cx} className="animate-rise opacity-0" cx={b.cx} cy="300" r={b.r} style={{ animationDelay: `${b.delay}s` }} />
            ))}
          </g>
        </>
      )}

      <rect x="30" y="304" width="100" height="106" rx="14" fill={metalFill} />
      {metal && <rect x="30" y="304" width="100" height="106" rx="14" fill={`url(#${g("shine")})`} />}
      <rect x="30" y="304" width="100" height="5" fill="#2ec5ff" />
      <circle cx="80" cy="356" r="22" fill="#0a1218" stroke="#3a4a56" strokeWidth="2" />
      <text x="80" y="361" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#2ec5ff">
        {formatCycle(product.cycleSeconds)}
      </text>
    </svg>
  );
}
