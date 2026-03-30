# Roadmap de Monetización — vibeiscoding.com

**Versión:** 1.0
**Fecha:** Marzo 2026
**Principio rector:** Comunidad primero, monetización después.

---

## Filosofía general

El error más común de blogs técnicos nuevos es intentar monetizar antes de tener una audiencia que confíe en el proyecto. El modelo de vibeiscoding.com sigue una progresión deliberada: primero construir valor gratuito y demostrar consistencia, luego monetizar cuando la audiencia lo pide o lo espera.

Cada fase de monetización debe sentirse como una extensión natural del proyecto, no como una palanca de negocio superpuesta.

---

## Fase 1 — MVP: 100% gratuito, construir audiencia

**Duración estimada:** Primeros 3-6 meses tras el lanzamiento

**Objetivo:** Demostrar valor, acumular suscriptores, entender qué resuena con la audiencia.

### Qué hace el sitio en esta fase
- Publica proyectos de vibe coding de forma gratuita y sin restricciones
- Crece la lista de Mailchimp de forma orgánica
- Genera confianza a través de la consistencia editorial (1 proyecto nuevo cada 1-2 semanas)
- Mide qué tipos de proyectos y niveles generan más tráfico y engagement

### Lo que NO hace en esta fase
- Sin botones de donación
- Sin contenido bloqueado o "solo para miembros"
- Sin publicidad ni banners de afiliados
- Sin paywall de ningún tipo

### Por qué es importante hacer esto bien
La audiencia de developers es especialmente sensible a la monetización prematura. Un botón de "apóyame" en un sitio nuevo con poco contenido genera escepticismo, no simpatía. La autoridad y la confianza se ganan publicando contenido de valor de forma constante.

### Indicadores de que la Fase 1 está funcionando
- 200+ suscriptores al newsletter
- Tráfico orgánico creciente (al menos +10% mensual)
- Proyectos siendo compartidos en redes sin que el autor los comparta primero
- Menciones o referencias en comunidades de developers (Discord, Twitter/X, LinkedIn)
- Tasa de apertura del newsletter > 35%

---

## Fase 2 — Donaciones: Ko-fi / Buy Me a Coffee

**Activación estimada:** Al alcanzar 200-500 suscriptores activos o ~3-6 meses de operación constante

**Objetivo:** Validar que la audiencia valora el proyecto lo suficiente como para contribuir voluntariamente.

### Cuándo activarlo
Activar las donaciones cuando se cumplan **al menos 2 de estas 3 condiciones**:
1. La lista de newsletter supera los 200 suscriptores con tasa de apertura > 30%
2. Alguien (de forma espontánea, sin que se pida) pregunta cómo apoyar el proyecto
3. El sitio lleva al menos 3 meses publicando con regularidad demostrable

### Plataforma recomendada
**Ko-fi** es la opción preferida sobre Buy Me a Coffee por estas razones:
- Sin comisión en donaciones únicas (Buy Me a Coffee cobra 5%)
- Interfaz más limpia y personalizable
- Opción de membresía integrada (útil cuando se active la Fase 3)
- Soporte para metas de financiamiento (motivador para la audiencia)
- Mejor percepción de marca en comunidades técnicas

### Cómo integrarlo sin ser invasivo
El principio: el botón de donación debe estar presente pero nunca interrumpir.

**Dónde colocarlo (en orden de menor a mayor intrusión):**
1. Footer del sitio — siempre visible pero en posición secundaria
2. Página `/sobre` — contexto natural para hablar de la misión y cómo apoyarla
3. Al final del detalle de cada proyecto — después de todo el contenido, nunca antes

**Dónde NO colocarlo:**
- En el hero de la homepage
- Como pop-up o modal
- En el menú de navegación principal
- Como mensaje de bienvenida del newsletter

**Copy sugerido para el botón:**
"Si esto te fue útil, invitame un café ☕" — coloquial, sin presión, sin promesas de contenido exclusivo a cambio.

**En el newsletter:** Mencionar Ko-fi una vez, en un correo dedicado a contar el estado del proyecto ("después de N meses, así está vibeiscoding.com"), no en cada envío.

### Feature flag en `site.config.ts`
El feature flag `donations: true` debe activarse sin redeploy; simplemente cambiando la config y ejecutando un rebuild. El componente `DonationButton` debe estar implementado desde el MVP (condicionado al flag) para evitar trabajo de emergencia cuando llegue el momento.

---

## Fase 3 — Membresía premium

**Activación estimada:** 1-2 años de operación, con señales claras de demanda

**Objetivo:** Generar ingresos recurrentes que financien más contenido y herramientas para la comunidad.

