"use client"

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-foreground">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MYD-NvYWYybCDBpX5GgKOwFYHW8Cz5wu1v.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-7xl flex-col justify-end px-6 pb-16 pt-24 md:min-h-[650px]">
        <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
          <span className="text-primary-foreground">FERIA MUEBLE Y</span>
          <br />
          <span className="text-accent">DECORACION</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
          Somos el punto de encuentro que reune a los mejores artesanos, disenadores y marcas del
          pais, creando un espacio donde la tradicion, la innovacion y la elegancia se unen para
          mostrar al mundo la grandeza del talento ecuatoriano.
        </p>
        <div className="mt-6">
          <button
            onClick={() => {
              const event = new CustomEvent("open-form")
              window.dispatchEvent(event)
            }}
            className="inline-block rounded bg-primary px-8 py-3 text-sm font-bold tracking-wide text-primary-foreground transition-transform hover:scale-105"
          >
            OBTENER ENTRADA
          </button>
        </div>
      </div>
    </section>
  )
}
