import { product } from "@/config/site";

export default function DeviceIllustration() {
  return (
    <svg viewBox="0 0 320 370" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full" role="img" aria-label={`${product.name} hydrogen device`}>
      <rect x="10" y="10" width="300" height="350" rx="32" fill="#080c14" stroke="url(#dev-border)" strokeWidth="2" />
      <rect x="12" y="12" width="296" height="346" rx="30" fill="url(#dev-bg)" />

      {/* Screen */}
      <rect x="35" y="70" width="250" height="90" rx="10" fill="#020408" stroke="rgba(0, 245, 255, 0.15)" strokeWidth="1" />
      <text x="50" y="105" fill="#00f5ff" fontFamily="var(--font-outfit)" fontSize="12" fontWeight="600" letterSpacing="1">
        {product.deviceLabel}
      </text>
      <text x="50" y="138" fill="#e6aa80" fontFamily="var(--font-outfit)" fontSize="28" fontWeight="800">
        {product.flowRate}{" "}
        <tspan fontSize="14" fontWeight="500">
          ml/min
        </tspan>
      </text>
      <rect x="180" y="115" width="90" height="24" rx="12" fill="rgba(0, 245, 255, 0.1)" stroke="#00f5ff" strokeWidth="0.5" />
      <text x="225" y="131" fill="#00f5ff" fontFamily="var(--font-inter)" fontSize="9" fontWeight="700" textAnchor="middle">
        {product.tech}
      </text>

      {/* Pulsing indicator */}
      <circle cx="160" cy="235" r="45" stroke="rgba(255,255,255,0.03)" strokeWidth="8" fill="none" />
      <circle cx="160" cy="235" r="45" stroke="url(#dev-ring)" strokeWidth="8" strokeLinecap="round" fill="none" strokeDasharray="280" strokeDashoffset="80">
        <animate attributeName="stroke-dashoffset" values="280;0;280" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx="160" cy="235" r="45" fill="none" stroke="#00f5ff" strokeWidth="1" filter="url(#dev-glow)" />
      <path d="M153 235C153 231 160 225 160 225C160 225 167 231 167 235C167 239 160 245 160 245C160 245 153 239 153 235Z" fill="#ffffff" opacity="0.8" />
      <circle cx="160" cy="235" r="3" fill="#00f5ff" />

      {/* Water level */}
      <rect x="250" y="190" width="8" height="90" rx="4" fill="#03050a" />
      <rect x="250" y="210" width="8" height="70" rx="4" fill="url(#dev-water)" />

      {/* Nozzles */}
      <rect x="120" y="315" width="30" height="15" rx="4" fill="#151e2d" />
      <rect x="170" y="315" width="30" height="15" rx="4" fill="#151e2d" />
      <circle cx="135" cy="322" r="4" fill="#000" />
      <circle cx="185" cy="322" r="4" fill="#000" />
      <text x="135" y="342" fill="#6b7280" fontFamily="var(--font-inter)" fontSize="8" textAnchor="middle">O2 OUT</text>
      <text x="185" y="342" fill="#00f5ff" fontFamily="var(--font-inter)" fontSize="8" textAnchor="middle">H2 OUT</text>

      <defs>
        <linearGradient id="dev-border" x1="0" y1="0" x2="320" y2="370" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff7b00" />
          <stop offset="50%" stopColor="#151e2d" />
          <stop offset="100%" stopColor="#00f5ff" />
        </linearGradient>
        <radialGradient id="dev-bg" cx="160" cy="185" r="185" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0c1220" />
          <stop offset="100%" stopColor="#04060b" />
        </radialGradient>
        <linearGradient id="dev-ring" x1="115" y1="235" x2="205" y2="235" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f5ff" />
          <stop offset="100%" stopColor="#ff7b00" />
        </linearGradient>
        <linearGradient id="dev-water" x1="250" y1="280" x2="250" y2="190" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0055ff" />
          <stop offset="100%" stopColor="#00f5ff" />
        </linearGradient>
        <filter id="dev-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}
