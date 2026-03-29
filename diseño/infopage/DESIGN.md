# Design System Specification

## 1. Overview & Creative North Star: The Luminescent Void
This design system is anchored in a "Tech-Noir Editorial" aesthetic. Our Creative North Star is **The Luminescent Void**. We treat the screen not as a flat canvas, but as a deep, pressurized environment where information is rendered in light. 

To break the "standard template" look, we intentionally move away from rigid, boxed grids. We embrace **intentional asymmetry**—offsetting large display type against negative space—and **overlapping elements** that break container boundaries. By utilizing the pure `#000000` base, we allow our new fuchsia, violet, and cyan accents to vibrate with high-energy intensity, creating a digital experience that feels premium, cinematic, and authoritative.

---

## 2. Colors: High-Energy Tech-Noir
The palette is a transition from absolute darkness into hyper-saturated light. We utilize the Material Design convention to manage depth and state.

### Core Palette
*   **Primary (Fuchsia):** `#ff89ac` (Light) / `#ff0080` (Core). Use for high-action CTAs and critical brand moments.
*   **Secondary (Vibrant Violet):** `#ac8aff`. Extracted from the gradient to provide a tonal bridge between fuchsia and cyan. Use for supporting interactive elements and secondary actions.
*   **Tertiary (Electric Cyan):** `#8ff5ff`. The "spark" of the system. Use sparingly for data visualization, success states, or high-tech accents.
*   **Neutral (The Void):** Base `#000000` with `surface` at `#0e0e0e`.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface_container_low` section should sit directly against a `surface` background to create a visible but borderless edge.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Each inner container should use a slightly higher or lower tier to define its importance:
*   **Level 0:** `surface_container_lowest` (#000000) - The deep background.
*   **Level 1:** `surface` (#0e0e0e) - The main content plane.
*   **Level 2:** `surface_container` (#191919) - Standard cards or modules.
*   **Level 3:** `surface_container_highest` (#262626) - Elevated overlays or active states.

### The "Glass & Gradient" Rule
To achieve a custom, high-end feel, use **Glassmorphism** for floating elements (drawers, modals, tooltips). Use semi-transparent surface colors with a `backdrop-blur` of 12px–20px. For primary CTAs, avoid flat fills; use a subtle linear gradient transitioning from `primary` (#ff89ac) to `primary_dim` (#e30071) to provide visual "soul."

---

## 3. Typography: The Lexend Scale
We use **Lexend** exclusively. Its geometric clarity matches the tech-noir theme, but we apply it with editorial weight to avoid a "bootstrap" look.

*   **Display (LG/MD/SM):** Use for hero headers and impact statements. These should often be set with tight letter-spacing (-0.02em) to feel like high-fashion mastheads.
*   **Headline & Title:** Used for section headers. Leverage the `headline-lg` (2rem) to create a clear entry point for the eye.
*   **Body (LG/MD/SM):** Set in `body-md` (0.875rem) for most retail descriptions. The generous x-height of Lexend ensures readability against dark backgrounds.
*   **Label:** Used for technical metadata. Use `label-sm` (0.6875rem) in uppercase with increased letter-spacing (+0.05em) for a "pro-tool" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
In this system, light is the only thing that creates depth. Shadows are not "darkness"; they are "occlusion of light."

*   **The Layering Principle:** Stack `surface_container` tiers to create lift. Place a `surface_container_high` card on a `surface_container_low` background. This creates a soft, natural edge without a line.
*   **Ambient Shadows:** For floating elements (e.g., primary action buttons), shadows must be extra-diffused. Use a blur of 24pt-40pt with only 4%-8% opacity. Use a tinted shadow (using the `primary` color) to simulate the glow of a neon light reflecting on a dark surface.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline_variant` token at **10-20% opacity**. Never use 100% opaque borders.
*   **Backdrop Blur:** Use blurs on all overlays to allow the vibrant `secondary` (Violet) and `tertiary` (Cyan) colors to bleed through from the background, softening the layout's edges.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_dim`). Roundedness: `md` (0.375rem). Use `on_primary` for text.
*   **Secondary:** Ghost style with a `secondary` text color and the "Ghost Border" (20% opacity `outline_variant`). 
*   **Tertiary/Glass:** Semi-transparent `surface_bright` with a 12px backdrop-blur.

### Cards
Cards must have no borders. Use `surface_container` for the card body. To separate content within a card, use vertical white space (Spacing: `8` or `10`) rather than horizontal rules.

### Input Fields
*   **Resting:** `surface_container_high` background, no border.
*   **Focus:** Apply a 1px `primary` border and a soft `primary` outer glow (4px blur, 20% opacity).
*   **Error:** Use the `error` token (#ff6e84) for the label and a subtle `error_container` fill.

### Chips
Use selection chips to filter retail categories. Use `secondary_container` for the background and `on_secondary_container` for the text to create a vibrant, tech-heavy look.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts where text is pushed to one side and imagery/gradients bleed off the other.
*   **Do** use the `tertiary` (Cyan) color for small, high-precision elements like notification dots or price tags.
*   **Do** embrace pure black (#000000) for the `surface_container_lowest` to maximize the contrast of the neon accents.

### Don't
*   **Don't** use 1px solid white or grey divider lines. Use spacing (`12` or `16`) to create separation.
*   **Don't** use standard "drop shadows" (black/grey). Always tint your shadows with the accent color of the element.
*   **Don't** crowd the interface. This design system requires "The Void" (empty space) to feel premium.
*   **Don't** use fully opaque containers for modals; always incorporate a backdrop blur to maintain the "Glassmorphism" effect.