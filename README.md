# Designr

**A professional design system builder for product and UX/UI designers.**

Designr is a native macOS desktop app that lets you create, manage, and export design tokens — colors, typography, spacing, shadows, and more — in one focused workspace. Export directly to CSS, SCSS, Tailwind, JSON, Figma Variables, Style Dictionary, or a shareable HTML style guide.

---

## Features

### Design Tokens

Build a complete token foundation for your product with 13 atom types:

| Token Type | What you can define |
|---|---|
| **Typography** | Font families, weights, variants (role, size, line-height, kerning, fluid sizing) |
| **Colors** | Multi-stop palette scales in HSL or OKLCH color space |
| **Gradients** | Linear gradients with custom color stops and direction |
| **Spacing** | Base unit → auto-generated named scale (xs → 2xl) |
| **Shadows** | Multi-layer box shadows with presets or custom layers |
| **Border Radius** | Named stops in px or pill (9999) |
| **Borders** | Named border width stops in px |
| **Opacity** | Named opacity stops |
| **Breakpoints** | Named responsive breakpoints in px |
| **Z-Index** | Named stacking order stops |
| **Motion** | Duration tokens + cubic-bezier easing tokens |
| **Grid** | Columns, gutter, max-width, and margin |
| **Iconography** | Icon size scale in px |
| **Semantic Tokens** | Map raw values → semantic roles (e.g. `color.primary`, `color.danger`) |

---

### Previews

See your tokens in context before you ship them.

- **Type Specimen** — Full specimen view of all font variants with metrics, rhythm badges, and accessibility warnings
- **Fluid Type Preview** — Drag a viewport slider (320px → 1440px) to see fluid type scale live
- **Font Pairings** — Heading + body font combination previews with sample article layouts
- **Color Pairings** — Accessibility contrast checker across all palette stops
- **Component Previews** — 14 shadcn-style UI components styled live with your actual tokens:
  - Button, Input, Card, Badge, Alert, Avatar, Tabs, Select, Switch, Checkbox, Progress, Skeleton, Table, Slider

---

### Export

Export your design tokens in 7 formats:

| Format | Description |
|---|---|
| **CSS Variables** | `:root { --color-primary-500: … }` with semantic roles and dark mode |
| **SCSS** | Variables + typography mixins |
| **JSON Tokens** | W3C Design Tokens format |
| **Tailwind Config** | Drop-in `tailwind.config.js` |
| **JS / TypeScript** | `export const tokens = { … } as const` |
| **Figma Variables** | JSON compatible with the Figma Variables REST API |
| **Style Dictionary** | Ready for any Style Dictionary pipeline |
| **HTML Style Guide** | Self-contained, shareable HTML — no server or login required |

Every token can also be copied individually with the **Copy ▾** button on each card — choose CSS var, SCSS var, JS, or Tailwind format instantly.

---

### Token Health Score

Designr automatically analyzes your token system and gives it a score from 0–100. It checks:

- Whether fonts, palettes, and spacing are defined
- Whether semantic tokens are present
- Duplicate color values across palettes
- Palette stop count (aims for 8+)
- Typography line-height within accessible range
- Semantic color roles passing WCAG contrast

Issues are surfaced with severity levels (error / warning / info) alongside passes, so you always know where your system stands.

---

### Accessibility Report

The built-in **A11y Report** checks every color in your palettes against white and black backgrounds:

- WCAG AA (4.5:1) and AAA (7:1) pass/fail badges per color
- Summary count of passing vs failing pairs
- Download the full report as a CSV for handoff or audits

---

### Multi-Theme Support

Create multiple named themes (e.g. Default, Brand B, High Contrast) that override palette colors per brand. Activate any theme to see the entire canvas — including component previews — re-render with the new values instantly.

Theme overrides are exported as `[data-theme="brand-b"] { … }` blocks in CSS.

---

### Design System Audit

Paste any existing CSS, Tailwind config, or JSON token file into the **Audit** panel. Designr extracts:

- All hex colors used
- Spacing and padding values in px or rem
- Font family names
- Box-shadow values

Each extracted value shows whether it already exists in your system or is new — with a one-click import button to pull it in.

---

### Token Documentation

Add **Usage Notes** to any font, palette, spacing, or shadow token. Notes:

- Appear as italic descriptions on canvas cards
- Export as `/* comments */` in CSS and `// comments` in SCSS
- Export as `$description` in JSON tokens

---

### Component Token Mapping

Toggle the **Token Map** in the Components section to see exactly which design tokens map to which parts of each UI component — background, border radius, font, shadow, padding, and more.

---

### History & Changelog

- **Undo** (⌘Z) with up to 20 snapshots
- **History modal** — jump to any previous state in this session
- **Changelog tab** — timestamped log of every change made this session

---

### Canvas Controls

- **1 / 2 / 3 column layout** — choose your canvas density
- **Background patterns** — none, dots, or grid with adjustable opacity
- **Card opacity controls** — adjust background and border opacity of all cards
- **Drag to reorder** — drag any canvas section into your preferred order
- **Resizable panels** — drag to resize the left toolbar and right properties panel
- **Light / dark mode** — toggle and persist your preferred theme

---

### File Management

Save and load `.designr` project files (JSON). Supports:

- **⌘N** — New project
- **⌘O** — Open project
- **⌘S** — Save
- **⌘⇧S** — Save As
- **⌘Z** — Undo
- **⌘E** — Export tokens

---

## Installation

### Requirements

- macOS (Apple Silicon or Intel)
- Node.js 18+ (for running from source)

### Run from Source

```bash
git clone https://github.com/your-username/designr.git
cd designr
npm install
npm start
```

### Build macOS App

```bash
npm run build
```

This outputs a `.dmg` installer in the `dist/` folder for both arm64 and x64.

---

## Tech Stack

- **Electron** — native macOS wrapper
- **Vanilla JavaScript** — no frameworks, no build step for the app itself
- **Google Fonts API** — font search and preview
- **OKLCH / HSL color math** — perceptually uniform palette generation
- **CSS Custom Properties** — full theming via `:root` variables

---

## Version

**1.0.0** — Initial release

---

## License

MIT
