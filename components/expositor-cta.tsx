"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Users, MessageCircle } from "lucide-react"
import { EXPOSITOR_WHATSAPP_URL } from "@/lib/config"

export function ExpositorCTA() {
  const ref = useScrollReveal()

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background: "linear-gradient(135deg, #c47a5a 0%, #8b5e3c 50%, #6b4c30 100%)",
      }}
      ref={ref}
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 md:flex-row md:gap-14">
        <div className="reveal-scale shrink-0">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm">
            <Users className="h-12 w-12 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <div className="reveal flex-1 text-center md:text-left">
          <p className="text-xs font-bold tracking-[0.3em] text-white/60 uppercase mb-3">
            ¿Eres expositor?
          </p>
          <p className="text-xl font-bold uppercase leading-snug tracking-wide text-white md:text-2xl">
            ¿Eres expositor o representante de una marca de muebles o decoración?
          </p>
          <p className="mt-3 text-base font-medium text-white/80">
            Si te interesa participar en la feria, no dudes en dejarnos un mensaje. ¡Nos encantaría contar contigo!
          </p>
        </div>
        <div className="reveal-right shrink-0">
          <a
            href={EXPOSITOR_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shimmer-btn inline-flex shrink-0 items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold tracking-wider text-white shadow-lg shadow-black/20 transition-all hover:bg-[#128C7E] hover:shadow-xl hover:-translate-y-0.5"
          >
            CONTÁCTANOS
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