### Cuándo activarlo
Activar la membresía cuando se cumplan **todas estas condiciones**:
1. Lista de newsletter > 1.000 suscriptores activos (tasa de apertura > 25%)
2. Al menos 20 proyectos publicados (base de contenido sólida que justifique el premium)
3. Tráfico mensual > 5.000 visitantes únicos
4. Las donaciones de Ko-fi generan contribuciones recurrentes (indica demanda de membresía formal)
5. Existe capacidad real para producir contenido premium de forma sostenida

### Qué sería contenido premium

El contenido gratuito seguirá siendo gratuito. Lo premium agrega capas de profundidad, no quita acceso.

| Contenido gratuito | Contenido premium |
|-------------------|-------------------|
| Idea del proyecto + overview | Todo lo anterior + |
| Tech stack básico | Repositorio de código base (starter kit) |
| Pasos generales | Walkthrough en video paso a paso |
| Descripción del problema | Sesiones Q&A en vivo mensuales |
| Un nivel de dificultad por proyecto | Proyectos exclusivos nivel "pro" |
| | Acceso a comunidad privada (Discord) |
| | Reviews de proyectos personales |

### Modelo de precios recomendado

**Precio de lanzamiento:**
- Mensual: USD 7-9 / mes
- Anual: USD 60-70 / año (~30% de descuento)

**Razonamiento:** El rango USD 7-9/mes está en el "precio psicológico de developer" — más barato que un libro técnico al mes, más caro que un café. El descuento anual incentiva el compromiso y estabiliza el flujo de caja.

### Plataforma recomendada

**Opción A: LemonSqueezy** (recomendada para arrancar)
- Infraestructura de pagos completa (Stripe debajo, sin necesidad de cuenta Stripe propia)
- Manejo automático de impuestos globales (IVA, GST)
- Membresías con acceso a contenido gated integrado
- Panel de analytics simple
- Comisión: 5% + $0.50 por transacción
- Ideal para MVPs de membresía sin equipo técnico dedicado

**Opción B: Stripe directo**
- Máxima flexibilidad y menor comisión (2.9% + $0.30)
- Requiere implementación técnica (webhooks, gestión de estados, portal del cliente)
- Recomendada cuando el volumen justifique la inversión técnica (>100 miembros activos)

**Opción C: Patreon**
- Nombre reconocido en comunidades de creadores
- Menos control sobre la experiencia y la marca
- Comisión mayor (8-12%)
- No recomendada: la audiencia de developers prefiere experiencias más "limpias" y la plataforma tiene connotaciones más de creator economy que de producto técnico

### Integración técnica en Next.js

El feature flag `membership: true` en `site.config.ts` ya está contemplado desde el MVP. La implementación técnica de la Fase 3 requiere:
- Autenticación de usuarios (NextAuth o Clerk)
- Integración con webhook de LemonSqueezy o Stripe
- Middleware de protección de rutas para contenido premium
- Portal del cliente para gestión de suscripción

Esto representa trabajo técnico significativo; iniciar la implementación solo cuando las métricas indiquen que la demanda justifica la inversión.

---

## Resumen ejecutivo por fase

| Fase | Condición de activación | Acción | Ingresos esperados |
|------|------------------------|--------|--------------------|
| Fase 1 — MVP | Lanzamiento | Publicar proyectos gratuitos, crecer newsletter | $0 (inversión en audiencia) |
| Fase 2 — Donaciones | 200+ suscriptores, 3+ meses activos | Activar Ko-fi en footer y página /sobre | $20-100/mes (variable) |
| Fase 3 — Membresía | 1.000+ suscriptores, 20+ proyectos | Lanzar membresía en LemonSqueezy | $500-3.000/mes (proyección inicial) |

---

## Anti-patrones a evitar

- **No poner el Ko-fi antes de tener audiencia.** Un botón de donación vacío en un sitio nuevo es señal de que el proyecto no tiene tracción, no de que la tiene.
- **No meter todo el contenido bueno detrás del paywall desde el día 1.** La membresía funciona cuando la gente ya confía en que el contenido gratuito es excelente.
- **No elegir la plataforma de membresía por el nombre.** Elegirla por los costos reales, la UX del usuario final y la capacidad de integración técnica.
- **No escalar las fases por impaciencia.** Si el newsletter tiene 50 suscriptores, activar membresía genera cero ingresos y mucho trabajo técnico desperdiciado.

---

## Notas de implementación técnica

Los feature flags están diseñados en `site.config.ts` para que cada fase se active sin reescribir componentes:

```typescript
// site.config.ts (referencia — implementar según el plan técnico)
export const siteConfig = {
  features: {
    newsletter: true,      // activo desde MVP
    analytics: true,       // activo desde MVP
    donations: false,      // activar en Fase 2
    membership: false,     // activar en Fase 3
    filters: true,         // activo desde MVP
  }
}
```

El componente `DonationButton` debe existir en el código desde el MVP, condicionado al flag, para que activarlo en Fase 2 sea un cambio de una línea, no una feature nueva.
