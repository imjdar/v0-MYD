"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function TicketsCTA() {
  const ref = useScrollReveal()

  return (
    <section id="entradas" className="relative overflow-hidden bg-foreground py-24" ref={ref}>
      {/* Background image optimized */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://res.cloudinary.com/dqouabt21/image/upload/v1774653136/fondo_2_k5dp8s.png"
          alt="Fondo decorativo de la feria"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16">
        <div className="flex-1 text-center md:text-left reveal reveal-left">
          <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-4">
            No te quedes fuera
          </p>
          <h2 className="font-serif text-3xl font-bold text-accent md:text-4xl xl:text-5xl">
            ¡ADQUIERE TUS<br />ENTRADAS YA!
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/80">
            <strong>Entrada gratis hasta el 02 de abril del 2026.</strong> A partir del 03 de abril,
            costo normal de entradas. Con tu entrada disfrutarás de una experiencia única con
            lo mejor en muebles y decoración del país.
          </p>
          <div className="mt-5 flex flex-wrap gap-6">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary-foreground">$2</span>
              <span className="text-xs tracking-widest text-primary-foreground/60 uppercase">Entrada General</span>
            </div>
            <div className="h-12 w-[1px] bg-primary-foreground/20 self-center" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary-foreground">$1</span>
              <span className="text-xs tracking-widest text-primary-foreground/60 uppercase">Niños y Adultos Mayores</span>
            </div>
          </div>
        </div>

        <div className="reveal-right shrink-0 delay-300">
          <button
            onClick={() => {
              const event = new CustomEvent("open-form")
              window.dispatchEvent(event)
            }}
            className="shimmer-btn group flex flex-col items-center justify-center gap-2 rounded-3xl bg-primary px-14 py-8 text-center font-bold tracking-wider text-primary-foreground shadow-2xl shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-1"
          >
            <span className="text-xs tracking-[0.3em] text-primary-foreground/70 uppercase">Click aquí</span>
            <span className="text-2xl">OBTENER</span>
            <span className="text-2xl">ENTRADAS</span>
          </button>
        </div>
      </div>
    </section>
  )
}
