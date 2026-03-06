"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Search, Truck, HeadphonesIcon } from "lucide-react"

const commitments = [
  {
    icon: Search,
    title: "Últimas tendencias y modelos",
    description:
      "Ofrecemos las últimas tendencias en muebles y decoración del país, con diseño y calidad a precios de fábrica.",
  },
  {
    icon: Truck,
    title: "Entregas ágiles en todo el país",
    description:
      "Hacemos entregas rápidas y seguras de muebles a cualquier ciudad del país, para que tu hogar se transforme sin demoras.",
  },
  {
    icon: HeadphonesIcon,
    title: "Servicio al cliente",
    description:
      "Nuestro equipo está listo para ayudarte con cualquier duda o consulta durante tu visita.",
  },
]

export function CommitmentSection() {
  const ref = useScrollReveal()

  return (
    <section className="bg-background py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="reveal text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3">
          Nuestro compromiso
        </p>
        <h2 className="reveal delay-150 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Comprometidos en ofrecer
          <br />
          la mejor experiencia
        </h2>
        <p className="reveal delay-300 mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Buscamos inspirar, apoyar y conectar al talento ecuatoriano con un público que valora la
          autenticidad, la innovación y la calidad en cada creación.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {commitments.map((c, i) => {
            const Icon = c.icon
            const delays = ["delay-200", "delay-400", "delay-600"]
            return (
              <div
                key={c.title}
                className={`reveal-scale ${delays[i]} group flex flex-col items-center text-center rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-2`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                  <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
