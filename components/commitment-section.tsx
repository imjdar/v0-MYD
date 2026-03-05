import { Search, Truck, HeadphonesIcon } from "lucide-react"

const commitments = [
  {
    icon: Search,
    title: "Últimas tendencias y modelos",
    description:
      "Ofrecemos las últimas tendencias en muebles y decoración del país, con diseño y calidad a precios de fábrica.",
  },
  {
    icon: Truck,
    title: "Entregas ágiles en todo el país",
    description:
      "Hacemos entregas rápidas y seguras de muebles a cualquier ciudad del país, para que tu hogar se transforme sin demoras.",
  },
  {
    icon: HeadphonesIcon,
    title: "Servicio al cliente",
    description:
      "Nuestro equipo está listo para ayudarte con cualquier duda o consulta durante tu visita.",
  },
]

export function CommitmentSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Comprometidos en ofrecer
          <br />
          la mejor experiencia
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Buscamos inspirar, apoyar y conectar al talento ecuatoriano con un público que valora la
          autenticidad, la innovación y la calidad en cada creación.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {commitments.map((c) => {
            const Icon = c.icon
            return (
              <div key={c.title} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
