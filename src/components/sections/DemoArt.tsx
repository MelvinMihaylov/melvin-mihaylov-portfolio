/**
 * Illustrations for the demo sites.
 *
 * These stand in for photography. Drawn rather than faked with blurred
 * gradients — at this scale a flat vector scene reads as art direction, while a
 * soft gradient blob reads as an image that failed to load.
 *
 * Every gradient id is suffixed per-component because several demos can be in
 * the DOM across switches, and duplicate ids would cross-wire the fills.
 */

/** City at dawn — the blog's lead image. */
export function CityArt() {
  return (
    <svg
      className="ds-svg"
      viewBox="0 0 400 210"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="citySky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b1b3d" />
          <stop offset="42%" stopColor="#9c4a52" />
          <stop offset="72%" stopColor="#e08a52" />
          <stop offset="100%" stopColor="#f6c17a" />
        </linearGradient>
        <linearGradient id="cityFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a2f44" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3a2338" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      <rect width="400" height="210" fill="url(#citySky)" />

      {/* sun + haze */}
      <circle cx="286" cy="128" r="30" fill="#ffd9a0" opacity="0.95" />
      <circle cx="286" cy="128" r="54" fill="#ffc98a" opacity="0.22" />
      <circle cx="286" cy="128" r="84" fill="#ffbe7d" opacity="0.1" />

      {/* far skyline */}
      <g fill="#58384f" opacity="0.72">
        <rect x="6" y="104" width="30" height="106" />
        <rect x="42" y="86" width="22" height="124" />
        <rect x="70" y="112" width="34" height="98" />
        <rect x="112" y="94" width="26" height="116" />
        <rect x="146" y="118" width="30" height="92" />
        <rect x="320" y="98" width="28" height="112" />
        <rect x="354" y="116" width="40" height="94" />
      </g>

      {/* near towers */}
      <g fill="#30203a">
        <rect x="24" y="130" width="46" height="80" />
        <rect x="78" y="112" width="38" height="98" />
        <path d="M124 150h52v60h-52z" />
        <path d="M186 96h40v114h-40z" />
        <path d="M186 96l20-18 20 18z" />
        <rect x="236" y="138" width="30" height="72" />
        <rect x="276" y="158" width="44" height="52" />
        <rect x="330" y="134" width="34" height="76" />
      </g>

      {/* lit windows */}
      <g fill="#ffd79b" opacity="0.9">
        {[
          [34, 142],
          [48, 142],
          [34, 158],
          [60, 158],
          [34, 176],
          [48, 176],
          [88, 126],
          [102, 126],
          [88, 144],
          [102, 162],
          [88, 180],
          [134, 162],
          [150, 162],
          [134, 180],
          [162, 180],
          [196, 112],
          [210, 112],
          [196, 132],
          [210, 152],
          [196, 172],
          [244, 152],
          [256, 170],
          [244, 188],
          [288, 172],
          [304, 172],
          [288, 190],
          [340, 150],
          [354, 150],
          [340, 170],
          [354, 188],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="6" height="8" rx="1" />
        ))}
      </g>

      {/* birds */}
      <g stroke="#2b1b3d" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.6">
        <path d="M112 46c4-4 8-4 11 0 3-4 7-4 11 0" />
        <path d="M150 32c3-3 6-3 8 0 2-3 5-3 8 0" />
        <path d="M86 64c2.5-2.5 5-2.5 7 0 2-2.5 4.5-2.5 7 0" />
      </g>
    </svg>
  );
}

