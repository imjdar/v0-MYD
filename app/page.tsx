import { Navbar } from "@/components/navbar"
import { InfoBar } from "@/components/info-bar"
import { HeroSection } from "@/components/hero-section"
import { BrandsSection } from "@/components/brands-section"
import { EditionSection } from "@/components/edition-section"
import { CountdownSection } from "@/components/countdown-section"
import { VisionSection } from "@/components/vision-section"
import { ExpositorCTA } from "@/components/expositor-cta"
import { ValuesSection } from "@/components/values-section"
import { ClientsSection } from "@/components/clients-section"
import { FindSection } from "@/components/find-section"
import { CommitmentSection } from "@/components/commitment-section"
import { MissionSection } from "@/components/mission-section"
import { TicketsCTA } from "@/components/tickets-cta"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <InfoBar />
      <HeroSection />
      <BrandsSection />
      <EditionSection />
      <CountdownSection />
      <VisionSection />
      <ExpositorCTA />
      <ValuesSection />
      <ClientsSection />
      <FindSection />
      <CommitmentSection />
      <MissionSection />
      <TicketsCTA />
      <LocationSection />
      <Footer />
    </main>
  )
}
