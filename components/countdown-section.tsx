"use client"

import { useEffect, useState } from "react"

const TARGET_DATE = new Date("2025-11-07T00:00:00").getTime()

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

export function CountdownSection() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
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
    <section className="bg-secondary py-16">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
          <h3 className="text-lg font-bold text-foreground md:text-xl">
            {"Feria Mueble y Decoración — 5ta Edición"}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Te esperamos desde el <span className="font-bold text-foreground">7 de noviembre de 2025</span>
          </p>
          <p className="text-xs text-muted-foreground">Centro de Exposiciones Quito</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            {units.map((u) => (
              <div key={u.label} className="flex flex-col items-center">
                <span className="text-4xl font-bold text-foreground md:text-5xl">
                  {pad(u.value)}
                </span>
                <span className="mt-1 text-[10px] font-semibold tracking-widest text-muted-foreground">
                  {u.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
