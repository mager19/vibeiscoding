# Guía de Creación de Proyectos — vibeiscoding.com

Esta guía define las normas editoriales y técnicas para crear proyectos MDX en vibeiscoding.com.
Todo especialista que cree o edite un proyecto debe seguir estas reglas sin excepción.

---

## 1. Estructura del frontmatter

Cada archivo `.mdx` en `content/projects/` debe incluir exactamente estos campos:

```yaml
---
title: "Título del Proyecto en Título Case"
codename: "NOMBRE_EN_MAYUSCULAS_SIN_ESPACIOS"
slug: "slug-en-kebab-case"
level: "principiante" | "intermedio" | "avanzado"
categories: ["AI", "Web"] # ver categorías válidas abajo
shortDescription: "Una oración. Qué construye el usuario y el beneficio concreto. Máx 120 caracteres."
heroImage: "URL de Unsplash con ?w=800&q=80"
techStack: ["Tech1", "Tech2"] # tecnologías del proyecto, no la herramienta de IA
estimatedTime: "X-Y semanas"
toolSuggestion: "Claude Code, Cursor o cualquier agente con soporte de proyectos"
publishedAt: "YYYY-MM-DD"
featured: false
---
```

### Reglas del frontmatter

- **`toolSuggestion`**: SIEMPRE genérico. Nunca mencionar un modelo específico (no "Claude Sonnet 4.5", no "GPT-4o"). Fórmula aceptada: `"Claude Code, Cursor o cualquier agente con soporte de proyectos"` o variante equivalente.
- **`techStack`**: Lista las tecnologías del proyecto (Next.js, Supabase, etc.). No incluye la herramienta de IA del usuario. Si el proyecto usa un SDK de IA como parte del producto (ej. un chatbot), usar `"SDK de IA"` como nombre genérico — nunca `"Anthropic SDK"` ni `"OpenAI SDK"`.
- **`estimatedTime`**: Ver rangos por nivel en sección 3.
- **`shortDescription`**: Una sola oración. Debe responder "¿qué construyo?" y "¿qué gano?". Sin jerga.

### Categorías válidas

`AI`, `Web`, `Productivity`, `Data`, `Automation`, `Mobile`, `API`, `SaaS`

---

## 2. Secciones obligatorias (en este orden)

```
## Overview
## El Problema
## Solución Propuesta
## Tech Stack
## Features del MVP
## Pasos Sugeridos
## Lo que vas a aprender
## Checklist de Buenas Prácticas
## Recursos y Referencias
## Habilidades que Desarrollas
## Impacto en tu Carrera
## Antes de Empezar
## Cómo Abordarlo
```

Las secciones `## Checklist de Buenas Prácticas` y `## Cómo Abordarlo` incluyen subsecciones específicas definidas más abajo.

---

## 3. Expectativas por nivel

### Nivel 1 — BEGINNER (principiante)

**Quién es**: Alguien que construye su primera app con IA. Puede no tener experiencia técnica previa.  
**Rol de la IA en el proyecto**: La IA escribe el código y explica cada decisión. El usuario define qué construir y por qué.  
**Foco del aprendizaje**: Entender el flujo completo de una app (no memorizar sintaxis). Entender qué pide la IA y por qué.

**Reglas de contenido:**
- `estimatedTime`: 1–2 semanas
- **El primer paso SIEMPRE es "Activar el modo aprendizaje"**: el usuario le declara al agente su nivel y le pide que explique cada decisión a lo largo del proyecto. Sin este paso, el proyecto no cumple con la filosofía del nivel.
- Los pasos describen lo que el usuario quiere lograr en lenguaje natural — nunca especifican tecnologías ni patrones técnicos. El usuario describe el resultado; el agente sugiere cómo lograrlo.
- Los nombres de los pasos y fases deben ser descriptivos en términos humanos. ❌ "API Proxy", "Route Handler", "Componente React" → ✅ "El canal de comunicación", "La pantalla de chat", "El cerebro del bot".
- No asumir conocimiento de ninguna tecnología, framework, CLI ni patrón. Si algo técnico es necesario, el paso debe decir "pedile a tu agente que te explique qué es antes de continuar".
- **`## Lo que vas a aprender`**: escrito en lenguaje humano. ❌ "Manejo de streaming con ReadableStream", "API proxy pattern" → ✅ "Cómo hacer que las respuestas aparezcan en tiempo real", "Por qué la contraseña de la IA debe estar protegida".
- **Checklist de buenas prácticas**: cada ítem debe ser verificable por alguien sin experiencia técnica. Si requiere conocimiento técnico, agregar "pedile a tu agente que...". Sin mencionar nombres de providers (Anthropic, OpenAI).
- **Recursos y Referencias**: incluir al menos un link por proveedor principal (Anthropic, OpenAI, Gemini). Nunca solo un proveedor.

