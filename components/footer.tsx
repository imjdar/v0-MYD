export function Footer() {
  return (
    <footer id="contactanos" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo and endorsement */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              CON EL AVAL DE
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-foreground text-primary-foreground">
                <span className="text-[8px] font-bold">CEQ</span>
              </div>
              <span className="text-sm font-semibold text-foreground">Centro de Exposiciones Quito</span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-foreground text-primary-foreground">
                <span className="text-[7px] font-bold">CAPEIPI</span>
              </div>
              <span className="text-sm font-semibold text-foreground">CAPEIPI</span>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-bold text-primary">Menú</h3>
            <nav className="mt-3 flex flex-col gap-2">
              <a href="#inicio" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Inicio
              </a>
              <a href="#quienes-somos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Quiénes Somos
              </a>
              <a href="#contactanos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Contáctanos
              </a>
            </nav>
          </div>

          {/* Dirección */}
          <div>
            <h3 className="text-sm font-bold text-primary">Dirección</h3>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Av. Amazonas N34-332 y Av. Atahualpa</p>
              <p>098 893 9148</p>
              <p>@muebleydecoracion</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-secondary px-6 py-4 text-center">
        <p className="text-xs text-muted-foreground">
          {"© magnetostudio 2025. Quito, Ecuador. All Rights Reserved."}
        </p>
      </div>
    </footer>
  )
}
