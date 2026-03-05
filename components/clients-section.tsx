import Image from "next/image"

const clients = [
  {
    image: "/images/clients-1.jpg",
    title: "Nuestros Clientes",
    description: "Más de 15 Expositores referentes en Mueblería en el Ecuador.",
  },
  {
    image: "/images/clients-2.jpg",
    title: "Kits de Regalo para Expositores",
    description: "Más de 15 Expositores referentes en Mueblería en el Ecuador.",
  },
  {
    image: "/images/clients-3.jpg",
    title: "Premios sorpresa solo por asistir",
    description: "Con tu boleto participas por premios sorpresa de nuestros expositores.",
  },
]

export function ClientsSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
          Nuestros Clientes
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {clients.map((c) => (
            <div
              key={c.title}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