**Tono**: Acompañante. El texto debe transmitir que el usuario puede hacerlo aunque no sepa programar. Evitar tecnicismos sin explicación. **Todo el contenido en español neutro** — no usar regionalismos (sin "vos", "haceme", "sugerí").

---

### Nivel 2 — BUILDER (intermedio)

**Quién es**: Ya construyó algo. Entiende el flujo básico. Ahora enfrenta decisiones de arquitectura reales.  
**Rol de la IA en el proyecto**: La IA ayuda a tomar decisiones de arquitectura (bases de datos, auth, integraciones). El usuario hace las preguntas correctas y valida.  
**Foco del aprendizaje**: Entender trade-offs. Saber cuándo y por qué se elige una tecnología sobre otra.

**Reglas de contenido:**
- `estimatedTime`: 3–4 semanas
- Los pasos deben incluir momentos de decisión explícitos: "antes de continuar, evalúa X vs Y con tu agente".
- El tech stack puede incluir servicios externos (Supabase, Stripe, etc.). Cada tecnología debe justificarse en la sección `## Tech Stack`.
- Checklist de buenas prácticas: énfasis en arquitectura, manejo de errores, y consideraciones de producción.
- El prompt inicial sugerido debe incluir la instrucción de que la IA proponga alternativas y explique trade-offs, no solo ejecute.

**Tono**: Par técnico. El texto asume que el usuario puede evaluar una decisión si se le presenta bien. Más directo, menos scaffolding.

---

### Nivel 3 — ARCHITECT (avanzado)

**Quién es**: Construye cosas que otras personas usan. La IA ejecuta; el usuario diseña el sistema.  
**Rol de la IA en el proyecto**: Ejecución de alto nivel. El usuario define la arquitectura, los límites del sistema, y las decisiones de diseño.  
**Foco del aprendizaje**: Diseño de sistemas. Criterio de producto. Decisiones con consecuencias reales.

**Reglas de contenido:**
- `estimatedTime`: 4–8 semanas
- Los pasos son fases de diseño e implementación, no instrucciones línea a línea. Cada fase puede durar días.
- El proyecto debe justificar por qué es de nivel avanzado: complejidad de arquitectura, escala, o consideraciones de producción no triviales.
- Checklist de buenas prácticas: enfocada en observabilidad, escalabilidad, seguridad de producción, y testing.
- No hay prompt inicial sugerido estilo "principiante". En cambio, debe incluir una sección de "Cómo estructurar el diálogo con el agente" orientada a decisiones de diseño.

**Tono**: Colega senior. El texto asume criterio técnico. El valor no está en el scaffolding sino en el marco de decisiones.

---

## 4. Regla de neutralidad de herramienta (anti-sesgo)

### Principio

El sitio enseña el **método** (cómo dirigir a una IA para construir software), no una herramienta específica. Un usuario puede usar Claude Code, Cursor, Windsurf, Copilot, o cualquier agente equivalente.

### Reglas concretas

**En `## Pasos Sugeridos`:**
- ❌ `"Pedile a Claude Code que cree..."` 
- ✅ `"Pedile a tu agente de IA que cree..."`
- ❌ `"Usa Claude Sonnet para..."`
- ✅ `"Usa tu herramienta de IA preferida para..."`

**En `## Antes de Empezar` — campo Herramienta:**
- ❌ `"Herramienta: Claude Code"`
- ✅ `"Herramienta: Claude Code, Cursor, Windsurf o cualquier agente con capacidad de manejar proyectos completos. Elige la que ya conoces."`

**En `## Cómo Abordarlo` — subsección ¿Agente o modo chat?:**
- Mencionar al menos 2–3 opciones concretas con sus trade-offs (Claude Code, Cursor, Copilot, etc.).

