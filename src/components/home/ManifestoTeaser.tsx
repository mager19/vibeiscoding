import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GradientText } from "@/components/ui";

export function ManifestoTeaser() {
  return (
    <section className="bg-surface-low py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left — headline */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-ultra text-tertiary mb-4">// MANIFIESTO</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none">
              <span className="text-on-surface block">LA IA NO TE</span>
              <GradientText variant="full" className="block">
                REEMPLAZA.
              </GradientText>
              <span className="text-on-surface block">TE POTENCIA.</span>
            </h2>

            <div className="mt-8 h-px w-16" style={{ background: "rgba(172,138,255,0.4)" }} />
          </div>

          {/* Right — body */}
          <div className="flex flex-col gap-6 pt-1 lg:pt-14">
            <p className="text-base text-on-surface-variant font-light leading-relaxed">
              Vibe Coding no es un atajo para evitar aprender a programar. Es una manera diferente de hacerlo: construyendo proyectos reales desde el primer
              día, con la IA como compañero que escribe código, explica cada decisión y te da contexto mientras avanzas.
            </p>
            <p className="text-base text-on-surface-variant font-light leading-relaxed">
              Cada proyecto que construyes con IA es también un proyecto que puedes estudiar, desmontar y comparar con lo que ya sabes. La idea puede irte bien
              o mal — pero en ambos casos aprendes algo que ningún tutorial puede enseñarte: cómo piensa un sistema real.
            </p>

            {/* Frase de cierre con énfasis visual */}
            <div className="border-l-2 pl-4" style={{ borderColor: "rgba(172,138,255,0.4)" }}>
              <p className="text-base font-light leading-relaxed">
                <span className="text-on-surface-variant">Los programadores que entienden esto </span>
                <span className="font-semibold uppercase" style={{ color: "#e30071" }}>
                  no compiten
                </span>
                <span className="text-on-surface-variant"> con la IA. </span>
                <span className="font-semibold uppercase" style={{ color: "#ac8aff" }}>
                  La dirigen.
                </span>
              </p>
              <p className="mt-3 text-sm text-on-surface-variant/60 font-light leading-relaxed">
                Esa diferencia — entre quien ejecuta prompts y quien toma decisiones — es lo que estos proyectos están diseñados a desarrollar.
              </p>
            </div>

            {/* CTA manifiesto */}
            <div className="pt-2">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-70"
                style={{ color: "#ac8aff" }}>
                Ver el manifiesto completo
                <ArrowRight size={13} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
