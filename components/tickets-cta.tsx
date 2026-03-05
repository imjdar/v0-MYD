export function TicketsCTA() {
  return (
    <section id="entradas" className="relative overflow-hidden bg-primary py-16">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent" />
        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-accent" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 md:flex-row">
        <div className="flex-1">
          <h2 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
            {"¡ADQUIERE TUS ENTRADAS YA!"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85">
            Con tu entrada, no solo disfrutarás de una experiencia única con lo mejor en mueblería y
            decoración del país, sino que también participarás en sorteos sin costo con premios
            durante todo el evento.
          </p>
          <p className="mt-3 text-sm text-primary-foreground/85">
            La entrada general tiene un costo de <span className="font-bold text-primary-foreground">$2</span>, y para niños y adultos mayores es de solo{" "}
            <span className="font-bold text-primary-foreground">$1</span>.
          </p>
        </div>
        <a
          href="#contactanos"
          className="inline-block rounded-lg border-2 border-primary-foreground bg-primary-foreground px-8 py-4 text-sm font-bold tracking-wide text-primary transition-transform hover:scale-105"
        >
          OBTENER
          <br />
          ENTRADAS
        </a>
      </div>
    </section>
  )
}
