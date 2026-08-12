// =============================================================
// TO THE ENDS OF THE EARTH — Design Tokens
// Tailwind CSS Config Extension
// =============================================================
// Source of truth: tokens.json
// Generated from: tokens.json (validated against Figma)
//
// USAGE — add to your tailwind.config.js:
//   const tte = require('./tokens.tailwind.js');
//   module.exports = { theme: { extend: tte } };
//
// Or spread directly:
//   const { colors, spacing, fontSize, ... } = require('./tokens.tailwind.js');
//
// LAYERS mirrored from tokens.json:
//   primitives → brand → semantic
//
// Note: Tailwind uses fontSize as [size, { lineHeight, letterSpacing }] tuples.
// All values sourced verbatim from tokens.json — nothing invented.
// =============================================================

module.exports = {

  // -----------------------------------------------------------
  // COLORS
  // Organized as: brand / semantic / biome / primitive
  // -----------------------------------------------------------
  colors: {

    // Brand — core identity colors
    brand: {
      primary: '#FE5442', // Fire of the Holy Spirit, urgency  | primitives.color.fire-orange
      dark:    '#28272A', // The earth, soil, unreached places | primitives.color.black
      light:   '#FFFFFF', // Gospel light piercing darkness     | primitives.color.white
    },

    // Semantic — where and how each color is used
    text: {
      DEFAULT:  '#28272A', // brand.dark  → primitives.color.black
      inverted: '#FFFFFF', // brand.light → primitives.color.white
      accent:   '#FE5442', // brand.primary → primitives.color.fire-orange
      muted:    '#949494', // primitives.color.grey — inactive nav, labels on dark
    },
    surface: {
      dark:   '#28272A', // brand.dark
      light:  '#FFFFFF', // brand.light
      accent: '#FE5442', // brand.primary
    },
    icon: {
      primary: '#FE5442', // TTE bird orange wing, action icons
      dark:    '#28272A', // Icons on light backgrounds
      light:   '#FFFFFF', // Icons on dark backgrounds
    },
    border: {
      DEFAULT: '#28272A', // brand.dark — default borders, dividers
      accent:  '#FE5442', // brand.primary — active, branded borders
      subtle:  '#FFFFFF', // brand.light — subtle on dark (use at low opacity)
    },
    hud: {
      text:    '#FFFFFF', // HUD data text — always on dark
      accent:  '#FE5442', // HUD labels, field names
      bg:      '#28272A', // HUD panel background
    },

    // Biome accents — PENDING FINAL APPROVAL
    biome: {
      desert: '#B86C55', // primitives.color.biome.desert
      arctic: '#7BA7BC', // primitives.color.biome.arctic
      city:   '#4A4A52', // primitives.color.biome.city
      forest: '#2D5A3D', // primitives.color.biome.forest
    },

    // Parent brand — Hope Channel. Do not use in TTE components.
    'hc-blue':   '#264CA3',
    'hc-yellow': '#FAD306',
  },

  // -----------------------------------------------------------
  // SPACING
  // Base 4px scale + semantic component/layout aliases
  // -----------------------------------------------------------
  spacing: {
    // Primitive scale
    '0':  '0px',
    '1':  '4px',
    '2':  '8px',
    '3':  '12px',
    '4':  '16px',
    '5':  '20px',
    '6':  '24px',
    '8':  '32px',
    '10': '40px',
    '12': '48px',
    '16': '64px',
    '20': '80px',
    '24': '96px',
    '32': '128px',

    // Semantic — component padding
    'padding-xs': '8px',   // semantic.spacing.component.padding-xs → primitives.spacing.2
    'padding-sm': '12px',  // semantic.spacing.component.padding-sm → primitives.spacing.3
    'padding-md': '16px',  // semantic.spacing.component.padding-md → primitives.spacing.4
    'padding-lg': '24px',  // semantic.spacing.component.padding-lg → primitives.spacing.6
    'padding-xl': '32px',  // semantic.spacing.component.padding-xl → primitives.spacing.8

    // Semantic — component gap
    'gap-xs': '4px',   // primitives.spacing.1
    'gap-sm': '8px',   // primitives.spacing.2
    'gap-md': '16px',  // primitives.spacing.4
    'gap-lg': '24px',  // primitives.spacing.6
    'gap-xl': '48px',  // primitives.spacing.12

    // Semantic — layout
    'page-mobile':  '16px',  // primitives.spacing.4
    'page-tablet':  '32px',  // primitives.spacing.8
    'page-desktop': '64px',  // primitives.spacing.16
    'section-gap':  '96px',  // primitives.spacing.24

    // Semantic — control height scale (Button, Input, Select share these)
    // Usage: h-control-sm / h-control / h-control-lg
    'control-sm': '36px',   // semantic.sizing.control-sm — dense · HUD · operate
    'control':    '44px',   // semantic.sizing.control-default — SYSTEM DEFAULT
    'control-lg': '56px',   // semantic.sizing.control-lg — hero CTAs
  },

  // -----------------------------------------------------------
  // FONT SIZE
  // Tailwind tuple format: [size, { lineHeight, letterSpacing }]
  // -----------------------------------------------------------
  fontSize: {
    // Mona Sans — display & headings
    'display-2xl': ['96px', { lineHeight: '0.95',  letterSpacing: '0.02em' }], // 900 · uppercase
    'display-xl':  ['72px', { lineHeight: '0.95',  letterSpacing: '0.02em' }], // 900 · uppercase
    'display-l':   ['60px', { lineHeight: '1.00',  letterSpacing: '0.02em' }], // 800 · uppercase
    'h1':          ['48px', { lineHeight: '1.05',  letterSpacing: '0.01em' }], // 800 · uppercase
    'h2':          ['36px', { lineHeight: '1.10',  letterSpacing: '0.01em' }], // 800 · uppercase
    'h3':          ['28px', { lineHeight: '1.00',  letterSpacing: '0.01em' }], // 700 · uppercase
    'h4':          ['22px', { lineHeight: '1.00',  letterSpacing: '0.02em' }], // 700 · uppercase
    'label-lg':    ['16px', { lineHeight: '1.00',  letterSpacing: '0.04em' }], // 800 · uppercase
    'label-md':    ['13px', { lineHeight: '1.00',  letterSpacing: '0.04em' }], // 800 · uppercase
    'mona-body':   ['16px', { lineHeight: '1.20',  letterSpacing: '0em' }],    // 500 · sentence case — EXCEPTION to uppercase rule
    'mona-body-sm':['14px', { lineHeight: '1.20',  letterSpacing: '0em' }],    // 500 · sentence case

    // Space Mono — HUD, data, body
    'hud-xl':      ['20px', { lineHeight: '1.20',  letterSpacing: '0.06em' }], // 700 · uppercase
    'hud-default': ['14px', { lineHeight: '1.20',  letterSpacing: '0.06em' }], // 400 · uppercase
    'hud-small':   ['12px', { lineHeight: '1.20',  letterSpacing: '0.06em' }], // 400 · uppercase
    'hud-micro':   ['10px', { lineHeight: '1.20',  letterSpacing: '0.06em' }], // 400 · uppercase
    'body':        ['16px', { lineHeight: '1.40',  letterSpacing: '0.01em' }], // 400 · sentence case
    'body-sm':     ['14px', { lineHeight: '1.40',  letterSpacing: '0.01em' }], // 400 · sentence case
    'body-xs':     ['12px', { lineHeight: '1.60',  letterSpacing: '0.01em' }], // 400 · sentence case — smallest body; looser leading is part of the token
    'mono-label':  ['12px', { lineHeight: '1.40',  letterSpacing: '0.03em' }], // 700 · uppercase
  },

  // -----------------------------------------------------------
  // FONT FAMILY
  // -----------------------------------------------------------
  fontFamily: {
    primary:   ['"Mona Sans"', 'sans-serif'],   // brand.font.primary  — display, headings, wordmark
    secondary: ['"Space Mono"', 'monospace'],   // brand.font.secondary — HUD, data, body
    sans:      ['"Mona Sans"', 'sans-serif'],   // alias → primary
    mono:      ['"Space Mono"', 'monospace'],   // alias → secondary
  },

  // -----------------------------------------------------------
  // BORDER RADIUS
  // Zero everywhere. TTE is angular and tactical.
  // -----------------------------------------------------------
  borderRadius: {
    none:    '0px',    // semantic.borderRadius.none
    DEFAULT: '0px',    // semantic.borderRadius.default — overrides Tailwind defaults to zero
    sm:      '0px',
    md:      '0px',
    lg:      '0px',
    xl:      '0px',
    '2xl':   '0px',
    '3xl':   '0px',
    full:    '9999px', // semantic.borderRadius.full — EXCEPTION ONLY: avatars, circular elements
  },

  // -----------------------------------------------------------
  // BOX SHADOW — Elevation + HUD glow
  // -----------------------------------------------------------
  boxShadow: {
    none:  'none',                                        // semantic.elevation.none
    sm:    '0 2px 8px rgba(0, 0, 0, 0.30)',              // semantic.elevation.sm — tooltips, dropdowns
    md:    '0 4px 16px rgba(0, 0, 0, 0.50)',             // semantic.elevation.md — cards on dark
    lg:    '0 8px 32px rgba(0, 0, 0, 0.70)',             // semantic.elevation.lg — modals, overlays
    hud:   '0 0 24px rgba(254, 84, 66, 0.20)',           // semantic.elevation.hud — orange glow
    DEFAULT: '0 2px 8px rgba(0, 0, 0, 0.30)',            // alias → sm
  },

  // -----------------------------------------------------------
  // OPACITY
  // -----------------------------------------------------------
  opacity: {
    'topo':     '0.12', // semantic.opacity.topographic-overlay — pattern on dark backgrounds
    'overlay-light':  '0.08', // semantic.opacity.overlay-light
    'overlay-mid':    '0.24', // semantic.opacity.overlay-medium
    'overlay-heavy':  '0.64', // semantic.opacity.overlay-heavy — HUD scrim
    'disabled': '0.40', // semantic.opacity.disabled
  },

  // -----------------------------------------------------------
  // BORDER WIDTH
  // -----------------------------------------------------------
  borderWidth: {
    thin:    '1px', // semantic.border.width.thin    — HUD lines, dividers
    DEFAULT: '2px', // semantic.border.width.default — standard borders
    thick:   '4px', // semantic.border.width.thick   — emphasis, active states
  },

};
