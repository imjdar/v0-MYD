"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { HERO_VIDEO_URL } from "@/lib/config"

/**
 * @component VisionSection
 * @description
 * Showcases the fundamental vision of the event with text and an accompanying looping video.
 * Configured with scroll reveal animations for better engagement.
 */
export function VisionSection() {
  const ref = useScrollReveal()

  return (
    <section id="quienes-somos" className="bg-background py-16 sm:py-24" ref={ref}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:gap-20">
        {/* Text */}
        <div className="flex-1 reveal reveal-left">
          <p className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-3">
            Nosotros
          </p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl xl:text-6xl">
            Nuestra
            <br />
            <span className="text-primary">Visión.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Ser la feria líder en Ecuador que proyecta al mundo la excelencia del sector maderero y
            del diseño de mobiliario, posicionando a nuestros artesanos y creadores como referentes
            de calidad, innovación y elegancia.
          </p>
          <a
            href="#valores"
            className="shimmer-btn mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Más información
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Video in loop (replaces image) */}
        <div className="relative flex-1 reveal reveal-right">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-foreground">
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-label="Feria Mueble y Decoración Video Promocional"
              className="w-full h-auto object-contain max-h-[500px] block"
            >
              <source
                src={HERO_VIDEO_URL}
                type="video/mp4"
              />
            </video>
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6">
              <p className="text-xs font-bold tracking-widest text-primary-foreground/60 uppercase">Feria</p>
              <p className="font-serif text-2xl font-bold text-primary-foreground">Mueble y Decoración</p>
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
