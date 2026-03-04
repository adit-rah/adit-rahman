const strokeProps = {
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

export function DoodleSpark() {
  return (
    <svg viewBox="0 0 160 160" className="w-32 h-32 text-muted-foreground">
      {/* kid at a screen */}
      <circle cx="60" cy="50" r="12" {...strokeProps} />
      <line x1="60" y1="62" x2="60" y2="95" {...strokeProps} />
      <line x1="60" y1="75" x2="45" y2="85" {...strokeProps} />
      <line x1="60" y1="75" x2="75" y2="68" {...strokeProps} />
      <line x1="60" y1="95" x2="48" y2="115" {...strokeProps} />
      <line x1="60" y1="95" x2="72" y2="115" {...strokeProps} />
      {/* screen */}
      <rect x="85" y="40" width="45" height="35" rx="3" {...strokeProps} />
      <line x1="107" y1="75" x2="107" y2="85" {...strokeProps} />
      <line x1="95" y1="85" x2="119" y2="85" {...strokeProps} />
      {/* code lines on screen */}
      <line x1="92" y1="50" x2="108" y2="50" {...strokeProps} strokeWidth={1.5} />
      <line x1="92" y1="56" x2="122" y2="56" {...strokeProps} strokeWidth={1.5} />
      <line x1="92" y1="62" x2="115" y2="62" {...strokeProps} strokeWidth={1.5} />
      {/* sparkles */}
      <path d="M30 30 L33 25 L36 30 L33 35Z" {...strokeProps} strokeWidth={1.5} />
      <path d="M140 20 L142 16 L144 20 L142 24Z" {...strokeProps} strokeWidth={1.5} />
      <circle cx="25" cy="70" r="2" fill="currentColor" />
    </svg>
  );
}

export function DoodleUni() {
  return (
    <svg viewBox="0 0 160 160" className="w-32 h-32 text-muted-foreground">
      {/* graduation cap */}
      <polygon points="80,30 120,50 80,70 40,50" {...strokeProps} />
      <line x1="80" y1="70" x2="80" y2="55" {...strokeProps} />
      <line x1="120" y1="50" x2="120" y2="72" {...strokeProps} />
      <path d="M55 58 Q80 80 105 58" {...strokeProps} />
      {/* tassel */}
      <line x1="120" y1="72" x2="125" y2="82" {...strokeProps} />
      <circle cx="125" cy="85" r="3" fill="currentColor" />
      {/* books stack */}
      <rect x="30" y="100" width="40" height="8" rx="1" {...strokeProps} />
      <rect x="33" y="92" width="40" height="8" rx="1" {...strokeProps} />
      <rect x="28" y="108" width="40" height="8" rx="1" {...strokeProps} />
      {/* coffee cup */}
      <path d="M100 100 L100 118 Q100 125 107 125 L115 125 Q122 125 122 118 L122 100Z" {...strokeProps} />
      <path d="M122 105 Q132 105 132 112 Q132 118 122 118" {...strokeProps} />
      {/* steam */}
      <path d="M107 95 Q109 89 107 83" {...strokeProps} strokeWidth={1.5} />
      <path d="M115 95 Q117 89 115 83" {...strokeProps} strokeWidth={1.5} />
    </svg>
  );
}

export function DoodleShip() {
  return (
    <svg viewBox="0 0 160 160" className="w-32 h-32 text-muted-foreground">
      {/* rocket */}
      <path d="M80 25 Q80 45 70 70 L90 70 Q80 45 80 25Z" {...strokeProps} />
      <rect x="70" y="70" width="20" height="15" rx="1" {...strokeProps} />
      {/* fins */}
      <path d="M70 75 L58 88 L70 85" {...strokeProps} />
      <path d="M90 75 L102 88 L90 85" {...strokeProps} />
      {/* window */}
      <circle cx="80" cy="55" r="5" {...strokeProps} />
      {/* flames */}
      <path d="M73 85 Q76 100 80 95 Q84 100 87 85" {...strokeProps} strokeWidth={1.5} />
      {/* stars */}
      <circle cx="35" cy="40" r="2" fill="currentColor" />
      <circle cx="130" cy="55" r="2" fill="currentColor" />
      <circle cx="45" cy="100" r="1.5" fill="currentColor" />
      <circle cx="125" cy="95" r="1.5" fill="currentColor" />
      <path d="M120 30 L122 26 L124 30 L122 34Z" {...strokeProps} strokeWidth={1.5} />
      <path d="M30 75 L32 71 L34 75 L32 79Z" {...strokeProps} strokeWidth={1.5} />
      {/* cloud */}
      <path d="M38 125 Q38 115 48 115 Q48 108 58 110 Q68 108 68 115 Q78 115 78 125Z" {...strokeProps} strokeWidth={1.5} />
    </svg>
  );
}

export function DoodleBuild() {
  return (
    <svg viewBox="0 0 160 160" className="w-32 h-32 text-muted-foreground">
      {/* terminal window */}
      <rect x="25" y="30" width="110" height="80" rx="6" {...strokeProps} />
      <line x1="25" y1="45" x2="135" y2="45" {...strokeProps} />
      {/* window dots */}
      <circle cx="37" cy="38" r="2.5" fill="currentColor" />
      <circle cx="47" cy="38" r="2.5" fill="currentColor" />
      <circle cx="57" cy="38" r="2.5" fill="currentColor" />
      {/* terminal lines */}
      <text x="35" y="62" fontSize="10" fill="currentColor" fontFamily="monospace">&gt; _</text>
      <line x1="35" y1="72" x2="85" y2="72" {...strokeProps} strokeWidth={1.5} />
      <line x1="35" y1="82" x2="105" y2="82" {...strokeProps} strokeWidth={1.5} />
      <line x1="35" y1="92" x2="70" y2="92" {...strokeProps} strokeWidth={1.5} />
      {/* wrench */}
      <path d="M115 120 L130 135" {...strokeProps} strokeWidth={2.5} />
      <circle cx="112" cy="117" r="6" {...strokeProps} />
      {/* gears */}
      <circle cx="40" cy="135" r="8" {...strokeProps} />
      <circle cx="40" cy="135" r="3" {...strokeProps} />
      <circle cx="58" cy="130" r="5" {...strokeProps} />
      <circle cx="58" cy="130" r="2" {...strokeProps} />
    </svg>
  );
}
