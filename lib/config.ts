/**
 * lib/config.ts
 * ─────────────────────────────────────────────────────────────
 * Single source of truth for all environment-driven config.
 * Components import from here — never from process.env directly.
 *
 * All values prefixed NEXT_PUBLIC_ are safe for the browser bundle.
 * Server-only secrets (no prefix) must NOT be imported in client components.
 */

const required = (key: string): string => {
    const value = process.env[key]
    if (!value) {
        // In production, throw hard. In dev, warn so the dev server still starts.
        if (process.env.NODE_ENV === "production") {
            throw new Error(`Missing required environment variable: ${key}`)
        }
        console.warn(`[config] Missing env var: ${key}`)
        return ""
    }
    return value
}

// ─── Site ─────────────────────────────────────────────────────
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://muebleydecoracion.com.ec"

// ─── Google APIs ───────────────────────────────────────────────
export const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? ""

// ─── Contact ───────────────────────────────────────────────────
export const WHATSAPP_URL = required("NEXT_PUBLIC_WHATSAPP_URL") || "https://wa.link/ycxpp3"
export const EXPOSITOR_WHATSAPP_URL = required("NEXT_PUBLIC_EXPOSITOR_WHATSAPP_URL") || "https://wa.link/o47nf0"
export const INSTAGRAM_URL = required("NEXT_PUBLIC_INSTAGRAM_URL") || "https://www.instagram.com/muebleydecoracion"
export const MAPS_URL = process.env.NEXT_PUBLIC_MAPS_URL ?? ""
export const PHONE_1 = process.env.NEXT_PUBLIC_PHONE_1 ?? ""
export const PHONE_2 = process.env.NEXT_PUBLIC_PHONE_2 ?? ""

// ─── Media ─────────────────────────────────────────────────────
export const HERO_VIDEO_URL = process.env.NEXT_PUBLIC_HERO_VIDEO_URL ?? ""

// ─── Event ─────────────────────────────────────────────────────
export const EVENT_START = process.env.NEXT_PUBLIC_EVENT_START ?? "2026-04-03"
export const EVENT_END = process.env.NEXT_PUBLIC_EVENT_END ?? "2026-04-19"
export const EVENT_DATES = process.env.NEXT_PUBLIC_EVENT_DATES ?? "03 – 19"

// ─── Studio ────────────────────────────────────────────────────
export const STUDIO_URL = process.env.NEXT_PUBLIC_STUDIO_URL ?? "https://growco2026.com"
export const STUDIO_NAME = process.env.NEXT_PUBLIC_STUDIO_NAME ?? "Growco 2026"

// ─── Brand colors (design tokens — kept here for Swal/JS usage) ─
export const COLOR_PRIMARY = "#8B1A1A"
export const COLOR_SUCCESS = "#28a745"
export const COLOR_ACCENT = "#D4A017"
