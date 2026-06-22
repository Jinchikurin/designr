/* ══════════════════════════════════════════════════════
   GOOGLE FONTS LIBRARY
══════════════════════════════════════════════════════ */
const FONT_LIBRARY = [
  // Sans-serif
  { name: 'Inter',               category: 'Sans-serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Roboto',              category: 'Sans-serif', weights: [100,300,400,500,700,900] },
  { name: 'Open Sans',           category: 'Sans-serif', weights: [300,400,500,600,700,800] },
  { name: 'Lato',                category: 'Sans-serif', weights: [100,300,400,700,900] },
  { name: 'Montserrat',          category: 'Sans-serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Poppins',             category: 'Sans-serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Nunito',              category: 'Sans-serif', weights: [200,300,400,500,600,700,800,900] },
  { name: 'Raleway',             category: 'Sans-serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Ubuntu',              category: 'Sans-serif', weights: [300,400,500,700] },
  { name: 'DM Sans',             category: 'Sans-serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Plus Jakarta Sans',   category: 'Sans-serif', weights: [200,300,400,500,600,700,800] },
  { name: 'Figtree',             category: 'Sans-serif', weights: [300,400,500,600,700,800,900] },
  { name: 'Space Grotesk',       category: 'Sans-serif', weights: [300,400,500,600,700] },
  { name: 'Manrope',             category: 'Sans-serif', weights: [200,300,400,500,600,700,800] },
  { name: 'Outfit',              category: 'Sans-serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Lexend',              category: 'Sans-serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Work Sans',           category: 'Sans-serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Karla',               category: 'Sans-serif', weights: [200,300,400,500,600,700,800] },
  { name: 'Rubik',               category: 'Sans-serif', weights: [300,400,500,600,700,800,900] },
  { name: 'Mulish',              category: 'Sans-serif', weights: [200,300,400,500,600,700,800,900] },
  { name: 'Quicksand',           category: 'Sans-serif', weights: [300,400,500,600,700] },
  { name: 'Cabin',               category: 'Sans-serif', weights: [400,500,600,700] },
  { name: 'Noto Sans',           category: 'Sans-serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Source Sans 3',       category: 'Sans-serif', weights: [200,300,400,500,600,700,800,900] },
  { name: 'Josefin Sans',        category: 'Sans-serif', weights: [100,200,300,400,500,600,700] },
  { name: 'Barlow',              category: 'Sans-serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Hind',                category: 'Sans-serif', weights: [300,400,500,600,700] },
  { name: 'Exo 2',               category: 'Sans-serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Titillium Web',       category: 'Sans-serif', weights: [200,300,400,600,700,900] },

  // Display
  { name: 'Oswald',              category: 'Display', weights: [200,300,400,500,600,700] },
  { name: 'Bricolage Grotesque', category: 'Display', weights: [200,300,400,500,600,700,800] },
  { name: 'Syne',                category: 'Display', weights: [400,500,600,700,800] },
  { name: 'Anton',               category: 'Display', weights: [400] },
  { name: 'Bebas Neue',          category: 'Display', weights: [400] },
  { name: 'Righteous',           category: 'Display', weights: [400] },
  { name: 'Orbitron',            category: 'Display', weights: [400,500,600,700,800,900] },
  { name: 'Exo',                 category: 'Display', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Russo One',           category: 'Display', weights: [400] },

  // Serif
  { name: 'Merriweather',        category: 'Serif', weights: [300,400,700,900] },
  { name: 'Playfair Display',    category: 'Serif', weights: [400,500,600,700,800,900] },
  { name: 'Lora',                category: 'Serif', weights: [400,500,600,700] },
  { name: 'EB Garamond',         category: 'Serif', weights: [400,500,600,700,800] },
  { name: 'Libre Baskerville',   category: 'Serif', weights: [400,700] },
  { name: 'Crimson Text',        category: 'Serif', weights: [400,600,700] },
  { name: 'PT Serif',            category: 'Serif', weights: [400,700] },
  { name: 'Cormorant Garamond',  category: 'Serif', weights: [300,400,500,600,700] },
  { name: 'Noto Serif',          category: 'Serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Bitter',              category: 'Serif', weights: [100,200,300,400,500,600,700,800,900] },
  { name: 'Spectral',            category: 'Serif', weights: [200,300,400,500,600,700,800] },
  { name: 'Zilla Slab',          category: 'Serif', weights: [300,400,500,600,700] },
  { name: 'Gelasio',             category: 'Serif', weights: [400,500,600,700] },

  // Monospace
  { name: 'Fira Code',           category: 'Monospace', weights: [300,400,500,600,700] },
  { name: 'JetBrains Mono',      category: 'Monospace', weights: [100,200,300,400,500,600,700,800] },
  { name: 'Source Code Pro',     category: 'Monospace', weights: [200,300,400,500,600,700,800,900] },
  { name: 'Space Mono',          category: 'Monospace', weights: [400,700] },
  { name: 'IBM Plex Mono',       category: 'Monospace', weights: [100,200,300,400,500,600,700] },
  { name: 'Roboto Mono',         category: 'Monospace', weights: [100,200,300,400,500,600,700] },
  { name: 'Inconsolata',         category: 'Monospace', weights: [200,300,400,500,600,700,800,900] },
  { name: 'Anonymous Pro',       category: 'Monospace', weights: [400,700] },
  { name: 'Cousine',             category: 'Monospace', weights: [400,700] },
  { name: 'Share Tech Mono',     category: 'Monospace', weights: [400] },
];

/* ── Variable font axis definitions ── */
const KNOWN_VARIABLE_FONTS = {
  'Inter':              [{ axis:'wght', min:100, max:900, step:1,   label:'Weight', default:400 }],
  'DM Sans':            [{ axis:'wght', min:100, max:900, step:1,   label:'Weight', default:400 }, { axis:'opsz', min:9, max:40, step:1, label:'Opt Size', default:14 }],
  'Figtree':            [{ axis:'wght', min:300, max:900, step:1,   label:'Weight', default:400 }],
  'Plus Jakarta Sans':  [{ axis:'wght', min:200, max:800, step:1,   label:'Weight', default:400 }],
  'Manrope':            [{ axis:'wght', min:200, max:800, step:1,   label:'Weight', default:400 }],
  'Outfit':             [{ axis:'wght', min:100, max:900, step:1,   label:'Weight', default:400 }],
  'Nunito':             [{ axis:'wght', min:200, max:900, step:1,   label:'Weight', default:400 }],
  'Mulish':             [{ axis:'wght', min:200, max:900, step:1,   label:'Weight', default:400 }],
  'Raleway':            [{ axis:'wght', min:100, max:900, step:1,   label:'Weight', default:400 }],
  'Barlow':             [{ axis:'wght', min:100, max:900, step:1,   label:'Weight', default:400 }],
  'Bricolage Grotesque':[{ axis:'wght', min:200, max:800, step:1,   label:'Weight', default:400 }, { axis:'wdth', min:75, max:100, step:1, label:'Width', default:100 }],
  'Josefin Sans':       [{ axis:'wght', min:100, max:700, step:1,   label:'Weight', default:400 }],
  'Source Sans 3':      [{ axis:'wght', min:200, max:900, step:1,   label:'Weight', default:400 }],
  'Lato':               [{ axis:'wght', min:100, max:900, step:1,   label:'Weight', default:400 }],
  'Noto Sans':          [{ axis:'wght', min:100, max:900, step:1,   label:'Weight', default:400 }],
};

/* ── Fallback font metrics (for CLS-minimizing @font-face overrides) ── */
const FALLBACK_METRICS = {
  'Inter':           { fallback:'Arial',   sizeAdjust:'107%', ascentOverride:'90%',  descentOverride:'22%', lineGapOverride:'0%' },
  'Roboto':          { fallback:'Arial',   sizeAdjust:'100%', ascentOverride:'92%',  descentOverride:'24%', lineGapOverride:'0%' },
  'Open Sans':       { fallback:'Arial',   sizeAdjust:'105%', ascentOverride:'90%',  descentOverride:'22%', lineGapOverride:'0%' },
  'Lato':            { fallback:'Arial',   sizeAdjust:'101%', ascentOverride:'91%',  descentOverride:'23%', lineGapOverride:'0%' },
  'Poppins':         { fallback:'Arial',   sizeAdjust:'112%', ascentOverride:'83%',  descentOverride:'20%', lineGapOverride:'0%' },
  'Montserrat':      { fallback:'Arial',   sizeAdjust:'115%', ascentOverride:'85%',  descentOverride:'21%', lineGapOverride:'0%' },
  'DM Sans':         { fallback:'Arial',   sizeAdjust:'105%', ascentOverride:'91%',  descentOverride:'22%', lineGapOverride:'0%' },
  'Nunito':          { fallback:'Arial',   sizeAdjust:'107%', ascentOverride:'89%',  descentOverride:'22%', lineGapOverride:'0%' },
  'Merriweather':    { fallback:'Georgia', sizeAdjust:'97%',  ascentOverride:'90%',  descentOverride:'25%', lineGapOverride:'0%' },
  'Playfair Display':{ fallback:'Georgia', sizeAdjust:'105%', ascentOverride:'88%',  descentOverride:'23%', lineGapOverride:'0%' },
  'Lora':            { fallback:'Georgia', sizeAdjust:'101%', ascentOverride:'91%',  descentOverride:'24%', lineGapOverride:'0%' },
};

/* ── Typography helpers ── */
function computeClamp(v) {
  const minS  = v.fluidMinSize  || 12;
  const maxS  = v.fluidMaxSize  || v.size;
  const minVp = v.fluidMinVp    || 320;
  const maxVp = v.fluidMaxVp    || 1280;
  if (minVp >= maxVp || minS >= maxS) return `${v.size}px`;
  const slope      = (maxS - minS) / (maxVp - minVp);
  const intercept  = minS - slope * minVp;
  return `clamp(${minS}px, ${intercept.toFixed(2)}px + ${(slope * 100).toFixed(4)}vw, ${maxS}px)`;
}

function getAxisValue(variationSettings, axis) {
  if (!variationSettings) return null;
  const m = variationSettings.match(new RegExp(`"${axis}"\\s*([\\d.-]+)`));
  return m ? parseFloat(m[1]) : null;
}

function setAxisValue(vs, axis, value) {
  vs = vs || '';
  const re    = new RegExp(`"${axis}"\\s*[\\d.-]+`);
  const entry = `"${axis}" ${value}`;
  return re.test(vs) ? vs.replace(re, entry) : (vs ? `${vs}, ${entry}` : entry);
}

const RHYTHM_BASE = 4; // px baseline grid unit

function checkVerticalRhythm(v) {
  const lineHeightPx = v.size * v.leading;
  const remainder    = Math.abs(Math.round(lineHeightPx * 10) % (RHYTHM_BASE * 10));
  const onGrid       = remainder < 2; // within 0.2px tolerance
  return { onGrid, lineHeightPx: Math.round(lineHeightPx * 10) / 10 };
}

function getA11yWarnings(v) {
  const w = [];
  const bodyRoles = ['body','caption','label','subtitle','small','footnote'];
  const isBody    = bodyRoles.some(r => v.role.toLowerCase().includes(r));
  if (isBody && v.size < 16)   w.push(`Font size ${v.size}px is below the 16px WCAG AA minimum for body text`);
  if (isBody && v.leading < 1.5) w.push(`Line height ${v.leading} is below 1.5 — tight for body text`);
  if (v.kerning < -2)          w.push(`Negative kerning (${v.kerning}px) may hurt readability`);
  if (v.measure > 0 && (v.measure < 45 || v.measure > 80)) w.push(`Line length ${v.measure}ch is outside the optimal 45–80ch range`);
  return w;
}

/* ── Variant roles ── */
const VARIANT_ROLES = ['Display', 'Heading', 'Title', 'Subtitle', 'Body', 'Caption', 'Label', 'Code'];

function newVariant(overrides = {}) {
  return {
    id:               uid(),
    role:             'Body',
    size:             16,
    leading:          1.5,
    kerning:          0,
    weight:           null,       // null = use font's first activeWeight
    variationSettings:'',         // font-variation-settings value
    // Fluid typography
    fluid:            false,
    fluidMinSize:     12,
    fluidMaxSize:     null,       // null = same as size
    fluidMinVp:       320,
    fluidMaxVp:       1280,
    // Responsive sizes
    responsiveSizes:  {},         // { sm: null, md: null, lg: null }
    // Readability
    paragraphSpacing: 0,          // px margin-bottom
    measure:          0,          // ch max-width (0 = unlimited)
    // Decoration
    textTransform:    'none',
    textDecoration:   'none',
    fontStyle:        'normal',
    docs:             '',
    sampleText:       '',         // empty = falls back to font.sampleText
    ...overrides,
  };
}

/* Track which variant cards are open in the props panel */
let _expandedVariantIds  = new Set();
let _specimenExpanded    = new Set(); // tracks expanded specimen rows: `${fontId}:${variantId}`

/* ── Type scale ratios ── */
const TYPE_SCALES = [
  { key: 'minor-second',   label: 'Min 2nd',    ratio: 1.067 },
  { key: 'major-second',   label: 'Maj 2nd',    ratio: 1.125 },
  { key: 'minor-third',    label: 'Min 3rd',    ratio: 1.200 },
  { key: 'major-third',    label: 'Maj 3rd',    ratio: 1.250 },
  { key: 'perfect-fourth', label: 'Perf 4th',   ratio: 1.333 },
  { key: 'golden',         label: 'Golden',      ratio: 1.618 },
  { key: 'silver',         label: 'Silver √2',   ratio: 1.414 },
  { key: 'perfect-fifth',  label: 'Perf 5th',   ratio: 1.500 },
];

/* Named scale steps: name, exponent from base */
const SCALE_STEPS = [
  { name: 'xs',   exp: -2 },
  { name: 'sm',   exp: -1 },
  { name: 'base', exp:  0 },
  { name: 'md',   exp:  1 },
  { name: 'lg',   exp:  2 },
  { name: 'xl',   exp:  3 },
  { name: '2xl',  exp:  4 },
  { name: '3xl',  exp:  5 },
  { name: '4xl',  exp:  6 },
];

const SCALE_BASE_PX = 16;

/* Common modular-scale ratios for the type-scale generator */
const TYPE_SCALE_RATIOS = [
  { label: 'Minor Second · 1.067', value: 1.067 },
  { label: 'Major Second · 1.125', value: 1.125 },
  { label: 'Minor Third · 1.2',    value: 1.2   },
  { label: 'Major Third · 1.25',   value: 1.25  },
  { label: 'Perfect Fourth · 1.333', value: 1.333 },
  { label: 'Aug. Fourth · 1.414',  value: 1.414 },
  { label: 'Perfect Fifth · 1.5',  value: 1.5   },
  { label: 'Golden Ratio · 1.618', value: 1.618 },
];

/* Re-size a font's existing variants along a modular scale.
   The body/base variant stays at basePx; others step up/down by the ratio. */
function applyTypeScale(fontId, ratio, basePx) {
  const f = state.fonts.find(x => x.id === fontId);
  if (!f || !(f.variants || []).length) { toast('Add type variants first'); return; }
  pushHistory();
  const ordered = [...f.variants].sort((a, b) => (a.size || 16) - (b.size || 16));
  let anchor = ordered.findIndex(v => /body|base|paragraph|default|regular/i.test(v.role || ''));
  if (anchor < 0) anchor = Math.floor((ordered.length - 1) / 2);
  ordered.forEach((v, i) => {
    v.size = Math.max(8, Math.round(basePx * Math.pow(ratio, i - anchor)));
  });
  renderAll();
  toast(`Applied ${ratio}× type scale`);
}

function computeScaleStops(ratio) {
  return SCALE_STEPS.map(step => ({
    name: step.name,
    px:   Math.round(SCALE_BASE_PX * Math.pow(ratio, step.exp)),
  }));
}

/* ── Font classifications ── */
const CLASSIFICATIONS = ['Heading', 'Display', 'Body', 'Title', 'Label', 'Caption', 'Code'];

const FALLBACK_STACKS = {
  'Sans-serif': 'system-ui, -apple-system, sans-serif',
  'Serif':      'Georgia, "Times New Roman", serif',
  'Monospace':  '"Courier New", Courier, monospace',
  'Display':    'system-ui, sans-serif',
};

/* Color math, scale generation & WCAG contrast moved to color.js
   (loaded before this file). isValidHex/HSV picker helpers stay here. */

function isValidHex(hex) {
  return /^#[0-9A-Fa-f]{6}$/.test(hex);
}

function hexToHsv(hex) {
  let { r, g, b } = hexToRgb(hex);
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  let h = 0;
  if (d !== 0) {
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: h * 360, s: max === 0 ? 0 : d / max, v: max };
}

function hsvToHex(h, s, v) {
  h = ((h % 360) + 360) % 360;
  const i = Math.floor(h / 60), f = h / 60 - i;
  const p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s);
  let r, g, b;
  switch (i % 6) {
    case 0: r=v; g=t; b=p; break; case 1: r=q; g=v; b=p; break;
    case 2: r=p; g=v; b=t; break; case 3: r=p; g=q; b=v; break;
    case 4: r=t; g=p; b=v; break; case 5: r=v; g=p; b=q; break;
  }
  return rgbToHex(Math.round(r*255), Math.round(g*255), Math.round(b*255));
}

/* ══════════════════════════════════════════════════════
   FLOATING COLOR PICKER (CPF)
══════════════════════════════════════════════════════ */
const cpf = {
  h: 0, s: 1, v: 1,       // current HSV
  originalHex: '#000000',  // hex when picker was opened
  onAccept: null,          // callback(hex)
  dragging: false,         // dragging the panel
  dragOffX: 0, dragOffY: 0,
  pickingGrad: false,      // dragging inside gradient
  pickingHue: false,       // dragging hue slider
};

function openColorPicker(hex, onAccept) {
  if (!isValidHex(hex)) hex = '#7c3aed';
  const { h, s, v } = hexToHsv(hex);
  cpf.h = h; cpf.s = s; cpf.v = v;
  cpf.originalHex = hex;
  cpf.onAccept = onAccept;

  const panel = document.getElementById('cpf-panel');
  panel.classList.remove('hidden');
  // Reset to centered if never moved
  if (!panel.style.left || panel.style.left === '50%') {
    panel.style.left = '50%';
    panel.style.top  = '80px';
    panel.style.transform = 'translateX(-50%)';
  }

  document.getElementById('cpf-before').style.background = hex;
  cpfRefreshUI();
}

function closeColorPicker() {
  document.getElementById('cpf-panel').classList.add('hidden');
  cpf.onAccept = null;
}

function cpfRefreshUI() {
  const hex = hsvToHex(cpf.h, cpf.s, cpf.v);
  const hueHex = hsvToHex(cpf.h, 1, 1);

  // Gradient background (pure hue color)
  document.getElementById('cpf-gradient').style.background = hueHex;

  // Cursor position inside gradient
  const grad = document.getElementById('cpf-gradient');
  const gw = grad.offsetWidth || 228, gh = grad.offsetHeight || 148;
  const cur = document.getElementById('cpf-cursor');
  cur.style.left = (cpf.s * gw) + 'px';
  cur.style.top  = ((1 - cpf.v) * gh) + 'px';
  cur.style.background = hex;

  // Hue thumb position
  const track = document.getElementById('cpf-hue-track');
  const tw = track.offsetWidth || 228;
  document.getElementById('cpf-hue-thumb').style.left = ((cpf.h / 360) * tw) + 'px';

  // After swatch + hex display
  document.getElementById('cpf-after').style.background = hex;
  document.getElementById('cpf-current-hex').textContent = hex;

  // Inputs
  document.getElementById('cpf-hex').value = hex;
  const { r, g, b } = hexToRgb(hex);
  document.getElementById('cpf-r').value = r;
  document.getElementById('cpf-g').value = g;
  document.getElementById('cpf-b').value = b;
}

function cpfPickGradient(e) {
  const rect = document.getElementById('cpf-gradient').getBoundingClientRect();
  const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  const y = Math.max(0, Math.min(1, (e.clientY - rect.top)  / rect.height));
  cpf.s = x;
  cpf.v = 1 - y;
  cpfRefreshUI();
}

function cpfPickHue(e) {
  const rect = document.getElementById('cpf-hue-track').getBoundingClientRect();
  const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  cpf.h = x * 360;
  cpfRefreshUI();
}

function cpfSyncFromHex(hex) {
  if (!isValidHex(hex)) return;
  const { h, s, v } = hexToHsv(hex);
  cpf.h = h; cpf.s = s; cpf.v = v;
  cpfRefreshUI();
}

function cpfAnchorPanel() {
  // Convert transform-centered position to absolute pixels
  const panel = document.getElementById('cpf-panel');
  if (panel.style.transform === 'translateX(-50%)') {
    const rect = panel.getBoundingClientRect();
    panel.style.transform = 'none';
    panel.style.left = rect.left + 'px';
    panel.style.top  = rect.top  + 'px';
  }
}

const IS_ELECTRON = !!window.electronAPI?.isElectron;

/* ══════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════ */
const state = {
  fonts:        [],    // { id, name, category, weights, activeWeights, sampleText, previewSize }
  palettes:     [],    // { id, name, baseHex, colors: [{stop, hex}] }
  spacings:     [],    // { id, name, baseUnit }
  shadows:      [],    // { id, name, preset, layers: [{x,y,blur,spread,color,opacity}] }
  semantics:    [],    // { id, name, category, value, reference, description }
  gradients:    [],    // { id, name, direction, colorStops: [{color, position}] }
  // New atom types
  radii:        [],    // { id, name, stops: [{label, value}] }  value=px (9999=full)
  borders:      [],    // { id, name, stops: [{label, value}] }  value=px
  opacities:    [],    // { id, name, stops: [{label, value}] }  value=%
  breakpoints:  [],    // { id, name, stops: [{label, value}] }  value=px
  zindices:     [],    // { id, name, stops: [{label, value}] }  value=integer
  motions:      [],    // { id, name, durations: [{label, ms}], easings: [{label, fn}] }
  grids:        [],    // { id, name, columns, gutter, maxWidth, margin }
  icons:        [],    // { id, name, stops: [{label, value}] }  value=px
  selectedId:   null,
  selectedType: null,  // 'font' | 'palette' | 'spacing' | 'shadow'
  showTokenMap:   false,
  canvasMode:     'system',  // 'system' | 'preview'
  previewDevice:  'desktop', // 'desktop' | 'tablet' | 'mobile'
  previewTheme:   'light',   // 'light' | 'dark'
  componentProps: {}, // { [compKey]: full prop bag (see _cpGet helpers) }
  systemDefaults: {}, // global fallback: { fontId, paletteId, colorStop, bgStop, borderStop, radiusId, radiusStop, shadowId }
  showSpecimen:      false,
  activeComponents: { button: false, input: false, card: false, badge: false, alert: false, avatar: false, tabs: false, select: false, switch: false, checkbox: false, progress: false, skeleton: false, table: false, slider: false },
  showPairings:      false,
  showColorPairings: false,
  activeCategory: 'all',
  searchQuery:    '',
};

/* Single source of truth for what makes up a "document" — used by
   serialize / deserialize / newProject / pushHistory so they never drift apart.
   ARRAY = token collections (deep-cloned), OBJECT = keyed prop bags. */
const DOC_ARRAY_KEYS = [
  'fonts', 'palettes', 'spacings', 'shadows', 'semantics', 'gradients',
  'radii', 'borders', 'opacities', 'breakpoints', 'zindices', 'motions', 'grids', 'icons',
];
const DOC_OBJECT_KEYS = ['componentProps', 'systemDefaults', 'activeComponents'];
const DOC_FLAG_KEYS   = ['showSpecimen', 'showPairings', 'showColorPairings', 'showTokenMap'];

let filteredModalFonts = [];

/* ══════════════════════════════════════════════════════
   HISTORY (UNDO)
══════════════════════════════════════════════════════ */
const MAX_HISTORY = 20;
const _history = [];   // stack of {fonts, palettes, selectedId, selectedType} snapshots
const _changelog = [];
const MAX_CHANGELOG = 100;
function _formatTs(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',second:'2-digit'});
}
function _recordChangelog(label) {
  if (!label) return;
  _changelog.unshift({ label, ts: Date.now() });
  if (_changelog.length > MAX_CHANGELOG) _changelog.pop();
}

function _detectActionLabel() {
  const prev = _history[_history.length - 1];
  const checks = [
    { key: 'fonts',       label: 'font'         },
    { key: 'palettes',    label: 'palette'       },
    { key: 'spacings',    label: 'spacing'       },
    { key: 'shadows',     label: 'shadow'        },
    { key: 'semantics',   label: 'token'         },
    { key: 'radii',       label: 'border radius' },
    { key: 'borders',     label: 'border'        },
    { key: 'opacities',   label: 'opacity'       },
    { key: 'breakpoints', label: 'breakpoints'   },
    { key: 'zindices',    label: 'z-index'       },
    { key: 'motions',     label: 'motion'        },
    { key: 'grids',       label: 'grid'          },
    { key: 'icons',       label: 'iconography'   },
  ];
  for (const { key, label } of checks) {
    const p = (prev && prev[key]) || [], c = state[key] || [];
    if (c.length > p.length) {
      const added = c.find(i => !p.some(x => x.id === i.id));
      return added ? `Added ${label} "${added.name}"` : `Added ${label}`;
    }
    if (c.length < p.length) {
      const removed = p.find(i => !c.some(x => x.id === i.id));
      return removed ? `Removed ${label} "${removed.name}"` : `Removed ${label}`;
    }
    for (const item of c) {
      const prevItem = p && p.find(x => x.id === item.id);
      if (prevItem && JSON.stringify(item) !== JSON.stringify(prevItem)) {
        return `Edited "${item.name}" ${label}`;
      }
    }
  }
  return 'State change';
}

function pushHistory() {
  const snap = {
    selectedId:  state.selectedId,
    selectedType:state.selectedType,
    _label:      _detectActionLabel(),
    _ts:         Date.now(),
  };
  [...DOC_ARRAY_KEYS, ...DOC_OBJECT_KEYS].forEach(k => { snap[k] = JSON.parse(JSON.stringify(state[k])); });
  _history.push(snap);
  if (_history.length > MAX_HISTORY) _history.shift();
  _syncUndoBtn();
  _recordChangelog(_history[_history.length - 1]?._label);
  _renderHistoryPanel();
  if (typeof _markUnsaved === 'function') _markUnsaved();
}

function _describeUndo(before, after) {
  const sections = [
    { key: 'fonts',     label: 'font'         },
    { key: 'palettes',  label: 'palette'      },
    { key: 'spacings',  label: 'spacing scale'},
    { key: 'shadows',   label: 'shadow'       },
    { key: 'semantics', label: 'token'        },
  ];
  for (const { key, label } of sections) {
    const b = before[key] || [], a = after[key] || [];
    if (b.length > a.length) {
      // restoring a removal — something was added back
      const restored = b.find(i => !a.some(x => x.id === i.id));
      return restored ? `Restored ${label} "${restored.name}"` : `Restored ${label}`;
    }
    if (b.length < a.length) {
      // restoring an addition — something was removed
      const removed = a.find(i => !b.some(x => x.id === i.id));
      return removed ? `Undid adding ${label} "${removed.name}"` : `Undid ${label} change`;
    }
    // Same count — check for property edits
    for (const item of b) {
      const prev = a.find(x => x.id === item.id);
      if (prev && JSON.stringify(item) !== JSON.stringify(prev)) {
        return `Reverted "${item.name}" ${label}`;
      }
    }
  }
  return 'Undone';
}

function _flashCard(id, type) {
  const selectors = {
    font:    `[data-card-id="${id}"]`,
    palette: `[data-palette-id="${id}"]`,
    spacing: `[data-spacing-id="${id}"]`,
    shadow:  `[data-shadow-id="${id}"]`,
  };
  const sel = selectors[type];
  if (!sel) return;
  const el = document.querySelector(sel);
  if (!el) return;
  el.classList.remove('undo-flash');
  void el.offsetWidth; // force reflow to restart animation
  el.classList.add('undo-flash');
  setTimeout(() => el.classList.remove('undo-flash'), 900);
}

function undo() {
  if (!_history.length) return;
  const snap = _history.pop();

  // Capture current state for diffing before we overwrite it
  const before = {
    fonts:     snap.fonts,
    palettes:  snap.palettes,
    spacings:  snap.spacings  || [],
    shadows:   snap.shadows   || [],
    semantics: snap.semantics || [],
  };
  const after = {
    fonts:     state.fonts,
    palettes:  state.palettes,
    spacings:  state.spacings,
    shadows:   state.shadows,
    semantics: state.semantics,
  };

  const message = _describeUndo(before, after);

  DOC_ARRAY_KEYS.forEach(k => { state[k] = snap[k] || []; });
  DOC_OBJECT_KEYS.forEach(k => { if (snap[k]) state[k] = snap[k]; });
  state.selectedId   = snap.selectedId;
  state.selectedType = snap.selectedType;

  renderAll();
  _syncUndoBtn();
  _renderHistoryPanel();
  toast(message);

  // Pulse the undo button
  const undoBtn = document.getElementById('undo-btn');
  if (undoBtn) {
    undoBtn.classList.remove('undo-btn-pulse');
    void undoBtn.offsetWidth;
    undoBtn.classList.add('undo-btn-pulse');
    setTimeout(() => undoBtn.classList.remove('undo-btn-pulse'), 300);
  }

  // Flash the selected card if one is active after re-render
  if (state.selectedId && state.selectedType) {
    requestAnimationFrame(() => _flashCard(state.selectedId, state.selectedType));
  }
}

function _syncUndoBtn() {
  const btn = document.getElementById('undo-btn');
  if (btn) btn.disabled = _history.length === 0;
}

let _historyTab = 'history';
function _renderHistoryPanel() {
  const panel = document.getElementById('history-modal-body');
  if (!panel) return;

  const changelogHtml = _changelog.length === 0
    ? '<div class="changelog-empty">No changes yet this session.</div>'
    : `<div class="changelog-list">${_changelog.map(entry => `<div class="changelog-row"><span class="changelog-time">${_formatTs(entry.ts)}</span><span class="changelog-label">${escHtml(entry.label)}</span></div>`).join('')}</div>`;

  const historyHtml = _history.length === 0
    ? `<div class="history-empty">No history yet — make some changes first.</div>`
    : (() => {
        const entries = [{ label: 'Current state', isCurrent: true, index: -1 }];
        for (let i = _history.length - 1; i >= 0; i--) {
          entries.push({ label: _history[i]._label || 'State change', isCurrent: false, index: i });
        }
        return entries.map(e => `
          <div class="history-entry ${e.isCurrent ? 'is-current' : ''}" data-hist-index="${e.index}">
            <div class="history-entry-dot"></div>
            <span class="history-entry-label">${escHtml(e.label)}</span>
            ${!e.isCurrent ? `<span class="history-entry-action">Restore</span>` : ''}
          </div>
        `).join('');
      })();

  panel.innerHTML = `
    <div class="history-tabs" style="display:flex;gap:0;border-bottom:1px solid var(--border);margin-bottom:8px;flex-shrink:0">
      <button class="history-tab-btn ${_historyTab==='history'?'active':''}" data-htab="history" style="flex:1;padding:8px 12px;background:none;border:none;color:${_historyTab==='history'?'var(--text)':'var(--text-3)'};font-size:12px;font-weight:600;cursor:pointer;border-bottom:2px solid ${_historyTab==='history'?'var(--accent)':'transparent'};font-family:var(--font-sans)">History</button>
      <button class="history-tab-btn ${_historyTab==='changelog'?'active':''}" data-htab="changelog" style="flex:1;padding:8px 12px;background:none;border:none;color:${_historyTab==='changelog'?'var(--text)':'var(--text-3)'};font-size:12px;font-weight:600;cursor:pointer;border-bottom:2px solid ${_historyTab==='changelog'?'var(--accent)':'transparent'};font-family:var(--font-sans)">Changelog</button>
    </div>
    <div id="history-tab-content" style="flex:1;overflow-y:auto">
      ${_historyTab === 'history' ? historyHtml : changelogHtml}
    </div>`;

  panel.querySelectorAll('[data-htab]').forEach(btn => {
    btn.addEventListener('click', () => {
      _historyTab = btn.dataset.htab;
      _renderHistoryPanel();
    });
  });

  panel.querySelectorAll('.history-entry:not(.is-current)').forEach(row => {
    row.addEventListener('click', () => {
      _jumpToHistory(parseInt(row.dataset.histIndex));
      closeHistoryModal();
    });
  });
}

function openHistoryModal() {
  _renderHistoryPanel();
  document.getElementById('history-modal').classList.remove('hidden');
}

function closeHistoryModal() {
  document.getElementById('history-modal').classList.add('hidden');
}

function _jumpToHistory(idx) {
  if (idx < 0 || idx >= _history.length) return;
  const snap = _history[idx];

  // Save current state as a new entry so user can undo back if needed
  pushHistory();

  state.fonts        = JSON.parse(JSON.stringify(snap.fonts));
  state.palettes     = JSON.parse(JSON.stringify(snap.palettes));
  state.spacings     = JSON.parse(JSON.stringify(snap.spacings  || []));
  state.shadows      = JSON.parse(JSON.stringify(snap.shadows   || []));
  state.semantics    = JSON.parse(JSON.stringify(snap.semantics || []));
  state.selectedId   = snap.selectedId;
  state.selectedType = snap.selectedType;

  renderAll();
  _syncUndoBtn();
  _renderHistoryPanel();
  toast(`Jumped to: ${snap._label || 'earlier state'}`);

  if (state.selectedId && state.selectedType) {
    requestAnimationFrame(() => _flashCard(state.selectedId, state.selectedType));
  }
}

/* ══════════════════════════════════════════════════════
   UTILITIES
══════════════════════════════════════════════════════ */
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function fallback(category) {
  return FALLBACK_STACKS[category] || 'sans-serif';
}

function loadGoogleFont(name, weights) {
  const key = `gf-${name}`;
  if (document.querySelector(`[data-gf="${key}"]`)) return;
  const wStr = [...new Set(weights)].sort((a, b) => a - b).join(';');
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(name)}:wght@${wStr}&display=swap`;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  link.setAttribute('data-gf', key);
  document.head.appendChild(link);
}

function toast(msg) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  document.getElementById('toast-root').appendChild(el);
  setTimeout(() => el.remove(), 2700);
}

/* ══════════════════════════════════════════════════════
   FONT ACTIONS
══════════════════════════════════════════════════════ */
function addFont(fontDef) {
  if (state.fonts.find(f => f.name === fontDef.name)) {
    toast(`"${fontDef.name}" is already in your system`);
    return;
  }

  pushHistory();
  if (!fontDef.source || fontDef.source === 'google') loadGoogleFont(fontDef.name, fontDef.weights);

  const font = {
    id: uid(),
    name: fontDef.name,
    category: fontDef.category,
    source: fontDef.source || 'google',
    weights: fontDef.weights,
    activeWeights: fontDef.weights.slice(0, Math.min(5, fontDef.weights.length)),
    sampleText: 'The quick brown fox jumps over the lazy dog.',
    previewSize: 16,
    leading:     1.5,
    kerning:       0,
    classification: null,
    fallbackFonts: [],     // ordered list of user-chosen fallback fonts
    fontDisplay:   'swap', // font-display strategy: swap|optional|block|fallback|auto
    scaleKey:    null,
    activeScaleStops: [],  // array of { name, px } — stops toggled on in the scale picker
    variants:    [],        // type style variants: [{ id, role, size, leading, kerning, docs }]
    notes:       '',
  };

  state.fonts.push(font);
  state.selectedId = font.id;

  renderAll();
  closeModal();
  toast(`Added "${fontDef.name}"`);
}

function removeFont(id) {
  const font = state.fonts.find(f => f.id === id);
  if (!font) return;
  pushHistory();
  state.fonts = state.fonts.filter(f => f.id !== id);
  if (state.selectedId === id) state.selectedId = state.fonts.length ? state.fonts[state.fonts.length - 1].id : null;
  renderAll();
  toast(`Removed "${font.name}"`);
}

function duplicateFont(id) {
  const font = state.fonts.find(f => f.id === id);
  if (!font) return;
  pushHistory();
  const copy = JSON.parse(JSON.stringify(font));
  copy.id = uid(); copy.name = font.name + ' Copy';
  state.fonts.push(copy);
  state.selectedId = copy.id; state.selectedType = 'font';
  renderAll(); toast(`Duplicated "${font.name}"`);
}

function duplicatePalette(id) {
  const p = state.palettes.find(p => p.id === id);
  if (!p) return;
  pushHistory();
  const copy = JSON.parse(JSON.stringify(p));
  copy.id = uid(); copy.name = p.name + ' Copy';
  state.palettes.push(copy);
  state.selectedId = copy.id; state.selectedType = 'palette';
  renderAll(); toast(`Duplicated "${p.name}"`);
}

function duplicateSpacing(id) {
  const s = state.spacings.find(s => s.id === id);
  if (!s) return;
  pushHistory();
  const copy = JSON.parse(JSON.stringify(s));
  copy.id = uid(); copy.name = s.name + ' Copy';
  state.spacings.push(copy);
  state.selectedId = copy.id; state.selectedType = 'spacing';
  renderAll(); toast(`Duplicated "${s.name}"`);
}

function duplicateShadow(id) {
  const s = state.shadows.find(s => s.id === id);
  if (!s) return;
  pushHistory();
  const copy = JSON.parse(JSON.stringify(s));
  copy.id = uid(); copy.name = s.name + ' Copy';
  state.shadows.push(copy);
  state.selectedId = copy.id; state.selectedType = 'shadow';
  renderAll(); toast(`Duplicated "${s.name}"`);
}

function selectFont(id) {
  state.selectedId   = id;
  state.selectedType = 'font';
  renderAll();
}

function updateFont(id, key, value) {
  const font = state.fonts.find(f => f.id === id);
  if (!font) return;
  font[key] = value;
  renderCanvas();
  renderProperties();
}

function toggleWeight(fontId, weight) {
  const font = state.fonts.find(f => f.id === fontId);
  if (!font) return;
  if (font.activeWeights.includes(weight)) {
    if (font.activeWeights.length === 1) { toast('Keep at least one weight active'); return; }
    pushHistory();
    font.activeWeights = font.activeWeights.filter(w => w !== weight);
  } else {
    pushHistory();
    font.activeWeights = [...font.activeWeights, weight].sort((a, b) => a - b);
  }
  renderCanvas();
  renderProperties();
}

/* ══════════════════════════════════════════════════════
   PALETTE ACTIONS
══════════════════════════════════════════════════════ */
function addPaletteSimple(name, baseHex) {
  pushHistory();
  const palette = { id: uid(), name: name.trim() || 'Untitled', baseHex, shadeCount: 10, colors: generateColorScale(baseHex, 10) };
  state.palettes.push(palette);
  renderAll();
}

function addPalette(name, baseHex) {
  pushHistory();
  const palette = {
    id: uid(),
    name: name.trim() || 'Untitled',
    baseHex,
    shadeCount: 10,
    colorSpace:     typeof _paletteColorSpace !== 'undefined' ? _paletteColorSpace : 'hsl',
    customStops:    {},        // { stop: hex } — user-edited overrides
    roles:          {},        // semantic roles: { 'bg.primary': { light: 50, dark: 900 } }
    stateOverrides: {},        // { hover: hex, active: hex, focus: hex, disabled: hex }
    notes:          '',
  };
  palette.colors = generateColorScaleForPalette(palette);
  state.palettes.push(palette);
  state.selectedId   = palette.id;
  state.selectedType = 'palette';
  renderAll();
  closePaletteModal();
  toast(`Added "${palette.name}" palette`);
}

/* Import one or more palettes from pasted text (hex list, CSS vars, Tailwind object).
   1 color → seed a generated scale. 2–12 → map onto a stop set. >12 → chunk into palettes. */
function importPalettesFromText(text) {
  if (!text || !text.trim()) { toast('Paste some colors first'); return 0; }
  const raw = text.match(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/g) || [];
  const norm = raw.map(h => h.length === 4 ? '#' + h.slice(1).split('').map(c => c + c).join('') : h.toLowerCase());
  const seen = new Set(); const colors = [];
  norm.forEach(h => { if (!seen.has(h)) { seen.add(h); colors.push(h); } });
  if (!colors.length) { toast('No hex colors found in that text'); return 0; }

  pushHistory();

  const makePalette = (cols) => {
    if (cols.length === 1) {
      const pal = { id: uid(), name: getHueName(cols[0]) || 'Imported', baseHex: cols[0], shadeCount: 10,
        colorSpace: 'hsl', customStops: {}, roles: {}, stateOverrides: {}, notes: '' };
      pal.colors = generateColorScaleForPalette(pal);
      return pal;
    }
    const count = Math.max(MIN_SHADES, Math.min(MAX_SHADES, cols.length));
    const stops = SHADE_STOP_SETS[count] || SHADE_STOP_SETS[10];
    const customStops = {};
    stops.forEach((stop, i) => { if (cols[i]) customStops[stop] = cols[i]; });
    const baseHex = cols[Math.floor(cols.length / 2)];
    const pal = { id: uid(), name: getHueName(baseHex) || 'Imported', baseHex, shadeCount: count,
      colorSpace: 'hsl', customStops, roles: {}, stateOverrides: {}, notes: '' };
    pal.colors = generateColorScaleForPalette(pal);
    return pal;
  };

  let created = 0, lastId = null;
  if (colors.length <= 12) {
    const pal = makePalette(colors);
    state.palettes.push(pal); lastId = pal.id; created = 1;
  } else {
    for (let i = 0; i < colors.length; i += 11) {
      const pal = makePalette(colors.slice(i, i + 11));
      state.palettes.push(pal); lastId = pal.id; created++;
    }
  }
  if (lastId) { state.selectedId = lastId; state.selectedType = 'palette'; }
  renderAll();
  toast(`Imported ${colors.length} color${colors.length === 1 ? '' : 's'} → ${created} palette${created === 1 ? '' : 's'}`);
  return created;
}

function adjustShadeCount(id, delta) {
  const p = state.palettes.find(p => p.id === id);
  if (!p) return;
  const next = Math.max(MIN_SHADES, Math.min(MAX_SHADES, p.shadeCount + delta));
  if (next === p.shadeCount) return;
  pushHistory();
  p.shadeCount = next;
  p.colors = generateColorScaleForPalette(p);
  renderColorCanvas();
  renderColorProperties();
}

function removePalette(id) {
  const p = state.palettes.find(p => p.id === id);
  if (!p) return;
  pushHistory();
  state.palettes = state.palettes.filter(p => p.id !== id);
  if (state.selectedId === id) { state.selectedId = null; state.selectedType = null; }
  renderAll();
  toast(`Removed "${p.name}"`);
}

function selectPalette(id) {
  state.selectedId   = id;
  state.selectedType = 'palette';
  renderAll();
}

function updatePaletteField(id, key, value) {
  const p = state.palettes.find(p => p.id === id);
  if (!p) return;
  p[key] = value;
  if (key === 'baseHex' || key === 'colorSpace') p.colors = generateColorScaleForPalette(p);
  renderColorCanvas();
  renderColorProperties();
}

/* ══════════════════════════════════════════════════════
   RENDER — CANVAS
══════════════════════════════════════════════════════ */
function renderCanvas() {
  const empty   = document.getElementById('canvas-empty');
  const section = document.getElementById('canvas-fonts-section');
  const grid    = document.getElementById('font-grid');
  const countLbl = document.getElementById('canvas-font-count-label');
  const badge   = document.getElementById('font-badge');

  const count = state.fonts.length;
  badge.textContent = count;
  countLbl.textContent = `${count} font${count !== 1 ? 's' : ''}`;
  countLbl.classList.toggle('hidden', count === 0);

  const hasAnything = state.fonts.length > 0 || state.palettes.length > 0 || state.spacings.length > 0 || state.shadows.length > 0 || state.semantics.length > 0
    || state.radii.length > 0 || state.borders.length > 0 || state.opacities.length > 0 || state.breakpoints.length > 0
    || state.zindices.length > 0 || state.motions.length > 0 || state.grids.length > 0 || state.icons.length > 0 || state.gradients.length > 0
    || Object.values(state.activeComponents).some(Boolean)
    || state.showPairings || state.showColorPairings;
  if (!hasAnything) empty.classList.remove('has-content');
  else              empty.classList.add('has-content');

  if (count === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');

  grid.innerHTML = state.fonts.map(font => {
    const effectiveFallback = getFontStack(font);
    const ff = `'${font.name}', ${effectiveFallback}`;
    const isSelected = state.selectedId === font.id && state.selectedType === 'font';
    const hasVariants  = (font.variants || []).length > 0;

    const cardHeader = `
      <div class="font-card-top">
        <div class="font-card-meta">
          <span class="font-card-name">${escHtml(font.name)}</span>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            <span class="font-card-category">${escHtml(font.category)}</span>
            ${font.classification ? `<span class="font-card-class-badge">${escHtml(font.classification)}</span>` : ''}
          </div>
        </div>
        <div class="font-card-actions">
          <div class="card-copy-btn-wrap">
            <button class="card-copy-btn" data-copy-type="font" data-copy-id="${font.id}" title="Copy token code">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M1.5 7.5V1.5h6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
            </button>
            <div class="card-copy-menu hidden" data-copy-menu="${font.id}">
              <button data-fmt="css">CSS var</button>
              <button data-fmt="scss">SCSS var</button>
              <button data-fmt="js">JS</button>
              <button data-fmt="tailwind">Tailwind</button>
            </div>
          </div>
          <button class="card-action-btn" data-dup-font-id="${font.id}" title="Duplicate font">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="3.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/></svg>
          </button>
          <button class="card-action-btn danger" data-remove-id="${font.id}" title="Remove font">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M1.5 1.5L9.5 9.5M9.5 1.5L1.5 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>`;

    if (hasVariants) {
      // Specimen card — full type ramp, variants sorted by size desc
      const sorted = [...font.variants].sort((a, b) => b.size - a.size);
      return `
        <div class="font-card font-card-specimen ${isSelected ? 'selected' : ''}" data-card-id="${font.id}">
          ${cardHeader}
          <div class="font-specimen-ramp">
            ${sorted.map(v => {
              const ew   = v.weight || font.activeWeights[0] || 400;
              const sz   = v.fluid ? computeClamp(v) : v.size + 'px';
              const a11y = getA11yWarnings(v);
              return `
                <div class="font-specimen-ramp-row">
                  <div class="font-specimen-ramp-label">
                    <span class="font-specimen-role">${escHtml(v.role)}</span>
                    <span class="font-specimen-stats">${v.size}px · ${ew} · lh ${v.leading}</span>
                    ${(() => { const r = checkVerticalRhythm(v); return `<span class="specimen-rhythm-badge ${r.onGrid ? 'rhythm-ok' : 'rhythm-off'}" title="${r.lineHeightPx}px line height — ${r.onGrid ? 'on 4px grid' : 'off 4px grid'}">${r.onGrid ? '✓ grid' : '~ grid'}</span>`; })()}
                    ${a11y.length ? `<span class="specimen-a11y-warn" title="${escHtml(a11y.join('\n'))}">⚠</span>` : ''}
                  </div>
                  ${(() => {
                    const key      = `${font.id}:${v.id}`;
                    const isExp    = _specimenExpanded.has(key);
                    const bigSize  = v.size >= 40;
                    return `<div class="font-specimen-ramp-text ${bigSize && !isExp ? 'font-specimen-clipped' : ''}"
                         style="font-family:${ff}; font-size:${sz}; font-weight:${ew}; line-height:${v.leading}; letter-spacing:${v.kerning}px; text-transform:${v.textTransform||'none'}; text-decoration:${v.textDecoration||'none'}; font-style:${v.fontStyle||'normal'}; ${v.variationSettings?`font-variation-settings:${v.variationSettings};`:''}${v.measure?`max-width:${v.measure}ch;`:''}">
                      ${escHtml(v.sampleText || font.sampleText)}
                    </div>
                    ${bigSize ? `<button class="specimen-expand-btn" data-spec-key="${key}">${isExp ? '↑ Collapse' : '↓ Expand'}</button>` : ''}`;
                  })()}
                  ${v.fluid ? `<div class="font-card-variant-fluid-badge">fluid</div>` : ''}
                  ${v.docs ? `<div class="font-card-variant-docs">${escHtml(v.docs)}</div>` : ''}
                </div>`;
            }).join('')}
          </div>
          <div class="font-card-weights" style="padding:10px 16px 12px">
            ${font.activeWeights.map(w => `<span class="weight-pill" style="font-family:${ff};font-weight:${w}">${w}</span>`).join('')}
          </div>
        </div>`;
    }

    // Standard card — no variants yet
    return `
      <div class="font-card ${isSelected ? 'selected' : ''}" data-card-id="${font.id}">
        ${cardHeader}
        <div class="font-card-preview-xl" style="font-family:${ff}; font-weight:${font.activeWeights[0] || 400}">Aa Bb Cc</div>
        ${(font.activeScaleStops || []).length > 0
          ? `<div class="font-card-scale-previews">
              ${(font.activeScaleStops || []).map(stop => `
                <div class="font-card-scale-preview-row">
                  <span class="font-card-scale-preview-label">${escHtml(stop.name)} <span class="font-card-scale-preview-px">${stop.px}px</span></span>
                  <div class="font-card-preview-sm" style="font-family:${ff}; font-size:${stop.px}px; font-weight:${font.activeWeights[0] || 400}; line-height:${font.leading || 1.5}; letter-spacing:${font.kerning || 0}px; margin:0">${escHtml(font.sampleText)}</div>
                </div>`).join('')}
            </div>`
          : `<div class="font-card-preview-sm" style="font-family:${ff}; font-size:${font.previewSize}px; font-weight:${font.activeWeights[0] || 400}; line-height:${font.leading || 1.5}; letter-spacing:${font.kerning || 0}px">${escHtml(font.sampleText)}</div>`
        }
        <div class="font-card-weights">
          ${font.activeWeights.map(w => `<span class="weight-pill" style="font-family:${ff};font-weight:${w}">${w}</span>`).join('')}
        </div>
      </div>`;
  }).join('');
}

/* ══════════════════════════════════════════════════════
   RENDER — PROPERTIES (dispatcher)
══════════════════════════════════════════════════════ */
function renderProperties() {
  if (state.selectedType === 'font')      { renderFontProperties(); return; }
  if (state.selectedType === 'palette')   { renderColorProperties(); return; }
  if (state.selectedType === 'spacing')   { renderSpacingProperties(); return; }
  if (state.selectedType === 'shadow')    { renderShadowProperties(); return; }
  if (state.selectedType === 'component') { renderComponentProperties(); return; }
  renderSystemDefaults();
}

function _variantCardHTML(v, font, ff) {
  const isExp = _expandedVariantIds.has(v.id);
  const effectiveWeight = v.weight || font.activeWeights[0] || 400;
  return `
    <div class="variant-card ${isExp ? 'expanded' : ''}" data-vid="${v.id}" draggable="false">
      <div class="variant-card-header">
        <div class="variant-drag-handle" data-vdrag="${v.id}" title="Drag to reorder">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="3" cy="2" r="1" fill="currentColor"/><circle cx="7" cy="2" r="1" fill="currentColor"/>
            <circle cx="3" cy="5" r="1" fill="currentColor"/><circle cx="7" cy="5" r="1" fill="currentColor"/>
            <circle cx="3" cy="8" r="1" fill="currentColor"/><circle cx="7" cy="8" r="1" fill="currentColor"/>
          </svg>
        </div>
        <svg class="variant-chevron" width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M3 4L5 6L7 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="variant-role-badge">${escHtml(v.role)}</span>
        <span class="variant-size-badge">${v.size}px · ${effectiveWeight}</span>
        ${(() => { const r = checkVerticalRhythm(v); return `<span class="variant-rhythm-badge ${r.onGrid ? 'on-grid' : 'off-grid'}" title="Line height: ${r.lineHeightPx}px — ${r.onGrid ? 'on 4px grid ✓' : 'off 4px grid'}">${r.onGrid ? '✓' : '~'}</span>`; })()}
        <button class="variant-copy-css-btn" data-copy-vid="${v.id}" title="Copy CSS">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <rect x="3.5" y="3.5" width="6" height="6" rx="1.2" stroke="currentColor" stroke-width="1.3"/>
            <path d="M2.5 7.5H2C1.448 7.5 1 7.052 1 6.5V2C1 1.448 1.448 1 2 1H6.5C7.052 1 7.5 1.448 7.5 2V2.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
          </svg>
        </button>
        <button class="variant-delete-btn" data-delete-vid="${v.id}" title="Remove variant">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      ${isExp ? `
        <div class="variant-card-body">

          <!-- Weight chips -->
          <div class="prop-field" style="margin-bottom:8px">
            <label>Weight</label>
            <div class="variant-weight-chips">
              ${font.activeWeights.map(w => `
                <button class="variant-weight-chip ${effectiveWeight === w ? 'active' : ''}"
                        data-set-weight="${w}" data-vid="${v.id}"
                        style="font-family:${ff};font-weight:${w}">${w}</button>
              `).join('')}
            </div>
          </div>

          <!-- Role picker -->
          <div class="prop-field" style="margin-bottom:8px">
            <label>Role</label>
            <div class="variant-role-picker">
              ${VARIANT_ROLES.map(r => `
                <button class="variant-role-chip ${v.role === r ? 'active' : ''}"
                        data-set-role="${r}" data-vid="${v.id}">${r}</button>
              `).join('')}
            </div>
            ${!VARIANT_ROLES.includes(v.role) ? `
              <input class="prop-input" type="text" style="margin-top:6px"
                     value="${escHtml(v.role)}" placeholder="Custom role name"
                     data-custom-role data-vid="${v.id}">
            ` : ''}
          </div>

          <!-- Typography controls 2×2 grid -->
          <div class="variant-typo-grid">
            <div class="prop-field" style="margin-bottom:0">
              <label>Size <span style="font-weight:400;color:var(--text-3)">px</span></label>
              <div class="font-size-stepper">
                <button class="stepper-btn" data-vdec="size" data-vid="${v.id}">−</button>
                <input class="stepper-input" type="number" min="8" max="200"
                       value="${v.size}" data-vinput="size" data-vid="${v.id}">
                <button class="stepper-btn" data-vinc="size" data-vid="${v.id}">+</button>
              </div>
            </div>
            <div class="prop-field" style="margin-bottom:0">
              <label>Leading</label>
              <div class="font-size-stepper">
                <button class="stepper-btn" data-vdec="leading" data-vid="${v.id}">−</button>
                <input class="stepper-input" type="number" min="0.8" max="3" step="0.05"
                       value="${v.leading}" data-vinput="leading" data-vid="${v.id}">
                <button class="stepper-btn" data-vinc="leading" data-vid="${v.id}">+</button>
              </div>
            </div>
            <div class="prop-field" style="margin-bottom:0">
              <label>Kerning <span style="font-weight:400;color:var(--text-3)">px</span></label>
              <div class="font-size-stepper">
                <button class="stepper-btn" data-vdec="kerning" data-vid="${v.id}">−</button>
                <input class="stepper-input" type="number" min="-10" max="40" step="0.5"
                       value="${v.kerning}" data-vinput="kerning" data-vid="${v.id}">
                <button class="stepper-btn" data-vinc="kerning" data-vid="${v.id}">+</button>
              </div>
            </div>
            <div class="prop-field" style="margin-bottom:0;grid-column:1/-1">
              <label>Variation Settings <span style="font-weight:400;color:var(--text-3)">font-variation-settings</span></label>
              <input class="prop-input" type="text"
                     placeholder='"wght" 400, "wdth" 100'
                     data-vinput="variationSettings" data-vid="${v.id}"
                     value="${escHtml(v.variationSettings || '')}">
            </div>
          </div>

          <!-- Line height visualizer — two lines show the leading gap -->
          <div class="vp-leading-wrap" id="vpreview-${v.id}">
            <span class="vp-leading-line" style="font-family:${ff}; font-size:${v.size}px; font-weight:${effectiveWeight}; line-height:${v.leading}; letter-spacing:${v.kerning}px; ${v.textTransform&&v.textTransform!=='none'?`text-transform:${v.textTransform};`:''} ${v.variationSettings ? `font-variation-settings:${v.variationSettings};` : ''}">${escHtml(v.sampleText || font.sampleText)}</span>
            <span class="vp-leading-line vp-leading-line-2" style="font-family:${ff}; font-size:${v.size}px; font-weight:${effectiveWeight}; line-height:${v.leading}; letter-spacing:${v.kerning}px; ${v.textTransform&&v.textTransform!=='none'?`text-transform:${v.textTransform};`:''} ${v.variationSettings ? `font-variation-settings:${v.variationSettings};` : ''}">${escHtml(v.sampleText || font.sampleText)}</span>
            <div class="vp-leading-badge">lh ${v.leading}</div>
          </div>

          <!-- Variable font sliders (if font is variable) -->
          ${(() => {
            const axes = KNOWN_VARIABLE_FONTS[font.name] || [];
            if (!axes.length) return '';
            return `<div class="prop-field" style="margin-bottom:8px">
              <label>Variable Font Axes</label>
              <div class="vf-sliders">
                ${axes.map(ax => {
                  const cur = getAxisValue(v.variationSettings, ax.axis) ?? ax.default;
                  return `<div class="vf-slider-row">
                    <span class="vf-axis-label">${ax.label}</span>
                    <input type="range" class="vf-range" min="${ax.min}" max="${ax.max}" step="${ax.step}" value="${cur}"
                           data-vfaxis="${ax.axis}" data-vid="${v.id}">
                    <span class="vf-axis-value" id="vfval-${v.id}-${ax.axis}">${cur}</span>
                  </div>`;
                }).join('')}
              </div>
            </div>`;
          })()}

          <!-- Fluid typography -->
          <div class="prop-field" style="margin-bottom:8px">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${v.fluid ? '8px' : '0'}">
              <label>Fluid Typography</label>
              <button class="variant-toggle-pill ${v.fluid ? 'active' : ''}" data-toggle-fluid="${v.id}">
                ${v.fluid ? 'On' : 'Off'}
              </button>
            </div>
            ${v.fluid ? `
              <div class="variant-typo-grid">
                <div class="prop-field" style="margin-bottom:0">
                  <label>Min size</label>
                  <div class="font-size-stepper">
                    <button class="stepper-btn" data-vdec="fluidMinSize" data-vid="${v.id}">−</button>
                    <input class="stepper-input" type="number" data-vinput="fluidMinSize" data-vid="${v.id}" value="${v.fluidMinSize}">
                    <button class="stepper-btn" data-vinc="fluidMinSize" data-vid="${v.id}">+</button>
                  </div>
                </div>
                <div class="prop-field" style="margin-bottom:0">
                  <label>Max size</label>
                  <div class="font-size-stepper">
                    <button class="stepper-btn" data-vdec="fluidMaxSize" data-vid="${v.id}">−</button>
                    <input class="stepper-input" type="number" data-vinput="fluidMaxSize" data-vid="${v.id}" value="${v.fluidMaxSize || v.size}">
                    <button class="stepper-btn" data-vinc="fluidMaxSize" data-vid="${v.id}">+</button>
                  </div>
                </div>
                <div class="prop-field" style="margin-bottom:0">
                  <label>Min vp</label>
                  <div class="font-size-stepper">
                    <button class="stepper-btn" data-vdec="fluidMinVp" data-vid="${v.id}">−</button>
                    <input class="stepper-input" type="number" data-vinput="fluidMinVp" data-vid="${v.id}" value="${v.fluidMinVp}">
                    <button class="stepper-btn" data-vinc="fluidMinVp" data-vid="${v.id}">+</button>
                  </div>
                </div>
                <div class="prop-field" style="margin-bottom:0">
                  <label>Max vp</label>
                  <div class="font-size-stepper">
                    <button class="stepper-btn" data-vdec="fluidMaxVp" data-vid="${v.id}">−</button>
                    <input class="stepper-input" type="number" data-vinput="fluidMaxVp" data-vid="${v.id}" value="${v.fluidMaxVp}">
                    <button class="stepper-btn" data-vinc="fluidMaxVp" data-vid="${v.id}">+</button>
                  </div>
                </div>
              </div>
              <div class="fluid-formula" id="fluid-formula-${v.id}">${escHtml(computeClamp(v))}</div>
            ` : ''}
          </div>

          <!-- Responsive sizes -->
          <div class="prop-field" style="margin-bottom:8px">
            <label>Responsive Sizes <span style="font-weight:400;color:var(--text-3)">px (leave blank = base)</span></label>
            <div class="variant-typo-grid">
              ${['sm','md','lg'].map(bp => `
                <div class="prop-field" style="margin-bottom:0">
                  <label>${bp}</label>
                  <div class="font-size-stepper">
                    <button class="stepper-btn" data-vdec="resp_${bp}" data-vid="${v.id}">−</button>
                    <input class="stepper-input" type="number" placeholder="${v.size}"
                           data-vinput="resp_${bp}" data-vid="${v.id}"
                           value="${v.responsiveSizes?.[bp] || ''}">
                    <button class="stepper-btn" data-vinc="resp_${bp}" data-vid="${v.id}">+</button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Readability -->
          <div class="variant-typo-grid" style="margin-bottom:8px">
            <div class="prop-field" style="margin-bottom:0">
              <label>Para spacing <span style="font-weight:400;color:var(--text-3)">px</span></label>
              <div class="font-size-stepper">
                <button class="stepper-btn" data-vdec="paragraphSpacing" data-vid="${v.id}">−</button>
                <input class="stepper-input" type="number" min="0" data-vinput="paragraphSpacing" data-vid="${v.id}" value="${v.paragraphSpacing || 0}">
                <button class="stepper-btn" data-vinc="paragraphSpacing" data-vid="${v.id}">+</button>
              </div>
            </div>
            <div class="prop-field" style="margin-bottom:0">
              <label>Measure <span style="font-weight:400;color:var(--text-3)">ch (0=∞)</span></label>
              <div class="font-size-stepper">
                <button class="stepper-btn" data-vdec="measure" data-vid="${v.id}">−</button>
                <input class="stepper-input" type="number" min="0" data-vinput="measure" data-vid="${v.id}" value="${v.measure || 0}">
                <button class="stepper-btn" data-vinc="measure" data-vid="${v.id}">+</button>
              </div>
            </div>
          </div>

          <!-- Decoration -->
          <div class="prop-field" style="margin-bottom:8px">
            <label>Transform</label>
            <div class="variant-opt-group">
              ${[['none','—'],['uppercase','AA'],['lowercase','aa'],['capitalize','Aa']].map(([val, label]) => `
                <button class="variant-opt-btn ${(v.textTransform||'none') === val ? 'active' : ''}"
                        data-vopt="textTransform" data-val="${val}" data-vid="${v.id}">${label}</button>
              `).join('')}
            </div>
          </div>
          <div class="prop-field" style="margin-bottom:8px">
            <label>Decoration</label>
            <div class="variant-opt-group">
              ${[['none','—'],['underline','U̲'],['line-through','S̶']].map(([val, label]) => `
                <button class="variant-opt-btn ${(v.textDecoration||'none') === val ? 'active' : ''}"
                        data-vopt="textDecoration" data-val="${val}" data-vid="${v.id}">${label}</button>
              `).join('')}
            </div>
          </div>
          <div class="prop-field" style="margin-bottom:8px">
            <label>Style</label>
            <div class="variant-opt-group">
              ${[['normal','Regular'],['italic','Italic'],['oblique','Oblique']].map(([val, label]) => `
                <button class="variant-opt-btn ${(v.fontStyle||'normal') === val ? 'active' : ''}"
                        style="${val !== 'normal' ? `font-style:${val}` : ''}"
                        data-vopt="fontStyle" data-val="${val}" data-vid="${v.id}">${label}</button>
              `).join('')}
            </div>
          </div>

          <!-- Accessibility check -->
          ${(() => {
            const warns = getA11yWarnings(v);
            if (!warns.length) return `<div class="a11y-pass">✓ No accessibility issues</div>`;
            return `<div class="a11y-warnings">${warns.map(w => `<div class="a11y-warn">⚠ ${escHtml(w)}</div>`).join('')}</div>`;
          })()}

          <!-- Sample text override -->
          <div class="prop-field" style="margin-bottom:0">
            <label>Sample text <span style="font-weight:400;color:var(--text-3)">(leave blank for font default)</span></label>
            <textarea class="variant-docs-input" rows="2"
                      placeholder="Custom preview text for this variant…"
                      data-vinput="sampleText" data-vid="${v.id}">${escHtml(v.sampleText || '')}</textarea>
          </div>

          <!-- Usage notes -->
          <div class="prop-field" style="margin-bottom:0">
            <label>Usage notes</label>
            <textarea class="variant-docs-input" rows="3"
                      placeholder="When and how to use this type style…"
                      data-vinput="docs" data-vid="${v.id}">${escHtml(v.docs || '')}</textarea>
          </div>

        </div>
      ` : ''}
    </div>
  `;
}

function renderFontProperties() {
  const emptyEl = document.getElementById('props-empty');
  const fontEl  = document.getElementById('props-font');

  const font = state.fonts.find(f => f.id === state.selectedId);

  if (!font) {
    emptyEl.classList.remove('hidden');
    fontEl.classList.add('hidden');
    return;
  }

  emptyEl.classList.add('hidden');
  fontEl.classList.remove('hidden');

  const ff = `'${font.name}', ${fallback(font.category)}`;

  fontEl.innerHTML = `
    <!-- Font Info -->
    <div class="prop-section">
      <span class="prop-section-label">Font Info</span>
      <div class="prop-info-row">
        <span class="prop-info-label">Family</span>
        <span class="prop-info-value" title="${escHtml(font.name)}">${escHtml(font.name)}</span>
      </div>
      <div class="prop-info-row">
        <span class="prop-info-label">Category</span>
        <span class="prop-info-value">${escHtml(font.category)}</span>
      </div>
      <div class="prop-info-row">
        <span class="prop-info-label">Weights</span>
        <span class="prop-info-value">${font.weights.length} available</span>
      </div>
      <div class="prop-info-row">
        <span class="prop-info-label">Source</span>
        <span class="prop-info-value">${font.source === 'system' ? 'System' : 'Google Fonts'}</span>
      </div>


      <!-- Font Display -->
      <div class="prop-field" style="margin-top:10px;margin-bottom:0">
        <label>Font Display <span style="font-weight:400;color:var(--text-3)">loading strategy</span></label>
        <select class="prop-input" id="prop-font-display">
          ${['swap','optional','block','fallback','auto'].map(v => `<option value="${v}" ${(font.fontDisplay||'swap') === v ? 'selected' : ''}>${v}</option>`).join('')}
        </select>
      </div>

      <!-- Font Stack Picker -->
      <div class="prop-field" style="margin-top:10px;margin-bottom:0">
        <label>Fallback Stack</label>
        <button class="fallback-add-btn" id="prop-fallback-picker-btn">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1V10M1 5.5H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          Add fallback font
        </button>
        ${(font.fallbackFonts || []).length ? `
          <div class="fallback-list" id="fallback-list">
            ${(font.fallbackFonts || []).map((fb, i) => `
              <div class="fallback-item">
                <span class="fallback-item-name">${escHtml(fb)}</span>
                <button class="fallback-item-remove" data-rm-fb="${i}" title="Remove">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
                </button>
              </div>
            `).join('')}
          </div>
          <div class="font-stack-preview">
            <span style="font-size:9.5px;color:var(--text-3)">Full stack: </span>
            <span style="font-size:10px;color:var(--text-2);font-family:'JetBrains Mono',monospace">'${escHtml(font.name)}', ${escHtml(getFontStack(font))}</span>
          </div>
        ` : `<div style="font-size:11px;color:var(--text-3);margin-top:5px">Using default: ${escHtml(getFallbackStack(font.category))}</div>`}
      </div>
    </div>

    <div class="prop-divider"></div>

    <!-- Type Scale Generator -->
    <div class="prop-section">
      <span class="prop-section-label">Type Scale</span>
      <div class="type-scale-row">
        <select class="prop-input" id="type-scale-ratio">
          ${TYPE_SCALE_RATIOS.map(r => `<option value="${r.value}" ${r.value===1.25?'selected':''}>${r.label}</option>`).join('')}
        </select>
        <div class="type-scale-base">
          <input class="prop-input" type="number" id="type-scale-base" value="16" min="8" max="48" title="Base size (px)">
          <span class="type-scale-base-unit">px</span>
        </div>
      </div>
      <button class="variants-add-btn type-scale-apply" id="apply-type-scale-btn" style="width:100%;justify-content:center;margin-top:8px">
        Apply scale to ${(font.variants||[]).length} variant${(font.variants||[]).length===1?'':'s'}
      </button>
      <div class="type-scale-hint">Sizes your variants harmonically — body stays at the base, others step up &amp; down.</div>
    </div>

    <!-- Type Variants -->
    <div class="prop-section">
      <div class="variants-section-header">
        <span class="prop-section-label" style="margin-bottom:0">Type Variants</span>
        <button class="variants-add-btn" id="add-variant-btn">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1V9M1 5H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          Add
        </button>
      </div>

      <div class="variants-list" id="variants-list">
        ${(font.variants || []).length === 0
          ? `<div class="variants-empty">No variants yet — add one to document your type styles.</div>`
          : (font.variants || []).map(v => _variantCardHTML(v, font, ff)).join('')
        }
      </div>
    </div>

    <div class="prop-divider"></div>

    <!-- Canvas Preview -->
    <div class="prop-section">
      <span class="prop-section-label">Canvas Preview</span>

      <div class="vp-leading-wrap" id="prop-swatch">
        <span class="vp-leading-line" id="prop-swatch-text"
              style="font-family:${ff}; font-size:${font.previewSize}px; font-weight:${font.activeWeights[0] || 400}; line-height:${font.leading || 1.5}; letter-spacing:${font.kerning ?? 0}px">${escHtml(font.sampleText)}</span>
        <span class="vp-leading-line vp-leading-line-2" id="prop-swatch-text-2"
              style="font-family:${ff}; font-size:${font.previewSize}px; font-weight:${font.activeWeights[0] || 400}; line-height:${font.leading || 1.5}; letter-spacing:${font.kerning ?? 0}px">${escHtml(font.sampleText)}</span>
        <div class="vp-leading-badge" id="prop-swatch-lh-badge">lh ${font.leading || 1.5}</div>
      </div>

      <div class="prop-field">
        <label>Sample text</label>
        <textarea class="prop-input" rows="2" id="prop-sample-text"
          placeholder="Type sample text…">${escHtml(font.sampleText)}</textarea>
      </div>

      <div class="variant-typo-grid">
        <div class="prop-field" style="margin-bottom:0">
          <label>Size <span style="font-weight:400;color:var(--text-3)">px</span></label>
          <div class="font-size-stepper">
            <button class="stepper-btn" id="size-dec">−</button>
            <input class="stepper-input" type="number" id="prop-size-input" min="8" max="200" value="${font.previewSize}">
            <button class="stepper-btn" id="size-inc">+</button>
          </div>
        </div>
        <div class="prop-field" style="margin-bottom:0">
          <label>Leading</label>
          <div class="font-size-stepper">
            <button class="stepper-btn" id="leading-dec">−</button>
            <input class="stepper-input" type="number" id="prop-leading-input" min="0.8" max="3" step="0.05" value="${font.leading || 1.5}">
            <button class="stepper-btn" id="leading-inc">+</button>
          </div>
        </div>
        <div class="prop-field" style="margin-bottom:0">
          <label>Kerning <span style="font-weight:400;color:var(--text-3)">px</span></label>
          <div class="font-size-stepper">
            <button class="stepper-btn" id="kerning-dec">−</button>
            <input class="stepper-input" type="number" id="prop-kerning-input" min="-10" max="40" step="0.5" value="${font.kerning ?? 0}">
            <button class="stepper-btn" id="kerning-inc">+</button>
          </div>
        </div>
      </div>
    </div>

    <div class="prop-divider"></div>

    <!-- Active Weights -->
    <div class="prop-section">
      <span class="prop-section-label">Active Weights</span>
      <div class="weight-toggles">
        ${font.weights.map(w => `
          <button class="weight-toggle ${font.activeWeights.includes(w) ? 'on' : ''}"
                  data-weight="${w}" style="font-weight:${w}; font-family:${ff}">${w}</button>
        `).join('')}
      </div>
    </div>

    <div class="prop-divider"></div>

    ${(() => {
      const pairRules  = { Display:['Sans-serif','Serif'], Serif:['Sans-serif','Monospace'], 'Sans-serif':['Serif','Display','Monospace'], Monospace:['Sans-serif','Serif'] };
      const goodMatch  = pairRules[font.category] || [];
      const addedNames = new Set(state.fonts.map(f => f.name));

      // Category 1: fonts already in the system (excluding current)
      const inSystem = state.fonts
        .filter(f => f.id !== font.id)
        .sort((a, b) => (goodMatch.includes(b.category) ? 1 : 0) - (goodMatch.includes(a.category) ? 1 : 0));

      // Category 2: Google Font suggestions not yet added
      // Prefer compatible categories, curated popular picks
      const PRIORITY_FONTS = ['Inter','Merriweather','Playfair Display','Roboto','Lora','DM Sans','Space Grotesk','EB Garamond','Fira Code','Syne','Bricolage Grotesque','Plus Jakarta Sans','Nunito','Raleway','Source Code Pro'];
      const suggestions = FONT_LIBRARY
        .filter(f => !addedNames.has(f.name) && (goodMatch.includes(f.category) || f.category !== font.category))
        .sort((a, b) => {
          const aP = PRIORITY_FONTS.indexOf(a.name), bP = PRIORITY_FONTS.indexOf(b.name);
          const aG = goodMatch.includes(a.category), bG = goodMatch.includes(b.category);
          if (aG !== bG) return bG ? 1 : -1;
          if (aP !== bP) return (aP === -1 ? 999 : aP) - (bP === -1 ? 999 : bP);
          return 0;
        })
        .slice(0, inSystem.length > 0 ? 5 : 3);

      const renderInSystem = (fonts) => fonts.map(s => {
        const sff    = `'${s.name}', ${FALLBACK_STACKS[s.category] || 'sans-serif'}`;
        const isGood = goodMatch.includes(s.category);
        const heroV  = s.variants?.find(v => /heading|display|title/i.test(v.role)) || s.variants?.[0];
        return `<div class="pairing-suggestion-row">
          <div style="flex:1;min-width:0">
            <span class="pairing-suggestion-name" style="font-family:${sff};font-size:${heroV ? Math.min(heroV.size, 22) + 'px' : '16px'};font-weight:${heroV?.weight || s.activeWeights?.slice(-1)[0] || 700};line-height:1.2">${escHtml(s.name)}</span>
          </div>
          <div style="display:flex;align-items:center;gap:5px;flex-shrink:0">
            ${isGood ? `<span style="font-size:9px;color:var(--green)">✦</span>` : ''}
            <span class="pairing-suggestion-cat">${escHtml(s.category)}</span>
          </div>
        </div>`;
      }).join('');

      const renderSuggestions = (fonts) => fonts.map(s => {
        const sff    = `'${s.name}', ${FALLBACK_STACKS[s.category] || 'sans-serif'}`;
        const isGood = goodMatch.includes(s.category);
        loadGoogleFont(s.name, [400, 700]);
        return `<div class="pairing-suggest-wrap">
          <div class="pairing-suggestion-row pairing-suggestion-add">
            <span class="pairing-suggestion-name" style="font-family:${sff};font-size:15px;font-weight:700;line-height:1.2">${escHtml(s.name)}</span>
            <span class="pairing-suggestion-cat" style="margin-top:4px">${escHtml(s.category)} · ${s.weights.length}w</span>
          </div>
          <button class="pairing-add-btn" data-suggest-font="${escHtml(s.name)}" title="Add to system">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1V10M1 5.5H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </button>
        </div>`;
      }).join('');

      return `
        <div class="prop-section">
          <span class="prop-section-label">Pairs Well With</span>
          ${inSystem.length ? `
            <div class="pairing-category-label">In your system</div>
            <div class="pairing-suggestions">${renderInSystem(inSystem)}</div>
          ` : ''}
          ${suggestions.length ? `
            <div class="pairing-category-label" style="margin-top:${inSystem.length ? '10px' : '0'}">Suggestions</div>
            <div class="pairing-suggestions">${renderSuggestions(suggestions)}</div>
          ` : ''}
        </div>
        <div class="prop-divider"></div>`;
    })()}

    <div class="prop-divider"></div>
    <div class="prop-section">
      <span class="prop-section-label">Usage Notes</span>
      <textarea class="prop-notes-input" data-notes-id="${font.id}" data-notes-type="font" placeholder="Describe when to use this font…" rows="3">${escHtml(font.notes||'')}</textarea>
    </div>

    <div class="danger-section">
      <button class="danger-btn" id="prop-remove-btn">Remove Font</button>
    </div>
  `;

  /* ── Event wiring ── */
  const selectedId = font.id;
  let _fontHistoryPushed = false;
  const pushFontHistoryOnce = () => { if (!_fontHistoryPushed) { pushHistory(); _fontHistoryPushed = true; } };

  /* ── Variant collapse/expand — direct listeners on each header ── */
  fontEl.querySelectorAll('.variant-card-header').forEach(header => {
    header.addEventListener('click', e => {
      if (e.target.closest('button')) return; // ignore button clicks
      const vid = header.closest('.variant-card')?.dataset.vid;
      if (!vid) return;
      if (_expandedVariantIds.has(vid)) _expandedVariantIds.delete(vid);
      else _expandedVariantIds.add(vid);
      renderFontProperties();
    });
  });

  /* ── Type scale generator ── */
  document.getElementById('apply-type-scale-btn')?.addEventListener('click', () => {
    const ratio = parseFloat(document.getElementById('type-scale-ratio')?.value) || 1.25;
    const base  = Math.max(8, Math.min(48, parseInt(document.getElementById('type-scale-base')?.value) || 16));
    applyTypeScale(font.id, ratio, base);
  });

  /* ── Add Variant — pre-fill role from classification if no variants yet ── */
  document.getElementById('add-variant-btn').addEventListener('click', () => {
    pushHistory();
    const suggestedRole = (!font.variants?.length && font.classification) ? font.classification : 'Body';
    const v = newVariant({ role: suggestedRole, size: font.previewSize || 16, leading: font.leading || 1.5, kerning: font.kerning || 0 });
    if (!font.variants) font.variants = [];
    font.variants.push(v);
    _expandedVariantIds.add(v.id);
    renderCanvas();
    renderFontProperties();
  });

  /* ── Pairing suggestions — add button ── */
  fontEl.querySelectorAll('.pairing-add-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const name    = btn.dataset.suggestFont;
      const fontDef = FONT_LIBRARY.find(f => f.name === name);
      if (fontDef) { addFont(fontDef); toast(`Added ${name}`); }
    });
  });

  /* ── Font Display ── */
  document.getElementById('prop-font-display')?.addEventListener('change', e => {
    pushHistory();
    font.fontDisplay = e.target.value;
  });

  /* ── Fallback picker button → open modal ── */
  document.getElementById('prop-fallback-picker-btn')?.addEventListener('click', () => {
    openFallbackModal(font);
  });

  /* ── Fallback item remove ── */
  document.querySelectorAll('[data-rm-fb]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      pushHistory();
      const idx = parseInt(btn.dataset.rmFb);
      font.fallbackFonts = (font.fallbackFonts || []).filter((_, i) => i !== idx);
      renderCanvas();
      renderFontProperties();
    });
  });

  /* ── Abort any previously attached fontEl listeners to prevent stacking ── */
  if (fontEl._ac) fontEl._ac.abort();
  fontEl._ac = new AbortController();
  const { signal } = fontEl._ac;

  /* ── Variant card interactions (event delegation on fontEl) ── */
  fontEl.addEventListener('click', e => {

    /* (collapse/expand handled by direct per-header listeners below) */

    /* Delete variant */
    const delBtn = e.target.closest('[data-delete-vid]');
    if (delBtn) {
      pushHistory();
      const vid = delBtn.dataset.deleteVid;
      font.variants = (font.variants || []).filter(v => v.id !== vid);
      _expandedVariantIds.delete(vid);
      renderCanvas();
      renderFontProperties();
      return;
    }

    /* Role chip */
    const roleChip = e.target.closest('[data-set-role]');
    if (roleChip) {
      pushHistory();
      const vid  = roleChip.dataset.vid;
      const role = roleChip.dataset.setRole;
      const v    = (font.variants || []).find(v => v.id === vid);
      if (v) { v.role = role; renderCanvas(); renderFontProperties(); }
      return;
    }

    /* Fluid typography toggle */
    const fluidToggle = e.target.closest('[data-toggle-fluid]');
    if (fluidToggle) {
      e.stopPropagation();
      const vid = fluidToggle.dataset.toggleFluid;
      const v   = (font.variants || []).find(v => v.id === vid);
      if (v) { pushHistory(); v.fluid = !v.fluid; renderFontProperties(); }
      return;
    }

    /* Decoration/Transform/Style option buttons */
    const optBtn = e.target.closest('[data-vopt]');
    if (optBtn) {
      e.stopPropagation();
      const field = optBtn.dataset.vopt;
      const val   = optBtn.dataset.val;
      const vid   = optBtn.dataset.vid;
      const v     = (font.variants || []).find(v => v.id === vid);
      if (v) {
        v[field] = val;
        fontEl.querySelectorAll(`[data-vopt="${field}"][data-vid="${vid}"]`).forEach(b => {
          b.classList.toggle('active', b.dataset.val === val);
        });
        updateVariantPreview(v);
        renderCanvas();
      }
      return;
    }

    /* Weight chip */
    const weightChip = e.target.closest('[data-set-weight]');
    if (weightChip) {
      pushHistory();
      const vid = weightChip.dataset.vid;
      const w   = parseInt(weightChip.dataset.setWeight);
      const v   = (font.variants || []).find(v => v.id === vid);
      if (v) {
        v.weight = w;
        fontEl.querySelectorAll(`.variant-weight-chip[data-vid="${vid}"]`).forEach(c => {
          c.classList.toggle('active', parseInt(c.dataset.setWeight) === w);
        });
        updateVariantPreview(v);
        renderCanvas();
      }
      return;
    }

    /* Copy CSS */
    const copyBtn = e.target.closest('[data-copy-vid]');
    if (copyBtn) {
      e.stopPropagation();
      const vid  = copyBtn.dataset.copyVid;
      const v    = (font.variants || []).find(v => v.id === vid);
      if (!v) return;
      const ew   = v.weight || font.activeWeights[0] || 400;
      const slug = slugify(font.name);
      const vs   = slugify(v.role);
      const fb   = FALLBACK_STACKS[font.category] || 'sans-serif';
      const sz   = v.fluid ? computeClamp(v) : `${v.size}px`;
      const camelRole = v.role.replace(/(?:^|\s)\S/g, a => a.toUpperCase()).replace(/\s/g,'');
      const cssLines = [
        `.text-${slug}-${vs} {`,
        `  font-family: '${font.name}', ${fb};`,
        `  font-size: ${sz};`,
        `  font-weight: ${ew};`,
        `  line-height: ${v.leading};`,
        `  letter-spacing: ${v.kerning}px;`,
        ...(v.textTransform && v.textTransform !== 'none' ? [`  text-transform: ${v.textTransform};`] : []),
        ...(v.textDecoration && v.textDecoration !== 'none' ? [`  text-decoration: ${v.textDecoration};`] : []),
        ...(v.fontStyle && v.fontStyle !== 'normal' ? [`  font-style: ${v.fontStyle};`] : []),
        ...(v.paragraphSpacing ? [`  margin-bottom: ${v.paragraphSpacing}px;`] : []),
        ...(v.measure ? [`  max-width: ${v.measure}ch;`] : []),
        ...(v.variationSettings ? [`  font-variation-settings: ${v.variationSettings};`] : []),
        '}',
      ];
      const reactSnippet = `// React component — text-${slug}-${vs}\nexport function Text${camelRole}({ children, className = '', ...props }) {\n  return (\n    <p className={\`text-${slug}-${vs} \${className}\`} {...props}>\n      {children}\n    </p>\n  );\n}`;
      const vueSnippet = `<!-- Vue component — text-${slug}-${vs} -->\n<template>\n  <p :class="['text-${slug}-${vs}', $attrs.class]">\n    <slot />\n  </p>\n</template>`;
      // Cycle through formats: CSS → React → Vue
      const existing = copyBtn._copyFormat || 'css';
      let content, label, next;
      if (existing === 'css')   { content = cssLines.join('\n'); label = 'CSS';   next = 'react'; }
      else if (existing === 'react') { content = reactSnippet;       label = 'React'; next = 'vue';   }
      else                      { content = vueSnippet;           label = 'Vue';   next = 'css';   }
      copyBtn._copyFormat = next;
      navigator.clipboard.writeText(content).then(() => toast(`Copied ${label} snippet for ${v.role}`));
      return;
    }
  }, { signal });

  /* ── Variant numeric inputs + size steppers (live, no re-render) ── */
  function updateVariantPreview(v) {
    const wrap = document.getElementById(`vpreview-${v.id}`);
    if (!wrap) return;
    const ew    = v.weight || font.activeWeights[0] || 400;
    const sz    = v.fluid ? computeClamp(v) : v.size + 'px';
    const lines = wrap.querySelectorAll('.vp-leading-line');
    const applyStyle = span => {
      if (!span) return;
      span.style.fontSize              = sz;
      span.style.fontWeight            = ew;
      span.style.lineHeight            = v.leading;
      span.style.letterSpacing         = v.kerning + 'px';
      span.style.fontVariationSettings = v.variationSettings || '';
      span.style.textTransform         = v.textTransform  || 'none';
      span.style.textDecoration        = v.textDecoration || 'none';
      span.style.fontStyle             = v.fontStyle      || 'normal';
      if (v.sampleText !== undefined) span.textContent = v.sampleText || font.sampleText;
    };
    lines.forEach(applyStyle);
    // Update leading badge
    const badge = wrap.querySelector('.vp-leading-badge');
    if (badge) badge.textContent = `lh ${v.leading}`;
    const card = fontEl.querySelector(`.variant-card[data-vid="${v.id}"]`);
    if (card) {
      const sizeBadge = card.querySelector('.variant-size-badge');
      if (sizeBadge) sizeBadge.textContent = `${v.size}px · ${ew}`;
    }
  }

  fontEl.addEventListener('input', e => {
    // Variant inputs
    const vinput = e.target.dataset.vinput;
    const vid    = e.target.dataset.vid;
    if (vinput && vid) {
      const v = (font.variants || []).find(v => v.id === vid);
      if (!v) return;
      pushFontHistoryOnce();
      if (vinput === 'size')          { v.size          = Math.max(8, Math.min(200, parseInt(e.target.value) || 16)); }
      else if (vinput === 'leading')  { v.leading        = Math.max(0.8, Math.min(3, parseFloat(e.target.value) || 1.5)); }
      else if (vinput === 'kerning')  { v.kerning        = Math.max(-10, Math.min(40, parseFloat(e.target.value) || 0)); }
      else if (vinput === 'docs')     { v.docs           = e.target.value; }
      if (!['docs','sampleText','variationSettings'].includes(vinput)) updateVariantPreview(v);
      if (vinput === 'fluidMinSize' || vinput === 'fluidMaxSize' || vinput === 'fluidMinVp' || vinput === 'fluidMaxVp') {
        const formulaEl = document.getElementById(`fluid-formula-${vid}`);
        if (formulaEl) formulaEl.textContent = computeClamp(v);
      }
      renderCanvas();
      return;
    }

    // Variable font axis sliders
    if (e.target.dataset.vfaxis) {
      const axis = e.target.dataset.vfaxis;
      const vid  = e.target.dataset.vid;
      const v    = (font.variants || []).find(v => v.id === vid);
      if (!v) return;
      const val = parseFloat(e.target.value);
      v.variationSettings = setAxisValue(v.variationSettings, axis, val);
      const valEl = document.getElementById(`vfval-${vid}-${axis}`);
      if (valEl) valEl.textContent = val;
      updateVariantPreview(v);
      renderCanvas();
      return;
    }

    // Custom role name input
    if (e.target.dataset.customRole !== undefined) {
      const v = (font.variants || []).find(v => v.id === e.target.dataset.vid);
      if (v) { v.role = e.target.value; renderCanvas(); }
      return;
    }

  }, { signal });

  /* Stepper +/− buttons for all variant fields */
  fontEl.addEventListener('click', e => {
    const dec = e.target.closest('[data-vdec]');
    const inc = e.target.closest('[data-vinc]');
    if (!dec && !inc) return;
    const btn   = dec || inc;
    const field = btn.dataset.vdec ?? btn.dataset.vinc;
    const vid   = btn.dataset.vid;
    const v     = (font.variants || []).find(v => v.id === vid);
    if (!v) return;
    pushFontHistoryOnce();
    const dir = dec ? -1 : 1;
    // Handle responsive size steppers
    if (field && field.startsWith('resp_')) {
      const bp = field.slice(5);
      if (!v.responsiveSizes) v.responsiveSizes = {};
      const cur = v.responsiveSizes[bp] || v.size;
      v.responsiveSizes[bp] = Math.max(8, Math.min(200, cur + dir));
      const input = fontEl.querySelector(`[data-vinput="${field}"][data-vid="${vid}"]`);
      if (input) input.value = v.responsiveSizes[bp];
      renderCanvas();
      return;
    }

    // Handle fluid viewport steppers
    if (field === 'fluidMinVp' || field === 'fluidMaxVp') {
      v[field] = Math.max(320, Math.min(3840, (v[field] || 320) + dir * 80));
      const input = fontEl.querySelector(`[data-vinput="${field}"][data-vid="${vid}"]`);
      if (input) input.value = v[field];
      const formulaEl = document.getElementById(`fluid-formula-${vid}`);
      if (formulaEl) formulaEl.textContent = computeClamp(v);
      return;
    }

    const steps = { size: 1, leading: 0.05, kerning: 0.5, fluidMinSize: 1, fluidMaxSize: 1, paragraphSpacing: 1, measure: 1 };
    const clamps = {
      size:          [8,   200],
      leading:       [0.8, 3  ],
      kerning:       [-10, 40 ],
      fluidMinSize:  [8,   200],
      fluidMaxSize:  [8,   200],
      paragraphSpacing:[0, 120],
      measure:       [0,  200 ],
    };
    const step  = steps[field]  ?? 1;
    const [mn, mx] = clamps[field] ?? [-Infinity, Infinity];
    const raw   = parseFloat((v[field] ?? 0).toFixed(4));
    v[field]    = parseFloat(Math.max(mn, Math.min(mx, raw + dir * step)).toFixed(2));
    // Sync the input
    const input = fontEl.querySelector(`[data-vinput="${field}"][data-vid="${vid}"]`);
    if (input) input.value = v[field];
    updateVariantPreview(v);
    renderCanvas();
  }, { capture: true, signal });

  /* ── Canvas Preview controls ── */
  let _cpHistPushed = false;
  const pushCPHistOnce = () => { if (!_cpHistPushed) { pushHistory(); _cpHistPushed = true; } };

  function applyPreviewProp(field, val, clamp) {
    val = parseFloat(Math.max(clamp[0], Math.min(clamp[1], val)).toFixed(2));
    font[field] = val;
    // Sync both swatch lines
    [document.getElementById('prop-swatch-text'), document.getElementById('prop-swatch-text-2')].forEach(sw => {
      if (!sw) return;
      if (field === 'previewSize')   sw.style.fontSize      = val + 'px';
      if (field === 'leading')       sw.style.lineHeight    = val;
      if (field === 'kerning')       sw.style.letterSpacing = val + 'px';
    });
    // Update leading badge
    if (field === 'leading') {
      const badge = document.getElementById('prop-swatch-lh-badge');
      if (badge) badge.textContent = `lh ${val}`;
    }
    const inputMap = { previewSize: 'prop-size-input', leading: 'prop-leading-input', kerning: 'prop-kerning-input' };
    const inputEl = document.getElementById(inputMap[field]);
    if (inputEl) inputEl.value = val;
    renderCanvas();
  }

  const cpFields = [
    { dec: 'size-dec',      inc: 'size-inc',      input: 'prop-size-input',     field: 'previewSize',   step: 1,    clamp: [8,   200] },
    { dec: 'leading-dec',   inc: 'leading-inc',   input: 'prop-leading-input',  field: 'leading',       step: 0.05, clamp: [0.8, 3  ] },
    { dec: 'kerning-dec',   inc: 'kerning-inc',   input: 'prop-kerning-input',  field: 'kerning',       step: 0.5,  clamp: [-10, 40 ] },
  ];
  cpFields.forEach(({ dec, inc, input, field, step, clamp }) => {
    document.getElementById(dec).addEventListener('click', () => { pushCPHistOnce(); applyPreviewProp(field, (font[field] ?? 0) - step, clamp); });
    document.getElementById(inc).addEventListener('click', () => { pushCPHistOnce(); applyPreviewProp(field, (font[field] ?? 0) + step, clamp); });
    const el = document.getElementById(input);
    el.addEventListener('focus', () => { _cpHistPushed = false; });
    el.addEventListener('blur',  () => { _cpHistPushed = false; });
    el.addEventListener('input', e => { pushCPHistOnce(); applyPreviewProp(field, parseFloat(e.target.value) || (font[field] ?? 0), clamp); });
  });

  const sampleTextEl = document.getElementById('prop-sample-text');
  sampleTextEl.addEventListener('focus', () => { _cpHistPushed = false; });
  sampleTextEl.addEventListener('blur',  () => { _cpHistPushed = false; });
  sampleTextEl.addEventListener('input', e => {
    pushCPHistOnce();
    font.sampleText = e.target.value;
    ['prop-swatch-text','prop-swatch-text-2'].forEach(id => {
      const sw = document.getElementById(id); if (sw) sw.textContent = e.target.value;
    });
    fontEl.querySelectorAll('[id^="vpreview-"] .vp-leading-line').forEach(span => { span.textContent = e.target.value; });
    renderCanvas();
  });

  /* ── Variant drag-to-reorder ── */
  (function() {
    const list = document.getElementById('variants-list');
    if (!list) return;
    let dragSrc = null;
    list.querySelectorAll('.variant-drag-handle').forEach(handle => {
      handle.addEventListener('mousedown', () => {
        handle.closest('.variant-card').draggable = true;
      });
    });
    list.addEventListener('dragstart', e => {
      const card = e.target.closest('.variant-card');
      if (!card) return;
      dragSrc = card;
      card.style.opacity = '0.4';
      e.dataTransfer.effectAllowed = 'move';
    });
    list.addEventListener('dragover', e => {
      e.preventDefault();
      const target = e.target.closest('.variant-card');
      if (!target || target === dragSrc) return;
      list.querySelectorAll('.variant-card').forEach(c => c.classList.remove('drag-over-top','drag-over-bottom'));
      const rect = target.getBoundingClientRect();
      target.classList.add(e.clientY < rect.top + rect.height / 2 ? 'drag-over-top' : 'drag-over-bottom');
    });
    list.addEventListener('drop', e => {
      e.preventDefault();
      const target = e.target.closest('.variant-card');
      if (!target || target === dragSrc) return;
      const rect = target.getBoundingClientRect();
      if (e.clientY < rect.top + rect.height / 2) target.before(dragSrc);
      else target.after(dragSrc);
      // Sync font.variants order from DOM
      const newOrder = [...list.querySelectorAll('[data-vid]')].map(c => c.dataset.vid);
      font.variants = newOrder.map(id => font.variants.find(v => v.id === id)).filter(Boolean);
      list.querySelectorAll('.variant-card').forEach(c => c.classList.remove('drag-over-top','drag-over-bottom'));
    });
    list.addEventListener('dragend', () => {
      list.querySelectorAll('.variant-card').forEach(c => {
        c.style.opacity = '';
        c.draggable = false;
        c.classList.remove('drag-over-top','drag-over-bottom');
      });
      dragSrc = null;
    });
  })();

  /* ── Weight toggles ── */
  fontEl.querySelectorAll('.weight-toggle').forEach(btn => {
    btn.addEventListener('click', () => toggleWeight(selectedId, parseInt(btn.dataset.weight)));
  });

  /* ── Remove font ── */
  document.getElementById('prop-remove-btn').addEventListener('click', () => removeFont(selectedId));
}

/* ══════════════════════════════════════════════════════
   RENDER — COLOR CANVAS
══════════════════════════════════════════════════════ */
function renderColorCanvas() {
  const section = document.getElementById('canvas-colors-section');
  const grid    = document.getElementById('palette-grid');
  const badge   = document.getElementById('palette-badge');

  badge.textContent = state.palettes.length;

  if (state.palettes.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');

  grid.innerHTML = state.palettes.map(palette => {
    const isSel = state.selectedId === palette.id && state.selectedType === 'palette';
    return `
      <div class="palette-card ${isSel ? 'selected' : ''}" data-palette-id="${palette.id}">
        <div class="palette-card-top">
          <div class="palette-card-meta">
            <span class="palette-card-name">${escHtml(palette.name)}</span>
            <span class="palette-card-tag">${palette.colors.length} shades</span>
          </div>
          <div style="display:flex;align-items:center;gap:4px">
            <div class="card-copy-btn-wrap">
              <button class="card-copy-btn" data-copy-type="palette" data-copy-id="${palette.id}" title="Copy token code">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M1.5 7.5V1.5h6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
              </button>
              <div class="card-copy-menu hidden" data-copy-menu="${palette.id}">
                <button data-fmt="css">CSS var</button>
                <button data-fmt="scss">SCSS var</button>
                <button data-fmt="js">JS</button>
                <button data-fmt="tailwind">Tailwind</button>
              </div>
            </div>
            <button class="card-action-btn" data-dup-palette-id="${palette.id}" title="Duplicate palette">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="3.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/></svg>
            </button>
            <button class="palette-remove-btn" data-remove-palette-id="${palette.id}" title="Remove palette">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1.5 1.5L9.5 9.5M9.5 1.5L1.5 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="palette-swatches">
          ${palette.colors.map(c => `
            <div class="palette-swatch" style="background:${c.hex}" data-copy-hex="${c.hex}" title="Click to copy ${c.hex}">
              <span class="swatch-stop" style="color:${getContrastColor(c.hex)}">${c.stop}</span>
              <span class="swatch-hex"  style="color:${getContrastColor(c.hex)}">${c.hex}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* ══════════════════════════════════════════════════════
   RENDER — COLOR PROPERTIES
══════════════════════════════════════════════════════ */
function renderColorProperties() {
  const emptyEl = document.getElementById('props-empty');
  const panel   = document.getElementById('props-font');

  const palette = state.palettes.find(p => p.id === state.selectedId);
  if (!palette) {
    emptyEl.classList.remove('hidden');
    panel.classList.add('hidden');
    return;
  }

  emptyEl.classList.add('hidden');
  panel.classList.remove('hidden');

  panel.innerHTML = `
    <div class="prop-section">
      <span class="prop-section-label">Palette</span>
      <div class="prop-field">
        <label>Name</label>
        <input class="prop-input" type="text" id="prop-palette-name"
               value="${escHtml(palette.name)}" placeholder="Palette name">
      </div>
      <div class="prop-info-row shade-stepper-row" style="margin-top:8px">
        <span class="prop-info-label">Shades</span>
        <div class="shade-stepper">
          <button class="shade-step-btn" id="shade-dec" ${palette.shadeCount <= MIN_SHADES ? 'disabled' : ''}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5H8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>
          <span class="shade-step-val">${palette.shadeCount}</span>
          <button class="shade-step-btn" id="shade-inc" ${palette.shadeCount >= MAX_SHADES ? 'disabled' : ''}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 2V8M2 5H8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="prop-divider"></div>

    <div class="prop-section">
      <span class="prop-section-label">Base Color</span>
      <div class="props-color-row">
        <div class="props-color-swatch" id="props-color-swatch" style="background:${palette.baseHex}" title="Click to pick color"></div>
        <div class="props-hex-wrap">
          <span class="props-hex-label">HEX</span>
          <input type="text" class="props-hex-input" id="props-hex-input"
                 value="${palette.baseHex}" maxlength="7" spellcheck="false">
        </div>
      </div>
      <button class="regen-btn" id="props-regen-btn">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M10 6A4 4 0 1 1 6 2M6 2L8.5 4.5M6 2L3.5 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Regenerate Scale
      </button>
    </div>

    <div class="prop-divider"></div>

    <!-- Color Space -->
    <div class="prop-section">
      <span class="prop-section-label">Color Space</span>
      <div class="option-col-picker">
        <button class="option-col-btn ${(palette.colorSpace||'hsl')==='hsl' ? 'active' : ''}" data-props-cs="hsl">HSL</button>
        <button class="option-col-btn ${(palette.colorSpace||'hsl')==='oklch' ? 'active' : ''}" data-props-cs="oklch">OKLCH</button>
      </div>
      <div style="font-size:10.5px;color:var(--text-3);margin-top:5px">${palette.colorSpace==='oklch' ? 'Perceptually uniform — equal visual steps' : 'Standard HSL-based scale generation'}</div>
    </div>

    <div class="prop-divider"></div>

    <div class="prop-section">
      <span class="prop-section-label">Shades</span>
      <div class="props-shades-list">
        ${palette.colors.map(c => `
          <div class="props-shade-row" data-shade-stop="${c.stop}" data-shade-hex="${c.hex}">
            <div class="props-shade-swatch" style="background:${c.hex}" data-copy-hex="${c.hex}" title="Click to copy ${c.hex}"></div>
            <span class="props-shade-stop">${c.stop}</span>
            <input class="props-shade-edit" type="text" value="${c.hex}" maxlength="7" data-edit-stop="${c.stop}" title="Edit stop hex">
            <span class="props-shade-copy" title="Copy hex">Copy</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="prop-divider"></div>

    <!-- State Colors (auto-derived + overridable) -->
    <div class="prop-section">
      <span class="prop-section-label">State Colors</span>
      ${(() => {
        const base = palette.colors.find(c => c.stop === 500) || palette.colors[Math.floor(palette.colors.length/2)];
        if (!base) return '<div style="font-size:11px;color:var(--text-3)">Add more shades for state derivation</div>';
        const idx     = palette.colors.findIndex(c => c.stop === base.stop);
        const autoH   = palette.colors[Math.max(0, idx - 1)]?.hex || base.hex;
        const autoA   = palette.colors[Math.min(palette.colors.length - 1, idx + 1)]?.hex || base.hex;
        const ov      = palette.stateOverrides || {};
        const states  = [
          { key: 'default',  label: 'Default',  hex: base.hex,           editable: false },
          { key: 'hover',    label: 'Hover',     hex: ov.hover  || autoH, editable: true },
          { key: 'active',   label: 'Active',    hex: ov.active || autoA, editable: true },
          { key: 'focus',    label: 'Focus',     hex: ov.focus  || base.hex, editable: true },
          { key: 'disabled', label: 'Disabled',  hex: ov.disabled || base.hex + '66', editable: true },
        ];
        return `<div class="state-colors-grid">
          ${states.map(s => `
            <div class="state-color-row">
              <div class="state-color-swatch" style="background:${s.hex}"></div>
              <span class="state-color-label">${s.label}</span>
              ${s.editable
                ? `<input class="state-color-edit" type="text" value="${s.hex}" maxlength="9"
                          data-state-key="${s.key}" title="Click to override">`
                : `<span class="state-color-hex">${s.hex}</span>`}
              ${s.editable && ov[s.key] ? `<button class="state-color-reset" data-state-key="${s.key}" title="Reset to auto">↺</button>` : ''}
            </div>
          `).join('')}
        </div>`;
      })()}
    </div>

    <div class="prop-divider"></div>

    <!-- Semantic Roles -->
    <div class="prop-section">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${palette.semanticRolesEnabled ? '10px' : '0'}">
        <div style="display:flex;align-items:center;gap:6px">
          <span class="prop-section-label" style="margin-bottom:0">Semantic Roles</span>
          <svg class="semantic-roles-info" id="sr-tooltip-trigger" width="13" height="13" viewBox="0 0 14 14" fill="none" style="cursor:help;color:var(--text-3)">
            <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.3"/>
            <path d="M7 6v4M7 4.5v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
        <div class="option-toggle-track ${palette.semanticRolesEnabled ? 'on' : ''}" id="semantic-roles-toggle" style="cursor:pointer">
          <div class="option-toggle-thumb"></div>
        </div>
      </div>

      ${palette.semanticRolesEnabled ? `
        <div class="semantic-roles-grid">
          ${[
            ['Background', ['primary','secondary','muted']],
            ['Text',       ['primary','secondary','disabled']],
            ['Border',     ['default','subtle']],
            ['Action',     ['default','hover']],
          ].map(([group, roles]) => roles.map(role => {
            const key   = `${group.toLowerCase()}.${role}`;
            const light = palette.roles?.[key]?.light ?? '';
            const dark  = palette.roles?.[key]?.dark  ?? '';
            const stopOpts = palette.colors.map(c => `<option value="${c.stop}" ${light === c.stop ? 'selected' : ''}>${c.stop}</option>`).join('');
            const darkOpts = palette.colors.map(c => `<option value="${c.stop}" ${dark === c.stop ? 'selected' : ''}>${c.stop}</option>`).join('');
            const hasValue = light !== '' || dark !== '';
            return `<div class="semantic-role-row">
              <span class="semantic-role-key">${escHtml(key)}</span>
              <div class="semantic-role-vals">
                <select class="prop-input semantic-role-select" data-role-key="${escHtml(key)}" data-role-mode="light" title="🌞 Light mode">
                  <option value="">—</option>${stopOpts}
                </select>
                <select class="prop-input semantic-role-select" data-role-key="${escHtml(key)}" data-role-mode="dark" title="🌙 Dark mode">
                  <option value="">—</option>${darkOpts}
                </select>
                ${hasValue ? `<button class="semantic-role-remove" data-remove-role="${escHtml(key)}" title="Remove role">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                </button>` : ''}
              </div>
            </div>`;
          }).join('')).join('')}
        </div>
      ` : ''}
    </div>

    <div class="prop-divider"></div>

    <!-- Token Aliases -->
    ${(() => {
      const refs = state.semantics.filter(t => t.category === 'color' && (t.reference||'').includes(palette.name));
      if (!refs.length) return '';
      return `<div class="prop-section">
        <span class="prop-section-label">Referenced By Tokens</span>
        <div style="display:flex;flex-direction:column;gap:4px">
          ${refs.map(t => `<div style="display:flex;align-items:center;justify-content:space-between;padding:5px 8px;background:var(--bg);border:1px solid var(--border);border-radius:6px">
            <span style="font-size:11px;font-family:'JetBrains Mono',monospace;color:var(--text-2)">${escHtml(t.name)}</span>
            <span style="font-size:10px;color:var(--text-3)">${escHtml(t.reference)}</span>
          </div>`).join('')}
        </div>
      </div>
      <div class="prop-divider"></div>`;
    })()}

    <div class="prop-divider"></div>

    <!-- WCAG Contrast Checker -->
    <div class="prop-section">
      <span class="prop-section-label">Contrast Checker (WCAG)</span>
      <div class="contrast-checker">
        <div class="contrast-select-wrap" style="margin-bottom:8px">
          <label>Foreground</label>
          <select class="prop-input" id="contrast-fg-select">
            ${palette.colors.map(c => `<option value="${c.hex}">${c.stop} — ${c.hex}</option>`).join('')}
          </select>
        </div>
        <div class="contrast-select-wrap" style="margin-bottom:10px">
          <label>Background</label>
          <select class="prop-input" id="contrast-bg-select">
            ${[...palette.colors].reverse().map(c => `<option value="${c.hex}">${c.stop} — ${c.hex}</option>`).join('')}
          </select>
        </div>
        <div class="contrast-result" id="contrast-result"></div>
      </div>
    </div>

    <div class="prop-divider"></div>

    <!-- Color Harmonies -->
    <div class="prop-section">
      <span class="prop-section-label">Color Harmonies</span>
      <div class="harmony-grid" id="harmony-grid">
        ${Object.entries(getHarmonies(palette.baseHex)).map(([name, hexes]) => `
          <div class="harmony-row" data-harmony-hexes="${escHtml(hexes.join(','))}" data-harmony-name="${escHtml(name)}" title="Click to add to canvas">
            <span class="harmony-label">${name.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}</span>
            <div class="harmony-swatches">
              ${hexes.map(h => `<div class="harmony-swatch" style="background:${h}" data-copy-hex="${h}" title="Click to copy ${h}"></div>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="prop-divider"></div>

    <div class="prop-divider"></div>
    <div class="prop-section">
      <span class="prop-section-label">Usage Notes</span>
      <textarea class="prop-notes-input" data-notes-id="${palette.id}" data-notes-type="palette" placeholder="Describe when to use this palette…" rows="3">${escHtml(palette.notes||'')}</textarea>
    </div>

    <div class="danger-section" style="display:flex;gap:8px">
      <button class="prop-fork-btn" id="prop-fork-palette-btn" title="Fork this palette with a +30° hue shift">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 1v3M3 4C3 7 9 7 9 10M9 10V7M3 4c0 3 6 3 6 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="3" cy="1" r="1.2" fill="currentColor"/>
          <circle cx="9" cy="7" r="1.2" fill="currentColor"/>
        </svg>
        Fork Palette
      </button>
      <button class="danger-btn" id="prop-remove-palette-btn" style="flex:1">Remove Palette</button>
    </div>
  `;

  const pid = palette.id;

  document.getElementById('shade-dec').addEventListener('click', () => adjustShadeCount(pid, -1));
  document.getElementById('shade-inc').addEventListener('click', () => adjustShadeCount(pid, +1));

  let _paletteNameHistoryPushed = false;
  document.getElementById('prop-palette-name').addEventListener('focus', () => { _paletteNameHistoryPushed = false; });
  document.getElementById('prop-palette-name').addEventListener('blur',  () => { _paletteNameHistoryPushed = false; });
  document.getElementById('prop-palette-name').addEventListener('input', e => {
    if (!_paletteNameHistoryPushed) { pushHistory(); _paletteNameHistoryPushed = true; }
    updatePaletteField(pid, 'name', e.target.value);
    const nameEl = document.querySelector(`.palette-card[data-palette-id="${pid}"] .palette-card-name`);
    if (nameEl) nameEl.textContent = e.target.value;
  });

  const hexInput = document.getElementById('props-hex-input');
  const swatchEl = document.getElementById('props-color-swatch');

  const syncColor = hex => {
    if (!isValidHex(hex)) return;
    hexInput.value = hex;
    swatchEl.style.background = hex;
    updatePaletteField(pid, 'baseHex', hex);
  };

  let _hexHistoryPushed = false;
  hexInput.addEventListener('focus', () => { _hexHistoryPushed = false; });
  hexInput.addEventListener('blur',  () => { _hexHistoryPushed = false; });
  hexInput.addEventListener('input', e => {
    if (!_hexHistoryPushed) { pushHistory(); _hexHistoryPushed = true; }
    if (isValidHex(e.target.value)) syncColor(e.target.value);
  });
  swatchEl.addEventListener('click', () => {
    pushHistory();
    openColorPicker(palette.baseHex, hex => syncColor(hex));
  });

  document.getElementById('props-regen-btn').addEventListener('click', () => {
    updatePaletteField(pid, 'baseHex', palette.baseHex);
    toast('Scale regenerated');
  });

  document.getElementById('prop-remove-palette-btn').addEventListener('click', () => removePalette(pid));

  document.getElementById('prop-fork-palette-btn').addEventListener('click', () => {
    pushHistory();
    const { h, s, l } = hexToHsl(palette.baseHex);
    const newHex = hslToHex((h + 30 + 360) % 360, s, l);
    const forked = JSON.parse(JSON.stringify(palette));
    forked.id           = uid();
    forked.name         = palette.name + ' Fork';
    forked.baseHex      = newHex;
    forked.customStops  = {};
    forked.colors       = generateColorScaleForPalette(forked);
    state.palettes.push(forked);
    state.selectedId    = forked.id;
    state.selectedType  = 'palette';
    renderAll();
    toast(`Forked "${palette.name}" with +30° hue shift`);
  });

  /* ── Color space toggle ── */
  panel.querySelectorAll('[data-props-cs]').forEach(btn => {
    btn.addEventListener('click', () => {
      pushHistory();
      palette.colorSpace = btn.dataset.propsCs;
      palette.colors = generateColorScaleForPalette(palette);
      renderColorCanvas();
      renderColorProperties();
    });
  });

  /* ── Per-stop hex editing ── */
  panel.querySelectorAll('.props-shade-edit').forEach(input => {
    input.addEventListener('blur', e => {
      const stop = parseInt(input.dataset.editStop);
      const val  = e.target.value.trim();
      if (!isValidHex(val)) { input.value = palette.colors.find(c => c.stop === stop)?.hex || ''; return; }
      pushHistory();
      if (!palette.customStops) palette.customStops = {};
      palette.customStops[stop] = val;
      palette.colors = generateColorScaleForPalette(palette);
      renderColorCanvas();
      renderColorProperties();
    });
    input.addEventListener('keydown', e => { if (e.key === 'Enter') input.blur(); });
  });

  /* ── Swatch click = copy hex ── */

  /* ── Smart tooltip for semantic roles info ──
     Listeners attach ONCE globally (guarded) — they were previously re-added
     on every palette render, leaking a new pair of document listeners each time. */
  (function() {
    const popup = document.getElementById('sr-tooltip-popup');
    if (!popup) return;
    popup.innerHTML = `<strong>Semantic Roles</strong> map raw palette stops to named purposes.<br><br>
      <em>Example:</em> <code>background.primary</code> → stop 50 🌞 / stop 900 🌙<br><br>
      Engineers write <code>--color-background-primary</code> instead of <code>--color-brand-50</code> — theming and rebranding become trivial.<br><br>
      Pick a <strong>light</strong> and <strong>dark</strong> stop for each role, then export.`;

    if (window.__srTooltipBound) return;   // guard: bind document listeners only once
    window.__srTooltipBound = true;

    document.addEventListener('mouseenter', e => {
      const trigger = e.target.closest?.('#sr-tooltip-trigger');
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      const vw = window.innerWidth, vh = window.innerHeight;
      const TW = 230, TH = 170;
      let left = rect.right + 8;
      let top  = rect.top;
      if (left + TW > vw - 12) left = rect.left - TW - 8;
      if (top + TH > vh - 12) top = vh - TH - 12;
      if (top < 8) top = 8;
      popup.style.left = left + 'px';
      popup.style.top  = top  + 'px';
      popup.classList.add('visible');
    }, true);

    document.addEventListener('mouseleave', e => {
      if (e.target.closest?.('#sr-tooltip-trigger')) popup.classList.remove('visible');
    }, true);
  })();

  /* ── State color overrides ── */
  panel.querySelectorAll('.state-color-edit').forEach(input => {
    input.addEventListener('blur', e => {
      const key = input.dataset.stateKey;
      const val = e.target.value.trim();
      if (!palette.stateOverrides) palette.stateOverrides = {};
      if (isValidHex(val) || (val.length === 9 && isValidHex(val.slice(0, 7)))) {
        palette.stateOverrides[key] = val;
        input.style.borderColor = 'var(--accent)';
      } else {
        input.style.borderColor = 'var(--red)';
      }
    });
    input.addEventListener('keydown', e => { if (e.key === 'Enter') input.blur(); });
  });
  panel.querySelectorAll('.state-color-reset').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.stateKey;
      if (palette.stateOverrides) delete palette.stateOverrides[key];
      renderColorProperties();
    });
  });

  /* ── Semantic roles toggle ── */
  document.getElementById('semantic-roles-toggle')?.addEventListener('click', () => {
    palette.semanticRolesEnabled = !palette.semanticRolesEnabled;
    renderColorProperties();
  });

  /* ── Semantic role selects ── */
  panel.querySelectorAll('.semantic-role-select').forEach(sel => {
    sel.addEventListener('change', () => {
      const key  = sel.dataset.roleKey;
      const mode = sel.dataset.roleMode;
      const val  = sel.value ? parseInt(sel.value) : '';
      if (!palette.roles) palette.roles = {};
      if (!palette.roles[key]) palette.roles[key] = {};
      palette.roles[key][mode] = val;
    });
  });

  /* ── Semantic role remove buttons ── */
  panel.querySelectorAll('.semantic-role-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.removeRole;
      if (palette.roles) delete palette.roles[key];
      renderColorProperties();
    });
  });

  /* ── WCAG Contrast ── */
  function updateContrastResult() {
    const fg    = document.getElementById('contrast-fg-select').value;
    const bg    = document.getElementById('contrast-bg-select').value;
    const ratio = contrastRatio(fg, bg);
    const aaLg  = ratio >= 3;
    const aaNm  = ratio >= 4.5;
    const aaaLg = ratio >= 4.5;
    const aaaNm = ratio >= 7;
    document.getElementById('contrast-result').innerHTML = `
      <div class="contrast-swatch-pair">
        <div class="contrast-swatch-a" style="background:${fg}" data-copy-hex="${fg}" title="Click to copy ${fg}"></div>
        <div class="contrast-swatch-b" style="background:${bg}" data-copy-hex="${bg}" title="Click to copy ${bg}"></div>
      </div>
      <div class="contrast-score-col">
        <div class="contrast-ratio">${ratio}:1</div>
        <div class="contrast-badges">
          <div class="contrast-badge ${aaNm  ? 'pass' : 'fail'}">
            <div class="contrast-badge-dot"></div>AA Normal
          </div>
          <div class="contrast-badge ${aaLg  ? 'pass' : 'fail'}">
            <div class="contrast-badge-dot"></div>AA Large
          </div>
          <div class="contrast-badge ${aaaNm ? 'pass' : 'fail'}">
            <div class="contrast-badge-dot"></div>AAA Normal
          </div>
          <div class="contrast-badge ${aaaLg ? 'pass' : 'fail'}">
            <div class="contrast-badge-dot"></div>AAA Large
          </div>
        </div>
      </div>
    `;
  }
  updateContrastResult();
  document.getElementById('contrast-fg-select').addEventListener('change', updateContrastResult);
  document.getElementById('contrast-bg-select').addEventListener('change', updateContrastResult);

  /* ── Color Harmonies ── */
  panel.querySelectorAll('.harmony-row').forEach(row => {
    row.addEventListener('click', () => {
      const hexes = row.dataset.harmonyHexes.split(',');
      const name  = row.dataset.harmonyName.replace(/([A-Z])/g, ' $1').trim();
      hexes.forEach((hex, i) => {
        addPaletteSimple(`${palette.name} ${name} ${i + 1}`.trim(), hex);
      });
      toast(`Added ${hexes.length} harmony palette${hexes.length > 1 ? 's' : ''}`);
    });
  });

  panel.querySelectorAll('.props-shade-copy').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const hex = btn.closest('.props-shade-row').dataset.shadeHex;
      navigator.clipboard.writeText(hex).then(() => toast(`Copied ${hex}`));
    });
  });
}

/* ══════════════════════════════════════════════════════
   RENDER — MODAL FONT LIST
══════════════════════════════════════════════════════ */
function renderModalFontList() {
  const list     = document.getElementById('font-list');
  const countEl  = document.getElementById('font-search-count');
  const q        = state.searchQuery.toLowerCase().trim();
  const cat      = state.activeCategory;
  const addedSet = new Set(state.fonts.map(f => f.name));

  filteredModalFonts = FONT_LIBRARY.filter(f => {
    const matchCat = cat === 'all' || f.category === cat;
    const matchQ   = !q || f.name.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  countEl.textContent = `${filteredModalFonts.length} font${filteredModalFonts.length !== 1 ? 's' : ''}`;

  if (filteredModalFonts.length === 0) {
    list.innerHTML = `<div class="font-list-empty">No fonts match "${escHtml(state.searchQuery)}"</div>`;
    return;
  }

  list.innerHTML = filteredModalFonts.map((font, idx) => {
    const isAdded = addedSet.has(font.name);
    loadGoogleFont(font.name, [400, 700]);
    return `
      <div class="font-list-item ${isAdded ? 'is-added' : ''}" data-idx="${idx}">
        <div class="font-list-item-info">
          <span class="font-list-item-name" style="font-family:'${font.name}',${fallback(font.category)}">${escHtml(font.name)}</span>
          <span class="font-list-item-preview" style="font-family:'${font.name}',${fallback(font.category)}">
            The quick brown fox jumps over the lazy dog
          </span>
          <span class="font-list-item-meta">${font.category} · ${font.weights.length} weight${font.weights.length !== 1 ? 's' : ''}</span>
        </div>
        <span class="font-list-item-action">
          ${isAdded
            ? `<svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5L4.5 8.5L9.5 2.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg> Added`
            : `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1V9M1 5H9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg> Add`
          }
        </span>
      </div>
    `;
  }).join('');
}

/* ══════════════════════════════════════════════════════
   SYSTEM FONTS
══════════════════════════════════════════════════════ */
let _modalTab = 'all';             // 'all' | 'google' | 'system'
let _systemFonts = [];             // [{name, faces, weights, category, source}]
let _systemFontsStatus = 'idle';   // 'idle' | 'loading' | 'loaded' | 'unsupported'
let _systemFontsQuery = '';

const STYLE_WEIGHT_MAP = {
  thin: 100, extralight: 200, ultralight: 200, light: 300,
  regular: 400, normal: 400, medium: 500,
  semibold: 600, demibold: 600, bold: 700,
  extrabold: 800, ultrabold: 800, black: 900, heavy: 900,
};

const STYLE_KEYWORDS = [
  'ExtraLight','UltraLight','ExtraBold','UltraBold','SemiBold','DemiBold',
  'Thin','Light','Regular','Normal','Medium','Bold','Black','Heavy',
  'Condensed','Extended','Narrow','Wide','Oblique','Italic','Roman',
];
const STYLE_KW_RE = new RegExp(
  '[\\s_-]*(' + STYLE_KEYWORDS.join('|') + ')([\\s_-]*(Italic|Oblique))?$', 'i'
);

function styleToWeight(style) {
  const key = style.toLowerCase().replace(/[\s_-]/g, '');
  for (const [k, v] of Object.entries(STYLE_WEIGHT_MAP)) {
    if (key.includes(k)) return v;
  }
  return 400;
}

function parseFilename(filename) {
  const stem = filename.replace(/\.[^.]+$/, '');
  const family = stem.replace(STYLE_KW_RE, '').replace(/[-_]/g, ' ').trim() || stem;
  const weight = styleToWeight(stem);
  const isItalic = /italic|oblique/i.test(stem);
  return { family, weight, isItalic };
}

function _groupFontFiles(files, source = 'system') {
  const familyMap = new Map();
  for (const { filename, path: filePath } of files) {
    const { family, weight, isItalic } = parseFilename(filename);
    if (!familyMap.has(family)) familyMap.set(family, { faces: [], weights: new Set(), paths: [] });
    const entry = familyMap.get(family);
    entry.faces.push({ style: isItalic ? 'Italic' : 'Regular', weight });
    entry.weights.add(weight);
    entry.paths.push({ filePath, weight, isItalic });
  }
  const result = [];
  for (const [name, { faces, weights, paths }] of familyMap) {
    // Register @font-face for each face using localfont:// protocol
    for (const { filePath, weight, isItalic } of paths) {
      const url = window.electronAPI.fontFileUrl(filePath);
      const el  = document.createElement('style');
      el.textContent = `@font-face{font-family:'${name}';src:url('${url}');font-weight:${weight};font-style:${isItalic ? 'italic' : 'normal'};}`;
      document.head.appendChild(el);
    }
    result.push({
      name, faces,
      weights: [...weights].sort((a, b) => a - b),
      category: source === 'library' ? 'Library' : 'System',
      source,
    });
  }
  return result;
}

async function requestSystemFonts() {
  _systemFontsStatus = 'loading';
  renderSystemFontList();
  try {
    if (IS_ELECTRON) {
      const files  = await window.electronAPI.getSystemFonts();
      _mergeIntoSystemFonts(_groupFontFiles(files, 'system'));
      _systemFontsStatus = 'loaded';
    } else {
      if (!('queryLocalFonts' in window)) {
        _systemFontsStatus = 'unsupported';
        renderSystemFontList();
        return;
      }
      const fonts = await window.queryLocalFonts();
      const familyMap = new Map();
      for (const f of fonts) {
        if (!familyMap.has(f.family)) familyMap.set(f.family, []);
        familyMap.get(f.family).push({ style: f.style, postscriptName: f.postscriptName });
      }
      const loaded = [...familyMap.entries()].map(([name, faces]) => {
        const weights = [...new Set(faces.map(f => styleToWeight(f.style)))].sort((a, b) => a - b);
        return { name, faces, weights, category: 'System', source: 'system' };
      });
      _mergeIntoSystemFonts(loaded);
      _systemFontsStatus = 'loaded';
    }
  } catch (err) {
    _systemFontsStatus = err.name === 'NotAllowedError' ? 'denied' : 'unsupported';
  }
  renderSystemFontList();
}

function _mergeIntoSystemFonts(incoming) {
  const existing = new Map(_systemFonts.map(f => [f.name, f]));
  for (const font of incoming) {
    if (!existing.has(font.name)) existing.set(font.name, font);
  }
  _systemFonts = [...existing.values()].sort((a, b) => a.name.localeCompare(b.name));
}

function registerFontBlob(blob, family, weight, isItalic, source) {
  const url = URL.createObjectURL(blob);
  const el  = document.createElement('style');
  el.textContent = `@font-face {
    font-family: '${family}';
    src: url('${url}');
    font-weight: ${weight};
    font-style: ${isItalic ? 'italic' : 'normal'};
  }`;
  document.head.appendChild(el);
  return url;
}

function registerLocalFontFile(file, source = 'local') {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const { family, weight, isItalic } = parseFilename(file.name);
      const blob = new Blob([e.target.result]);
      registerFontBlob(blob, family, weight, isItalic, source);
      resolve({ name: family, category: source === 'library' ? 'Library' : 'Local',
                source, weights: [weight], faces: [{ style: isItalic ? 'Italic' : 'Regular', weight }] });
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

async function scanDirForFonts(dirHandle, depth = 0) {
  if (depth > 4) return [];
  const FONT_EXT = new Set(['.ttf', '.otf', '.woff', '.woff2']);
  const files = [];
  for await (const [name, entry] of dirHandle.entries()) {
    const ext = '.' + name.split('.').pop().toLowerCase();
    if (entry.kind === 'file' && FONT_EXT.has(ext)) {
      files.push(entry);
    } else if (entry.kind === 'directory') {
      files.push(...await scanDirForFonts(entry, depth + 1));
    }
  }
  return files;
}

async function linkFontLibrary() {
  if (IS_ELECTRON) {
    const result = await window.electronAPI.showFolderDialog();
    if (!result) return;
    _systemFontsStatus = 'loading';
    renderSystemFontList();
    const incoming = _groupFontFiles(result.files, 'library');
    if (!incoming.length) {
      toast('No font files found in that folder');
      _systemFontsStatus = _systemFonts.length ? 'loaded' : 'idle';
      renderSystemFontList();
      return;
    }
    _mergeIntoSystemFonts(incoming);
    _systemFontsStatus = 'loaded';
    renderSystemFontList();
    toast(`Linked ${incoming.length} font${incoming.length !== 1 ? 's' : ''} from "${result.folderName}"`);
    return;
  }

  // Browser fallback
  if (!('showDirectoryPicker' in window)) {
    toast('Directory picker not supported — try Chrome or Edge');
    return;
  }
  let dirHandle;
  try {
    dirHandle = await window.showDirectoryPicker({ mode: 'read' });
  } catch (err) {
    if (err.name !== 'AbortError') toast('Could not open folder');
    return;
  }
  _systemFontsStatus = 'loading';
  renderSystemFontList();
  try {
    const fileHandles = await scanDirForFonts(dirHandle);
    if (!fileHandles.length) {
      toast('No font files found in that folder');
      _systemFontsStatus = _systemFonts.length ? 'loaded' : 'idle';
      renderSystemFontList();
      return;
    }
    const familyMap = new Map();
    for (const fh of fileHandles) {
      const file = await fh.getFile();
      const { family, weight, isItalic } = parseFilename(file.name);
      if (!familyMap.has(family)) familyMap.set(family, { faces: [], weights: new Set() });
      familyMap.get(family).faces.push({ style: isItalic ? 'Italic' : 'Regular', weight });
      familyMap.get(family).weights.add(weight);
      const buf = await file.arrayBuffer();
      registerFontBlob(new Blob([buf]), family, weight, isItalic, 'library');
    }
    const incoming = [...familyMap.entries()].map(([name, { faces, weights }]) => ({
      name, faces, weights: [...weights].sort((a, b) => a - b), category: 'Library', source: 'library',
    }));
    _mergeIntoSystemFonts(incoming);
    _systemFontsStatus = 'loaded';
    renderSystemFontList();
    toast(`Linked ${incoming.length} font${incoming.length !== 1 ? 's' : ''} from "${dirHandle.name}"`);
  } catch {
    toast('Error reading font folder');
    _systemFontsStatus = _systemFonts.length ? 'loaded' : 'idle';
    renderSystemFontList();
  }
}

const _SVG_MONITOR = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="2" width="18" height="14" rx="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M7 20H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M11 16V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const _SVG_FOLDER  = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 6C2 4.9 2.9 4 4 4H9L11 6H18C19.1 6 20 6.9 20 8V17C20 18.1 19.1 19 18 19H4C2.9 19 2 18.1 2 17V6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
const _SVG_UPLOAD  = `<svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1V9M3.5 3.5L6.5 1L9.5 3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 10.5V11.5C1 11.776 1.224 12 1.5 12H11.5C11.776 12 12 11.776 12 11.5V10.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;

function _sfgSourceLabel(source) {
  if (source === 'library') return 'Library';
  if (source === 'local')   return 'Local';
  return 'System';
}

function renderAllFontsList() {
  const list     = document.getElementById('font-list');
  const countEl  = document.getElementById('font-search-count');
  const q        = (state.searchQuery || _systemFontsQuery || '').toLowerCase().trim();
  const addedSet = new Set(state.fonts.map(f => f.name));

  // Combine Google + any loaded system/local fonts
  const googleFonts = FONT_LIBRARY.map(f => ({ ...f, _src: 'google' }));
  const sysFonts    = _systemFonts.map(f => ({ ...f, _src: f.source || 'system' }));
  const allFonts    = [...googleFonts, ...sysFonts]
    .filter(f => !q || f.name.toLowerCase().includes(q))
    .sort((a, b) => a.name.localeCompare(b.name));

  countEl.textContent = `${allFonts.length} font${allFonts.length !== 1 ? 's' : ''}`;

  if (!allFonts.length) {
    list.innerHTML = `<div class="font-list-empty">No fonts match "${escHtml(q)}"</div>`;
    return;
  }

  list.innerHTML = allFonts.map((font, idx) => {
    const isAdded = addedSet.has(font.name);
    const isGoogle = font._src === 'google';
    if (isGoogle) loadGoogleFont(font.name, [400]);
    const ff = isGoogle ? `'${font.name}',${fallback(font.category)}` : `'${font.name}',${fallback(font.category)}`;
    return `
      <div class="font-list-item ${isAdded ? 'is-added' : ''}" data-allidx="${idx}">
        <div class="font-list-item-info">
          <div style="display:flex;align-items:center;gap:6px">
            <span class="font-list-item-name" style="font-family:${ff}">${escHtml(font.name)}</span>
            <span class="font-source-badge font-source-${isGoogle ? 'google' : 'system'}">${isGoogle ? 'G' : 'S'}</span>
          </div>
          <span class="font-list-item-preview" style="font-family:${ff}">The quick brown fox jumps over the lazy dog</span>
          <span class="font-list-item-meta">${font.category} · ${font.weights.length} weight${font.weights.length !== 1 ? 's' : ''}</span>
        </div>
        <span class="font-list-item-action">
          ${isAdded
            ? `<svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5L4.5 8.5L9.5 2.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg> Added`
            : `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1V9M1 5H9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg> Add`}
        </span>
      </div>
    `;
  }).join('');

  // Store for click handler
  list._allFonts = allFonts;
}

function renderSystemFontList() {
  const list    = document.getElementById('font-list');
  const countEl = document.getElementById('font-search-count');

  if (_systemFontsStatus === 'loading') {
    countEl.textContent = '';
    list.innerHTML = `<div class="sfg-wrap"><div class="sfg-loading"><div class="sfg-spinner"></div> Detecting installed fonts…</div></div>`;
    return;
  }

  if (_systemFontsStatus === 'idle') {
    countEl.textContent = '';
    list.innerHTML = `
      <div class="sfg-options">
        <div class="sfg-option-card">
          <div class="sfg-option-icon">${_SVG_MONITOR}</div>
          <div class="sfg-option-body">
            <span class="sfg-option-title">System Fonts</span>
            <span class="sfg-option-desc">Browse all fonts installed on your computer</span>
          </div>
          <button class="sfg-btn" id="grant-system-fonts-btn">Browse</button>
        </div>
        <div class="sfg-option-sep"><span>or</span></div>
        <div class="sfg-option-card">
          <div class="sfg-option-icon">${_SVG_FOLDER}</div>
          <div class="sfg-option-body">
            <span class="sfg-option-title">Font Library Folder</span>
            <span class="sfg-option-desc">Link a folder — scans TTF, OTF, WOFF, WOFF2 files</span>
          </div>
          <button class="sfg-btn" id="link-library-btn">Link Folder</button>
        </div>
        <div class="sfg-option-sep"><span>or</span></div>
        <div class="sfg-option-card">
          <div class="sfg-option-icon">${_SVG_UPLOAD}</div>
          <div class="sfg-option-body">
            <span class="sfg-option-title">Upload Font Files</span>
            <span class="sfg-option-desc">Pick individual TTF, OTF, WOFF, WOFF2 files</span>
          </div>
          <label class="sfg-btn sfg-btn-label">
            Upload
            <input type="file" id="local-font-upload" accept=".ttf,.otf,.woff,.woff2" multiple>
          </label>
        </div>
        <p class="sfg-note" style="margin-top:8px">System Fonts &amp; Link Folder require Chrome or Edge</p>
      </div>`;
    document.getElementById('grant-system-fonts-btn').addEventListener('click', requestSystemFonts);
    document.getElementById('link-library-btn').addEventListener('click', linkFontLibrary);
    document.getElementById('local-font-upload').addEventListener('change', _handleFileUpload);
    return;
  }

  if (_systemFontsStatus === 'denied') {
    countEl.textContent = '';
    list.innerHTML = `
      <div class="sfg-wrap">
        <span class="sfg-title">Permission denied</span>
        <span class="sfg-desc">Font access was blocked. Click the lock icon in your browser's address bar to reset permissions, then try again.</span>
        <button class="sfg-btn" id="grant-system-fonts-btn">Try Again</button>
        <button class="sfg-btn-outline" id="link-library-btn">Link Folder Instead</button>
      </div>`;
    document.getElementById('grant-system-fonts-btn').addEventListener('click', () => { _systemFontsStatus = 'idle'; requestSystemFonts(); });
    document.getElementById('link-library-btn').addEventListener('click', linkFontLibrary);
    return;
  }

  if (_systemFontsStatus === 'unsupported') {
    countEl.textContent = '';
    list.innerHTML = `
      <div class="sfg-options">
        <div class="sfg-option-card">
          <div class="sfg-option-icon">${_SVG_FOLDER}</div>
          <div class="sfg-option-body">
            <span class="sfg-option-title">Font Library Folder</span>
            <span class="sfg-option-desc">Link a folder of fonts (Chrome / Edge only)</span>
          </div>
          <button class="sfg-btn" id="link-library-btn">Link Folder</button>
        </div>
        <div class="sfg-option-sep"><span>or</span></div>
        <div class="sfg-option-card">
          <div class="sfg-option-icon">${_SVG_UPLOAD}</div>
          <div class="sfg-option-body">
            <span class="sfg-option-title">Upload Font Files</span>
            <span class="sfg-option-desc">TTF, OTF, WOFF, WOFF2</span>
          </div>
          <label class="sfg-btn sfg-btn-label">
            Upload
            <input type="file" id="local-font-upload" accept=".ttf,.otf,.woff,.woff2" multiple>
          </label>
        </div>
      </div>`;
    document.getElementById('link-library-btn').addEventListener('click', linkFontLibrary);
    document.getElementById('local-font-upload').addEventListener('change', _handleFileUpload);
    return;
  }

  // ── Loaded ──
  const q         = _systemFontsQuery.toLowerCase().trim();
  const addedSet  = new Set(state.fonts.map(f => f.name));
  const filtered  = q ? _systemFonts.filter(f => f.name.toLowerCase().includes(q)) : _systemFonts;
  const libCount  = _systemFonts.filter(f => f.source === 'library').length;
  const sysCount  = _systemFonts.filter(f => f.source === 'system').length;

  countEl.textContent = `${filtered.length} font${filtered.length !== 1 ? 's' : ''}`;

  const emptyMsg = filtered.length === 0
    ? `<div class="font-list-empty">${_systemFontsQuery ? `No fonts match "${escHtml(_systemFontsQuery)}"` : 'No fonts detected — try linking a folder or uploading files'}</div>` : '';

  list.innerHTML = `
    <div class="sfg-list-toolbar">
      ${sysCount ? `<span class="sfg-tally"><span class="font-source-badge system">System</span> ${sysCount}</span>` : ''}
      ${libCount ? `<span class="sfg-tally"><span class="font-source-badge library">Library</span> ${libCount}</span>` : ''}
      <div style="flex:1"></div>
      <button class="sfg-toolbar-btn" id="sfg-link-more">
        ${_SVG_FOLDER.replace('22','13').replace('22','13')}
        Link folder
      </button>
      <label class="sfg-toolbar-btn sfg-btn-label">
        ${_SVG_UPLOAD}
        Upload files
        <input type="file" id="local-font-upload-2" accept=".ttf,.otf,.woff,.woff2" multiple>
      </label>
    </div>
    ${emptyMsg}
    ${filtered.map((font, idx) => {
      const isAdded = addedSet.has(font.name);
      const label   = _sfgSourceLabel(font.source);
      return `
        <div class="font-list-item ${isAdded ? 'is-added' : ''}" data-sys-idx="${idx}">
          <div class="font-list-item-info">
            <div style="display:flex;align-items:center;gap:6px">
              <span class="font-list-item-name" style="font-family:'${font.name}',sans-serif">${escHtml(font.name)}</span>
              <span class="font-source-badge ${font.source}">${label}</span>
            </div>
            <span class="font-list-item-preview" style="font-family:'${font.name}',sans-serif">
              The quick brown fox jumps over the lazy dog
            </span>
            <span class="font-list-item-meta">${font.faces.length} style${font.faces.length !== 1 ? 's' : ''} · ${label}</span>
          </div>
          <span class="font-list-item-action">
            ${isAdded
              ? `<svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5L4.5 8.5L9.5 2.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg> Added`
              : `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1V9M1 5H9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg> Add`
            }
          </span>
        </div>`;
    }).join('')}`;

  document.getElementById('sfg-link-more').addEventListener('click', linkFontLibrary);
  const upload2 = document.getElementById('local-font-upload-2');
  if (upload2) upload2.addEventListener('change', _handleFileUpload);

  list.querySelectorAll('.font-list-item:not(.is-added)').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.sysIdx, 10);
      addFont(filtered[idx]);
    });
  });
}

async function _handleFileUpload(e) {
  const files = [...e.target.files];
  const familyMap = new Map();
  for (const file of files) {
    try {
      const fontDef = await registerLocalFontFile(file, 'local');
      if (!familyMap.has(fontDef.name)) familyMap.set(fontDef.name, fontDef);
      else {
        const existing = familyMap.get(fontDef.name);
        existing.weights = [...new Set([...existing.weights, ...fontDef.weights])].sort((a, b) => a - b);
        existing.faces.push(...fontDef.faces);
      }
    } catch { toast(`Could not load ${file.name}`); }
  }
  _mergeIntoSystemFonts([...familyMap.values()]);
  if (_systemFontsStatus !== 'loaded') _systemFontsStatus = 'loaded';
  renderSystemFontList();
  toast(`Loaded ${familyMap.size} font${familyMap.size !== 1 ? 's' : ''}`);
}

function switchModalTab(tab) {
  _modalTab = tab;
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  const filterRow = document.getElementById('modal-filter-row');
  const searchInput = document.getElementById('font-search');
  filterRow.style.display = tab === 'google' ? '' : 'none';
  state.searchQuery = '';
  _systemFontsQuery = '';
  searchInput.value = '';
  searchInput.placeholder = 'Search fonts…';
  document.getElementById('font-search-count').textContent = '';
  if (tab === 'all') {
    renderAllFontsList();
  } else if (tab === 'google') {
    renderModalFontList();
  } else {
    if (_systemFontsStatus === 'idle') {
      requestSystemFonts();
    } else {
      renderSystemFontList();
    }
  }
}

/* ══════════════════════════════════════════════════════
   MODAL OPEN / CLOSE
══════════════════════════════════════════════════════ */
let _modalOpenedAt = 0;

function openModal() {
  _modalOpenedAt = Date.now();
  document.getElementById('font-modal').classList.remove('hidden');
  state.searchQuery = '';
  state.activeCategory = 'all';
  document.getElementById('font-search').value = '';
  document.querySelectorAll('.filter-chip').forEach(c => {
    c.classList.toggle('active', c.dataset.category === 'all');
  });
  // Always open on All Fonts tab
  switchModalTab('all');
  setTimeout(() => document.getElementById('font-search').focus(), 60);
}

function closeModal() {
  if (Date.now() - _modalOpenedAt < 200) return;
  document.getElementById('font-modal').classList.add('hidden');
}

/* ── Palette modal ── */
let _paletteModalOpenedAt = 0;
let _cpHex = '#7c3aed';

function openPaletteModal() {
  _paletteModalOpenedAt = Date.now();
  _cpHex = '#7c3aed';
  document.getElementById('palette-modal').classList.remove('hidden');
  document.getElementById('palette-name-input').value = '';
  cpSyncFromHex(_cpHex);
  setTimeout(() => document.getElementById('palette-name-input').focus(), 60);
}

function closePaletteModal() {
  if (Date.now() - _paletteModalOpenedAt < 200) return;
  document.getElementById('palette-modal').classList.add('hidden');
}

function cpSyncFromHex(hex) {
  if (!isValidHex(hex)) return;
  _cpHex = hex;
  const { r, g, b } = hexToRgb(hex);
  document.getElementById('cp-hex').value    = hex;
  document.getElementById('cp-r').value      = r;
  document.getElementById('cp-g').value      = g;
  document.getElementById('cp-b').value      = b;
  document.getElementById('cp-swatch').style.background = hex;
  renderCpScalePreview(hex);
}

function renderCpScalePreview(hex) {
  const el = document.getElementById('cp-scale-preview');
  if (!el) return;
  const scale = generateColorScale(hex);
  el.innerHTML = scale.map(c => `
    <div class="cp-scale-swatch" style="background:${c.hex}" title="${c.stop} — ${c.hex}">
      <span class="cp-scale-stop" style="color:${getContrastColor(c.hex)}">${c.stop}</span>
      <span class="cp-scale-hex"  style="color:${getContrastColor(c.hex)}">${c.hex}</span>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════════════
   SVG EXPORT
══════════════════════════════════════════════════════ */
/* ══════════════════════════════════════════════════════
   FALLBACK FONT PICKER MODAL
══════════════════════════════════════════════════════ */
let _fallbackModalFont = null;

function openFallbackModal(font) {
  _fallbackModalFont = font;
  const body = document.getElementById('fallback-modal-body');
  if (!body) return;

  const alreadyAdded = new Set(font.fallbackFonts || []);
  const systemFonts  = state.fonts.filter(sf => sf.id !== font.id);

  const sections = [
    ...FALLBACK_FONT_OPTIONS,
    ...(systemFonts.length ? [{ group: 'Design System Fonts', fonts: systemFonts.map(sf => `'${sf.name}'`) }] : []),
  ];

  body.innerHTML = sections.map(g => `
    <div class="fallback-modal-group">
      <div class="fallback-modal-group-label">${escHtml(g.group)}</div>
      <div class="fallback-modal-grid">
        ${g.fonts.map(fname => {
          const added = alreadyAdded.has(fname);
          return `<button class="fallback-modal-item ${added ? 'added' : ''}" data-fb-val="${escHtml(fname)}" ${added ? 'disabled' : ''}>
            <span class="fallback-modal-item-name">${escHtml(fname)}</span>
            ${added ? `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ''}
          </button>`;
        }).join('')}
      </div>
    </div>
  `).join('');

  body.querySelectorAll('[data-fb-val]').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.fbVal;
      pushHistory();
      if (!_fallbackModalFont.fallbackFonts) _fallbackModalFont.fallbackFonts = [];
      if (!_fallbackModalFont.fallbackFonts.includes(val)) {
        _fallbackModalFont.fallbackFonts.push(val);
        btn.classList.add('added');
        btn.disabled = true;
        btn.innerHTML += `<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      }
      renderCanvas();
      renderFontProperties();
    });
  });

  document.getElementById('fallback-modal').classList.remove('hidden');
}

function closeFallbackModal() {
  document.getElementById('fallback-modal').classList.add('hidden');
  _fallbackModalFont = null;
}

/* ══════════════════════════════════════════════════════
   EXPORT — TOKEN GENERATORS
══════════════════════════════════════════════════════ */
function slugify(str) {
  return (str || 'untitled').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const EXPORT_FORMATS = {
  css: {
    label:   'CSS Variables',
    desc:    'Standard CSS custom properties — works in every modern browser and framework.',
    ext:     'css',
    filter:  'CSS Stylesheet',
    filename: () => slugify(document.getElementById('system-name').value || 'design-system') + '.tokens.css',
  },
  json: {
    label:   'JSON Design Tokens',
    desc:    'W3C Design Tokens format — framework-agnostic, compatible with Style Dictionary, Token Studio, and more.',
    ext:     'json',
    filter:  'JSON File',
    filename: () => slugify(document.getElementById('system-name').value || 'design-system') + '.tokens.json',
  },
  scss: {
    label:   'SCSS Variables',
    desc:    'Sass/SCSS variables — drop into any SCSS-based project or design system.',
    ext:     'scss',
    filter:  'SCSS Stylesheet',
    filename: () => '_' + slugify(document.getElementById('system-name').value || 'design-system') + '.tokens.scss',
  },
  tailwind: {
    label:   'Tailwind Config',
    desc:    'Ready-to-paste theme extension for tailwind.config.js — works with Tailwind CSS v3 & v4.',
    ext:     'js',
    filter:  'JavaScript File',
    filename: () => 'tailwind.tokens.js',
  },
  js: {
    label:   'JS / TS Module',
    desc:    'ESM token object — import directly into React, Vue, Svelte, or any JS/TS project.',
    ext:     'ts',
    filter:  'TypeScript File',
    filename: () => slugify(document.getElementById('system-name').value || 'design-system') + '.tokens.ts',
  },
  svg: {
    label:   'SVG',
    desc:    'Visual design system sheet — a shareable SVG showing all fonts, palettes, spacing and shadows.',
    ext:     'svg',
    filter:  'SVG Image',
    filename: () => (document.getElementById('system-name').value || 'Design System') + '.svg',
  },
  figma: {
    label:   'Figma Variables',
    desc:    'Figma Variables JSON — import via the Figma Variables REST API or a community plugin.',
    ext:     'json',
    filter:  'JSON File',
    filename: () => 'tokens.figma.json',
  },
  'style-dictionary': {
    label:   'Style Dictionary',
    desc:    'Style Dictionary format — plug into any Style Dictionary pipeline for multi-platform token output.',
    ext:     'json',
    filter:  'JSON File',
    filename: () => 'tokens.sd.json',
  },
  html: {
    label:   'Style Guide',
    desc:    'Self-contained HTML style guide — share with stakeholders without any login or server required.',
    ext:     'html',
    filter:  'HTML File',
    filename: () => 'styleguide.html',
  },
};

function getFallbackStack(category) {
  return FALLBACK_STACKS[category] || 'system-ui, sans-serif';
}

const FALLBACK_FONT_OPTIONS = [
  { group: 'Generic',       fonts: ['system-ui','-apple-system','BlinkMacSystemFont','sans-serif','serif','monospace'] },
  { group: 'Web-safe Sans', fonts: ['Arial','Helvetica Neue','Verdana','Trebuchet MS','Gill Sans'] },
  { group: 'Web-safe Serif',fonts: ['Georgia','Times New Roman','Palatino','Garamond'] },
  { group: 'Web-safe Mono', fonts: ['Courier New','Courier','Lucida Console'] },
  { group: 'System UI',     fonts: ['Segoe UI','Roboto','Helvetica','Tahoma'] },
];

function fontFallbackToCSS(name) {
  return name.includes(' ') ? `'${name}'` : name;
}

function getFontStack(f) {
  const custom = (f.fallbackFonts || []);
  if (custom.length) return custom.map(fontFallbackToCSS).join(', ');
  return getFallbackStack(f.category);
}

/* ── CSS Variables ── */
function generateCSS() {
  const lines = [':root {'];
  const sys   = document.getElementById('system-name').value || 'Design System';
  lines.push(`  /* ${sys} — Generated by Designr */`, '');

  if (state.palettes.length) {
    lines.push('  /* ── Colors ── */');
    state.palettes.forEach(p => {
      const slug = slugify(p.name);
      lines.push(`  /* ${p.name} */`);
      p.colors.forEach(c => lines.push(`  --color-${slug}-${c.stop}: ${c.hex};`));
    });
    lines.push('');
  }

  if (state.fonts.length) {
    lines.push('  /* ── Typography ── */');
    state.fonts.forEach(f => {
      const slug = slugify(f.name);
      lines.push(`  /* ${f.name} — ${f.category} */`);
      lines.push(`  --font-${slug}-family: '${f.name}', ${getFontStack(f)};`);
      lines.push(`  --font-${slug}-weights: ${f.activeWeights.join(', ')};`);

      if ((f.variants || []).length) {
        f.variants.forEach(v => {
          const vs = slugify(v.role);
          if (v.docs) lines.push(`  /* ${v.role}: ${v.docs} */`);
          lines.push(`  --font-${slug}-${vs}-size:     ${v.size}px;`);
          lines.push(`  --font-${slug}-${vs}-leading:  ${v.leading};`);
          lines.push(`  --font-${slug}-${vs}-kerning:  ${v.kerning}px;`);
          });
      }
    });
    lines.push('');
  }

  if (state.spacings.length) {
    lines.push('  /* ── Spacing ── */');
    state.spacings.forEach(sc => {
      const slug = slugify(sc.name);
      lines.push(`  /* ${sc.name} — base ${sc.baseUnit}px */`);
      spacingStopValues(sc.baseUnit).forEach(sv => {
        lines.push(`  --spacing-${slug}-${sv.multiplier}x: ${sv.value}px;`);
      });
    });
    lines.push('');
  }

  if (state.shadows.length) {
    lines.push('  /* ── Shadows ── */');
    state.shadows.forEach(sh => { lines.push(`  --shadow-${slugify(sh.name)}: ${shadowToCss(sh.layers)};`); });
    lines.push('');
  }

  if (state.gradients?.length) {
    lines.push('  /* ── Gradients ── */');
    state.gradients.forEach(g => { lines.push(`  --gradient-${slugify(g.name)}: ${gradientToCss(g)};`); });
    lines.push('');
  }

  // New atom types
  const newAtomExports = [
    { key:'radii', label:'Border Radius', fn: (item, s) => `  --radius-${slugify(item.name)}-${slugify(s.label)}: ${s.value === '9999' ? '9999px' : s.value + 'px'};` },
    { key:'borders', label:'Border', fn: (item, s) => `  --border-${slugify(item.name)}-${slugify(s.label)}: ${s.value}px;` },
    { key:'opacities', label:'Opacity', fn: (item, s) => `  --opacity-${slugify(item.name)}-${slugify(s.label)}: ${s.value}%;` },
    { key:'breakpoints', label:'Breakpoints', fn: (item, s) => `  --breakpoint-${slugify(item.name)}-${slugify(s.label)}: ${s.value}px;` },
    { key:'zindices', label:'Z-Index', fn: (item, s) => `  --z-${slugify(item.name)}-${slugify(s.label)}: ${s.value};` },
    { key:'icons', label:'Iconography', fn: (item, s) => `  --icon-${slugify(item.name)}-${slugify(s.label)}: ${s.value}px;` },
  ];
  newAtomExports.forEach(({ key, label, fn }) => {
    if (!state[key]?.length) return;
    lines.push(`  /* ── ${label} ── */`);
    state[key].forEach(item => { lines.push(`  /* ${item.name} */`); item.stops.forEach(s => lines.push(fn(item, s))); });
    lines.push('');
  });

  if (state.motions.length) {
    lines.push('  /* ── Motion ── */');
    state.motions.forEach(m => {
      const slug = slugify(m.name);
      m.durations.forEach(d => lines.push(`  --motion-${slug}-${slugify(d.label)}: ${d.ms}ms;`));
      m.easings.forEach(e => lines.push(`  --motion-${slug}-${slugify(e.label)}: ${e.fn};`));
    });
    lines.push('');
  }

  if (state.grids.length) {
    lines.push('  /* ── Grid ── */');
    state.grids.forEach(g => {
      const slug = slugify(g.name);
      lines.push(`  --grid-${slug}-columns: ${g.columns};`);
      lines.push(`  --grid-${slug}-gutter: ${g.gutter}px;`);
      lines.push(`  --grid-${slug}-max-width: ${g.maxWidth}px;`);
      lines.push(`  --grid-${slug}-margin: ${g.margin}px;`);
    });
    lines.push('');
  }

  lines.push('}', '');

  // Semantic role tokens (light + dark) for palettes with roles enabled
  // Standalone semantic tokens — emit as CSS custom properties, using var() alias when a
  // reference matches a palette stop (e.g. "Primary/500" → var(--color-primary-500))
  if (state.semantics?.length) {
    lines.push('/* ── Semantic Tokens ── */');
    lines.push(':root {');
    state.semantics.forEach(t => {
      const propName = `--${t.category ? t.category + '-' : ''}${slugify(t.name)}`;
      let cssVal = t.value || '';
      if (t.reference) {
        // Try to resolve reference like "Primary/500" → var(--color-primary-500)
        const parts = t.reference.split('/');
        if (parts.length === 2) {
          const palSlug = slugify(parts[0].trim());
          const stop = parts[1].trim();
          cssVal = `var(--color-${palSlug}-${stop}, ${t.value || 'currentColor'})`;
        }
      }
      const comment = t.description ? ` /* ${t.description} */` : '';
      lines.push(`  ${propName}: ${cssVal};${comment}`);
    });
    lines.push('}', '');
  }

  const palettesWithRoles = state.palettes.filter(p => p.semanticRolesEnabled && p.roles && Object.keys(p.roles).length);
  if (palettesWithRoles.length) {
    lines.push('/* ── Semantic Color Roles ── */');
    // Light mode
    lines.push(':root {');
    palettesWithRoles.forEach(p => {
      const slug = slugify(p.name);
      Object.entries(p.roles).forEach(([key, val]) => {
        if (val.light !== '' && val.light !== undefined) {
          lines.push(`  --color-${key.replace('.', '-')}: var(--color-${slug}-${val.light});`);
        }
      });
      // State color tokens
      const base = p.colors.find(c => c.stop === 500) || p.colors[Math.floor(p.colors.length/2)];
      if (base) {
        const idx    = p.colors.findIndex(c => c.stop === base.stop);
        const hover  = p.stateOverrides?.hover  || p.colors[Math.max(0, idx-1)]?.hex || base.hex;
        const active = p.stateOverrides?.active || p.colors[Math.min(p.colors.length-1, idx+1)]?.hex || base.hex;
        const focus  = p.stateOverrides?.focus  || base.hex;
        const disabled = p.stateOverrides?.disabled || base.hex + '66';
        lines.push(`  --color-${slug}-hover: ${hover};`);
        lines.push(`  --color-${slug}-active: ${active};`);
        lines.push(`  --color-${slug}-focus: ${focus};`);
        lines.push(`  --color-${slug}-disabled: ${disabled};`);
      }
    });
    lines.push('}', '');
    // Dark mode overrides
    const hasDark = palettesWithRoles.some(p => Object.values(p.roles).some(v => v.dark !== '' && v.dark !== undefined));
    if (hasDark) {
      lines.push('@media (prefers-color-scheme: dark) {');
      lines.push('  :root {');
      palettesWithRoles.forEach(p => {
        const slug = slugify(p.name);
        Object.entries(p.roles).forEach(([key, val]) => {
          if (val.dark !== '' && val.dark !== undefined) {
            lines.push(`    --color-${key.replace('.', '-')}: var(--color-${slug}-${val.dark});`);
          }
        });
      });
      lines.push('  }', '}', '');
    }
  }

  // @font-face font-display for each Google font
  if (state.fonts.some(f => f.source !== 'system')) {
    lines.push('/* ── Font Display Strategy ── */');
    state.fonts.filter(f => f.source !== 'system').forEach(f => {
      lines.push(`/* ${f.name}: font-display: ${f.fontDisplay || 'swap'} */`);
      lines.push(`/* Apply via your bundler's @font-face or CSS-in-JS: */`);
      lines.push(`/* font-display: ${f.fontDisplay || 'swap'}; */`);
    });
    lines.push('');
  }

  // @font-face fallback overrides (CLS optimization)
  const fontsWithMetrics = state.fonts.filter(f => FALLBACK_METRICS[f.name]);
  if (fontsWithMetrics.length) {
    lines.push('/* ── Fallback Font Overrides (minimize layout shift) ── */');
    fontsWithMetrics.forEach(f => {
      const m = FALLBACK_METRICS[f.name];
      lines.push(`@font-face {`);
      lines.push(`  font-family: '${f.name} Fallback';`);
      lines.push(`  src: local('${m.fallback}');`);
      lines.push(`  font-display: ${f.fontDisplay || 'swap'};`);
      lines.push(`  size-adjust: ${m.sizeAdjust};`);
      lines.push(`  ascent-override: ${m.ascentOverride};`);
      lines.push(`  descent-override: ${m.descentOverride};`);
      lines.push(`  line-gap-override: ${m.lineGapOverride};`);
      lines.push(`}`);
    });
    lines.push('');
  }

  // Typography utility classes + fluid + responsive
  if (state.fonts.some(f => (f.variants || []).length)) {
    lines.push('/* ── Typography Utility Classes ── */');
    state.fonts.forEach(f => {
      const slug = slugify(f.name);
      const fb   = getFontStack(f);
      (f.variants || []).forEach(v => {
        const vs = slugify(v.role);
        const ew = v.weight || f.activeWeights[0] || 400;
        const sz = v.fluid ? computeClamp(v) : `${v.size}px`;
        if (v.docs) lines.push(`/* ${v.role}: ${v.docs} */`);
        lines.push(`.text-${slug}-${vs} {`);
        lines.push(`  font-family: '${f.name}', ${fb};`);
        lines.push(`  font-size: ${sz};`);
        lines.push(`  font-weight: ${ew};`);
        lines.push(`  line-height: ${v.leading};`);
        lines.push(`  letter-spacing: ${v.kerning}px;`);
        if (v.variationSettings)lines.push(`  font-variation-settings: ${v.variationSettings};`);
        if (v.textTransform && v.textTransform !== 'none') lines.push(`  text-transform: ${v.textTransform};`);
        if (v.textDecoration && v.textDecoration !== 'none') lines.push(`  text-decoration: ${v.textDecoration};`);
        if (v.fontStyle && v.fontStyle !== 'normal') lines.push(`  font-style: ${v.fontStyle};`);
        if (v.paragraphSpacing) lines.push(`  margin-bottom: ${v.paragraphSpacing}px;`);
        if (v.measure)          lines.push(`  max-width: ${v.measure}ch;`);
        lines.push('}');

        // Responsive sizes
        const bpMap = { sm: '640px', md: '768px', lg: '1024px' };
        Object.entries(v.responsiveSizes || {}).forEach(([bp, sz]) => {
          if (!sz) return;
          lines.push(`@media (min-width: ${bpMap[bp] || bp}) {`);
          lines.push(`  .text-${slug}-${vs} { font-size: ${sz}px; }`);
          lines.push(`}`);
        });
      });
    });
    lines.push('');
  }

  return lines.join('\n');
}

/* Shared export config for scale atoms (radii/borders/opacities/breakpoints/zindices/icons),
   which all share the shape { name, stops:[{label,value}] }. Mirrors generateCSS unit handling. */
const SCALE_ATOM_EXPORTS = [
  { key:'radii',       prefix:'radius',     group:'borderRadius', jsonType:'dimension', fmt:v => (v === '9999' || v === 9999) ? '9999px' : `${v}px` },
  { key:'borders',     prefix:'border',     group:'borderWidth',  jsonType:'dimension', fmt:v => `${v}px` },
  { key:'opacities',   prefix:'opacity',    group:'opacity',      jsonType:'number',    fmt:v => `${v}%` },
  { key:'breakpoints', prefix:'breakpoint', group:'screens',      jsonType:'dimension', fmt:v => `${v}px` },
  { key:'zindices',    prefix:'z',          group:'zIndex',       jsonType:'number',    fmt:v => `${v}` },
  { key:'icons',       prefix:'icon',       group:'iconSize',     jsonType:'dimension', fmt:v => `${v}px` },
];

/* ── JSON Design Tokens (W3C format) ── */
function generateJSON() {
  const out = {};

  if (state.palettes.length) {
    out.color = {};
    state.palettes.forEach(p => {
      out.color[slugify(p.name)] = {};
      p.colors.forEach(c => {
        out.color[slugify(p.name)][c.stop] = { $value: c.hex, $type: 'color' };
      });
    });
  }

  if (state.fonts.length) {
    out.typography = {};
    state.fonts.forEach(f => {
      const slug = slugify(f.name);
      out.typography[slug] = {
        family:        { $value: `'${f.name}', ${getFallbackStack(f.category)}`, $type: 'fontFamily' },
        category:      { $value: f.category },
        activeWeights: { $value: f.activeWeights },
      };
      if ((f.variants || []).length) {
        f.variants.forEach(v => {
          out.typography[slug][slugify(v.role)] = {
            role:       { $value: v.role },
            fontSize:   { $value: `${v.size}px`,          $type: 'dimension' },
            lineHeight: { $value: v.leading,               $type: 'number'    },
            kerning:    { $value: `${v.kerning}px`,        $type: 'dimension' },
            ...(v.docs ? { description: { $value: v.docs } } : {}),
          };
        });
      }
    });
  }

  if (state.spacings.length) {
    out.spacing = {};
    state.spacings.forEach(sc => {
      const slug = slugify(sc.name);
      out.spacing[slug] = { baseUnit: { $value: `${sc.baseUnit}px`, $type: 'dimension' } };
      spacingStopValues(sc.baseUnit).forEach(sv => {
        out.spacing[slug][`${sv.multiplier}x`] = { $value: `${sv.value}px`, $type: 'dimension' };
      });
    });
  }

  if (state.shadows.length) {
    out.shadow = {};
    state.shadows.forEach(sh => {
      out.shadow[slugify(sh.name)] = { $value: shadowToCss(sh.layers), $type: 'shadow' };
    });
  }

  // Standalone semantic tokens with var() aliasing
  if (state.semantics?.length) {
    out.semantic = {};
    state.semantics.forEach(t => {
      const key = slugify(t.name);
      let val = t.value || '';
      if (t.reference) {
        const parts = t.reference.split('/');
        if (parts.length === 2) val = `{${t.category || 'color'}.${slugify(parts[0].trim())}.${parts[1].trim()}}`;
      }
      out.semantic[key] = { $value: val, $type: t.category || 'color',
        ...(t.description ? { $description: t.description } : {}),
        ...(t.reference ? { $extensions: { alias: t.reference } } : {}),
      };
    });
  }

  // Scale atoms (radii, borders, opacities, breakpoints, zindices, icons)
  SCALE_ATOM_EXPORTS.forEach(({ key, group, jsonType, fmt }) => {
    if (!state[key]?.length) return;
    out[group] = {};
    state[key].forEach(item => {
      const slug = slugify(item.name);
      out[group][slug] = {};
      item.stops.forEach(s => { out[group][slug][slugify(s.label)] = { $value: fmt(s.value), $type: jsonType }; });
    });
  });

  if (state.gradients?.length) {
    out.gradient = {};
    state.gradients.forEach(g => { out.gradient[slugify(g.name)] = { $value: gradientToCss(g), $type: 'gradient' }; });
  }

  if (state.motions?.length) {
    out.motion = {};
    state.motions.forEach(m => {
      const slug = slugify(m.name);
      out.motion[slug] = {};
      (m.durations || []).forEach(d => { out.motion[slug][slugify(d.label)] = { $value: `${d.ms}ms`, $type: 'duration' }; });
      (m.easings   || []).forEach(e => { out.motion[slug][slugify(e.label)] = { $value: e.fn, $type: 'cubicBezier' }; });
    });
  }

  if (state.grids?.length) {
    out.grid = {};
    state.grids.forEach(g => {
      out.grid[slugify(g.name)] = {
        columns:  { $value: g.columns,        $type: 'number'    },
        gutter:   { $value: `${g.gutter}px`,   $type: 'dimension' },
        maxWidth: { $value: `${g.maxWidth}px`, $type: 'dimension' },
        margin:   { $value: `${g.margin}px`,   $type: 'dimension' },
      };
    });
  }

  return JSON.stringify(out, null, 2);
}

/* ── SCSS Variables ── */
function generateSCSS() {
  const lines = [];
  const sys   = document.getElementById('system-name').value || 'Design System';
  lines.push(`// ${sys} — Generated by Designr`, '');

  if (state.palettes.length) {
    lines.push('// ── Colors ──');
    state.palettes.forEach(p => {
      const slug = slugify(p.name);
      lines.push(`// ${p.name}`);
      p.colors.forEach(c => lines.push(`$color-${slug}-${c.stop}: ${c.hex};`));
      lines.push('');
    });
  }

  if (state.fonts.length) {
    lines.push('// ── Typography — Variables ──');
    state.fonts.forEach(f => {
      const slug = slugify(f.name);
      lines.push(`// ${f.name} (${f.category}) — weights: ${f.activeWeights.join(', ')}`);
      lines.push(`$font-${slug}-family: '${f.name}', ${getFontStack(f)};`);

      if ((f.variants || []).length) {
        f.variants.forEach(v => {
          const vs = slugify(v.role);
          if (v.docs) lines.push(`// ${v.role}: ${v.docs}`);
          lines.push(`$font-${slug}-${vs}-size:     ${v.size}px;`);
          lines.push(`$font-${slug}-${vs}-leading:  ${v.leading};`);
          lines.push(`$font-${slug}-${vs}-kerning:  ${v.kerning}px;`);
        });
      }
      lines.push('');
    });

    if (state.fonts.some(f => (f.variants || []).length)) {
      lines.push('// ── Typography — Mixins ──');
      state.fonts.forEach(f => {
        const slug = slugify(f.name);
        (f.variants || []).forEach(v => {
          const vs = slugify(v.role);
          lines.push(`@mixin ${slug}-${vs} {`);
          lines.push(`  font-family: $font-${slug}-family;`);
          lines.push(`  font-size:   $font-${slug}-${vs}-size;`);
          lines.push(`  line-height: $font-${slug}-${vs}-leading;`);
          lines.push(`  letter-spacing: $font-${slug}-${vs}-kerning;`);
          lines.push('}');
        });
        lines.push('');
      });
    }
  }

  if (state.spacings.length) {
    lines.push('// ── Spacing ──');
    state.spacings.forEach(sc => {
      const slug = slugify(sc.name);
      lines.push(`// ${sc.name} — base ${sc.baseUnit}px`);
      spacingStopValues(sc.baseUnit).forEach(sv => {
        lines.push(`$spacing-${slug}-${sv.multiplier}x: ${sv.value}px;`);
      });
      lines.push('');
    });
  }

  if (state.shadows.length) {
    lines.push('// ── Shadows ──');
    state.shadows.forEach(sh => {
      lines.push(`$shadow-${slugify(sh.name)}: ${shadowToCss(sh.layers)};`);
    });
    lines.push('');
  }

  // Scale atoms
  SCALE_ATOM_EXPORTS.forEach(({ key, prefix, label, fmt }) => {
    if (!state[key]?.length) return;
    lines.push(`// ── ${key.charAt(0).toUpperCase() + key.slice(1)} ──`);
    state[key].forEach(item => {
      const slug = slugify(item.name);
      item.stops.forEach(s => lines.push(`$${prefix}-${slug}-${slugify(s.label)}: ${fmt(s.value)};`));
    });
    lines.push('');
  });

  if (state.gradients?.length) {
    lines.push('// ── Gradients ──');
    state.gradients.forEach(g => lines.push(`$gradient-${slugify(g.name)}: ${gradientToCss(g)};`));
    lines.push('');
  }

  if (state.motions?.length) {
    lines.push('// ── Motion ──');
    state.motions.forEach(m => {
      const slug = slugify(m.name);
      (m.durations || []).forEach(d => lines.push(`$motion-${slug}-${slugify(d.label)}: ${d.ms}ms;`));
      (m.easings   || []).forEach(e => lines.push(`$motion-${slug}-${slugify(e.label)}: ${e.fn};`));
    });
    lines.push('');
  }

  if (state.grids?.length) {
    lines.push('// ── Grid ──');
    state.grids.forEach(g => {
      const slug = slugify(g.name);
      lines.push(`$grid-${slug}-columns: ${g.columns};`);
      lines.push(`$grid-${slug}-gutter: ${g.gutter}px;`);
      lines.push(`$grid-${slug}-max-width: ${g.maxWidth}px;`);
      lines.push(`$grid-${slug}-margin: ${g.margin}px;`);
    });
    lines.push('');
  }

  return lines.join('\n');
}

/* ── Tailwind Config ── */
function generateTailwind() {
  const obj = { theme: { extend: {} } };
  const ext  = obj.theme.extend;

  if (state.palettes.length) {
    ext.colors = {};
    state.palettes.forEach(p => {
      ext.colors[slugify(p.name)] = {};
      p.colors.forEach(c => { ext.colors[slugify(p.name)][c.stop] = c.hex; });
    });
  }

  if (state.fonts.length) {
    ext.fontFamily = {};
    ext.fontSize   = {};
    state.fonts.forEach(f => {
      const slug = slugify(f.name);
      ext.fontFamily[slug] = [`'${f.name}'`, ...getFontStack(f).split(', ')];
      if ((f.variants || []).length) {
        f.variants.forEach(v => {
          const config = {
            lineHeight:    String(v.leading),
            letterSpacing: `${v.kerning}px`,
          };
          ext.fontSize[`${slug}-${slugify(v.role)}`] = [`${v.size}px`, config];
        });
      }
    });
  }

  if (state.spacings.length) {
    ext.spacing = {};
    state.spacings.forEach(sc => {
      spacingStopValues(sc.baseUnit).forEach(sv => {
        ext.spacing[`${slugify(sc.name)}-${sv.multiplier}x`] = `${sv.value}px`;
      });
    });
  }

  if (state.shadows.length) {
    ext.boxShadow = {};
    state.shadows.forEach(sh => {
      ext.boxShadow[slugify(sh.name)] = shadowToCss(sh.layers);
    });
  }

  // Scale atoms → native Tailwind groups
  const twGroup = (stateKey, groupName, mapVal) => {
    if (!state[stateKey]?.length) return;
    ext[groupName] = ext[groupName] || {};
    state[stateKey].forEach(item => {
      const slug = slugify(item.name);
      item.stops.forEach(s => { ext[groupName][`${slug}-${slugify(s.label)}`] = mapVal(s.value); });
    });
  };
  twGroup('radii',       'borderRadius', v => (v === '9999' || v === 9999) ? '9999px' : `${v}px`);
  twGroup('borders',     'borderWidth',  v => `${v}px`);
  twGroup('opacities',   'opacity',      v => `${(Number(v) / 100)}`);   // Tailwind wants 0–1
  twGroup('breakpoints', 'screens',      v => `${v}px`);
  twGroup('zindices',    'zIndex',       v => `${v}`);

  if (state.gradients?.length) {
    ext.backgroundImage = {};
    state.gradients.forEach(g => { ext.backgroundImage[slugify(g.name)] = gradientToCss(g); });
  }

  if (state.motions?.length) {
    ext.transitionDuration = {};
    ext.transitionTimingFunction = {};
    state.motions.forEach(m => {
      const slug = slugify(m.name);
      (m.durations || []).forEach(d => { ext.transitionDuration[`${slug}-${slugify(d.label)}`] = `${d.ms}ms`; });
      (m.easings   || []).forEach(e => { ext.transitionTimingFunction[`${slug}-${slugify(e.label)}`] = e.fn; });
    });
  }

  // Serialise to a tailwind.config.js string (not JSON — JS object literal)
  const body = JSON.stringify(obj, null, 2)
    .replace(/"([^"]+)":/g, '$1:')      // remove quotes from keys
    .replace(/"/g, "'");                 // single-quote strings

  return `/** @type {import('tailwindcss').Config} */\nmodule.exports = ${body};\n`;
}

/* ── JavaScript / TypeScript Module ── */
function generateJS() {
  const sys   = document.getElementById('system-name').value || 'Design System';
  const out   = { colors: {}, typography: {}, spacing: {}, shadows: {} };

  state.palettes.forEach(p => {
    out.colors[slugify(p.name)] = {};
    p.colors.forEach(c => { out.colors[slugify(p.name)][c.stop] = c.hex; });
  });

  state.fonts.forEach(f => {
    const slug = slugify(f.name);
    out.typography[slug] = {
      family:        `'${f.name}', ${getFontStack(f)}`,
      category:      f.category,
      activeWeights: f.activeWeights,
      variants:      {},
    };
    (f.variants || []).forEach(v => {
      out.typography[slug].variants[slugify(v.role)] = {
        role:    v.role,
        size:    `${v.size}px`,
        leading: v.leading,
        kerning: `${v.kerning}px`,
        ...(v.docs          ? { docs: v.docs }                    : {}),
      };
    });
  });

  state.spacings.forEach(sc => {
    const slug = slugify(sc.name);
    out.spacing[slug] = {};
    spacingStopValues(sc.baseUnit).forEach(sv => {
      out.spacing[slug][`${sv.multiplier}x`] = `${sv.value}px`;
    });
  });

  state.shadows.forEach(sh => {
    out.shadows[slugify(sh.name)] = shadowToCss(sh.layers);
  });

  // Scale atoms
  SCALE_ATOM_EXPORTS.forEach(({ key, group, fmt }) => {
    if (!state[key]?.length) return;
    out[group] = out[group] || {};
    state[key].forEach(item => {
      const slug = slugify(item.name);
      out[group][slug] = {};
      item.stops.forEach(s => { out[group][slug][slugify(s.label)] = fmt(s.value); });
    });
  });

  if (state.gradients?.length) {
    out.gradients = {};
    state.gradients.forEach(g => { out.gradients[slugify(g.name)] = gradientToCss(g); });
  }

  if (state.motions?.length) {
    out.motion = {};
    state.motions.forEach(m => {
      const slug = slugify(m.name);
      out.motion[slug] = {};
      (m.durations || []).forEach(d => { out.motion[slug][slugify(d.label)] = `${d.ms}ms`; });
      (m.easings   || []).forEach(e => { out.motion[slug][slugify(e.label)] = e.fn; });
    });
  }

  if (state.grids?.length) {
    out.grid = {};
    state.grids.forEach(g => {
      out.grid[slugify(g.name)] = { columns: g.columns, gutter: `${g.gutter}px`, maxWidth: `${g.maxWidth}px`, margin: `${g.margin}px` };
    });
  }

  // Clean up empty sections
  Object.keys(out).forEach(k => { if (!Object.keys(out[k]).length) delete out[k]; });

  const body = JSON.stringify(out, null, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, "'");

  return `// ${sys} — Generated by Designr\n// Auto-generated design tokens\n\nexport const tokens = ${body} as const;\n\nexport default tokens;\n`;
}

/* ── Figma Variables ── */
function generateFigmaVariables() {
  const collections = [];
  if (state.palettes.length) {
    const colorVars = [];
    state.palettes.forEach(p => {
      p.colors.forEach(c => {
        const hex = c.hex.replace('#','');
        const r = parseInt(hex.slice(0,2),16)/255;
        const g = parseInt(hex.slice(2,4),16)/255;
        const b = parseInt(hex.slice(4,6),16)/255;
        colorVars.push({ name: `${p.name}/${c.stop}`, type: 'COLOR', value: { r, g, b, a: 1 } });
      });
    });
    collections.push({ name: 'Colors', modes: [{ name: 'Default', variables: colorVars }] });
  }
  if (state.fonts.length) {
    const typVars = [];
    state.fonts.forEach(f => {
      typVars.push({ name: `${f.name}/Family`, type: 'STRING', value: f.name });
      (f.variants||[]).forEach(v => {
        typVars.push({ name: `${f.name}/${v.role||'Base'}/Size`, type: 'FLOAT', value: parseFloat(v.size)||16 });
        typVars.push({ name: `${f.name}/${v.role||'Base'}/Weight`, type: 'FLOAT', value: parseFloat(v.weight)||400 });
        typVars.push({ name: `${f.name}/${v.role||'Base'}/LineHeight`, type: 'FLOAT', value: parseFloat(v.leading)||1.5 });
      });
    });
    collections.push({ name: 'Typography', modes: [{ name: 'Default', variables: typVars }] });
  }
  if (state.spacings.length) {
    const spVars = [];
    state.spacings.forEach(sp => {
      spacingStopValues(sp.baseUnit).forEach(s => {
        spVars.push({ name: `${sp.name}/${s.multiplier}x`, type: 'FLOAT', value: s.value });
      });
    });
    collections.push({ name: 'Spacing', modes: [{ name: 'Default', variables: spVars }] });
  }
  if (state.radii.length) {
    const radVars = [];
    state.radii.forEach(r => {
      (r.stops||[]).forEach(s => {
        radVars.push({ name: `${r.name}/${s.label}`, type: 'FLOAT', value: s.value===9999?999:s.value });
      });
    });
    collections.push({ name: 'Border Radius', modes: [{ name: 'Default', variables: radVars }] });
  }
  return JSON.stringify({ version: '0.0.0', collections }, null, 2);
}

/* ── Style Dictionary ── */
function generateStyleDictionary() {
  const out = {};
  if (state.palettes.length) {
    out.color = {};
    state.palettes.forEach(p => {
      const slug = p.name.toLowerCase().replace(/\s+/g,'-');
      out.color[slug] = {};
      p.colors.forEach(c => {
        out.color[slug][`_${c.stop}`] = { value: c.hex, type: 'color', description: `${p.name} ${c.stop}` };
      });
    });
  }
  if (state.fonts.length) {
    out.typography = {};
    state.fonts.forEach(f => {
      const slug = f.name.toLowerCase().replace(/\s+/g,'-');
      out.typography[slug] = { family: { value: f.name, type: 'fontFamily' } };
      (f.variants||[]).forEach(v => {
        const vslug = (v.role||'base').toLowerCase().replace(/\s+/g,'-');
        out.typography[slug][vslug] = {
          size: { value: `${v.size||16}px`, type: 'dimension' },
          lineHeight: { value: String(v.leading||1.5), type: 'number' },
          weight: { value: String(v.weight||400), type: 'fontWeight' }
        };
      });
    });
  }
  if (state.spacings.length) {
    out.spacing = {};
    state.spacings.forEach(sp => {
      const slug = sp.name.toLowerCase().replace(/\s+/g,'-');
      out.spacing[slug] = {};
      spacingStopValues(sp.baseUnit).forEach(s => {
        out.spacing[slug][`${s.multiplier}x`] = { value: `${s.value}px`, type: 'dimension' };
      });
    });
  }
  if (state.shadows.length) {
    out.shadow = {};
    state.shadows.forEach(sh => {
      const slug = sh.name.toLowerCase().replace(/\s+/g,'-');
      out.shadow[slug] = { value: shadowToCss(sh.layers), type: 'shadow' };
    });
  }
  if (state.radii.length) {
    out.borderRadius = {};
    state.radii.forEach(r => {
      const slug = r.name.toLowerCase().replace(/\s+/g,'-');
      out.borderRadius[slug] = {};
      (r.stops||[]).forEach(s => {
        out.borderRadius[slug][s.label] = { value: s.value===9999?'9999px':`${s.value}px`, type: 'dimension' };
      });
    });
  }
  return JSON.stringify(out, null, 2);
}

/* ── Style Guide HTML ── */
function generateStyleGuide() {
  const name = document.getElementById('system-name')?.value || 'My Design System';
  const palHtml = state.palettes.map(p => `
    <section class="sg-section">
      <h2 class="sg-section-title">${escHtml(p.name)}</h2>
      <div class="sg-swatch-row">
        ${p.colors.map(c => `<div class="sg-swatch" style="background:${c.hex}"><span class="sg-swatch-stop" style="color:${getContrastColor(c.hex)}">${c.stop}</span><span class="sg-swatch-hex" style="color:${getContrastColor(c.hex)}">${c.hex}</span></div>`).join('')}
      </div>
    </section>`).join('');
  const fontHtml = state.fonts.map(f => `
    <section class="sg-section">
      <h2 class="sg-section-title">${escHtml(f.name)}</h2>
      <p class="sg-font-meta">${f.category} · Weights: ${(f.activeWeights||[]).join(', ')}</p>
      ${(f.variants||[]).map(v => `<div class="sg-type-row" style="font-family:'${escHtml(f.name)}',sans-serif;font-size:${v.size||16}px;font-weight:${v.weight||400};line-height:${v.leading||1.5}"><span class="sg-type-role">${escHtml(v.role||'Base')}</span>${escHtml(f.sampleText||'The quick brown fox')}</div>`).join('')}
    </section>`).join('');
  const spHtml = state.spacings.map(sp => `
    <section class="sg-section">
      <h2 class="sg-section-title">${escHtml(sp.name)}</h2>
      <div class="sg-spacing-rows">
        ${spacingStopValues(sp.baseUnit).map(s => `<div class="sg-spacing-row"><span class="sg-spacing-label">${s.multiplier}x</span><div class="sg-spacing-bar" style="width:${Math.min(s.value*2,400)}px"></div><span class="sg-spacing-val">${s.value}px</span></div>`).join('')}
      </div>
    </section>`).join('');
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escHtml(name)} — Style Guide</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:system-ui,-apple-system,sans-serif;background:#0e0e0f;color:#ededee;line-height:1.5;padding:40px 24px}.sg-header{max-width:900px;margin:0 auto 48px;border-bottom:1px solid #252528;padding-bottom:24px}.sg-title{font-size:32px;font-weight:700;letter-spacing:-0.5px;margin-bottom:6px}.sg-subtitle{font-size:14px;color:#8a8a94}.sg-body{max-width:900px;margin:0 auto}.sg-section{margin-bottom:40px}.sg-section-title{font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#52525c;margin-bottom:16px}.sg-swatch-row{display:flex;gap:4px;flex-wrap:wrap}.sg-swatch{width:80px;height:80px;border-radius:8px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding:6px;gap:2px}.sg-swatch-stop{font-size:9px;font-weight:700}.sg-swatch-hex{font-size:8px;font-family:monospace;opacity:0.8}.sg-font-meta{font-size:12px;color:#52525c;margin-bottom:12px}.sg-type-row{display:flex;align-items:baseline;gap:12px;margin-bottom:8px;padding:8px 0;border-bottom:1px solid #1c1c1f}.sg-type-role{font-size:10px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#52525c;min-width:80px;flex-shrink:0;font-family:system-ui}.sg-spacing-rows{display:flex;flex-direction:column;gap:8px}.sg-spacing-row{display:flex;align-items:center;gap:12px}.sg-spacing-label{font-size:11px;font-weight:600;color:#52525c;min-width:40px;font-family:monospace}.sg-spacing-bar{height:12px;background:#7c3aed;border-radius:3px;min-width:4px}.sg-spacing-val{font-size:11px;color:#8a8a94;font-family:monospace}.sg-category{font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#52525c;margin:32px 0 12px}</style></head><body><header class="sg-header"><div class="sg-title">${escHtml(name)}</div><div class="sg-subtitle">Design System Style Guide · Generated by Designr</div></header><main class="sg-body">${state.palettes.length?'<div class="sg-category">Colors</div>'+palHtml:''}${state.fonts.length?'<div class="sg-category">Typography</div>'+fontHtml:''}${state.spacings.length?'<div class="sg-category">Spacing</div>'+spHtml:''}</main></body></html>`;
}

/* ── Modal ── */
let _exportFormat = 'css';

const _generators = { css: generateCSS, json: generateJSON, scss: generateSCSS, tailwind: generateTailwind, js: generateJS, figma: generateFigmaVariables, 'style-dictionary': generateStyleDictionary, html: generateStyleGuide };

function _refreshExportPreview() {
  const fmt  = EXPORT_FORMATS[_exportFormat];
  document.getElementById('export-format-desc').textContent = fmt ? fmt.desc : '';

  if (_exportFormat === 'svg') {
    document.getElementById('export-code-content').textContent = '⬇  SVG preview is not shown inline.\nClick "Download File" to save the visual design system sheet.';
    document.getElementById('export-copy-btn').style.display = 'none';
  } else if (_exportFormat === 'html') {
    document.getElementById('export-code-content').textContent = '⬇  Style Guide preview is not shown inline.\nClick "Download File" to save the self-contained HTML file.';
    document.getElementById('export-copy-btn').style.display = '';
  } else {
    document.getElementById('export-code-content').textContent = _generators[_exportFormat]();
    document.getElementById('export-copy-btn').style.display  = '';
  }
}

function openExportTokensModal() {
  _refreshExportPreview();
  document.getElementById('export-tokens-modal').classList.remove('hidden');
}

function closeExportTokensModal() {
  document.getElementById('export-tokens-modal').classList.add('hidden');
}

/* ══════════════════════════════════════════════════════
   PROJECT SAVE / LOAD
══════════════════════════════════════════════════════ */
const PROJECT_VERSION = '1.1';
let _currentProjectPath = null;   // path of the last saved/opened file
let _unsaved = false;             // dirty flag

/* Forward-migrate an older project file to the current schema.
   Each step is idempotent and tolerant of missing fields so a half-built
   older file never throws on load. Add a new branch per version bump. */
function migrateProject(data) {
  if (!data || typeof data !== 'object') return {};
  const v = String(data.version || '1.0');

  // 1.0 → 1.1: only fonts/palettes/spacings/shadows existed; everything else absent.
  if (v === '1.0') {
    ['semantics','gradients','radii','borders','opacities','breakpoints',
     'zindices','motions','grids','icons'].forEach(k => { if (!data[k]) data[k] = []; });
    if (!data.componentProps) data.componentProps = {};
    if (!data.systemDefaults) data.systemDefaults = {};
    data.version = '1.1';
  }

  data.version = PROJECT_VERSION;
  return data;
}

function _markUnsaved() {
  scheduleAutosave();           // every change schedules a draft (fires even if already dirty)
  if (_unsaved) return;
  _unsaved = true;
  document.title = 'Designr — ' + (document.getElementById('system-name').value || 'Untitled') + ' •';
}

function _markSaved(filePath) {
  _unsaved = false;
  _currentProjectPath = filePath || _currentProjectPath;
  const name = document.getElementById('system-name').value || 'Untitled';
  document.title = 'Designr — ' + name;
  if (_currentProjectPath) pushRecentFile(_currentProjectPath, name);
  _autosaveNow();               // refresh draft as clean (dirty:false) so recovery won't re-offer it
}

/* ── Autosave / crash recovery / recent files (localStorage) ── */
const LS_AUTOSAVE = 'designr:autosave';
const LS_RECENTS  = 'designr:recents';
let _autosaveTimer = null;

function _autosaveNow() {
  try {
    localStorage.setItem(LS_AUTOSAVE, JSON.stringify({
      json:  serializeProject(),
      name:  document.getElementById('system-name')?.value || 'Untitled',
      path:  _currentProjectPath || null,
      dirty: _unsaved,
      ts:    Date.now(),
    }));
  } catch (e) { /* quota / serialize failure — non-fatal */ }
}

function scheduleAutosave() {
  clearTimeout(_autosaveTimer);
  _autosaveTimer = setTimeout(_autosaveNow, 800);
}

function _clearAutosave() { try { localStorage.removeItem(LS_AUTOSAVE); } catch (e) {} }

function getRecentFiles() {
  try { return JSON.parse(localStorage.getItem(LS_RECENTS) || '[]'); } catch (e) { return []; }
}

function pushRecentFile(path, name) {
  if (!path) return;
  try {
    let list = getRecentFiles().filter(r => r.path !== path);
    list.unshift({ path, name: name || 'Untitled', ts: Date.now() });
    localStorage.setItem(LS_RECENTS, JSON.stringify(list.slice(0, 8)));
  } catch (e) {}
}

function maybeOfferRecovery() {
  let rec;
  try { rec = JSON.parse(localStorage.getItem(LS_AUTOSAVE) || 'null'); } catch (e) { return; }
  if (!rec || !rec.dirty) return;
  let data; try { data = JSON.parse(rec.json); } catch (e) { return; }
  const hasContent = ['fonts','palettes','spacings','shadows'].some(k => (data[k] || []).length);
  if (!hasContent) return;
  const when = new Date(rec.ts).toLocaleString();
  if (confirm(`Recover unsaved work from ${when}?\n\n"${rec.name}" had unsaved changes when Designr last closed.`)) {
    deserializeProject(rec.json);
    if (rec.path) _currentProjectPath = rec.path;
    _markUnsaved();
    toast('Recovered unsaved work');
  } else {
    _clearAutosave();
  }
}

function serializeProject() {
  const doc = {
    version:    PROJECT_VERSION,
    systemName: document.getElementById('system-name').value || 'My Design System',
  };
  [...DOC_ARRAY_KEYS, ...DOC_OBJECT_KEYS, ...DOC_FLAG_KEYS].forEach(k => { doc[k] = state[k]; });
  return JSON.stringify(doc, null, 2);
}

async function deserializeProject(json) {
  let data;
  try { data = JSON.parse(json); } catch { toast('Could not read project file'); return; }

  data = migrateProject(data);   // forward-migrate older schemas; tolerant of missing fields

  pushHistory();

  // Restore state — reset every doc field so nothing leaks from the previous project
  DOC_ARRAY_KEYS.forEach(k => { state[k] = data[k] || []; });
  state.componentProps = data.componentProps || {};
  state.systemDefaults = data.systemDefaults || {};
  DOC_FLAG_KEYS.forEach(k => { state[k] = !!data[k]; });
  // activeComponents must keep its full key set even if the file omits some
  Object.keys(state.activeComponents).forEach(k => {
    state.activeComponents[k] = !!(data.activeComponents && data.activeComponents[k]);
  });
  state.selectedId   = null;
  state.selectedType = null;

  // Restore system name
  const nameEl = document.getElementById('system-name');
  if (nameEl) nameEl.value = data.systemName || 'My Design System';

  // Re-load Google Fonts for any font that was from google
  state.fonts.forEach(font => {
    if (!font.source || font.source === 'google') {
      loadGoogleFont(font.name, font.weights);
    } else if (font.source === 'system' && font.filePath && IS_ELECTRON) {
      const url = window.electronAPI.fontFileUrl(font.filePath);
      if (!document.querySelector(`style[data-font="${CSS.escape(font.name)}"]`)) {
        const style = document.createElement('style');
        style.dataset.font = font.name;
        style.textContent = `@font-face { font-family: '${font.name}'; src: url('${url}'); }`;
        document.head.appendChild(style);
      }
    }
  });

  renderAll();
  toast('Project loaded');
}

async function saveProject(forceDialog = false) {
  if (!IS_ELECTRON) { toast('Save requires the desktop app'); return; }

  const json = serializeProject();
  const name = document.getElementById('system-name').value || 'My Design System';

  // If we already have a path and not forcing a dialog, save directly
  if (_currentProjectPath && !forceDialog) {
    const fs = require ? null : null; // main process handles writes
    const savedPath = await window.electronAPI.saveProject(json, name, false);
    if (savedPath) { _markSaved(savedPath); toast('Project saved'); }
    return;
  }

  const savedPath = await window.electronAPI.saveProject(json, name, true);
  if (savedPath) { _markSaved(savedPath); toast('Project saved'); }
}

async function openProject() {
  if (!IS_ELECTRON) { toast('Open requires the desktop app'); return; }

  const result = await window.electronAPI.openProject();
  if (!result) return;

  _currentProjectPath = result.filePath;
  await deserializeProject(result.data);
  _markSaved(result.filePath);
}

async function openRecentProject(filePath) {
  if (!IS_ELECTRON) { toast('Open requires the desktop app'); return; }
  const result = await window.electronAPI.openProjectPath(filePath);
  if (!result || result.error) {
    toast(result?.error === 'missing' ? 'File no longer exists — removed from recents' : 'Could not open file');
    // prune missing file from recents
    try { localStorage.setItem(LS_RECENTS, JSON.stringify(getRecentFiles().filter(r => r.path !== filePath))); } catch (e) {}
    return;
  }
  _currentProjectPath = result.filePath;
  await deserializeProject(result.data);
  _markSaved(result.filePath);
}

async function newProject() {
  if (_unsaved) {
    // Simple confirm — could be made fancier with a modal
    if (!confirm('Discard unsaved changes and start a new project?')) return;
  }
  pushHistory();
  DOC_ARRAY_KEYS.forEach(k => { state[k] = []; });
  state.componentProps = {};
  state.systemDefaults = {};
  Object.keys(state.activeComponents).forEach(k => { state.activeComponents[k] = false; });
  DOC_FLAG_KEYS.forEach(k => { state[k] = false; });
  state.selectedId   = null;
  state.selectedType = null;
  _currentProjectPath = null;

  const nameEl = document.getElementById('system-name');
  if (nameEl) nameEl.value = 'My Design System';

  document.title = 'Designr';
  _unsaved = false;
  renderAll();
  toast('New project');
}

async function exportSVG() {
  if (state.fonts.length === 0) { toast('Add at least one font before exporting'); return; }

  const systemName = document.getElementById('system-name').value || 'Design System';

  const COLS      = 2;
  const CARD_W    = 400;
  const CARD_H    = 210;
  const GAP       = 16;
  const PAD       = 40;
  const HDR_H     = 72;

  const rows   = Math.ceil(state.fonts.length / COLS);
  const svgW   = PAD * 2 + COLS * CARD_W + (COLS - 1) * GAP;
  const svgH   = PAD + HDR_H + rows * (CARD_H + GAP) + PAD;

  const gfFonts = state.fonts
    .map(f => `family=${encodeURIComponent(f.name)}:wght@${f.weights.join(';')}`)
    .join('&');

  const fontImportCSS = `@import url('https://fonts.googleapis.com/css2?${gfFonts}&display=swap');`;

  const cards = state.fonts.map((font, i) => {
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const x   = PAD + col * (CARD_W + GAP);
    const y   = PAD + HDR_H + row * (CARD_H + GAP);
    const ff  = `'${font.name}', ${fallback(font.category)}`;
    const sampleTrimmed = font.sampleText.length > 55
      ? font.sampleText.slice(0, 55) + '…'
      : font.sampleText;

    const weightChips = font.activeWeights.map((w, wi) => {
      const chipX = x + 18 + wi * 52;
      const chipY = y + CARD_H - 40;
      return `
        <rect x="${chipX}" y="${chipY}" width="46" height="22" rx="5" fill="#28282d" stroke="#2e2e33" stroke-width="1"/>
        <text x="${chipX + 23}" y="${chipY + 15}" font-family="${ff}" font-weight="${w}" font-size="11" fill="#8a8a94" text-anchor="middle">${w}</text>
      `;
    }).join('');

    return `
      <rect x="${x}" y="${y}" width="${CARD_W}" height="${CARD_H}" rx="12" fill="#161618" stroke="#252528" stroke-width="1"/>
      <text x="${x + 18}" y="${y + 28}" font-family="Inter, system-ui, sans-serif" font-size="13" font-weight="600" fill="#ededee">${escSvg(font.name)}</text>
      <rect x="${x + CARD_W - 106}" y="${y + 12}" width="${font.category.length * 6.8 + 14}" height="20" rx="10" fill="#28282d"/>
      <text x="${x + CARD_W - 99 + (font.category.length * 6.8 + 14) / 2 - 7}" y="${y + 26}" font-family="Inter, system-ui, sans-serif" font-size="10" font-weight="600" fill="#52525c" text-anchor="middle">${escSvg(font.category)}</text>
      <text x="${x + 18}" y="${y + 90}" font-family="${ff}" font-weight="${font.activeWeights[0] || 400}" font-size="50" fill="#ededee">Aa Bb Cc</text>
      <text x="${x + 18}" y="${y + 122}" font-family="${ff}" font-weight="${font.activeWeights[0] || 400}" font-size="${font.previewSize}" fill="#8a8a94">${escSvg(sampleTrimmed)}</text>
      <line x1="${x + 18}" y1="${y + CARD_H - 50}" x2="${x + CARD_W - 18}" y2="${y + CARD_H - 50}" stroke="#252528" stroke-width="1"/>
      ${weightChips}
    `;
  }).join('');

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${svgW}" height="${svgH}" viewBox="0 0 ${svgW} ${svgH}"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <style><![CDATA[${fontImportCSS}]]></style>
  </defs>
  <rect width="${svgW}" height="${svgH}" fill="#0e0e0f"/>
  <text x="${PAD}" y="${PAD + 32}" font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="700" fill="#ededee" letter-spacing="-0.4">${escSvg(systemName)}</text>
  <text x="${PAD}" y="${PAD + 54}" font-family="Inter, system-ui, sans-serif" font-size="12" fill="#52525c">Typography — ${state.fonts.length} font${state.fonts.length !== 1 ? 's' : ''}</text>
  ${cards}
</svg>`;

  const filename = `${systemName.toLowerCase().replace(/\s+/g, '-')}-design-system.svg`;

  if (IS_ELECTRON) {
    const saved = await window.electronAPI.saveSVG(svg, filename);
    if (saved) toast('SVG exported successfully');
  } else {
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast('SVG exported successfully');
  }
}

/* ══════════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════════ */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escSvg(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ══════════════════════════════════════════════════════
   RENDER ALL
══════════════════════════════════════════════════════ */
/* ══════════════════════════════════════════════════════
   SPACING
══════════════════════════════════════════════════════ */
const SPACING_STOPS = [1, 2, 3, 4, 5, 6, 8, 10, 12, 16];

function spacingStopValues(baseUnit) {
  const base = parseInt(baseUnit) || 4;
  return SPACING_STOPS.map(m => ({ multiplier: m, value: base * m }));
}

function addSpacing(name, baseUnit) {
  pushHistory();
  const id = uid();
  state.spacings.push({ id, name: name || 'Untitled', baseUnit: Math.max(1, Math.min(24, parseInt(baseUnit) || 4)), notes: '' });
  state.selectedId   = id;
  state.selectedType = 'spacing';
  renderAll();
  toast(`Added spacing scale "${name || 'Untitled'}"`);
}

function removeSpacing(id) {
  pushHistory();
  state.spacings = state.spacings.filter(s => s.id !== id);
  if (state.selectedId === id) { state.selectedId = null; state.selectedType = null; }
  renderAll();
  toast('Spacing scale removed');
}

function renderSpacingCanvas() {
  const section = document.getElementById('canvas-spacing-section');
  const grid    = document.getElementById('spacing-grid');
  const badge   = document.getElementById('spacing-badge');

  badge.textContent = state.spacings.length;

  if (state.spacings.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');

  const allVals = state.spacings.flatMap(sc => spacingStopValues(sc.baseUnit).map(sv => sv.value));
  const maxVal  = Math.max(...allVals, 1);

  grid.innerHTML = state.spacings.map(sc => {
    const isSel = state.selectedId === sc.id && state.selectedType === 'spacing';
    const stops = spacingStopValues(sc.baseUnit);
    return `
      <div class="spacing-card ${isSel ? 'selected' : ''}" data-spacing-id="${sc.id}">
        <div class="spacing-card-top">
          <div class="spacing-card-meta">
            <span class="spacing-card-name">${escHtml(sc.name)}</span>
            <span class="spacing-card-tag">Base: ${sc.baseUnit}px · ${SPACING_STOPS.length} stops</span>
          </div>
          <div class="font-card-actions">
            <div class="card-copy-btn-wrap">
              <button class="card-copy-btn" data-copy-type="spacing" data-copy-id="${sc.id}" title="Copy token code">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M1.5 7.5V1.5h6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
              </button>
              <div class="card-copy-menu hidden" data-copy-menu="${sc.id}">
                <button data-fmt="css">CSS var</button>
                <button data-fmt="scss">SCSS var</button>
                <button data-fmt="js">JS</button>
                <button data-fmt="tailwind">Tailwind</button>
              </div>
            </div>
            <button class="card-action-btn" data-dup-spacing-id="${sc.id}" title="Duplicate scale">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="3.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/></svg>
            </button>
            <button class="card-action-btn danger" data-remove-spacing-id="${sc.id}" title="Remove scale" aria-label="Remove ${escHtml(sc.name)}">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1.5 1.5L9.5 9.5M9.5 1.5L1.5 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="spacing-card-stops">
          ${stops.map(sv => `
            <div class="spacing-stop-row">
              <span class="spacing-stop-label">×${sv.multiplier}</span>
              <div class="spacing-stop-bar-wrap">
                <div class="spacing-stop-bar" style="width:${Math.round((sv.value / maxVal) * 100)}%"></div>
              </div>
              <span class="spacing-stop-val">${sv.value}px</span>
              <div class="spacing-vis-bar" style="width:${Math.min(sv.value * 1.5, 200)}px"></div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // Delegated events on grid
  grid.onclick = e => {
    const removeBtn = e.target.closest('[data-remove-spacing-id]');
    if (removeBtn) { e.stopPropagation(); removeSpacing(removeBtn.dataset.removeSpacingId); return; }
    const card = e.target.closest('[data-spacing-id]');
    if (card) {
      state.selectedId   = card.dataset.spacingId;
      state.selectedType = 'spacing';
      renderAll();
    }
  };
}

function renderSpacingProperties() {
  const emptyEl = document.getElementById('props-empty');
  const panel   = document.getElementById('props-font');
  const sc      = state.spacings.find(s => s.id === state.selectedId);

  if (!sc) {
    emptyEl.classList.remove('hidden');
    panel.classList.add('hidden');
    return;
  }

  emptyEl.classList.add('hidden');
  panel.classList.remove('hidden');

  const stops  = spacingStopValues(sc.baseUnit);
  const maxVal = Math.max(...stops.map(sv => sv.value), 1);

  panel.innerHTML = `
    <div class="prop-section">
      <span class="prop-section-label">Spacing Scale</span>
      <div class="prop-field">
        <label>Name</label>
        <input class="prop-input" type="text" id="prop-spacing-name" value="${escHtml(sc.name)}" placeholder="Scale name">
      </div>
      <div class="prop-field">
        <label>Base Unit</label>
        <div class="kerning-row">
          <button class="stepper-btn" id="prop-spacing-base-dec">−</button>
          <input class="stepper-input" type="number" id="prop-spacing-base" value="${sc.baseUnit}" min="1" max="24">
          <button class="stepper-btn" id="prop-spacing-base-inc">+</button>
          <span class="kerning-unit">px</span>
        </div>
      </div>
    </div>
    <div class="prop-section">
      <span class="prop-section-label">Scale Preview</span>
      ${stops.map(sv => `
        <div class="spacing-stop-row" style="margin-bottom:5px">
          <span class="spacing-stop-label">×${sv.multiplier}</span>
          <div class="spacing-stop-bar-wrap">
            <div class="spacing-stop-bar" style="width:${Math.round((sv.value / maxVal) * 100)}%;opacity:1;background:var(--accent-2)"></div>
          </div>
          <span class="spacing-stop-val">${sv.value}px</span>
        </div>
      `).join('')}
    </div>
    <div class="prop-section">
      <button class="danger-btn" id="prop-remove-spacing-btn">Remove Scale</button>
    </div>
  `;

  let _nameHistPushed = false;
  document.getElementById('prop-spacing-name').addEventListener('input', e => {
    if (!_nameHistPushed) { pushHistory(); _nameHistPushed = true; }
    sc.name = e.target.value;
    renderSpacingCanvas();
  });

  function applySpacingBase(val) {
    val = Math.max(1, Math.min(24, parseInt(val) || 4));
    pushHistory();
    sc.baseUnit = val;
    document.getElementById('prop-spacing-base').value = val;
    renderSpacingCanvas();
    renderSpacingProperties();
  }
  document.getElementById('prop-spacing-base').addEventListener('change', e => applySpacingBase(e.target.value));
  document.getElementById('prop-spacing-base-dec').addEventListener('click', () => applySpacingBase(sc.baseUnit - 1));
  document.getElementById('prop-spacing-base-inc').addEventListener('click', () => applySpacingBase(sc.baseUnit + 1));

  document.getElementById('prop-remove-spacing-btn').addEventListener('click', () => removeSpacing(sc.id));
}

function openSpacingModal() {
  document.getElementById('spacing-name-input').value = '';
  document.getElementById('spacing-base-input').value = '4';
  renderSpacingScalePreview(4);
  document.getElementById('spacing-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('spacing-name-input').focus(), 50);
}

function closeSpacingModal() {
  document.getElementById('spacing-modal').classList.add('hidden');
}

function renderSpacingScalePreview(baseUnit) {
  const base   = Math.max(1, Math.min(24, parseInt(baseUnit) || 4));
  const stops  = SPACING_STOPS.map(m => ({ multiplier: m, value: base * m }));
  const maxVal = stops[stops.length - 1].value;
  document.getElementById('spacing-scale-preview').innerHTML = stops.map(sv => `
    <div class="spacing-preview-row">
      <span class="spacing-preview-label">×${sv.multiplier}</span>
      <div class="spacing-preview-bar-wrap">
        <div class="spacing-preview-bar" style="width:${Math.round((sv.value / maxVal) * 100)}%"></div>
      </div>
      <span class="spacing-preview-val">${sv.value}px</span>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════════════
   SHADOWS
══════════════════════════════════════════════════════ */
const SHADOW_PRESETS = {
  sm:     [{ x: 0, y: 1,  blur: 3,  spread:  0, color: '#000000', opacity: 0.10 }],
  md:     [{ x: 0, y: 4,  blur: 8,  spread: -2, color: '#000000', opacity: 0.12 }],
  lg:     [{ x: 0, y: 8,  blur: 16, spread: -4, color: '#000000', opacity: 0.14 }],
  xl:     [{ x: 0, y: 16, blur: 32, spread: -8, color: '#000000', opacity: 0.16 }],
  '2xl':  [{ x: 0, y: 24, blur: 48, spread: -12, color: '#000000', opacity: 0.20 }],
  custom: [{ x: 0, y: 0,  blur: 0,  spread:  0, color: '#000000', opacity: 0.15 }],
};

function shadowToCss(layers) {
  return layers.map(l => {
    const { r, g, b } = hexToRgb(l.color || '#000000');
    return `${l.x}px ${l.y}px ${l.blur}px ${l.spread}px rgba(${r},${g},${b},${l.opacity})`;
  }).join(', ');
}

function addShadow(name, preset) {
  pushHistory();
  const id     = uid();
  const layers = JSON.parse(JSON.stringify(SHADOW_PRESETS[preset] || SHADOW_PRESETS.md));
  state.shadows.push({ id, name: name || 'Untitled', preset: preset || 'md', layers, notes: '' });
  state.selectedId   = id;
  state.selectedType = 'shadow';
  renderAll();
  toast(`Added shadow "${name || 'Untitled'}"`);
}

function removeShadow(id) {
  pushHistory();
  state.shadows = state.shadows.filter(s => s.id !== id);
  if (state.selectedId === id) { state.selectedId = null; state.selectedType = null; }
  renderAll();
  toast('Shadow removed');
}

function renderShadowCanvas() {
  const section = document.getElementById('canvas-shadows-section');
  const grid    = document.getElementById('shadow-grid');
  const badge   = document.getElementById('shadow-badge');

  badge.textContent = state.shadows.length;

  if (state.shadows.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');

  grid.innerHTML = state.shadows.map(sh => {
    const isSel = state.selectedId === sh.id && state.selectedType === 'shadow';
    const css   = shadowToCss(sh.layers);
    return `
      <div class="shadow-card ${isSel ? 'selected' : ''}" data-shadow-id="${sh.id}">
        <div class="shadow-card-top">
          <div class="shadow-card-meta">
            <span class="shadow-card-name">${escHtml(sh.name)}</span>
            <span class="shadow-card-tag">${sh.layers.length} layer${sh.layers.length !== 1 ? 's' : ''} · ${sh.preset}</span>
          </div>
          <div class="font-card-actions">
            <div class="card-copy-btn-wrap">
              <button class="card-copy-btn" data-copy-type="shadow" data-copy-id="${sh.id}" title="Copy token code">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M1.5 7.5V1.5h6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
              </button>
              <div class="card-copy-menu hidden" data-copy-menu="${sh.id}">
                <button data-fmt="css">CSS var</button>
                <button data-fmt="scss">SCSS var</button>
                <button data-fmt="js">JS</button>
                <button data-fmt="tailwind">Tailwind</button>
              </div>
            </div>
            <button class="card-action-btn" data-dup-shadow-id="${sh.id}" title="Duplicate shadow">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><rect x="3.5" y="3.5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/></svg>
            </button>
            <button class="card-action-btn danger" data-remove-shadow-id="${sh.id}" title="Remove shadow" aria-label="Remove ${escHtml(sh.name)}">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1.5 1.5L9.5 9.5M9.5 1.5L1.5 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="shadow-card-body">
          <div class="shadow-card-preview" style="box-shadow:${css}"></div>
          <div class="shadow-card-css">${escHtml(css)}</div>
        </div>
      </div>
    `;
  }).join('');

  // Delegated events on grid
  grid.onclick = e => {
    const removeBtn = e.target.closest('[data-remove-shadow-id]');
    if (removeBtn) { e.stopPropagation(); removeShadow(removeBtn.dataset.removeShadowId); return; }
    const card = e.target.closest('[data-shadow-id]');
    if (card) {
      state.selectedId   = card.dataset.shadowId;
      state.selectedType = 'shadow';
      renderAll();
    }
  };
}

function renderShadowProperties() {
  const emptyEl = document.getElementById('props-empty');
  const panel   = document.getElementById('props-font');
  const sh      = state.shadows.find(s => s.id === state.selectedId);

  if (!sh) {
    emptyEl.classList.remove('hidden');
    panel.classList.add('hidden');
    return;
  }

  emptyEl.classList.add('hidden');
  panel.classList.remove('hidden');

  const css = shadowToCss(sh.layers);

  panel.innerHTML = `
    <div class="prop-section">
      <span class="prop-section-label">Shadow</span>
      <div class="prop-field">
        <label>Name</label>
        <input class="prop-input" type="text" id="prop-shadow-name" value="${escHtml(sh.name)}" placeholder="Shadow name">
      </div>
    </div>
    <div class="prop-section">
      <span class="prop-section-label">Preview</span>
      <div class="shadow-preview-area" style="margin-bottom:0">
        <div id="prop-shadow-box" style="width:70px;height:50px;border-radius:8px;background:var(--bg-elevated);box-shadow:${css};transition:box-shadow 0.2s"></div>
      </div>
    </div>
    <div class="prop-section">
      <span class="prop-section-label">Layers</span>
      ${sh.layers.map((layer, i) => `
        <div style="margin-bottom:10px;padding:10px;background:var(--bg);border:1px solid var(--border);border-radius:8px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
            <span style="font-size:11px;font-weight:600;color:var(--text-2)">Layer ${i + 1}</span>
            <div style="display:flex;align-items:center;gap:6px">
              <span style="font-size:10px;color:var(--text-3)">Color</span>
              <button class="shadow-layer-color-btn" data-layer-color="${i}"
                      style="background:${layer.color || '#000000'}" title="Change shadow color"></button>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;min-width:0">
            <div class="prop-field" style="margin-bottom:0;min-width:0">
              <label>X</label>
              <div class="font-size-stepper">
                <button class="stepper-btn" data-sdec="x" data-slayer="${i}">−</button>
                <input class="stepper-input" type="number" data-layer="${i}" data-field="x" value="${layer.x}">
                <button class="stepper-btn" data-sinc="x" data-slayer="${i}">+</button>
              </div>
            </div>
            <div class="prop-field" style="margin-bottom:0;min-width:0">
              <label>Y</label>
              <div class="font-size-stepper">
                <button class="stepper-btn" data-sdec="y" data-slayer="${i}">−</button>
                <input class="stepper-input" type="number" data-layer="${i}" data-field="y" value="${layer.y}">
                <button class="stepper-btn" data-sinc="y" data-slayer="${i}">+</button>
              </div>
            </div>
            <div class="prop-field" style="margin-bottom:0;min-width:0">
              <label>Blur</label>
              <div class="font-size-stepper">
                <button class="stepper-btn" data-sdec="blur" data-slayer="${i}">−</button>
                <input class="stepper-input" type="number" data-layer="${i}" data-field="blur" value="${layer.blur}" min="0">
                <button class="stepper-btn" data-sinc="blur" data-slayer="${i}">+</button>
              </div>
            </div>
            <div class="prop-field" style="margin-bottom:0;min-width:0">
              <label>Spread</label>
              <div class="font-size-stepper">
                <button class="stepper-btn" data-sdec="spread" data-slayer="${i}">−</button>
                <input class="stepper-input" type="number" data-layer="${i}" data-field="spread" value="${layer.spread}">
                <button class="stepper-btn" data-sinc="spread" data-slayer="${i}">+</button>
              </div>
            </div>
            <div class="prop-field" style="margin-bottom:0;grid-column:1/-1;min-width:0">
              <label>Opacity <span style="color:var(--text-3)">(0–1)</span></label>
              <div class="font-size-stepper">
                <button class="stepper-btn" data-sdec="opacity" data-slayer="${i}">−</button>
                <input class="stepper-input" type="number" data-layer="${i}" data-field="opacity" value="${layer.opacity}" min="0" max="1" step="0.01">
                <button class="stepper-btn" data-sinc="opacity" data-slayer="${i}">+</button>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
      <button class="add-layer-btn" id="add-shadow-layer-btn">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M5.5 1V10M1 5.5H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        Add Layer
      </button>
    </div>
    <div class="prop-section">
      <span class="prop-section-label">CSS Value</span>
      <div class="shadow-css-preview" id="prop-shadow-css">${escHtml(css)}</div>
    </div>
    <div class="prop-section">
      <button class="danger-btn" id="prop-remove-shadow-btn">Remove Shadow</button>
    </div>
  `;

  let _shadowNameHistPushed = false;
  const nameEl = document.getElementById('prop-shadow-name');
  nameEl.addEventListener('focus', () => { _shadowNameHistPushed = false; });
  nameEl.addEventListener('blur',  () => { _shadowNameHistPushed = false; });
  nameEl.addEventListener('input', e => {
    if (!_shadowNameHistPushed) { pushHistory(); _shadowNameHistPushed = true; }
    sh.name = e.target.value;
    renderShadowCanvas();
  });

  document.getElementById('add-shadow-layer-btn').addEventListener('click', () => {
    pushHistory();
    sh.layers.push({ x: 0, y: 0, blur: 0, spread: 0, color: '#000000', opacity: 0.15 });
    renderShadowCanvas();
    renderShadowProperties();
  });

  document.getElementById('prop-remove-shadow-btn').addEventListener('click', () => removeShadow(sh.id));

  // Layer field changes → live update preview + CSS display
  let _layerHistPushed = false;
  panel.querySelectorAll('input[data-layer]').forEach(input => {
    input.addEventListener('focus', () => { _layerHistPushed = false; });
    input.addEventListener('blur',  () => { _layerHistPushed = false; });
    input.addEventListener('input', () => {
      if (!_layerHistPushed) { pushHistory(); _layerHistPushed = true; }
      const idx   = parseInt(input.dataset.layer);
      const field = input.dataset.field;
      sh.layers[idx][field] = parseFloat(input.value) || 0;
      const newCss = shadowToCss(sh.layers);
      const box = document.getElementById('prop-shadow-box');
      if (box) box.style.boxShadow = newCss;
      const cssEl = document.getElementById('prop-shadow-css');
      if (cssEl) cssEl.textContent = newCss;
      renderShadowCanvas();
    });
  });

  /* ── Shadow layer steppers ── */
  const shadowStepCfg = { x: 1, y: 1, blur: 1, spread: 1, opacity: 0.01 };
  const shadowClamp   = { x: [-50,50], y: [-50,50], blur: [0,100], spread: [-50,50], opacity: [0,1] };

  panel.querySelectorAll('[data-sdec],[data-sinc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const field  = btn.dataset.sdec ?? btn.dataset.sinc;
      const idx    = parseInt(btn.dataset.slayer);
      const dir    = btn.dataset.sdec !== undefined ? -1 : 1;
      const step   = shadowStepCfg[field] ?? 1;
      const [mn, mx] = shadowClamp[field] ?? [-Infinity, Infinity];
      sh.layers[idx][field] = parseFloat(Math.max(mn, Math.min(mx, (sh.layers[idx][field] ?? 0) + dir * step)).toFixed(2));
      // Sync input value
      const input = panel.querySelector(`input[data-layer="${idx}"][data-field="${field}"]`);
      if (input) input.value = sh.layers[idx][field];
      const newCss = shadowToCss(sh.layers);
      const box = document.getElementById('prop-shadow-box');
      if (box) box.style.boxShadow = newCss;
      const cssEl = document.getElementById('prop-shadow-css');
      if (cssEl) cssEl.textContent = newCss;
      renderShadowCanvas();
    });
  });

  /* ── Shadow layer color pickers ── */
  panel.querySelectorAll('[data-layer-color]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.layerColor);
      openColorPicker(sh.layers[idx].color || '#000000', hex => {
        pushHistory();
        sh.layers[idx].color = hex;
        btn.style.background = hex;
        const newCss = shadowToCss(sh.layers);
        const box = document.getElementById('prop-shadow-box');
        if (box) box.style.boxShadow = newCss;
        const cssEl = document.getElementById('prop-shadow-css');
        if (cssEl) cssEl.textContent = newCss;
        renderShadowCanvas();
      });
    });
  });
}

let _activeShadowPreset = 'sm';

function openShadowModal() {
  _activeShadowPreset = 'sm';
  document.getElementById('shadow-name-input').value = '';
  document.querySelectorAll('.shadow-preset-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.preset === 'sm');
  });
  updateShadowModalPreview('sm');
  document.getElementById('shadow-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('shadow-name-input').focus(), 50);
}

function closeShadowModal() {
  document.getElementById('shadow-modal').classList.add('hidden');
}

function updateShadowModalPreview(preset) {
  const layers = SHADOW_PRESETS[preset] || SHADOW_PRESETS.sm;
  const css = shadowToCss(layers);
  document.getElementById('shadow-preview-box').style.boxShadow = css;
  document.getElementById('shadow-css-preview').textContent = css;
}

/* WCAG contrast utilities (relativeLuminance/wcagContrast) consolidated into
   color.js as getLuminance/contrastRatio — the correct standard implementation. */

/* ══════════════════════════════════════════════════════
   COLOR HARMONIES
══════════════════════════════════════════════════════ */
function shiftHue(hex, deg) {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex((h + deg + 360) % 360, s, l);
}

function getHarmonies(baseHex) {
  return {
    complementary:    [baseHex, shiftHue(baseHex, 180)],
    analogous:        [shiftHue(baseHex, -30), baseHex, shiftHue(baseHex, 30)],
    triadic:          [baseHex, shiftHue(baseHex, 120), shiftHue(baseHex, 240)],
    splitComplementary: [baseHex, shiftHue(baseHex, 150), shiftHue(baseHex, 210)],
    tetradic:         [baseHex, shiftHue(baseHex, 90), shiftHue(baseHex, 180), shiftHue(baseHex, 270)],
  };
}

/* ══════════════════════════════════════════════════════
   SEMANTIC TOKENS
══════════════════════════════════════════════════════ */
const TOKEN_CATEGORY_ICONS = { color: '◈', typography: 'Aa', spacing: '↔', shadow: '◻' };

function addSemanticToken(name, category, value, reference, description) {
  pushHistory();
  state.semantics.push({ id: uid(), name, category, value, reference, description });
  renderSemanticTokens();
  toast(`Token "${name}" added`);
}

function removeSemanticToken(id) {
  pushHistory();
  state.semantics = state.semantics.filter(t => t.id !== id);
  renderSemanticTokens();
  toast('Token removed');
}

function renderSemanticTokens() {
  const section = document.getElementById('canvas-tokens-section');
  const grid    = document.getElementById('tokens-grid');
  const badge   = document.getElementById('tokens-badge');

  badge.textContent = state.semantics.length;

  if (state.semantics.length === 0) {
    section.classList.add('hidden');
    return;
  }
  section.classList.remove('hidden');

  grid.innerHTML = state.semantics.map(t => `
    <div class="token-card">
      <div class="token-card-icon">${TOKEN_CATEGORY_ICONS[t.category] || '◈'}</div>
      <div class="token-card-body">
        <div class="token-card-name">${escHtml(t.name)}</div>
        <div class="token-card-meta">${t.reference || t.value}</div>
        ${t.description ? `<div class="token-card-desc">${escHtml(t.description)}</div>` : ''}
      </div>
      <div class="token-card-actions">
        <button class="card-action-btn danger" data-remove-token-id="${t.id}" title="Remove token">
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M1.5 1.5L9.5 9.5M9.5 1.5L1.5 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  `).join('');

  grid.onclick = e => {
    const btn = e.target.closest('[data-remove-token-id]');
    if (btn) removeSemanticToken(btn.dataset.removeTokenId);
  };
}

function buildTokenValueOptions(category) {
  const opts = [];
  if (category === 'color') {
    state.palettes.forEach(p => {
      p.colors.forEach(c => opts.push({ label: `${p.name} / ${c.stop}`, value: c.hex, ref: `${p.name} / ${c.stop}` }));
    });
  } else if (category === 'spacing') {
    state.spacings.forEach(sc => {
      spacingStopValues(sc.baseUnit).forEach(sv => opts.push({ label: `${sc.name} / ${sv.multiplier}x (${sv.value}px)`, value: `${sv.value}px`, ref: `${sc.name} / ${sv.multiplier}x` }));
    });
  } else if (category === 'shadow') {
    state.shadows.forEach(sh => opts.push({ label: sh.name, value: shadowToCss(sh.layers), ref: sh.name }));
  } else if (category === 'typography') {
    state.fonts.forEach(f => {
      opts.push({ label: `${f.name} / family`, value: `'${f.name}', ${FALLBACK_STACKS[f.category] || 'sans-serif'}`, ref: `${f.name} / family` });
      (f.variants || []).forEach(v => opts.push({ label: `${f.name} / ${v.role} (${v.size}px)`, value: `${v.size}px`, ref: `${f.name} / ${v.role}` }));
    });
  }
  if (!opts.length) opts.push({ label: '— No tokens available —', value: '', ref: '' });
  return opts;
}

function openTokenModal(category = 'color') {
  const labels = { color: 'Color', typography: 'Typography', spacing: 'Spacing', shadow: 'Shadow' };
  document.getElementById('token-name-input').value = '';
  document.getElementById('token-desc-input').value = '';
  document.getElementById('token-category-select').value = category;
  document.getElementById('token-modal-subtitle').textContent = labels[category] + ' token';
  _populateTokenValueSelect(category);
  document.getElementById('token-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('token-name-input').focus(), 50);
}

function closeTokenModal() {
  document.getElementById('token-modal').classList.add('hidden');
}

function _populateTokenValueSelect(category) {
  const sel  = document.getElementById('token-value-select');
  const opts = buildTokenValueOptions(category);
  sel.innerHTML = opts.map(o => `<option value="${escHtml(o.value)}" data-ref="${escHtml(o.ref)}">${escHtml(o.label)}</option>`).join('');
}

/* ══════════════════════════════════════════════════════
   COMPONENT PREVIEW
══════════════════════════════════════════════════════ */
/* ── Component prop resolution helpers ── */
function _cpGet(compKey, key, fallback) {
  const v = state.componentProps[compKey]?.[key];
  if (v !== undefined && v !== null) return v;
  const sv = state.systemDefaults?.[key];
  if (sv !== undefined && sv !== null) return sv;
  return fallback;
}
function _cpPalette(compKey) {
  const id = _cpGet(compKey, 'paletteId', null);
  return (id ? state.palettes.find(p => p.id === id) : null) || state.palettes[0] || null;
}
function _cpColor(compKey, stopKey, fallbackStop, fallbackHex) {
  const pal  = _cpPalette(compKey);
  if (!pal) return fallbackHex;
  const stop = _cpGet(compKey, stopKey, fallbackStop);
  return pal.colors.find(c => c.stop === stop)?.hex
      || pal.colors[Math.round((pal.colors.length - 1) * stop / 1000)]?.hex
      || fallbackHex;
}
function _cpFontObj(compKey) {
  const id = _cpGet(compKey, 'fontId', null);
  return (id ? state.fonts.find(f => f.id === id) : null) || state.fonts[0] || null;
}
function _cpFont(compKey) {
  const font = _cpFontObj(compKey);
  if (!font) return 'system-ui, sans-serif';
  return `'${font.name}', ${FALLBACK_STACKS[font.category] || 'sans-serif'}`;
}
function _cpWeight(compKey) {
  const font    = _cpFontObj(compKey);
  const stored  = state.componentProps[compKey]?.weight;
  const weights = font?.activeWeights || [];
  if (stored && weights.includes(Number(stored))) return Number(stored);
  for (const w of [600,500,700,400]) { if (weights.includes(w)) return w; }
  return weights[0] || 400;
}
function _cpRadius(compKey) {
  const id    = _cpGet(compKey, 'radiusId', null);
  const label = _cpGet(compKey, 'radiusStop', null);
  if (id && label) {
    const atom = state.radii.find(r => r.id === id);
    const stop = atom?.stops.find(s => s.label === label);
    if (stop) return stop.value === 9999 ? '9999px' : `${stop.value}px`;
  }
  return '8px';
}
function _cpShadow(compKey) {
  const id = _cpGet(compKey, 'shadowId', null);
  const sh = (id ? state.shadows.find(s => s.id === id) : null) || state.shadows[0];
  return sh ? shadowToCss(sh.layers) : '0 1px 3px rgba(0,0,0,0.12)';
}
function _cpPadding(compKey) {
  const density = state.componentProps[compKey]?.density || 'default';
  const sp = state.spacings[0] ? spacingStopValues(state.spacings[0].baseUnit) : null;
  if (sp && sp.length >= 4) {
    const m = { compact:[sp[1]?.value||5,sp[2]?.value||12], default:[sp[2]?.value||8,sp[4]?.value||18], spacious:[sp[3]?.value||12,sp[5]?.value||24] };
    const [pv,ph] = m[density] || m.default;
    return [`${pv}px`,`${ph}px`];
  }
  return { compact:['5px','12px'], default:['8px','18px'], spacious:['12px','24px'] }[density] || ['8px','18px'];
}
function _cpBorderWidth(compKey) {
  const atomId = state.componentProps[compKey]?.borderAtomId;
  const stop   = state.componentProps[compKey]?.borderWidthStop;
  if (atomId && stop) {
    const s = state.borders.find(b=>b.id===atomId)?.stops.find(s=>s.label===stop);
    if (s) return `${s.value}px`;
  }
  return '1px';
}
function _cpTextHex(compKey, bgHex) {
  const ts = state.componentProps[compKey]?.textStop;
  if (ts && ts !== 'auto') {
    const c = _cpPalette(compKey)?.colors.find(c => c.stop === Number(ts));
    if (c) return c.hex;
  }
  return getContrastColor(bgHex);
}
function _cpHoverHex(compKey) {
  const pal = _cpPalette(compKey);
  if (!pal) return '#6d28d9';
  const stop = _cpGet(compKey, 'colorStop', 500);
  const idx  = pal.colors.findIndex(c => c.stop === stop);
  return pal.colors[Math.min(idx + 1, pal.colors.length - 1)]?.hex || pal.colors[idx]?.hex || '#6d28d9';
}
function _cpFocusRingHex(compKey) {
  const pal = _cpPalette(compKey);
  if (!pal) return 'rgba(124,58,237,0.3)';
  const stop = _cpGet(compKey, 'colorStop', 500);
  const idx  = pal.colors.findIndex(c => c.stop === stop);
  return (pal.colors[Math.max(0, idx - 2)]?.hex || '#a78bfa') + '50';
}
function _cpTransition(compKey) {
  const motId = state.componentProps[compKey]?.motionId;
  const mot   = (motId ? state.motions.find(m=>m.id===motId) : null) || state.motions[0];
  if (!mot) return '0.15s ease';
  const dur = mot.durations?.[0]?.ms || 150;
  const eas = mot.easings?.[0]?.fn   || 'ease';
  return `${dur}ms ${eas}`;
}
function _cpDarkMode(compKey) { return !!state.componentProps[compKey]?.darkMode; }
function _cpState(compKey)    { return state.componentProps[compKey]?.activeState || 'default'; }
function _cpShape(compKey)    { return state.componentProps[compKey]?.shape || 'default'; }
function _cpVariant(compKey)  { return state.componentProps[compKey]?.variant || 'solid'; }
function _cpText(compKey, key, def) { return escHtml(state.componentProps[compKey]?.[key] || def); }
// Computes state-modified primary hex
function _priHex(compKey) {
  const st = _cpState(compKey);
  const pri = _cpColor(compKey, 'colorStop', 500, '#7c3aed');
  if (st === 'hover')    return _cpHoverHex(compKey);
  if (st === 'focus')    return pri;
  if (st === 'disabled') return pri;
  return pri;
}
function _priFx(compKey, baseShadow) {
  const st = _cpState(compKey);
  if (st === 'focus')    return `0 0 0 3px ${_cpFocusRingHex(compKey)}, ${baseShadow}`;
  return baseShadow;
}
function _opacityFx(compKey) { return _cpState(compKey) === 'disabled' ? '0.45' : '1'; }
// Wrap in dark container if darkMode
function _darkWrap(compKey, inner) {
  if (!_cpDarkMode(compKey)) return inner;
  const pal = _cpPalette(compKey);
  const darkBg  = pal?.colors.find(c=>c.stop===900)?.hex || '#0f0f11';
  return `<div style="background:${darkBg};border-radius:8px;padding:16px">${inner}</div>`;
}
// Generate copyable CSS for this component
function _generateComponentCSS(compKey) {
  const pal    = _cpPalette(compKey);
  const palSlug = pal ? slugify(pal.name) : 'primary';
  const font   = _cpFontObj(compKey);
  const fontSlug = font ? slugify(font.name) : 'primary';
  const priStop  = _cpGet(compKey,'colorStop',500);
  const bgStop   = _cpGet(compKey,'bgStop',50);
  const bdStop   = _cpGet(compKey,'borderStop',200);
  const [pv,ph]  = _cpPadding(compKey);
  const r        = _cpRadius(compKey);
  const sh       = _cpShadow(compKey);
  const bw       = _cpBorderWidth(compKey);
  const fw       = _cpWeight(compKey);
  const tr       = _cpTransition(compKey);
  const priHex   = _cpColor(compKey,'colorStop',500,'#7c3aed');
  const bgHex    = _cpColor(compKey,'bgStop',50,'#f9fafb');
  const bdHex    = _cpColor(compKey,'borderStop',200,'#e5e7eb');
  const txHex    = _cpTextHex(compKey, priHex);
  const cssVar   = (type,slug,stop,fb) => pal ? `var(--color-${slug}-${stop})` : fb;
  const lines = [
    `/* ${COMP_LABELS[compKey] || compKey} */`,
    `.${compKey} {`,
    font   ? `  font-family: var(--font-${fontSlug}-family);  /* ${font.name} */` : `  font-family: system-ui, sans-serif;`,
    `  font-weight: ${fw};`,
    `  font-size: 13.5px;`,
    `  padding: ${pv} ${ph};`,
    `  border-radius: ${r};`,
    `  border: ${bw} solid ${cssVar('color',palSlug,bdStop,bdHex)};  /* ${bdHex} */`,
    `  background: ${cssVar('color',palSlug,bgStop,bgHex)};  /* ${bgHex} */`,
    `  color: ${txHex};`,
    `  box-shadow: ${sh};`,
    `  transition: all ${tr};`,
    `}`,
    ``,
    `.${compKey}:hover {`,
    `  background: ${cssVar('color',palSlug,priStop,priHex)};  /* ${priHex} */`,
    `  color: ${getContrastColor(priHex)};`,
    `}`,
    ``,
    `.${compKey}:focus {`,
    `  outline: none;`,
    `  box-shadow: 0 0 0 3px ${_cpFocusRingHex(compKey)};`,
    `}`,
    ``,
    `.${compKey}:disabled {`,
    `  opacity: 0.45;`,
    `  cursor: not-allowed;`,
    `}`,
  ];
  return lines.join('\n');
}

function renderComponentPreview() {
  const section = document.getElementById('canvas-components-section');
  const el      = document.getElementById('components-preview');
  const ac      = state.activeComponents;
  const anyOn   = Object.values(ac).some(Boolean);

  if (!anyOn) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');

  const parts = [];

  // Per-component helpers (resolve from componentProps + active atoms)
  const _cv  = (k, stopKey, defStop, fbHex) => _cpColor(k, stopKey, defStop, fbHex);
  const _ff  = (k) => _cpFont(k);
  const _r   = (k) => _cpRadius(k);
  const _sh  = (k) => _cpShadow(k);
  const _gap = () => {
    const sp = state.spacings[0] ? spacingStopValues(state.spacings[0].baseUnit) : [];
    return (sp[3]?.value || 16) + 'px';
  };
  const _tokenMap = (compKey) => state.showTokenMap && COMPONENT_TOKEN_MAP[compKey]
    ? `<div class="component-token-map">${COMPONENT_TOKEN_MAP[compKey].map(([role,token])=>`<div class="token-map-row"><span class="token-map-role">${escHtml(role)}</span><span class="token-map-var">${escHtml(token)}</span></div>`).join('')}</div>`
    : '';
  const _card = (compKey, content) => {
    const isSel = state.selectedType === 'component' && state.selectedId === compKey;
    return `<div class="component-preview-card ${isSel ? 'selected' : ''}" data-comp-key="${compKey}">${_darkWrap(compKey, content)}${_tokenMap(compKey)}</div>`;
  };

  if (ac.button) {
    const k='button', pri=_priHex(k), priT=_cpTextHex(k,pri), bd=_cpColor(k,'borderStop',200,'#e5e7eb'), mu=_cpColor(k,'bgStop',100,'#f3f4f6'), tx=_cpColor(k,'textStop',900,'#111827');
    const ff=_cpFont(k), fw=_cpWeight(k), r=_cpRadius(k), bw=_cpBorderWidth(k), tr=_cpTransition(k);
    const [pv,ph]=_cpPadding(k), sh=_priFx(k,_cpShadow(k)), op=_opacityFx(k), lbl=_cpText(k,'labelText','Button');
    const variant=_cpVariant(k);
    const solidBtn  = `<button style="padding:${pv} ${ph};background:${pri};color:${priT};border:${bw} solid transparent;border-radius:${r};font-family:${ff};font-size:13.5px;font-weight:${fw};cursor:pointer;box-shadow:${sh};opacity:${op};transition:all ${tr}">${lbl}</button>`;
    const secBtn    = `<button style="padding:${pv} ${ph};background:${mu};color:${tx};border:${bw} solid transparent;border-radius:${r};font-family:${ff};font-size:13.5px;font-weight:${fw};cursor:pointer;transition:all ${tr}">Secondary</button>`;
    const outlineBtn= `<button style="padding:${pv} ${ph};background:transparent;color:${tx};border:${bw} solid ${bd};border-radius:${r};font-family:${ff};font-size:13.5px;font-weight:${fw};cursor:pointer;transition:all ${tr}">Outline</button>`;
    const ghostBtn  = `<button style="padding:${pv} ${ph};background:transparent;color:${tx};border:${bw} solid transparent;border-radius:${r};font-family:${ff};font-size:13.5px;font-weight:${fw};cursor:pointer;transition:all ${tr}">Ghost</button>`;
    const destBtn   = `<button style="padding:${pv} ${ph};background:#ef4444;color:#fff;border:none;border-radius:${r};font-family:${ff};font-size:13.5px;font-weight:${fw};cursor:pointer;transition:all ${tr}">Destructive</button>`;
    const disBtn    = `<button style="padding:${pv} ${ph};background:${pri};color:${priT};border:none;border-radius:${r};font-family:${ff};font-size:13.5px;font-weight:${fw};opacity:0.4;cursor:not-allowed" disabled>Disabled</button>`;
    const variantMap = { solid:[solidBtn,secBtn,outlineBtn,ghostBtn], outline:[outlineBtn,solidBtn,ghostBtn], ghost:[ghostBtn,outlineBtn,solidBtn], destructive:[destBtn,solidBtn] };
    const btns = (variantMap[variant]||variantMap.solid).concat(variant!=='destructive'?[destBtn]:[],[disBtn]);
    parts.push(_card(k, `<span class="component-preview-title">Button</span><div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">${btns.join('')}</div>`));
  }

  if (ac.input) {
    const k='input',bg=_cpColor(k,'bgStop',50,'#f9fafb'),bd=_cpColor(k,'borderStop',200,'#e5e7eb'),tx=_cpTextHex(k,bg),t2=_cpColor(k,'subTextStop',600,'#4b5563');
    const ff=_cpFont(k),fw=_cpWeight(k),r=_cpRadius(k),bw=_cpBorderWidth(k),tr=_cpTransition(k),[pv,ph]=_cpPadding(k),st=_cpState(k);
    const focusSh = st==='focus'?`0 0 0 3px ${_cpFocusRingHex(k)}`:'none';
    const op = st==='disabled'?'0.45':'1';
    parts.push(_card(k,`<span class="component-preview-title">Input</span>
    <div style="display:flex;flex-wrap:wrap;gap:16px">
      <div style="display:flex;flex-direction:column;gap:5px;min-width:220px">
        <label style="font-family:${ff};font-size:13px;font-weight:${fw};color:${tx}">Email</label>
        <input type="text" placeholder="example@email.com" style="padding:${pv} ${ph};border:${bw} solid ${bd};border-radius:${r};font-family:${ff};font-size:13.5px;color:${tx};background:${bg};outline:none;width:100%;box-shadow:${focusSh};opacity:${op};transition:all ${tr}">
        <span style="font-family:${ff};font-size:11.5px;color:${t2}">Enter your email address.</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:5px;min-width:220px">
        <label style="font-family:${ff};font-size:13px;font-weight:${fw};color:${tx}">Password</label>
        <input type="password" placeholder="••••••••" style="padding:${pv} ${ph};border:${bw} solid #ef4444;border-radius:${r};font-family:${ff};font-size:13.5px;color:${tx};background:${bg};outline:none;width:100%;transition:all ${tr}">
        <span style="font-family:${ff};font-size:11.5px;color:#ef4444">Password must be 8+ characters.</span>
      </div>
    </div>`));
  }

  if (ac.card) {
    const k='card',bg=_cpColor(k,'bgStop',50,'#f9fafb'),bd=_cpColor(k,'borderStop',200,'#e5e7eb'),pri=_priHex(k),priT=_cpTextHex(k,pri);
    const tx=_cpTextHex(k,bg),t2=_cpColor(k,'subTextStop',600,'#4b5563'),ff=_cpFont(k),fw=_cpWeight(k),r=_cpRadius(k),bw=_cpBorderWidth(k),sh=_priFx(k,_cpShadow(k)),tr=_cpTransition(k);
    const [pv,ph]=_cpPadding(k),title=_cpText(k,'titleText','Create project'),desc=_cpText(k,'descText','Deploy your new project in one-click.');
    parts.push(_card(k,`<span class="component-preview-title">Card</span>
    <div style="width:300px;background:${bg};border:${bw} solid ${bd};border-radius:${r};box-shadow:${sh};overflow:hidden;transition:all ${tr}">
      <div style="padding:${ph};border-bottom:${bw} solid ${bd}">
        <div style="font-family:${ff};font-size:16px;font-weight:${fw};color:${tx}">${title}</div>
        <div style="font-family:${ff};font-size:13px;color:${t2};margin-top:4px">${desc}</div>
      </div>
      <div style="padding:${ph};display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;flex-direction:column;gap:5px">
          <label style="font-family:${ff};font-size:12.5px;font-weight:${fw};color:${tx}">Name</label>
          <input placeholder="Name of your project" style="padding:${pv} ${ph};border:${bw} solid ${bd};border-radius:6px;font-family:${ff};font-size:13px;background:${bg};outline:none">
        </div>
      </div>
      <div style="padding:${pv} ${ph};border-top:${bw} solid ${bd};display:flex;justify-content:flex-end;gap:8px">
        <button style="padding:${pv} ${ph};background:transparent;border:${bw} solid ${bd};border-radius:6px;font-family:${ff};font-size:12.5px;font-weight:${fw};color:${tx};cursor:pointer;transition:all ${tr}">Cancel</button>
        <button style="padding:${pv} ${ph};background:${pri};border:none;border-radius:6px;font-family:${ff};font-size:12.5px;font-weight:${fw};color:${priT};cursor:pointer;transition:all ${tr}">Deploy</button>
      </div>
    </div>`));
  }

  if (ac.badge) {
    const k='badge',pri=_priHex(k),priT=_cpTextHex(k,pri),tx=_cpColor(k,'textStop',900,'#111827'),bd=_cpColor(k,'borderStop',200,'#e5e7eb'),mu=_cpColor(k,'bgStop',100,'#f3f4f6');
    const ff=_cpFont(k),fw=_cpWeight(k),tr=_cpTransition(k),op=_opacityFx(k),lbl=_cpText(k,'labelText','Badge');
    const shape=_cpShape(k), shapeR = shape==='pill'?'99px':shape==='square'?'3px':'6px';
    const variant=_cpVariant(k);
    const solidBadge    = `<span style="padding:3px 10px;background:${pri};color:${priT};border-radius:${shapeR};font-family:${ff};font-size:11.5px;font-weight:${fw};opacity:${op};transition:all ${tr}">${lbl}</span>`;
    const secBadge      = `<span style="padding:3px 10px;background:${mu};color:${tx};border-radius:${shapeR};font-family:${ff};font-size:11.5px;font-weight:${fw};transition:all ${tr}">Secondary</span>`;
    const outlineBadge  = `<span style="padding:3px 10px;background:transparent;color:${tx};border:1px solid ${bd};border-radius:${shapeR};font-family:${ff};font-size:11.5px;font-weight:${fw};transition:all ${tr}">Outline</span>`;
    const extraBadges   = `<span style="padding:3px 10px;background:#fef2f2;color:#ef4444;border-radius:${shapeR};font-family:${ff};font-size:11.5px;font-weight:${fw}">Error</span><span style="padding:3px 10px;background:#f0fdf4;color:#16a34a;border-radius:${shapeR};font-family:${ff};font-size:11.5px;font-weight:${fw}">Success</span><span style="padding:3px 10px;background:#fffbeb;color:#d97706;border-radius:${shapeR};font-family:${ff};font-size:11.5px;font-weight:${fw}">Warning</span>`;
    const varMap = { solid:[solidBadge,secBadge,outlineBadge], outline:[outlineBadge,solidBadge,secBadge], secondary:[secBadge,solidBadge,outlineBadge] };
    parts.push(_card(k,`<span class="component-preview-title">Badge</span><div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center">${(varMap[variant]||varMap.solid).join('')}${extraBadges}</div>`));
  }

  if (ac.alert) {
    const k='alert',bg=_cpColor(k,'bgStop',50,'#f9fafb'),bd=_cpColor(k,'borderStop',200,'#e5e7eb'),tx=_cpTextHex(k,bg),t2=_cpColor(k,'subTextStop',600,'#4b5563');
    const ff=_cpFont(k),fw=_cpWeight(k),r=_cpRadius(k),bw=_cpBorderWidth(k);
    const title=_cpText(k,'titleText','Heads up!'),msg=_cpText(k,'msgText','You can add components to your app using the CLI.');
    parts.push(_card(k,`<span class="component-preview-title">Alert</span>
    <div style="display:flex;flex-direction:column;gap:10px;max-width:420px">
      <div style="padding:14px 16px;border:${bw} solid ${bd};border-radius:${r};background:${bg};display:flex;gap:12px;align-items:flex-start">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="flex-shrink:0;margin-top:1px"><circle cx="8" cy="8" r="7" stroke="${tx}" stroke-width="1.4"/><path d="M8 5v4M8 11v.5" stroke="${tx}" stroke-width="1.5" stroke-linecap="round"/></svg>
        <div><div style="font-family:${ff};font-size:13px;font-weight:${fw};color:${tx};margin-bottom:3px">${title}</div><div style="font-family:${ff};font-size:12.5px;color:${t2};line-height:1.5">${msg}</div></div>
      </div>
      <div style="padding:14px 16px;border:${bw} solid #fca5a5;border-radius:${r};background:#fef2f2;display:flex;gap:12px;align-items:flex-start">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="flex-shrink:0;margin-top:1px"><circle cx="8" cy="8" r="7" stroke="#ef4444" stroke-width="1.4"/><path d="M8 5v4M8 11v.5" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round"/></svg>
        <div><div style="font-family:${ff};font-size:13px;font-weight:${fw};color:#b91c1c;margin-bottom:3px">Error</div><div style="font-family:${ff};font-size:12.5px;color:#ef4444;line-height:1.5">Your session has expired. Please log in again.</div></div>
      </div>
    </div>`));
  }

  if (ac.avatar) {
    const k='avatar',pri=_priHex(k),priT=_cpTextHex(k,pri),mu=_cpColor(k,'bgStop',100,'#f3f4f6'),bd=_cpColor(k,'borderStop',200,'#e5e7eb'),t2=_cpColor(k,'subTextStop',600,'#4b5563');
    const ff=_cpFont(k),fw=_cpWeight(k),op=_opacityFx(k);
    const shape=_cpShape(k), shapeR=shape==='circle'?'50%':shape==='square'?'4px':'12px';
    const initials=_cpText(k,'initialsText','JD');
    parts.push(_card(k,`<span class="component-preview-title">Avatar</span>
    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
      ${[32,40,48,56].map((sz,i)=>`<div style="width:${sz}px;height:${sz}px;border-radius:${shapeR};background:${pri};color:${priT};display:flex;align-items:center;justify-content:center;font-family:${ff};font-size:${sz*0.35}px;font-weight:${fw};flex-shrink:0;opacity:${op}">${i===0?initials:['AB','CM','LK'][i-1]}</div>`).join('')}
      <div style="width:40px;height:40px;border-radius:${shapeR};background:${mu};border:2px dashed ${bd};display:flex;align-items:center;justify-content:center;color:${t2};font-size:18px">+</div>
    </div>`));
  }

  if (ac.tabs) {
    const k='tabs',pri=_priHex(k),priT=_cpTextHex(k,pri),t2=_cpColor(k,'subTextStop',600,'#4b5563'),bd=_cpColor(k,'borderStop',200,'#e5e7eb');
    const ff=_cpFont(k),fw=_cpWeight(k),tr=_cpTransition(k),op=_opacityFx(k);
    const tab1=_cpText(k,'tab1Text','Account'),tab2=_cpText(k,'tab2Text','Password');
    parts.push(_card(k,`<span class="component-preview-title">Tabs</span>
    <div style="max-width:400px;opacity:${op}">
      <div style="display:flex;border-bottom:2px solid ${bd};margin-bottom:16px">
        <div style="padding:8px 16px;font-family:${ff};font-size:13.5px;font-weight:${fw};color:${priText};border-bottom:2px solid ${pri};margin-bottom:-2px;cursor:pointer;transition:all ${tr}">${tab1}</div>
        <div style="padding:8px 16px;font-family:${ff};font-size:13.5px;font-weight:400;color:${t2};cursor:pointer;transition:all ${tr}">${tab2}</div>
        <div style="padding:8px 16px;font-family:${ff};font-size:13.5px;font-weight:400;color:${t2};cursor:pointer;transition:all ${tr}">Settings</div>
      </div>
      <div style="font-family:${ff};font-size:13px;color:${t2}">Make changes to your account here. Click save when you're done.</div>
      <div style="display:flex;gap:8px;margin-top:14px">
        <button style="padding:7px 16px;background:${pri};color:${priT};border:none;border-radius:6px;font-family:${ff};font-size:13px;font-weight:${fw};cursor:pointer;transition:all ${tr}">Save changes</button>
      </div>
    </div>`));
  }

  if (ac.select) {
    const k='select',bg=_cpColor(k,'bgStop',50,'#f9fafb'),bd=_cpColor(k,'borderStop',200,'#e5e7eb'),tx=_cpTextHex(k,bg);
    const ff=_cpFont(k),fw=_cpWeight(k),r=_cpRadius(k),bw=_cpBorderWidth(k),tr=_cpTransition(k),op=_opacityFx(k);
    const focusSh=_cpState(k)==='focus'?`0 0 0 3px ${_cpFocusRingHex(k)}`:'none';
    parts.push(_card(k,`<span class="component-preview-title">Select</span>
    <div style="display:flex;flex-wrap:wrap;gap:16px;opacity:${op}">
      <div style="display:flex;flex-direction:column;gap:5px;min-width:200px">
        <label style="font-family:${ff};font-size:13px;font-weight:${fw};color:${tx}">Framework</label>
        <select style="padding:8px 12px;border:${bw} solid ${bd};border-radius:${r};font-family:${ff};font-size:13.5px;color:${tx};background:${bg};outline:none;width:100%;box-shadow:${focusSh};transition:all ${tr}">
          <option>Select a framework…</option><option selected>Next.js</option><option>SvelteKit</option><option>Nuxt.js</option>
        </select>
      </div>
      <div style="display:flex;flex-direction:column;gap:5px;min-width:200px">
        <label style="font-family:${ff};font-size:13px;font-weight:${fw};color:${tx}">Theme</label>
        <select style="padding:8px 12px;border:${bw} solid ${bd};border-radius:${r};font-family:${ff};font-size:13.5px;color:${tx};background:${bg};outline:none;width:100%;transition:all ${tr}">
          <option>System</option><option>Light</option><option>Dark</option>
        </select>
      </div>
    </div>`));
  }

  if (ac.switch) {
    const k='switch',pri=_priHex(k),bd=_cpColor(k,'borderStop',200,'#e5e7eb'),tx=_cpColor(k,'textStop',900,'#111827');
    const ff=_cpFont(k),tr=_cpTransition(k),op=_opacityFx(k);
    parts.push(_card(k,`<span class="component-preview-title">Switch</span>
    <div style="display:flex;flex-direction:column;gap:12px;opacity:${op}">
      ${[['Airplane Mode',true],['Notifications',false],['Dark Mode',true],['Marketing emails',false]].map(([label,on])=>`
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:36px;height:20px;border-radius:99px;background:${on?pri:bd};position:relative;flex-shrink:0;transition:background ${tr}">
            <div style="position:absolute;top:3px;left:${on?'19px':'3px'};width:14px;height:14px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.25);transition:left ${tr}"></div>
          </div>
          <span style="font-family:${ff};font-size:13.5px;color:${tx}">${label}</span>
        </div>`).join('')}
    </div>`));
  }

  if (ac.checkbox) {
    const k='checkbox',pri=_priHex(k),bd=_cpColor(k,'borderStop',200,'#e5e7eb'),tx=_cpColor(k,'textStop',900,'#111827');
    const ff=_cpFont(k),bw=_cpBorderWidth(k),tr=_cpTransition(k),op=_opacityFx(k),focusSh=_cpState(k)==='focus'?`0 0 0 2px ${_cpFocusRingHex(k)}`:'none';
    parts.push(_card(k,`<span class="component-preview-title">Checkbox</span>
    <div style="display:flex;flex-direction:column;gap:10px;opacity:${op}">
      ${[['Accept terms and conditions',true],['Marketing emails',false],['Product updates',true],['Security alerts',true]].map(([label,checked])=>`
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:18px;height:18px;border-radius:4px;border:${bw} solid ${checked?pri:bd};background:${checked?pri:'transparent'};display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:${focusSh};transition:all ${tr}">
            ${checked?`<svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`:''}
          </div>
          <span style="font-family:${ff};font-size:13.5px;color:${tx}">${label}</span>
        </div>`).join('')}
    </div>`));
  }

  if (ac.progress) {
    const k='progress',pri=_priHex(k),mu=_cpColor(k,'bgStop',100,'#f3f4f6'),tx=_cpColor(k,'textStop',900,'#111827'),t2=_cpColor(k,'subTextStop',600,'#4b5563');
    const ff=_cpFont(k),fw=_cpWeight(k),lbl=_cpText(k,'labelText','Uploading'),op=_opacityFx(k);
    parts.push(_card(k,`<span class="component-preview-title">Progress</span>
    <div style="display:flex;flex-direction:column;gap:14px;max-width:380px;opacity:${op}">
      ${[[33,lbl],[66,'Processing…'],[100,'Complete']].map(([pct,l])=>`
        <div>
          <div style="display:flex;justify-content:space-between;margin-bottom:5px">
            <span style="font-family:${ff};font-size:12.5px;font-weight:${fw};color:${tx}">${l}</span>
            <span style="font-family:${ff};font-size:12.5px;color:${t2}">${pct}%</span>
          </div>
          <div style="height:8px;background:${mu};border-radius:99px;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:${pct===100?'#22c55e':pri};border-radius:99px"></div>
          </div>
        </div>`).join('')}
    </div>`));
  }

  if (ac.skeleton) {
    const k='skeleton',mu=_cpColor(k,'bgStop',100,'#f3f4f6'),r=_cpRadius(k),op=_opacityFx(k);
    parts.push(_card(k,`<span class="component-preview-title">Skeleton</span>
    <div style="display:flex;flex-direction:column;gap:14px;max-width:380px;opacity:${op}">
      <div style="display:flex;gap:12px;align-items:center">
        <div style="width:48px;height:48px;border-radius:50%;background:${mu};flex-shrink:0"></div>
        <div style="flex:1;display:flex;flex-direction:column;gap:7px">
          <div style="height:14px;border-radius:6px;background:${mu};width:70%"></div>
          <div style="height:12px;border-radius:6px;background:${mu};width:50%"></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:7px">
        <div style="height:14px;border-radius:6px;background:${mu};width:100%"></div>
        <div style="height:14px;border-radius:6px;background:${mu};width:85%"></div>
        <div style="height:14px;border-radius:6px;background:${mu};width:60%"></div>
      </div>
      <div style="height:120px;border-radius:${r};background:${mu}"></div>
    </div>`));
  }

  if (ac.table) {
    const k='table',tx=_cpColor(k,'textStop',900,'#111827'),t2=_cpColor(k,'subTextStop',600,'#4b5563'),bd=_cpColor(k,'borderStop',200,'#e5e7eb'),mu=_cpColor(k,'bgStop',100,'#f3f4f6');
    const ff=_cpFont(k),fw=_cpWeight(k),op=_opacityFx(k);
    parts.push(_card(k,`<span class="component-preview-title">Table</span>
    <div style="overflow-x:auto;opacity:${op}">
      <table style="width:100%;border-collapse:collapse;font-family:${ff};font-size:13px">
        <thead><tr style="border-bottom:1px solid ${bd}">
          ${['Invoice','Status','Method','Amount'].map(h=>`<th style="padding:10px 12px;text-align:left;font-size:12px;font-weight:${fw};color:${t2}">${h}</th>`).join('')}
        </tr></thead>
        <tbody>${[['INV-001','Paid','Credit Card','$250.00'],['INV-002','Pending','PayPal','$150.00'],['INV-003','Unpaid','Bank Transfer','$350.00'],['INV-004','Paid','Credit Card','$120.00']].map(([inv,status,method,amt],i)=>{
          const sc=status==='Paid'?'#16a34a':status==='Pending'?'#d97706':'#ef4444';
          const sb=status==='Paid'?'#f0fdf4':status==='Pending'?'#fffbeb':'#fef2f2';
          return `<tr style="border-bottom:1px solid ${bd};background:${i%2===1?mu:'transparent'}">
            <td style="padding:10px 12px;color:${tx};font-weight:500">${inv}</td>
            <td style="padding:10px 12px"><span style="padding:2px 8px;background:${sb};color:${sc};border-radius:99px;font-size:11.5px;font-weight:${fw}">${status}</span></td>
            <td style="padding:10px 12px;color:${t2}">${method}</td>
            <td style="padding:10px 12px;color:${tx};text-align:right;font-weight:500">${amt}</td>
          </tr>`;}).join('')}</tbody>
      </table>
    </div>`));
  }

  if (ac.slider) {
    const k='slider',pri=_priHex(k),mu=_cpColor(k,'bgStop',100,'#f3f4f6'),tx=_cpColor(k,'textStop',900,'#111827'),t2=_cpColor(k,'subTextStop',600,'#4b5563');
    const sh=_priFx(k,_cpShadow(k)),ff=_cpFont(k),fw=_cpWeight(k),tr=_cpTransition(k),op=_opacityFx(k),lbl=_cpText(k,'labelText','Volume');
    parts.push(_card(k,`<span class="component-preview-title">Slider</span>
    <div style="display:flex;flex-direction:column;gap:20px;max-width:380px;opacity:${op}">
      ${[[40,lbl],[72,'Brightness'],[25,'Contrast']].map(([val,l])=>`
        <div>
          <div style="display:flex;justify-content:space-between;margin-bottom:8px">
            <span style="font-family:${ff};font-size:13px;font-weight:${fw};color:${tx}">${l}</span>
            <span style="font-family:${ff};font-size:13px;color:${t2}">${val}%</span>
          </div>
          <div style="height:6px;background:${mu};border-radius:99px;position:relative">
            <div style="position:absolute;left:0;top:0;height:100%;width:${val}%;background:${pri};border-radius:99px;transition:width ${tr}"></div>
            <div style="position:absolute;top:50%;left:${val}%;transform:translate(-50%,-50%);width:18px;height:18px;border-radius:50%;background:#fff;border:2px solid ${pri};box-shadow:${sh};transition:left ${tr}"></div>
          </div>
        </div>`).join('')}
    </div>`));
  }

  el.innerHTML = parts.join('');
}

/* ══════════════════════════════════════════════════════
   COLOR PAIRINGS
══════════════════════════════════════════════════════ */
function renderColorPairings() {
  const section = document.getElementById('canvas-color-pairings-section');
  const grid    = document.getElementById('color-pairings-grid');

  if (!state.showColorPairings || state.palettes.length === 0) {
    section.classList.add('hidden');
    return;
  }
  section.classList.remove('hidden');

  // For each palette: show every stop as a bg swatch with white & black text contrast
  // Plus cross-palette combinations if 2+ palettes exist
  let html = '';

  state.palettes.forEach(palette => {
    const swatches = palette.colors.map(c => {
      const whiteContrast = contrastRatio(c.hex, '#ffffff');
      const blackContrast = contrastRatio(c.hex, '#000000');
      const bestText      = whiteContrast >= blackContrast ? '#ffffff' : '#000000';
      const bestContrast  = Math.max(whiteContrast, blackContrast);
      const aaPass        = bestContrast >= 4.5;
      const aaaPass       = bestContrast >= 7;
      const level         = aaaPass ? 'AAA' : aaPass ? 'AA' : 'Fail';
      const levelColor    = aaaPass ? '#22c55e' : aaPass ? '#f59e0b' : '#ef4444';
      return `
        <div class="color-pairing-swatch" style="background:${c.hex}" data-copy-hex="${c.hex}" title="Click to copy ${c.hex}">
          <div class="color-pairing-sample" style="color:${bestText}">
            <div style="font-size:18px;font-weight:700;line-height:1">Aa</div>
            <div style="font-size:8.5px;opacity:0.75;margin-top:3px;line-height:1.3">Body text</div>
          </div>
          <div class="color-pairing-info">
            <span class="color-pairing-stop" style="color:${bestText};opacity:0.7">${c.stop}</span>
            <span class="color-pairing-ratio" style="color:${levelColor};background:rgba(0,0,0,0.35);border-radius:4px;padding:1px 4px;font-size:9px;font-weight:700">${level} ${bestContrast}:1</span>
          </div>
        </div>
      `;
    }).join('');

    html += `
      <div class="color-pairing-card">
        <div class="color-pairing-card-header">
          <span class="color-pairing-card-name">${escHtml(palette.name)}</span>
          <span class="color-pairing-card-sub">${palette.colors.length} stops — white/black text accessibility</span>
        </div>
        <div class="color-pairing-swatches">${swatches}</div>
      </div>
    `;
  });

  // Cross-palette pairings: fg from one palette, bg from another
  if (state.palettes.length >= 2) {
    for (let i = 0; i < state.palettes.length; i++) {
      for (let j = i + 1; j < state.palettes.length; j++) {
        const pa = state.palettes[i];
        const pb = state.palettes[j];
        // Pick representative stops: 500 fg on 50/100/900 bg, and vice versa
        const combos = [
          { fg: pa.colors.find(c => c.stop === 500) || pa.colors[Math.floor(pa.colors.length/2)],
            bg: pb.colors.find(c => c.stop === 50)  || pb.colors[0],
            label: `${pa.name} 500 on ${pb.name} 50` },
          { fg: pa.colors.find(c => c.stop === 500) || pa.colors[Math.floor(pa.colors.length/2)],
            bg: pb.colors.find(c => c.stop === 900) || pb.colors[pb.colors.length-1],
            label: `${pa.name} 500 on ${pb.name} 900` },
          { fg: pb.colors.find(c => c.stop === 500) || pb.colors[Math.floor(pb.colors.length/2)],
            bg: pa.colors.find(c => c.stop === 50)  || pa.colors[0],
            label: `${pb.name} 500 on ${pa.name} 50` },
          { fg: pb.colors.find(c => c.stop === 500) || pb.colors[Math.floor(pb.colors.length/2)],
            bg: pa.colors.find(c => c.stop === 900) || pa.colors[pa.colors.length-1],
            label: `${pb.name} 500 on ${pa.name} 900` },
        ].filter(c => c.fg && c.bg);

        const comboHtml = combos.map(c => {
          const ratio    = contrastRatio(c.fg.hex, c.bg.hex);
          const aaPass   = ratio >= 4.5;
          const aaaPass  = ratio >= 7;
          const level    = aaaPass ? 'AAA' : aaPass ? 'AA' : 'Fail';
          const lvlColor = aaaPass ? '#22c55e' : aaPass ? '#f59e0b' : '#ef4444';
          return `
            <div class="color-cross-pairing" style="background:${c.bg.hex}">
              <!-- Large text preview -->
              <div style="color:${c.fg.hex};font-size:22px;font-weight:700;line-height:1.1;margin-bottom:6px">The quick brown fox</div>
              <!-- Small text preview -->
              <div style="color:${c.fg.hex};font-size:12px;line-height:1.5;margin-bottom:8px;opacity:0.9">
                Body text at 12px — can you read this comfortably?
              </div>
              <!-- Mini button preview -->
              <div style="display:inline-block;padding:5px 12px;background:${c.fg.hex};color:${c.bg.hex};border-radius:5px;font-size:11px;font-weight:600;margin-bottom:8px">Button</div>
              <!-- Meta row -->
              <div style="display:flex;align-items:center;justify-content:space-between">
                <span style="font-size:9px;color:${c.fg.hex};opacity:0.7">${escHtml(c.label)}</span>
                <span style="font-size:9px;font-weight:700;color:${lvlColor};background:rgba(0,0,0,0.3);border-radius:4px;padding:1px 5px">${level} ${ratio}:1</span>
              </div>
            </div>
          `;
        }).join('');

        html += `
          <div class="color-pairing-card">
            <div class="color-pairing-card-header">
              <span class="color-pairing-card-name">${escHtml(pa.name)} × ${escHtml(pb.name)}</span>
              <span class="color-pairing-card-sub">Cross-palette pairings</span>
            </div>
            <div class="color-cross-pairings-grid">${comboHtml}</div>
          </div>
        `;
      }
    }
  }

  grid.innerHTML = html;
}

/* ══════════════════════════════════════════════════════
   FONT PAIRINGS
══════════════════════════════════════════════════════ */
function renderFontPairings() {
  const section = document.getElementById('canvas-pairings-section');
  const grid    = document.getElementById('pairings-grid');

  if (!state.showPairings || state.fonts.length < 2) {
    section.classList.add('hidden');
    return;
  }
  section.classList.remove('hidden');

  const pairs = [];
  for (let i = 0; i < state.fonts.length; i++) {
    for (let j = 0; j < state.fonts.length; j++) {
      if (i !== j) pairs.push([state.fonts[i], state.fonts[j]]);
    }
  }

  grid.innerHTML = pairs.map(([heading, body]) => {
    const hff    = `'${heading.name}', ${FALLBACK_STACKS[heading.category] || 'sans-serif'}`;
    const bff    = `'${body.name}', ${FALLBACK_STACKS[body.category] || 'sans-serif'}`;
    const hVar   = heading.variants?.find(v => /heading|display|title/i.test(v.role)) || heading.variants?.[0];
    const bVar   = body.variants?.find(v => /body|text|paragraph/i.test(v.role)) || body.variants?.find(v => /caption|label/i.test(v.role)) || body.variants?.[0];
    const hSize  = Math.min(hVar?.size || 36, 48);
    const bSize  = bVar?.size || 16;
    const hWeight= hVar?.weight || heading.activeWeights.slice(-1)[0] || 700;
    const bWeight= bVar?.weight || body.activeWeights[0] || 400;
    const hLead  = hVar?.leading || 1.15;
    const bLead  = bVar?.leading || 1.6;
    const hKern  = hVar?.kerning ?? -0.5;
    return `
      <div class="pairing-card pairing-card-article">
        <!-- Meta bar -->
        <div class="pairing-meta-bar">
          <div class="pairing-font-tag">
            <span class="pairing-role-chip">Heading</span>
            <span style="font-family:${hff};font-weight:${hWeight}">${escHtml(heading.name)}</span>
            <span class="pairing-font-stats">${hSize}px · w${hWeight}</span>
          </div>
          <div class="pairing-font-tag">
            <span class="pairing-role-chip pairing-role-body">Body</span>
            <span style="font-family:${bff};font-weight:${bWeight}">${escHtml(body.name)}</span>
            <span class="pairing-font-stats">${bSize}px · w${bWeight}</span>
          </div>
        </div>

        <!-- Article layout -->
        <div class="pairing-article">
          <div class="pairing-kicker" style="font-family:${bff};font-weight:${bWeight}">Design System</div>
          <div class="pairing-headline" style="font-family:${hff};font-size:${hSize}px;font-weight:${hWeight};line-height:${hLead};letter-spacing:${hKern}px">
            Good typography is the foundation of every great design system
          </div>
          <div class="pairing-byline" style="font-family:${bff};font-weight:${bWeight}">
            ${escHtml(heading.name)} paired with ${escHtml(body.name)}
          </div>
          <div class="pairing-rule"></div>
          <p class="pairing-body-text" style="font-family:${bff};font-size:${bSize}px;font-weight:${bWeight};line-height:${bLead}">
            A well-crafted type system creates visual harmony and hierarchy. When heading and body fonts complement each other, the result is a reading experience that feels effortless and natural — guiding the eye without effort.
          </p>
          <p class="pairing-body-text" style="font-family:${bff};font-size:${bSize}px;font-weight:${bWeight};line-height:${bLead}">
            Good typography is invisible. It guides the reader through content without drawing attention to itself. The right pairing balances personality with readability across every size and weight.
          </p>
        </div>
      </div>
    `;
  }).join('');
}

function _syncPreviewToggles() {
  const hasTokens = state.fonts.length > 0 || state.palettes.length > 0
    || state.spacings.length > 0 || state.shadows.length > 0;

  // Lock / unlock the entire Preview section
  const previewSection = document.getElementById('toolbar-preview-section');
  if (previewSection) previewSection.classList.toggle('preview-locked', !hasTokens);

  // Show/hide empty message in components dropdown
  const emptyMsg = document.getElementById('components-empty-msg');
  if (emptyMsg) emptyMsg.classList.toggle('hidden', hasTokens);

  if (!hasTokens) {
    // Force off ALL preview state — reset both data and DOM unconditionally
    Object.keys(state.activeComponents).forEach(comp => {
      state.activeComponents[comp] = false;
      document.getElementById(`toggle-comp-${comp}`)?.classList.remove('active');
      document.getElementById(`comp-toggle-${comp}`)?.classList.remove('on');
    });

    state.showPairings      = false;
    state.showColorPairings = false;
    state.showSpecimen      = false;

    document.getElementById('toggle-pairings-btn')?.classList.remove('active');
    document.getElementById('pairings-toggle-dot')?.classList.remove('on');
    document.getElementById('toggle-color-pairings-btn')?.classList.remove('active');
    document.getElementById('color-pairings-toggle-dot')?.classList.remove('on');
    document.getElementById('toggle-specimen-btn')?.classList.remove('active');
    document.getElementById('specimen-toggle-dot')?.classList.remove('on');

    // Collapse the Pairings and Components groups if expanded
    ['group-pairings-preview','group-components-preview'].forEach(id => {
      const body = document.getElementById(id);
      if (body && body.style.display !== 'none') {
        const header = body.previousElementSibling;
        if (header) header.classList.add('collapsed');
        body.style.display = 'none';
      }
    });
  }
}

function _syncTokenItems() {
  // Each token item visible only when its matching atom exists
  const map = {
    'token-item-typography': state.fonts.length > 0,
    'token-item-color':      state.palettes.length > 0,
    'token-item-spacing':    state.spacings.length > 0,
    'token-item-shadow':     state.shadows.length > 0,
  };

  let anyVisible = false;
  Object.entries(map).forEach(([id, hasData]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = hasData ? '' : 'none';
    el.classList.remove('token-item-inactive');
    el.disabled = false;
    if (hasData) anyVisible = true;
  });

  // Show tip when no token items are visible
  const tip = document.getElementById('tokens-locked-tip');
  if (tip) tip.classList.toggle('hidden', anyVisible);
}

/* ══════════════════════════════════════════════════════
   NEW ATOM TYPES — CONSTANTS, CRUD, RENDER
══════════════════════════════════════════════════════ */

const SCALE_TYPE_META = {
  radii:       { label: 'Border Radius', subtitle: 'Corner radius scale', badgeId: 'radii-badge',      sectionId: 'canvas-radii-section',      gridId: 'radii-grid',      unit: 'px', unitLabel: v => v === '9999' ? 'full' : v + 'px' },
  borders:     { label: 'Border',        subtitle: 'Stroke width scale',  badgeId: 'borders-badge',    sectionId: 'canvas-borders-section',    gridId: 'borders-grid',    unit: 'px', unitLabel: v => v + 'px' },
  opacities:   { label: 'Opacity',       subtitle: 'Transparency scale',  badgeId: 'opacities-badge',  sectionId: 'canvas-opacities-section',  gridId: 'opacities-grid',  unit: '%',  unitLabel: v => v + '%'  },
  breakpoints: { label: 'Breakpoints',   subtitle: 'Responsive widths',   badgeId: 'breakpoints-badge',sectionId: 'canvas-breakpoints-section',gridId: 'breakpoints-grid',unit: 'px', unitLabel: v => v + 'px' },
  zindices:    { label: 'Z-Index',       subtitle: 'Layering tokens',     badgeId: 'zindices-badge',   sectionId: 'canvas-zindices-section',   gridId: 'zindices-grid',   unit: '',   unitLabel: v => v        },
  icons:       { label: 'Iconography',   subtitle: 'Icon size scale',     badgeId: 'icons-badge',      sectionId: 'canvas-icons-section',      gridId: 'icons-grid',      unit: 'px', unitLabel: v => v + 'px' },
};

const SCALE_PRESETS = {
  radii: {
    Sharp:   [{label:'none',value:'0'},{label:'xs',value:'2'},{label:'sm',value:'4'},{label:'md',value:'6'},{label:'lg',value:'8'},{label:'full',value:'9999'}],
    Rounded: [{label:'none',value:'0'},{label:'sm',value:'4'},{label:'md',value:'8'},{label:'lg',value:'12'},{label:'xl',value:'16'},{label:'full',value:'9999'}],
    Pill:    [{label:'none',value:'0'},{label:'sm',value:'8'},{label:'md',value:'16'},{label:'lg',value:'24'},{label:'full',value:'9999'}],
  },
  borders: {
    Standard: [{label:'none',value:'0'},{label:'thin',value:'1'},{label:'base',value:'2'},{label:'thick',value:'4'},{label:'heavy',value:'8'}],
  },
  opacities: {
    Standard: [{label:'0',value:'0'},{label:'5',value:'5'},{label:'10',value:'10'},{label:'25',value:'25'},{label:'50',value:'50'},{label:'75',value:'75'},{label:'90',value:'90'},{label:'100',value:'100'}],
    Semantic: [{label:'disabled',value:'40'},{label:'muted',value:'60'},{label:'hover',value:'70'},{label:'overlay',value:'80'},{label:'full',value:'100'}],
  },
  breakpoints: {
    Standard: [{label:'xs',value:'480'},{label:'sm',value:'640'},{label:'md',value:'768'},{label:'lg',value:'1024'},{label:'xl',value:'1280'},{label:'2xl',value:'1536'}],
    Tailwind: [{label:'sm',value:'640'},{label:'md',value:'768'},{label:'lg',value:'1024'},{label:'xl',value:'1280'},{label:'2xl',value:'1536'}],
  },
  zindices: {
    Standard: [{label:'base',value:'0'},{label:'raised',value:'10'},{label:'dropdown',value:'100'},{label:'sticky',value:'200'},{label:'overlay',value:'300'},{label:'modal',value:'400'},{label:'tooltip',value:'700'}],
  },
  icons: {
    Standard: [{label:'xs',value:'12'},{label:'sm',value:'16'},{label:'md',value:'20'},{label:'lg',value:'24'},{label:'xl',value:'32'},{label:'2xl',value:'48'}],
  },
};

const MOTION_PRESETS = {
  Standard: {
    durations: [{label:'instant',ms:0},{label:'fast',ms:100},{label:'normal',ms:200},{label:'slow',ms:400},{label:'slower',ms:600}],
    easings:   [{label:'linear',fn:'linear'},{label:'ease-in',fn:'cubic-bezier(0.4,0,1,1)'},{label:'ease-out',fn:'cubic-bezier(0,0,0.2,1)'},{label:'ease-in-out',fn:'cubic-bezier(0.4,0,0.2,1)'},{label:'spring',fn:'cubic-bezier(0.34,1.56,0.64,1)'}],
  },
  Snappy: {
    durations: [{label:'instant',ms:0},{label:'fast',ms:80},{label:'normal',ms:150},{label:'slow',ms:300}],
    easings:   [{label:'ease-out',fn:'cubic-bezier(0,0,0.2,1)'},{label:'spring',fn:'cubic-bezier(0.34,1.56,0.64,1)'},{label:'bounce',fn:'cubic-bezier(0.68,-0.55,0.265,1.55)'}],
  },
};

const GRID_PRESETS = {
  Standard: { columns:12, gutter:16, maxWidth:1280, margin:24 },
  Wide:     { columns:16, gutter:24, maxWidth:1440, margin:32 },
  Narrow:   { columns:8,  gutter:12, maxWidth:960,  margin:16 },
};

/* ── Generic Scale CRUD ── */
let _scaleModalType = 'radii';
let _scaleModalPresetKey = null;
let _motionPresetKey = null;
let _gridPresetKey   = null;

function addScaleAtom(type, name, stops) {
  pushHistory();
  state[type].push({ id: uid(), name: name || 'Untitled', stops });
  renderAll();
  toast(`Added ${SCALE_TYPE_META[type]?.label || type} "${name}"`);
}

function removeScaleAtom(type, id) {
  pushHistory();
  state[type] = state[type].filter(i => i.id !== id);
  renderAll();
  toast('Removed');
}

function addMotion(name, preset) {
  pushHistory();
  const p = MOTION_PRESETS[preset] || MOTION_PRESETS.Standard;
  state.motions.push({ id: uid(), name: name || 'Untitled', durations: JSON.parse(JSON.stringify(p.durations)), easings: JSON.parse(JSON.stringify(p.easings)) });
  renderAll();
  toast(`Added motion "${name}"`);
}

function removeMotion(id) {
  pushHistory();
  state.motions = state.motions.filter(m => m.id !== id);
  renderAll();
  toast('Removed');
}

function addGrid(name, data) {
  pushHistory();
  state.grids.push({ id: uid(), name: name || 'Untitled', ...data });
  renderAll();
  toast(`Added grid "${name}"`);
}

function removeGrid(id) {
  pushHistory();
  state.grids = state.grids.filter(g => g.id !== id);
  renderAll();
  toast('Removed');
}

/* ── Generic Scale Canvas Card ── */
function renderScaleGrid(type) {
  const meta    = SCALE_TYPE_META[type];
  const section = document.getElementById(meta.sectionId);
  const grid    = document.getElementById(meta.gridId);
  const badge   = document.getElementById(meta.badgeId);
  const items   = state[type] || [];

  badge.textContent = items.length;
  if (!items.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');

  const maxVal = Math.max(...items.flatMap(i => i.stops.map(s => parseInt(s.value) || 0)), 1);

  grid.innerHTML = items.map(item => {
    const stopsHtml = item.stops.map(s => {
      const v = parseInt(s.value) || 0;
      let visual = '';
      if (type === 'radii') {
        const r = Math.min(v, 14);
        visual = `<div class="radius-preview-box" style="border-radius:${r}px"></div>`;
      } else if (type === 'borders') {
        visual = `<div class="border-preview-line" style="height:${Math.min(v, 8)}px"></div>`;
      } else if (type === 'opacities') {
        visual = `<div class="opacity-preview-swatch" style="background:var(--accent);opacity:${v/100}"></div>`;
      } else if (type === 'breakpoints') {
        visual = `<div class="breakpoint-bar" style="width:${Math.round((v/maxVal)*100)}%"></div>`;
      } else if (type === 'zindices') {
        visual = `<div class="zindex-badge">${s.value}</div>`;
      } else if (type === 'icons') {
        const sz = Math.min(v, 28);
        visual = `<div class="icon-size-box" style="width:${sz}px;height:${sz}px"></div>`;
      }
      return `<div class="atom-stop-row">
        <span class="atom-stop-label">${escHtml(s.label)}</span>
        <div class="atom-stop-visual">${visual}</div>
        <span class="atom-stop-value">${meta.unitLabel(s.value)}</span>
      </div>`;
    }).join('');

    return `<div class="atom-card" data-atom-type="${type}" data-atom-id="${item.id}">
      <div class="atom-card-top">
        <div class="atom-card-meta">
          <span class="atom-card-name">${escHtml(item.name)}</span>
          <span class="atom-card-tag">${item.stops.length} stops</span>
        </div>
        <div class="font-card-actions">
          <button class="card-action-btn danger" data-remove-atom-type="${type}" data-remove-atom-id="${item.id}" title="Remove">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 1.5L9.5 9.5M9.5 1.5L1.5 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>
      <div>${stopsHtml}</div>
    </div>`;
  }).join('');

  grid.onclick = e => {
    const rm = e.target.closest('[data-remove-atom-type]');
    if (rm) { e.stopPropagation(); removeScaleAtom(rm.dataset.removeAtomType, rm.dataset.removeAtomId); }
  };
}

/* ── Motion Canvas ── */
function renderMotionsCanvas() {
  const section = document.getElementById('canvas-motions-section');
  const grid    = document.getElementById('motions-grid');
  const badge   = document.getElementById('motions-badge');

  badge.textContent = state.motions.length;
  if (!state.motions.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');

  const maxMs = Math.max(...state.motions.flatMap(m => m.durations.map(d => d.ms)), 1);

  grid.innerHTML = state.motions.map(m => {
    const durHtml = m.durations.map(d => `
      <div class="atom-stop-row">
        <span class="atom-stop-label">${escHtml(d.label)}</span>
        <div class="atom-stop-visual"><div class="motion-duration-bar" style="width:${Math.round((d.ms/maxMs)*100)}%"></div></div>
        <span class="atom-stop-value">${d.ms}ms</span>
      </div>`).join('');

    const easHtml = m.easings.map(e2 => `
      <div class="atom-stop-row">
        <span class="atom-stop-label">${escHtml(e2.label)}</span>
        <div class="atom-stop-visual"><span class="easing-label">${escHtml(e2.fn.length > 20 ? e2.fn.slice(0,20) + '…' : e2.fn)}</span></div>
      </div>`).join('');

    return `<div class="atom-card" data-atom-id="${m.id}">
      <div class="atom-card-top">
        <div class="atom-card-meta">
          <span class="atom-card-name">${escHtml(m.name)}</span>
          <span class="atom-card-tag">${m.durations.length} durations · ${m.easings.length} easings</span>
        </div>
        <div class="font-card-actions">
          <button class="card-action-btn danger" data-remove-motion-id="${m.id}" title="Remove">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 1.5L9.5 9.5M9.5 1.5L1.5 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>
      <div class="motion-section-label">Durations</div>${durHtml}
      <div class="motion-section-label">Easings</div>${easHtml}
    </div>`;
  }).join('');

  grid.onclick = e => {
    const rm = e.target.closest('[data-remove-motion-id]');
    if (rm) { e.stopPropagation(); removeMotion(rm.dataset.removeMotionId); }
  };
}

/* ── Grid Canvas ── */
function renderGridsCanvas() {
  const section = document.getElementById('canvas-grids-section');
  const grid    = document.getElementById('grids-grid');
  const badge   = document.getElementById('grids-badge');

  badge.textContent = state.grids.length;
  if (!state.grids.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');

  grid.innerHTML = state.grids.map(g => {
    const cols = Array.from({length: Math.min(g.columns, 12)}, () => `<div class="grid-preview-col"></div>`).join('');
    return `<div class="atom-card" data-atom-id="${g.id}">
      <div class="atom-card-top">
        <div class="atom-card-meta">
          <span class="atom-card-name">${escHtml(g.name)}</span>
          <span class="atom-card-tag">${g.columns} columns · ${g.gutter}px gutter</span>
        </div>
        <div class="font-card-actions">
          <button class="card-action-btn danger" data-remove-grid-id="${g.id}" title="Remove">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 1.5L9.5 9.5M9.5 1.5L1.5 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>
      <div class="grid-preview" style="gap:${Math.min(g.gutter, 8)}px">${cols}</div>
      <div class="grid-stats" style="margin-top:12px">
        <div class="grid-stat"><span class="grid-stat-label">Columns</span><span class="grid-stat-value">${g.columns}</span></div>
        <div class="grid-stat"><span class="grid-stat-label">Gutter</span><span class="grid-stat-value">${g.gutter}px</span></div>
        <div class="grid-stat"><span class="grid-stat-label">Max Width</span><span class="grid-stat-value">${g.maxWidth}px</span></div>
        <div class="grid-stat"><span class="grid-stat-label">Margin</span><span class="grid-stat-value">${g.margin}px</span></div>
      </div>
    </div>`;
  }).join('');

  grid.onclick = e => {
    const rm = e.target.closest('[data-remove-grid-id]');
    if (rm) { e.stopPropagation(); removeGrid(rm.dataset.removeGridId); }
  };
}

/* ── Render all new atoms ── */
/* ══════════════════════════════════════════════════════
   GRADIENT TOKENS
══════════════════════════════════════════════════════ */
function addGradient(name, direction, from, to) {
  pushHistory();
  state.gradients.push({ id: uid(), name: name || 'Untitled', direction, colorStops: [{ color: from, position: 0 }, { color: to, position: 100 }] });
  renderAll();
  toast(`Added gradient "${name}"`);
}

function removeGradient(id) {
  pushHistory();
  state.gradients = state.gradients.filter(g => g.id !== id);
  renderAll();
}

function gradientToCss(g) {
  const stops = (g.colorStops || []).map(s => `${s.color} ${s.position}%`).join(', ');
  if (g.gradientType === 'radial') return `radial-gradient(circle, ${stops})`;
  if (g.gradientType === 'conic')  return `conic-gradient(${stops})`;
  return `linear-gradient(${g.direction || 'to right'}, ${stops})`;
}

function renderGradientsCanvas() {
  const section = document.getElementById('canvas-gradients-section');
  const grid    = document.getElementById('gradients-grid');
  const badge   = document.getElementById('gradients-badge');
  badge.textContent = state.gradients.length;
  if (!state.gradients.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');

  grid.innerHTML = state.gradients.map(g => {
    const css = gradientToCss(g);
    return `<div class="atom-card" data-gradient-id="${g.id}">
      <div class="atom-card-top">
        <div class="atom-card-meta">
          <span class="atom-card-name">${escHtml(g.name)}</span>
          <span class="atom-card-tag">${escHtml(g.direction)}</span>
        </div>
        <div class="font-card-actions">
          <button class="card-action-btn danger" data-remove-gradient-id="${g.id}" title="Remove">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 1.5L9.5 9.5M9.5 1.5L1.5 9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
          </button>
        </div>
      </div>
      <div style="height:56px;border-radius:8px;background:${css};margin-top:4px"></div>
      <div style="font-size:10.5px;color:var(--text-3);margin-top:6px;font-family:'JetBrains Mono',monospace;word-break:break-all">${escHtml(css)}</div>
    </div>`;
  }).join('');

  grid.onclick = e => {
    const rm = e.target.closest('[data-remove-gradient-id]');
    if (rm) { e.stopPropagation(); removeGradient(rm.dataset.removeGradientId); }
  };
}

function openGradientModal() {
  document.getElementById('gradient-modal-name').value = '';
  document.getElementById('gradient-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('gradient-modal-name').focus(), 50);
}

function closeGradientModal() {
  document.getElementById('gradient-modal').classList.add('hidden');
}

function renderNewAtoms() {
  Object.keys(SCALE_TYPE_META).forEach(type => renderScaleGrid(type));
  renderMotionsCanvas();
  renderGridsCanvas();
  renderGradientsCanvas();
}

/* ── Scale Modal ── */
function openScaleModal(type) {
  _scaleModalType = type;
  const meta = SCALE_TYPE_META[type];
  document.getElementById('scale-modal-title').textContent    = `Add ${meta.label}`;
  document.getElementById('scale-modal-subtitle').textContent = meta.subtitle;
  document.getElementById('scale-modal-name').value           = '';
  const presets  = SCALE_PRESETS[type] || {};
  const presetKeys = Object.keys(presets);
  _scaleModalPresetKey = presetKeys[0] || null;

  const presetsEl = document.getElementById('scale-modal-presets');
  presetsEl.innerHTML = presetKeys.map(k =>
    `<button class="shadow-preset-btn ${k === _scaleModalPresetKey ? 'active' : ''}" data-preset-key="${escHtml(k)}">${escHtml(k)}</button>`
  ).join('');
  presetsEl.querySelectorAll('[data-preset-key]').forEach(btn => {
    btn.addEventListener('click', () => {
      _scaleModalPresetKey = btn.dataset.presetKey;
      presetsEl.querySelectorAll('[data-preset-key]').forEach(b => b.classList.toggle('active', b === btn));
      _updateScalePreview();
    });
  });
  _updateScalePreview();
  document.getElementById('scale-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('scale-modal-name').focus(), 50);
}

function _updateScalePreview() {
  const presets = SCALE_PRESETS[_scaleModalType] || {};
  const stops   = presets[_scaleModalPresetKey] || [];
  const meta    = SCALE_TYPE_META[_scaleModalType];
  document.getElementById('scale-modal-preview').innerHTML = stops.map(s =>
    `<div class="atom-stop-row" style="margin-bottom:3px">
      <span class="atom-stop-label">${escHtml(s.label)}</span>
      <span style="flex:1"></span>
      <span class="atom-stop-value">${meta.unitLabel(s.value)}</span>
    </div>`
  ).join('');
}

function closeScaleModal() {
  document.getElementById('scale-modal').classList.add('hidden');
}

/* ── Motion Modal ── */
function openMotionModal() {
  _motionPresetKey = 'Standard';
  document.getElementById('motion-modal-name').value = '';
  const presetsEl = document.getElementById('motion-modal-presets');
  presetsEl.innerHTML = Object.keys(MOTION_PRESETS).map(k =>
    `<button class="shadow-preset-btn ${k === 'Standard' ? 'active' : ''}" data-motion-preset="${escHtml(k)}">${escHtml(k)}</button>`
  ).join('');
  presetsEl.querySelectorAll('[data-motion-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      _motionPresetKey = btn.dataset.motionPreset;
      presetsEl.querySelectorAll('[data-motion-preset]').forEach(b => b.classList.toggle('active', b === btn));
      _updateMotionPreview();
    });
  });
  _updateMotionPreview();
  document.getElementById('motion-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('motion-modal-name').focus(), 50);
}

function _updateMotionPreview() {
  const p = MOTION_PRESETS[_motionPresetKey] || MOTION_PRESETS.Standard;
  const maxMs = Math.max(...p.durations.map(d => d.ms), 1);
  document.getElementById('motion-modal-durations').innerHTML = p.durations.map(d =>
    `<div class="atom-stop-row" style="margin-bottom:3px">
      <span class="atom-stop-label">${escHtml(d.label)}</span>
      <div class="atom-stop-visual"><div class="motion-duration-bar" style="width:${Math.round((d.ms/maxMs)*100)}%"></div></div>
      <span class="atom-stop-value">${d.ms}ms</span>
    </div>`).join('');
  document.getElementById('motion-modal-easings').innerHTML = p.easings.map(e =>
    `<div style="margin-bottom:4px"><span class="easing-label">${escHtml(e.label)}</span></div>`).join('');
}

function closeMotionModal() {
  document.getElementById('motion-modal').classList.add('hidden');
}

/* ── Grid Modal ── */
function openGridModal() {
  _gridPresetKey = 'Standard';
  document.getElementById('grid-modal-name').value = '';
  _applyGridPreset('Standard');
  const presetsEl = document.getElementById('grid-modal-presets');
  presetsEl.innerHTML = Object.keys(GRID_PRESETS).map(k =>
    `<button class="shadow-preset-btn ${k === 'Standard' ? 'active' : ''}" data-grid-preset="${escHtml(k)}">${escHtml(k)}</button>`
  ).join('');
  presetsEl.querySelectorAll('[data-grid-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      _gridPresetKey = btn.dataset.gridPreset;
      presetsEl.querySelectorAll('[data-grid-preset]').forEach(b => b.classList.toggle('active', b === btn));
      _applyGridPreset(_gridPresetKey);
    });
  });
  document.getElementById('grid-modal').classList.remove('hidden');
  setTimeout(() => document.getElementById('grid-modal-name').focus(), 50);
}

function _applyGridPreset(key) {
  const p = GRID_PRESETS[key] || GRID_PRESETS.Standard;
  document.getElementById('grid-modal-columns').value  = p.columns;
  document.getElementById('grid-modal-gutter').value   = p.gutter;
  document.getElementById('grid-modal-maxwidth').value = p.maxWidth;
  document.getElementById('grid-modal-margin').value   = p.margin;
}

function closeGridModal() {
  document.getElementById('grid-modal').classList.add('hidden');
}

function renderTypeSpecimen() {
  const section = document.getElementById('canvas-specimen-section');
  const grid    = document.getElementById('specimen-grid');
  if (!section || !grid) return;

  if (!state.showSpecimen || !state.fonts.length) {
    section.classList.add('hidden');
    return;
  }
  section.classList.remove('hidden');

  const fluidSlider = `
    <div class="fluid-preview-bar">
      <span class="fluid-preview-label">Viewport</span>
      <input type="range" class="fluid-preview-slider" id="fluid-vp-slider" min="320" max="1440" value="1440" step="10">
      <span class="fluid-preview-vp" id="fluid-vp-label">1440px — Desktop</span>
    </div>`;

  grid.innerHTML = fluidSlider + state.fonts.map(font => {
    const ff = `'${font.name}', ${FALLBACK_STACKS[font.category] || 'sans-serif'}`;
    const variants = (font.variants || []);
    return `
      <div class="specimen-font-block">
        <div class="specimen-font-header">
          <span class="specimen-font-name" style="font-family:${ff}">${escHtml(font.name)}</span>
          <span class="specimen-font-meta">${escHtml(font.category)}</span>
        </div>
        ${variants.length ? variants.map(v => {
          const ew  = v.weight || font.activeWeights[0] || 400;
          const sz  = v.fluid ? computeClamp(v) : v.size + 'px';
          const a11y = getA11yWarnings(v);
          const fluidAttrs = v.fluid ? `data-fluid-min="${v.fluidMin||v.size}" data-fluid-max="${v.fluidMax||v.size}"` : '';
          return `
            <div class="specimen-variant-row">
              <div class="specimen-variant-label">
                <span class="specimen-variant-role">${escHtml(v.role)}</span>
                <span class="specimen-variant-stats">${v.fluid ? `fluid ` : ''}${v.size}px · w${ew} · ${v.leading}lh</span>
                ${a11y.length ? `<span class="specimen-a11y-warn" title="${escHtml(a11y.join('\n'))}">⚠</span>` : '<span class="specimen-a11y-ok" title="No a11y issues">✓</span>'}
              </div>
              <div class="specimen-variant-text" ${fluidAttrs} style="font-family:${ff}; font-size:${sz}; font-weight:${ew}; line-height:${v.leading}; letter-spacing:${v.kerning}px; text-transform:${v.textTransform||'none'}; text-decoration:${v.textDecoration||'none'}; font-style:${v.fontStyle||'normal'}; ${v.variationSettings ? `font-variation-settings:${v.variationSettings};` : ''}${v.measure ? `max-width:${v.measure}ch;` : ''}">
                ${escHtml(v.sampleText || font.sampleText)}
              </div>
              ${v.docs ? `<div class="specimen-variant-docs">${escHtml(v.docs)}</div>` : ''}
            </div>
          `;
        }).join('') : `<div class="specimen-no-variants">No type variants defined yet</div>`}
      </div>
    `;
  }).join('');
}

/* ══════════════════════════════════════════════════════
   TOKEN HEALTH
══════════════════════════════════════════════════════ */
function computeHealthScore() {
  let score = 60;
  const issues = [];
  const passes = [];

  if (state.fonts.length > 0) { score += 10; passes.push('Typography defined'); }
  else issues.push({ sev: 'warn', msg: 'No fonts defined — add at least one typeface' });

  if (state.palettes.length > 0) { score += 10; passes.push('Color palette defined'); }
  else issues.push({ sev: 'warn', msg: 'No color palette — add a primary palette' });

  if (state.semantics.length > 0) { score += 5; passes.push('Semantic tokens present'); }
  else issues.push({ sev: 'info', msg: 'No semantic tokens — consider mapping raw colors to roles' });

  if (state.spacings.length > 0) { score += 5; passes.push('Spacing scale defined'); }
  else issues.push({ sev: 'info', msg: 'No spacing scale defined' });

  state.palettes.forEach(p => {
    if (p.colors.length < 5) {
      score -= 10;
      issues.push({ sev: 'error', msg: `"${p.name}" has only ${p.colors.length} stops — aim for 8+` });
    } else {
      passes.push(`"${p.name}" has a ${p.colors.length}-stop scale`);
    }
  });

  const allHex = state.palettes.flatMap(p => p.colors.map(c => c.hex.toLowerCase()));
  const dupes = allHex.filter((h, i) => allHex.indexOf(h) !== i);
  if (dupes.length > 0) {
    score -= Math.min(10, dupes.length * 2);
    issues.push({ sev: 'warn', msg: `${dupes.length} duplicate color value(s) across palettes` });
  }

  state.fonts.forEach(f => {
    (f.variants||[]).forEach(v => {
      const lh = parseFloat(v.leading);
      if (lh && (lh < 1.2 || lh > 2.0)) {
        score -= 3;
        issues.push({ sev: 'warn', msg: `"${f.name} / ${v.role}" has unusual line-height: ${lh}` });
      }
    });
  });

  score = Math.max(0, Math.min(100, score));
  return { score, issues, passes };
}

function renderHealthCanvas() {
  const section = document.getElementById('canvas-health-section');
  const content = document.getElementById('health-content');
  if (!section || !content) return;

  const hasAnyTokens = state.fonts.length || state.palettes.length || state.spacings.length || state.shadows.length;
  if (!hasAnyTokens) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');

  const { score, issues, passes } = computeHealthScore();
  const color = score >= 80 ? '#22c55e' : score >= 50 ? '#f59e0b' : '#ef4444';
  const circumference = 2 * Math.PI * 36;
  const dashOffset = circumference * (1 - score / 100);

  const hbadge = document.getElementById('health-badge');
  if (hbadge) hbadge.textContent = score;

  content.innerHTML = `
    <div class="health-card">
      <div class="health-gauge-wrap">
        <svg class="health-gauge" viewBox="0 0 80 80" width="80" height="80">
          <circle cx="40" cy="40" r="36" fill="none" stroke="var(--border)" stroke-width="6"/>
          <circle cx="40" cy="40" r="36" fill="none" stroke="${color}" stroke-width="6"
            stroke-dasharray="${circumference.toFixed(2)}"
            stroke-dashoffset="${dashOffset.toFixed(2)}"
            stroke-linecap="round"
            transform="rotate(-90 40 40)"/>
        </svg>
        <div class="health-score-label" style="color:${color}">${score}</div>
      </div>
      <div class="health-details">
        ${issues.map(i => `
          <div class="health-row health-row-${i.sev}">
            <span class="health-row-icon">${i.sev==='error'?'✕':i.sev==='warn'?'⚠':'ℹ'}</span>
            <span class="health-row-msg">${escHtml(i.msg)}</span>
          </div>`).join('')}
        ${passes.map(p => `
          <div class="health-row health-row-pass">
            <span class="health-row-icon">✓</span>
            <span class="health-row-msg">${escHtml(p)}</span>
          </div>`).join('')}
      </div>
    </div>
    ${_completenessHtml()}`;

  content.querySelectorAll('.cl-add-btn').forEach(btn =>
    btn.addEventListener('click', () => completenessAction(btn.dataset.action)));
}

function _completenessHtml() {
  const { items, done, total } = computeCompleteness();
  return `
    <div class="completeness-card">
      <div class="completeness-head">
        <span class="completeness-title">System Completeness</span>
        <span class="completeness-count">${done}/${total}</span>
      </div>
      <div class="completeness-bar"><i style="width:${Math.round(done/total*100)}%"></i></div>
      <div class="completeness-list">
        ${items.map(it => `
          <div class="completeness-row ${it.done ? 'is-done' : ''}">
            <span class="cl-check">${it.done ? '✓' : ''}</span>
            <span class="cl-label">${escHtml(it.label)}</span>
            ${it.done ? '' : `<button class="cl-add-btn" data-action="${it.action}">Add</button>`}
          </div>`).join('')}
      </div>
    </div>`;
}

/* ══════════════════════════════════════════════════════
   AUDIT TOKENS
══════════════════════════════════════════════════════ */
function auditTokens(input) {
  const result = { colors: [], spacing: [], fonts: [], shadows: [] };
  const hexRe = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;
  const hexMatches = [...new Set((input.match(hexRe)||[]))];
  hexMatches.forEach(hex => {
    const full = hex.length===4 ? '#'+hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3] : hex;
    const exists = state.palettes.some(p=>p.colors.some(c=>c.hex.toLowerCase()===full.toLowerCase()));
    result.colors.push({ value: full, exists });
  });
  const spMatches = new Set();
  let m;
  const spRe = /(?:padding|margin|gap|spacing)[^:]*:\s*([\d.]+(?:px|rem))/gi;
  const cssVarRe = /--[\w-]+:\s*([\d.]+(?:px|rem))/gi;
  while ((m=spRe.exec(input))!==null) spMatches.add(m[1]);
  while ((m=cssVarRe.exec(input))!==null) { if (parseFloat(m[1])<200) spMatches.add(m[1]); }
  spMatches.forEach(val => {
    const px = val.endsWith('rem') ? Math.round(parseFloat(val)*16) : parseInt(val);
    if (px>0 && px<=200) {
      const exists = state.spacings.some(sp=>spacingStopValues(sp.baseUnit).some(s=>s.value===px));
      result.spacing.push({ value: val, px, exists });
    }
  });
  const ffRe = /font-family:\s*['"]?([^,;'"}{]+?)['"]?\s*[,;)}/]/g;
  const ffMatches = new Set();
  while ((m=ffRe.exec(input))!==null) {
    const name=m[1].trim();
    if (name && !['inherit','sans-serif','serif','monospace','system-ui','-apple-system'].includes(name)) ffMatches.add(name);
  }
  ffMatches.forEach(name => {
    const exists = state.fonts.some(f=>f.name.toLowerCase()===name.toLowerCase());
    result.fonts.push({ value: name, exists });
  });
  const shRe = /box-shadow:\s*([^;}{]+)/gi;
  while ((m=shRe.exec(input))!==null) {
    const val=m[1].trim();
    if (val && val!=='none') {
      const exists = state.shadows.some(sh=>shadowToCss(sh.layers).toLowerCase()===val.toLowerCase());
      result.shadows.push({ value: val, exists });
    }
  }
  return result;
}

function renderAuditResults(result) {
  const container = document.getElementById('audit-results');
  if (!container) return;
  container.classList.remove('hidden');
  const renderSection = (title, items, type) => {
    if (!items.length) return '';
    return `<div class="audit-section"><div class="audit-section-title">${title} <span class="audit-count">${items.length} found</span></div>${items.map((item,i)=>`<div class="audit-found-row">${type==='colors'?`<div class="audit-color-swatch" style="background:${item.value}"></div>`:''}<span class="audit-found-val">${escHtml(item.value)}</span>${item.exists?'<span class="audit-exists-badge">✓ In system</span>':`<button class="audit-import-btn" data-audit-type="${type}" data-audit-idx="${i}">+ Import</button>`}</div>`).join('')}</div>`;
  };
  container.innerHTML = renderSection('Colors',result.colors,'colors')+renderSection('Spacing',result.spacing,'spacing')+renderSection('Fonts',result.fonts,'fonts')+renderSection('Shadows',result.shadows,'shadows')+((!result.colors.length&&!result.spacing.length&&!result.fonts.length&&!result.shadows.length)?'<div style="padding:20px;color:var(--text-3);font-size:13px">No recognizable tokens found. Try pasting a CSS file with variables, colors, or spacing values.</div>':'');
  container.querySelectorAll('.audit-import-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type=btn.dataset.auditType, idx=parseInt(btn.dataset.auditIdx);
      if (type==='colors') {
        const hex=result.colors[idx].value;
        const newPal={id:uid(),name:hex,baseHex:hex,shadeCount:10,colorSpace:'hsl',customStops:{},roles:{},stateOverrides:{},notes:''};
        newPal.colors=generateColorScaleForPalette(newPal);
        state.palettes.push(newPal);
        result.colors[idx].exists=true;
      } else if (type==='spacing') {
        const px=result.spacing[idx].px;
        state.spacings.push({id:uid(),name:`Imported ${px}px`,baseUnit:px,notes:''});
        result.spacing[idx].exists=true;
      }
      pushHistory(); renderAll(); renderAuditResults(result);
      toast('Token imported');
    });
  });
}

/* ══════════════════════════════════════════════════════
   COPY TOKEN SNIPPET
══════════════════════════════════════════════════════ */
function _copyTokenSnippet(type, id, format) {
  let text = '';
  if (type==='palette') {
    const p=state.palettes.find(x=>x.id===id); if(!p) return;
    const slug=p.name.toLowerCase().replace(/\s+/g,'-');
    if (format==='css') text=p.colors.map(c=>`--color-${slug}-${c.stop}: ${c.hex};`).join('\n');
    else if (format==='scss') text=p.colors.map(c=>`$color-${slug}-${c.stop}: ${c.hex};`).join('\n');
    else if (format==='js') text=`const ${slug.replace(/-([a-z])/g,(_,l)=>l.toUpperCase())} = {\n${p.colors.map(c=>`  '${c.stop}': '${c.hex}'`).join(',\n')}\n};`;
    else if (format==='tailwind') text=`colors: {\n  '${slug}': {\n${p.colors.map(c=>`    '${c.stop}': '${c.hex}'`).join(',\n')}\n  }\n}`;
  } else if (type==='font') {
    const f=state.fonts.find(x=>x.id===id); if(!f) return;
    const slug=f.name.toLowerCase().replace(/\s+/g,'-');
    const stack=FALLBACK_STACKS?.[f.category]||'sans-serif';
    if (format==='css') text=`--font-${slug}: '${f.name}', ${stack};`;
    else if (format==='scss') text=`$font-${slug}: '${f.name}', ${stack};`;
    else if (format==='js') text=`const font${f.name.replace(/\s+/g,'')} = "'${f.name}', ${stack}";`;
    else if (format==='tailwind') text=`fontFamily: { '${slug}': ['${f.name}', '${stack}'] }`;
  } else if (type==='spacing') {
    const sp=state.spacings.find(x=>x.id===id); if(!sp) return;
    const slug=sp.name.toLowerCase().replace(/\s+/g,'-');
    const stops=spacingStopValues(sp.baseUnit);
    if (format==='css') text=stops.map(s=>`--spacing-${slug}-${s.multiplier}x: ${s.value}px;`).join('\n');
    else if (format==='scss') text=stops.map(s=>`$spacing-${slug}-${s.multiplier}x: ${s.value}px;`).join('\n');
    else if (format==='js') text=`const spacing${sp.name.replace(/\s+/g,'')} = {\n${stops.map(s=>`  '${s.multiplier}x': ${s.value}`).join(',\n')}\n};`;
    else if (format==='tailwind') text=`spacing: {\n${stops.map(s=>`  '${s.multiplier}x': '${s.value}px'`).join(',\n')}\n}`;
  } else if (type==='shadow') {
    const sh=state.shadows.find(x=>x.id===id); if(!sh) return;
    const slug=sh.name.toLowerCase().replace(/\s+/g,'-');
    const val=shadowToCss(sh.layers);
    if (format==='css') text=`--shadow-${slug}: ${val};`;
    else if (format==='scss') text=`$shadow-${slug}: ${val};`;
    else if (format==='js') text=`const shadow${sh.name.replace(/\s+/g,'')} = '${val}';`;
    else if (format==='tailwind') text=`boxShadow: { '${slug}': '${val}' }`;
  }
  if (text) { navigator.clipboard.writeText(text); toast(`Copied as ${format.toUpperCase()}`); }
}

/* ══════════════════════════════════════════════════════
   A11Y REPORT
══════════════════════════════════════════════════════ */
function renderA11yReport() {
  const body = document.getElementById('a11y-report-body');
  if (!body) return;
  if (!state.palettes.length) {
    body.innerHTML = '<div style="padding:24px;color:var(--text-3);font-size:13px">Add color palettes to generate a contrast report.</div>';
    return;
  }
  let passCount=0, failCount=0;
  const rows=[];
  state.palettes.forEach(p => {
    p.colors.forEach(c => {
      const vsWhite=contrastRatio(c.hex,'#ffffff');
      const vsBlack=contrastRatio(c.hex,'#000000');
      [['#ffffff',vsWhite],['#000000',vsBlack]].forEach(([bg,ratio]) => {
        const aa=ratio>=4.5, aaa=ratio>=7;
        if(aa) passCount++; else failCount++;
        rows.push({fg:c.hex,bg,name:`${p.name} ${c.stop}`,ratio,aa,aaa});
      });
    });
  });
  body.innerHTML = `
    <div class="a11y-summary">
      <div class="a11y-summary-stat" style="color:var(--green)"><span class="a11y-summary-num">${passCount}</span><span class="a11y-summary-lbl">Pass AA</span></div>
      <div class="a11y-summary-divider"></div>
      <div class="a11y-summary-stat" style="color:var(--red)"><span class="a11y-summary-num">${failCount}</span><span class="a11y-summary-lbl">Fail AA</span></div>
    </div>
    <div class="a11y-pairs-list">
      ${rows.map(row=>`<div class="a11y-pair-row"><div class="a11y-pair-swatch" style="background:${row.bg};border:1px solid var(--border)"><span style="color:${row.fg};font-weight:700;font-size:16px">Aa</span></div><div class="a11y-pair-info"><div class="a11y-pair-name">${escHtml(row.name)} on ${row.bg==='#ffffff'?'White':'Black'}</div><div class="a11y-pair-ratio">${row.ratio.toFixed(2)}:1</div></div><div class="a11y-pair-badges"><span class="a11y-badge ${row.aa?'pass':'fail'}">AA</span><span class="a11y-badge ${row.aaa?'pass':'fail'}">AAA</span></div></div>`).join('')}
    </div>`;
}

/* ══════════════════════════════════════════════════════
   COMPONENT TOKEN MAP
══════════════════════════════════════════════════════ */
const COMPONENT_TOKEN_MAP = {
  button:   [['Background','--color-{palette}-500'],['Border Radius','--radius-md'],['Font','--font-primary'],['Shadow','--shadow-sm'],['Padding','--spacing-sm']],
  input:    [['Border','--color-{palette}-200'],['Border Radius','--radius-md'],['Font','--font-primary'],['Padding','--spacing-sm']],
  card:     [['Background','--color-{palette}-50'],['Border','--color-{palette}-200'],['Border Radius','--radius-lg'],['Shadow','--shadow-md']],
  badge:    [['Background','--color-{palette}-100'],['Text','--color-{palette}-700'],['Border Radius','--radius-full']],
  alert:    [['Background','--color-{palette}-50'],['Border','--color-{palette}-300'],['Border Radius','--radius-md']],
  avatar:   [['Background','--color-{palette}-200'],['Border Radius','--radius-full']],
  tabs:     [['Active Color','--color-{palette}-500'],['Border','--color-{palette}-200'],['Font','--font-primary']],
  select:   [['Border','--color-{palette}-200'],['Border Radius','--radius-md'],['Font','--font-primary']],
  switch:   [['Active','--color-{palette}-500'],['Border Radius','--radius-full']],
  checkbox: [['Active','--color-{palette}-500'],['Border','--color-{palette}-300'],['Border Radius','--radius-sm']],
  progress: [['Fill','--color-{palette}-500'],['Track','--color-{palette}-100'],['Border Radius','--radius-full']],
  skeleton: [['Background','--color-{palette}-100'],['Border Radius','--radius-md']],
  table:    [['Header Background','--color-{palette}-50'],['Border','--color-{palette}-200'],['Font','--font-primary']],
  slider:   [['Fill','--color-{palette}-500'],['Track','--color-{palette}-200'],['Border Radius','--radius-full']],
};

/* ── Component property definitions (which fields each component exposes) ── */
const COMP_PROP_DEFS = {
  button:   ['font','weight','textStop','color','bgStop','borderStop','borderWidth','radius','shadow'],
  input:    ['font','weight','textStop','bgStop','borderStop','borderWidth','radius'],
  card:     ['font','weight','textStop','color','bgStop','borderStop','borderWidth','radius','shadow'],
  badge:    ['font','weight','textStop','color','bgStop','borderStop'],
  alert:    ['font','weight','bgStop','borderStop','borderWidth','radius'],
  avatar:   ['font','color','bgStop','borderStop'],
  tabs:     ['font','weight','color','borderStop'],
  select:   ['font','weight','bgStop','borderStop','borderWidth','radius'],
  switch:   ['color','borderStop'],
  checkbox: ['color','borderStop','borderWidth'],
  progress: ['color','bgStop'],
  skeleton: ['bgStop','radius'],
  table:    ['font','weight','bgStop','borderStop'],
  slider:   ['color','bgStop','shadow'],
};

const COMP_LABELS = {
  button:'Button', input:'Input', card:'Card', badge:'Badge', alert:'Alert',
  avatar:'Avatar', tabs:'Tabs', select:'Select', switch:'Switch',
  checkbox:'Checkbox', progress:'Progress', skeleton:'Skeleton', table:'Table', slider:'Slider',
};

const COMP_VARIANTS = {
  button: ['solid','outline','ghost','destructive'],
  badge:  ['solid','outline','secondary'],
};
const COMP_SHAPES_MAP = {
  badge:  [['pill','Pill'],['rounded','Rounded'],['square','Square']],
  avatar: [['circle','Circle'],['rounded','Rounded'],['square','Square']],
};
const COMP_TEXT_FIELDS = {
  button:   [{ key:'labelText',    label:'Label',       placeholder:'Button' }],
  badge:    [{ key:'labelText',    label:'Label',       placeholder:'Badge' }],
  card:     [{ key:'titleText',    label:'Title',       placeholder:'Create project' }, { key:'descText', label:'Description', placeholder:'Deploy in one-click.' }],
  alert:    [{ key:'titleText',    label:'Title',       placeholder:'Heads up!' }, { key:'msgText', label:'Message', placeholder:'You can add components using the CLI.' }],
  avatar:   [{ key:'initialsText', label:'Initials',    placeholder:'JD' }],
  tabs:     [{ key:'tab1Text',     label:'Tab 1',       placeholder:'Account' }, { key:'tab2Text', label:'Tab 2', placeholder:'Password' }],
  slider:   [{ key:'labelText',    label:'Label',       placeholder:'Volume' }],
};

/* ── Dropdown builder helpers ── */
function _palStopOptions(compKey, propKey, defaultStop) {
  const pal = _cpPalette(compKey);
  if (!pal) return `<option value="${defaultStop}">${defaultStop}</option>`;
  const cur = _cpGet(compKey, propKey, defaultStop);
  return pal.colors.map(c => `<option value="${c.stop}" ${c.stop===cur?'selected':''}>${c.stop} — ${c.hex}</option>`).join('');
}
function _palOptions(compKey) {
  const cur = _cpGet(compKey,'paletteId',null) || state.palettes[0]?.id || '';
  return state.palettes.map(p=>`<option value="${p.id}" ${p.id===cur?'selected':''}>${escHtml(p.name)}</option>`).join('');
}
function _sdPalOptions() {
  const cur = state.systemDefaults?.paletteId || '';
  return state.palettes.map(p=>`<option value="${p.id}" ${p.id===cur?'selected':''}>${escHtml(p.name)}</option>`).join('');
}
function _fontOptions(compKey) {
  const cur = _cpGet(compKey,'fontId',null) || state.fonts[0]?.id || '';
  return state.fonts.map(f=>`<option value="${f.id}" ${f.id===cur?'selected':''}>${escHtml(f.name)}</option>`).join('');
}
function _sdFontOptions() {
  const cur = state.systemDefaults?.fontId || '';
  return state.fonts.map(f=>`<option value="${f.id}" ${f.id===cur?'selected':''}>${escHtml(f.name)}</option>`).join('');
}
function _radiusOptions(compKey) {
  if (!state.radii.length) return null;
  const curId=_cpGet(compKey,'radiusId',null), curLbl=_cpGet(compKey,'radiusStop',null);
  return state.radii.map(r=>r.stops.map(s=>{
    const val=`${r.id}|${s.label}`, sel=(r.id===curId&&s.label===curLbl)?'selected':'';
    return `<option value="${val}" ${sel}>${escHtml(r.name)} — ${s.label} (${s.value===9999?'pill':s.value+'px'})</option>`;
  }).join('')).join('');
}
function _sdRadiusOptions() {
  if (!state.radii.length) return null;
  const curId=state.systemDefaults?.radiusId, curLbl=state.systemDefaults?.radiusStop;
  return state.radii.map(r=>r.stops.map(s=>{
    const val=`${r.id}|${s.label}`, sel=(r.id===curId&&s.label===curLbl)?'selected':'';
    return `<option value="${val}" ${sel}>${escHtml(r.name)} — ${s.label}</option>`;
  }).join('')).join('');
}
function _shadowOptions(compKey) {
  if (!state.shadows.length) return null;
  const cur=_cpGet(compKey,'shadowId',null)||state.shadows[0]?.id||'';
  return state.shadows.map(s=>`<option value="${s.id}" ${s.id===cur?'selected':''}>${escHtml(s.name)}</option>`).join('');
}
function _sdShadowOptions() {
  const cur=state.systemDefaults?.shadowId||'';
  return state.shadows.map(s=>`<option value="${s.id}" ${s.id===cur?'selected':''}>${escHtml(s.name)}</option>`).join('');
}

/* ── Inline swatch dot ── */
function _sw(hex) { return hex ? `<span class="cp-swatch-dot" style="background:${hex}"></span>` : ''; }

/* ── Full component properties panel ── */
function renderComponentProperties() {
  const key   = state.selectedId;
  const defs  = COMP_PROP_DEFS[key];
  const emptyEl = document.getElementById('props-empty');
  const panel   = document.getElementById('props-font');
  if (!defs) { emptyEl.classList.remove('hidden'); panel.classList.add('hidden'); return; }
  emptyEl.classList.add('hidden');
  panel.classList.remove('hidden');

  const cp          = state.componentProps[key] || {};
  const hasFonts    = state.fonts.length > 0;
  const hasPalettes = state.palettes.length > 0;
  const hasRadii    = state.radii.length > 0;
  const hasShadows  = state.shadows.length > 0;
  const hasBorders  = state.borders.length > 0;
  const hasMotions  = state.motions.length > 0;
  const curPal      = _cpPalette(key);
  const curFont     = _cpFontObj(key);
  const curPri      = hasPalettes ? _cpColor(key,'colorStop',500,'#7c3aed') : null;
  const curBg       = hasPalettes ? _cpColor(key,'bgStop',50,'#f9fafb') : null;
  const curBd       = hasPalettes ? _cpColor(key,'borderStop',200,'#e5e7eb') : null;

  const sec   = t => `<div class="prop-section-label" style="margin-top:14px;margin-bottom:5px">${t}</div>`;
  const field = (label, inp, swHex = null) => `
    <div class="prop-field cp-field-row">
      <div class="cp-field-main">
        <label>${label}</label>
        ${inp}
      </div>
      ${swHex ? `<div class="cp-field-swatch" style="background:${swHex}"></div>` : '<div class="cp-field-swatch-blank"></div>'}
    </div>`;
  const tip = t => `<div class="props-tip">${t}</div>`;
  const pills = (items, curVal, attr) =>
    `<div class="cp-variant-pills">${items.map(([v,l])=>`<button class="cp-variant-pill ${curVal===v?'active':''}" data-comp="${key}" ${attr}="${v}">${l}</button>`).join('')}</div>`;

  let html = `<div class="prop-section">`;

  /* ── Header ── */
  const darkMode = cp.darkMode||false;
  html += `<div class="cp-prop-header">
    <span class="prop-section-label" style="margin:0">${COMP_LABELS[key]||key}</span>
    <div style="display:flex;gap:4px;flex-shrink:0">
      <button class="cp-action-btn${darkMode?' active':''}" id="cp-dark-btn" title="Toggle dark preview">
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none"><path d="M12 8.5A5.5 5.5 0 015.5 2a5.5 5.5 0 000 10A5.5 5.5 0 0012 8.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
      </button>
      <button class="cp-action-btn" id="cp-apply-all-btn" title="Apply font &amp; palette to all components">
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M9 4l3 3-3 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button class="cp-action-btn" id="cp-copy-css-btn" title="Copy component CSS">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M2 8V2h6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <button class="cp-action-btn" id="cp-reset-btn" title="Reset to defaults">
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none"><path d="M2 7C2 4.2 4.2 2 7 2C9.1 2 10.9 3.3 11.7 5M12 2v3h-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7c0 2.8-2.2 5-5 5-2.1 0-3.9-1.3-4.7-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
  </div>`;

  /* ── State tabs ── */
  const activeState = cp.activeState||'default';
  html += `<div class="cp-state-row">
    ${['default','hover','focus','disabled'].map(s=>`<button class="cp-state-tab${activeState===s?' active':''}" data-comp="${key}" data-state="${s}">${s[0].toUpperCase()+s.slice(1)}</button>`).join('')}
  </div>`;

  /* ── TYPOGRAPHY ── */
  if (defs.some(d=>['font','weight','textStop'].includes(d))) {
    html += sec('Typography');
    if (hasFonts) {
      html += field('Font Family', `<select class="prop-input cp-prop-sel" data-comp="${key}" data-prop="fontId">${_fontOptions(key)}</select>`);
      if (defs.includes('weight') && (curFont?.activeWeights||[]).length > 1) {
        const curW = cp.weight || _cpWeight(key);
        html += field('Weight',
          `<select class="prop-input cp-prop-sel" data-comp="${key}" data-prop="weight" data-stop-type="int">
            ${(curFont.activeWeights||[]).map(w=>`<option value="${w}" ${Number(curW)===w?'selected':''}>${w}</option>`).join('')}
          </select>`);
      }
      if (defs.includes('textStop') && hasPalettes) {
        const curTs = cp.textStop||'auto';
        html += field('Text Color',
          `<select class="prop-input cp-prop-sel" data-comp="${key}" data-prop="textStop">
            <option value="auto" ${curTs==='auto'?'selected':''}>Auto (contrast)</option>
            ${(curPal?.colors||[]).map(c=>`<option value="${c.stop}" ${String(curTs)===String(c.stop)?'selected':''}>${c.stop} — ${c.hex}</option>`).join('')}
          </select>`);
      }
    } else {
      html += tip('Add a Typography atom to enable font options.');
    }
  }

  /* ── COLORS ── */
  if (defs.some(d=>['color','bgStop','borderStop'].includes(d))) {
    html += sec('Colors');
    if (hasPalettes) {
      html += field('Palette', `<select class="prop-input cp-prop-sel" data-comp="${key}" data-prop="paletteId">${_palOptions(key)}</select>`, curPri);
      if (defs.includes('color'))      html += field('Primary Stop', `<select class="prop-input cp-prop-sel" data-comp="${key}" data-prop="colorStop" data-stop-type="int">${_palStopOptions(key,'colorStop',500)}</select>`, curPri);
      if (defs.includes('bgStop'))     html += field('Background',   `<select class="prop-input cp-prop-sel" data-comp="${key}" data-prop="bgStop"     data-stop-type="int">${_palStopOptions(key,'bgStop',50)}</select>`, curBg);
      if (defs.includes('borderStop')) html += field('Border Color', `<select class="prop-input cp-prop-sel" data-comp="${key}" data-prop="borderStop" data-stop-type="int">${_palStopOptions(key,'borderStop',200)}</select>`, curBd);
    } else {
      html += tip('Add a Color atom to enable color options.');
    }
  }

  /* ── SHAPE / VARIANT ── */
  const hasShapeSection = COMP_VARIANTS[key] || COMP_SHAPES_MAP[key] || defs.includes('radius') || defs.includes('borderWidth');
  if (hasShapeSection) {
    html += sec('Shape');
    if (COMP_VARIANTS[key]) {
      const curV = cp.variant||'solid';
      html += `<div class="prop-field"><label>Variant</label>${pills(COMP_VARIANTS[key].map(v=>[v,v[0].toUpperCase()+v.slice(1)]), curV, 'data-variant')}</div>`;
    }
    if (COMP_SHAPES_MAP[key]) {
      const curSh = cp.shape||COMP_SHAPES_MAP[key][0][0];
      html += `<div class="prop-field"><label>Shape</label>${pills(COMP_SHAPES_MAP[key], curSh, 'data-shape')}</div>`;
    }
    if (defs.includes('radius')) {
      if (hasRadii) html += field('Border Radius', `<select class="prop-input cp-prop-sel" data-comp="${key}" data-prop="radius">${_radiusOptions(key)}</select>`);
      else html += tip('Add a Border Radius atom to enable radius options.');
    }
    if (defs.includes('borderWidth')) {
      if (hasBorders) {
        const curBa=cp.borderAtomId, curBs=cp.borderWidthStop;
        const bwOpts = state.borders.map(b=>b.stops.map(s=>{
          const val=`${b.id}|${s.label}`, sel=(b.id===curBa&&s.label===curBs)?'selected':'';
          return `<option value="${val}" ${sel}>${escHtml(b.name)} — ${s.label} (${s.value}px)</option>`;
        }).join('')).join('');
        html += field('Border Width', `<select class="prop-input cp-prop-sel" data-comp="${key}" data-prop="borderWidth">${bwOpts}</select>`);
      } else {
        html += tip('Add a Border atom to enable border width.');
      }
    }
  }

  /* ── SPACING / DENSITY ── */
  html += sec('Spacing');
  const curDens = cp.density||'default';
  html += `<div class="prop-field"><label>Density</label>${pills([['compact','Compact'],['default','Default'],['spacious','Spacious']], curDens, 'data-density')}</div>`;

  /* ── SHADOW ── */
  if (defs.includes('shadow')) {
    html += sec('Shadow');
    if (hasShadows) html += field('Shadow', `<select class="prop-input cp-prop-sel" data-comp="${key}" data-prop="shadowId">${_shadowOptions(key)}</select>`);
    else html += tip('Add a Shadow atom to enable shadow options.');
  }

  /* ── MOTION ── */
  if (hasMotions) {
    html += sec('Motion');
    const curMot = cp.motionId||'';
    html += field('Transition',
      `<select class="prop-input cp-prop-sel" data-comp="${key}" data-prop="motionId">
        <option value="">Default (0.15s ease)</option>
        ${state.motions.map(m=>`<option value="${m.id}" ${m.id===curMot?'selected':''}>${escHtml(m.name)}</option>`).join('')}
      </select>`);
  }

  /* ── CONTENT (editable text) ── */
  const textFields = COMP_TEXT_FIELDS[key];
  if (textFields?.length) {
    html += sec('Content');
    textFields.forEach(tf => {
      html += `<div class="prop-field"><label>${tf.label}</label>
        <input class="prop-input cp-text-field" type="text" data-comp="${key}" data-text-key="${tf.key}"
               value="${escHtml(cp[tf.key]||'')}" placeholder="${tf.placeholder}"></div>`;
    });
  }

  html += `</div>`;
  panel.innerHTML = html;

  /* ── Wire all handlers ── */
  // Dropdown selects
  panel.querySelectorAll('.cp-prop-sel').forEach(sel => {
    sel.addEventListener('change', e => {
      const comp=e.target.dataset.comp, prop=e.target.dataset.prop, val=e.target.value;
      if (!state.componentProps[comp]) state.componentProps[comp]={};
      if (prop==='paletteId') {
        state.componentProps[comp].paletteId=val;
        delete state.componentProps[comp].colorStop;
        delete state.componentProps[comp].bgStop;
        delete state.componentProps[comp].borderStop;
        renderComponentProperties();
      } else if (prop==='radius') {
        const [rid,rlbl]=val.split('|');
        state.componentProps[comp].radiusId=rid; state.componentProps[comp].radiusStop=rlbl;
      } else if (prop==='borderWidth') {
        const [bid,bstp]=val.split('|');
        state.componentProps[comp].borderAtomId=bid; state.componentProps[comp].borderWidthStop=bstp;
      } else if (e.target.dataset.stopType==='int') {
        state.componentProps[comp][prop]=parseInt(val,10);
      } else {
        state.componentProps[comp][prop]=val;
      }
      renderComponentPreview();
    });
  });
  // State tabs
  panel.querySelectorAll('[data-state]').forEach(btn => {
    btn.addEventListener('click', e => {
      const comp=e.target.dataset.comp;
      if (!state.componentProps[comp]) state.componentProps[comp]={};
      state.componentProps[comp].activeState=e.target.dataset.state;
      renderComponentProperties();
      renderComponentPreview();
    });
  });
  // Variant pills
  panel.querySelectorAll('[data-variant]').forEach(btn => {
    btn.addEventListener('click', e => {
      const comp=e.target.dataset.comp;
      if (!state.componentProps[comp]) state.componentProps[comp]={};
      state.componentProps[comp].variant=e.target.dataset.variant;
      renderComponentProperties();
      renderComponentPreview();
    });
  });
  // Shape pills
  panel.querySelectorAll('[data-shape]').forEach(btn => {
    btn.addEventListener('click', e => {
      const comp=e.target.dataset.comp;
      if (!state.componentProps[comp]) state.componentProps[comp]={};
      state.componentProps[comp].shape=e.target.dataset.shape;
      renderComponentProperties();
      renderComponentPreview();
    });
  });
  // Density pills
  panel.querySelectorAll('[data-density]').forEach(btn => {
    btn.addEventListener('click', e => {
      const comp=e.target.dataset.comp;
      if (!state.componentProps[comp]) state.componentProps[comp]={};
      state.componentProps[comp].density=e.target.dataset.density;
      renderComponentProperties();
      renderComponentPreview();
    });
  });
  // Editable text
  panel.querySelectorAll('.cp-text-field').forEach(inp => {
    inp.addEventListener('input', e => {
      const comp=e.target.dataset.comp, tk=e.target.dataset.textKey;
      if (!state.componentProps[comp]) state.componentProps[comp]={};
      state.componentProps[comp][tk]=e.target.value;
      renderComponentPreview();
    });
  });
  // Dark mode toggle
  document.getElementById('cp-dark-btn')?.addEventListener('click', () => {
    if (!state.componentProps[key]) state.componentProps[key]={};
    state.componentProps[key].darkMode=!state.componentProps[key].darkMode;
    renderComponentProperties();
    renderComponentPreview();
  });
  // Apply to all
  document.getElementById('cp-apply-all-btn')?.addEventListener('click', () => {
    const src=state.componentProps[key]||{};
    const pick={fontId:src.fontId,paletteId:src.paletteId,radiusId:src.radiusId,radiusStop:src.radiusStop,shadowId:src.shadowId};
    Object.keys(state.activeComponents).forEach(comp=>{
      if (!state.componentProps[comp]) state.componentProps[comp]={};
      Object.assign(state.componentProps[comp],pick);
    });
    renderComponentPreview();
    toast('Settings applied to all components');
  });
  // Copy CSS
  document.getElementById('cp-copy-css-btn')?.addEventListener('click', () => {
    navigator.clipboard.writeText(_generateComponentCSS(key));
    toast('CSS copied to clipboard');
  });
  // Reset
  document.getElementById('cp-reset-btn')?.addEventListener('click', () => {
    delete state.componentProps[key];
    renderComponentProperties();
    renderComponentPreview();
    toast(`${COMP_LABELS[key]} reset to defaults`);
  });
}

/* ── System Defaults panel (shown when no component is selected) ── */
function renderSystemDefaults() {
  const emptyEl = document.getElementById('props-empty');
  const panel   = document.getElementById('props-font');
  const hasFonts=state.fonts.length>0, hasPalettes=state.palettes.length>0, hasRadii=state.radii.length>0, hasShadows=state.shadows.length>0;
  if (!hasFonts && !hasPalettes && !hasRadii && !hasShadows) { emptyEl.classList.remove('hidden'); panel.classList.add('hidden'); return; }
  emptyEl.classList.add('hidden');
  panel.classList.remove('hidden');
  const sd = state.systemDefaults||{};
  const field=(label,inp)=>`<div class="prop-field"><label>${label}</label>${inp}</div>`;
  let html=`<div class="prop-section">
    <span class="prop-section-label">System Defaults</span>
    <div class="props-tip" style="margin-bottom:10px">These settings apply to all components that don't have individual overrides.</div>`;
  if (hasFonts)    html+=field('Default Font', `<select class="prop-input sd-sel" data-sd-prop="fontId"><option value="">None</option>${_sdFontOptions()}</select>`);
  if (hasPalettes) html+=field('Default Palette', `<select class="prop-input sd-sel" data-sd-prop="paletteId"><option value="">None</option>${_sdPalOptions()}</select>`);
  if (hasRadii)    html+=field('Default Radius', `<select class="prop-input sd-sel" data-sd-prop="radius"><option value="">None</option>${_sdRadiusOptions()}</select>`);
  if (hasShadows)  html+=field('Default Shadow', `<select class="prop-input sd-sel" data-sd-prop="shadowId"><option value="">None</option>${_sdShadowOptions()}</select>`);
  html+=`<button class="export-action-btn" id="sd-apply-btn" style="margin-top:10px;width:100%">Apply Defaults to All Components</button>`;
  html+=`</div>`;
  panel.innerHTML=html;
  panel.querySelectorAll('.sd-sel').forEach(sel=>{
    sel.addEventListener('change',e=>{
      const prop=e.target.dataset.sdProp, val=e.target.value;
      if (!state.systemDefaults) state.systemDefaults={};
      if (prop==='radius'){ const [rid,rlbl]=val.split('|'); state.systemDefaults.radiusId=rid; state.systemDefaults.radiusStop=rlbl; }
      else state.systemDefaults[prop]=val||null;
      renderComponentPreview();
    });
  });
  document.getElementById('sd-apply-btn')?.addEventListener('click',()=>{
    const sd=state.systemDefaults||{};
    Object.keys(state.activeComponents).forEach(comp=>{
      if (!state.componentProps[comp]) state.componentProps[comp]={};
      if (sd.fontId)    state.componentProps[comp].fontId=sd.fontId;
      if (sd.paletteId) state.componentProps[comp].paletteId=sd.paletteId;
      if (sd.radiusId)  { state.componentProps[comp].radiusId=sd.radiusId; state.componentProps[comp].radiusStop=sd.radiusStop; }
      if (sd.shadowId)  state.componentProps[comp].shadowId=sd.shadowId;
    });
    renderComponentPreview();
    toast('System defaults applied to all components');
  });
}

/* ══════════════════════════════════════════════════════
   CANVAS MODE (System / Preview)
══════════════════════════════════════════════════════ */
function _applyCanvasMode() {
  const isPreview = state.canvasMode === 'preview';

  // Canvas views
  document.getElementById('canvas-system')?.classList.toggle('hidden', isPreview);
  document.getElementById('canvas-preview')?.classList.toggle('hidden', !isPreview);

  // Topbar
  document.getElementById('mode-system-btn')?.classList.toggle('active', !isPreview);
  document.getElementById('mode-preview-btn')?.classList.toggle('active', isPreview);
  document.getElementById('preview-device-controls')?.classList.toggle('hidden', !isPreview);
  document.getElementById('topbar-system-controls')?.classList.toggle('hidden', isPreview);

  // Sidebar — atoms+tokens only in System, pairings+components only in Preview
  document.getElementById('toolbar-body')?.classList.toggle('hidden', isPreview);
  document.getElementById('toolbar-preview-section')?.classList.toggle('hidden', !isPreview);

  // Clear selection when switching modes so properties panel resets
  if (isPreview) {
    state.selectedId   = null;
    state.selectedType = null;
    renderProperties();
    renderPreviewCanvas();
  } else {
    renderProperties();
  }
}

/* ── Radix-style functional color steps (preview) ──────
   Steps: 1-2 backgrounds · 3-5 component bg · 6-8 borders · 9-10 solids ·
   11-12 text. A neutral (gray) palette drives surfaces/borders/text; the
   accent palette drives solids and tints. Text steps are contrast-enforced
   against their actual background (WCAG), per Radix's step 11/12 guarantee. */
function _neutralPalette() {
  if (!state.palettes.length) return null;
  const byName = state.palettes.find(p => /neutral|gr[ae]y|slate|zinc|stone/i.test(p.name));
  if (byName) return byName;
  return state.palettes.reduce((best, p) =>
    hexToHsl(p.baseHex).s < hexToHsl(best.baseHex).s ? p : best, state.palettes[0]);
}
function _accentPalette(neutral) {
  return state.palettes.find(p => p !== neutral) || state.palettes[0] || null;
}
function _palPick(p, stop, fb) {
  return p?.colors.find(c => c.stop === stop)?.hex
      || p?.colors[Math.round(((p.colors.length - 1) * stop) / 1000)]?.hex
      || fb;
}
function _palExact(p, stop) {
  return p?.colors.find(c => c.stop === stop)?.hex || null;
}
function _shiftL(hex, amt) {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(h, s, Math.min(100, Math.max(0, l + amt)));
}
/* Walk the palette's stop ladder from preferredStop toward the dark (or light)
   extreme until the color passes `min` contrast against bgHex. */
function _ensureContrast(p, preferredStop, bgHex, min, towardDark) {
  const stops = (p?.colors || []).map(c => c.stop).sort((a, b) => towardDark ? a - b : b - a);
  const candidates = [_palPick(p, preferredStop, null)];
  for (const s of stops) {
    if (towardDark ? s > preferredStop : s < preferredStop) candidates.push(_palExact(p, s));
  }
  for (const hex of candidates) {
    if (hex && contrastRatio(hex, bgHex) >= min) return hex;
  }
  const fallback = towardDark ? '#111827' : '#f9fafb';
  return contrastRatio(fallback, bgHex) >= min ? fallback : (towardDark ? '#000000' : '#ffffff');
}
/* Radix: step-9 solids take white text except bright hues — WCAG decides. */
function _solidText(solidHex) {
  return contrastRatio('#ffffff', solidHex) >= 4.5 ? '#ffffff' : '#111827';
}
function _previewThemeColors(isDark) {
  const neutral = _neutralPalette();
  const accent  = _accentPalette(neutral);
  const n = (stop, fb) => _palPick(neutral, stop, fb);
  const a = (stop, fb) => _palPick(accent, stop, fb);

  // Steps 1-2 — app & subtle backgrounds
  const appBg    = isDark ? (_palExact(neutral, 950) || _shiftL(n(900, '#0f0e17'), -4)) : '#ffffff';
  const subtleBg = isDark ? n(900, '#17161f') : n(50, '#fafafa');
  // Steps 3-4 — component backgrounds
  const elBg      = isDark ? n(800, '#211f2c') : n(100, '#f4f4f5');
  const elBgHover = isDark ? n(700, '#2b2938') : n(200, '#e8e8ec');
  // Steps 6-7 — borders
  const borderSubtle = isDark ? n(800, '#2d2b3d') : n(200, '#e5e7eb');
  const border       = isDark ? n(700, '#3a3748') : n(300, '#d4d4d8');
  // Steps 11-12 — text, contrast-enforced against real backgrounds
  const textHigh  = _ensureContrast(neutral, isDark ? 50  : 900, appBg,    7,   !isDark);
  const textLow   = _ensureContrast(neutral, isDark ? 300 : 600, subtleBg, 4.5, !isDark);
  const textMuted = _ensureContrast(neutral, isDark ? 400 : 500, appBg,    4.5, !isDark);
  // Steps 9-10 — solid accent
  const solid      = a(500, '#7c3aed');
  const solidHover = isDark ? a(400, '#8b5cf6') : a(600, '#6d28d9');
  // Accent tints + readable accent text on them
  const accentBg       = isDark ? a(900, '#1e0038') : a(50, '#f5f3ff');
  const accentBgStrong = isDark ? a(800, '#3b0764') : a(100, '#ede9fe');
  const accentText     = _ensureContrast(accent, isDark ? 300 : 700, accentBg, 4.5, !isDark);
  const onSolid        = _solidText(solid);

  return { appBg, subtleBg, elBg, elBgHover, borderSubtle, border,
           textHigh, textLow, textMuted, solid, solidHover,
           accentBg, accentBgStrong, accentText, onSolid, accentPal: accent };
}

function renderPreviewCanvas() {
  const el = document.getElementById('canvas-preview');
  if (!el || state.canvasMode !== 'preview') return;

  const hasTokens = state.palettes.length > 0 || state.fonts.length > 0;
  if (!hasTokens) {
    el.innerHTML = `<div class="preview-empty">
      <div class="preview-empty-icon">🎨</div>
      <div class="preview-empty-title">Add some atoms first</div>
      <p class="preview-empty-sub">Add at least a color palette or font to see your live portfolio preview.</p>
    </div>`;
    return;
  }

  // ── Resolve tokens (Radix-style functional steps) ──
  const isDark   = state.previewTheme === 'dark';
  const T        = _previewThemeColors(isDark);

  // Decorative palette lookups (hero color strip, project-card art) use the accent palette
  const pal      = T.accentPal || state.palettes[0];
  const pick     = (stop, fb) => _palPick(pal, stop, fb);

  const pri      = T.solid;          // step 9  — solid background
  const priDark  = T.solidHover;     // step 10 — hovered solid
  const priLight = T.accentBgStrong; // step 4-5 accent tint
  const priXLight= T.accentBg;       // step 3 accent tint
  const bg       = T.appBg;          // step 1
  const bgSubtle = T.subtleBg;       // step 2
  const border   = T.border;         // step 7
  const borderSub= T.borderSubtle;   // step 6
  const elBg     = T.elBg;           // step 3
  const txt      = T.textHigh;       // step 12 — contrast-enforced
  const txtSub   = T.textLow;        // step 11 — contrast-enforced
  const txtMuted = T.textMuted;      //          contrast-enforced
  const priTxt   = T.onSolid;        // text on step-9 solid (WCAG-picked)
  const accentTxt= T.accentText;     // accent-tinted text on accent tints
  const priText  = _ensureContrast(T.accentPal, isDark ? 300 : 600, bg, 4.5, !isDark); // accent used AS text (step 11)

  const font = state.fonts[0];
  const ff   = font ? `'${font.name}',${FALLBACK_STACKS[font.category]||'sans-serif'}` : 'system-ui,sans-serif';
  const vv   = font?.variants || [];
  const getV = (...roles) => { for (const r of roles) { const f = vv.find(v => v.role?.toLowerCase().includes(r.toLowerCase())); if (f) return f; } return null; };

  const h1v  = getV('h1','Display','Hero') || { size: 56, weight: 700, leading: 1.1 };
  const h2v  = getV('h2','Title')          || { size: 36, weight: 700, leading: 1.2 };
  const h3v  = getV('h3','Subtitle')       || { size: 22, weight: 600, leading: 1.3 };
  const bodyv= getV('Body','body','base')  || { size: 16, weight: 400, leading: 1.6 };
  const smv  = getV('sm','caption','small')|| { size: 13, weight: 400, leading: 1.5 };

  const sh   = state.shadows[0]  ? shadowToCss(state.shadows[0].layers)  : '0 1px 3px rgba(0,0,0,0.08)';
  const shLg = state.shadows[1]  ? shadowToCss(state.shadows[1].layers)  : '0 8px 24px rgba(0,0,0,0.12)';
  const r    = (() => { const s = state.radii[0]?.stops.find(s => /md|base|default/i.test(s.label)) || state.radii[0]?.stops[1]; return s ? (s.value===9999?'9999px':`${s.value}px`) : '8px'; })();
  const rLg  = (() => { const s = state.radii[0]?.stops.find(s => /lg|xl/i.test(s.label)) || state.radii[0]?.stops[2]; return s ? (s.value===9999?'9999px':`${s.value}px`) : '16px'; })();
  const sp   = state.spacings[0] ? spacingStopValues(state.spacings[0].baseUnit) : [];
  const gap  = (sp[3]?.value || 16) + 'px';
  const gapL = (sp[5]?.value || 32) + 'px';

  const sty  = (size, weight, leading, color = txt) =>
    `font-family:${ff};font-size:${size}px;font-weight:${weight};line-height:${leading};color:${color}`;
  const btn  = (bg2, col, bdr = 'none') =>
    `display:inline-flex;align-items:center;gap:6px;padding:12px 24px;background:${bg2};color:${col};border:${bdr};border-radius:980px;font-family:${ff};font-size:${bodyv.size * 0.875}px;font-weight:600;cursor:pointer;text-decoration:none;transition:opacity 0.15s`;

  // ── Responsive helpers ──
  const isMobile = state.previewDevice === 'mobile';
  const isTablet = state.previewDevice === 'tablet';
  const resp = (d, t, m) => isMobile ? m : isTablet ? t : d;

  // Layout values that change per device
  const navPad    = resp('0 40px', '0 24px', '0 16px');
  const secPad    = resp('128px 48px', '88px 32px', '64px 24px');
  const gapSection= resp('72px', '48px', '32px');
  const colH1     = Math.round(h1v.size * resp(1.3, 0.94, 0.75));
  const colH2     = Math.round(h2v.size * resp(1, 0.82, 0.72));
  const showNavLinks = !isMobile;

  // Flex-row helper — wraps to 1 col on mobile, optional 2-col on tablet
  const flexRow = (gap='16px') =>
    `display:flex;flex-wrap:wrap;gap:${gap}`;
  const flexCell = (deskPct, tabPct='100%', mobPct='100%') => {
    const pct = isMobile ? mobPct : isTablet ? tabPct : deskPct;
    // subtract gap to get true width
    const gapN = parseInt(resp('24', '20', '16'));
    return `flex:0 0 calc(${pct} - ${pct==='100%'?0:gapN/2}px);min-width:0`;
  };

  // ── Portfolio page sections ──
  const ac = state.activeComponents;

  // ── NAV (always visible) ──
  const nav = `
    <nav style="padding:${navPad};height:60px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:nowrap;overflow:hidden;position:sticky;top:0;background:${bg}cc;backdrop-filter:saturate(180%) blur(20px);z-index:10;box-sizing:border-box">
      <a href="#" style="display:flex;align-items:center;gap:8px;text-decoration:none;flex-shrink:0">
        <div style="width:28px;height:28px;border-radius:${r};background:${pri};display:flex;align-items:center;justify-content:center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L6 2L10 10M4 7h4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <span style="font-family:${ff};font-size:${bodyv.size}px;font-weight:700;color:${txt};letter-spacing:-0.03em;white-space:nowrap">Alex Studio</span>
      </a>
      ${showNavLinks ? `<div style="display:flex;align-items:center;gap:${resp('28px','20px','0')};flex:1;justify-content:center">
        ${['Work','About','Process'].map(l=>`<a href="#" style="font-family:${ff};font-size:${smv.size}px;font-weight:500;color:${txtSub};text-decoration:none;white-space:nowrap">${l}</a>`).join('')}
      </div>` : '<div style="flex:1"></div>'}
      <a href="#" style="flex-shrink:0;display:inline-flex;align-items:center;padding:${resp('8px 18px','7px 14px','7px 12px')};background:${pri};color:${priTxt};border-radius:980px;font-family:${ff};font-size:${smv.size}px;font-weight:600;text-decoration:none;white-space:nowrap">Let's talk →</a>
    </nav>`;

  // ── ALERT BANNER — ac.alert ──
  const alertBanner = !ac.alert ? '' : `
    <div style="background:${priXLight};padding:${resp('11px 48px','10px 28px','10px 20px')};display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;text-align:center">
      <span style="font-family:${ff};font-size:${smv.size}px;font-weight:500;color:${txt}">Currently available for new projects.</span>
      <a href="#" style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${priText};text-decoration:none;flex-shrink:0;white-space:nowrap">Get in touch →</a>
    </div>`;

  // ── HERO — ac.badge, ac.button ──
  const heroColorStrip = pal ? pal.colors.map(c=>`<div style="flex:1;height:4px;background:${c.hex}"></div>`).join('') : '';
  const hero = `
    <section style="padding:${resp('120px 48px 96px','88px 32px 72px','64px 24px 56px')};background:${bg}">
      <div style="max-width:820px;margin:0 auto;text-align:center">
        ${ac.badge ? `<div style="display:inline-block;background:${priXLight};color:${accentTxt};padding:5px 14px;border-radius:9999px;font-family:${ff};font-size:${smv.size}px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:${resp('28px','22px','18px')}">Available for work</div>` : ''}
        <h1 style="font-family:${ff};font-size:${colH1}px;font-weight:${h1v.weight};line-height:1.05;color:${txt};letter-spacing:-0.045em;margin-bottom:${resp('24px','18px','16px')}">
          Crafting digital experiences<br>that <em style="color:${priText};font-style:italic">move people.</em>
        </h1>
        <p style="font-family:${ff};font-size:${Math.round(bodyv.size*1.2)}px;font-weight:${bodyv.weight};line-height:1.6;color:${txtSub};max-width:560px;margin:0 auto ${resp('36px','28px','24px')}">
          Product designer with 7 years of experience building thoughtful interfaces for startups and scale-ups.
        </p>
        ${ac.button ? `<div style="display:flex;gap:${resp('24px','20px','16px')};flex-wrap:wrap;justify-content:center;align-items:center">
          <a href="#" style="display:inline-flex;align-items:center;padding:13px 28px;background:${pri};color:${priTxt};border-radius:980px;font-family:${ff};font-size:${bodyv.size}px;font-weight:600;text-decoration:none">View my work</a>
          <a href="#" style="font-family:${ff};font-size:${bodyv.size}px;font-weight:500;color:${priText};text-decoration:none">Learn more →</a>
        </div>` : `<a href="#" style="font-family:${ff};font-size:${bodyv.size}px;font-weight:500;color:${priText};text-decoration:none">View selected work →</a>`}
      </div>
      <div style="max-width:880px;margin:${resp('72px','56px','40px')} auto 0">
        <div style="background:${bgSubtle};border-radius:${rLg};overflow:hidden;box-shadow:${shLg}">
          <div style="height:${resp('300px','240px','180px')};background:linear-gradient(135deg,${priXLight},${priLight});display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden">
            <div style="position:absolute;bottom:0;left:0;right:0;display:flex">${heroColorStrip}</div>
            <div style="position:relative;width:${resp('84px','72px','64px')};height:${resp('84px','72px','64px')};border-radius:${rLg};background:${bg};display:flex;align-items:center;justify-content:center;box-shadow:${sh}"><span style="font-size:${resp('38px','32px','28px')}">✦</span></div>
          </div>
          <div style="padding:${resp('18px 24px','16px 20px','14px 16px')};display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
            <div>
              <div style="font-family:${ff};font-size:${bodyv.size}px;font-weight:600;color:${txt};margin-bottom:2px">Design System Builder</div>
              <div style="font-family:${ff};font-size:${smv.size}px;font-weight:400;color:${txtMuted}">Personal project · 2024</div>
            </div>
            <span style="font-family:${ff};font-size:${smv.size}px;font-weight:500;color:${priText}">Explore →</span>
          </div>
        </div>
        <div style="display:flex;justify-content:center;gap:${resp('96px','64px','48px')};margin-top:${resp('80px','60px','44px')}">
          ${[['48','Projects shipped'],['7+','Years experience']].map(([n,l])=>`
          <div style="text-align:center">
            <div style="font-family:${ff};font-size:${Math.round(h2v.size*resp(1.2,1,0.85))}px;font-weight:${h2v.weight};color:${priText};line-height:1;letter-spacing:-0.03em">${n}</div>
            <div style="font-family:${ff};font-size:${smv.size}px;font-weight:500;color:${txtMuted};margin-top:8px">${l}</div>
          </div>`).join('')}
        </div>
      </div>
    </section>`;

  // ── WORK — ac.card (entirely hidden when off). Tags use ac.badge ──
  const projects = [
    { title:'Orbit Design System', tags:['Design Systems','React'], color: pick(400, pri), desc:'A token-based design system for a fintech startup, reducing UI inconsistencies by 80%.' },
    { title:'Flow Analytics Dashboard', tags:['UI Design','Data Viz'], color: pick(600, txtSub), desc:'Redesigned analytics experience, improving task completion by 34% in testing.' },
    { title:'Bloom Mobile App', tags:['iOS','Motion Design'], color: pick(200, priLight), desc:'End-to-end design of a wellness app from 0 to 50k users.' },
  ];
  const work = !ac.card ? '' : `
    <section style="padding:${secPad};background:${bg}">
      <div style="text-align:center;margin-bottom:${gapSection}">
        <span style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${priText};letter-spacing:0.08em;text-transform:uppercase;display:block;margin-bottom:10px">Selected Work</span>
        <h2 style="font-family:${ff};font-size:${colH2}px;font-weight:${h2v.weight};line-height:1.1;color:${txt};letter-spacing:-0.03em">Recent projects</h2>
        <a href="#" style="display:inline-block;margin-top:14px;font-family:${ff};font-size:${bodyv.size}px;font-weight:500;color:${priText};text-decoration:none">View all →</a>
      </div>
      <div style="${flexRow(resp('20px','16px','16px'))}">
        ${projects.map(p=>`
          <div style="${flexCell(resp('calc(33.33% - 14px)','calc(50% - 8px)','100%'), resp('calc(50% - 8px)','100%','100%'), '100%')};min-width:${resp('220px','200px','0')};border-radius:${rLg};overflow:hidden;background:${elBg}">
            <div style="height:${resp('170px','140px','120px')};background:${p.color}18;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden">
              <div style="width:56px;height:56px;border-radius:${r};background:${p.color};opacity:0.25"></div>
              ${ac.badge ? `<div style="position:absolute;top:14px;left:14px;display:flex;gap:5px;flex-wrap:wrap">
                ${p.tags.map(t=>`<span style="background:${bg}dd;color:${txt};padding:2px 9px;border-radius:9999px;font-family:${ff};font-size:${smv.size-1}px;font-weight:600">${t}</span>`).join('')}
              </div>` : ''}
            </div>
            <div style="padding:${resp('24px 28px 28px','18px 20px 22px','16px 18px 20px')}">
              <h3 style="font-family:${ff};font-size:${Math.round(bodyv.size*1.1)}px;font-weight:700;line-height:1.3;color:${txt};letter-spacing:-0.015em;margin-bottom:8px">${p.title}</h3>
              <p style="font-family:${ff};font-size:${smv.size}px;line-height:1.6;color:${txtSub};margin-bottom:14px">${p.desc}</p>
              <a href="#" style="font-family:${ff};font-size:${smv.size}px;font-weight:500;color:${priText};text-decoration:none">View case study →</a>
            </div>
          </div>`).join('')}
      </div>
    </section>`;

  // ── ABOUT — ac.avatar, ac.progress ──
  const skills = [['UI/UX Design',95],['Design Systems',92],['Prototyping',88],['Front-end',75],['Motion Design',70]];
  const about = `
    <section style="padding:${secPad};background:${bgSubtle}">
      <div style="${flexRow(resp('40px','24px','20px'))}">
        <div style="${flexCell('calc(50% - 20px)','100%','100%')}">
          ${ac.avatar ? `<div style="width:64px;height:64px;border-radius:50%;background:${pri};display:flex;align-items:center;justify-content:center;margin-bottom:${resp('20px','16px','14px')}">
            <span style="font-family:${ff};font-size:${h3v.size}px;font-weight:700;color:${priTxt}">AL</span>
          </div>` : ''}
          <h2 style="font-family:${ff};font-size:${colH2}px;font-weight:${h2v.weight};line-height:1.1;color:${txt};letter-spacing:-0.03em;margin-bottom:${resp('16px','12px','12px')}">Hey, I'm Alex.</h2>
          <p style="font-family:${ff};font-size:${bodyv.size}px;line-height:${bodyv.leading};color:${txtSub};margin-bottom:12px">A product designer based in San Francisco. I believe good design is felt, not just seen — it's in the details and the moments of delight.</p>
          <p style="font-family:${ff};font-size:${bodyv.size}px;line-height:${bodyv.leading};color:${txtSub};margin-bottom:${resp('24px','18px','16px')}">Previously at Figma, Linear, and a handful of early-stage startups.</p>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:${resp('24px','18px','16px')}">
            ${['Figma','Framer','React','Principle','After Effects'].map(s=>`<span style="padding:4px 10px;background:${bg};border:1px solid ${border};border-radius:9999px;font-family:${ff};font-size:${smv.size}px;font-weight:500;color:${txtSub}">${s}</span>`).join('')}
          </div>
          ${ac.button ? `<a href="#" style="display:inline-flex;align-items:center;padding:11px 22px;background:transparent;color:${txt};border:1.5px solid ${border};border-radius:980px;font-family:${ff};font-size:${smv.size}px;font-weight:500;text-decoration:none">Download CV ↓</a>` : ''}
        </div>
        <div style="${flexCell('calc(50% - 20px)','100%','100%')}">
          <div style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${priText};letter-spacing:0.08em;text-transform:uppercase;margin-bottom:${resp('20px','16px','14px')}">Expertise</div>
          ${ac.progress ? `<div style="display:flex;flex-direction:column;gap:${resp('16px','12px','10px')}">
            ${skills.map(([name,pct])=>`
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px">
                <span style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${txt}">${name}</span>
                <span style="font-family:${ff};font-size:${smv.size}px;font-weight:500;color:${txtMuted}">${pct}%</span>
              </div>
              <div style="height:5px;background:${border};border-radius:9999px;overflow:hidden">
                <div style="height:100%;width:${pct}%;background:${pri};border-radius:9999px"></div>
              </div>
            </div>`).join('')}
          </div>` : `<div style="display:flex;flex-wrap:wrap;gap:8px">
            ${skills.map(([name])=>`<span style="padding:5px 12px;background:${bg};border:1px solid ${border};border-radius:9999px;font-family:${ff};font-size:${smv.size}px;font-weight:500;color:${txtSub}">${name}</span>`).join('')}
          </div>`}
          <div style="margin-top:${resp('24px','18px','14px')};padding:14px 18px;background:${priXLight};border-radius:${r};border-left:3px solid ${pri}">
            <div style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${txt};margin-bottom:3px">Currently available</div>
            <div style="font-family:${ff};font-size:${smv.size}px;font-weight:400;color:${txtSub}">Open to freelance & full-time</div>
          </div>
        </div>
      </div>
    </section>`;

  // ── PROCESS (always) ──
  const processItems = [
    {n:'01',t:'Discover',d:'Deep-dive into your users, goals, and constraints.'},
    {n:'02',t:'Define',d:'Frame the problem space. Create a clear design brief.'},
    {n:'03',t:'Design',d:'Rapid iterations from wireframes to high-fidelity.'},
    {n:'04',t:'Deliver',d:'Polished specs, design tokens, and dev handoff.'},
  ];
  const process = `
    <section style="padding:${secPad};background:${bg}">
      <div style="text-align:center;margin-bottom:${gapSection}">
        <span style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${priText};letter-spacing:0.08em;text-transform:uppercase;display:block;margin-bottom:6px">How I work</span>
        <h2 style="font-family:${ff};font-size:${colH2}px;font-weight:${h2v.weight};line-height:1.1;color:${txt};letter-spacing:-0.03em">My process</h2>
      </div>
      <div style="${flexRow(resp('16px','16px','12px'))}">
        ${processItems.map(s=>`
          <div style="${flexCell(resp('calc(25% - 12px)','calc(50% - 8px)','100%'), resp('calc(50% - 8px)','calc(50% - 8px)','100%'), '100%')};min-width:${resp('180px','160px','0')};padding:${resp('32px 28px','24px 20px','20px 16px')};border-radius:${rLg};background:${bgSubtle}">
            <div style="font-family:${ff};font-size:${resp('40px','32px','28px')};font-weight:${h2v.weight};color:${priText};opacity:0.18;line-height:1;margin-bottom:10px;letter-spacing:-0.04em">${s.n}</div>
            <div style="font-family:${ff};font-size:${Math.round(bodyv.size*1.05)}px;font-weight:700;line-height:1.2;color:${txt};margin-bottom:8px">${s.t}</div>
            <div style="font-family:${ff};font-size:${smv.size}px;font-weight:400;line-height:${smv.leading};color:${txtSub}">${s.d}</div>
          </div>`).join('')}
      </div>
    </section>`;

  // ── TESTIMONIAL (always) ──
  const testimonial = `
    <section style="padding:${resp('140px 48px','96px 32px','72px 24px')};background:${txt}">
      <div style="max-width:760px;margin:0 auto;text-align:center">
        <div style="font-size:${resp('56px','44px','38px')};color:${priText};line-height:1;margin-bottom:${resp('24px','18px','14px')};opacity:0.5">"</div>
        <blockquote style="font-family:${ff};font-size:${Math.round(h3v.size*resp(1.25,1.05,0.9))}px;font-weight:500;line-height:1.45;color:${bg};margin-bottom:${resp('36px','26px','20px')};letter-spacing:-0.02em">
          Alex doesn't just design beautiful things. She understands the whole product — the user, the business, the engineering constraints. That's rare.
        </blockquote>
        <div style="display:flex;align-items:center;justify-content:center;gap:12px">
          ${ac.avatar ? `<div style="width:40px;height:40px;border-radius:50%;background:${pri};display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <span style="font-family:${ff};font-size:${smv.size}px;font-weight:700;color:${priTxt}">JM</span>
          </div>` : `<div style="width:40px;height:40px;border-radius:50%;background:${border};flex-shrink:0"></div>`}
          <div>
            <div style="font-family:${ff};font-size:${bodyv.size}px;font-weight:600;line-height:1.2;color:${bg}">Jamie Morrison</div>
            <div style="font-family:${ff};font-size:${smv.size}px;font-weight:400;color:${txtMuted}">CPO at Linear</div>
          </div>
        </div>
      </div>
    </section>`;

  // ── CONTACT — ac.input, ac.select, ac.button ──
  const hasForm = ac.input || ac.select;
  const contact = `
    <section style="padding:${secPad};background:${bg}">
      <div style="${flexRow(resp('48px','24px','0px'))}">
        <div style="${flexCell('calc(50% - 24px)','100%','100%')};${isMobile?'margin-bottom:24px':''}">
          <span style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${priText};letter-spacing:0.08em;text-transform:uppercase;display:block;margin-bottom:6px">Get in touch</span>
          <h2 style="font-family:${ff};font-size:${colH2}px;font-weight:${h2v.weight};line-height:1.1;color:${txt};letter-spacing:-0.03em;margin-bottom:${resp('16px','12px','12px')}">Let's work together</h2>
          <p style="font-family:${ff};font-size:${bodyv.size}px;line-height:${bodyv.leading};color:${txtSub};margin-bottom:${resp('24px','18px','16px')}">Whether you have a project in mind or just want to chat — my inbox is always open.</p>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${[['✉','hello@alexstudio.co'],['📍','San Francisco, CA'],['⏰','Responding within 24h']].map(([ic,v])=>`
            <div style="display:flex;align-items:center;gap:10px">
              <span style="font-size:14px">${ic}</span>
              <span style="font-family:${ff};font-size:${smv.size}px;font-weight:500;color:${txtSub}">${v}</span>
            </div>`).join('')}
          </div>
        </div>
        <div style="${flexCell('calc(50% - 24px)','100%','100%')};background:${bgSubtle};border-radius:${rLg};padding:${resp('36px','26px','20px')};box-sizing:border-box">
          <div style="display:flex;flex-direction:column;gap:${resp('16px','14px','12px')}">
            ${ac.input ? `
            <div>
              <label style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${txt};display:block;margin-bottom:6px">Your name</label>
              <input type="text" placeholder="Alex Chen" style="width:100%;padding:10px 14px;border:1.5px solid ${border};border-radius:${r};font-family:${ff};font-size:${bodyv.size}px;color:${txt};background:${bg};outline:none;box-sizing:border-box">
            </div>
            <div>
              <label style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${txt};display:block;margin-bottom:6px">Email address</label>
              <input type="email" placeholder="you@company.com" style="width:100%;padding:10px 14px;border:1.5px solid ${border};border-radius:${r};font-family:${ff};font-size:${bodyv.size}px;color:${txt};background:${bg};outline:none;box-sizing:border-box">
            </div>` : ''}
            ${ac.select ? `
            <div>
              <label style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${txt};display:block;margin-bottom:6px">Project type</label>
              <select style="width:100%;padding:10px 14px;border:1.5px solid ${border};border-radius:${r};font-family:${ff};font-size:${bodyv.size}px;color:${txt};background:${bg};outline:none;box-sizing:border-box">
                <option>Select project type…</option>
                <option>UI Design</option>
                <option>Design System</option>
                <option>Branding</option>
                <option>Consultation</option>
              </select>
            </div>` : ''}
            ${ac.input ? `
            <div>
              <label style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${txt};display:block;margin-bottom:6px">Tell me about your project</label>
              <textarea placeholder="I'm building…" rows="3" style="width:100%;padding:10px 14px;border:1.5px solid ${border};border-radius:${r};font-family:${ff};font-size:${bodyv.size}px;color:${txt};background:${bg};outline:none;resize:vertical;box-sizing:border-box;line-height:${bodyv.leading}"></textarea>
            </div>` : ''}
            ${ac.button ? `<a href="#" style="display:flex;align-items:center;justify-content:center;padding:13px 26px;background:${pri};color:${priTxt};border-radius:980px;font-family:${ff};font-size:${bodyv.size}px;font-weight:600;text-decoration:none;white-space:nowrap">Send message →</a>`
            : (!hasForm ? `<a href="#" style="font-family:${ff};font-size:${bodyv.size}px;font-weight:600;color:${priText};text-decoration:none;display:inline-flex;align-items:center;gap:4px">Email me directly →</a>` : '')}
          </div>
        </div>
      </div>
    </section>`;

  // ── COMPONENT GALLERY — tabs, switch, checkbox, slider, skeleton, table ──
  const _gc = (title, body) => `
    <div style="${flexCell(resp('calc(33.33% - 14px)','calc(50% - 8px)','100%'), resp('calc(50% - 8px)','100%','100%'), '100%')};min-width:${resp('220px','200px','0')};border-radius:${rLg};padding:${resp('28px','20px','16px')};background:${bg};box-sizing:border-box">
      <div style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${priText};letter-spacing:0.08em;text-transform:uppercase;margin-bottom:16px">${title}</div>
      ${body}
    </div>`;

  const galleryTabs = !ac.tabs ? '' : _gc('Tabs', `
    <div style="display:flex;border-bottom:2px solid ${border};margin-bottom:12px">
      ${['Overview','Details','Reviews'].map((t,i)=>`<div style="padding:7px 14px;font-family:${ff};font-size:${smv.size}px;font-weight:${i===0?600:400};color:${i===0?pri:txtSub};border-bottom:${i===0?`2px solid ${pri}`:'2px solid transparent'};margin-bottom:-2px;cursor:pointer;white-space:nowrap">${t}</div>`).join('')}
    </div>
    <p style="font-family:${ff};font-size:${smv.size}px;color:${txtSub};line-height:1.5">Tab content area. Each tab reveals different contextual information to the user.</p>`);

  const gallerySwitch = !ac.switch ? '' : _gc('Switch', `
    <div style="display:flex;flex-direction:column;gap:10px">
      ${[['Email notifications',true],['Push alerts',false],['Weekly digest',true],['Marketing',false]].map(([label,on])=>`
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
        <span style="font-family:${ff};font-size:${smv.size}px;color:${txt}">${label}</span>
        <div style="width:34px;height:18px;border-radius:99px;background:${on?pri:border};position:relative;flex-shrink:0">
          <div style="position:absolute;top:2px;left:${on?'18px':'2px'};width:14px;height:14px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.2)"></div>
        </div>
      </div>`).join('')}
    </div>`);

  const galleryCheckbox = !ac.checkbox ? '' : _gc('Checkbox', `
    <div style="display:flex;flex-direction:column;gap:10px">
      ${[['UI Design',true],['Branding',false],['Motion Design',true],['Development',false]].map(([label,checked])=>`
      <div style="display:flex;align-items:center;gap:10px">
        <div style="width:17px;height:17px;border-radius:4px;border:1.5px solid ${checked?pri:border};background:${checked?pri:'transparent'};display:flex;align-items:center;justify-content:center;flex-shrink:0">
          ${checked?`<svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`:''}
        </div>
        <span style="font-family:${ff};font-size:${smv.size}px;color:${txt}">${label}</span>
      </div>`).join('')}
    </div>`);

  const gallerySlider = !ac.slider ? '' : _gc('Slider', `
    <div style="display:flex;flex-direction:column;gap:${resp('16px','14px','12px')}">
      ${[['Budget range','65'],['Timeline','40'],['Complexity','80']].map(([label,val])=>`
      <div>
        <div style="display:flex;justify-content:space-between;margin-bottom:6px">
          <span style="font-family:${ff};font-size:${smv.size}px;color:${txt};font-weight:500">${label}</span>
          <span style="font-family:${ff};font-size:${smv.size}px;color:${txtMuted}">${val}%</span>
        </div>
        <div style="height:5px;background:${border};border-radius:99px;position:relative">
          <div style="height:100%;width:${val}%;background:${pri};border-radius:99px"></div>
          <div style="position:absolute;top:50%;left:${val}%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;background:#fff;border:2px solid ${pri};box-shadow:${sh}"></div>
        </div>
      </div>`).join('')}
    </div>`);

  const gallerySkeleton = !ac.skeleton ? '' : _gc('Skeleton', `
    <div style="display:flex;flex-direction:column;gap:12px">
      <div style="display:flex;gap:10px;align-items:center">
        <div style="width:40px;height:40px;border-radius:50%;background:${border};flex-shrink:0"></div>
        <div style="flex:1;display:flex;flex-direction:column;gap:6px">
          <div style="height:12px;border-radius:4px;background:${border};width:60%"></div>
          <div style="height:10px;border-radius:4px;background:${border};width:40%"></div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px">
        <div style="height:10px;border-radius:4px;background:${border};width:100%"></div>
        <div style="height:10px;border-radius:4px;background:${border};width:85%"></div>
        <div style="height:10px;border-radius:4px;background:${border};width:65%"></div>
      </div>
      <div style="height:80px;border-radius:${r};background:${border}"></div>
    </div>`);

  const galleryTable = !ac.table ? '' : _gc('Table', `
    <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-family:${ff};font-size:${smv.size}px">
        <thead><tr style="border-bottom:1px solid ${border}">
          ${['Project','Status','Budget'].map(h=>`<th style="padding:7px 10px;text-align:left;font-weight:600;color:${txtSub};white-space:nowrap">${h}</th>`).join('')}
        </tr></thead>
        <tbody>
          ${[['Orbit DS','Active','$12k'],['Flow App','Review','$8k'],['Bloom','Done','$15k']].map(([p,s,b],i)=>{
            const sc = s==='Active'?pri : s==='Review'?'#f59e0b' : '#22c55e';
            const sb = s==='Active'?priXLight : s==='Review'?'#fffbeb' : '#f0fdf4';
            return `<tr style="border-bottom:1px solid ${border};background:${i%2===1?bgSubtle:'transparent'}">
              <td style="padding:7px 10px;color:${txt};font-weight:500">${p}</td>
              <td style="padding:7px 10px"><span style="padding:1px 8px;background:${sb};color:${sc};border-radius:9999px;font-size:${smv.size-1}px;font-weight:600">${s}</span></td>
              <td style="padding:7px 10px;color:${txtSub}">${b}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`);

  const galleryItems = [galleryTabs,gallerySwitch,galleryCheckbox,gallerySlider,gallerySkeleton,galleryTable].filter(Boolean);
  const gallery = galleryItems.length === 0 ? '' : `
    <section style="padding:${secPad};background:${bgSubtle}">
      <div style="text-align:center;margin-bottom:${gapSection}">
        <span style="font-family:${ff};font-size:${smv.size}px;font-weight:600;color:${priText};letter-spacing:0.08em;text-transform:uppercase;display:block;margin-bottom:6px">Component Library</span>
        <h2 style="font-family:${ff};font-size:${colH2}px;font-weight:${h2v.weight};line-height:1.1;color:${txt};letter-spacing:-0.03em">UI Components</h2>
        <p style="font-family:${ff};font-size:${bodyv.size}px;line-height:${bodyv.leading};color:${txtSub};max-width:480px;margin:12px auto 0">Every component below is styled with your active design tokens — colors, typography, spacing and radius.</p>
      </div>
      <div style="${flexRow(resp('20px','16px','12px'))}">${galleryItems.join('')}</div>
    </section>`;

  // ── FOOTER (always) ──
  const footer = `
    <footer style="padding:${resp('32px 48px','24px 28px','20px 20px')};border-top:1px solid ${borderSub};background:${bg};display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center">
      <span style="font-family:${ff};font-size:${smv.size}px;font-weight:700;color:${txt};letter-spacing:-0.02em">Alex Studio © 2026</span>
      ${!isMobile ? `<div style="display:flex;gap:${resp('28px','20px','16px')}">
        ${['Twitter','Dribbble','LinkedIn','GitHub'].map(l=>`<a href="#" style="font-family:${ff};font-size:${smv.size}px;font-weight:500;color:${txtMuted};text-decoration:none">${l}</a>`).join('')}
      </div>` : ''}
      <span style="font-family:${ff};font-size:${smv.size}px;font-weight:400;color:${txtMuted}">Built with your tokens ✦</span>
    </footer>`;


  const deviceClass = state.previewDevice === 'desktop' ? '' : `device-${state.previewDevice}`;
  el.innerHTML = `<div class="preview-page ${deviceClass}">${alertBanner}${nav}${hero}${work}${about}${process}${testimonial}${contact}${gallery}${footer}</div>`;
}

/* ══════════════════════════════════════════════════════
   BEGINNER FEATURES — Templates, Welcome, Checklist,
   A11y panel, Component inspector
══════════════════════════════════════════════════════ */

/* ---- 1. DESIGN SYSTEM TEMPLATES ---------------------- */
const RADII_ROUNDED = [
  { label:'none', value:'0' }, { label:'sm', value:'4' }, { label:'md', value:'8' },
  { label:'lg', value:'12' }, { label:'xl', value:'16' }, { label:'full', value:'9999' },
];
const RADII_SHARP = [
  { label:'none', value:'0' }, { label:'xs', value:'2' }, { label:'sm', value:'4' },
  { label:'md', value:'6' }, { label:'lg', value:'8' }, { label:'full', value:'9999' },
];
const RADII_SOFT = [
  { label:'sm', value:'8' }, { label:'md', value:'14' }, { label:'lg', value:'20' },
  { label:'xl', value:'28' }, { label:'full', value:'9999' },
];

const TEMPLATES = {
  webapp: {
    name: 'Web App',
    tagline: 'SaaS dashboards & tools',
    glyph: '▦',
    accent: '#6366f1',
    fonts: [
      { name:'Inter', category:'Sans-serif', weights:[400,500,600,700],
        variants:[{role:'Body',size:16,leading:1.5},{role:'Heading',size:30,leading:1.2}] },
    ],
    palettes: [
      { name:'Primary', baseHex:'#6366f1' },
      { name:'Neutral', baseHex:'#64748b' },
      { name:'Success', baseHex:'#22c55e' },
      { name:'Warning', baseHex:'#f59e0b' },
      { name:'Error',   baseHex:'#ef4444' },
    ],
    semantics: [
      { name:'color.primary',  value:'#6366f1', reference:'Primary / 500' },
      { name:'color.success',  value:'#22c55e', reference:'Success / 500' },
      { name:'color.danger',   value:'#ef4444', reference:'Error / 500' },
    ],
    spacing: 4,
    shadow: 'md',
    radii: RADII_ROUNDED,
    components: ['button','input','card','badge','alert'],
  },
  marketing: {
    name: 'Marketing Site',
    tagline: 'Landing pages & brand',
    glyph: '✦',
    accent: '#db2777',
    fonts: [
      { name:'Playfair Display', category:'Serif', weights:[400,600,700,800],
        variants:[{role:'Display',size:48,leading:1.1}] },
      { name:'DM Sans', category:'Sans-serif', weights:[400,500,700],
        variants:[{role:'Body',size:17,leading:1.6}] },
    ],
    palettes: [
      { name:'Brand',   baseHex:'#db2777' },
      { name:'Accent',  baseHex:'#8b5cf6' },
      { name:'Neutral', baseHex:'#6b7280' },
    ],
    semantics: [
      { name:'color.brand', value:'#db2777', reference:'Brand / 500' },
      { name:'color.accent', value:'#8b5cf6', reference:'Accent / 500' },
    ],
    spacing: 8,
    shadow: 'lg',
    radii: RADII_SOFT,
    components: ['button','card','badge'],
  },
  mobile: {
    name: 'Mobile App',
    tagline: 'iOS / Android UI',
    glyph: '▢',
    accent: '#0ea5e9',
    fonts: [
      { name:'Manrope', category:'Sans-serif', weights:[400,500,600,700,800],
        variants:[{role:'Body',size:15,leading:1.45},{role:'Title',size:22,leading:1.25}] },
    ],
    palettes: [
      { name:'Primary', baseHex:'#0ea5e9' },
      { name:'Neutral', baseHex:'#71717a' },
      { name:'Success', baseHex:'#10b981' },
      { name:'Error',   baseHex:'#f43f5e' },
    ],
    semantics: [
      { name:'color.primary', value:'#0ea5e9', reference:'Primary / 500' },
    ],
    spacing: 4,
    shadow: 'sm',
    radii: RADII_SOFT,
    components: ['button','input','switch','card'],
  },
  minimal: {
    name: 'Minimal',
    tagline: 'Bare essentials only',
    glyph: '—',
    accent: '#374151',
    fonts: [
      { name:'Inter', category:'Sans-serif', weights:[400,500,600,700],
        variants:[{role:'Body',size:16,leading:1.5}] },
    ],
    palettes: [
      { name:'Neutral', baseHex:'#374151' },
    ],
    semantics: [],
    spacing: 8,
    shadow: 'sm',
    radii: RADII_SHARP,
    components: ['button'],
  },
};

/* Build a full font object identical to what addFont() produces. */
function _tplMakeFont(def) {
  const weights = def.weights || [400,500,700];
  return {
    id: uid(), name: def.name, category: def.category, source: 'google',
    weights, activeWeights: weights.slice(0, Math.min(5, weights.length)),
    sampleText: 'The quick brown fox jumps over the lazy dog.',
    previewSize: 16, leading: 1.5, kerning: 0, classification: null,
    fallbackFonts: [], fontDisplay: 'swap', scaleKey: null, activeScaleStops: [],
    variants: (def.variants || []).map(v => newVariant(v)), notes: '',
  };
}

/* Build a full palette object identical to what addPaletteSimple() produces. */
function _tplMakePalette(def) {
  return {
    id: uid(), name: def.name, baseHex: def.baseHex,
    shadeCount: 10, colors: generateColorScale(def.baseHex, 10),
    notes: '',
  };
}

function applyTemplate(key) {
  const tpl = TEMPLATES[key];
  if (!tpl) return;
  pushHistory();

  tpl.fonts.forEach(f => {
    if (state.fonts.some(x => x.name === f.name)) return;
    if (typeof loadGoogleFont === 'function') loadGoogleFont(f.name, f.weights);
    state.fonts.push(_tplMakeFont(f));
  });
  tpl.palettes.forEach(p => state.palettes.push(_tplMakePalette(p)));
  (tpl.semantics || []).forEach(s =>
    state.semantics.push({ id: uid(), name: s.name, category: 'color', value: s.value, reference: s.reference || '', description: '' }));
  if (tpl.spacing) state.spacings.push({ id: uid(), name: 'Spacing', baseUnit: tpl.spacing, notes: '' });
  if (tpl.shadow)  state.shadows.push({ id: uid(), name: 'Shadow', preset: tpl.shadow, layers: JSON.parse(JSON.stringify(SHADOW_PRESETS[tpl.shadow] || SHADOW_PRESETS.md)), notes: '' });
  if (tpl.radii)   state.radii.push({ id: uid(), name: 'Radius', stops: JSON.parse(JSON.stringify(tpl.radii)) });
  (tpl.components || []).forEach(c => { if (c in state.activeComponents) state.activeComponents[c] = true; });

  if (state.fonts.length) { state.selectedId = state.fonts[0].id; state.selectedType = 'font'; }
  renderAll();
  scheduleAutosave && scheduleAutosave();
  toast(`Applied "${tpl.name}" template`);
}

function _templateCardsHtml() {
  return Object.entries(TEMPLATES).map(([key, t]) => `
    <button class="template-card" data-template="${key}">
      <span class="template-card-glyph" style="color:${t.accent}">${t.glyph}</span>
      <span class="template-card-name">${escHtml(t.name)}</span>
      <span class="template-card-tag">${escHtml(t.tagline)}</span>
      <span class="template-card-swatches">
        ${t.palettes.slice(0,5).map(p => `<i style="background:${p.baseHex}"></i>`).join('')}
      </span>
    </button>`).join('');
}

function renderTemplatePicker() {
  const host = document.getElementById('template-picker');
  if (host) host.innerHTML = _templateCardsHtml();
}

function openTemplatesModal() {
  const grid = document.getElementById('templates-modal-grid');
  if (grid) grid.innerHTML = _templateCardsHtml();
  document.getElementById('templates-modal')?.classList.remove('hidden');
}

function closeTemplatesModal() {
  document.getElementById('templates-modal')?.classList.add('hidden');
}

/* ---- 2. WELCOME / FIRST-RUN ONBOARDING --------------- */
const WELCOME_FLAG = 'designr_welcomed';
function openWelcome()  {
  const cb = document.getElementById('welcome-dontshow');
  if (cb) { let f = false; try { f = localStorage.getItem(WELCOME_FLAG) === '1'; } catch (e) {} cb.checked = f; }
  document.getElementById('welcome-modal')?.classList.remove('hidden');
}
/* Single close path — X, backdrop, Esc, and CTA all honor the checkbox. */
function closeWelcome() {
  if (document.getElementById('welcome-dontshow')?.checked) {
    try { localStorage.setItem(WELCOME_FLAG, '1'); } catch (e) {}
  }
  document.getElementById('welcome-modal')?.classList.add('hidden');
}
function maybeShowWelcome() {
  let seen = false;
  try { seen = localStorage.getItem(WELCOME_FLAG) === '1'; } catch (e) {}
  if (!seen) openWelcome();
}

/* ---- 3. SYSTEM COMPLETENESS CHECKLIST ---------------- */
function computeCompleteness() {
  const fontsWithVariants = state.fonts.some(f => (f.variants || []).length > 0);
  const items = [
    { id:'palette',   label:'Color palette',        done: state.palettes.length > 0,   action:'palette'  },
    { id:'semantic',  label:'Semantic color roles', done: state.semantics.length > 0,  action:'semantic' },
    { id:'font',      label:'Typography',           done: state.fonts.length > 0,      action:'font'     },
    { id:'typescale', label:'Type styles / scale',  done: fontsWithVariants,           action:'typescale'},
    { id:'spacing',   label:'Spacing scale',        done: state.spacings.length > 0,   action:'spacing'  },
    { id:'radius',    label:'Border radius',        done: state.radii.length > 0,      action:'radius'   },
    { id:'shadow',    label:'Shadow / elevation',   done: state.shadows.length > 0,    action:'shadow'   },
    { id:'component', label:'A live component',      done: Object.values(state.activeComponents).some(Boolean), action:'component' },
  ];
  const done = items.filter(i => i.done).length;
  return { items, done, total: items.length };
}

function completenessAction(action) {
  switch (action) {
    case 'palette':   openPaletteModal(); break;
    case 'font':      openModal(); break;
    case 'spacing':   addSpacing('Spacing', 4); break;
    case 'radius':    addScaleAtom('radii', 'Radius', JSON.parse(JSON.stringify(RADII_ROUNDED))); break;
    case 'shadow':    addShadow('Shadow', 'md'); break;
    case 'semantic':
      if (!state.palettes.length) { toast('Add a color palette first'); openPaletteModal(); break; }
      { const p = state.palettes[0]; const mid = p.colors[Math.floor(p.colors.length/2)];
        addSemanticToken('color.primary', 'color', mid ? mid.hex : p.baseHex, `${p.name} / ${mid ? mid.stop : '500'}`, ''); }
      break;
    case 'typescale':
      if (!state.fonts.length) { toast('Add a typeface first'); openModal(); break; }
      toast('Open a font and add type styles in its properties panel');
      break;
    case 'component':
      state.canvasMode = 'preview';
      if (typeof _applyCanvasMode === 'function') _applyCanvasMode();
      toast('Enable components from the Preview controls');
      break;
  }
}

/* ---- 5. COMPONENT INSPECTOR (Preview) ----------------
   Reuses the existing COMPONENT_TOKEN_MAP (defined later for the
   Token Map feature); {palette} is filled with the first palette name. */
function _inspectorTokens(name) {
  const rows = COMPONENT_TOKEN_MAP[name];
  if (!rows) return null;
  const pal = state.palettes[0]?.name?.toLowerCase().replace(/\s+/g,'-') || 'primary';
  return rows.map(([role, tok]) => [role, tok.replace(/\{palette\}/g, pal)]);
}
let _inspectorOn = false;
function toggleInspector() {
  _inspectorOn = !_inspectorOn;
  const btn = document.getElementById('inspector-toggle-btn');
  if (btn) btn.classList.toggle('active', _inspectorOn);
  renderInspectorLegend();
}
function renderInspectorLegend() {
  const host = document.getElementById('inspector-legend');
  if (!host) return;
  if (!_inspectorOn || state.canvasMode !== 'preview') { host.classList.add('hidden'); host.innerHTML = ''; return; }
  const active = Object.entries(state.activeComponents).filter(([,v]) => v).map(([k]) => k);
  const list = active.length ? active : Object.keys(COMPONENT_TOKEN_MAP).slice(0,4);
  host.classList.remove('hidden');
  host.innerHTML = `
    <div class="inspector-legend-head">Token Inspector
      <button id="inspector-close" class="inspector-close" aria-label="Close">✕</button>
    </div>
    ${list.map(name => {
      const rows = _inspectorTokens(name);
      if (!rows) return '';
      return `<div class="inspector-comp">
        <div class="inspector-comp-name">${escHtml(name)}</div>
        ${rows.map(([prop, tok]) => `<div class="inspector-row"><span>${escHtml(prop)}</span><code>${escHtml(tok)}</code></div>`).join('')}
      </div>`;
    }).join('')}`;
  document.getElementById('inspector-close')?.addEventListener('click', toggleInspector);
}

function renderAll() {
  renderCanvas();
  renderColorCanvas();
  renderSpacingCanvas();
  renderShadowCanvas();
  _syncTokenItems();
  _syncPreviewToggles();
  renderNewAtoms();
  renderTypeSpecimen();
  renderSemanticTokens();
  renderComponentPreview();
  renderFontPairings();
  renderColorPairings();
  renderProperties();
  renderHealthCanvas();
  if (state.canvasMode === 'preview') renderPreviewCanvas();
  renderInspectorLegend();
}

/* ══════════════════════════════════════════════════════
   EVENT WIRING
══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* Inject toast root */
  const toastRoot = document.createElement('div');
  toastRoot.id = 'toast-root';
  document.body.appendChild(toastRoot);

  /* Electron setup */
  if (IS_ELECTRON) {
    document.body.classList.add('is-electron');

    window.electronAPI.onMenuUndo(   ()  => undo());
    window.electronAPI.onMenuExport( ()  => openExportTokensModal());
    window.electronAPI.onMenuNew(    ()  => newProject());
    window.electronAPI.onMenuOpen(   ()  => openProject());
    window.electronAPI.onMenuSave(   ()  => saveProject(false));
    window.electronAPI.onMenuSaveAs( ()  => saveProject(true));
  }

  /* Save / Open topbar buttons */
  document.getElementById('open-project-btn').addEventListener('click', openProject);
  document.getElementById('save-project-btn').addEventListener('click', () => saveProject(false));

  /* Recent projects dropdown */
  (function() {
    const btn  = document.getElementById('recents-btn');
    const menu = document.getElementById('recents-menu');
    if (!btn || !menu) return;
    function render() {
      const recents = getRecentFiles();
      if (!recents.length) {
        menu.innerHTML = `<div class="recents-empty">No recent projects</div>`;
        return;
      }
      menu.innerHTML = recents.map(r => {
        const fname = r.path.split('/').pop();
        return `<button class="recents-item" data-path="${escHtml(r.path)}" title="${escHtml(r.path)}">
          <span class="recents-item-name">${escHtml(r.name)}</span>
          <span class="recents-item-file">${escHtml(fname)}</span>
        </button>`;
      }).join('') + `<button class="recents-item recents-clear">Clear recents</button>`;
    }
    btn.addEventListener('click', e => {
      e.stopPropagation();
      render();
      menu.classList.toggle('hidden');
    });
    menu.addEventListener('click', e => {
      const clear = e.target.closest('.recents-clear');
      if (clear) { try { localStorage.removeItem(LS_RECENTS); } catch (x) {} menu.classList.add('hidden'); return; }
      const item = e.target.closest('.recents-item');
      if (item && item.dataset.path) { menu.classList.add('hidden'); openRecentProject(item.dataset.path); }
    });
    document.addEventListener('click', () => menu.classList.add('hidden'));
  })();

  /* ── Atoms show more / less ── */
  (function() {
    const btn     = document.getElementById('atoms-show-more-btn');
    const extra   = document.getElementById('atoms-extra');
    const label   = document.getElementById('atoms-show-more-label');
    const chevron = document.getElementById('atoms-show-more-chevron');
    let expanded  = false;
    btn.addEventListener('click', () => {
      expanded = !expanded;
      extra.style.display   = expanded ? '' : 'none';
      label.textContent     = expanded ? 'Show less' : 'Show more';
      chevron.style.transform = expanded ? 'rotate(180deg)' : '';
    });
  })();

  /* ── New atom type buttons ── */
  // Generic scale atoms
  Object.keys(SCALE_TYPE_META).forEach(type => {
    const openId = `open-${type}-btn`;
    const inlineId = `add-${type}-inline-btn`;
    document.getElementById(openId)?.addEventListener('click', () => openScaleModal(type));
    document.getElementById(inlineId)?.addEventListener('click', () => openScaleModal(type));
  });

  // Scale modal
  document.getElementById('scale-modal-close-btn').addEventListener('click', closeScaleModal);
  document.getElementById('scale-modal-backdrop').addEventListener('click', closeScaleModal);
  document.getElementById('scale-modal-confirm').addEventListener('click', () => {
    const name  = document.getElementById('scale-modal-name').value.trim() || 'Untitled';
    const stops = JSON.parse(JSON.stringify(SCALE_PRESETS[_scaleModalType]?.[_scaleModalPresetKey] || []));
    if (!stops.length) { toast('Pick a preset first'); return; }
    closeScaleModal();
    addScaleAtom(_scaleModalType, name, stops);
  });

  // Motion
  document.getElementById('open-motions-btn').addEventListener('click', openMotionModal);
  document.getElementById('add-motions-inline-btn').addEventListener('click', openMotionModal);
  document.getElementById('motion-modal-close-btn').addEventListener('click', closeMotionModal);
  document.getElementById('motion-modal-backdrop').addEventListener('click', closeMotionModal);
  document.getElementById('motion-modal-confirm').addEventListener('click', () => {
    const name = document.getElementById('motion-modal-name').value.trim() || 'Untitled';
    closeMotionModal();
    addMotion(name, _motionPresetKey);
  });

  // Grid
  document.getElementById('open-grids-btn').addEventListener('click', openGridModal);
  document.getElementById('add-grids-inline-btn').addEventListener('click', openGridModal);
  document.getElementById('grid-modal-close-btn').addEventListener('click', closeGridModal);
  document.getElementById('grid-modal-backdrop').addEventListener('click', closeGridModal);
  document.getElementById('grid-modal-confirm').addEventListener('click', () => {
    const name = document.getElementById('grid-modal-name').value.trim() || 'Untitled';
    const data = {
      columns:  parseInt(document.getElementById('grid-modal-columns').value)  || 12,
      gutter:   parseInt(document.getElementById('grid-modal-gutter').value)   || 16,
      maxWidth: parseInt(document.getElementById('grid-modal-maxwidth').value) || 1280,
      margin:   parseInt(document.getElementById('grid-modal-margin').value)   || 24,
    };
    closeGridModal();
    addGrid(name, data);
  });

  // Grid modal steppers
  [['grid-col-dec','grid-modal-columns',-1,1,24],['grid-col-inc','grid-modal-columns',1,1,24],
   ['grid-gutter-dec','grid-modal-gutter',-1,0,64],['grid-gutter-inc','grid-modal-gutter',1,0,64],
   ['grid-maxw-dec','grid-modal-maxwidth',-80,320,3840],['grid-maxw-inc','grid-modal-maxwidth',80,320,3840],
   ['grid-margin-dec','grid-modal-margin',-4,0,128],['grid-margin-inc','grid-modal-margin',4,0,128],
  ].forEach(([btnId, inputId, step, min, max]) => {
    document.getElementById(btnId)?.addEventListener('click', () => {
      const el = document.getElementById(inputId);
      el.value = Math.max(min, Math.min(max, parseInt(el.value) + step));
    });
  });

  /* ── Gradient modal ── */
  document.getElementById('open-gradients-btn').addEventListener('click', openGradientModal);
  document.getElementById('add-gradients-inline-btn').addEventListener('click', openGradientModal);
  document.getElementById('gradient-modal-close-btn').addEventListener('click', closeGradientModal);
  document.getElementById('gradient-modal-backdrop').addEventListener('click', closeGradientModal);

  (function() {
    let _gtype = 'linear';

    function getStopsFromDOM() {
      const rows = document.querySelectorAll('.gradient-stop-row');
      const n    = rows.length;
      return [...rows].map((row, i) => ({
        color:    row.querySelector('.gradient-stop-hex').value,
        position: Math.round((i / Math.max(n - 1, 1)) * 100),
      }));
    }

    function buildCss() {
      const stops = getStopsFromDOM().map(s => `${s.color} ${s.position}%`).join(', ');
      const dir   = document.getElementById('gradient-modal-direction').value;
      if (_gtype === 'radial') return `radial-gradient(circle, ${stops})`;
      if (_gtype === 'conic')  return `conic-gradient(${stops})`;
      return `linear-gradient(${dir}, ${stops})`;
    }

    function updatePreview() {
      document.getElementById('gradient-preview').style.background = buildCss();
    }

    // Sync color picker ↔ hex input within a stop row
    document.getElementById('gradient-stops-list').addEventListener('input', e => {
      const row = e.target.closest('.gradient-stop-row');
      if (!row) return;
      if (e.target.classList.contains('gradient-stop-color'))
        row.querySelector('.gradient-stop-hex').value = e.target.value;
      else if (e.target.classList.contains('gradient-stop-hex') && isValidHex(e.target.value))
        row.querySelector('.gradient-stop-color').value = e.target.value;
      updatePreview();
    });

    document.getElementById('gradient-modal-direction').addEventListener('change', updatePreview);

    // Type toggle
    document.querySelectorAll('[data-gtype]').forEach(btn => {
      btn.addEventListener('click', () => {
        _gtype = btn.dataset.gtype;
        document.querySelectorAll('[data-gtype]').forEach(b => b.classList.toggle('active', b === btn));
        document.getElementById('gradient-direction-row').style.display = _gtype === 'linear' ? '' : 'none';
        updatePreview();
      });
    });

    // Add stop
    document.getElementById('gradient-add-stop-btn').addEventListener('click', () => {
      const list = document.getElementById('gradient-stops-list');
      const idx  = list.querySelectorAll('.gradient-stop-row').length;
      const row  = document.createElement('div');
      row.className = 'gradient-stop-row';
      row.dataset.stopIdx = idx;
      row.innerHTML = `
        <input type="color" class="gradient-stop-color" value="#ffffff" style="width:32px;height:28px;border:none;border-radius:5px;cursor:pointer;padding:2px;flex-shrink:0">
        <input type="text" class="prop-input gradient-stop-hex" value="#ffffff" maxlength="7" style="flex:1">
        <button class="gradient-stop-remove" title="Remove stop" style="width:22px;height:22px;display:flex;align-items:center;justify-content:center;background:none;border:none;color:var(--text-3);cursor:pointer;border-radius:4px;flex-shrink:0">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>`;
      list.appendChild(row);
      // Recalculate positions display
      const rows = list.querySelectorAll('.gradient-stop-row');
      rows.forEach((r, i) => {
        const pct = r.querySelector('.gradient-stop-pct');
        if (pct) pct.textContent = Math.round((i / Math.max(rows.length - 1, 1)) * 100) + '%';
      });
      updatePreview();
    });

    document.getElementById('gradient-stops-list').addEventListener('click', e => {
      const removeBtn = e.target.closest('.gradient-stop-remove');
      if (removeBtn) {
        const list = document.getElementById('gradient-stops-list');
        if (list.querySelectorAll('.gradient-stop-row').length <= 2) return;
        removeBtn.closest('.gradient-stop-row').remove();
        updatePreview();
      }
    });

    document.getElementById('gradient-modal-confirm').addEventListener('click', () => {
      const name  = document.getElementById('gradient-modal-name').value.trim() || 'Untitled';
      const dir   = document.getElementById('gradient-modal-direction').value;
      const stops = getStopsFromDOM();
      pushHistory();
      state.gradients.push({ id: uid(), name, gradientType: _gtype, direction: dir, colorStops: stops });
      renderAll();
      closeGradientModal();
      toast(`Added gradient "${name}"`);
    });
  })();

  /* ── Palette modal: color space toggle + naming suggestion ── */
  let _paletteColorSpace = 'hsl';
  document.querySelectorAll('[data-cs]').forEach(btn => {
    btn.addEventListener('click', () => {
      _paletteColorSpace = btn.dataset.cs;
      document.querySelectorAll('[data-cs]').forEach(b => b.classList.toggle('active', b === btn));
    });
  });

  document.getElementById('cp-swatch')?.addEventListener('click', () => {
    // After picking color, update naming suggestion
    setTimeout(() => {
      const hex  = document.getElementById('cp-hex')?.value || '#7c3aed';
      const name = document.getElementById('palette-name-input').value.trim();
      const sug  = document.getElementById('palette-name-suggestion');
      if (sug && isValidHex(hex)) {
        const suggested = getHueName(hex);
        sug.textContent = `Suggested: ${suggested}`;
        sug.classList.remove('hidden');
        sug.onclick = () => {
          document.getElementById('palette-name-input').value = suggested;
          sug.classList.add('hidden');
        };
      }
    }, 200);
  });

  /* ── Global swatch copy — any element with data-copy-hex ── */
  document.addEventListener('click', e => {
    const swatch = e.target.closest('[data-copy-hex]');
    if (!swatch) return;
    if (e.target.closest('button, input, select, a')) return;
    e.stopPropagation();
    const hex = swatch.dataset.copyHex;
    if (hex) navigator.clipboard.writeText(hex).then(() => toast(`Copied ${hex}`));
  }, true);

  /* ── Semantic Token modal ── */
  document.querySelectorAll('.token-item[data-token-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.tokenCat;
      openTokenModal(cat);
    });
  });
  document.getElementById('add-token-inline-btn').addEventListener('click', openTokenModal);
  document.getElementById('token-modal-close-btn').addEventListener('click', closeTokenModal);
  document.getElementById('token-modal-backdrop').addEventListener('click', closeTokenModal);

  // Auto-suggest token name when value changes
  document.getElementById('token-value-select').addEventListener('change', () => {
    const nameInput = document.getElementById('token-name-input');
    if (nameInput.value.trim()) return; // don't overwrite if user already typed
    const sel      = document.getElementById('token-value-select');
    const ref      = sel.selectedOptions[0]?.dataset.ref || '';
    const category = document.getElementById('token-category-select').value;
    if (!ref) return;
    // Build suggestion: "color.brand.500" from "Brand / 500"
    const parts = ref.split(/\s*\/\s*/);
    const slug1 = slugify(parts[0] || '');
    const slug2 = parts[1] ? slugify(parts[1]) : '';
    const suggestion = [category, slug1, slug2].filter(Boolean).join('.');
    nameInput.value = suggestion;
    nameInput.placeholder = suggestion;
  });

  document.getElementById('confirm-add-token-btn').addEventListener('click', () => {
    const name     = document.getElementById('token-name-input').value.trim();
    const category = document.getElementById('token-category-select').value;
    const sel      = document.getElementById('token-value-select');
    const value    = sel.value;
    const ref      = sel.selectedOptions[0]?.dataset.ref || value;
    const desc     = document.getElementById('token-desc-input').value.trim();
    if (!name) { toast('Enter a token name'); return; }
    if (!value) { toast('Select a value'); return; }
    closeTokenModal();
    addSemanticToken(name, category, value, ref, desc);
  });

  /* ── Type Specimen export (print to PDF) ── */
  document.getElementById('export-specimen-btn')?.addEventListener('click', () => {
    document.body.classList.add('printing-specimen');
    window.print();
    setTimeout(() => document.body.classList.remove('printing-specimen'), 1000);
  });

  /* ── Type Specimen toggle ── */
  document.getElementById('toggle-specimen-btn').addEventListener('click', () => {
    state.showSpecimen = !state.showSpecimen;
    document.getElementById('toggle-specimen-btn').classList.toggle('active', state.showSpecimen);
    document.getElementById('specimen-toggle-dot').classList.toggle('on', state.showSpecimen);
    renderTypeSpecimen();
  });

  /* ── Pairings toggles ── */
  document.getElementById('toggle-pairings-btn').addEventListener('click', () => {
    state.showPairings = !state.showPairings;
    document.getElementById('toggle-pairings-btn').classList.toggle('active', state.showPairings);
    document.getElementById('pairings-toggle-dot').classList.toggle('on', state.showPairings);
    renderFontPairings();
  });

  document.getElementById('toggle-color-pairings-btn').addEventListener('click', () => {
    state.showColorPairings = !state.showColorPairings;
    document.getElementById('toggle-color-pairings-btn').classList.toggle('active', state.showColorPairings);
    document.getElementById('color-pairings-toggle-dot').classList.toggle('on', state.showColorPairings);
    renderColorPairings();
  });

  /* ── Individual component toggles ── */
  Object.keys(state.activeComponents).forEach(comp => {
    const btn = document.getElementById(`toggle-comp-${comp}`);
    if (!btn) return;
    btn.addEventListener('click', () => {
      state.activeComponents[comp] = !state.activeComponents[comp];
      const on = state.activeComponents[comp];
      btn.classList.toggle('active', on);
      document.getElementById(`comp-toggle-${comp}`)?.classList.toggle('on', on);
      renderAll();
    });
  });

  /* ── Export Tokens modal ── */
  document.getElementById('export-tokens-close-btn').addEventListener('click', closeExportTokensModal);
  document.getElementById('export-tokens-backdrop').addEventListener('click', closeExportTokensModal);

  document.querySelectorAll('.export-format-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.export-format-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      _exportFormat = tab.dataset.format;
      _refreshExportPreview();
    });
  });

  document.getElementById('export-copy-btn').addEventListener('click', () => {
    const code = document.getElementById('export-code-content').textContent;
    navigator.clipboard.writeText(code).then(() => toast('Copied to clipboard'));
  });

  document.getElementById('export-download-btn').addEventListener('click', async () => {
    if (_exportFormat === 'svg') {
      closeExportTokensModal();
      await exportSVG();
      return;
    }
    const fmt  = EXPORT_FORMATS[_exportFormat];
    const code = document.getElementById('export-code-content').textContent;
    const name = fmt.filename();
    if (IS_ELECTRON) {
      const ok = await window.electronAPI.saveTextFile(code, name, fmt.ext, fmt.filter);
      if (ok) { toast('File saved'); closeExportTokensModal(); }
    } else {
      const blob = new Blob([code], { type: 'text/plain' });
      const a    = Object.assign(document.createElement('a'), { href: URL.createObjectURL(blob), download: name });
      a.click();
      toast('Downloaded');
      closeExportTokensModal();
    }
  });

  /* Keyboard shortcuts (non-Electron fallback) */
  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey) {
      if (e.key === 's' && !e.shiftKey) { e.preventDefault(); saveProject(false); }
      if (e.key === 's' &&  e.shiftKey) { e.preventDefault(); saveProject(true);  }
      if (e.key === 'o') { e.preventDefault(); openProject(); }
      if (e.key === 'n') { e.preventDefault(); newProject();  }
    }
  });

  /* Undo button + keyboard shortcut */
  document.getElementById('undo-btn').addEventListener('click', undo);
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'z' && !e.shiftKey) {
      e.preventDefault();
      undo();
    }
  });

  /* Open modal buttons */
  document.getElementById('open-font-modal-btn').addEventListener('click', openModal);
  document.getElementById('empty-add-font-btn').addEventListener('click', openModal);
  document.getElementById('add-font-inline-btn').addEventListener('click', openModal);

  /* ---- Beginner features wiring ---- */
  renderTemplatePicker();
  maybeShowWelcome();

  // Template cards (event delegation)
  document.getElementById('template-picker')?.addEventListener('click', (e) => {
    const card = e.target.closest('.template-card');
    if (card) applyTemplate(card.dataset.template);
  });

  // Topbar buttons
  document.getElementById('help-btn')?.addEventListener('click', openWelcome);
  document.getElementById('templates-btn')?.addEventListener('click', openTemplatesModal);
  document.getElementById('inspector-toggle-btn')?.addEventListener('click', toggleInspector);

  // Welcome modal — all close paths route through closeWelcome()
  document.getElementById('welcome-close-btn')?.addEventListener('click', closeWelcome);
  document.getElementById('welcome-backdrop')?.addEventListener('click', closeWelcome);
  document.getElementById('welcome-dontshow')?.addEventListener('change', (e) => {
    if (e.target.checked) { try { localStorage.setItem(WELCOME_FLAG, '1'); } catch (err) {} }
    else { try { localStorage.removeItem(WELCOME_FLAG); } catch (err) {} }
  });
  document.getElementById('welcome-templates-btn')?.addEventListener('click', () => {
    closeWelcome();
    openTemplatesModal();
  });

  // Templates modal
  document.getElementById('templates-modal-close-btn')?.addEventListener('click', closeTemplatesModal);
  document.getElementById('templates-modal-backdrop')?.addEventListener('click', closeTemplatesModal);
  document.getElementById('templates-modal-grid')?.addEventListener('click', (e) => {
    const card = e.target.closest('.template-card');
    if (!card) return;
    applyTemplate(card.dataset.template);
    closeTemplatesModal();
  });

  // Esc closes the new modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeWelcome(); closeTemplatesModal(); }
  });

  /* Close modal */
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', closeModal);

  /* Modal source tabs */
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.addEventListener('click', () => switchModalTab(tab.dataset.tab));
  });

  /* Export */
  document.getElementById('export-btn').addEventListener('click', openExportTokensModal);

  /* System name */
  document.getElementById('system-name').addEventListener('change', e => {});

  /* Font search — works for both tabs */
  document.getElementById('font-search').addEventListener('input', e => {
    if (_modalTab === 'all') {
      state.searchQuery = e.target.value;
      renderAllFontsList();
    } else if (_modalTab === 'google') {
      state.searchQuery = e.target.value;
      renderModalFontList();
    } else {
      _systemFontsQuery = e.target.value;
      renderSystemFontList();
    }
  });

  /* Category filters (Google Fonts tab only) */
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      state.activeCategory = chip.dataset.category;
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderModalFontList();
    });
  });

  /* Font list click — Google Fonts tab (event delegation) */
  document.getElementById('font-list').addEventListener('click', e => {
    const item = e.target.closest('.font-list-item');
    if (!item || item.classList.contains('is-added')) return;
    if (_modalTab === 'google') {
      const idx = parseInt(item.dataset.idx, 10);
      const fontDef = filteredModalFonts[idx];
      if (fontDef) addFont(fontDef);
    } else if (_modalTab === 'all') {
      const idx = parseInt(item.dataset.allidx, 10);
      const list = document.getElementById('font-list');
      const fontDef = list._allFonts?.[idx];
      if (fontDef) addFont(fontDef);
    }
  });

  /* Canvas card clicks (event delegation) */
  document.getElementById('canvas-body').addEventListener('click', e => {
    /* Copy button / menu */
    const copyBtn = e.target.closest('[data-copy-type]');
    if (copyBtn) {
      const menu = document.querySelector(`[data-copy-menu="${copyBtn.dataset.copyId}"]`);
      document.querySelectorAll('.card-copy-menu').forEach(m => { if(m!==menu) m.classList.add('hidden'); });
      menu?.classList.toggle('hidden');
      e.stopPropagation();
      return;
    }
    const fmtBtn = e.target.closest('[data-fmt]');
    if (fmtBtn) {
      const menu = fmtBtn.closest('[data-copy-menu]');
      const btn = document.querySelector(`[data-copy-id="${menu?.dataset.copyMenu}"]`);
      if (btn) { _copyTokenSnippet(btn.dataset.copyType, btn.dataset.copyId, fmtBtn.dataset.fmt); menu.classList.add('hidden'); }
      e.stopPropagation();
      return;
    }
    /* Specimen expand/collapse */
    const specBtn = e.target.closest('[data-spec-key]');
    if (specBtn) {
      e.stopPropagation();
      const key = specBtn.dataset.specKey;
      if (_specimenExpanded.has(key)) _specimenExpanded.delete(key);
      else _specimenExpanded.add(key);
      renderCanvas();
      return;
    }
    /* Font remove */
    const removeFontBtn = e.target.closest('[data-remove-id]');
    if (removeFontBtn) { e.stopPropagation(); removeFont(removeFontBtn.dataset.removeId); return; }
    /* Font card select */
    const fontCard = e.target.closest('.font-card');
    if (fontCard && !e.target.closest('.font-specimen-ramp')) { selectFont(fontCard.dataset.cardId); return; }
    /* Palette fork */
    const forkBtn = e.target.closest('[data-fork-palette-id]');
    if (forkBtn) {
      e.stopPropagation();
      const pid  = forkBtn.dataset.forkPaletteId;
      const orig = state.palettes.find(p => p.id === pid);
      if (!orig) return;
      pushHistory();
      const { h, s, l } = hexToHsl(orig.baseHex);
      const hueShift = 30;
      const newHex   = hslToHex((h + hueShift + 360) % 360, s, l);
      const forked   = JSON.parse(JSON.stringify(orig));
      forked.id      = uid();
      forked.name    = orig.name + ' Fork';
      forked.baseHex = newHex;
      forked.customStops = {};
      forked.colors  = generateColorScaleForPalette(forked);
      state.palettes.push(forked);
      state.selectedId   = forked.id;
      state.selectedType = 'palette';
      renderAll();
      toast(`Forked "${orig.name}" with +30° hue shift`);
      return;
    }

    /* Duplicate buttons */
    const dupFont    = e.target.closest('[data-dup-font-id]');    if (dupFont)    { e.stopPropagation(); duplicateFont(dupFont.dataset.dupFontId); return; }
    const dupPalette = e.target.closest('[data-dup-palette-id]'); if (dupPalette) { e.stopPropagation(); duplicatePalette(dupPalette.dataset.dupPaletteId); return; }
    const dupSpacing = e.target.closest('[data-dup-spacing-id]'); if (dupSpacing) { e.stopPropagation(); duplicateSpacing(dupSpacing.dataset.dupSpacingId); return; }
    const dupShadow  = e.target.closest('[data-dup-shadow-id]');  if (dupShadow)  { e.stopPropagation(); duplicateShadow(dupShadow.dataset.dupShadowId); return; }

    /* Palette remove */
    const removePaletteBtn = e.target.closest('[data-remove-palette-id]');
    if (removePaletteBtn) { e.stopPropagation(); removePalette(removePaletteBtn.dataset.removePaletteId); return; }
    /* Palette card select */
    const paletteCard = e.target.closest('.palette-card');
    if (paletteCard) { selectPalette(paletteCard.dataset.paletteId); return; }
  });

  /* ── Palette modal ── */
  document.getElementById('open-palette-modal-btn').addEventListener('click', openPaletteModal);
  document.getElementById('add-palette-inline-btn').addEventListener('click', openPaletteModal);
  document.getElementById('palette-modal-close-btn').addEventListener('click', closePaletteModal);
  document.getElementById('palette-modal-backdrop').addEventListener('click', closePaletteModal);

  /* Palette modal — Generate / Import tabs */
  document.getElementById('pm-mode-generate')?.addEventListener('click', () => {
    document.getElementById('pm-generate-section').classList.remove('hidden');
    document.getElementById('pm-import-section').classList.add('hidden');
    document.getElementById('pm-mode-generate').classList.add('active');
    document.getElementById('pm-mode-import').classList.remove('active');
  });
  document.getElementById('pm-mode-import')?.addEventListener('click', () => {
    document.getElementById('pm-generate-section').classList.add('hidden');
    document.getElementById('pm-import-section').classList.remove('hidden');
    document.getElementById('pm-mode-import').classList.add('active');
    document.getElementById('pm-mode-generate').classList.remove('active');
  });
  document.getElementById('pm-import-btn')?.addEventListener('click', () => {
    const text = document.getElementById('pm-import-text')?.value || '';
    const n = importPalettesFromText(text);
    if (n > 0) { closePaletteModal(); document.getElementById('pm-import-text').value = ''; }
  });

  /* Palette modal color swatch → open custom picker */
  document.getElementById('cp-swatch').addEventListener('click', () => {
    openColorPicker(_cpHex, hex => cpSyncFromHex(hex));
  });

  document.getElementById('cp-hex').addEventListener('input', e => {
    let v = e.target.value.trim();
    if (!v.startsWith('#')) v = '#' + v;
    if (isValidHex(v)) cpSyncFromHex(v);
    else document.getElementById('cp-swatch').style.background = 'var(--bg-active)';
  });

  ['cp-r','cp-g','cp-b'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      const r = parseInt(document.getElementById('cp-r').value) || 0;
      const g = parseInt(document.getElementById('cp-g').value) || 0;
      const b = parseInt(document.getElementById('cp-b').value) || 0;
      cpSyncFromHex(rgbToHex(r, g, b));
    });
  });

  /* ── Floating color picker (CPF) events ── */
  // Gradient interaction
  document.getElementById('cpf-gradient').addEventListener('mousedown', e => {
    e.preventDefault();
    cpf.pickingGrad = true;
    cpfPickGradient(e);
  });

  // Hue slider interaction
  document.getElementById('cpf-hue-track').addEventListener('mousedown', e => {
    e.preventDefault();
    cpf.pickingHue = true;
    cpfPickHue(e);
  });

  // Global mousemove for gradient/hue dragging + panel dragging
  document.addEventListener('mousemove', e => {
    if (cpf.pickingGrad) { cpfPickGradient(e); return; }
    if (cpf.pickingHue)  { cpfPickHue(e); return; }
    if (cpf.dragging) {
      const panel = document.getElementById('cpf-panel');
      panel.style.left = (e.clientX - cpf.dragOffX) + 'px';
      panel.style.top  = (e.clientY - cpf.dragOffY) + 'px';
    }
  });

  document.addEventListener('mouseup', () => {
    cpf.pickingGrad = false;
    cpf.pickingHue  = false;
    cpf.dragging    = false;
  });

  // Panel drag handle
  document.getElementById('cpf-drag-handle').addEventListener('mousedown', e => {
    cpfAnchorPanel();
    const panel = document.getElementById('cpf-panel');
    const rect  = panel.getBoundingClientRect();
    cpf.dragOffX = e.clientX - rect.left;
    cpf.dragOffY = e.clientY - rect.top;
    cpf.dragging = true;
    e.preventDefault();
  });

  // CPF hex input
  document.getElementById('cpf-hex').addEventListener('input', e => {
    let v = e.target.value.trim();
    if (!v.startsWith('#')) v = '#' + v;
    if (isValidHex(v)) cpfSyncFromHex(v);
  });

  // CPF RGB inputs
  ['cpf-r','cpf-g','cpf-b'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      const r = parseInt(document.getElementById('cpf-r').value) || 0;
      const g = parseInt(document.getElementById('cpf-g').value) || 0;
      const b = parseInt(document.getElementById('cpf-b').value) || 0;
      cpfSyncFromHex(rgbToHex(r, g, b));
    });
  });

  // Accept / Cancel
  document.getElementById('cpf-accept').addEventListener('click', () => {
    const hex = hsvToHex(cpf.h, cpf.s, cpf.v);
    if (cpf.onAccept) cpf.onAccept(hex);
    closeColorPicker();
  });

  document.getElementById('cpf-cancel').addEventListener('click', () => {
    closeColorPicker();
  });

  document.getElementById('confirm-add-palette-btn').addEventListener('click', () => {
    if (!isValidHex(_cpHex)) { toast('Enter a valid hex color first'); return; }
    const name = document.getElementById('palette-name-input').value.trim() || 'Untitled';
    addPalette(name, _cpHex);
  });

  /* ── Spacing ─────────────────────────────────────────── */
  document.getElementById('open-spacing-modal-btn').addEventListener('click', openSpacingModal);
  document.getElementById('add-spacing-inline-btn').addEventListener('click', openSpacingModal);

  document.getElementById('spacing-modal-close-btn').addEventListener('click', closeSpacingModal);
  document.getElementById('spacing-modal-backdrop').addEventListener('click', closeSpacingModal);

  document.getElementById('spacing-base-input').addEventListener('input', e => {
    renderSpacingScalePreview(e.target.value);
  });

  document.getElementById('spacing-base-dec').addEventListener('click', () => {
    const input = document.getElementById('spacing-base-input');
    const val   = Math.max(1, (parseInt(input.value) || 4) - 1);
    input.value = val;
    renderSpacingScalePreview(val);
  });

  document.getElementById('spacing-base-inc').addEventListener('click', () => {
    const input = document.getElementById('spacing-base-input');
    const val   = Math.min(24, (parseInt(input.value) || 4) + 1);
    input.value = val;
    renderSpacingScalePreview(val);
  });

  document.getElementById('confirm-add-spacing-btn').addEventListener('click', () => {
    const name = document.getElementById('spacing-name-input').value.trim() || 'Untitled';
    const base = parseInt(document.getElementById('spacing-base-input').value) || 4;
    closeSpacingModal();
    addSpacing(name, base);
  });

  /* ── Shadows ─────────────────────────────────────────── */
  document.getElementById('open-shadow-modal-btn').addEventListener('click', openShadowModal);
  document.getElementById('add-shadow-inline-btn').addEventListener('click', openShadowModal);

  document.getElementById('shadow-modal-close-btn').addEventListener('click', closeShadowModal);
  document.getElementById('shadow-modal-backdrop').addEventListener('click', closeShadowModal);

  document.querySelectorAll('.shadow-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _activeShadowPreset = btn.dataset.preset;
      document.querySelectorAll('.shadow-preset-btn').forEach(b => b.classList.toggle('active', b === btn));
      document.querySelector('.shadow-custom-btn')?.classList.remove('active');
      updateShadowModalPreview(_activeShadowPreset);
    });
  });

  document.querySelector('.shadow-custom-btn').addEventListener('click', () => {
    _activeShadowPreset = 'custom';
    document.querySelectorAll('.shadow-preset-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.shadow-custom-btn').classList.add('active');
    updateShadowModalPreview('custom');
  });

  document.getElementById('confirm-add-shadow-btn').addEventListener('click', () => {
    const name = document.getElementById('shadow-name-input').value.trim() || 'Untitled';
    closeShadowModal();
    addShadow(name, _activeShadowPreset);
  });

  /* Toolbar group collapse — for Preview/Pairings/Components sub-groups */
  document.querySelectorAll('.toolbar-group-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      if (!body || !body.classList.contains('toolbar-group-body')) return;
      const collapsed = header.classList.toggle('collapsed');
      body.style.display = collapsed ? 'none' : '';
    });
  });

  /* Click outside color picker → cancel & close */
  document.addEventListener('mousedown', e => {
    const panel = document.getElementById('cpf-panel');
    if (panel.classList.contains('hidden')) return;
    // If the click is inside the panel itself, do nothing
    if (panel.contains(e.target)) return;
    // If the click is on the swatch / props swatch that opens the picker, let
    // that handler run first — it will re-open correctly, so just close here.
    closeColorPicker();
  });

  /* Keyboard shortcuts */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closePaletteModal(); closeColorPicker(); closeSpacingModal(); closeShadowModal(); closeExportTokensModal(); closeTokenModal(); closeHistoryModal(); closeScaleModal(); closeMotionModal(); closeGridModal(); closeFallbackModal(); closeGradientModal(); }
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openModal(); }
  });

  /* ── Options group: expand / collapse ── */
  (function() {
    const header = document.getElementById('options-header');
    const body   = document.getElementById('options-body');
    header.addEventListener('click', () => {
      const expanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!expanded));
      body.classList.toggle('hidden', expanded);
    });
  })();

  /* ── Fallback font modal ── */
  document.getElementById('fallback-modal-close-btn').addEventListener('click', closeFallbackModal);
  document.getElementById('fallback-modal-backdrop').addEventListener('click', closeFallbackModal);

  /* ── History modal ── */
  document.getElementById('history-toggle-btn').addEventListener('click', openHistoryModal);
  document.getElementById('history-modal-close-btn').addEventListener('click', closeHistoryModal);
  document.getElementById('history-modal-backdrop').addEventListener('click', closeHistoryModal);

  /* ── Canvas section drag-to-reorder ── */
  (function() {
    const canvasBody = document.getElementById('canvas-body');
    let dragSrc = null;

    // Inject drag handles into every section header — grouped with title
    canvasBody.querySelectorAll('.canvas-section').forEach(section => {
      const header   = section.querySelector('.canvas-section-header');
      const titleEl  = header?.querySelector('.canvas-section-header-left');
      if (!header || !titleEl) return;

      const handle = document.createElement('div');
      handle.className = 'section-drag-handle';
      handle.setAttribute('title', 'Drag to reorder');
      handle.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <circle cx="4" cy="2.5" r="1.2" fill="currentColor"/>
        <circle cx="8" cy="2.5" r="1.2" fill="currentColor"/>
        <circle cx="4" cy="6"   r="1.2" fill="currentColor"/>
        <circle cx="8" cy="6"   r="1.2" fill="currentColor"/>
        <circle cx="4" cy="9.5" r="1.2" fill="currentColor"/>
        <circle cx="8" cy="9.5" r="1.2" fill="currentColor"/>
      </svg>`;

      // Wrap handle + title together so they stay flush
      const group = document.createElement('div');
      group.style.cssText = 'display:flex;align-items:center;gap:4px';
      titleEl.before(group);
      group.appendChild(handle);
      group.appendChild(titleEl);

      // Make the whole section draggable via the handle
      handle.addEventListener('mousedown', () => { section.draggable = true; });
      section.addEventListener('dragend',  () => { section.draggable = false; });
    });

    canvasBody.addEventListener('dragstart', e => {
      const section = e.target.closest('.canvas-section');
      if (!section) return;
      dragSrc = section;
      section.classList.add('is-dragging');
      e.dataTransfer.effectAllowed = 'move';
    });

    canvasBody.addEventListener('dragover', e => {
      e.preventDefault();
      const target = e.target.closest('.canvas-section');
      if (!target || target === dragSrc) return;
      canvasBody.querySelectorAll('.canvas-section').forEach(s => {
        s.classList.remove('drag-over-top', 'drag-over-bottom');
      });
      const rect = target.getBoundingClientRect();
      const mid  = rect.top + rect.height / 2;
      if (e.clientY < mid) target.classList.add('drag-over-top');
      else                  target.classList.add('drag-over-bottom');
    });

    canvasBody.addEventListener('dragleave', e => {
      const target = e.target.closest('.canvas-section');
      if (target) target.classList.remove('drag-over-top', 'drag-over-bottom');
    });

    canvasBody.addEventListener('drop', e => {
      e.preventDefault();
      const target = e.target.closest('.canvas-section');
      if (!target || target === dragSrc) return;
      const rect = target.getBoundingClientRect();
      if (e.clientY < rect.top + rect.height / 2) target.before(dragSrc);
      else                                          target.after(dragSrc);
      target.classList.remove('drag-over-top', 'drag-over-bottom');
    });

    canvasBody.addEventListener('dragend', () => {
      if (dragSrc) { dragSrc.classList.remove('is-dragging'); dragSrc.draggable = false; }
      canvasBody.querySelectorAll('.canvas-section').forEach(s => {
        s.classList.remove('drag-over-top', 'drag-over-bottom', 'is-dragging');
      });
      dragSrc = null;
    });
  })();

  /* ── Canvas background ── */
  (function() {
    const body = document.getElementById('canvas-body');
    const btns = { none: document.getElementById('canvas-bg-none'), dots: document.getElementById('canvas-bg-dots'), grid: document.getElementById('canvas-bg-grid') };
    const saved = localStorage.getItem('designr-canvas-bg') || 'none';

    function setBg(mode) {
      body.classList.remove('canvas-bg-dots', 'canvas-bg-grid');
      if (mode === 'dots') body.classList.add('canvas-bg-dots');
      if (mode === 'grid') body.classList.add('canvas-bg-grid');
      Object.entries(btns).forEach(([k, b]) => b?.classList.toggle('active', k === mode));
      localStorage.setItem('designr-canvas-bg', mode);
    }

    setBg(saved);
    Object.entries(btns).forEach(([mode, btn]) => btn?.addEventListener('click', () => setBg(mode)));

    // Canvas background opacity
    const bgOpacitySlider = document.getElementById('canvas-bg-opacity-val');
    const bgOpacityPct    = document.getElementById('canvas-bg-opacity-pct');
    let canvasBgOpacity   = parseInt(localStorage.getItem('designr-canvas-bg-opacity') ?? '20');

    function applyCanvasBgOpacity(v) {
      canvasBgOpacity = Math.max(0, Math.min(100, Math.round(v)));
      body.style.setProperty('--canvas-bg-opacity', canvasBgOpacity / 100);
      bgOpacitySlider.value    = canvasBgOpacity;
      bgOpacityPct.textContent = canvasBgOpacity + '%';
      localStorage.setItem('designr-canvas-bg-opacity', canvasBgOpacity);
    }

    applyCanvasBgOpacity(canvasBgOpacity);
    bgOpacitySlider?.addEventListener('input', e => applyCanvasBgOpacity(parseInt(e.target.value)));
  })();

  /* ── Card opacity steppers ── */
  (function() {
    const canvasBody = document.getElementById('canvas-body');
    const root = canvasBody; // set CSS vars on canvas-body

    let cardBg     = parseInt(localStorage.getItem('designr-card-bg-opacity') || '100');
    let cardBorder = parseInt(localStorage.getItem('designr-card-border-opacity') || '100');

    const bgSlider     = document.getElementById('card-bg-val');
    const borderSlider = document.getElementById('card-border-val');
    const bgPct        = document.getElementById('card-bg-pct');
    const borderPct    = document.getElementById('card-border-pct');

    function applyCardBg(v) {
      cardBg = Math.max(0, Math.min(100, Math.round(v)));
      root.style.setProperty('--card-bg-opacity', cardBg / 100);
      bgSlider.value    = cardBg;
      bgPct.textContent = cardBg + '%';
      localStorage.setItem('designr-card-bg-opacity', cardBg);
    }
    function applyCardBorder(v) {
      cardBorder = Math.max(12, Math.min(100, Math.round(v)));
      root.style.setProperty('--card-border-opacity', cardBorder / 100);
      borderSlider.value    = cardBorder;
      borderPct.textContent = cardBorder + '%';
      localStorage.setItem('designr-card-border-opacity', cardBorder);
    }

    applyCardBg(cardBg);
    applyCardBorder(cardBorder);

    bgSlider.addEventListener('input',     e => applyCardBg(parseInt(e.target.value)));
    borderSlider.addEventListener('input', e => applyCardBorder(parseInt(e.target.value)));
  })();

  /* ── Canvas column picker ── */
  (function() {
    const canvasBody = document.getElementById('canvas-body');

    function setCols(n) {
      canvasBody.classList.toggle('canvas-2col', n === 2);
      canvasBody.classList.toggle('canvas-3col', n === 3);
      [1, 2, 3].forEach(i => {
        document.getElementById(`canvas-col-${i}`)?.classList.toggle('active', n === i);
      });
      localStorage.setItem('designr-canvas-cols', String(n));
    }

    const saved = parseInt(localStorage.getItem('designr-canvas-cols')) || 1;
    setCols(saved);

    [1, 2, 3].forEach(i => {
      document.getElementById(`canvas-col-${i}`).addEventListener('click', () => setCols(i));
    });
  })();

  /* ── Light / dark mode toggle ── */
  (function() {
    const row   = document.getElementById('theme-toggle');
    const track = document.getElementById('theme-toggle-track');
    const body  = document.body;

    function syncTheme(isLight) {
      track.classList.toggle('on', isLight);
    }

    // Restore saved preference
    const saved = localStorage.getItem('designr-theme') === 'light';
    if (saved) body.classList.add('light-mode');
    syncTheme(saved);

    row.addEventListener('click', () => {
      const isLight = body.classList.toggle('light-mode');
      localStorage.setItem('designr-theme', isLight ? 'light' : 'dark');
      syncTheme(isLight);
    });
  })();

  /* ── Sidebar resize handles ── */
  (function() {
    const root = document.documentElement;

    function getCssInt(varName) {
      return parseInt(getComputedStyle(root).getPropertyValue(varName)) || 0;
    }

    function setupResize({ handleId, cssVar, minW, maxW, direction }) {
      const handle = document.getElementById(handleId);
      if (!handle) return;

      handle.addEventListener('mousedown', e => {
        e.preventDefault();
        const startX = e.clientX;
        const startW = getCssInt(cssVar);
        handle.classList.add('is-dragging');
        document.body.style.cursor    = 'col-resize';
        document.body.style.userSelect = 'none';

        function onMove(e) {
          const dx   = (e.clientX - startX) * direction;
          const newW = Math.max(minW, Math.min(maxW, startW + dx));
          root.style.setProperty(cssVar, newW + 'px');
        }

        function onUp() {
          handle.classList.remove('is-dragging');
          document.body.style.cursor    = '';
          document.body.style.userSelect = '';
          document.removeEventListener('mousemove', onMove);
          document.removeEventListener('mouseup',   onUp);
        }

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup',   onUp);
      });
    }

    setupResize({ handleId: 'toolbar-resize-handle', cssVar: '--toolbar-w', minW: 256, maxW: 380, direction:  1 });
    setupResize({ handleId: 'props-resize-handle',   cssVar: '--props-w',   minW: 280, maxW: 440, direction: -1 });
  })();

  /* ── Notes textarea delegation ── */
  document.getElementById('props-font')?.addEventListener('input', e => {
    const ta = e.target.closest('[data-notes-id]');
    if (!ta) return;
    const id = ta.dataset.notesId, type = ta.dataset.notesType;
    const arr = type==='font'?state.fonts:type==='palette'?state.palettes:type==='spacing'?state.spacings:state.shadows;
    const item = arr?.find(x=>x.id===id);
    if (item) { item.notes=ta.value; _markUnsaved(); }
  });

  // A11y Report
  document.getElementById('a11y-report-btn')?.addEventListener('click', () => {
    renderA11yReport();
    document.getElementById('a11y-report-modal').classList.remove('hidden');
  });
  document.getElementById('a11y-report-close-btn')?.addEventListener('click', () => document.getElementById('a11y-report-modal').classList.add('hidden'));
  document.getElementById('a11y-report-backdrop')?.addEventListener('click', () => document.getElementById('a11y-report-modal').classList.add('hidden'));
  document.getElementById('a11y-csv-btn')?.addEventListener('click', () => {
    if (!state.palettes.length) return;
    const rows = [];
    state.palettes.forEach(p => p.colors.forEach(c => {
      [['#ffffff',contrastRatio(c.hex,'#ffffff')],['#000000',contrastRatio(c.hex,'#000000')]].forEach(([bg,ratio]) => {
        rows.push(`${c.hex},${bg},${ratio.toFixed(2)},${ratio>=4.5?'Pass':'Fail'},${ratio>=7?'Pass':'Fail'}`);
      });
    }));
    const csv = ['Color,Background,Ratio,AA,AAA',...rows].join('\n');
    const blob = new Blob([csv],{type:'text/csv'});
    const a = document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='a11y-report.csv'; a.click();
  });

  // Audit
  document.getElementById('audit-btn')?.addEventListener('click', () => document.getElementById('audit-modal').classList.remove('hidden'));
  document.getElementById('audit-modal-close-btn')?.addEventListener('click', () => document.getElementById('audit-modal').classList.add('hidden'));
  document.getElementById('audit-modal-backdrop')?.addEventListener('click', () => document.getElementById('audit-modal').classList.add('hidden'));
  document.getElementById('audit-analyze-btn')?.addEventListener('click', () => {
    const input = document.getElementById('audit-input')?.value;
    if (!input?.trim()) { toast('Paste some CSS or token data first'); return; }
    const result = auditTokens(input);
    renderAuditResults(result);
  });

  // Component card click → select & show properties
  document.getElementById('components-preview')?.addEventListener('click', e => {
    const card = e.target.closest('[data-comp-key]');
    if (!card) return;
    const key = card.dataset.compKey;
    state.selectedId   = key;
    state.selectedType = 'component';
    renderProperties();
    renderComponentPreview(); // re-render to apply selected highlight
  });

  // Canvas mode toggle (System / Preview)
  document.getElementById('mode-system-btn')?.addEventListener('click', () => {
    state.canvasMode = 'system'; _applyCanvasMode();
  });
  document.getElementById('mode-preview-btn')?.addEventListener('click', () => {
    state.canvasMode = 'preview'; _applyCanvasMode();
  });

  // Preview device picker — re-renders full layout so resp() values update
  ['desktop','tablet','mobile'].forEach(dev => {
    document.getElementById(`device-${dev}`)?.addEventListener('click', () => {
      state.previewDevice = dev;
      ['desktop','tablet','mobile'].forEach(d =>
        document.getElementById(`device-${d}`)?.classList.toggle('active', d === dev));
      renderPreviewCanvas(); // full re-render so responsive JS layout recalculates
    });
  });

  // Preview dark-mode toggle
  document.getElementById('preview-theme-btn')?.addEventListener('click', () => {
    state.previewTheme = state.previewTheme === 'dark' ? 'light' : 'dark';
    const btn = document.getElementById('preview-theme-btn');
    const isDark = state.previewTheme === 'dark';
    btn?.classList.toggle('active', isDark);
    btn.innerHTML = isDark
      ? `<svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="3" stroke="currentColor" stroke-width="1.4"/><path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M3.05 3.05l1.06 1.06M9.9 9.9l1.05 1.05M10.95 3.05L9.9 4.1M4.1 9.9l-1.05 1.05" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg> Light`
      : `<svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M12 8.5A5.5 5.5 0 015.5 2a5.5 5.5 0 000 10A5.5 5.5 0 0012 8.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg> Dark`;
    renderPreviewCanvas();
  });

  // Token Map toggle
  document.getElementById('toggle-token-map-btn')?.addEventListener('click', () => {
    state.showTokenMap = !state.showTokenMap;
    document.getElementById('toggle-token-map-btn')?.classList.toggle('active', state.showTokenMap);
    renderComponentPreview();
  });

  // Close copy menus on document click
  document.addEventListener('click', () => {
    document.querySelectorAll('.card-copy-menu').forEach(m => m.classList.add('hidden'));
  });

  // Fluid type preview slider
  document.addEventListener('input', e => {
    if (e.target.id !== 'fluid-vp-slider') return;
    const vp = parseInt(e.target.value);
    const label = vp<480?'Mobile':vp<768?'Tablet Portrait':vp<1024?'Tablet':vp<1280?'Laptop':'Desktop';
    const lvp = document.getElementById('fluid-vp-label');
    if (lvp) lvp.textContent = `${vp}px — ${label}`;
    document.querySelectorAll('.specimen-variant-text[data-fluid-min][data-fluid-max]').forEach(el => {
      const min=parseFloat(el.dataset.fluidMin), max=parseFloat(el.dataset.fluidMax);
      const size = min+(max-min)*Math.max(0,Math.min(1,(vp-320)/(1440-320)));
      el.style.fontSize = size.toFixed(2)+'px';
    });
  });

  /* ── ⌘K Command Palette ── */
(function initCommandPalette() {
  const overlay = document.getElementById('cmd-palette-overlay');
  const input   = document.getElementById('cmd-input');
  const results = document.getElementById('cmd-results');
  if (!overlay || !input || !results) return;

  function buildIndex() {
    const items = [];
    state.palettes.forEach(p => {
      items.push({ type:'palette', id:p.id, label:p.name, meta:`${p.colors.length} shades · ${p.baseHex}`, swatch:p.colors.find(c=>c.stop===500)?.hex||p.baseHex });
      p.colors.forEach(c => {
        items.push({ type:'palette', id:p.id, label:`${p.name} ${c.stop}`, meta:c.hex, swatch:c.hex });
      });
    });
    state.fonts.forEach(f => {
      items.push({ type:'font', id:f.id, label:f.name, meta:`${f.category} · ${f.activeWeights?.join(', ')}` });
      (f.variants||[]).forEach(v => {
        items.push({ type:'font', id:f.id, label:`${f.name} / ${v.role}`, meta:`${v.size}px · ${v.weight}` });
      });
    });
    state.spacings.forEach(s => {
      items.push({ type:'spacing', id:s.id, label:s.name, meta:`Base ${s.baseUnit}px` });
    });
    state.shadows.forEach(s => {
      items.push({ type:'shadow', id:s.id, label:s.name, meta:shadowToCss(s.layers).slice(0,40) });
    });
    state.semantics.forEach(t => {
      items.push({ type:'semantic', id:t.id, label:t.name, meta:t.reference||t.value||t.category });
    });
    // Scale atoms
    ['radii','borders','opacities','breakpoints','zindices','icons','motions','grids','gradients'].forEach(key => {
      (state[key]||[]).forEach(item => {
        items.push({ type:key, id:item.id, label:item.name, meta:key });
      });
    });
    return items;
  }

  function renderResults(query) {
    const q = query.toLowerCase().trim();
    if (!q) { results.innerHTML = `<div class="cmd-empty">Start typing to search tokens…</div>`; return; }
    const index = buildIndex();
    const matches = index.filter(item =>
      item.label.toLowerCase().includes(q) || (item.meta||'').toLowerCase().includes(q)
    ).slice(0, 20);
    if (!matches.length) { results.innerHTML = `<div class="cmd-empty">No tokens match "${escHtml(query)}"</div>`; return; }
    results.innerHTML = matches.map((item, i) => `
      <div class="cmd-result ${i===0?'selected':''}" data-index="${i}" data-type="${item.type}" data-id="${item.id}" tabindex="-1">
        ${item.swatch ? `<span class="cmd-swatch" style="background:${item.swatch}"></span>` : `<span class="cmd-type-badge">${item.type.slice(0,3)}</span>`}
        <span class="cmd-result-label">${escHtml(item.label)}</span>
        <span class="cmd-result-meta">${escHtml(item.meta||'')}</span>
      </div>`).join('');
  }

  function jumpTo(el) {
    if (!el) return;
    const type = el.dataset.type, id = el.dataset.id;
    const typeMap = { palette:'palette', font:'font', spacing:'spacing', shadow:'shadow', semantic:'semantic' };
    const mappedType = typeMap[type];
    if (mappedType && id) {
      state.selectedId   = id;
      state.selectedType = mappedType;
      renderAll();
    }
    close();
  }

  function open() {
    overlay.classList.remove('hidden');
    input.value = '';
    renderResults('');
    setTimeout(() => input.focus(), 30);
  }
  function close() { overlay.classList.add('hidden'); input.value = ''; }

  input.addEventListener('input', () => renderResults(input.value));

  input.addEventListener('keydown', e => {
    const sel = results.querySelector('.cmd-result.selected');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = sel?.nextElementSibling || results.querySelector('.cmd-result');
      sel?.classList.remove('selected'); next?.classList.add('selected'); next?.scrollIntoView({block:'nearest'});
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = sel?.previousElementSibling;
      sel?.classList.remove('selected'); prev?.classList.add('selected'); prev?.scrollIntoView({block:'nearest'});
    } else if (e.key === 'Enter') { jumpTo(sel); }
    else if (e.key === 'Escape') { close(); }
  });

  results.addEventListener('click', e => { jumpTo(e.target.closest('.cmd-result')); });
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  // ⌘K or Ctrl+K to open
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      overlay.classList.contains('hidden') ? open() : close();
    }
  });
})();

/* ── Canvas zoom / pan ── */
  (function initCanvasViewport() {
    const body    = document.getElementById('canvas-body');
    const world   = document.getElementById('canvas-world');
    const zoomLbl = document.getElementById('cft-zoom-label');
    const tooltip = document.getElementById('cft-tooltip');
    if (!body || !world) return;

    let zoom = 1, panX = 0, panY = 0;
    let dragging = false, dragStartX = 0, dragStartY = 0;
    let spaceHeld = false;   // spacebar held temporarily
    let panLocked = false;   // pan tool toggled on
    let scrollMode = true;   // true = classic scroll (default), false = free pan/zoom

    // ── Scroll / Free mode switch ──
    function applyViewMode() {
      if (scrollMode) {
        // Scroll mode: revert to natural document flow
        body.style.overflow   = 'auto';
        world.style.transform = 'none';
        world.style.minHeight = '';
        if (zoomLbl) zoomLbl.textContent = '—';
        panLocked = false; dragging = false; spaceHeld = false;
        body.classList.remove('canvas-pan-ready', 'canvas-panning');
        // Hide pan/zoom controls, show only mode group
        document.querySelectorAll('#cft-pan,#cft-zoom-in,#cft-zoom-out,#cft-reset,.cft-zoom-label,.cft-divider:not(:first-of-type)')
          .forEach(el => el.style.opacity = '0.35');
      } else {
        // Free mode: restore pan/zoom — reset scroll offset first so content doesn't jump
        body.scrollTop  = 0;
        body.scrollLeft = 0;
        body.style.overflow = 'hidden';
        world.style.minHeight = '100%';
        document.querySelectorAll('#cft-pan,#cft-zoom-in,#cft-zoom-out,#cft-reset,.cft-zoom-label,.cft-divider')
          .forEach(el => el.style.opacity = '');
        // Reset to origin so the view is clean after coming from scroll mode
        zoom = 1; panX = 0; panY = 0;
        applyTransform();
      }
      document.getElementById('cft-mode-scroll')?.classList.toggle('active',  scrollMode);
      document.getElementById('cft-mode-free')?.classList.toggle('active',   !scrollMode);
      updatePanBtn();
    }

    // ── Update visuals ──
    function applyTransform() {
      if (scrollMode) return;
      world.style.transform = `translate(${panX}px,${panY}px) scale(${zoom})`;
      const pct = Math.round(zoom * 100) + '%';
      if (zoomLbl) zoomLbl.textContent = pct;
    }

    function updateCursor() {
      if (scrollMode) return;
      const isPanMode = panLocked || spaceHeld;
      body.classList.toggle('canvas-pan-ready', isPanMode && !dragging);
      body.classList.toggle('canvas-panning',   dragging);
    }

    function updatePanBtn() {
      document.getElementById('cft-pan')?.classList.toggle('active', !scrollMode && panLocked);
    }

    // ── Zoom helpers ──
    function zoomToward(factor, cx, cy) {
      if (scrollMode) return;
      const newZ = Math.max(0.1, Math.min(4, zoom * factor));
      panX = cx - (cx - panX) * (newZ / zoom);
      panY = cy - (cy - panY) * (newZ / zoom);
      zoom = newZ;
      applyTransform();
    }

    function zoomStep(direction) {
      if (scrollMode) return;
      const rect = body.getBoundingClientRect();
      zoomToward(direction > 0 ? 1.1 : 1 / 1.1, rect.width / 2, rect.height / 2);
    }

    function resetView() {
      if (scrollMode) { body.scrollTop = 0; return; }
      zoom = 1; panX = 0; panY = 0;
      applyTransform();
    }

    // ── Wheel: only intercept in free mode ──
    body.addEventListener('wheel', e => {
      if (scrollMode) return; // let browser handle natural scroll
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) {
        const rect   = body.getBoundingClientRect();
        const factor = e.deltaY < 0 ? 1.08 : 1 / 1.08;
        zoomToward(factor, e.clientX - rect.left, e.clientY - rect.top);
      } else {
        panX -= e.deltaX;
        panY -= e.deltaY;
        applyTransform();
      }
    }, { passive: false });

    // ── Mouse drag: middle-click, space+drag, or pan-locked+drag ──
    body.addEventListener('mousedown', e => {
      if (scrollMode) return;
      const isPanMode = panLocked || spaceHeld;
      if (e.button === 1 || (e.button === 0 && isPanMode)) {
        e.preventDefault();
        dragging  = true;
        dragStartX = e.clientX - panX;
        dragStartY = e.clientY - panY;
        updateCursor();
      }
    });
    document.addEventListener('mousemove', e => {
      if (!dragging || scrollMode) return;
      panX = e.clientX - dragStartX;
      panY = e.clientY - dragStartY;
      applyTransform();
    });
    document.addEventListener('mouseup', () => {
      if (!dragging) return;
      dragging = false;
      updateCursor();
    });

    // ── Spacebar: temporary pan mode (free mode only) ──
    document.addEventListener('keydown', e => {
      if (e.code === 'Space' && !e.target.matches('input,textarea,select,[contenteditable]')) {
        if (scrollMode) return;
        e.preventDefault();
        if (!spaceHeld) { spaceHeld = true; updateCursor(); }
      }
      // S = scroll mode, F = free mode (when not focused on input)
      if (!e.target.matches('input,textarea,select,[contenteditable]') && !e.metaKey && !e.ctrlKey) {
        if (e.key === 's' || e.key === 'S') { scrollMode = true;  applyViewMode(); }
        if (e.key === 'f' || e.key === 'F') { scrollMode = false; applyViewMode(); }
      }
    });
    document.addEventListener('keyup', e => {
      if (e.code === 'Space') {
        spaceHeld = false;
        dragging  = false;
        updateCursor();
      }
    });

    // ── Keyboard shortcuts: ⌘0, ⌘+, ⌘- ──
    document.addEventListener('keydown', e => {
      if (!e.metaKey && !e.ctrlKey) return;
      if (e.key === '0')                  { e.preventDefault(); resetView(); }
      if (e.key === '=' || e.key === '+') { e.preventDefault(); zoomStep(1); }
      if (e.key === '-')                  { e.preventDefault(); zoomStep(-1); }
    });

    // ── Floating toolbar buttons ──
    document.getElementById('cft-mode-scroll')?.addEventListener('click', () => {
      scrollMode = true; applyViewMode();
    });
    document.getElementById('cft-mode-free')?.addEventListener('click', () => {
      scrollMode = false; applyViewMode();
    });
    document.getElementById('cft-pan')?.addEventListener('click', () => {
      if (scrollMode) return;
      panLocked = !panLocked;
      updatePanBtn();
      updateCursor();
    });
    document.getElementById('cft-zoom-in')?.addEventListener('click',  () => zoomStep(1));
    document.getElementById('cft-zoom-out')?.addEventListener('click', () => zoomStep(-1));
    document.getElementById('cft-reset')?.addEventListener('click',    resetView);

    // Apply the default view mode on boot so JS state, UI pills, and CSS agree.
    applyViewMode();

    // ── Tooltip system ──
    let _tipTimer = null;
    document.querySelectorAll('.cft-btn').forEach(btn => {
      btn.addEventListener('mouseenter', e => {
        _tipTimer = setTimeout(() => {
          if (!tooltip) return;
          const tip = btn.dataset.tip || '';
          const sc  = btn.dataset.shortcut || '';
          tooltip.innerHTML = `${escHtml(tip)}${sc ? `<span class="cft-tooltip-key">${escHtml(sc)}</span>` : ''}`;
          const r = btn.getBoundingClientRect();
          tooltip.style.left = (r.left + r.width / 2) + 'px';
          tooltip.style.top  = (r.top - 38) + 'px';
          tooltip.style.transform = 'translateX(-50%)';
          tooltip.classList.remove('hidden');
          requestAnimationFrame(() => tooltip.classList.add('visible'));
        }, 600);
      });
      btn.addEventListener('mouseleave', () => {
        clearTimeout(_tipTimer);
        if (tooltip) {
          tooltip.classList.remove('visible');
          setTimeout(() => tooltip.classList.add('hidden'), 130);
        }
      });
    });

    applyTransform();
  })();

  /* Initial render */
  _applyCanvasMode();
  renderAll();

  /* Crash recovery — offer to restore an unsaved draft from a previous session */
  if (IS_ELECTRON) setTimeout(maybeOfferRecovery, 400);
});
