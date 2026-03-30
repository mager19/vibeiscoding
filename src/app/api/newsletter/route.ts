import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body

    // Validación server-side — no confiar en el cliente
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email requerido' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    // TODO: Rate limiting — implementar con Upstash Redis (upstash/ratelimit) o en middleware
    //   antes de ir a producción. Estrategia recomendada:
    //   - Límite: 3 intentos por IP cada 60 minutos
    //   - Usar `@upstash/ratelimit` + `@upstash/redis` con `Ratelimit.slidingWindow(3, '60 m')`
    //   - Leer IP de `req.headers.get('x-forwarded-for') ?? req.ip`

    // TODO: Integrar con Mailchimp API usando MAILCHIMP_API_KEY y MAILCHIMP_AUDIENCE_ID del .env.local
    //   Endpoint: POST https://us<DC>.api.mailchimp.com/3.0/lists/<AUDIENCE_ID>/members
    //   Body: { email_address: email, status: 'subscribed' }
    //   Auth: Bearer MAILCHIMP_API_KEY (nunca exponer como NEXT_PUBLIC_*)

    // Por ahora retorna 200 (integración Mailchimp pendiente)
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch {
    // No exponer stack traces en producción
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
