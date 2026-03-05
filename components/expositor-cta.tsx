import { MessageCircle } from "lucide-react"

export function ExpositorCTA() {
  return (
    <section className="bg-primary py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center md:flex-row md:text-left">
        <MessageCircle className="h-10 w-10 shrink-0 text-primary-foreground/80" />
        <div className="flex-1">
          <p className="text-sm font-bold uppercase tracking-wide text-primary-foreground md:text-base">
            {"¿ERES EXPOSITOR O REPRESENTANTE DE UNA MARCA DE MUEBLES O DECORACIÓN EN EL PAÍS?"}
          </p>
          <p className="mt-1 text-xs text-primary-foreground/80 md:text-sm">
            {"SI TE INTERESA PARTICIPAR EN LA FERIA, NO DUDES EN DEJARNOS UN MENSAJE. ¡NOS ENCANTARÍA CONTAR CONTIGO!"}
          </p>
        </div>
        <a
          href="#contactanos"
          className="inline-flex items-center gap-2 rounded border-2 border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
        >
          CONTÁCTANOS
          <MessageCircle className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
