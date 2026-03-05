const features = [
  "Artistas Invitados",
  "Marketing de Influencers",
  "Capacitaciones para Expositores",
  "Presencia en TV y Radio",
  "Stands de comida",
  "Atención de Lunes a Domingo",
]

export function FindSection() {
  return (
    <section className="bg-foreground py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 md:flex-row">
        <div className="flex-1">
          <h2 className="font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-4xl">
            Lo que
            <br />
            encontrarás
          </h2>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">
            La feria de muebles y decoración más reconocida de Quito.
          </p>
          <a
            href="#inicio"
            className="mt-5 inline-block rounded border-2 border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            CONOCER MÁS
          </a>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-3">
          {features.map((f) => (
            <div
              key={f}
              className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
