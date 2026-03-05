import { MapPin, AtSign, Phone } from "lucide-react"

export function InfoBar() {
  return (
    <section className="border-b border-border bg-background px-6 pt-20 pb-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded bg-primary text-primary-foreground">
            <span className="text-[10px] font-bold leading-none">5ta</span>
            <span className="text-[8px] leading-none">EDICIÓN</span>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">MUEBLE</p>
            <p className="text-xs font-semibold text-accent">&amp; DECORACIÓN</p>
          </div>
        </div>

        {/* Info items */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Centro de Exposiciones Quito</p>
              <p className="text-xs text-muted-foreground">Av. Amazonas N34-332 y Av. Atahualpa</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <AtSign className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Redes sociales</p>
              <p className="text-xs text-muted-foreground">@muebleydecoracion</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-semibold text-foreground">Contáctanos</p>
              <p className="text-xs text-muted-foreground">098 893 9148</p>
              <p className="text-xs text-muted-foreground">099 893 8002</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
