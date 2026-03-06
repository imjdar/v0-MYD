import { Calendar, Clock, MapPin, Map, MessageCircle, Instagram, Phone, ExternalLink } from "lucide-react"
import { WHATSAPP_URL, INSTAGRAM_URL, MAPS_URL, PHONE_1, PHONE_2, STUDIO_NAME } from "@/lib/config"
import Image from "next/image"

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
            <div className="mt-5 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-24 items-center justify-center rounded-lg bg-white px-2 py-1.5">
                  <Image
                    src="/images/LOGO CEQ.png"
                    alt="Centro de Exposiciones Quito"
                    width={96}
                    height={48}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <span className="text-sm text-primary-foreground/70">Centro de Exposiciones Quito</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-24 items-center justify-center rounded-lg bg-white px-2 py-1.5">
                  <Image
                    src="/images/logotipoCAPEIPI.jpg.jpeg"
                    alt="CAPEIPI"
                    width={96}
                    height={48}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <span className="text-sm text-primary-foreground/70">CAPEIPI</span>
              </div>
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
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer noopener" aria-label="CONTÁCTANOS" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                Contáctanos
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
                  <p className="text-sm text-primary-foreground/60">{PHONE_1}</p>
                  <p className="text-sm text-primary-foreground/60">{PHONE_2}</p>
                </div>
              </div>
              <a
                href={INSTAGRAM_URL}
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
      <div className="border-t border-primary-foreground/10 px-6 py-6 text-center space-y-1.5">
        <p className="text-xs text-primary-foreground/40">
          © Feria Mueble y Decoración 2026. Quito, Ecuador. All Rights Reserved.
        </p>
        <p className="text-[11px] text-primary-foreground/25">
          Estudio creativo {STUDIO_NAME}
        </p>
      </div>
    </footer>
  )
}
