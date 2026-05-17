import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { PaymentMethodsSection } from "@/components/payment-methods-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <PaymentMethodsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
