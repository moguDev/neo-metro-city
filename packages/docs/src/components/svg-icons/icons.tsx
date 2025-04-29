type Props = {
  size?: number;
};

export const ClipboardIcon = ({ size = 6 }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={`size-${size} overflow-visible`}
  >
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
      filter="url(#glow)"
    />
  </svg>
);

export const ChevronRightIcon = ({ size = 6 }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="3"
    stroke="var(--neon-orange)"
    className={`size-${size} overflow-visible`}
  >
    <defs>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feColorMatrix
          type="matrix"
          values="0 1 0 0 0 
                1 0 0 0 0 
                0 0 0 0 0 
                0 0 0 1 0"
        />
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
      filter="url(#glow)"
    />
  </svg>
);

export const NPMIcon = ({ size = 6 }: Props) => (
  <svg
    className="inline"
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: `${size}px`, height: `${size}px` }}
  >
    <path d="m0 256v-256h256v256z" fill="#c12127" />
    <path d="m48 48h160v160h-32v-128h-48v128h-80z" fill="#fff" />
  </svg>
);

export const PNPMIcon = ({ size = 6 }: Props) => (
  <svg
    className="inline"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: `${size}px`, height: `${size}px` }}
  >
    <path d="M30,10.75H21.251V2H30Z" style={{ fill: "#f9ad00" }} />
    <path d="M20.374,10.75h-8.75V2h8.75Z" style={{ fill: "#f9ad00" }} />
    <path d="M10.749,10.75H2V2h8.749Z" style={{ fill: "#f9ad00" }} />
    <path d="M30,20.375H21.251v-8.75H30Z" style={{ fill: "#f9ad00" }} />
    <path d="M20.374,20.375h-8.75v-8.75h8.75Z" fill="currentColor" />
    <path d="M20.374,30h-8.75V21.25h8.75Z" fill="currentColor" />
    <path d="M30,30H21.251V21.25H30Z" fill="currentColor" />
    <path d="M10.749,30H2V21.25h8.749Z" fill="currentColor" />
  </svg>
);

export const YarnIcon = ({ size = 6 }: Props) => (
  <svg
    className="inline"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{ width: `${size}px`, height: `${size}px` }}
  >
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      fill="#117cad"
      stroke="none"
    >
      <path d="M17.845 19.308c-1.268 .814 -2.41 1.254 -3.845 1.692c-.176 .21 -.645 .544 -.912 .588a42.469 42.469 0 0 1 -4.498 .412c-.812 .006 -1.31 -.214 -1.447 -.554c-.115 -.279 .336 -2.054 .298 -1.964c-.157 .392 -.575 1.287 -.997 1.72c-.579 .6 -1.674 .4 -2.322 .051c-.71 -.386 -.07 -1.28 -.346 -1.267c-.276 .014 -.776 -1.486 -.776 -2.236c0 -.828 .622 -1.674 1.235 -2.211a6.811 6.811 0 0 1 .46 -3.143a7.414 7.414 0 0 1 2.208 -2.615s-1.353 -1.534 -.849 -2.912c.328 -.902 .46 -.895 .567 -.935c.38 -.12 .727 -.33 1.013 -.612c.78 -.88 1.96 -1.438 3.116 -1.322c0 0 .781 -2.43 1.533 -1.936c.415 .653 .671 1.218 .967 1.936c0 0 1.15 -.7 1.25 -.5c.514 1.398 .487 3.204 .211 4.67c-.324 1.408 -.84 2.691 -1.711 3.83c-.094 .16 .98 .705 1.722 2.812c.686 1.928 .278 2.438 .278 2.688s.716 .144 2.296 -.855a5.848 5.848 0 0 1 2.984 -1.145c.735 -.066 .988 -.035 1.22 1c.232 1.035 -.346 1.406 -.744 1.506c0 0 -2.09 .675 -2.911 1.302z"></path>
    </g>
  </svg>
);
