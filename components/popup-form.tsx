"use client"

import { useState, useEffect, useMemo } from "react"
import { X, AlertCircle, Loader2 } from "lucide-react"
import Swal from "sweetalert2"
import { GOOGLE_SCRIPT_URL, COLOR_PRIMARY, COLOR_SUCCESS } from "@/lib/config"


const cities = [
  "Quito", "Guayaquil", "Cuenca", "Ambato", "Riobamba", "Loja",
  "Ibarra", "Esmeraldas", "Machala", "Santo Domingo", "Otra"
]

type FormState = {
  nombres: string
  apellidos: string
  cedula: string
  celular: string
  ciudad: string
  correo: string
  privacy: boolean
  promo: boolean
}

type Errors = Partial<Record<keyof FormState, string>>

// --- VALIDACIÓN CÉDULA/RUC ECUADOR ---
function validarIdentificacionEcuador(id: string): boolean {
  const num = id.replace(/[\s-]/g, "")
  if (num.length !== 10 && num.length !== 13) return false
  if (num.length === 13 && num.substring(10, 13) !== "001") return false

  const digitos = num.substring(0, 10)
  const provincia = parseInt(digitos.substring(0, 2), 10)
  if (provincia < 1 || (provincia > 24 && provincia !== 30)) return false

  const tercerDigito = parseInt(digitos.substring(2, 3), 10)
  if (tercerDigito >= 6) return false // Solo aplica para personas naturales (cédula o RUC natural)

  const digitoVerificador = parseInt(digitos.substring(9, 10), 10)
  let suma = 0
  for (let i = 0; i < 9; i++) {
    let valor = parseInt(digitos.charAt(i), 10)
    if (i % 2 === 0) {
      valor = valor * 2
      if (valor > 9) valor -= 9
    }
    suma += valor
  }

  const modulo = suma % 10
  const verificadorCalculado = modulo === 0 ? 0 : 10 - modulo

  return verificadorCalculado === digitoVerificador
}

function validate(form: FormState): Errors {
  const errors: Errors = {}

  if (!form.nombres.trim())
    errors.nombres = "Ingresa tu nombre"
  else if (form.nombres.trim().length < 2)
    errors.nombres = "Nombre muy corto"

  if (!form.apellidos.trim())
    errors.apellidos = "Ingresa tu apellido"
  else if (form.apellidos.trim().length < 2)
    errors.apellidos = "Apellido muy corto"

  if (!form.cedula.trim())
    errors.cedula = "Ingresa tu cédula o RUC"
  else if (!validarIdentificacionEcuador(form.cedula))
    errors.cedula = "Cédula o RUC ecuatoriano inválido"

  if (!form.celular.trim())
    errors.celular = "Ingresa tu número de celular"
  else if (!/^[0-9+\s-]{7,15}$/.test(form.celular))
    errors.celular = "Número inválido"

  if (!form.correo.trim())
    errors.correo = "Ingresa tu correo electrónico"
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo))
    errors.correo = "Correo inválido"

  if (!form.privacy)
    errors.privacy = "Debes aceptar la política de privacidad"

  return errors
}

