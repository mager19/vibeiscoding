# User Journey — vibeiscoding.com

**Versión:** 1.0 (MVP)
**Fecha:** Marzo 2026

---

## Audiencias objetivo

| Perfil | Descripción | Motivación principal |
|--------|-------------|----------------------|
| **Developer curioso** | Programador con experiencia, quiere explorar vibe coding | Quiere saber qué se puede construir con IA sin aprender todo desde cero |
| **Aprendiz de vibe coding** | Sin experiencia en código o con poca; descubrió herramientas como Claude Code o Cursor | Necesita ideas concretas + orientación para su primer proyecto real |
| **Builder en pausa** | Tiene proyectos abandonados o ideas sin ejecutar | Busca inspiración y un camino claro para retomar |

---

## Journey 1: Usuario nuevo (primera visita)

### Etapa 1 — Llegada

**Canales de entrada:**
- Búsqueda orgánica en Google (keyword: "ideas proyectos vibe coding", "qué hacer con Claude Code")
- Tweet o hilo viral sobre vibe coding
- Recomendación de una persona en comunidad (Discord, Slack, WhatsApp)

**Estado emocional:** Curioso pero escéptico. No sabe bien qué espera encontrar.

**Lo que ve primero:** Hero section con el headline principal y el grid de proyectos visible más abajo (above the fold en desktop).

**Pain point de llegada:** "¿Esto es otro blog genérico de IA o tiene algo que vale la pena?"

**Oportunidad:** El hero debe comunicar en 5 segundos qué hace el sitio y por qué es diferente. El headline y subheadline son críticos.

---

### Etapa 2 — Orientación

**Acción del usuario:** Hace scroll para entender qué contiene el sitio. Ve los filtros de categoría y dificultad.

**Decisión clave:** ¿Esto es para mí? ¿Tengo el nivel para entender los proyectos?

**Pain point:** No saber si el nivel de los proyectos es accesible para él/ella.

**Oportunidad:**
- Los filtros de dificultad (principiante / intermedio / avanzado) son la primera señal de que el sitio reconoce distintos niveles
- El `LevelBadge` en cada card debe ser inmediatamente visible y comprensible
- Los chips de categoría ayudan al usuario a encontrar proyectos en su área de interés

---

### Etapa 3 — Exploración del grid

**Acción:** Revisa los project cards. Lee los títulos y las descripciones cortas.

**Comportamiento típico:** Escanea todos los cards rápido, luego vuelve al que más le llamó la atención.

**Pain point:** Descripciones vagas o demasiado técnicas pueden ahuyentar al aprendiz.

**Oportunidad:**
- El `shortDescription` en el card es el hook de cada proyecto. Debe mencionar el problema que resuelve, no solo la tecnología
- La imagen del hero de cada proyecto refuerza el interés visual antes de hacer clic

---

### Etapa 4 — Lectura de detalle del proyecto

**URL:** `/proyectos/[slug]`

**Acción:** Hace clic en un card. Llega al detalle con el bento grid.

**Lo que necesita encontrar (en orden de urgencia):**
1. Qué se va a construir (Overview)
2. Para qué sirve / qué problema resuelve (El Problema)
3. Qué herramientas necesita (Tech Stack + Tool Suggestion)
4. Cuánto tiempo va a tomarle (Estimated Time)
5. Si puede hacerlo solo (Pasos Sugeridos)

**Pain point crítico:** Si el usuario llega a los pasos y siente que requiere conocimientos previos que no tiene, abandona. Los proyectos de nivel principiante deben ser explícitamente accesibles.

**Oportunidades de conversión en el detalle:**
- Al final del detalle: CTA de newsletter con copy contextual ("Recibe nuevos proyectos como este cada semana")
- Badge de nivel prominente en el hero del detalle (refuerza que eligió bien)
- "También te puede interesar" con proyectos del mismo nivel → aumenta tiempo en sitio

---

### Etapa 5 — Momento de decisión (suscripción)

