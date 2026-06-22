/* ══════════════════════════════════════════════════════
   COLOR — pure color math, scale generation & WCAG contrast.
   Extracted from app.js (graphify Community 8 + color core).
   No dependencies on state/DOM; loaded before app.js so all
   functions/consts are global by the time app.js runs.
══════════════════════════════════════════════════════ */

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return { r: parseInt(h.slice(0,2),16), g: parseInt(h.slice(2,4),16), b: parseInt(h.slice(4,6),16) };
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2,'0')).join('');
}

function hexToHsl(hex) {
  let { r, g, b } = hexToRgb(hex);
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToHex(h, s, l) {
  h /= 360; s /= 100; l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const hue = (p, q, t) => {
      if (t < 0) t += 1; if (t > 1) t -= 1;
      if (t < 1/6) return p + (q-p)*6*t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q-p)*(2/3-t)*6;
      return p;
    };
    r = hue(p, q, h + 1/3); g = hue(p, q, h); b = hue(p, q, h - 1/3);
  }
  return rgbToHex(Math.round(r*255), Math.round(g*255), Math.round(b*255));
}

/* ══════════════════════════════════════════════════════
   OKLCH COLOR MATH
══════════════════════════════════════════════════════ */
function _lin(c) { return c <= 0.04045 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4); }
function _delin(c) { return c <= 0.0031308 ? 12.92*c : 1.055*Math.pow(c,1/2.4)-0.055; }

function hexToOklch(hex) {
  let { r, g, b } = hexToRgb(hex);
  r = _lin(r/255); g = _lin(g/255); b = _lin(b/255);
  const x = 0.4122214708*r + 0.5363325363*g + 0.0514459929*b;
  const y = 0.2119034982*r + 0.6806995451*g + 0.1073969566*b;
  const z = 0.0883024619*r + 0.2817188376*g + 0.6299787005*b;
  const l_ = Math.cbrt(0.8189330101*x+0.3618667424*y-0.1288597137*z);
  const m_ = Math.cbrt(0.0329845436*x+0.9293118715*y+0.0361456387*z);
  const s_ = Math.cbrt(0.0482003018*x+0.2643662691*y+0.6338517070*z);
  const L  = 0.2104542553*l_+0.7936177850*m_-0.0040720468*s_;
  const a  = 1.9779984951*l_-2.4285922050*m_+0.4505937099*s_;
  const bk = 0.0259040371*l_+0.7827717662*m_-0.8086757660*s_;
  const C  = Math.sqrt(a*a+bk*bk);
  const H  = (Math.atan2(bk,a)*180/Math.PI+360)%360;
  return { L, C, H };
}

function oklchToHex(L, C, H) {
  const h = H*Math.PI/180, a = C*Math.cos(h), b = C*Math.sin(h);
  const l_ = L+0.3963377774*a+0.2158037573*b;
  const m_ = L-0.1055613458*a-0.0638541728*b;
  const s_ = L-0.0894841775*a-1.2914855480*b;
  const lc=l_*l_*l_, mc=m_*m_*m_, sc=s_*s_*s_;
  const x = 4.0767416621*lc-3.3077115913*mc+0.2309699292*sc;
  const y =-1.2684380046*lc+2.6097574011*mc-0.3413193965*sc;
  const z =-0.0041960863*lc-0.7034186147*mc+1.7076147010*sc;
  const rl= 3.2409699419*x-1.5373831776*y-0.4986107603*z;
  const gl=-0.9692436363*x+1.8759675015*y+0.0415550574*z;
  const bl= 0.0556300797*x-0.2039769589*y+1.0569715142*z;
  return rgbToHex(Math.round(Math.max(0,Math.min(1,_delin(rl)))*255),
                  Math.round(Math.max(0,Math.min(1,_delin(gl)))*255),
                  Math.round(Math.max(0,Math.min(1,_delin(bl)))*255));
}

