"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Image from "next/image"
// Logos de marcas/auspiciantes participantes
// Usando las imágenes auspcianteMYD_1.jpg → auspcianteMYD_13.jpg
const brands = Array.from({ length: 13 }, (_, i) => ({
  name: `Auspiciante ${i + 1}`,
  logo: `/auspcianteMYD_${i + 1}.jpg`,
}))

/**
 * @component BrandsSection
 * @description
 * Displays an infinite scrolling marquee of participating brand and sponsor logos.
 * Uses a CSS animation and a tripled array to ensure seamless looping.
 */
export function BrandsSection() {
  // Triplicamos para que el bucle sea verdaderamente infinito sin saltos
  const tripled = [...brands, ...brands, ...brands]

  return (
    <section className="bg-background py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center mb-10">
        <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
          Marcas Participantes
        </p>
        <h2 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl">
          Nuestros Expositores
        </h2>
      </div>

      {/* Carrusel infinito */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-scroll-left items-center gap-6 whitespace-nowrap">
          {tripled.map((brand, i) => (
            <div
              key={`brand-${i}`}
              className="group flex h-20 w-28 sm:h-24 sm:w-36 shrink-0 items-center justify-center rounded-2xl border border-border bg-white px-2 sm:px-3 py-2 sm:py-3 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={80}
                className="max-h-16 w-auto max-w-full object-contain transition-all duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