**Contexto:** El usuario terminó de leer el detalle del proyecto y está enganchado.

**Lo que piensa:** "Quiero saber cuando suban más proyectos como este."

**Punto de conversión:** Newsletter section al pie del detalle y en la homepage.

**Fricciones a eliminar:**
- El formulario no debe pedir más que el email (sin nombre, sin selección de preferencias en MVP)
- El CTA debe comunicar el beneficio, no el mecanismo ("Recibe nuevos proyectos" vs "Suscríbete a nuestro newsletter")
- El mensaje de confirmación debe ser afirmativo y en el tono de la marca

**Micro-copy clave:**
- Placeholder del input: dirección de correo o similar coloquial en español (no "OPERATOR_EMAIL")
- CTA del botón: "QUIERO ENTERARME" / "DAME EL ACCESO" / "ÚNIRME AL PROTOCOLO"
- Post-submit: "Estás dentro. Te avisamos cuando haya algo nuevo."

---

### Resumen del funnel (usuario nuevo)

```
Llega al sitio
    ↓
Lee el hero → "Esto es para mí"
    ↓
Explora el grid → Filtra por nivel/categoría
    ↓
Hace clic en un proyecto → Lee el detalle completo
    ↓
[DECISIÓN] ¿Vale mi email?
    ↓
Se suscribe al newsletter
    ↓
Queda en lista de Mailchimp con segmento "primeros suscriptores"
```

---

## Journey 2: Usuario recurrente (visitas posteriores)

### Perfil
Alguien que ya conoce el sitio, probablemente suscrito al newsletter o que lo tiene guardado en favoritos.

### Comportamiento esperado
- Entra directamente a la homepage
- Revisa si hay proyectos nuevos
- Puede buscar un proyecto anterior del que quiere releer algo

### Diferencias clave respecto al usuario nuevo
- No necesita ser convencido de quedarse → ya confía en el sitio
- Necesita señales visuales de qué es nuevo (`featured: true` en el card, o badge "Nuevo")
- El newsletter se convierte en el canal preferido de re-enganche: llegar al sitio vía email con un proyecto nuevo > llegar orgánicamente

### Oportunidades
- En MVP: marcar proyectos como `featured` para que aparezcan primero o destacados visualmente
- En fase 2: email de bienvenida automatizado (Mailchimp) con los 3 proyectos más populares
- En fase 2: sección "Lo más reciente" o indicador de fecha en los cards

---

## Momentos de abandono y cómo mitigarlos

| Momento | Causa probable | Mitigación |
|---------|---------------|------------|
| Rebote en el hero | Headline no comunica el valor | Copy directo: "Ideas de proyectos reales para construir con IA" |
| Abandono en el grid | Todos los proyectos parecen difíciles | Proyectos de nivel principiante visibles sin necesidad de filtrar |
| Abandono en el detalle | El proyecto es demasiado técnico para el usuario | Sección "Lo que vas a aprender" escrita en lenguaje accesible |
| No suscripción | No hay razón urgente para dejar el email | Promesa concreta: frecuencia de envío + tipo de contenido |

---

## Métricas de seguimiento (Umami)

| Métrica | Qué indica |
|---------|------------|
| Tasa de rebote homepage | Calidad del hero y primer impacto |
| Clics en project cards | Qué proyectos generan más interés |
| Tiempo en detalle de proyecto | Si el contenido engancha o aburre |
| Conversión newsletter (visitas → suscriptos) | Salud del embudo principal |
| Páginas por sesión | Exploración del sitio |

---

## Notas de implementación

- El scroll del menú "Proyectos" debe llevar suavemente al grid (smooth scroll)
- En mobile, el grid es de 1 columna — el primer proyecto visible es el que más impacto tiene; asegurarse de que sea un proyecto `featured` o de nivel principiante
- La sección de newsletter en el detalle de proyecto debe tener copy diferenciado del de la homepage (no copiar/pegar)
- Considerar un `toast` o mensaje inline de confirmación de suscripción (no redirigir a otra página)