/** Plated dish from above — the menu's feature image. */
export function DishArt() {
  return (
    <svg
      className="ds-svg"
      viewBox="0 0 220 220"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="dishCloth" cx="38%" cy="32%" r="78%">
          <stop offset="0%" stopColor="#3b3026" />
          <stop offset="100%" stopColor="#15110c" />
        </radialGradient>
        <radialGradient id="dishPlate" cx="36%" cy="30%" r="72%">
          <stop offset="0%" stopColor="#f6f1e6" />
          <stop offset="78%" stopColor="#ded5c4" />
          <stop offset="100%" stopColor="#c3b8a4" />
        </radialGradient>
        <linearGradient id="dishBeet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b8365c" />
          <stop offset="100%" stopColor="#7a1f3d" />
        </linearGradient>
      </defs>

      <rect width="220" height="220" fill="url(#dishCloth)" />

      {/* plate */}
      <ellipse cx="110" cy="112" rx="84" ry="82" fill="#0f0c08" opacity="0.45" />
      <circle cx="110" cy="108" r="80" fill="url(#dishPlate)" />
      <circle cx="110" cy="108" r="80" fill="none" stroke="#fff" strokeOpacity="0.25" />
      <circle cx="110" cy="108" r="61" fill="none" stroke="#b3a894" strokeOpacity="0.45" />

      {/* puree swoosh */}
      <path
        d="M66 126c12-26 44-34 70-22 10 5 14 14 8 20-10 10-34 4-48 10-9 4-18 8-24 4-5-3-8-8-6-12z"
        fill="#d9a441"
        opacity="0.9"
      />

      {/* beetroot slices */}
      <g>
        <circle cx="96" cy="92" r="17" fill="url(#dishBeet)" />
        <circle cx="96" cy="92" r="11" fill="#8f2749" opacity="0.7" />
        <circle cx="126" cy="104" r="14" fill="url(#dishBeet)" />
        <circle cx="126" cy="104" r="9" fill="#8f2749" opacity="0.7" />
        <circle cx="110" cy="126" r="12" fill="url(#dishBeet)" opacity="0.92" />
      </g>

      {/* goat cheese */}
      <g fill="#f7f3e8">
        <circle cx="86" cy="118" r="8" />
        <circle cx="134" cy="86" r="6.5" />
        <circle cx="118" cy="140" r="5" />
      </g>

      {/* walnuts */}
      <g fill="#8a5a33">
        <ellipse cx="140" cy="124" rx="6" ry="5" />
        <ellipse cx="78" cy="98" rx="5" ry="4.2" />
        <ellipse cx="106" cy="74" rx="4.6" ry="3.8" />
      </g>

      {/* micro herbs */}
      <g stroke="#5f8f4a" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M118 112c4-6 10-8 14-6" />
        <path d="M92 134c3-5 8-7 12-6" />
        <path d="M132 94c3-5 8-6 12-4" />
      </g>
      <g fill="#6fa455">
        <circle cx="133" cy="105" r="2.4" />
        <circle cx="105" cy="128" r="2.1" />
        <circle cx="145" cy="89" r="2" />
      </g>

      {/* sauce dots */}
      <g fill="#7a1f3d" opacity="0.75">
        <circle cx="62" cy="86" r="3.4" />
        <circle cx="156" cy="138" r="3" />
        <circle cx="72" cy="150" r="2.4" />
      </g>
    </svg>
  );
}

type ProductKind = 0 | 1 | 2 | 3;

/** Studio product shots — chair, lamp, table, rug. */
export function ProductArt({ kind }: { kind: ProductKind }) {
  const id = `prod${kind}`;
  return (
    <svg
      className="ds-svg"
      viewBox="0 0 130 150"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${id}bg`} cx="50%" cy="34%" r="76%">
          <stop offset="0%" stopColor="var(--p-light)" />
          <stop offset="100%" stopColor="var(--p-dark)" />
        </radialGradient>
        <linearGradient id={`${id}body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--p-objA)" />
          <stop offset="100%" stopColor="var(--p-objB)" />
        </linearGradient>
      </defs>

      <rect width="130" height="150" fill={`url(#${id}bg)`} />
      {kind !== 3 && <ellipse cx="65" cy="124" rx="40" ry="7" fill="#000" opacity="0.22" />}

      {kind === 0 && (
        /* lounge chair */
        <g>
          <path
            d="M38 118l4-26h46l4 26"
            fill="none"
            stroke="var(--p-objB)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path d="M36 92c0-24 6-40 29-40s29 16 29 40z" fill={`url(#${id}body)`} />
          <rect x="34" y="88" width="62" height="13" rx="6" fill="var(--p-objA)" />
          <path
            d="M44 56c6-4 36-4 42 0"
            stroke="var(--p-objB)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
        </g>
      )}

      {kind === 1 && (
        /* arc lamp with a lit shade */
        <g>
          <path d="M65 120V62" stroke="var(--p-objB)" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="65" cy="120" rx="17" ry="4.5" fill="var(--p-objB)" />
          <path d="M45 62h40l-7-28H52z" fill={`url(#${id}body)`} />
          <ellipse cx="65" cy="62" rx="20" ry="4.5" fill="#fff3d4" />
          <path d="M65 64c-19 20-26 38-26 52h52c0-14-7-32-26-52z" fill="#ffd98a" opacity="0.4" />
          <ellipse cx="65" cy="118" rx="30" ry="8" fill="#ffd98a" opacity="0.3" />
        </g>
      )}

      {kind === 2 && (
        /* round dining table */
        <g>
          <ellipse cx="65" cy="62" rx="44" ry="13" fill={`url(#${id}body)`} />
          <path d="M21 62v5c0 7 20 13 44 13s44-6 44-13v-5" fill="var(--p-objB)" />
          <path
            d="M40 76l-8 44M90 76l8 44M65 80v40"
            stroke="var(--p-objB)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="65" cy="60" rx="30" ry="8" fill="#fff" opacity="0.14" />
        </g>
      )}

      {kind === 3 && (
        /* patterned rug */
        <g>
          <path d="M20 86l45-20 45 20-45 22z" fill={`url(#${id}body)`} />
          <path
            d="M20 86l45-20 45 20-45 22z"
            fill="none"
            stroke="var(--p-objB)"
            strokeWidth="1.5"
          />
          <g stroke="#fff" strokeOpacity="0.4" strokeWidth="1.4" fill="none">
            <path d="M34 86l31-14 31 14-31 15z" />
            <path d="M48 86l17-8 17 8-17 8z" />
          </g>
          <g fill="#fff" fillOpacity="0.5">
            <circle cx="65" cy="86" r="2.6" />
            <circle cx="42" cy="86" r="1.6" />
            <circle cx="88" cy="86" r="1.6" />
          </g>
        </g>
      )}
    </svg>
  );
}

