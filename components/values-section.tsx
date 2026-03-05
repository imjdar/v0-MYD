import { Award, Lightbulb, Users, Leaf } from "lucide-react"

const values = [
  {
    number: "1",
    icon: Award,
    title: "Calidad y Tradición",
    description:
      "Cada pieza refleja dedicación y excelencia. Incorporamos el arte ancestral de la madera y el diseño ecuatoriano.",
  },
  {
    number: "2",
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Impulsamos la creatividad para generar propuestas modernas y vanguardistas.",
  },
  {
    number: "3",
    icon: Users,
    title: "Identidad y Conexión",
    description:
      "Promovemos lo nuestro, rescatando la riqueza cultural del país. Creamos vínculos entre artesanos, diseñadores, marcas y público.",
  },
  {
    number: "4",
    icon: Leaf,
    title: "Sostenibilidad",
    description:
      "Apoyamos prácticas responsables que cuiden nuestro entorno.",
  },
]

export function ValuesSection() {
  return (
    <section id="valores" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Nuestros Valores
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <div
                key={v.number}
                className="group flex gap-5 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {v.number}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="font-serif text-lg font-bold text-foreground">{v.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
