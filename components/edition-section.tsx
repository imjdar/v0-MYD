import Image from "next/image"

export function EditionSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 md:flex-row">
        <div className="flex-1">
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl">
            {"¡Ésta es nuestra"}
            <br />
            <span className="text-primary">{"5ta Edición!"}</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            En la Feria Mueble y Decoración celebramos la esencia del arte ecuatoriano en madera,
            trayendo lo mejor de la artesanía, diseño y tradición a Quito.
          </p>
          <a
            href="#quienes-somos"
            className="mt-6 inline-block rounded bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Más información
          </a>
        </div>
        <div className="relative flex-1">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/edition-event.jpg"
              alt="Inauguración de la 5ta Edición de la Feria Mueble y Decoración"
              width={600}
              height={400}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
