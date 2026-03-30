export const es = {
  site: {
    name: 'Vibe is Coding',
    tagline: 'Ideas que la IA puede construir hoy.',
  },

  nav: {
    projects: 'Proyectos',
    about: 'Sobre',
    subscribe: 'Suscríbete',
  },

  home: {
    hero: {
      headline: 'IDEAS QUE LA IA PUEDE CONSTRUIR HOY',
      subheadline: 'Proyectos reales para aprender Vibe Coding desde cero. Elige un nivel, elige una herramienta, y empieza a construir.',
      ctaPrimary: 'EXPLORAR PROYECTOS',
      ctaSecondary: '¿QUÉ ES ESTO?',
    },
    projects: {
      sectionTitle: 'PROYECTOS',
      sectionSubtitle: 'Ideas listas para construir con IA.',
      readMore: 'VER PROYECTO',
      emptyState: 'No hay proyectos disponibles aún.',
    },
    newsletter: {
      headline: 'STAY ENCRYPTED',
      description: 'Recibe nuevas ideas de proyectos, herramientas y recursos de Vibe Coding directamente en tu inbox.',
      placeholder: 'tu@email.com',
      cta: 'SUSCRIBIRME',
      legal: 'Sin spam. Solo proyectos. Puedes cancelar cuando quieras.',
      success: '¡Listo! Revisa tu email para confirmar.',
      error: 'Algo salió mal. Inténtalo de nuevo.',
    },
  },

  about: {
    hero: {
      headline: 'QUIÉNES VIBEAN',
      subheadline: 'Un manifiesto sobre el futuro del desarrollo de software.',
    },
    manifesto: {
      title: 'EL MANIFIESTO',
    },
    pillars: {
      title: 'PILARES',
    },
    newsletter: {
      headline: 'ÚNETE AL MOVIMIENTO',
      description: 'Si llegaste hasta aquí, ya eres parte de esto. Recibe proyectos nuevos cada semana.',
      placeholder: 'tu@email.com',
      cta: 'QUIERO PROYECTOS',
    },
  },

  project: {
    backLabel: 'VOLVER A PROYECTOS',
    levels: {
      principiante: 'PRINCIPIANTE',
      intermedio: 'INTERMEDIO',
      avanzado: 'AVANZADO',
    },
    sections: {
      overview: 'OVERVIEW',
      problem: 'EL PROBLEMA',
      solution: 'SOLUCIÓN PROPUESTA',
      techStack: 'TECH STACK',
      features: 'MVP FEATURES',
      steps: 'PASOS SUGERIDOS',
      learning: 'LO QUE VAS A APRENDER',
      resources: 'RECURSOS Y REFERENCIAS',
    },
    meta: {
      estimatedTime: 'TIEMPO ESTIMADO',
      toolSuggestion: 'HERRAMIENTA SUGERIDA',
      level: 'NIVEL',
    },
    cta: {
      headline: '¿LISTO PARA CONSTRUIRLO?',
      description: 'Abre tu herramienta de Vibe Coding favorita y empieza a construir.',
      button: 'INICIAR PROYECTO',
    },
  },

  footer: {
    tagline: 'Ideas que la IA puede construir hoy.',
    copyright: '© 2026 Vibe is Coding. Todos los derechos reservados.',
    links: {
      privacy: 'Privacidad',
      terms: 'Términos',
    },
  },

  common: {
    loading: 'Cargando...',
    error: 'Algo salió mal.',
    notFound: 'No encontrado.',
  },
} as const

export type I18nKeys = typeof es
