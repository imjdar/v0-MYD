import { MapPin } from "lucide-react"

export function LocationSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl">
          {"¡NOS VEMOS!"}
        </h2>
        <p className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          Centro de Exposiciones Quito
        </p>
        <p className="text-sm text-accent">Av. Amazonas N34-332 y Av. Atahualpa</p>
        <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-lg">
          <iframe
            title="Ubicación Centro de Exposiciones Quito"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7981!2d-78.48!3d-0.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a1078e!2sCentro+de+Exposiciones+Quito!5e0!3m2!1ses!2sec!4v1709654000000!5m2!1ses!2sec"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
