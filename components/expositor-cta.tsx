import { Users, MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "593988939149"
const WHATSAPP_MESSAGE = encodeURIComponent("!Hola! Quiero formar parte de la Feria como expositor/a.")
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export function ExpositorCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#c47a5a]/80 to-[#8b8b8b]/60 py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 md:flex-row">
        <div className="shrink-0">
          <Users className="h-16 w-16 text-primary/80" strokeWidth={1.5} />
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-bold uppercase leading-snug tracking-wide text-foreground md:text-base">
            {"ERES EXPOSITOR O REPRESENTANTE DE UNA MARCA DE MUEBLES O DECORACION EN EL PAIS?"}
          </p>
          <p className="mt-2 text-sm font-bold uppercase text-foreground/80">
            {"SI TE INTERESA PARTICIPAR EN LA FERIA, NO DUDES EN DEJARNOS UN MENSAJE. !NOS ENCANTARIA CONTAR CONTIGO!"}
          </p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          CONTACTANOS
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