/** Steel cross-sections — technical drawings, which is what a steel catalogue shows. */
export function ProfileArt({ kind }: { kind: number }) {
  const stroke = "#51708a";
  const fill = "#d4dee6";
  return (
    <svg
      className="ds-svg"
      viewBox="0 0 48 48"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <rect width="48" height="48" fill="#eef3f7" />
      {kind % 4 === 0 && (
        <g fill={fill} stroke={stroke} strokeWidth="1.6">
          <rect x="10" y="10" width="28" height="28" rx="2" />
          <rect x="16" y="16" width="16" height="16" rx="1" fill="#eef3f7" />
        </g>
      )}
      {kind % 4 === 1 && (
        <g fill={fill} stroke={stroke} strokeWidth="1.6">
          <path d="M8 18l20-8 12 6-20 8z" />
          <path d="M8 18v8l20 8v-8z" fill="#bccbd7" />
          <path d="M28 26v8l12-6v-8z" fill="#aabcca" />
        </g>
      )}
      {kind % 4 === 2 && (
        <g fill={fill} stroke={stroke} strokeWidth="1.6">
          <path d="M12 8h8v24h18v8H12z" />
        </g>
      )}
      {kind % 4 === 3 && (
        <g fill={fill} stroke={stroke} strokeWidth="1.6">
          <circle cx="24" cy="24" r="15" />
          <circle cx="24" cy="24" r="9" fill="#eef3f7" />
        </g>
      )}
    </svg>
  );
}

/** Small editorial thumbnails for the blog's article list. */
export function ThumbArt({ kind }: { kind: number }) {
  const id = `th${kind}`;
  return (
    <svg
      className="ds-svg"
      viewBox="0 0 60 54"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}s`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--t-a)" />
          <stop offset="100%" stopColor="var(--t-b)" />
        </linearGradient>
      </defs>
      <rect width="60" height="54" fill={`url(#${id}s)`} />
      {kind === 0 && (
        <g>
          <circle cx="44" cy="15" r="7" fill="#ffe3b0" opacity="0.9" />
          <path d="M0 42h60v12H0z" fill="#2f2419" opacity="0.5" />
          <path
            d="M6 42V28h9v14zM19 42V22h7v20zM30 42V32h8v10zM42 42V26h6v16z"
            fill="#2f2419"
            opacity="0.75"
          />
        </g>
      )}
      {kind === 1 && (
        <g>
          <path d="M0 36c12-10 20-2 30-8s18-10 30-2v28H0z" fill="#2f3d2c" opacity="0.65" />
          <path d="M0 44c14-8 22 0 32-5s16-7 28-1v16H0z" fill="#1f2a1d" opacity="0.8" />
        </g>
      )}
      {kind === 2 && (
        <g>
          <circle cx="20" cy="22" r="9" fill="#fff" opacity="0.5" />
          <circle cx="38" cy="30" r="13" fill="#fff" opacity="0.3" />
          <path d="M0 46h60v8H0z" fill="#2a2338" opacity="0.6" />
        </g>
      )}
    </svg>
  );
}
