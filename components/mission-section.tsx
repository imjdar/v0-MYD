import { Sparkles, Shield, Lightbulb, Leaf, Link2 } from "lucide-react"

const missionValues = [
  { icon: Sparkles, label: "Calidad" },
  { icon: Shield, label: "Tradición" },
  { icon: Lightbulb, label: "Innovación" },
  { icon: Leaf, label: "Sostenibilidad" },
  { icon: Link2, label: "Conexión" },
]

export function MissionSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-primary">Nosotros</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          Misión, Visión y Valores
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
          {missionValues.map((v) => {
            const Icon = v.icon
            return (
              <div key={v.label} className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{v.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
