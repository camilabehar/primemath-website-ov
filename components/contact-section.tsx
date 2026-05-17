"use client"

import { useState } from "react"
import { Send, MessageCircle } from "lucide-react"

const countries = [
  "Argentina",
  "Bolivia",
  "Brasil",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Ecuador",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "México",
  "Nicaragua",
  "Panamá",
  "Paraguay",
  "Perú",
  "Puerto Rico",
  "República Dominicana",
  "Uruguay",
  "Venezuela",
]

const levels = [
  "Apoyo Escolar Secundaria",
  "Preparación Universitaria",
  "Ingreso a Colegios y Facultades",
  "Exámenes y Tutorías Especiales",
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    nombre: "",
    correo: "",
    pais: "",
    nivel: "",
    mensaje: "",
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormState({ nombre: "", correo: "", pais: "", nivel: "", mensaje: "" })
  }

  const whatsappUrl = "https://wa.me"

  return (
    <section id="contacto" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contacto
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-foreground md:text-4xl">
            ¿Listo para empezar?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Completa el formulario y nos pondremos en contacto contigo. También
            puedes escribirnos directamente por WhatsApp.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-card p-6 shadow-sm lg:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Nombre */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="nombre"
                  className="text-sm font-medium text-foreground"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formState.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
              </div>

              {/* Correo */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="correo"
                  className="text-sm font-medium text-foreground"
                >
                  Correo electrónico
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  required
                  value={formState.correo}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
              </div>

              {/* País */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="pais"
                  className="text-sm font-medium text-foreground"
                >
                  País
                </label>
                <select
                  id="pais"
                  name="pais"
                  required
                  value={formState.pais}
                  onChange={handleChange}
                  className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                >
                  <option value="" disabled>
                    Selecciona tu país
                  </option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Nivel */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="nivel"
                  className="text-sm font-medium text-foreground"
                >
                  Nivel de interés
                </label>
                <select
                  id="nivel"
                  name="nivel"
                  required
                  value={formState.nivel}
                  onChange={handleChange}
                  className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                >
                  <option value="" disabled>
                    Selecciona un nivel
                  </option>
                  {levels.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mensaje */}
            <div className="mt-5 flex flex-col gap-1.5">
              <label
                htmlFor="mensaje"
                className="text-sm font-medium text-foreground"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={formState.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos en qué podemos ayudarte..."
                className="resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                Enviar Mensaje
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-card shadow-lg shadow-[#25D366]/25 transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Chatear por WhatsApp
              </a>
            </div>

            {submitted && (
              <p className="mt-4 text-center text-sm font-medium text-accent">
                {"¡Gracias! Nos pondremos en contacto contigo pronto."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
