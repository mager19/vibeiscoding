# Design System Document: Tech-Noir Intelligence

## 1. Overview & Creative North Star
**Creative North Star: The Obsidian Nexus**
This design system is a manifestation of "Tech-Noir" precision. It moves beyond standard dashboard design to create a high-stakes, editorial experience that feels like a redacted intelligence briefing or a futuristic command center. We achieve this by rejecting the soft, rounded "SaaS" aesthetic in favor of **Zero-Radius Brutalism**.

The visual language is defined by high-contrast "neon-on-ink" palettes, intentional asymmetry, and a deep architectural layering system. We break the grid using "floating" oversized typography and overlapping visual containers that evoke a sense of professional depth and elite retail intelligence.

---

## 2. Colors & Surface Logic

### The Palette
The core of this system is the interplay between "The Void" (Obsidian Black) and high-energy neon signals.
- **Primary (#ffb1c5 / #ff0080):** Fuchsia pulse. Used for high-priority data points and primary CTAs.
- **Secondary (#ffb59e / #ff4d00):** Electric Orange. Used for critical alerts, trend shifts, and accent highlights.
- **Neutral Surface (#131313):** The foundation. Deep, obsidian-textured obsidian.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. Structural boundaries must be defined through:
1. **Background Tonal Shifts:** Placing a `surface_container_high` (#2a2a2a) element against a `surface` (#131313) base.
2. **The Glowing Rim:** Use a 1px inner-glow or outer-glow (0px spread, 1-2px blur) using the `primary` or `secondary` tokens at 30% opacity to define an edge.

### The "Glass & Gradient" Rule
To add "soul" to the tech-noir aesthetic, use gradients sparingly.
- **CTA Gradients:** Transition from `primary` (#ffb1c5) to `primary_container` (#ff4a8e) at a 45-degree angle.
- **Glassmorphism:** For floating modals or "Head-Up Display" (HUD) elements, use `surface_container_highest` at 60% opacity with a `backdrop-blur` of 20px.

---

## 3. Typography
We use a dual-font approach to balance authoritative data with modern tech-savviness.

- **Display & Headlines (Lexend):** A geometric sans-serif that feels engineered. Use `display-lg` (3.5rem) with negative letter-spacing (-0.02em) for hero moments. Use `headline-md` (1.75rem) for section titles.
- **UI & Data (Inter):** The workhorse. Inter provides extreme legibility for high-density retail data. Use `label-md` (0.75rem) for metadata and `body-md` (0.875rem) for general descriptions.
- **Editorial Hierarchy:** Headlines should often overlap visual elements or be placed with intentional asymmetry to avoid the "boxed-in" template look.

---

## 4. Elevation & Depth

### The Layering Principle
Hierarchy is achieved by "stacking" the surface-container tiers. 
- **Base Layer:** `surface` (#131313)
- **Secondary Layouts:** `surface_container_low` (#1b1b1b)
- **Active Cards/Panels:** `surface_container_high` (#2a2a2a)

### Ambient Neon Shadows
Standard grey drop shadows are forbidden. To create lift, use **Ambient Neon Glows**:
- **Technique:** Use a shadow color tinted with the `primary` or `tertiary` token.
- **Settings:** Blur: 40px–80px, Opacity: 4%–8%. This simulates the light emitted from a neon screen onto a dark surface.

### The "Ghost Border" Fallback
If accessibility requires a container edge, use a "Ghost Border": the `outline_variant` token (#5c3f46) at 20% opacity. Never use 100% opaque lines.

---

## 5. Components

### Buttons
- **Primary:** Sharp 0px corners. Background: `primary_container` gradient. Text: `on_primary_fixed` (Deep Pink-Black).
- **Secondary:** Transparent background with a 1px "Ghost Border" in `secondary`.
- **States:** On hover, primary buttons should "ignite," increasing the brightness of the fuchsia/orange gradient and adding a 5px outer glow.

### Input Fields
- **Styling:** Zero radius. Background `surface_container_lowest`. 
- **Focus State:** Instead of a border change, the bottom edge should illuminate with a 2px `primary` neon line that spans the width of the input.

### Cards & Intelligence Panels
- **Layout:** Forbid divider lines. Use `surface_container` shifts to separate header from content.
- **Visuals:** Incorporate subtle scanline textures or noise overlays at 2% opacity to enhance the "tech-noir" vibe.

### Signature Component: The "Data Pulse"
A small, glowing dot using `secondary` (Electric Orange) with an infinite "ripple" animation, used to indicate live-tracking retail metrics or active sensor data.

---

## 6. Do's and Don'ts

### Do
- **DO** use sharp 0px corners for everything (buttons, cards, inputs).
- **DO** use oversized, high-contrast typography to create an editorial "magazine" feel.
- **DO** embrace the dark. Ensure at least 80% of the UI remains in the Obsidian Black range.
- **DO** use the `secondary` orange accent strictly for "Calls to Intelligence" or critical data warnings.

### Don't
- **DON'T** use rounded corners. Even a 2px radius breaks the "Obsidian Nexus" aesthetic.
- **DON'T** use standard grey shadows. Shadows must be either non-existent or neon-tinted.
- **DON'T** use 1px solid white/grey dividers to separate content. Use vertical whitespace (`spacing.16`) or background color shifts.
- **DON'T** use more than three neon colors in a single view. The "Tech-Noir" look relies on restricted, intentional color pops.