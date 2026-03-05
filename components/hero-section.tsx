import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-foreground">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-feria.jpg"
          alt="Feria Mueble y Decoración - exhibición de muebles en Quito"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-6 pb-16 pt-20 md:min-h-[600px]">
        <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
          <span className="text-primary-foreground">FERIA MUEBLE Y</span>
          <br />
          <span className="text-accent">DECORACIÓN</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
          Somos el punto de encuentro que reúne a los mejores artesanos, diseñadores y marcas del
          país, creamos un espacio donde la tradición, la innovación y la elegancia se unen para
          mostrar al mundo lo grandioso del talento ecuatoriano.
        </p>
        <div className="mt-6">
          <a
            href="#entradas"
            className="inline-block rounded bg-primary px-8 py-3 text-sm font-bold tracking-wide text-primary-foreground transition-transform hover:scale-105"
          >
            OBTENER ENTRADA
          </a>
        </div>
      </div>
    </section>
  )
}
