"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Sparkles, Shield, Lightbulb, Leaf, Link2 } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/config"

const missionValues = [
  { icon: Sparkles, label: "Calidad", color: "from-amber-500/20 to-amber-500/5" },
  { icon: Shield, label: "Tradición", color: "from-primary/20  to-primary/5" },
  { icon: Lightbulb, label: "Innovación", color: "from-sky-500/20  to-sky-500/5" },
  { icon: Leaf, label: "Sostenibilidad", color: "from-green-500/20 to-green-500/5" },
  { icon: Link2, label: "Conexión", color: "from-violet-500/20 to-violet-500/5" },
]

/**
 * @component MissionSection
 * @description
 * Displays the mission, vision, and core values of the event using responsive grids and icons.
 * Includes a direct WhatsApp call-to-action button.
 */
export function MissionSection() {
  const ref = useScrollReveal()

  return (
    <section className="bg-secondary py-24" ref={ref}>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="reveal text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3">
          Nosotros
        </p>
        <h2 className="reveal delay-150 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Misión, Visión y Valores
        </h2>

        {/* 2 cols on mobile → 3 on sm → 5 on md */}
        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {missionValues.map((v, i) => {
            const Icon = v.icon
            const delays = ["delay-100", "delay-200", "delay-300", "delay-400", "delay-500"]
            return (
              <div
                key={v.label}
                className={`reveal-scale ${delays[i]} flex flex-col items-center gap-4 group`}
              >
                <div
                  className={`relative flex h-18 w-18 items-center justify-center rounded-2xl bg-gradient-to-br ${v.color} border border-white/60 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:-translate-y-1 p-4`}
                >
                  <Icon className="h-7 w-7 text-foreground transition-colors duration-300 group-hover:text-primary" />
                </div>
                <span className="text-sm font-bold tracking-wide text-foreground group-hover:text-primary transition-colors text-center">
                  {v.label}
                </span>
              </div>
            )
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="reveal delay-600 mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="CONTÁCTANOS"
            className="shimmer-btn inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-bold tracking-wider text-white shadow-md transition-all hover:bg-[#128C7E] hover:shadow-lg hover:-translate-y-0.5"
          >
            {/* WhatsApp SVG inline */}
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            CONTÁCTANOS
          </a>
        </div>
      </div>
    </section>
  )
}
