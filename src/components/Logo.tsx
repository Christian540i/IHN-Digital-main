interface LogoProps {
  size?: number;
  className?: string;
}

// Luxury monogram mark for IHN Digital.
// - A thin circular glass-border frame matches the liquid-glass language.
// - "IHN" is set in Instrument Serif italic to pair with the rest of the site.
export default function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="IHN Digital"
      role="img"
    >
      <defs>
        <linearGradient id="ihnRing" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.7" />
          <stop offset="50%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="white" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Outer glass ring */}
      <circle
        cx="24"
        cy="24"
        r="22.5"
        stroke="url(#ihnRing)"
        strokeWidth="1"
        fill="rgba(255,255,255,0.02)"
      />

      {/* IHN monogram */}
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fill="white"
        fontFamily="'Instrument Serif', serif"
        fontStyle="italic"
        fontSize="18"
        fontWeight="400"
        letterSpacing="-0.5"
      >
        IHN
      </text>
    </svg>
  );
}
