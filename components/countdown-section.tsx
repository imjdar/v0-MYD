a"use client"

import { useEffect, useState } from "react"

const TARGET_DATE = new Date("2026-04-03T00:00:00").getTime()

/**
 * Calculates remaining time in days, hours, minutes, and seconds.
 */
function getTimeLeft() {
  const now = Date.now()
  const diff = TARGET_DATE - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

/**
 * @component CountdownSection
 * @description
 * Displays a live countdown timer until the event start date (April 3, 2026).
 * Safe against hydrated mismatches because the timer starts running client-side.
 */
export function CountdownSection() {
  // Initialize with zeros to avoid SSR/client hydration mismatch
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Set real time immediately on mount (client only)
    setTime(getTimeLeft())
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { value: time.days, label: "DÍAS" },
    { value: time.hours, label: "HORAS" },
    { value: time.minutes, label: "MINUTOS" },
    { value: time.seconds, label: "SEGUNDOS" },
  ]

  return (
    <section className="bg-gradient-to-br from-foreground to-foreground/90 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Header */}
        <p className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-3">
          Cuenta regresiva
        </p>
        <h3 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
          Feria Mueble y Decoración
        </h3>
        <p className="mt-2 text-sm font-semibold text-accent">VI Edición</p>
        <p className="mt-1 text-sm text-primary-foreground/60">
          Del{" "}
          <span className="font-bold text-primary-foreground">03 de abril</span>{" "}
          al{" "}
          <span className="font-bold text-primary-foreground">19 de abril de 2026</span>
        </p>
        <p className="text-xs text-primary-foreground/40 mt-0.5">Centro de Exposiciones Quito</p>

        {/* Countdown cards */}
        <div className="mt-10 flex items-center justify-center gap-3 md:gap-5">
          {units.map((u, idx) => (
            <div key={u.label} className="flex items-center gap-3 md:gap-5">
              <div className="relative flex flex-col items-center">
                <div className="relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-5 backdrop-blur-sm md:px-8 md:py-7 gradient-border">
                  <span className="block text-4xl font-bold tabular-nums text-primary-foreground md:text-6xl">
                    {pad(u.value)}
                  </span>
                </div>
                <span className="mt-2 text-[9px] font-bold tracking-[0.25em] text-primary-foreground/40">
                  {u.label}
                </span>
              </div>
              {idx < units.length - 1 && (
                <span className="mb-6 text-2xl font-bold text-primary-foreground/20 md:text-3xl">:</span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => {
            const event = new CustomEvent("open-form")
            window.dispatchEvent(event)
          }}
          className="shimmer-btn mt-10 inline-block rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-widest text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
        >
          ASEGURAR MI ENTRADA
        </button>
      </div>
    </section>
  )
}
