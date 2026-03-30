'use client'

export function HeroBeam() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        viewBox="0 0 800 700"
        className="absolute right-0 top-0 h-full w-[55%] opacity-[0.18]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Fuchsia gradient stroke */}
          <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff89ac" stopOpacity="0" />
            <stop offset="40%" stopColor="#ff0080" stopOpacity="1" />
            <stop offset="100%" stopColor="#ac8aff" stopOpacity="0.3" />
          </linearGradient>

          {/* Violet gradient stroke */}
          <linearGradient id="beam2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ac8aff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ac8aff" stopOpacity="1" />
            <stop offset="100%" stopColor="#8ff5ff" stopOpacity="0.2" />
          </linearGradient>

          {/* Cyan gradient stroke */}
          <linearGradient id="beam3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8ff5ff" stopOpacity="0" />
            <stop offset="60%" stopColor="#8ff5ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff89ac" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Line 1 — fuchsia, slow drift */}
        <path
          d="M 650 -50 C 520 150, 750 280, 580 420 C 420 560, 700 620, 620 780"
          fill="none"
          stroke="url(#beam1)"
          strokeWidth="1.5"
          filter="url(#glow)"
          strokeDasharray="420 800"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1200"
            to="-1200"
            dur="18s"
            repeatCount="indefinite"
          />
        </path>

        {/* Line 2 — violet, offset timing */}
        <path
          d="M 720 80 C 580 200, 800 350, 640 500 C 480 640, 760 680, 680 820"
          fill="none"
          stroke="url(#beam2)"
          strokeWidth="1"
          filter="url(#glow)"
          strokeDasharray="380 900"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1280"
            to="-1280"
            dur="24s"
            repeatCount="indefinite"
          />
        </path>

        {/* Line 3 — cyan, faster */}
        <path
          d="M 590 -80 C 480 80, 680 240, 520 380 C 360 520, 640 580, 560 750"
          fill="none"
          stroke="url(#beam3)"
          strokeWidth="0.8"
          filter="url(#glow)"
          strokeDasharray="300 1000"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1300"
            to="-1300"
            dur="14s"
            repeatCount="indefinite"
          />
        </path>

        {/* Thin accent line — barely visible */}
        <path
          d="M 760 120 C 660 260, 820 380, 700 520 C 580 650, 820 700, 740 840"
          fill="none"
          stroke="#ff89ac"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          filter="url(#glow)"
          strokeDasharray="200 1200"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1400"
            to="-1400"
            dur="30s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}
