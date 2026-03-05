import { MapPin, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contactanos" className="bg-foreground text-primary-foreground">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo and endorsement */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/40">
              CON EL AVAL DE
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary-foreground/90 text-foreground">
                <span className="text-[7px] font-bold leading-none">CEQ</span>
              </div>
              <span className="text-sm text-primary-foreground/80">Centro de Exposiciones Quito</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary-foreground/90 text-foreground">
                <span className="text-[6px] font-bold leading-none">CAPEIPI</span>
              </div>
              <span className="text-sm text-primary-foreground/80">CAPEIPI</span>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-bold text-accent">Menu</h3>
            <nav className="mt-4 flex flex-col gap-2.5">
              <a href="#inicio" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                Inicio
              </a>
              <a href="#quienes-somos" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                Quienes Somos
              </a>
              <a href="#contactanos" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                Contactanos
              </a>
            </nav>
          </div>

          {/* Direccion - now includes all contact info */}
          <div>
            <h3 className="text-sm font-bold text-accent">Direccion</h3>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Av. Amazonas N34-332 y Av. Atahualpa</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm text-primary-foreground/60">098 893 9148</p>
                  <p className="text-sm text-primary-foreground/60">099 893 8002</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-primary-foreground/60">@muebleydecoracion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 px-6 py-5 text-center">
        <p className="text-xs text-primary-foreground/40">
          {"© magnetostudio 2025. Quito, Ecuador. All Rights Reserved."}
        </p>
      </div>
    </footer>
  )
}
