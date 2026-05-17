import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { PaymentMethodsSection } from "@/components/payment-methods-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <PaymentMethodsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
