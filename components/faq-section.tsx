"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Como se dictan las clases?",
    answer:
      "Las clases se dictan 100% online a traves de Zoom o Google Meet con pizarras digitales interactivas. Esto permite una experiencia de aprendizaje dinamica donde el profesor puede escribir, dibujar graficos y resolver ejercicios en tiempo real mientras el estudiante participa activamente.",
  },
  {
    question: "¿Que pasa si el alumno no puede asistir a una clase?",
    answer:
      "Las clases se pueden reprogramar una vez con una anticipacion minima de 24 horas. Entendemos que pueden surgir imprevistos, por eso ofrecemos flexibilidad para reagendar sin perder tu sesion.",
  },
  {
    question: "¿Como se el precio en la moneda de mi pais?",
    answer:
      "Al hacer clic en 'Consultar Plan' te enviaremos la cotizacion exacta convertida a tu moneda local: pesos chilenos, pesos mexicanos, pesos colombianos, soles peruanos, etc. Nos adaptamos a cada pais de Latinoamerica para que puedas pagar comodamente.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            FAQs
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-foreground md:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Resolvemos tus dudas mas comunes sobre nuestras clases y servicios.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  openIndex === index
                    ? "border-accent bg-card shadow-lg shadow-accent/5"
                    : "border-border bg-card shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                        openIndex === index
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <span className="text-base font-semibold text-foreground">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 pl-[4.75rem] leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
