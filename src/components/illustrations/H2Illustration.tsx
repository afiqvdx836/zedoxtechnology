// H2 selectively neutralising toxic radicals (•OH, ONOO⁻) while leaving NO• alone.
export default function H2Illustration() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[90%]" role="img" aria-label="Hydrogen molecule targeting toxic free radicals">
      <circle cx="100" cy="100" r="85" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />

      <g transform="translate(100, 100)">
        {[-15, 15].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="0" r="16" fill="url(#h2-atom)" />
            <text x={cx} y="4" fill="#03050a" fontFamily="var(--font-outfit)" fontSize="11" fontWeight="900" textAnchor="middle">H</text>
          </g>
        ))}
        <path d="M-5 0H5" stroke="#ffffff" strokeWidth="3" />
        <rect x="-38" y="-23" width="76" height="46" rx="23" stroke="#00f5ff" strokeWidth="1.5" strokeDasharray="8 4">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
        </rect>
      </g>

      <g transform="translate(45, 45)">
        <circle r="14" fill="#ef4444" opacity="0.8" />
        <text y="3" fill="#ffffff" fontFamily="var(--font-inter)" fontSize="7" fontWeight="800" textAnchor="middle">•OH</text>
        <path d="M15 15L30 30" stroke="#00f5ff" strokeDasharray="2 2" strokeWidth="1.5" />
      </g>

      <g transform="translate(155, 145)">
        <circle r="16" fill="#ef4444" opacity="0.8" />
        <text y="3" fill="#ffffff" fontFamily="var(--font-inter)" fontSize="7" fontWeight="800" textAnchor="middle">ONOO⁻</text>
        <path d="M-15 -15L-30 -30" stroke="#00f5ff" strokeDasharray="2 2" strokeWidth="1.5" />
      </g>

      <g transform="translate(160, 45)">
        <circle r="12" fill="#10b981" opacity="0.4" />
        <text y="3" fill="#ffffff" fontFamily="var(--font-inter)" fontSize="7" fontWeight="700" textAnchor="middle">NO•</text>
        <path d="M-8 8C-8 8 -15 15 -10 20" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
      </g>

      <defs>
        <linearGradient id="h2-atom" x1="-15" y1="-16" x2="15" y2="16" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00f5ff" />
          <stop offset="100%" stopColor="#e6aa80" />
        </linearGradient>
      </defs>
    </svg>
  );
}