**En el `Prompt inicial sugerido`:**
- Usar `{{variables}}` con ejemplos inline para que el usuario sepa exactamente qué reemplazar. Ejemplo: `{{describe tu bot: ej. "un coach de fitness que habla con energía"}}`.
- Nunca hardcodear "Claude", "ChatGPT" ni ningún proveedor en el prompt.
- El prompt debe estar en **español neutro** — sin regionalismos.
- Para nivel BEGINNER, el prompt debe incluir: declaración de nivel, descripción de lo que quiere construir, pedido de preguntas antes de empezar, instrucción de explicar cada decisión, requisito de seguridad (API key), guía para publicar.

**En el texto editorial (Overview, Solución Propuesta, Tech Stack, etc.):**
- ❌ `"Claude lo analiza"`, `"se envía a Claude"`, `"Claude Sonnet es ideal"`
- ✅ `"la IA lo analiza"`, `"se envía al modelo"`, `"un modelo con capacidad de síntesis"`
- La restricción de neutralidad aplica a TODO el texto del proyecto, no solo a los pasos.

**Excepción válida**: Si el proyecto técnicamente requiere una API específica (ej. Anthropic para funcionalidades de IA del producto a construir), se puede mencionar en `## Tech Stack` como una opción entre varias, nunca como la única. La restricción aplica a la herramienta de desarrollo (el agente que ayuda a construir) y al texto editorial en general.

---

## 5. Alineación con el manifiesto

Cada proyecto debe reflejar los principios del manifiesto de vibeiscoding. Checklist editorial:

### "La IA propone. Yo valido. Lo que entra es lo que entiendo."
- [ ] Los pasos incluyen momentos donde el usuario revisa o valida lo que generó la IA, no solo ejecuta.
- [ ] El checklist de buenas prácticas ayuda al usuario a saber qué revisar, no solo qué generar.

### "Que la IA lo construya no te exime de entenderlo."
- [ ] La sección `## Lo que vas a aprender` es sustantiva. No es solo una lista de tecnologías — es qué conceptos el usuario va a entender al terminar.
- [ ] El `Prompt inicial sugerido` incluye la instrucción de que el agente explique sus decisiones.
- [ ] Los tips de aprendizaje (blockquotes `> Tip de aprendizaje:`) están presentes donde el proceso es no-obvio.

### "El aprendizaje ocurra mientras construyes, no antes."
- [ ] El proyecto es buildable en el tiempo estimado. No requiere semanas de teoría previa.
- [ ] Los pasos están ordenados para que el usuario vea resultados parciales rápido (no hay 5 pasos de setup antes del primer output visible).

### "No es para quien busca un atajo."
- [ ] El proyecto tiene buenas prácticas reales: seguridad, arquitectura, manejo de errores. No es solo "hacerlo funcionar".
- [ ] El checklist de buenas prácticas es específico y verificable, no genérico.

### "Para cualquier persona con curiosidad intelectual."
- [ ] El `## Overview` puede ser entendido por alguien sin background técnico.
- [ ] El `## El Problema` describe un problema humano real, no un problema técnico.

---

## 6. Secciones con formato específico

### `## Features del MVP`

Lista de checkboxes con formato `- [ ]`. Solo features que se construyen en el proyecto. Sin features "nice to have" ni futuros.

```markdown
## Features del MVP

- [ ] Feature 1 concreto y verificable
- [ ] Feature 2 concreto y verificable
```

### `## Pasos Sugeridos`

Lista numerada. Cada paso tiene:
1. Un nombre en negrita que describe el resultado del paso
2. Una descripción de qué hace el usuario (no la IA)
3. Si aplica, la instrucción concreta que el usuario le da al agente (en texto, no en bloque de código salvo que sea un prompt completo)

```markdown
## Pasos Sugeridos

1. **Nombre del paso**: Descripción de qué hace el usuario. Pedile a tu agente de IA que [instrucción concreta].

2. **Nombre del paso**: ...
```

### `## Checklist de Buenas Prácticas`

Siempre incluye estas 3 subsecciones. Las específicas dependen del nivel y el proyecto:

```markdown
## Checklist de Buenas Prácticas

### Seguridad
- [ ] ...

### Rendimiento
- [ ] ...

### Arquitectura y Estructura
- [ ] ...

### Antes de publicar (MVP Checklist)
- [ ] ...
```

### `## Cómo Abordarlo`

Siempre incluye estas subsecciones:

