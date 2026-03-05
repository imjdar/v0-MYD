const brands = [
  "COLINEAL", "Art & Design", "TRINEU", "PIEDRA", "Chaidneza", "MaderArt"
]

export function BrandsSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center font-serif text-2xl font-bold text-primary md:text-3xl">
          Marcas participantes
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-16 items-center justify-center rounded-lg border border-border bg-background px-6 transition-shadow hover:shadow-md"
            >
              <span className="text-sm font-semibold tracking-wide text-muted-foreground">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
