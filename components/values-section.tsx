"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Award, Lightbulb, Users, Leaf } from "lucide-react"

const values = [
  {
    number: "1",
    icon: Award,
    title: "Calidad y Tradición",
    description:
      "Cada pieza refleja dedicación y excelencia. Incorporamos el arte ancestral de la madera y el diseño ecuatoriano.",
  },
  {
    number: "2",
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Impulsamos la creatividad para generar propuestas modernas y vanguardistas.",
  },
  {
    number: "3",
    icon: Users,
    title: "Identidad y Conexión",
    description:
      "Promovemos lo nuestro, rescatando la riqueza cultural del país. Creamos vínculos entre artesanos, diseñadores, marcas y público.",
  },
  {
    number: "4",
    icon: Leaf,
    title: "Sostenibilidad",
    description:
      "Apoyamos prácticas responsables que cuiden nuestro entorno.",
  },
]

export function ValuesSection() {
  const ref = useScrollReveal()

  return (
    <section id="valores" className="bg-background py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="reveal text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3">
            Nuestra esencia
          </p>
          <h2 className="reveal delay-150 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Nuestros Valores
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((v, i) => {
            const Icon = v.icon
            const revealClass = i % 2 === 0 ? "reveal-left" : "reveal-right"
            const delays = ["delay-100", "delay-200", "delay-300", "delay-400"]
            return (
              <div
                key={v.number}
                className={`${revealClass} ${delays[i]} group relative flex gap-5 rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 overflow-hidden`}
              >
                {/* Background number */}
                <span className="absolute right-5 top-3 font-serif text-7xl font-bold text-primary/5 select-none">
                  {v.number}
                </span>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <div className="relative">
                  <h3 className="font-serif text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