function generateOklchScale(hex, count) {
  const { C: baseC, H: baseH } = hexToOklch(hex);
  const stops = SHADE_STOP_SETS[count] || SHADE_STOP_SETS[10];
  return stops.map(stop => {
    const L    = STOP_LIGHTNESS[stop] / 100;
    const adjC = Math.min(baseC * (1 - Math.pow(Math.abs(L - 0.5) * 2, 0.8) * 0.25), 0.37);
    return { stop, hex: oklchToHex(L, adjC, baseH) };
  });
}

/* ── Hue name lookup ── */
const HUE_NAMES = [
  [0,'Red'],[15,'Rose'],[30,'Orange'],[45,'Amber'],[55,'Yellow'],
  [75,'Lime'],[120,'Green'],[150,'Emerald'],[170,'Teal'],[195,'Cyan'],
  [210,'Sky'],[225,'Blue'],[245,'Indigo'],[270,'Violet'],[290,'Purple'],
  [320,'Fuchsia'],[340,'Pink'],[355,'Red'],
];

function getHueName(hex) {
  const { h } = hexToHsl(hex);
  let best = HUE_NAMES[0];
  let minDist = 360;
  HUE_NAMES.forEach(([hue, name]) => {
    const d = Math.min(Math.abs(h - hue), 360 - Math.abs(h - hue));
    if (d < minDist) { minDist = d; best = [hue, name]; }
  });
  return best[1];
}

/* Per-stop lightness values covering all possible stops */
const STOP_LIGHTNESS = {
  25: 99, 50: 97, 100: 93, 200: 85, 300: 74,
  400: 62, 500: 50, 600: 40, 700: 30, 800: 21, 900: 13, 950: 8,
};

/* Which stops to use for each shade count (5–12) */
const SHADE_STOP_SETS = {
  5:  [100, 300, 500, 700, 900],
  6:  [50,  200, 400, 600, 800, 950],
  7:  [50,  100, 300, 500, 700, 900, 950],
  8:  [50,  100, 200, 400, 600, 800, 900, 950],
  9:  [50,  100, 200, 300, 500, 700, 800, 900, 950],
  10: [50,  100, 200, 300, 400, 500, 600, 700, 800, 900],
  11: [50,  100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  12: [25,   50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
};

const MIN_SHADES = 5;
const MAX_SHADES = 12;

function generateColorScaleForPalette(palette) {
  const base  = palette.baseHex;
  const count = palette.shadeCount || 10;
  const space = palette.colorSpace || 'hsl';
  const raw   = space === 'oklch' ? generateOklchScale(base, count) : generateColorScale(base, count);
  // Apply custom stop overrides
  const overrides = palette.customStops || {};
  return raw.map(c => overrides[c.stop] ? { ...c, hex: overrides[c.stop] } : c);
}

function generateColorScale(hex, count = 10) {
  const { h, s } = hexToHsl(hex);
  const stops = SHADE_STOP_SETS[count] || SHADE_STOP_SETS[10];
  const mid   = (stops.length - 1) / 2;
  return stops.map((stop, i) => {
    const l       = STOP_LIGHTNESS[stop];
    const sFactor = 1 - Math.pow(Math.abs(i - mid) / mid, 1.8) * 0.3;
    const adjS    = Math.round(Math.min(s, 95) * sFactor);
    return { stop, hex: hslToHex(h, adjS, l) };
  });
}

function getContrastColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  return (0.299*r + 0.587*g + 0.114*b) / 255 > 0.55 ? '#111111' : '#ffffff';
}

/* ── WCAG relative luminance + contrast ratio (moved from app.js) ── */
function getLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const toLinear = c => { const s = c / 255; return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4); };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

function contrastRatio(hex1, hex2) {
  const l1 = getLuminance(hex1), l2 = getLuminance(hex2);
  const bright = Math.max(l1, l2), dark = Math.min(l1, l2);
  return parseFloat(((bright + 0.05) / (dark + 0.05)).toFixed(2));
}