export function PopupForm() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [form, setForm] = useState<FormState>({
    nombres: "", apellidos: "", cedula: "", celular: "",
    ciudad: "Quito", correo: "", privacy: false, promo: false,
  })

  // Compute errors at all times
  const errors = useMemo(() => validate(form), [form])
  const isFormValid = Object.keys(errors).length === 0

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener("open-form", handler)
    return () => window.removeEventListener("open-form", handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const handleBlur = (key: keyof FormState) => {
    setTouched(prev => ({ ...prev, [key]: true }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const allTouched = Object.keys(form).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as Record<keyof FormState, boolean>
    )
    setTouched(allTouched)
    if (!isFormValid) return

    setLoading(true)

    // ─ SweetAlert2: Loading ─────────────────────────────────────
    Swal.fire({
      title: "Verificando datos...",
      text: "Por favor espera un momento.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => Swal.showLoading(),
    })

    const payload = {
      nombres: form.nombres,
      apellidos: form.apellidos,
      cedula: form.cedula,
      celular: form.celular,
      ciudad: form.ciudad,
      correo: form.correo,
      // Exact field names expected by the Google Apps Script
      aceptaPoliticas: form.privacy,
      aceptaComunicaciones: form.promo,
    }

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        // text/plain avoids CORS preflight — Google Apps Script requires this
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      })
      const result = await res.json()

      if (result.status === "duplicate") {
        // ─ SweetAlert2: Duplicado ────────────────────────────────
        Swal.fire({
          icon: "warning",
          title: "Registro Duplicado",
          text: "Los datos ingresados (Cédula, Celular o Correo) ya se encuentran registrados para esta feria.",
          confirmButtonColor: COLOR_PRIMARY,
          confirmButtonText: "Entendido",
        })

      } else if (result.status === "success") {
        // ─ SweetAlert2: Éxito ─────────────────────────────────────
        Swal.fire({
          icon: "success",
          title: "¡Registro Exitoso!",
          text: "Tu pase de cortesía ha sido generado. Por favor, revisa tu correo electrónico (si no lo visualizas, revisa tu carpeta de Spam).",
          confirmButtonColor: COLOR_SUCCESS,
          confirmButtonText: "¡Genial! 🎉",
          allowOutsideClick: false,
          allowEscapeKey: false,
          didOpen: () => {
            Swal.disableButtons()
            setTimeout(() => Swal.enableButtons(), 2000)
          }
        }).then(() => setOpen(false))

      } else if (result.status === "error") {
        // ─ GAS saved data but email sending failed — treat as soft success
        Swal.fire({
          icon: "info",
          title: "¡Registro guardado!",
          text: "Tus datos fueron registrados. El correo de confirmación puede tardar unos minutos en llegar (recuerda revisar también tu carpeta de Spam).",
          confirmButtonColor: COLOR_PRIMARY,
          confirmButtonText: "Entendido",
          allowOutsideClick: false,
          allowEscapeKey: false,
          didOpen: () => {
            Swal.disableButtons()
            setTimeout(() => Swal.enableButtons(), 2000)
          }
        }).then(() => setOpen(false))

      } else {
        // ─ Unexpected response
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema procesando tu solicitud. Inténtalo nuevamente.",
          confirmButtonColor: COLOR_PRIMARY,
        })
      }

    } catch {
      // ─ SweetAlert2: Error conexión ──────────────────────────────
      Swal.fire({
        icon: "error",
        title: "Error de conexión",
        text: "No pudimos conectar con el servidor. Revisa tu conexión e intenta de nuevo.",
        confirmButtonColor: COLOR_PRIMARY,
      })
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  const fieldClass = (key: keyof FormState) => {
    const base = "w-full rounded-xl border bg-background px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:outline-none focus:ring-2"
    const hasError = touched[key] && errors[key]
    const hasOk = touched[key] && !errors[key] && (form[key] as string)?.length > 0
    if (hasError) return `${base} border-destructive focus:ring-destructive/30`
    if (hasOk) return `${base} border-green-500 focus:ring-green-500/20`
    return `${base} border-border focus:border-primary focus:ring-primary/20`
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/70 p-3 sm:p-4 backdrop-blur-sm">
      <div className="relative max-h-[88vh] w-full max-w-md overflow-y-auto rounded-3xl bg-background shadow-2xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/20 hover:[&::-webkit-scrollbar-thumb]:bg-primary/40">
        {/* Header */}
        <div className="sticky top-0 z-10 rounded-t-3xl bg-background px-6 pt-6 pb-4 border-b border-border/50">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground"
            aria-label="Cerrar formulario"
          >
            <X className="h-5 w-5" />
          </button>
          <h3 className="font-serif text-xl font-bold text-primary pr-8 md:text-2xl leading-snug">
            ¡Gana una entrada de cortesía!
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">Llena el formulario para participar</p>
        </div>

        {/* Form — Swal handles all feedback, no custom success screen needed */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 px-6 py-5">

          {/* Nombres + Apellidos */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-bold text-foreground">
                Nombres <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                placeholder="Tu nombre"
                value={form.nombres}
                onChange={e => handleChange("nombres", e.target.value)}
                onBlur={() => handleBlur("nombres")}
                className={fieldClass("nombres")}
              />
              {touched.nombres && errors.nombres && (
                <p className="mt-1 flex items-center gap-1 text-[10px] text-destructive">
                  <AlertCircle className="h-3 w-3" />{errors.nombres}
                </p>
              )}
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold text-foreground">
                Apellidos <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                placeholder="Tu apellido"
                value={form.apellidos}
                onChange={e => handleChange("apellidos", e.target.value)}
                onBlur={() => handleBlur("apellidos")}
                className={fieldClass("apellidos")}
              />
              {touched.apellidos && errors.apellidos && (
                <p className="mt-1 flex items-center gap-1 text-[10px] text-destructive">
                  <AlertCircle className="h-3 w-3" />{errors.apellidos}
                </p>
              )}
            </div>
          </div>

          {/* Cédula */}
          <div>
            <label className="mb-1 block text-xs font-bold text-foreground">
              Cédula / RUC <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              placeholder="0000000000"
              value={form.cedula}
              onChange={e => handleChange("cedula", e.target.value.replace(/\D/g, "").slice(0, 13))}
              onBlur={() => handleBlur("cedula")}
              className={fieldClass("cedula")}
              inputMode="numeric"
            />
            {touched.cedula && errors.cedula && (
              <p className="mt-1 flex items-center gap-1 text-[10px] text-destructive">
                <AlertCircle className="h-3 w-3" />{errors.cedula}
              </p>
            )}
          </div>

          {/* Celular */}
          <div>
            <label className="mb-1 block text-xs font-bold text-foreground">
              Número de Celular <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              placeholder="09 9999 9999"
              value={form.celular}
              onChange={e => handleChange("celular", e.target.value)}
              onBlur={() => handleBlur("celular")}
              className={fieldClass("celular")}
              inputMode="tel"
            />
            {touched.celular && errors.celular && (
              <p className="mt-1 flex items-center gap-1 text-[10px] text-destructive">
                <AlertCircle className="h-3 w-3" />{errors.celular}
              </p>
            )}
          </div>

          {/* Ciudad */}
          <div>
            <label className="mb-1 block text-xs font-bold text-foreground">
              ¿De qué ciudad nos escribes?
            </label>
            <select
              value={form.ciudad}
              onChange={e => handleChange("ciudad", e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {cities.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Correo */}
          <div>
            <label className="mb-1 block text-xs font-bold text-foreground">
              Correo Electrónico <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={form.correo}
              onChange={e => handleChange("correo", e.target.value)}
              onBlur={() => handleBlur("correo")}
              className={fieldClass("correo")}
            />
            {touched.correo && errors.correo && (
              <p className="mt-1 flex items-center gap-1 text-[10px] text-destructive">
                <AlertCircle className="h-3 w-3" />{errors.correo}
              </p>
            )}
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col gap-3">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <div className="relative mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  checked={form.privacy}
                  onChange={e => handleChange("privacy", e.target.checked)}
                  onBlur={() => handleBlur("privacy")}
                  className="h-4 w-4 cursor-pointer rounded border-border accent-primary"
                />
              </div>
              <span className="text-xs text-muted-foreground leading-relaxed">
                Acepto la política de privacidad y el tratamiento de mis datos para fines comerciales.
                {" "}
                <button
                  type="button"
                  onClick={() => Swal.fire({
                    title: "Política de Privacidad",
                    html: `
                      <div style="text-align:left;font-size:13px;line-height:1.6;color:#333">
                        <p><strong>Conforme a la Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador</strong>, sus datos serán tratados bajo los siguientes términos:</p>
                        <ul style="padding-left:18px;margin-top:8px">
                          <li><strong>Responsable:</strong> Feria Mueble y Decoración &mdash; Quito, Ecuador.</li>
                          <li><strong>Finalidad:</strong> Gestión del registro de asistentes, entrega del pase de cortesía y comunicación de actividades del evento.</li>
                          <li><strong>Base legal:</strong> Consentimiento expreso del titular (Art. 7 LOPDP).</li>
                          <li><strong>Datos recopilados:</strong> Nombres, apellidos, cédula/RUC, celular, ciudad y correo electrónico.</li>
                          <li><strong>Conservación:</strong> Sus datos se mantendrán durante la vigencia del evento y hasta un máximo de 2 años.</li>
                          <li><strong>Derechos:</strong> Puede ejercer sus derechos ARCOP (Acceso, Rectificación, Cancelación, Oposición y Portabilidad) escribiendo a nuestro correo oficial.</li>
                          <li><strong>Transferencia:</strong> Sus datos NO serán transferidos a terceros sin su consentimiento adicional.</li>
                        </ul>
                        <p style="margin-top:10px;font-size:11px;color:#999">Marco legal: LOPDP &mdash; Registro Oficial Suplemento N.º 459 del 26 de mayo de 2021.</p>
                      </div>
                    `,
                    confirmButtonColor: "#8B1A1A",
                    confirmButtonText: "Entendido",
                    width: "560px",
                  })}
                  className="text-primary hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs font-medium"
                >
                  (Ver política)
                </button>
                <span className="text-destructive"> *</span>
              </span>
            </label>
            {touched.privacy && errors.privacy && (
              <p className="ml-7 flex items-center gap-1 text-[10px] text-destructive">
                <AlertCircle className="h-3 w-3" />{errors.privacy}
              </p>
            )}

            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.promo}
                onChange={e => handleChange("promo", e.target.checked)}
                className="mt-0.5 h-4 w-4 cursor-pointer rounded border-border accent-primary shrink-0"
              />
              <span className="text-xs text-muted-foreground leading-relaxed">
                Acepto recibir comunicaciones comerciales y promocionales de la Feria Mueble y Decoración.
                {" "}
                <button
                  type="button"
                  onClick={() => Swal.fire({
                    title: "Comunicaciones Comerciales",
                    html: `
                      <div style="text-align:left;font-size:13px;line-height:1.6;color:#333">
                        <p>Al aceptar esta casilla, la <strong>Feria Mueble y Decoración</strong> podrá contactarte con:</p>
                        <ul style="padding-left:18px;margin-top:8px">
                          <li>Información sobre próximas ediciones de la feria y eventos especiales.</li>
                          <li>Promociones exclusivas, descuentos y ofertas de nuestros expositores.</li>
                          <li>Novedades del sector de muebles, decoración y diseño de interiores.</li>
                          <li>Invitaciones a talleres, conferencias y actividades relacionadas.</li>
                        </ul>
                        <p style="margin-top:12px"><strong>Canal de comunicación:</strong> correo electrónico.</p>
                        <p style="margin-top:8px">Puedes retirar tu consentimiento en cualquier momento respondiendo el correo con el asunto <em>&ldquo;Baja de comunicaciones&rdquo;</em> o escribiéndonos directamente.</p>
                        <p style="margin-top:8px;font-size:11px;color:#999">Esta aceptación es <strong>voluntaria</strong> y no afecta tu registro en el evento.</p>
                      </div>
                    `,
                    confirmButtonColor: "#8B1A1A",
                    confirmButtonText: "Entendido",
                    width: "520px",
                  })}
                  className="text-primary hover:underline cursor-pointer bg-transparent border-0 p-0 text-xs font-medium"
                >
                  (Saber más)
                </button>
              </span>
            </label>
          </div>

          {/* Progress indicator */}
          {!isFormValid && (
            <div className="rounded-xl bg-secondary px-4 py-2.5 text-xs text-muted-foreground">
              Completa todos los campos obligatorios{" "}
              <span className="font-bold text-foreground">
                ({Object.keys(errors).length} pendiente{Object.keys(errors).length !== 1 ? "s" : ""})
              </span>
            </div>
          )}


          {/* Submit — disabled until form is valid or loading */}
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`shimmer-btn w-full rounded-xl py-4 text-sm font-bold tracking-widest transition-all flex items-center justify-center gap-2 ${isFormValid && !loading
              ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 cursor-pointer"
              : "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
              }`}
          >
            {loading ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> Enviando...</>
            ) : isFormValid ? (
              "ENVIAR Y PARTICIPAR 🎉"
            ) : (
              "COMPLETA EL FORMULARIO"
            )}
          </button>

          <p className="text-center text-[10px] text-muted-foreground">
            Los campos marcados con <span className="text-destructive font-bold">*</span> son obligatorios
          </p>
        </form>
      </div>
    </div>
  )
}
