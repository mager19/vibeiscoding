export const siteConfig = {
  name: "Vibe is Coding",
  description: "Proyectos guiados para aprender a construir aplicaciones con IA. Desde tu primer chatbot hasta herramientas reales — sin teoría, construyendo desde el primer día.",
  url: "https://vibeiscoding.com",
  locale: "es",
  author: "Vibe is Coding",

  // Feature flags — activa/desactiva funcionalidades sin tocar código
  features: {
    newsletter: false, // Sección de suscripción al newsletter
    analytics: false, // Umami analytics (activar cuando tengas el websiteId)
    donations: false, // Botón Ko-fi / Buy Me a Coffee (fase 2)
    membership: false, // Contenido premium (fase 3)
    filters: false, // Filtros de categoría y nivel en el grid
    search: false, // Búsqueda de proyectos
    socialLinks: false, // Iconos de redes sociales en navbar/footer
  },

  // Configuración del newsletter (Mailchimp)
  newsletter: {
    provider: "mailchimp" as const,
    actionUrl: "", // Completar con la URL del formulario de Mailchimp
    audienceId: "", // MAILCHIMP_AUDIENCE_ID en .env.local
  },

  // Configuración de analytics (Umami)
  analytics: {
    provider: "umami" as const,
    websiteId: "", // NEXT_PUBLIC_UMAMI_WEBSITE_ID en .env.local
    scriptUrl: "", // NEXT_PUBLIC_UMAMI_SCRIPT_URL en .env.local
  },

  // Redes sociales
  social: {
    linkedin: "https://linkedin.com/company/vibeiscoding",
    twitter: "https://x.com/vibeiscoding",
    instagram: "https://instagram.com/vibeiscoding",
    github: "",
  },

  // Navegación principal (MVP: solo 2 items según Digital Strategist)
  nav: [
    { label: "Proyectos", href: "/#proyectos" },
    { label: "Sobre", href: "/sobre" },
  ],

  // URLs canónicas
  routes: {
    home: "/",
    projects: "/#proyectos",
    project: (slug: string) => `/proyectos/${slug}`,
    about: "/sobre",
    privacy: "/privacidad",
    terms: "/terminos",
    disclaimer: "/disclaimer",
  },
} as const;

export type SiteConfig = typeof siteConfig;
