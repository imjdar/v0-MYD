"use client"

import Image from "next/image"
import { HERO_VIDEO_URL, HERO_BACKGROUND_URL } from "@/lib/config"

/**
 * @component HeroSection
 * @description
 * Renders the main above-the-fold content of the homepage.
 * Features a full-width background video for mobile/desktop, scroll indicator,
 * and a text overlay containing the title, description, event dates, and main CTAs.
 */
export function HeroSection() {
  return (
    <>
      {/* ─── 1. VIDEO HERO ──────────────────────────────────────────── */}
      {/*
       *  Mobile  → video al ancho completo con su aspecto natural (no crop, no espacio negro)
       *  Desktop → ocupa toda la pantalla desde abajo del navbar con object-cover
       */}
      <section id="inicio" className="relative bg-foreground overflow-hidden">

        {/* Spacer for fixed navbar */}
        <div className="h-[70px] md:h-[100px]" aria-hidden />

        {/* Video wrapper */}
        <div className="relative w-full md:h-[calc(100vh-100px)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            // Optimización: Solo descargar metadatos inicialmente y usar poster estático
            preload="metadata"
            poster="/images/hero-feria.jpg"
            /* Mobile: contain inside natural ratio — no cropping, no black gap
               Desktop: cover to fill the full viewport height */
            className="w-full h-auto block object-contain md:absolute md:inset-0 md:h-full md:w-full md:object-cover"
          >
            <source
              src={HERO_VIDEO_URL}
              type="video/mp4"
            />
          </video>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce-down z-10">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-primary-foreground/70 uppercase">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-primary-foreground/50 to-transparent" />
        </div>
      </section>

      {/* ─── 2. TEXTO con imagen de fondo optimizada ─────────────────── */}
      <section className="relative overflow-hidden bg-foreground py-16 sm:py-24 md:py-32">
        {/*
         *  Optimización: Usamos next/image con 'fill' en lugar de backgroundImage.
         *  Esto permite que Next.js detecte el tamaño de pantalla del usuario y sirva
         *  una versión comprimida (AVIF/WebP) y redimensionada automáticamente.
         */}
        <Image
          src={HERO_BACKGROUND_URL}
          alt="Stand de Feria Mueble y Decoración"
          fill
          priority // Carga prioritaria al estar "above the fold"
          quality={85}
          className="object-cover object-center opacity-25"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-10">
          <div className="max-w-2xl">
            <p className="hero-animate text-[10px] sm:text-xs font-bold tracking-[0.3em] text-accent uppercase mb-4">
              Feria Mueble y Decoración · VI Edición
            </p>
            <h1 className="hero-animate-delay-1 font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-primary-foreground">
              <span className="block">FERIA</span>
              <span className="block text-accent">MUEBLE Y</span>
              <span className="block">DECORACIÓN</span>
            </h1>
            <p className="hero-animate-delay-2 mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Somos el punto de encuentro que reúne a los mejores artesanos, diseñadores y marcas del
              país, creando un espacio donde la tradición, la innovación y la elegancia se unen para
              mostrar al mundo la grandeza del talento ecuatoriano.
            </p>
            <div className="hero-animate-delay-3 mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  const event = new CustomEvent("open-form")
                  window.dispatchEvent(event)
                }}
                className="shimmer-btn inline-block rounded-full bg-primary px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-widest text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                OBTENER ENTRADA
              </button>
              <a
                href="#quienes-somos"
                className="inline-block rounded-full border border-primary-foreground/30 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-widest text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/10 hover:-translate-y-0.5"
              >
                CONOCER MÁS
              </a>
            </div>
            <div className="hero-animate-delay-4 mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 text-primary-foreground/60">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-primary-foreground">03 – 19</span>
                <span className="text-[10px] sm:text-xs tracking-widest uppercase">Abril 2026</span>
              </div>
              <div className="h-8 w-[1px] bg-primary-foreground/20" />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-primary-foreground">+15</span>
                <span className="text-[10px] sm:text-xs tracking-widest uppercase">Expositores</span>
              </div>
              <div className="h-8 w-[1px] bg-primary-foreground/20" />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold text-accent">VI</span>
                <span className="text-[10px] sm:text-xs tracking-widest uppercase">Edición</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
