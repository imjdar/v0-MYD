"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function EditionSection() {
  const ref = useScrollReveal()

  return (
    <section className="bg-background py-24" ref={ref}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 md:flex-row md:gap-20">
        {/* Text */}
        <div className="flex-1 reveal reveal-left">
          <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3">
            Sobre la feria
          </p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl xl:text-6xl">
            {"¡Esta es nuestra"}
            <br />
            <span className="text-primary">{"VI Edición!"}</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            En la Feria Mueble y Decoración celebramos la esencia del arte ecuatoriano en madera,
            trayendo lo mejor de la artesanía, diseño y tradición a Quito. Del{" "}
            <strong className="text-foreground">03 al 19 de abril de 2026</strong>.
          </p>
          <a
            href="#quienes-somos"
            className="shimmer-btn mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Más información
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Image */}
        <div className="relative flex-1 reveal reveal-right">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/fondo_2.jpg"
              alt="Inauguración de la VI Edición de la Feria Mueble y Decoración"
              width={600}
              height={400}
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Badge */}
            <div className="absolute bottom-5 left-5 rounded-2xl bg-primary/90 px-5 py-3 backdrop-blur-sm">
              <p className="text-xs font-bold tracking-wider text-primary-foreground/80 uppercase">Edición</p>
              <p className="font-serif text-3xl font-bold text-accent leading-tight">VI</p>
            </div>
          </div>
          {/* Decorative ring */}
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full border border-primary/10 -z-10" />
          <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full border border-primary/05 -z-10" />
        </div>
      </div>
    </section>
  )
}
