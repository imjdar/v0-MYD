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
            Visión.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Ser la feria líder en Ecuador que proyecte al mundo las excelencias del sector maderero y
            del diseño de mobiliario, posicionando a nuestros artesanos y creadores como referentes
            de calidad, innovación y elegancia, entre reseñas que exceden expectativas.
          </p>
          <a
            href="#valores"
            className="mt-6 inline-block rounded border-2 border-foreground px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Más información
          </a>
        </div>
        <div className="relative flex-1">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/vision-poster.jpg"
              alt="Póster de la Feria Mueble y Decoración"
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
