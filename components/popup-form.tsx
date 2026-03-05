"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const cities = [
  "Quito", "Guayaquil", "Cuenca", "Ambato", "Riobamba", "Loja",
  "Ibarra", "Esmeraldas", "Machala", "Santo Domingo", "Otra"
]

export function PopupForm() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nombres: "", apellidos: "", cedula: "", celular: "",
    ciudad: "Quito", correo: "", privacy: false, promo: false,
  })

  useEffect(() => {
    // Open on page load
    const timer = setTimeout(() => setOpen(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Listen for "open-form" events from other components
    const handler = () => setOpen(true)
    window.addEventListener("open-form", handler)
    return () => window.removeEventListener("open-form", handler)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setOpen(false)
      setSubmitted(false)
    }, 3000)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-background p-6 shadow-2xl md:p-8">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Cerrar formulario"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <span className="text-3xl text-primary">&#10003;</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              {"!Gracias por registrarte!"}
            </h3>
            <p className="text-sm text-muted-foreground">
              Te enviaremos tu entrada de cortesia a tu correo.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="text-center">
              <h3 className="font-serif text-xl font-bold text-primary md:text-2xl">
                {"LLENA EL FORMULARIO Y !GANA UNA ENTRADA DE CORTESIA!"}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-xs font-bold text-foreground">Nombres</label>
                <input
                  type="text"
                  required
                  placeholder="Ingrese su nombre"
                  value={form.nombres}
                  onChange={(e) => setForm({ ...form, nombres: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-foreground">Apellidos</label>
                <input
                  type="text"
                  required
                  placeholder="Ingrese su apellido"
                  value={form.apellidos}
                  onChange={(e) => setForm({ ...form, apellidos: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-foreground">{"Cedula / RUC"}</label>
              <input
                type="text"
                required
                placeholder="Ingrese su cedula o RUC"
                value={form.cedula}
                onChange={(e) => setForm({ ...form, cedula: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-foreground">Numero de Celular</label>
              <input
                type="tel"
                required
                placeholder="09 9999 999"
                value={form.celular}
                onChange={(e) => setForm({ ...form, celular: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-foreground">{"De que ciudad nos escribes?"}</label>
              <select
                value={form.ciudad}
                onChange={(e) => setForm({ ...form, ciudad: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              >
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-bold text-foreground">Correo Electronico</label>
              <input
                type="email"
                required
                placeholder="ejemplo@correo.com"
                value={form.correo}
                onChange={(e) => setForm({ ...form, correo: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  required
                  checked={form.privacy}
                  onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
                />
                <span>
                  Acepto la politica de privacidad y el tratamiento de mis datos para fines comerciales.{" "}
                  <span className="cursor-pointer text-primary">(Ver politica)</span>
                </span>
              </label>
              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={form.promo}
                  onChange={(e) => setForm({ ...form, promo: e.target.checked })}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
                />
                <span>
                  Acepto recibir comunicaciones comerciales y promocionales de la Feria Mueble y Decoracion.{" "}
                  <span className="cursor-pointer text-primary">(Saber mas)</span>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary/70 py-3.5 text-sm font-bold tracking-wider text-primary-foreground transition-colors hover:bg-primary"
            >
              ENVIAR Y PARTICIPAR
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
