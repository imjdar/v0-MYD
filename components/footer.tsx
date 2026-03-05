import { MapPin, Phone, Instagram, ExternalLink } from "lucide-react"

const MAPS_URL = "https://www.google.com/maps/place/Centro+de+Exposiciones+Quito/@-0.18,-78.48,17z"

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
              <a href="#entradas" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                Entradas
              </a>
              <a href="#contactanos" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                Contactanos
              </a>
            </nav>
          </div>

          {/* Direccion - includes all contact info + maps link */}
          <div>
            <h3 className="text-sm font-bold text-accent">Direccion</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2.5 transition-colors"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-sm text-primary-foreground/60 group-hover:text-primary-foreground">
                    Av. Amazonas N34-332 y Av. Atahualpa
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-accent">
                    Ver en Google Maps <ExternalLink className="h-3 w-3" />
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm text-primary-foreground/60">098 893 9148</p>
                  <p className="text-sm text-primary-foreground/60">099 893 8002</p>
                </div>
              </div>
              <a
                href="https://www.instagram.com/muebleydecoracion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition-colors"
              >
                <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-primary-foreground/60 hover:text-primary-foreground">@muebleydecoracion</p>
              </a>
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
