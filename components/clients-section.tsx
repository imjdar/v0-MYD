"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const clients = [
  {
    image: "https://res.cloudinary.com/dqouabt21/image/upload/v1774653140/MYD_IMG1_tukfme.webp",
    title: "Kits de Regalo para Expositores",
    description: "Más de 15 Expositores referentes en Mueblería en el Ecuador.",
  },
  {
    image: "https://res.cloudinary.com/dqouabt21/image/upload/v1774653140/MYD_IMG2_ldblt6.webp",
    title: "Premios sorpresa solo por asistir",
    description: "Con tu boleto participas por premios sorpresa de nuestros expositores.",
  },
]

export function ClientsSection() {
  const ref = useScrollReveal()

  return (
    <section className="bg-secondary py-24" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <p className="reveal text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3">
            Beneficios
          </p>
          <h2 className="reveal delay-150 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Nuestros Clientes
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {clients.map((c, i) => (
            <div
              key={c.title}
              className={`${i === 0 ? "reveal-left" : "reveal-right"} ${i === 0 ? "delay-200" : "delay-300"} group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col`}
            >
              {/* Fixed aspect ratio — both cards identical height, no crop distortion */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted shrink-0">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              </div>
              {/* Text block — same height across both cards */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-bold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
