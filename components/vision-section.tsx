import Image from "next/image"

export function VisionSection() {
  return (
    <section id="quienes-somos" className="bg-background py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:flex-row">
        <div className="flex-1">
          <p className="text-sm font-semibold tracking-widest text-primary">Nosotros</p>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Nuestra
            <br />
            <span className="text-primary">Vision.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Ser la feria lider en Ecuador que proyecta al mundo la excelencia del sector maderero y
            del diseno de mobiliario, posicionando a nuestros artesanos y creadores como referentes
            de calidad, innovacion y elegancia.
          </p>
          <a
            href="#valores"
            className="mt-6 inline-block rounded bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Mas informacion
          </a>
        </div>
        <div className="relative flex-1">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/vision-poster.jpg"
              alt="Poster de la Feria Mueble y Decoracion"
              width={500}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
