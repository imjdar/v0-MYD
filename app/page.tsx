import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { EditionSection } from "@/components/edition-section"
import { CountdownSection } from "@/components/countdown-section"
import { MissionSection } from "@/components/mission-section"
import { VisionSection } from "@/components/vision-section"
import { ExpositorCTA } from "@/components/expositor-cta"
import { ValuesSection } from "@/components/values-section"
import { ClientsSection } from "@/components/clients-section"
import { FindSection } from "@/components/find-section"
import { CommitmentSection } from "@/components/commitment-section"
import { TicketsCTA } from "@/components/tickets-cta"
import { Footer } from "@/components/footer"
import { PopupForm } from "@/components/popup-form"

export default function HomePage() {
  return (
    <main>
      <PopupForm />
      <Navbar />
      {/* 1. Video Hero */}
      <HeroSection />
      {/* 2. Marcas participantes - infinite carousel */}
      <BrandsSection />
      {/* 3. 5ta Edicion + Countdown */}
      <EditionSection />
      <CountdownSection />
      {/* 4. Mision, Vision y Valores icons */}
      <MissionSection />
      {/* 5. Nuestra Vision */}
      <VisionSection />
      {/* 6. Expositor CTA -> WhatsApp */}
      <ExpositorCTA />
      {/* 7. Nuestros Valores (4 numbered cards) */}
      <ValuesSection />
      {/* 8. Nuestros Clientes */}
      <ClientsSection />
      {/* 9. Lo que encontraras */}
      <FindSection />
      {/* 10. Comprometidos */}
      <CommitmentSection />
      {/* 11. Adquiere tus entradas -> opens form */}
      <TicketsCTA />
      {/* 12. Footer with maps link */}
      <Footer />
    </main>
  )
}
