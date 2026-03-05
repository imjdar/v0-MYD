import { MapPin, AtSign, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contactanos" className="border-t border-border bg-foreground text-primary-foreground">
      {/* Top section with info bar content */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-primary-foreground">Centro de Exposiciones Quito</p>
              <p className="text-xs text-primary-foreground/60">Av. Amazonas N34-332 y Av. Atahualpa</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <AtSign className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-primary-foreground">Redes sociales</p>
              <p className="text-xs text-primary-foreground/60">@muebleydecoracion</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="text-sm font-semibold text-primary-foreground">Contactanos</p>
              <p className="text-xs text-primary-foreground/60">098 893 9148</p>
              <p className="text-xs text-primary-foreground/60">099 893 8002</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo and endorsement */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">
              CON EL AVAL DE
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-foreground text-foreground">
                <span className="text-[8px] font-bold">CEQ</span>
              </div>
              <span className="text-sm font-semibold text-primary-foreground">Centro de Exposiciones Quito</span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-foreground text-foreground">
                <span className="text-[7px] font-bold">CAPEIPI</span>
              </div>
              <span className="text-sm font-semibold text-primary-foreground">CAPEIPI</span>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-bold text-accent">Menu</h3>
            <nav className="mt-3 flex flex-col gap-2">
              <a href="#inicio" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Inicio
              </a>
              <a href="#quienes-somos" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Quienes Somos
              </a>
              <a href="#contactanos" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Contactanos
              </a>
            </nav>
          </div>

          {/* Dirección */}
          <div>
            <h3 className="text-sm font-bold text-accent">Direccion</h3>
            <div className="mt-3 flex flex-col gap-2 text-sm text-primary-foreground/70">
              <p>Av. Amazonas N34-332 y Av. Atahualpa</p>
              <p>098 893 9148</p>
              <p>@muebleydecoracion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 px-6 py-4 text-center">
        <p className="text-xs text-primary-foreground/50">
          {"© magnetostudio 2025. Quito, Ecuador. All Rights Reserved."}
        </p>
      </div>
    </footer>
  )
}
