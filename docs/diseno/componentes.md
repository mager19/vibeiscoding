# Inventario de Componentes — vibeiscoding.com

Design System: **The Luminescent Void**
Stack: Next.js 14 + TypeScript + Tailwind CSS

---

## Índice

1. [Button](#1-button)
2. [GradientText](#2-gradienttext)
3. [GlassPanel](#3-glasspanel)
4. [Card](#4-card)
5. [LevelBadge](#5-levelbadge)
6. [Chip](#6-chip)
7. [Navbar](#7-navbar)
8. [Footer](#8-footer)
9. [Hero](#9-hero-homepage)
10. [ProjectHero](#10-projecthero-single-page)
11. [BentoGrid](#11-bentogrid)
12. [NewsletterSection](#12-newslettersection)
13. [FilterBar](#13-filterbar)
14. [Decisión de Iconos](#decisión-de-iconos)

---

## 1. Button

**Ruta sugerida:** `src/components/ui/Button.tsx`

### Variantes

| Variante | Descripción |
|----------|-------------|
| `gradient` | Botón primario con gradiente fuchsia → primary-dim. Para CTAs principales |
| `ghost` | Botón secundario con borde fantasma. Para acciones secundarias |
| `glass` | Botón con fondo glassmorphism. Para acciones terciarias dentro de paneles |
| `solid` | Variante sólida usando `bg-primary` sin gradiente. Para newsletter |

### Props

```ts
interface ButtonProps {
  variant?: 'gradient' | 'ghost' | 'glass' | 'solid'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode          // icono a la derecha
  iconPosition?: 'left' | 'right'
  className?: string
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  href?: string                   // si se usa como Link
}
```

### Descripción visual y comportamiento

**Variante `gradient` (primaria):**
- Fondo: gradiente `from-primary to-primary-dim` (de #ff89ac a #e30071), dirección izquierda a derecha
- Texto: `text-on-primary-fixed` (#000000), `font-bold`, `uppercase`, `tracking-widest`
- Border radius: `rounded-md` (6px)
- Padding: `px-10 py-4` (md), `px-6 py-2` (sm, navbar CTA)
- Hover: `hover:shadow-[0_0_30px_rgba(255,0,128,0.3)]` — glow fuchsia suave
- Hover opacity: `hover:opacity-90`
- Active: `active:scale-90` o `active:scale-95`
- Transition: `transition-all`

**Variante `ghost` (secundaria):**
- Fondo: transparente
- Borde: `border border-outline-variant` (#484848, 100%) — aquí sí se permite por ser un botón, no un divisor de sección
- Texto: `text-on-surface` (#ffffff), `font-bold`, `uppercase`, `tracking-widest`
- Hover: `hover:bg-surface-container-high` — relleno sutil oscuro
- Mismo border radius y padding que gradient

**Variante `glass` (terciaria/glass):**
- Fondo: `bg-surface-bright/50` con `backdrop-blur-sm` (blur de 12px)
- O directamente: clase `.glass-panel`
- Texto: `text-on-surface`, same typographic style
- Border: `border border-outline-variant/20`
- Hover: incremento leve de opacidad del fondo

**Variante `solid` (newsletter):**
- Fondo: `bg-primary` o `hover:bg-primary-dim`
- Sin gradiente, color plano

### Clases Tailwind

```tsx
// gradient
"bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed font-bold px-10 py-4 rounded-md hover:opacity-90 hover:shadow-[0_0_30px_rgba(255,0,128,0.3)] transition-all uppercase tracking-widest text-sm"

// ghost
"border border-outline-variant text-on-surface px-10 py-4 rounded-md font-bold text-sm tracking-widest hover:bg-surface-container-high transition-all uppercase"

// glass
"bg-surface-bright/50 backdrop-blur-sm border border-outline-variant/20 text-on-surface px-8 py-3 rounded-md font-bold text-sm tracking-widest transition-all uppercase"

// navbar CTA (gradient small)
"bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed font-bold px-6 py-2 rounded-md hover:opacity-90 transition-all scale-95 active:scale-90 uppercase tracking-widest text-xs"
```

### Notas de implementación

- Usar `next/link` internamente cuando se pase `href`
- Los íconos se pasan como Material Symbol strings o como componente Lucide
- El estado `disabled` debe bajar opacidad a 40% y deshabilitar pointer-events

---

## 2. GradientText

**Ruta sugerida:** `src/components/ui/GradientText.tsx`

### Variantes

| Variante | Descripción |
|----------|-------------|
| `primary` | Gradiente fuchsia → violet (#ff89ac → #ac8aff) — el más usado |
| `full` | Gradiente fuchsia → violet → cyan — para about hero y moments de énfasis máximo |

### Props

```ts
interface GradientTextProps {
  variant?: 'primary' | 'full'
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  children: React.ReactNode
}
```

### Descripción visual

- El texto aplica `background-clip: text` con un gradiente como fill
- No tiene color de texto convencional: el gradiente es el color
- Funciona sobre cualquier fondo oscuro — el fondo debe ser oscuro para que se lea bien
- En display sizes (text-6xl, text-8xl): se ve vibrante y de alta energía
- En title sizes: sirve como acento en una palabra clave dentro de un heading mayor

### Clases Tailwind

```tsx
// primary (fuchsia → violet)
"bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"

// full (fuchsia → violet → cyan)
"bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent"
```

### CSS global alternativo

```css
.vibe-gradient-text {
  background: linear-gradient(to right, #ff89ac, #ac8aff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Notas de implementación

- `text-transparent` en Tailwind es equivalente a `-webkit-text-fill-color: transparent`
- Asegurarse de que el elemento padre NO tenga `overflow: hidden` sobre el texto o el gradiente se cortará en algunos navegadores
- En `<span>` dentro de un `<h1>`: comportamiento normal, hereda el font-size del padre

---

## 3. GlassPanel

**Ruta sugerida:** `src/components/ui/GlassPanel.tsx`

### Variantes

| Variante | Descripción |
|----------|-------------|
| `default` | blur-xl (20px) — para elementos principales como newsletter |
| `subtle` | blur-md (12px) — para cards flotantes y aside panels |

### Props

```ts
interface GlassPanelProps {
  variant?: 'default' | 'subtle'
  className?: string
  children: React.ReactNode
  withGlow?: boolean    // añade radial gradient fuchsia en el fondo
  rounded?: 'lg' | 'xl' | 'none'
}
```

### Descripción visual

- Fondo semi-transparente que muestra el contenido debajo con blur
- Permite que los colores del fondo (fuchsia, violet) "sangren" a través del blur
- Borde muy sutil: `border border-outline-variant/10` o sin borde
- Cuando `withGlow={true}`: añade un radial gradient de fuchsia al 15% en la parte inferior del panel — efecto de "luz que emana desde abajo"
- El panel debe tener `position: relative` y `overflow: hidden` para contener los decorativos

### Clases Tailwind

```tsx
// default
"bg-black/70 backdrop-blur-xl relative overflow-hidden rounded-xl"

// subtle
"bg-[rgba(14,14,14,0.7)] backdrop-blur-md relative overflow-hidden rounded-lg"

// glow background decorator (hijo absoluto)
"absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,0,128,0.15),transparent_60%)]"
```

### Notas de implementación

- El `backdrop-filter` requiere que el elemento tenga un fondo con algo de transparencia (no `bg-black` puro)
- Safari requiere `-webkit-backdrop-filter` — el CSS global ya lo incluye
- Usar exclusivamente en elementos flotantes: navbar, modales, newsletter sections

---

## 4. Card

**Ruta sugerida:** `src/components/ui/Card.tsx`

### Variantes

| Variante | Descripción |
|----------|-------------|
| `project` | Card completa del project grid: imagen, badge de categoría, título, descripción, CTA |

### Props

```ts
interface CardProps {
  title: string
  description: string
  slug: string
  heroImage: string
  category: string         // "AI" | "Web" | "Mobile" | "Blockchain" | etc.
  level: 'principiante' | 'intermedio' | 'avanzado'
  categoryColor?: 'primary' | 'secondary' | 'tertiary'
}
```

### Descripción visual

**Estructura (top → bottom):**

1. **Imagen** (`aspect-video`, 16:9): la imagen ocupa el ancho completo de la card. En hover, hace zoom lento (`scale-105`, `duration-500`). La imagen está dentro de un `overflow-hidden`.
2. **Badge de categoría**: posicionado absolutamente sobre la imagen (`absolute top-4 left-4`). Pequeño label pill con texto UPPERCASE y `tracking-widest`. Color de fondo varía según la categoría (ver Chip y LevelBadge).
3. **Contenido** (`p-8`): espacio interior generoso. Usa `flex-col` para que el texto empuje el CTA al fondo.
4. **Título**: `text-2xl font-bold tracking-tight text-on-surface`. UPPERCASE no obligatorio en títulos de card, pero sí es el estilo del HTML de referencia.
5. **Descripción**: `text-sm font-light text-on-surface-variant leading-relaxed`. `flex-1` para empujar el link al fondo.
6. **CTA "READ MORE"**: `inline-flex items-center gap-2`, texto en el color del acento de la card, `text-xs font-bold tracking-[0.2em]`. Icono de flecha (`trending_flat` o `ArrowRight`) que se traslada +1 en hover con `group-hover/link:translate-x-1`.

**Card hover:**
- Sombra difusa: `hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]`
- `transition-all`
- El zoom de la imagen se activa automáticamente via `group-hover:scale-105`

**Fondo de la card:**
- `bg-surface-container` (#191919) — sin borde, la diferencia tonal con el fondo la define

### Clases Tailwind

```tsx
// Card wrapper
"group bg-surface-container rounded-lg overflow-hidden flex flex-col hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all"

// Contenedor imagen
"aspect-video w-full overflow-hidden relative"

// Imagen
"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"

// Badge overlay
"absolute top-4 left-4"

// Contenido
"p-8 space-y-4 flex-1 flex flex-col"

// Título
"text-2xl font-bold tracking-tight text-on-surface"

// Descripción
"text-on-surface-variant text-sm font-light leading-relaxed flex-1"

// Link CTA
"inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] group/link"

// Icono del link
"transition-transform group-hover/link:translate-x-1"
```

### Notas de implementación

- El color del CTA y el badge debe coincidir con la categoría/acento de la card (primary, secondary, tertiary)
- Usar `next/image` para la imagen con `fill` y `sizes`
- El `group/link` es un grupo Tailwind nombrado para aislar el hover del icono del hover de la card
- Incluir `LevelBadge` opcionalmente sobre la imagen o dentro del contenido

---

## 5. LevelBadge

**Ruta sugerida:** `src/components/ui/LevelBadge.tsx`

### Variantes

| Level | Color | Token |
|-------|-------|-------|
| `principiante` | Cyan | `bg-tertiary text-on-tertiary` |
| `intermedio` | Violet | `bg-secondary text-on-secondary` |
| `avanzado` | Fuchsia | `bg-primary text-on-primary-fixed` |

### Props

```ts
interface LevelBadgeProps {
  level: 'principiante' | 'intermedio' | 'avanzado'
  size?: 'sm' | 'md'
  className?: string
}
```

### Descripción visual

- Pill pequeño con texto UPPERCASE, `font-bold`, `tracking-widest`
- `text-[10px]` para tamaño sm, `text-xs` para md
- Padding: `px-3 py-1` (sm) / `px-4 py-1.5` (md)
- Border radius: `rounded` (usa el DEFAULT = 2px) — sharp, no redondeado
- Color de fondo pleno (no transparente), color de texto de alto contraste

### Clases Tailwind

```tsx
// principiante
"px-3 py-1 bg-tertiary text-on-tertiary text-[10px] font-bold uppercase tracking-widest rounded"

// intermedio
"px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest rounded"

// avanzado
"px-3 py-1 bg-primary text-on-primary-fixed text-[10px] font-bold uppercase tracking-widest rounded"
```

### Notas de implementación

- El orden de niveles va de menor a mayor dificultad: principiante (cyan/calmo) → intermedio (violet/medio) → avanzado (fuchsia/máxima energía). La escala de color comunica la intensidad.
- Se puede combinar con Chip en la misma card: el LevelBadge indica dificultad, el Chip indica categoría

---

## 6. Chip

**Ruta sugerida:** `src/components/ui/Chip.tsx`

### Variantes

| Variante | Descripción |
|----------|-------------|
| `active` | Chip seleccionado — fondo `secondary-container` prominente |
| `inactive` | Chip no seleccionado — fondo `surface-container` |
| `category-badge` | Badge de categoría sobre imagen de card (no interactivo) |

### Props

```ts
interface ChipProps {
  label: string
  active?: boolean
  onClick?: () => void
  variant?: 'filter' | 'badge'   // filter = interactivo, badge = decorativo
  accentColor?: 'primary' | 'secondary' | 'tertiary'  // para badge
}
```

### Descripción visual

**Filter chip (interactivo):**
- Forma: `rounded-full` (12px por config)
- Texto: `text-xs font-bold uppercase tracking-wider`
- Active: `bg-secondary-container text-on-secondary-container` — fondo violet oscuro, texto violet claro (#d9c8ff)
- Inactive: `bg-surface-container text-zinc-500 hover:text-secondary` — hover cambia solo el texto a violet

**Category badge (sobre imagen de card):**
- Igual al LevelBadge visualmente pero con el color de la categoría
- Variantes de color de fondo: primary, secondary, tertiary
- No interactivo (no tiene hover/active state)
- Se usa en la esquina superior izquierda de las imágenes de cards

### Clases Tailwind

```tsx
// active filter chip
"px-6 py-2 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-wider"

// inactive filter chip
"px-6 py-2 rounded-full bg-surface-container text-zinc-500 hover:text-secondary transition-colors text-xs font-bold uppercase tracking-wider"

// category badge (primary)
"px-3 py-1 bg-primary text-on-primary-fixed text-[10px] font-bold uppercase tracking-widest rounded"

// category badge (secondary)
"px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest rounded"

// category badge (tertiary)
"px-3 py-1 bg-tertiary text-on-tertiary text-[10px] font-bold uppercase tracking-widest rounded"
```

### Notas de implementación

- Los filter chips del FilterBar usan `rounded-full`
- Los category badges de las cards usan `rounded` (DEFAULT = 2px, sharp)
- La diferencia visual entre Chip y LevelBadge es principalmente contextual: misma morfología, distinta semántica

---

## 7. Navbar

**Ruta sugerida:** `src/components/layout/Navbar.tsx`

### Variantes

| Variante | Descripción |
|----------|-------------|
| `desktop` | Layout horizontal con logo, links, iconos y CTA |
| `mobile` | Logo + botón hamburger, drawer o menú desplegable |

### Props

```ts
interface NavbarProps {
  currentPath?: string   // para marcar el link activo
}
```

### Descripción visual

**Estructura (desktop, left → right):**
1. **Logo**: `VIBE IS CODING` / `VIBE_IS_CODING` — `text-[#ff0080]` (primary-dim/core), `font-black`, `tracking-tighter`, `uppercase`, `text-xl` a `text-2xl`
2. **Navigation links**: ocultos en mobile (`hidden md:flex`). `gap-8`, `font-medium`, `tracking-tight`. El link activo: `text-[#ff0080]` + `border-b-2 border-[#ff0080] pb-1`. Links inactivos: `text-zinc-400 hover:text-[#ac8aff]` (hover → violet)
3. **Acciones right**:
   - Botón de búsqueda: `bg-surface-container-highest` con ícono `search`. Hover: `hover:bg-[#191919]`
   - CTA button: variante `gradient` tamaño sm con texto "DECODE" o "Subscribe"

**Posicionamiento:**
- `fixed top-0 w-full z-50`
- Glassmorphism: `bg-black/80 backdrop-blur-xl`
- Shadow: `shadow-[0_0_20px_rgba(255,0,128,0.1)]`
- Padding: `px-8 py-4`

**Mobile:**
- Hamburger icon a la derecha (en lugar del CTA en mobile estrecho)
- Drawer lateral o menú dropdown con fondo glassmorphism
- Los links del nav se muestran verticalmente, con el mismo estilo pero `text-lg`

**Hover en links:**
- `hover:text-[#ac8aff]` (secondary/violet)
- `transition-colors`

### Clases Tailwind

```tsx
// nav wrapper
"fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl shadow-[0_0_20px_rgba(255,0,128,0.1)] flex justify-between items-center px-8 py-4"

// logo
"text-2xl font-black tracking-tighter text-[#ff0080] uppercase"

// nav links container
"hidden md:flex items-center gap-8 font-['Lexend'] tracking-tight font-medium"

// link activo
"text-[#ff0080] border-b-2 border-[#ff0080] pb-1"

// link inactivo
"text-zinc-400 hover:text-[#ac8aff] transition-colors"

// search button
"bg-surface-container-highest px-4 py-2 rounded-lg text-sm text-on-surface-variant hover:bg-[#191919] transition-all duration-300 scale-95 active:scale-90"
```

### Notas de implementación

- Usar `usePathname()` de Next.js para determinar el link activo
- El logo es un `Link` que apunta a `/`
- El `pt-24` en el `<main>` compensa el navbar fixed de `py-4` + altura del texto

---

## 8. Footer

**Ruta sugerida:** `src/components/layout/Footer.tsx`

### Props

```ts
interface FooterProps {
  // sin props externas — contenido estático del diccionario i18n
}
```

### Descripción visual

**Layout:** `flex flex-col md:flex-row justify-between items-center`

**Columna izquierda:**
- Wordmark: `VIBE_IS_CODING` (con underscores), `text-lg font-bold text-zinc-100`
- Copyright: `text-zinc-600`, `text-[10px]`, `uppercase`, `tracking-[0.2em]`

**Columna central:**
- Links de navegación secundaria: Privacy, Terms, Articles, etc.
- `text-zinc-600 hover:text-[#ff0080] transition-colors`
- `font-['Lexend'] text-[10px] uppercase tracking-[0.2em]`

**Columna derecha:**
- Iconos sociales: círculos pequeños `w-8 h-8 rounded-full border border-outline-variant`
- Hover: `hover:bg-primary/10 hover:border-primary` — el tinte de hover varía según el ícono (primary/secondary/tertiary)
- Íconos: `terminal`, `code`, `webhook` (Material Symbols) o equivalentes en Lucide

**Borde superior:**
- `border-t border-[#191919]` o `border-t border-white/5` — el divisor mínimo
- Fondo: `bg-[#000000]` puro

**Padding:**
- `px-12 py-16` (desktop) / `px-6 py-12` (mobile)

### Clases Tailwind

```tsx
// footer wrapper
"w-full border-t border-[#191919] bg-[#000000] flex flex-col md:flex-row justify-between items-center px-12 py-16 font-['Lexend'] text-[10px] uppercase tracking-[0.2em]"

// wordmark
"text-lg font-bold text-zinc-100 mb-2"

// copyright
"text-zinc-600"

// nav links
"text-zinc-600 hover:text-[#ff0080] transition-colors"

// social icon button
"w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all"
```

---

## 9. Hero (Homepage)

**Ruta sugerida:** `src/components/sections/Hero.tsx`

### Props

```ts
interface HeroProps {
  eyebrow?: string         // "Protocol v.4.0.1 // Active"
  title: string            // primera línea (plain)
  titleAccent: string      // segunda línea (con gradient)
  description: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  videoSrc?: string        // URL del video de fondo
  imageSrc?: string        // fallback si no hay video
}
```

### Descripción visual

**Fondo:**
- Sección full-width con `min-h-[870px]`
- Video loop autoplay muted en background con `object-cover`
- Double overlay: `bg-gradient-to-r from-black via-black/60 to-transparent` + `bg-black/40`
- Si no hay video: radial gradient decorativo de fuchsia

**Eyebrow label:**
- Pill pequeño: `bg-surface-container-highest border border-outline-variant/20 rounded-full`
- Texto: `text-[10px] uppercase tracking-[0.2em] text-secondary font-bold`

**Heading:**
- `text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase`
- Primera línea: blanco puro
- Segunda línea: `GradientText` variant `primary` (fuchsia → violet)

**Descripción:**
- `text-on-surface-variant text-lg md:text-xl max-w-2xl font-light leading-relaxed`

**CTA Row:**
- Flex wrap, `gap-4 pt-4`
- Primary: `Button` variant `gradient` con ícono `bolt`
- Secondary: `Button` variant `ghost`

**Posicionamiento del contenido:**
- `relative z-10 max-w-4xl space-y-8`
- Alineado a la izquierda, el video/gradiente sangra hacia la derecha

### Clases Tailwind

```tsx
// section wrapper
"relative min-h-[870px] flex items-center px-8 md:px-16 overflow-hidden bg-surface-container-lowest"

// video container
"absolute inset-0 z-0 overflow-hidden"

// video
"absolute min-w-full min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"

// overlay
"absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"

// content wrapper
"relative z-10 max-w-4xl space-y-8"

// heading
"text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase"
```

### Notas de implementación

- Usar `<video>` nativo con `autoPlay loop muted playsInline` para el video de fondo — Next.js no tiene un componente especial para video
- Para SEO: el `<h1>` debe contener el texto plano sin el span de gradient para `textContent` correcto
- En mobile el video puede impactar performance: considerar `poster` image como fallback

---

## 10. ProjectHero (Single Page)

**Ruta sugerida:** `src/components/sections/ProjectHero.tsx`

### Props

```ts
interface ProjectHeroProps {
  codename: string         // "Project Codename: Neural Orchestrator"
  title: string
  titleAccent: string      // palabra o frase con glow fuchsia
  description: string
  heroImage: string
  backHref?: string        // "/proyectos" para el back button
}
```

### Descripción visual

**Layout:**
- Full-width, `h-[614px]`, imagen como fondo con overlay
- Contenido posicionado en la parte inferior izquierda (`flex items-end pb-12`)

**Imagen de fondo:**
- `w-full h-full object-cover grayscale opacity-50 brightness-50`
- Overlay: `bg-gradient-to-t from-surface via-surface/40 to-transparent`

**Back button (sobre el hero):**
- Pequeño, `text-on-surface-variant hover:text-primary`
- Ícono `arrow_back` + texto "Return to Projects" (`uppercase tracking-widest text-xs`)

**Codename badge:**
- `bg-secondary-container text-on-secondary-container` — pill rectangular (sin border-radius o mínimo)
- `font-headline text-[10px] uppercase tracking-[0.2em] mb-4`

**Título:**
- `text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none`
- Palabra de acento: `text-neon-fuchsia` (color #ff0080 con text-shadow glow)

**Descripción:**
- Con `border-l-2 border-primary pl-6` — decoración de línea vertical fuchsia a la izquierda
- `text-on-surface-variant font-body text-lg max-w-2xl`

### Clases Tailwind

```tsx
// section
"relative w-full h-[614px] flex items-end px-6 pb-12 overflow-hidden"

// image overlay
"absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent z-10"

// image
"w-full h-full object-cover grayscale opacity-50 brightness-50"

// content wrapper
"relative z-30 max-w-7xl mx-auto w-full"

// codename badge
"inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-headline text-[10px] uppercase tracking-[0.2em] mb-4"

// title
"text-6xl md:text-8xl font-black font-headline uppercase tracking-tighter leading-none mb-4 max-w-4xl"

// title accent (custom class)
"text-[#ff0080] [text-shadow:0_0_8px_rgba(255,0,128,0.4)]"

// description
"text-on-surface-variant text-lg max-w-2xl border-l-2 border-primary pl-6"
```

### Notas de implementación

- La imagen debe ser `next/image` con `fill` y `priority` (above the fold)
- El text-shadow del título accent no es soportado nativamente por Tailwind — usar clase CSS custom o Tailwind arbitrary: `[text-shadow:0_0_8px_rgba(255,0,128,0.4)]`

---

## 11. BentoGrid

**Ruta sugerida:** `src/components/sections/BentoGrid.tsx`

El BentoGrid es el layout del single page. Agrupa múltiples bloques en un grid de 12 columnas con spans variables.

### Bloques del BentoGrid

#### 11.1 BentoOverview (col-span-8)

- Fondo: `bg-surface-container-low p-10`
- Ícono decorativo de fondo: `absolute top-0 right-0`, opacidad 10%, `text-8xl` — ícono `analytics` (filled)
- Heading: `text-3xl font-black uppercase tracking-tight` + barra vertical: `<span class="w-2 h-8 bg-primary inline-block mr-3">`
- Cuerpo: párrafos con `text-xl leading-relaxed` (intro) y `text-on-surface-variant leading-relaxed` (detalle)

#### 11.2 BentoTechStack (col-span-4)

- Fondo: `bg-surface-container-high p-8`
- Heading: `text-xl font-bold uppercase tracking-widest text-secondary`
- Tech pills: `px-4 py-2 bg-surface-container-lowest border border-secondary/30 text-secondary font-label text-xs uppercase tracking-widest hover:bg-secondary hover:text-on-secondary-fixed transition-all cursor-default`
- Status indicator (bottom): punto pulsante `w-3 h-3 bg-secondary rounded-full animate-pulse` + texto label

#### 11.3 BentoProblem (col-span-6)

- Fondo: `bg-surface-container p-10`
- Heading: `text-3xl font-black uppercase tracking-tight`
- Items numerados: número en `text-error font-headline text-xl` + descripción en `text-on-surface-variant`

#### 11.4 BentoSolution (col-span-6)

- Fondo: `bg-primary-container/10 p-10 border-l border-primary/30`
- Heading: `text-3xl font-black uppercase tracking-tight text-primary`
- Lista con iconos `bolt` (filled) en `text-primary`

#### 11.5 BentoFeatures (col-span-12)

- Fondo: `bg-surface-container-high p-12`
- Header row: heading `text-4xl font-black uppercase tracking-tighter` con versión `text-primary` para una palabra + versión label `opacity-50`
- Grid interno: 3 columnas, heading de sub-sección en `text-sm uppercase tracking-widest text-primary-fixed-dim`
- Items con `check_box` icon en `text-primary text-xl`

#### 11.6 BentoCTA (col-span-12)

- Fondo: `bg-secondary-container p-12`
- Layout: `flex flex-col md:flex-row items-center justify-between`
- Heading: `text-4xl font-black uppercase tracking-tighter text-on-secondary-container`
- Descripción: `text-on-secondary-container/80`
- Botón: `bg-surface text-on-surface px-10 py-5 font-headline uppercase text-sm font-bold tracking-[0.2em] hover:bg-black hover:text-secondary transition-all flex items-center gap-3`

### Props del BentoGrid

```ts
interface BentoGridProps {
  overview: string
  overviewDetail: string
  techStack: string[]
  problems: string[]
  solutions: string[]
  features: {
    category: string
    items: string[]
  }[]
  ctaTitle: string
  ctaDescription: string
  ctaHref: string
}
```

### Clases del grid wrapper

```tsx
"max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-12 gap-8"
```

### Notas de implementación

- Cada bloque bento es un sub-componente separado para facilitar composición
- Los `col-span-X` solo aplican en `md:` y arriba — en mobile son todos full-width (`col-span-1`)
- La barra vertical del heading (Overview) es un `<span>` decorativo inline, no un borde CSS
- Los bloques NO tienen border-radius (o mínimo `rounded-lg`) — estética más severa que las cards

---

## 12. NewsletterSection

**Ruta sugerida:** `src/components/sections/NewsletterSection.tsx`

### Variantes

| Variante | Descripción |
|----------|-------------|
| `banner` | Layout horizontal (homepage): heading a la izquierda, form a la derecha |
| `centered` | Layout centrado con glass panel (about/infopage) |

### Props

```ts
interface NewsletterSectionProps {
  variant?: 'banner' | 'centered'
  heading?: string       // default: "STAY ENCRYPTED"
  description?: string
  placeholder?: string   // default: "OPERATOR_EMAIL"
  ctaLabel?: string      // default: "INITIALIZE SYNC"
}
```

### Descripción visual

**Variante `banner` (homepage):**
- Fondo: `bg-surface-container-low` con `border-y border-outline-variant/10`
- Layout: `flex flex-col md:flex-row items-center justify-between gap-12`
- Heading: `text-4xl md:text-5xl font-black tracking-tighter uppercase italic` (italic es parte del estilo)
- Descripción: `text-on-surface-variant max-w-sm`
- Input: `bg-black border border-outline-variant rounded-md px-6 py-4 text-sm w-full md:w-80 focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder:text-zinc-700 font-mono`
- Botón: `Button` variant `solid` con `bg-primary hover:bg-primary-dim`

**Variante `centered` (about/infopage):**
- `GlassPanel` con `withGlow={true}` como contenedor
- Centrado: `text-center`, `max-w-4xl mx-auto`
- Mismo heading e input pero centrados
- Radial gradient fuchsia en la parte inferior del panel
- Botón: `Button` variant `solid` con `rounded-lg` (ligeramente más redondeado en esta variante)

### Clases Tailwind

```tsx
// banner section wrapper
"px-8 md:px-16 py-24 bg-surface-container-low border-y border-outline-variant/10"

// centered section wrapper
"relative px-6 py-24 mb-12"

// glass panel (centered)
"max-w-4xl mx-auto glass-panel p-12 rounded-xl relative overflow-hidden text-center"

// input
"bg-black border border-outline-variant rounded-md px-6 py-4 text-sm w-full md:w-80 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-zinc-700 font-mono"

// heading (italic variant)
"text-4xl md:text-5xl font-black tracking-tighter uppercase italic"
```

### Notas de implementación

- El `font-mono` en el input placeholder (OPERATOR_EMAIL) da el efecto de "terminal input"
- Implementar estados: `idle` | `loading` | `success` | `error` para el feedback post-submit
- El submit llama a `/api/newsletter` (Mailchimp proxy)
- El feature flag `newsletter` en `site.config.ts` debe controlar si este componente se renderiza

---

## 13. FilterBar

**Ruta sugerida:** `src/components/sections/FilterBar.tsx`

### Props

```ts
interface FilterBarProps {
  categories: string[]                    // ["All", "AI", "Web", "Mobile", "Blockchain"]
  levels: string[]                        // ["principiante", "intermedio", "avanzado"]
  activeCategory: string
  activeLevels: string[]
  onCategoryChange: (cat: string) => void
  onLevelToggle: (level: string) => void
}
```

### Descripción visual

**Layout:**
- `bg-surface` (L1 = #0e0e0e) como fondo de sección
- `flex flex-col md:flex-row justify-between items-start md:items-end gap-8`
- Padding: `px-8 md:px-16 py-12`

**Columna de categorías (izquierda):**
- Eyebrow label: `text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold` con texto "Categories"
- Row de chips: `flex flex-wrap gap-2`
- `Chip` activo: `bg-secondary-container text-on-secondary-container`
- `Chip` inactivo: `bg-surface-container text-zinc-500 hover:text-secondary`

**Columna de difficulty (derecha):**
- Eyebrow label: igual al de categorías, texto "Difficulty"
- Checkboxes + labels: `flex gap-4 items-center`
- Checkbox styling via `@tailwindcss/forms`:
  - `w-4 h-4 bg-surface-container border-none rounded text-primary focus:ring-primary focus:ring-offset-surface`
- Label: `text-xs font-medium text-on-surface-variant uppercase tracking-widest`
- Cuando checked: label cambia a `text-primary`

### Clases Tailwind

```tsx
// section wrapper
"px-8 md:px-16 py-12 bg-surface"

// inner layout
"flex flex-col md:flex-row justify-between items-start md:items-end gap-8"

// section label
"text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold"

// chips row
"flex flex-wrap gap-2"

// checkbox
"w-4 h-4 bg-surface-container border-none rounded text-primary focus:ring-primary focus:ring-offset-surface"

// checkbox label (inactive)
"text-xs font-medium text-on-surface-variant uppercase tracking-widest"

// checkbox label (active)
"text-xs font-medium text-primary uppercase tracking-widest"
```

### Notas de implementación

- En el MVP con solo 5 proyectos, el filtrado es client-side
- El estado de filtros se maneja con `useState` en el componente padre (página homepage)
- El feature flag `filters` en `site.config.ts` debe controlar si este componente se renderiza
- Para la UI de checkboxes, el plugin `@tailwindcss/forms` aplica los estilos base (ya incluido en el config del design system)

---

## Decisión de Iconos

### Opciones evaluadas

#### Material Symbols Outlined (Google Fonts)
**Actualmente usado en los HTMLs de referencia.**

| Criterio | Evaluación |
|----------|------------|
| Uso en los HTMLs | CDN de Google Fonts: `@font-face` variable |
| Bundle size en Next.js | 0 JS — es una fuente, no un componente React. Impacto ~50-80KB de fuente (cacheable) |
| Facilidad de uso | `<span class="material-symbols-outlined">search</span>` — no necesita imports |
| Customización | Totalmente variable: `font-variation-settings: 'FILL' 0..1, 'wght' 100..700, 'GRAD', 'opsz'` |
| Catálogo | +2,500 íconos, actualizados continuamente por Google |
| Accesibilidad | Requiere `aria-hidden="true"` y texto alternativo explícito |
| SSR/Hydration | Sin problemas — es solo texto |
| Tree shaking | No aplica — es una fuente (se carga todo o se cargan los subsets) |

#### Lucide React
**Librería de íconos SVG, popular en el ecosistema React/Next.js.**

| Criterio | Evaluación |
|----------|------------|
| Bundle size | ~1-4KB por ícono con tree shaking. Sin usar, 0 impacto |
| Facilidad de uso | `import { Search } from 'lucide-react'` → `<Search size={24} />` |
| Customización | Props: `size`, `color`, `strokeWidth`, `className` |
| Catálogo | ~1,400 íconos, diseño consistente y limpio |
| Accesibilidad | SVG inline — mejor por defecto para lectores de pantalla |
| SSR/Hydration | Impecable — SVG inline, no hay hydration issues |
| Tree shaking | Excelente — solo se incluyen los íconos importados |
| Mantenimiento | Activamente mantenido, convención del ecosistema Next.js |

### Recomendación

**Usar Lucide React** para la implementación en Next.js.

**Razones:**

1. **Tree shaking real**: En producción solo se incluyen los íconos usados. Material Symbols carga la fuente entera (~50-80KB extra aunque se usen 5 íconos).
2. **SVG inline**: Mejor accesibilidad nativa, más fácil de estilizar con Tailwind (`className`, `stroke-primary`, etc.).
3. **Convención del ecosistema**: Next.js + shadcn/ui + la mayoría de boilerplates usan Lucide. Menor fricción para futuros colaboradores.
4. **Sin dependencia de CDN externo**: Material Symbols requiere cargar una fuente de Google Fonts (o auto-hospedarla). Lucide está en el bundle.
5. **Consistencia tipográfica**: Al usar Lexend como única fuente, no mezclar con font-based icons reduce la complejidad.

**Tabla de equivalencias** (Material Symbols → Lucide):

| Material Symbol | Lucide React |
|----------------|-------------|
| `search` | `Search` |
| `bolt` | `Zap` |
| `trending_flat` | `ArrowRight` |
| `arrow_back` | `ArrowLeft` |
| `arrow_forward` | `ArrowRight` |
| `terminal` | `Terminal` |
| `code` | `Code2` |
| `webhook` | `Webhook` |
| `check_box` | `CheckSquare` |
| `analytics` | `BarChart2` |
| `data_object` | `Braces` |
| `layers` | `Layers` |
| `security` | `Shield` |

**Instalación:**

```bash
npm install lucide-react
```

**Uso:**

```tsx
import { Zap, ArrowRight, Search } from 'lucide-react'

// En un botón
<button className="... flex items-center gap-2">
  START DEPLOYMENT
  <Zap size={16} className="text-on-primary-fixed" />
</button>

// En un link CTA de card
<a className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] group/link" href="#">
  READ MORE
  <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
</a>
```

**Si se decide mantener Material Symbols** (por fidelidad al diseño de referencia), la forma correcta en Next.js es auto-hospedar la fuente:

```tsx
// No usar el CDN en producción. Usar @fontsource o auto-hosting:
// npm install @fontsource-variable/material-symbols-outlined
import '@fontsource-variable/material-symbols-outlined'
```

---

## Resumen rápido de componentes

| Componente | Tipo | Prioridad MVP |
|-----------|------|--------------|
| Button | Primitivo UI | Alta |
| GradientText | Primitivo UI | Alta |
| GlassPanel | Primitivo UI | Alta |
| Card | UI compuesto | Alta |
| LevelBadge | Primitivo UI | Alta |
| Chip | Primitivo UI | Alta |
| Navbar | Layout | Alta |
| Footer | Layout | Alta |
| Hero | Sección | Alta |
| ProjectHero | Sección | Alta |
| BentoGrid | Sección | Alta |
| NewsletterSection | Sección | Media (feature flag) |
| FilterBar | Sección | Media (feature flag) |
