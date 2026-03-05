"use client"

const brands = [
  "QIRU Muebles",
  "Melgar",
  "MUEBLAR",
  "Jimenez Galeria",
  "Colonial",
  "QIRU Muebles",
  "Melgar",
  "MUEBLAR",
  "Jimenez Galeria",
  "Colonial",
]

export function BrandsSection() {
  return (
    <section className="bg-background py-14">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center font-serif text-2xl font-bold text-primary md:text-3xl">
          Marcas participantes
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll-left items-center gap-16 whitespace-nowrap px-8">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex h-16 shrink-0 items-center justify-center rounded-lg border border-border bg-background px-8"
            >
              <span className="text-sm font-bold tracking-wide text-foreground">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
