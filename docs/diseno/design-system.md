# Design System: The Luminescent Void

**Versión canónica** — Tech-Noir Editorial para vibeiscoding.com
Fuente de verdad: `diseño/homepage/code.html` + `diseño/DESIGN (1).md`

> Nota sobre divergencias: `diseño/single/code.html` usa un color scheme diferente (tonos naranja, border-radius cero, Inter como fuente de body). Esos valores se descartan. El sistema canónico es exclusivamente el del homepage/infopage.

---

## 1. Filosofía central

La pantalla no es un canvas plano: es un entorno presurizado donde la información se renderiza en luz. El fondo negro puro (#000000) permite que los acentos fuchsia/violet/cyan vibren con intensidad máxima.

**Principios irrenunciables:**

- **The No-Line Rule**: Prohibido usar bordes de 1px sólidos para seccionar. Las fronteras se definen únicamente por cambios de color de fondo.
- **Tonal Layering**: La profundidad se crea apilando capas de superficie, nunca con sombras negras.
- **The Void**: El espacio vacío es un elemento de diseño activo. No llenar.
- **Intentional Asymmetry**: Layouts asimétricos donde la tipografía de display se opone al espacio negativo.

---

## 2. Colores

### 2.1 Paleta principal

| Token | Valor hex | Cuándo usar |
|-------|-----------|-------------|
| `primary` | `#ff89ac` | Color de acento primario. Íconos activos, links de énfasis, tinte de sombras en botones primarios |
| `primary-dim` | `#e30071` | Extremo oscuro del gradiente de botón primario. También hover del botón de newsletter |
| `primary-fixed` | `#ff709e` | Variante media. Usada en labels de sección y bordes decorativos sutiles |
| `primary-fixed-dim` | `#ff5191` | Subtítulos de features dentro de bento grid |
| `primary-container` | `#ff709e` | Background de chips de categoría con color de acento |
| `secondary` | `#ac8aff` | Acciones secundarias, nav links en hover, íconos secundarios, chips sin seleccionar en hover |
| `secondary-dim` | `#8455ef` | Indicador pulsante de status, elementos de énfasis secundario en sidebar |
| `secondary-container` | `#5516be` | Background de chips activos/seleccionados (filtro "All"), badge de codename en hero |
| `tertiary` | `#8ff5ff` | Spark del sistema. Data viz, success states, accents de alta precisión, separador decorativo en sidebar |
| `tertiary-dim` | `#00deec` | Variante oscura del cyan |
| `tertiary-container` | `#00eefc` | Background de chips de categoría con tono cyan |
| `error` | `#ff6e84` | Estados de error en formularios, numeración de problemas en bento |
| `error-container` | `#a70138` | Background de contenedores de error |
| `error-dim` | `#d73357` | Variante dim del error |
| `outline` | `#757575` | Bordes fantasma opcionales (solo para accesibilidad) |
| `outline-variant` | `#484848` | Ghost border para separadores mínimos (usar a 10-20% de opacidad) |

### 2.2 Jerarquía de superficie (Surface Hierarchy)

| Nivel | Token | Valor hex | Descripción |
|-------|-------|-----------|-------------|
| L0 | `surface-container-lowest` | `#000000` | El vacío. Fondo más profundo. Background del body |
| L1 | `surface` / `background` | `#0e0e0e` | Plano principal de contenido. Secciones como el filtro bar |
| L1b | `surface-dim` | `#0e0e0e` | Equivalente al surface, para estados dim |
| L2a | `surface-container-low` | `#131313` | Cards secundarias, secciones de nivel bajo. Background del newsletter |
| L2b | `surface-container` | `#191919` | Cards estándar del project grid |
| L2c | `surface-container-high` | `#1f1f1f` | Chips sin seleccionar en el nav, estados elevados |
| L3a | `surface-container-highest` | `#262626` | Overlays activos, tooltips, el botón de búsqueda en navbar |
| L3b | `surface-variant` | `#262626` | Alias de L3a |
| L3c | `surface-bright` | `#2c2c2c` | Elementos flotantes con fondo glassmorphism |
| `surface-tint` | `#ff89ac` | Token para tintado de superficie (igual al primary) |

### 2.3 Colores de texto (On-surface)

| Token | Valor hex | Uso |
|-------|-----------|-----|
| `on-surface` | `#ffffff` | Texto principal sobre fondos oscuros |
| `on-surface-variant` | `#ababab` | Texto secundario, descripciones, metadatos |
| `on-background` | `#ffffff` | Texto sobre background |
| `on-primary` | `#62002d` | Texto sobre primary (contraste para uso en badges) |
| `on-primary-fixed` | `#000000` | Texto sobre botones primarios (gradient button) |
| `on-secondary` | `#280067` | Texto sobre secondary |
| `on-secondary-container` | `#d9c8ff` | Texto claro sobre secondary-container (chips seleccionados) |
| `on-tertiary` | `#005d63` | Texto sobre tertiary |
| `inverse-on-surface` | `#555555` | Texto sobre superficies inversas |

### 2.4 Estados semánticos

| Estado | Token | Valor hex | Uso |
|--------|-------|-----------|-----|
| Error | `error` | `#ff6e84` | Labels de error, numeración en problem lists |
| Error bg | `error-container` | `#a70138` | Background de mensajes de error |
| Success | (usar `tertiary`) | `#8ff5ff` | Indicadores de éxito, check states |
| Warning | (usar `primary-fixed`) | `#ff709e` | Alertas de atención media |

### 2.5 Regla de sombras con tinte

**Nunca** usar `box-shadow` con negro o gris. Siempre tintado con el color de acento del elemento:

```css
/* Botón primario — glow fuchsia */
box-shadow: 0 0 30px rgba(255, 0, 128, 0.3);

/* Card en hover */
box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);  /* excepción: cards usan negro puro pero muy difuso */

/* Navbar ambient */
box-shadow: 0 0 20px rgba(255, 0, 128, 0.1);

/* Sombra de botón flotante — extra difusa */
/* blur: 24-40px, opacity: 4-8%, tintada con primary */
```

---

## 3. Tipografía

### 3.1 Fuente

**Lexend** exclusivamente para todos los roles (`headline`, `body`, `label`).
Importación: `https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap`
En Next.js: `next/font/google` con `subsets: ['latin']`.

```ts
// layout.tsx
import { Lexend } from 'next/font/google'
const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' })
```

### 3.2 Escala tipográfica completa

| Nivel | Clase semántica | font-size | font-weight | line-height | letter-spacing | Cuándo usar |
|-------|----------------|-----------|-------------|-------------|----------------|-------------|
| Display LG | `text-8xl` | 6rem (96px) | 900 (black) | 1 (none) | -0.02em (tighter) | Hero principal de homepage en viewport XL |
| Display MD | `text-7xl` / `text-8xl` | 4.5–6rem | 900 | 1 | -0.02em | Hero en mobile/tablet, about hero |
| Display SM | `text-6xl` | 3.75rem (60px) | 900 | 1 | tight | Títulos de páginas secundarias |
| Headline LG | `text-5xl` | 3rem (48px) | 900 (black) | 1.1 | tighter | Newsletter heading, títulos de sección grandes |
| Headline MD | `text-4xl` | 2.25rem (36px) | 900 | 1.1 | tighter | MVP Features heading, subtítulos prominentes |
| Title LG | `text-3xl` | 1.875rem (30px) | 900 (black) | 1.25 | tight | Headings de bloques bento (Overview, The Problem) |
| Title MD | `text-2xl` | 1.5rem (24px) | bold (700) | 1.3 | tight | Project card titles |
| Title SM | `text-xl` | 1.25rem (20px) | bold (700) | 1.4 | widest | Tech Stack heading, sidebar headings |
| Body LG | `text-xl` | 1.25rem | light (300) | relaxed (1.625) | normal | Párrafos principales del bento overview |
| Body MD | `text-lg` | 1.125rem (18px) | light (300) / normal | relaxed | normal | Descripciones del hero, párrafos del about |
| Body SM | `text-sm` | 0.875rem (14px) | light (300) | relaxed | normal | Descripciones de cards, texto secundario general |
| Label LG | `text-sm` | 0.875rem (14px) | bold (700) | normal | `tracking-widest` (0.1em) | Nav links, CTA button text, breadcrumbs |
| Label MD | `text-xs` | 0.75rem (12px) | bold (700) | normal | `tracking-widest` / `tracking-wider` | Chip labels, badges de categoría, meta info |
| Label SM | `text-[10px]` | 0.625rem (10px) | bold (700) | normal | `tracking-[0.2em]` / `tracking-[0.3em]` | Footer text, micro-labels de sección, eyebrow labels |

**Patrones editoriales clave:**

- **UPPERCASE** en casi todos los elementos interactivos y labels: `uppercase`
- **Italic** para énfasis editorial en headings grandes: `italic`
- **Black weight** (900) para display — nunca menos de 700 en headings
- **Light weight** (300) para body text — contraste con los headings black

---

## 4. Spacing

Escala base Tailwind (4px = 1 unit). Valores más usados en el sistema:

| Token Tailwind | px | Uso principal |
|---------------|----|---------------|
| `gap-2` | 8px | Gap entre badges/chips pequeños |
| `gap-3` | 12px | Gap entre items de lista en bento |
| `gap-4` | 16px | Gap estándar entre elementos de formulario, iconos + texto |
| `gap-8` | 32px | Gap entre cards en el grid, entre secciones del navbar |
| `gap-12` | 48px | Gap entre columnas principales del layout |
| `gap-16` | 64px | Gap entre secciones del about |
| `p-6` | 24px | Padding de cards secundarias y sidebar items |
| `p-8` | 32px | Padding interior de project cards |
| `p-10` | 40px | Padding de bloques bento medianos |
| `p-12` | 48px | Padding del newsletter section y bento features |
| `px-6 py-4` | 24/16px | Padding del navbar |
| `px-8 md:px-16` | 32/64px | Padding horizontal de secciones principales |
| `py-12` | 48px | Padding vertical del filter bar |
| `py-24` | 96px | Padding vertical estándar de secciones de contenido |
| `pt-24` | 96px | Padding top del main (compensa navbar fixed) |
| `max-w-7xl mx-auto` | 80rem | Contenedor máximo de contenido |
| `max-w-4xl mx-auto` | 56rem | Contenedor de secciones centradas (newsletter, hero copy) |

---

## 5. Border Radius

El sistema usa radios muy pequeños para crear la estética "brutalist-tech". No bordes redondeados genéricos.

| Contexto | Token Tailwind | Valor | Nota |
|----------|---------------|-------|------|
| Default (botones, inputs, cards grid) | `rounded-md` | `0.375rem` (6px) | Botón primario del hero, newsletter button |
| Cards de contenido | `rounded-lg` | `0.25rem` (4px) | Project cards del grid |
| Chips de categoría | `rounded-full` | `0.75rem` (12px) | Filter chips, badge pequeños |
| Contenedor glassmorphism | `rounded-xl` | `0.5rem` (8px) | Newsletter glass panel del about |
| Avatares / indicadores | `rounded-full` | `9999px` | Indicadores de status pulsantes, social icons |
| Inputs | `rounded-md` | `0.375rem` (6px) | Newsletter input |
| Bento blocks | (sin clase) | `0` / `rounded-lg` | Los bloques bento del single usan 0 o mínimo |

**Config en `tailwind.config.ts`:**
```ts
borderRadius: {
  DEFAULT: "0.125rem",   // 2px — baseline "almost square"
  lg: "0.25rem",         // 4px
  xl: "0.5rem",          // 8px
  full: "0.75rem",       // 12px (usado en chips)
  // 9999px disponible via rounded-[9999px] para indicadores circulares
}
```

---

## 6. Shadows y Glows

### 6.1 Principio base

La luz tintada simula el reflejo de un neón sobre una superficie oscura. Nunca negro puro.

### 6.2 Catálogo de sombras/glows

```css
/* Navbar ambient glow */
shadow-[0_0_20px_rgba(255,0,128,0.1)]

/* Botón primario en hover — fuchsia glow */
hover:shadow-[0_0_30px_rgba(255,0,128,0.3)]

/* Card hover — sombra difusa oscura (excepción al tinte) */
hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]

/* Input focus ring */
focus:ring-2 focus:ring-primary focus:border-transparent

/* Texto glow (glow-text del about hero) */
text-shadow: 0 0 20px rgba(255, 0, 128, 0.5);  /* CSS puro, no Tailwind */

/* Indicador pulsante con glow naranja/secondary */
shadow-[0_0_10px_#ff4d00]   /* en single, descartar */
/* Canónico: */
animate-pulse + bg-secondary (violet)
```

### 6.3 Focus states

Para todos los elementos interactivos:

```html
focus:ring-2 focus:ring-primary focus:ring-offset-surface focus:border-transparent outline-none
```

### 6.4 Ghost Border (fallback de accesibilidad)

Cuando se necesita un borde por accesibilidad:

```html
border border-outline-variant/20   <!-- o /10 -->
```

Nunca usar `border-outline-variant` al 100% de opacidad.

---

## 7. Glassmorphism

### 7.1 Especificación

El glassmorphism se usa para elementos flotantes (navbar, modales, newsletter panel del about).

| Propiedad | Valor canónico |
|-----------|---------------|
| `background` | `rgba(14, 14, 14, 0.7)` — surface (#0e0e0e) al 70% |
| `backdrop-filter` | `blur(20px)` — navbar y glass panels principales |
| `backdrop-filter` (ligero) | `blur(12px)` — about glass panel, variante más sutil |
| Clase CSS | `.glass-panel` |
| En Tailwind | `bg-black/80 backdrop-blur-xl` (navbar) |

### 7.2 Implementación

**Clase CSS global** (para añadir a `globals.css`):

```css
.glass-panel {
  background: rgba(14, 14, 14, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
```

**Variante en Tailwind:**

```html
<!-- Navbar -->
<nav class="bg-black/80 backdrop-blur-xl">

<!-- Newsletter panel (about page) -->
<div class="glass-panel rounded-xl">

<!-- Gradiente radial de fondo en el panel -->
<div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,0,128,0.15),transparent_60%)]">
```

### 7.3 Regla

Los colores `secondary` (violet) y `tertiary` (cyan) del fondo deben poder "sangrar" a través del blur. No usar fondos completamente opacos en overlays.

---

## 8. Gradientes

### 8.1 Gradient text (vibe-gradient-text)

```css
/* CSS puro */
.vibe-gradient-text {
  background: linear-gradient(to right, #ff89ac, #ac8aff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Variante extendida (about hero: fuchsia → violet → cyan) */
bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent
```

### 8.2 Gradient button

```html
<button class="bg-gradient-to-r from-primary to-primary-dim ...">
```

De `#ff89ac` a `#e30071` — siempre de izquierda a derecha.

### 8.3 Hero background overlay

```html
<!-- Sobre el video/imagen de fondo -->
<div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
<div class="absolute inset-0 bg-black/40"></div>
```

### 8.4 Radial gradients decorativos

```html
<!-- Fondo del about hero -->
<div class="bg-[radial-gradient(circle_at_20%_30%,#ff0080_0%,transparent_50%)]">

<!-- Newsletter glass panel glow -->
<div class="bg-[radial-gradient(circle_at_50%_120%,rgba(255,0,128,0.15),transparent_60%)]">
```

---

## 9. Selection & Interacción global

```html
<!-- Body selection -->
<body class="selection:bg-primary selection:text-on-primary">

<!-- Hover transiciones estándar -->
transition-colors         <!-- para cambios de color -->
transition-all            <!-- para hover con scale/shadow -->
duration-300              <!-- duración por defecto -->
duration-500              <!-- para transiciones lentas (image zoom) -->

<!-- Scale en activo -->
active:scale-90   <!-- botones del navbar -->
scale-95          <!-- botones antes de interacción -->
hover:scale-95    <!-- botones de subscribe -->
```

---

## 10. Tailwind Config completo

Bloque listo para pegar en `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // === ACCENTOS PRIMARIOS ===
        'primary':                   '#ff89ac',
        'primary-dim':               '#e30071',
        'primary-fixed':             '#ff709e',
        'primary-fixed-dim':         '#ff5191',
        'primary-container':         '#ff709e',
        'on-primary':                '#62002d',
        'on-primary-fixed':          '#000000',
        'on-primary-fixed-variant':  '#5d002b',
        'on-primary-container':      '#4c0022',
        'inverse-primary':           '#bc005c',

        // === SECUNDARIO (VIOLET) ===
        'secondary':                 '#ac8aff',
        'secondary-dim':             '#8455ef',
        'secondary-fixed':           '#dac9ff',
        'secondary-fixed-dim':       '#ceb9ff',
        'secondary-container':       '#5516be',
        'on-secondary':              '#280067',
        'on-secondary-fixed':        '#40009b',
        'on-secondary-fixed-variant':'#5f28c8',
        'on-secondary-container':    '#d9c8ff',

        // === TERCIARIO (CYAN) ===
        'tertiary':                  '#8ff5ff',
        'tertiary-dim':              '#00deec',
        'tertiary-fixed':            '#00eefc',
        'tertiary-fixed-dim':        '#00deec',
        'tertiary-container':        '#00eefc',
        'on-tertiary':               '#005d63',
        'on-tertiary-fixed':         '#003f43',
        'on-tertiary-fixed-variant': '#005e64',
        'on-tertiary-container':     '#005359',

        // === SUPERFICIES (THE VOID) ===
        'surface-container-lowest':  '#000000',  // L0 — el vacío
        'surface':                   '#0e0e0e',  // L1
        'background':                '#0e0e0e',  // alias de surface
        'surface-dim':               '#0e0e0e',
        'surface-container-low':     '#131313',  // L2a
        'surface-container':         '#191919',  // L2b — cards estándar
        'surface-container-high':    '#1f1f1f',  // L2c
        'surface-container-highest': '#262626',  // L3
        'surface-variant':           '#262626',  // alias L3
        'surface-bright':            '#2c2c2c',  // elementos flotantes
        'surface-tint':              '#ff89ac',  // tinte de superficie

        // === TEXTO ===
        'on-surface':                '#ffffff',
        'on-surface-variant':        '#ababab',
        'on-background':             '#ffffff',
        'inverse-surface':           '#f9f9f9',
        'inverse-on-surface':        '#555555',

        // === BORDES ===
        'outline':                   '#757575',
        'outline-variant':           '#484848',

        // === ERROR ===
        'error':                     '#ff6e84',
        'error-dim':                 '#d73357',
        'error-container':           '#a70138',
        'on-error':                  '#490013',
        'on-error-container':        '#ffb2b9',
      },

      fontFamily: {
        'sans':     ['Lexend', 'sans-serif'],
        'headline': ['Lexend', 'sans-serif'],
        'body':     ['Lexend', 'sans-serif'],
        'label':    ['Lexend', 'sans-serif'],
      },

      borderRadius: {
        DEFAULT: '0.125rem',  // 2px — baseline tech-noir
        lg:      '0.25rem',   // 4px — cards
        xl:      '0.5rem',    // 8px — glass panels
        full:    '0.75rem',   // 12px — chips
        // Para círculos perfectos usar rounded-[9999px]
      },

      // Animaciones custom
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

export default config
```

---

## 11. CSS global (globals.css)

Añadir junto con el config de Tailwind:

```css
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');

/* Selección de texto */
::selection {
  background-color: #ff89ac;
  color: #000000;
}

/* Glass panel reutilizable */
.glass-panel {
  background: rgba(14, 14, 14, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Gradient text utilitario */
.vibe-gradient-text {
  background: linear-gradient(to right, #ff89ac, #ac8aff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glow text (uso en about hero) */
.glow-text {
  text-shadow: 0 0 20px rgba(255, 0, 128, 0.5);
}

/* Material Symbols config */
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  vertical-align: middle;
}

body {
  background-color: #000000;
  color: #ffffff;
  font-family: 'Lexend', sans-serif;
}
```

---

## 12. Do's y Don'ts

### Do
- Usar `#000000` puro para el fondo más profundo — maximiza el contraste de los acentos
- Usar `tertiary` (cyan) para elementos de alta precisión: puntos de notificación, valores numéricos de data
- Abbrazr el void: el espacio vacío es un elemento de diseño activo
- Usar `uppercase` para casi todos los labels, chips y botones
- Tintado de sombras con el color de acento del elemento que las emite
- Asymmetría intencional en layouts de hero y about

### Don't
- No usar líneas divisoras de 1px. Usar spacing (`gap-12`, `py-16`) para separar
- No usar sombras negras o grises puras — siempre tintadas
- No usar `border-radius` genérico — el sistema tiene una escala muy específica
- No usar fuentes distintas a Lexend (descartar Inter del single page)
- No usar contenedores completamente opacos en modales — siempre backdrop-blur
- No usar border-radius cero (del single page) — ese es el sistema descartado
- No abusar del cyan — es el "spark", usar con moderación
