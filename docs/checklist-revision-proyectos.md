# Checklist de Revisión de Proyectos

Revisión rápida (~10 min por proyecto). Si algo falla, anotarlo y mandarlo a corregir.

---

## 1. Frontmatter

- [ ] `toolSuggestion` no menciona Claude ni ningún modelo específico
- [ ] `estimatedTime` es coherente con el nivel (Beginner 1-2 sem / Builder 3-4 sem / Architect 4-8 sem)
- [ ] `shortDescription` es una sola oración clara, sin jerga
- [ ] `techStack` usa "SDK de IA" (no "Anthropic SDK" ni "OpenAI SDK") si el producto usa un LLM

---

## 2. Neutralidad de herramienta

- [ ] En los pasos dice "tu agente de IA" o "el agente" — no "Claude Code"
- [ ] En el texto editorial (Overview, Solución, Tech Stack) no aparece "Claude", "ChatGPT" ni ningún proveedor como el único — se dice "la IA", "el modelo"
- [ ] El prompt inicial usa `{{variables}}` con ejemplos, sin hardcodear proveedor
- [ ] "Antes de Empezar" menciona al menos 2 herramientas (Claude Code, Cursor, etc.)
- [ ] Recursos y Referencias incluye links de al menos 2 proveedores de IA (Anthropic, OpenAI, Gemini)

---

## 3. Manifiesto

- [ ] El Overview describe un resultado concreto que el usuario va a tener al terminar
- [ ] "El Problema" habla de una frustración humana real, no de un gap técnico
- [ ] "Lo que vas a aprender" lista conceptos en lenguaje humano, no tecnologías ni jerga técnica
- [ ] Los pasos incluyen algún momento donde el usuario revisa/valida, no solo ejecuta
- [ ] Hay al menos un tip de aprendizaje (`> **Tip**:`) que invite a preguntar o entender

---

## 4. Nivel (verificar según el nivel declarado)

**Beginner:**
- [ ] El primer paso es "Activar el modo aprendizaje" (usuario declara su nivel al agente)
- [ ] Los pasos describen lo que el usuario quiere lograr, no cómo implementarlo técnicamente
- [ ] Los nombres de fases son en lenguaje humano (no "API Proxy", "Frontend", "Route Handler")
- [ ] El checklist de buenas prácticas es verificable por alguien sin experiencia técnica
- [ ] El prompt inicial incluye: declaración de nivel, descripción del proyecto, pedido de preguntas, instrucción de explicar decisiones, seguridad, deploy

**Builder / Architect:**
- [ ] La complejidad del proyecto es coherente con su nivel declarado
- [ ] El tiempo estimado es realista para alguien de ese nivel

---

## 5. Idioma y tono

- [ ] Todo el contenido está en español neutro (sin "vos", "haceme", "sugerí", "configurala")
- [ ] Sin buzzwords: no "potente", "innovador", "revolucionario", "cutting-edge"

---

## 6. Estructura mínima

- [ ] Tiene todas las secciones en orden: Overview, El Problema, Solución Propuesta, Tech Stack, Features del MVP, Pasos Sugeridos, Lo que vas a aprender, Buenas Prácticas, Recursos, Habilidades, Impacto, Antes de Empezar, Cómo Abordarlo
- [ ] Features del MVP usa checkboxes `- [ ]`
- [ ] Buenas Prácticas tiene las 4 subsecciones: Seguridad, Rendimiento, Arquitectura, Antes de publicar
- [ ] Cómo Abordarlo tiene: fases, ¿Agente o modo chat?, ¿TUI o editor?, prompt inicial, tip

---

**Si falla 1–2 puntos**: corrección puntual.  
**Si falla 3 o más**: devolver el proyecto completo con los puntos marcados.
