"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "INICIO" },
  { href: "#quienes-somos", label: "Quienes Somos" },
  { href: "#contactanos", label: "CONTÁCTANOS" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo on the left */}
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-10 w-10 flex-col items-center justify-center rounded bg-primary text-primary-foreground">
            <span className="text-[9px] font-bold leading-none">5ta</span>
            <span className="text-[7px] leading-none">EDICION</span>
          </div>
          <div>
            <p className="text-sm font-bold leading-tight text-primary-foreground">MUEBLE</p>
            <p className="text-[10px] font-semibold text-accent">{"& DECORACION"}</p>
          </div>
        </a>

        {/* Nav links in the center */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-primary-foreground/90 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA on the right */}
        <a
          href="#contactanos"
          className="hidden rounded border border-primary-foreground/30 px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 md:inline-block"
        >
          MAS INFORMACION
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-primary-foreground/10 bg-foreground px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium text-primary-foreground/90"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contactanos"
            className="mt-3 inline-block rounded border border-primary-foreground/30 px-5 py-2 text-sm font-semibold text-primary-foreground"
            onClick={() => setMobileOpen(false)}
          >
            MAS INFORMACION
          </a>
        </div>
      )}
    </nav>
  )
}
