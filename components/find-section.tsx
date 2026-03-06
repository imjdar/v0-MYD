"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { CheckCircle } from "lucide-react"

const features = [
  "Artistas Invitados",
  "Marketing de Influencers",
  "Capacitaciones para Expositores",
  "Presencia en TV y Radio",
  "Stands de comida",
  "Atención de Lunes a Domingo",
]

export function FindSection() {
  const ref = useScrollReveal()

  return (
    <section className="bg-[#1a1a1a] py-24" ref={ref}>
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-14 px-6 md:flex-row md:gap-20">
        {/* Left */}
        <div className="flex-1 reveal reveal-left">
          <p className="text-xs font-bold tracking-[0.3em] text-[#d4af37] uppercase mb-3">
            Experiencia
          </p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
            Lo que
            <br />
            <span className="text-[#d4af37]">encontrarás</span>
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-gray-300">
            La feria de muebles y decoración más reconocida de Quito, con una propuesta única e inigualable.
          </p>
          <a
            href="#inicio"
            className="shimmer-btn mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold tracking-wider text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
          >
            CONOCER MÁS
          </a>
        </div>

        {/* Right grid */}
        <div className="grid flex-1 grid-cols-2 gap-4">
          {features.map((f, i) => {
            const delays = ["delay-100", "delay-200", "delay-300", "delay-400", "delay-500", "delay-600"]
            return (
              <div
                key={f}
                className={`reveal-scale ${delays[i]} group flex items-center gap-3 rounded-2xl border border-white/5 bg-[#252525] px-5 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#2a2a2a] hover:border-[#d4af37]/40 hover:-translate-y-0.5`}
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-[#d4af37]" />
                {f}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