```markdown
## Cómo Abordarlo

### Divide el proyecto en fases

**Fase 1 — Nombre humano (tiempo estimado):** Descripción en lenguaje natural de qué logra el usuario al terminar esta fase.
**Fase 2 — Nombre humano (tiempo estimado):** ...

### ¿Agente o modo chat?

[Recomendación con justificación. Mencionar al menos 2 opciones concretas.]

### ¿TUI o editor?

- **Claude Code (TUI):** [cuándo usarlo]
- **Cursor o Windsurf (IDE):** [cuándo usarlo]
- **GitHub Copilot:** [cuándo usarlo]

### Prompt inicial sugerido

Copiá este prompt, reemplazá las partes entre `{{}}` y pegalo en tu agente de IA para arrancar.

[Bloque de código con el prompt en español neutro. Usar `{{variable: ej. "ejemplo concreto"}}` para las partes que el usuario debe personalizar.]

> **Tip**: [Consejo concreto de cómo sacarle más valor al proceso de construcción.]
```

**Reglas para las fases (nivel BEGINNER):**
- Nombres de fase en lenguaje humano: ✅ "El cerebro del bot", "La pantalla de chat" — ❌ "API Proxy", "Frontend", "Route Handler"
- La descripción explica qué logra el usuario, no qué implementa técnicamente

### `## Antes de Empezar`

Formato de lista con bullets. Siempre incluir:

```markdown
## Antes de Empezar

- **Necesitas**: [requisitos mínimos — cuentas, API keys, etc.]
- **Opcional pero recomendado**: [herramientas o conocimientos que ayudan pero no bloquean]
- **Herramienta**: Claude Code, Cursor, Windsurf o cualquier agente con soporte para proyectos completos. Elige la que ya conoces.
- **Tiempo real**: [estimación honesta con contexto de dedicación diaria]
- **Mentalidad**: [frase corta que calibra expectativas — siempre orientada a entender, no solo a generar]
- **Modo aprendizaje**: [instrucción de cómo usar el agente para aprender, no solo para producir]
```

---

## 7. Tono y voz

- **Voz**: Primera persona implícita del usuario ("vas a construir", "al terminar tendrás"). No segunda persona impersonal.
- **Registros**: Directo, sin condescendencia, sin hype. El manifiesto dice que esto no es para quien busca un atajo — el tono debe reflejarlo.
- **Español neutro obligatorio**: Todo el contenido — incluyendo el prompt inicial — debe estar en español neutro. Sin regionalismos: no "vos", "haceme", "sugerí", "explicame", "configurala". Usar siempre "tú", "hazme", "sugiere", "explícame", "configúrala".
- **Longitud**: `## Overview` debe ser entre 3–5 párrafos. El `## El Problema` entre 2–3. Las secciones de skills e impacto, entre 4–6 bullets sustantivos.
- **Sin buzzwords vacíos**: Evitar "potente", "innovador", "revolucionario", "cutting-edge". Describir concretamente.
- **Los highlights del problema son humanos**: `## El Problema` debe describir una frustración real de una persona real, no una gap técnica abstracta.

---

## 8. Checklist final antes de publicar

Antes de entregar un proyecto nuevo, verificar:

**Frontmatter**
- [ ] `toolSuggestion` es genérico (no menciona modelo específico)
- [ ] `estimatedTime` es coherente con el nivel
- [ ] `slug` es único y en kebab-case

**Neutralidad de herramienta**
- [ ] Ninguna instancia de "Claude Code" en los pasos (salvo en la sección ¿TUI o editor? donde es un ítem entre varios)
- [ ] El prompt inicial usa `[tu LLM preferido]` o equivalente genérico
- [ ] `## Antes de Empezar` menciona múltiples herramientas

**Alineación con el manifiesto**
- [ ] El proyecto enseña, no solo genera
- [ ] Hay momentos de validación del usuario, no solo ejecución de la IA
- [ ] `## Lo que vas a aprender` describe conceptos, no solo tecnologías

**Nivel correcto**
- [ ] La complejidad del proyecto es coherente con las expectativas del nivel (ver sección 3)
- [ ] El tiempo estimado es realista para alguien del nivel indicado

**Formato**
- [ ] Todas las secciones obligatorias presentes y en orden
- [ ] `## Features del MVP` usa checkboxes `- [ ]`
- [ ] `## Checklist de Buenas Prácticas` tiene las 4 subsecciones
- [ ] `## Cómo Abordarlo` tiene todas sus subsecciones
