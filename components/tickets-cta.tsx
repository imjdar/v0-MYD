"use client"

export function TicketsCTA() {
  return (
    <section id="entradas" className="relative overflow-hidden bg-foreground py-20">
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/edition-event.jpg')" }}
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 md:flex-row">
        <div className="flex-1 text-center md:text-left">
          <h2 className="font-serif text-2xl font-bold text-accent md:text-3xl">
            {"!ADQUIERE TUS ENTRADAS YA!"}
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/85">
            Con tu entrada, no solo disfrutaras de una experiencia unica con lo mejor en muebles y
            decoracion del pais, sino que tambien participaras en sorteos en vivo con premios
            durante todo el evento.
          </p>
          <p className="mt-3 text-sm text-primary-foreground/85">
            La entrada general tiene un costo de{" "}
            <span className="font-bold text-primary-foreground">$2</span>, y para ninos y adultos
            mayores es de solo <span className="font-bold text-primary-foreground">$1</span>.
          </p>
        </div>
        <button
          onClick={() => {
            const event = new CustomEvent("open-form")
            window.dispatchEvent(event)
          }}
          className="inline-block shrink-0 rounded-lg bg-primary px-10 py-5 text-center text-sm font-bold tracking-wider text-primary-foreground transition-transform hover:scale-105"
        >
          OBTENER
          <br />
          ENTRADAS
        </button>
      </div>
    </section>
  )
}
