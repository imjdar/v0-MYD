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
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-sm font-medium tracking-wide text-primary-foreground/90 transition-colors hover:text-primary-foreground md:block"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contactanos"
          className="hidden rounded border border-primary-foreground/30 px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 md:inline-block"
        >
          MÁS INFORMACIÓN
        </a>
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
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
            MÁS INFORMACIÓN
          </a>
        </div>
      )}
    </nav>
  )
}
