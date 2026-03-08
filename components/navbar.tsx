"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/config"

const navLinks = [
  { href: "#inicio", label: "INICIO" },
  { href: "#quienes-somos", label: "QUIÉNES SOMOS" },
  { href: "#entradas", label: "ENTRADAS" },
  { href: WHATSAPP_URL, label: "CONTÁCTANOS", external: true },
]

/**
 * @component Navbar
 * @description
 * Main sticky navigation bar for the application.
 * Highlights the brand logo and allows jumping to internal sections via anchor links.
 * Adjusts its background styling based on scroll position.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/95 backdrop-blur-md shadow-lg"
        : "bg-background/80 backdrop-blur-sm"
        } text-foreground`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5">
        {/* Logo image */}
        <a href="#inicio" className="flex items-center space-x-2 md:space-x-4 shrink-0 group">
          <div className="relative h-[64px] w-[64px] md:h-[80px] md:w-[80px] shrink-0 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo v02.png"
              alt="Feria Mueble y Decoración — VI Edición"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm md:text-xl font-bold leading-tight text-foreground tracking-wide">MUEBLE</p>
            <p className="text-[10px] md:text-sm font-semibold text-accent tracking-wider">{"& DECORACIÓN"}</p>
          </div>
        </a>

        {/* Nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={(link as { external?: boolean }).external ? "_blank" : undefined}
              rel={(link as { external?: boolean }).external ? "noreferrer noopener" : undefined}
              aria-label={link.label}
              className="relative text-xs font-bold tracking-wider text-foreground/80 transition-colors hover:text-foreground group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => {
            const event = new CustomEvent("open-form")
            window.dispatchEvent(event)
          }}
          className="shimmer-btn hidden rounded-full border border-accent/60 px-5 py-2 text-xs font-bold tracking-wider text-accent transition-all hover:bg-accent hover:text-accent-foreground md:inline-block"
        >
          OBTENER ENTRADA
        </button>

        {/* Mobile button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-6 py-5 md:hidden shadow-lg shadow-black/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-bold tracking-wider text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false)
              const event = new CustomEvent("open-form")
              window.dispatchEvent(event)
            }}
            className="mt-4 w-full rounded-xl bg-primary py-3 text-sm font-bold tracking-wider text-primary-foreground"
          >
            OBTENER ENTRADA
          </button>
        </div>
      )}
    </nav>
  )
}
