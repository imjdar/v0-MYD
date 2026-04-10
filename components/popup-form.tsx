"use client"

import { useState, useEffect, useMemo } from "react"
import { X, Sparkles, Loader2 } from "lucide-react"
import Swal from "sweetalert2"
import { GOOGLE_SCRIPT_URL, COLOR_SUCCESS } from "@/lib/config"

type FormState = {
  nombres: string
  celular: string
  correo: string
}

type Errors = Partial<Record<keyof FormState, string>>

function validate(form: FormState): Errors {
  const errors: Errors = {}
  if (!form.nombres.trim()) errors.nombres = "Por favor, dinos tu nombre"
  if (form.celular.trim().length !== 10) {
    errors.celular = "Falta llenar el número (debe tener 10 dígitos)"
  } else if (!form.celular.startsWith("09")) {
    errors.celular = "El número debe empezar con 09"
  }
  if (!form.correo.trim()) {
    errors.correo = "Tu correo es necesario para enviarte la entrada"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
    errors.correo = "El formato del correo no es correcto"
  }
  return errors
}

export function PopupForm() {
  const [open, setOpen] = useState(false)
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [form, setForm] = useState<FormState>({
    nombres: "",
    celular: "",
    correo: "",
  })

  const errors = useMemo(() => validate(form), [form])
  const isFormValid = Object.keys(errors).length === 0

  useEffect(() => {
    const timer = setTimeout(() => {
      const isAfterCutoff = Date.now() > new Date("2026-04-19T20:00:00-05:00").getTime()
      if (!isAfterCutoff) setOpen(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handler = () => {
      const isAfterCutoff = Date.now() > new Date("2026-04-19T20:00:00-05:00").getTime()
      if (isAfterCutoff) {
        window.open("https://wa.me/593988939149?text=estoy%20interesado%20en%20entradas%20del%20evento", "_blank")
      } else {
        setOpen(true)
      }
    }
    window.addEventListener("open-form", handler)
    return () => window.removeEventListener("open-form", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTouched({ nombres: true, celular: true, correo: true })
    if (!isFormValid) return

    const payload = {
      nombres: form.nombres,
      celular: form.celular,
      correo: form.correo,
      ciudad: null,
      apellidos: null,
      cedula: null,
      aceptaPoliticas: true,
      aceptaComunicaciones: true
    }

    // --- VISUAL TRICK: OPTIMISTIC FEEDBACK ---
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    }).catch(err => console.error("Background save failed:", err))

    setOpen(false)
    Swal.fire({
      icon: "success",
      title: "¡Reserva Lista!",
      text: "Su entrada gratis ha sido enviada a su correo. Si no la visualiza en unos minutos, revise su carpeta de spam.",
      confirmButtonColor: "#8B1A1A",
      confirmButtonText: "¡Genial! 🎉",
    })
  }

  if (!open) return null

  const inputStyles = (key: keyof FormState) => {
    const error = touched[key] && errors[key]
    return `w-full border-b bg-transparent px-0 py-2.5 text-base text-foreground transition-all focus:outline-none placeholder:text-muted-foreground/30 ${
      error ? "border-[#8B1A1A] border-b-2" : "border-muted focus:border-foreground"
    }`
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/20 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] bg-[#FBF8F6] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:p-12">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 rounded-full p-2 text-muted-foreground/40 transition-colors hover:bg-black/5 hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-8 mt-4 text-center">
          <h2 className="mb-2 font-serif text-3xl font-medium tracking-tight text-[#1A1A1A]">
            Reserva tu lugar
          </h2>
          <p className="text-sm font-light tracking-wide text-muted-foreground">
            Solo 3 datos — menos de 30 segundos
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="space-y-0.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Tu Nombre
            </label>
            <input
              type="text"
              placeholder="¿Cómo te llamas?"
              value={form.nombres}
              onChange={e => setForm({ ...form, nombres: e.target.value.replace(/[0-9]/g, "") })}
              onBlur={() => setTouched({ ...touched, nombres: true })}
              className={inputStyles("nombres")}
            />
            {touched.nombres && errors.nombres && (
              <p className="mt-1 text-[10px] text-red-500 font-medium leading-tight">{errors.nombres}</p>
            )}
          </div>

          <div className="space-y-0.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Whatsapp (10 dígitos)
            </label>
            <input
              type="tel"
              placeholder="Ej. 0987654321"
              value={form.celular}
              onChange={e => setForm({ ...form, celular: e.target.value.replace(/\D/g, "").slice(0, 10) })}
              onBlur={() => setTouched({ ...touched, celular: true })}
              className={inputStyles("celular")}
              inputMode="tel"
            />
            {touched.celular && errors.celular && (
              <p className="mt-1 text-[10px] text-red-500 font-medium leading-tight">{errors.celular}</p>
            )}
          </div>

          <div className="space-y-0.5">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Correo Electrónico
            </label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={form.correo}
              onChange={e => setForm({ ...form, correo: e.target.value })}
              onBlur={() => setTouched({ ...touched, correo: true })}
              className={inputStyles("correo")}
            />
            {touched.correo && errors.correo && (
              <p className="mt-1 text-[10px] text-red-500 font-medium leading-tight">{errors.correo}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#8B1A1A] py-5 text-sm font-bold tracking-[0.15em] text-white transition-all hover:scale-[1.02] hover:bg-[#A52020] active:scale-[0.98] disabled:opacity-40 disabled:scale-100 disabled:cursor-not-allowed"
          >
            OBTENER MI ENTRADA GRATIS
          </button>

          <p className="flex items-center justify-center gap-2 text-center text-[10px] font-light text-muted-foreground/60">
            <span className="text-sm">🔒</span> Tus datos no serán compartidos con terceros
          </p>
        </form>
      </div>
    </div>
  )
}
