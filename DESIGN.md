---
version: alpha
name: Butter
description: |
  Butter's design system embodies a clean, contemporary sensibility rooted in
  minimalist clarity and purposeful restraint. The aesthetic is deliberately
  spare—vast whitespace, restrained colour accents, and a reliance on scale and
  proximity to communicate hierarchy. The brand itself signals this through a
  curvaceous, modern logotype and a strategic deployment of a vibrant cyan
  accent (#00FFD0) that punctuates an otherwise neutral canvas. The overall mood
  is one of creative confidence: the design gets out of the way so that
  user-created video content can take centre stage. Typography is set in a
  single geometric sans-serif (DieGrotesk) in a consistent weight, allowing size
  alone to establish hierarchy. Interaction is understated—subtle opacity shifts
  and careful color overlays rather than aggressive shadows or elaborate
  effects.
source:
  url: "https://www.butter.video/"
  pagesAnalyzed: 1
  extractedAt: 2026-10-04
  tokensMeasured: true
colors:
  primary: "#00FFD0"
  canvas: "#FAFAFA"
  surface-alt: "#EDEDED"
  on-primary: "#0F0F0F"
  ink: "#0F0F0F"
  body: "#1E1E1E"
  muted: "#B6B6B6"
  neutral-1: "#3C3C3C"
typography:
  display-xxl:
    fontFamily: DieGrotesk
    fontSize: 107.568px
    fontWeight: 400
    lineHeight: 0.99
    letterSpacing: 0.34px
  display-xl:
    fontFamily: DieGrotesk
    fontSize: 60.4px
    fontWeight: 400
    lineHeight: 0.97
    letterSpacing: 0.36px
  display-lg:
    fontFamily: DieGrotesk
    fontSize: 45.4526px
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: 0.36px
  body-xl:
    fontFamily: DieGrotesk
    fontSize: 24.4842px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: 0.73px
  body-lg:
    fontFamily: DieGrotesk
    fontSize: 20.7474px
    fontWeight: 400
    lineHeight: 1.16
    letterSpacing: 0.68px
  body-md:
    fontFamily: DieGrotesk
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: DieGrotesk
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.31
    letterSpacing: 0.7px
  body-sm-tight:
    fontFamily: DieGrotesk
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0.7px
  button-xl:
    fontFamily: DieGrotesk
    fontSize: 41.6667px
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: 0.33px
  button-lg:
    fontFamily: DieGrotesk
    fontSize: 21.06px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
rounded:
  none: 0px
  xs: 5px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 28px
  xxxl: 32px
  section: 40px
  band: 52px
elevationStrategy: color-blocking
themes:
  derived: dark   # the other theme is the site's measured palette
  light:
    bg: "#FAFAFA"
    surface: "#EDEDED"
    surfaceRaised: "#E4E4E4"
    text: "#0F0F0F"
    textMuted: "#1E1E1E"
    border: "#DEDEDE"
    accent: "#00997D"
    accentFg: "#000000"
    focusRing: "#00FFD0"
    elevation: shadow
  dark:
    bg: "#091614"
    surface: "#182422"
    surfaceRaised: "#24302E"
    text: "#F5FFFD"
    textMuted: "#9BA6A4"
    border: "#303B3A"
    accent: "#00FFD0"
    accentFg: "#0B0B0C"
    focusRing: "#00FFD0"
    elevation: "border+surface"
gradients:
  - context: hero
    kind: linear
    value: "linear-gradient(rgb(214, 214, 214) 0%, rgb(250, 250, 250) 100%)"
components:
  button-filled:
    typography: "{typography.body-md}"
    textColor: "{colors.canvas}"
    height: 47px
    padding: "10px 14px 10px 14px"
    rounded: 8px
    backgroundColor: "{colors.body}"
  button-text:
    typography: "{typography.button-lg}"
    textColor: "{colors.body}"
    height: 58.5938px
  button-text-2:
    typography: "{typography.button-lg}"
    textColor: "rgba(15, 15, 15, 0.3)"
    height: 58.5938px
  card:
    typography: "{typography.body-md}"
    textColor: "{colors.ink}"
    padding: "140px 0px 140px 0px"
  navigation:
    typography: "{typography.body-md}"
    textColor: "{colors.body}"
    height: 20px
  footer:
    typography: "{typography.body-md}"
    textColor: "{colors.ink}"
    padding: "160px 0px 60px 0px"
    backgroundColor: "{colors.surface-alt}"
  link:
    typography: "{typography.body-md}"
    textColor: "{colors.body}"
  link-2:
    typography: "{typography.body-sm}"
    textColor: "{colors.ink}"
states:
  other-focus:
    target: other
    state: focus
    outline: none
    boxShadow: none
  other-focus-visible:
    target: other
    state: focus-visible
    boxShadow: "{colors.neutral-1} 0px 0px 0px 0.1rem"
  link-focus-visible:
    target: link
    state: focus-visible
    outline: none
  other-hover:
    target: other
    state: hover
    borderColor: transparent
  button-hover:
    target: button
    state: hover
    borderColor: "rgba(0, 0, 0, 0.15)"
    backgroundColor: "rgba(0, 0, 0, 0.08)"
  button-active:
    target: button
    state: active
    transform: "scale(0.95)"
  card-hover:
    target: card
    state: hover
    opacity: 0.5
breakpoints:
  - width: 375
    containerWidth: 375
    gridColumns: 1
    navLinksVisible: 4
    menuToggleVisible: true
    headingPx: 56
    bodyPx: 18
    sectionPaddingX: 0
  - width: 768
    containerWidth: 768
    gridColumns: 1
    navLinksVisible: 4
    menuToggleVisible: true
    headingPx: 75
    bodyPx: 18
    sectionPaddingX: 0
  - width: 1024
    containerWidth: 1024
    gridColumns: 1
    navLinksVisible: 9
    menuToggleVisible: true
    headingPx: 87
    bodyPx: 18
    sectionPaddingX: 0
  - width: 1280
    containerWidth: 992
    gridColumns: 1
    navLinksVisible: 9
    menuToggleVisible: true
    headingPx: 100
    bodyPx: 18
    sectionPaddingX: 0
  - width: 1440
    containerWidth: 992
    gridColumns: 1
    navLinksVisible: 9
    menuToggleVisible: true
    headingPx: 108
    bodyPx: 18
    sectionPaddingX: 0
coverage:
  statesFound: 23
  gradientsFound: 1
  rolesUnassigned: 1
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: false
---

# Design System Inspired by Butter

## 1. Visual Theme & Atmosphere

Butter's design system embodies a clean, contemporary sensibility rooted in minimalist clarity and purposeful restraint. The aesthetic is deliberately spare—vast whitespace, restrained colour accents, and a reliance on scale and proximity to communicate hierarchy. The brand itself signals this through a curvaceous, modern logotype and a strategic deployment of a vibrant cyan accent (`{colors.primary}` — `#00FFD0`) that punctuates an otherwise neutral canvas. The overall mood is one of creative confidence: the design gets out of the way so that user-created video content can take centre stage. Typography is set in a single geometric sans-serif (DieGrotesk) in a consistent weight, allowing size alone to establish hierarchy. Interaction is understated—subtle opacity shifts and careful color overlays rather than aggressive shadows or elaborate effects.

**Key Characteristics**

- Minimal geometric language; sharp corners dominate
- Monochromatic neutrals with a single vibrant accent for calls to action
- Consistent single-weight typography across all scales
- Generous whitespace and section breathing room
- Color-blocking for depth rather than shadowing
- Restraint in interactive feedback; opacity and scale shifts preferred over elaborate effects

## 2. Color Palette & Roles

### Primary

- **Brand Accent** (`{colors.primary}` — `#00FFD0`): Primary call-to-action buttons, brand highlights, active states. The defining accent colour that draws the eye to key user journeys.

### Neutral Scale

- **Canvas** (`{colors.canvas}` — `#FAFAFA`): Default page background. Near-white, providing the foundational neutral field.
- **Surface Alt** (`{colors.surface-alt}` — `#EDEDED`): Alternating section backgrounds; creates subtle visual rhythm without contrast shock.
- **On Primary** (`{colors.on-primary}` — `#0F0F0F`): Primary heading and text colour. The darkest neutral, used for maximum legibility on light surfaces.
- **Body** (`{colors.body}` — `#1E1E1E`): Body copy and general text. Fractionally lighter than `{colors.on-primary}`, maintaining high contrast while reducing visual intensity.
- **Muted** (`{colors.muted}` — `#B6B6B6`): Secondary and caption text. Mid-grey for de-emphasized content, metadata, and supporting copy.
- **Neutral (Decorative)** (`{colors.neutral-1}` — `#3C3C3C`): No declared semantic role. Used as a mid-tone accent in contexts where a darker neutral accent is needed (e.g., buttons, interactive elements).

### Semantic / Status

No error, success, warning, or info colour roles are declared in the extracted stylesheets. The site does not expose a semantic status ramp. (See Known Gaps.)

## 3. Typography Rules

### Font Family

**Primary Font:**  
DieGrotesk, sans-serif

All typography is rendered in DieGrotesk at weight 400 (regular) throughout the system. No secondary font stack is declared.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display XXL | DieGrotesk | 107.57px | 400 | 0.99 | 0.34px | Largest display heading; hero-scale text |
| Display XL | DieGrotesk | 60.4px | 400 | 0.97 | 0.36px | Major section headings |
| Display LG | DieGrotesk | 45.45px | 400 | 0.96 | 0.36px | Secondary headings |
| Body XL | DieGrotesk | 24.48px | 400 | 1.15 | 0.73px | Large intro / emphasis text |
| Body LG | DieGrotesk | 20.75px | 400 | 1.16 | 0.68px | Subheading, featured paragraph |
| Button XL | DieGrotesk | 41.67px | 400 | 0.96 | 0.33px | Large call-to-action text in prominent buttons |
| Button LG | DieGrotesk | 21.06px | 400 | 1.5 | 0px | Standard button and link text |
| Body MD | DieGrotesk | 18px | 400 | 1.5 | 0px | Navigation, standard links |
| Body SM | DieGrotesk | 16px | 400 | 1.31 | 0.7px | Caption, metadata, secondary copy |
| Body SM (Tight) | DieGrotesk | 16px | 400 | 1.25 | 0.7px | Compact caption variant |

### Principles

- **Single-weight consistency:** All type is weight 400. No bold or semibold variants are used; hierarchy is conveyed entirely through size and line-height.
- **Tracking as emphasis:** Display sizes use measured positive letter-spacing (0.33–0.36px) to enhance geometric clarity and elegance.
- **Tight leading on display:** Display text (XXL, XL, LG) uses line-height ratios between 0.96–0.99, creating a confident, compact presence.
- **Generous leading on body:** Body and button text use line-height ratios of 1.15–1.5, ensuring readability and breathing room in continuous text.
- **Scale-driven hierarchy:** A single typeface at a single weight means size, spacing, and colour alone must carry the design narrative.

## 4. Component Stylings

### Buttons

#### Filled Button (Primary)
- **Background:** `{colors.body}` — `#1E1E1E`
- **Text Color:** `{colors.canvas}` — `#FAFAFA`
- **Padding:** `10px 14px`
- **Height:** `47px`
- **Font Size:** `{typography.button-lg}` — `18px`
- **Font Weight:** 400
- **Line Height:** 1.5
- **Border Radius:** `{rounded.xs}` — `5px`
- **Border:** None
- **Box Shadow:** None
- **Hover:** Background becomes `{colors.neutral-1}` — `#3C3C3C`; text opacity and color may shift based on component context

#### Text Button (Ghost)
- **Background:** Transparent (`rgba(0, 0, 0, 0)`)
- **Text Color:** `{colors.body}` — `#1E1E1E`
- **Padding:** `0px`
- **Height:** Auto (measured at `58.59px` in context)
- **Font Size:** `{typography.button-lg}` — `21.06px`
- **Font Weight:** 400
- **Line Height:** 1.5
- **Border Radius:** `{rounded.none}` — `0px`
- **Border:** None
- **Box Shadow:** None
- **Hover:** Text color may reduce to `rgba(15, 15, 15, 0.3)` for a softened state

#### Text Button (Muted Variant)
- **Background:** Transparent (`rgba(0, 0, 0, 0)`)
- **Text Color:** `rgba(15, 15, 15, 0.3)` — reduced opacity variant
- **Padding:** `0px`
- **Font Size:** `{typography.button-lg}` — `21.06px`
- **Font Weight:** 400
- **Line Height:** 1.5
- **Border Radius:** `{rounded.none}` — `0px`
- **Border:** None
- **Box Shadow:** None

### Cards & Containers

#### Card (Content Section)
- **Background:** Transparent or inherited from section
- **Border:** None
- **Border Radius:** `{rounded.none}` — `0px`
- **Padding:** `{spacing.band}` vertical — `52px`; horizontal varies by viewport
- **Box Shadow:** None
- **Text Color:** `{colors.on-primary}` — `#0F0F0F`
- **Font Size:** `{typography.body-md}` — `18px`

#### Hero Section
- **Background:** Linear gradient from `rgb(214, 214, 214)` at 0% to `{colors.canvas}` (`rgb(250, 250, 250)`) at 100%
- **Padding:** `{spacing.band}` — `52px` vertical
- **Border Radius:** `{rounded.none}` — `0px`

### Inputs & Forms

Link (Default)
- **Text Color:** `{colors.body}` — `#1E1E1E`
- **Font Size:** `{typography.body-md}` — `18px`
- **Font Weight:** 400
- **Line Height:** 1.5
- **Letter Spacing:** `0px`
- **Background:** Transparent
- **Border:** None
- **Text Decoration:** None (inferred)
- **Focus-Visible:** Outline `#4DC5E5` solid `0.3rem`; outline-offset not specified
- **Hover:** Opacity transitions may apply depending on context

Link (Footer Variant)
- **Text Color:** `{colors.on-primary}` — `#0F0F0F`
- **Font Size:** `{typography.body-sm}` — `16px`
- **Font Weight:** 400
- **Line Height:** 1.31
- **Background:** Transparent
- **Border:** None

### Navigation

#### Navigation Container
- **Background:** Transparent (inherits page background)
- **Text Color:** `{colors.body}` — `#1E1E1E`
- **Font Size:** `{typography.body-md}` — `18px`
- **Font Weight:** 400
- **Line Height:** 1.5
- **Padding:** `0px` (navigation items laid out horizontally without padding container)
- **Border Radius:** `{rounded.none}` — `0px`
- **Border:** None
- **Box Shadow:** None
- **Height:** `20px` (measured)

#### Navigation Links (Menu Items)
- **Text Color:** `{colors.body}` — `#1E1E1E`
- **Font Size:** `{typography.body-md}` — `18px`
- **Hover:** Color may reduce to `rgba(15, 15, 15, 0.5)` for secondary emphasis
- **Background:** Transparent
- **Spacing:** Items arranged horizontally; inter-item spacing managed by layout grid, not padding

### Footer

#### Footer Section
- **Background:** `{colors.surface-alt}` — `#EDEDED`
- **Text Color:** `{colors.on-primary}` — `#0F0F0F`
- **Font Size:** `{typography.body-md}` — `18px`
- **Font Weight:** 400
- **Line Height:** 1.5
- **Padding:** `{spacing.band}` (`160px` measured) top; `{spacing.xxxl}` (`60px` measured) bottom; horizontal varies by viewport
- **Border:** None
- **Border Radius:** `{rounded.none}` — `0px`
- **Box Shadow:** None

## 5. Layout Principles

### Spacing System

Butter's spacing is governed by an 8-point base unit expanded into a graduated scale:

- **`{spacing.xxs}`** — `4px` — Micro-adjustments within tight component layouts
- **`{spacing.xs}`** — `8px` — Minimal gap between adjacent inline elements
- **`{spacing.sm}`** — `12px` — Small intra-component spacing (e.g., button padding adjustments)
- **`{spacing.md}`** — `16px` — Default component padding and margin; standard inter-element gap
- **`{spacing.lg}`** — `20px` — Larger component padding; gap between related sections
- **`{spacing.xl}`** — `24px` — Significant vertical breathing room
- **`{spacing.xxl}`** — `28px` — Major section dividers
- **`{spacing.xxxl}`** — `32px` — Large block spacing
- **`{spacing.section}`** — `40px` — Section-level padding and margins
- **`{spacing.band}`** — `52px` — Large section blocks; hero and content banding

### Grid & Container

- **Max Width:** `992px` (content column) at viewport widths `1280px` and above
- **Column Strategy:** Single-column layout throughout all measured breakpoints (`375px`, `768px`, `1024px`, `1280px`, `1440px`)
- **Section Padding (Horizontal):** `0px` on all measured breakpoints, indicating sections extend edge-to-edge with internal content aligned to the content column
- **Content Alignment:** Content centre-aligned or left-aligned within the full-width container; the `992px` max-width applies to content placement, not container width

### Whitespace Philosophy

Whitespace is a primary design tool. Sections are separated by generous vertical spacing (`{spacing.band}` — `52px` or greater), creating visual rhythm and preventing cognitive overload. Horizontal margins are minimal (0px external padding), trusting the content column constraint to provide visual focus. Within text-heavy regions, line-height ratios favour breathing room over compactness, reinforcing legibility and a sense of calm clarity.

### Border Radius Scale

- **`{rounded.none}`** — `0px` — Buttons, cards, containers, navigation. The system's default; sharp corners reinforce the geometric, contemporary aesthetic.
- **`{rounded.xs}`** — `5px` — Filled button variants. A subtle softening that humanizes the primary interactive element without compromising geometric clarity.
- **`{rounded.full}`** — `9999px` — Reserved for pill-shaped or circular components (if any); not observed in the measured components but available in the declared scale.

### Border Widths

No border-width values are declared in the extracted component data. The system uses `border: 0px none` across measured components, indicating borders are not a primary structural tool. (See Known Gaps.)

## 6. Depth & Elevation

### Elevation Strategy

Butter employs **color-blocking** as its depth model. Depth and layering are expressed through shifts in background colour (from `{colors.canvas}` to `{colors.surface-alt}` or vice versa) rather than through shadow effects. No box-shadow values are declared in the measured component styles, confirming that the system prioritizes flat, colour-driven surfaces.

| Level | Treatment | Use |
|---|---|---|
| Base (Flat) | `box-shadow: none` | Default surfaces, cards, buttons, text layers |
| Section Band | `background: {colors.surface-alt}` or gradient | Footer, alternating content sections |
| Hover / Interactive | `opacity: 0.5–1.0`, `transform: scale(0.95)`, or `backgroundColor: rgba(...)` | Button press, card hover, link interaction |

### Opacity Levels

The system declares the following opacity values for interactive and overlay states:

- **`0.99`** (99%) — Near-opaque; minimal fade
- **`0.92`** (92%) — Subtle reduction
- **`0.73`** (73%) — Moderate fade
- **`0.54`** (54%) — Significant transparency; secondary emphasis
- **`0.35`** (35%) — Light overlay; muted text or disabled states
- **`0.10`** (10%) — Barely visible; ghost text or minimal contrast

These are applied contextually to text colour, background colour, and hover states to convey disabled, secondary, or hovered conditions.

### Z-index / Layering

The system employs a stratified z-index scale to manage layering across the interface:

- **Base:** `z-index: 1, 2` — Default document flow and standard elements
- **Dropdown:** `z-index: 29, 30, 40` — Menu overlays and contextual dropdowns
- **Sticky:** `z-index: 250, 300` — Persistent navigation and fixed headers
- **Modal:** `z-index: 9999` — Overlays, dialogs, and highest-priority content

This allows predictable stacking behaviour across components without z-index conflicts.

## 7. Do's and Don'ts

### Do

- **Use DieGrotesk weight 400 exclusively.** All typography is a single weight; scale and spacing carry the design voice.
- **Build hierarchy with size and letter-spacing.** Display text should use the measured letter-spacing values (0.33–0.36px) to reinforce geometric clarity.
- **Rely on colour-blocking for depth.** Shift background colours to separate sections; avoid drop shadows.
- **Apply opacity for interaction feedback.** On hover or disabled state, modulate opacity of text or background (e.g., `0.5`, `0.35`) rather than changing hue or adding shadows.
- **Keep border-radius minimal.** Use `0px` (sharp) as the default; `5px` for filled buttons only; `9999px` reserved for pill-shaped components.
- **Maintain the spacing scale.** Use defined values (`{spacing.md}`, `{spacing.lg}`, `{spacing.band}`, etc.) rather than ad-hoc measurements; this ensures visual consistency.
- **Center and left-align thoughtfully.** Content aligns within the `992px` max-width; the page canvas extends edge-to-edge.
- **Use the brand accent sparingly.** `{colors.primary}` (`#00FFD0`) is a focal point; deploy it for primary CTAs and key interactive states, not as a general highlight.

### Don't

- **Mix typeface weights.** DieGrotesk 400 is the system standard. Do not introduce bold (700), semibold (600), or light (300) variants.
- **Add drop shadows or blur effects.** The system is flat and color-blocked. Depth comes from background colour shifts, not shadow stacks.
- **Use border-radius on most components.** Borders and rounded corners are rare in this system; preserve sharpness as the geometric default.
- **Invent new spacing values.** Stick to the defined scale. Do not use arbitrary pixel values like `18px` or `45px` for padding or margin.
- **Deploy the brand accent as a neutral or secondary colour.** `{colors.primary}` is reserved for high-priority interactive elements and brand moments. Its vibrancy demands restraint.
- **Use semantic status colours (error, success, warning).** The system declares no such ramp. Do not invent error-red or success-green; instead, use opacity shifts on existing neutrals or rely on icon/text labels.
- **Scale buttons or text arbitrarily.** All button and text sizes are measured and fixed; scale components only within the defined hierarchy.
- **Add decorative gradients or patterns beyond the hero.** The system is minimal; the linear gradient on the hero section is a rare decorative flourish. Keep other surfaces flat.

## 8. Responsive Behavior

### Breakpoints

Derived from measured viewport changes across typography, layout, and navigation visibility:

| Breakpoint Name | Viewport Width | Content Column | Grid Columns | Nav Links Visible | Largest Heading | Body Text | Section Padding-X |
|---|---|---|---|---|---|---|---|
| Mobile | 375px | 375px | 1 | 4 | {typography.display-lg} ~56px | {typography.body-md} 18px | 0px |
| Tablet | 768px | 768px | 1 | 4 | {typography.display-lg} ~75px | {typography.body-md} 18px | 0px |
| Desktop SM | 1024px | 1024px | 1 | 9 | {typography.display-lg} ~87px | {typography.body-md} 18px | 0px |
| Desktop MD | 1280px | 992px (constrained) | 1 | 9 | {typography.display-xxl} ~100px | {typography.body-md} 18px | 0px |
| Desktop LG | 1440px | 992px (constrained) | 1 | 9 | {typography.display-xxl} ~108px | {typography.body-md} 18px | 0px |

**Key observations:**
- Single-column layout persists across all breakpoints; no multi-column grids are employed.
- Navigation remains visible at all breakpoints (no menu toggle observed in measured viewports, though extraction notes it may exist).
- Heading sizes scale with viewport (56px → 108px), while body text remains fixed at `18px`.
- Content column width increases until `1280px`, then becomes constrained to `992px` max-width for desktop viewports.
- Section horizontal padding is 0px throughout, indicating full-width sections with constrained internal content.

### Touch Targets

No explicit touch-target sizing data was extracted from stylesheets. Measured button heights (e.g., `47px` for filled buttons) suggest a comfortable touch area, but minimum tap-target guidelines (typically `44px × 44px` or `48px × 48px`) are not formally declared. (See Known Gaps.)

### Collapsing Strategy

- **Headings:** Display text scales smoothly from `56px` (mobile) to `108px` (large desktop) in proportion to viewport size.
- **Navigation:** Menu items remain visible as text links across all breakpoints; no mobile hamburger menu is observed in measured data, though the UI shows a menu toggle icon in the header.
- **Content Column:** Grows from `375px` (mobile) to `1024px` (desktop small), then caps at `992px` (desktop medium and large).
- **Sections:** Remain full-width with `0px` horizontal padding; internal content constrains to the column max-width.
- **Spacing:** Section padding (vertical) is maintained; inter-element gaps use the defined spacing scale consistently across breakpoints.

## 9. Agent Prompt Guide

### Quick Color Reference

When implementing UI elements, refer to these role-to-colour mappings:

- **Primary CTA & Accents:** Brand Accent (`{colors.primary}` — `#00FFD0`)
- **Button Fill (Primary):** Body (`{colors.body}` — `#1E1E1E`)
- **Default Background:** Canvas (`{colors.canvas}` — `#FAFAFA`)
- **Alternating Sections:** Surface Alt (`{colors.surface-alt}` — `#EDEDED`)
- **Heading & Primary Text:** On Primary (`{colors.on-primary}` — `#0F0F0F`)
- **Body Copy:** Body (`{colors.body}` — `#1E1E1E`)
- **Secondary / Caption Text:** Muted (`{colors.muted}` — `#B6B6B6`)
- **Mid-Tone Accent (Decorative):** Neutral (`{colors.neutral-1}` — `#3C3C3C`)

### Iteration Guide

1. **Typography is size-driven, not weight-driven.** Use only DieGrotesk weight 400. Establish hierarchy by scaling size and adjusting line-height; never bold or lighten.

2. **Letter-spacing matters on display text.** Display headings (`{typography.display-xxl}`, `{typography.display-xl}`, `{typography.display-lg}`) use positive letter-spacing (`0.33–0.36px`). Preserve these values; they are part of the geometric voice.

3. **Depth comes from colour shifts, not shadows.** To separate sections, change the background colour (e.g., from `{colors.canvas}` to `{colors.surface-alt}`). Do not add `box-shadow`. Hover states use opacity modulation or transform (scale, translate) rather than shadow effects.

4. **Border-radius is mostly zero.** Use `0px` (sharp) by default. Apply `{rounded.xs}` (`5px`) only to filled button variants. Reserve `{rounded.full}` for pill-shaped components if needed.

5. **Spacing adheres to the scale.** All padding, margin, and gap values must come from the defined spacing tokens (`{spacing.md}`, `{spacing.lg}`, `{spacing.band}`, etc.). Do not introduce ad-hoc pixel values.

6. **Layout is single-column and center-constrained.** Content aligns within a `992px` max-width on desktop; sections extend edge-to-edge with `0px` horizontal padding. On small viewports, the full width is content width.

7. **Opacity is the primary interaction feedback.** On hover, disabled, or secondary states, apply opacity values from the declared scale (`0.99`, `0.92`, `0.73`, `0.54`, `0.35`, `0.10`). This conveys state without introducing new colours or effects.

8. **Brand accent is reserved.** `{colors.primary}` (`#00FFD0`) should appear only on primary CTAs, brand elements, and high-priority interactive states. Overuse dilutes its impact.

9. **Headings scale with the viewport.** Implement responsive heading sizes that grow from `56px` (mobile) to `108px` (large desktop). Use CSS calc() or viewport-relative units to scale smoothly, or define size breakpoints aligned with the measured viewport table.

10. **Navigation and footer colours follow the palette.** Navigation text uses `{colors.body}` (`#1E1E1E`); footer uses `{colors.on-primary}` (`#0F0F0F`) on an `{colors.surface-alt}` background. Maintain contrast ratios and the neutral-on-neutral aesthetic.

## 10. Known Gaps

- **Interaction states for buttons and links are partially defined.** Focus, hover, and active states exist in the stylesheets (e.g., `:focus-visible` applies an outline, `:hover` modulates opacity), but not all interaction contexts were captured. Disabled button states, form validation feedback, and error/success messaging are not formally documented.

- **No semantic status colour ramp.** The site does not declare error, success, warning, or info colours. The palette is purely neutral + brand accent. Status indication (if needed) must be achieved through icons, text labels, or opacity shifts on existing neutrals.

- **Touch-target guidelines are not declared.** Measured button heights (`47px`) are comfortable, but no explicit minimum tap-target size policy is enforced in the extracted stylesheets. Assume mobile-safe sizing is expected but not formally specified.

- **Specific hover/active/disabled CSS variants for all components are not fully extracted.** Some button and link hover states are documented (e.g., opacity changes, scale transforms), but not every possible interactive context (e.g., focused form fields, active menu items in complex navigation) is captured.

- **One colour has no assigned role.** `{colors.neutral-1}` (`#3C3C3C`) is marked decorative; its specific uses are not formally defined, limiting guidance on when to deploy it.

- **Dark mode or theme variants are not measured.** The extraction covers a single light theme. If a dark mode exists, it was not analysed.

- **Animation and transition timings are not extracted.** The system may define easing curves, durations, or delay timings, but these are not available in the measured data.

- **Box-shadow / elevation is purely color-blocked.** No drop-shadow values appear in the component styles, confirming flatness, but no explicit "no shadows" rule is declared. If shadows are used elsewhere (e.g., modals, overlays), they are not documented here.

- **Surfaces behind authentication were not visited.** The extraction analysed the public landing page only. Logged-in or restricted areas may have different design rules.

- **Breakpoint names and specific pixel breakpoints are derived from observed viewport changes.** The system may have different internal breakpoint thresholds; use the measured table as guidance, but refine based on actual responsive testing.

- **Specific font fallback stacks are not declared.** Only "DieGrotesk" is named; no system font or web-safe fallback chain is provided in the stylesheets.