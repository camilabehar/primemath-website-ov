"use client"

import { useForm, ValidationError } from "@formspree/react"
import { Send, MessageCircle, CheckCircle } from "lucide-react"

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
  const [state, handleSubmit] = useForm("xlgvrlro")

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
          {state.succeeded ? (
            <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-10 text-center shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {"¡Mensaje enviado!"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Gracias por contactarnos. Nos pondremos en contacto contigo muy
                pronto.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-card shadow-lg shadow-[#25D366]/25 transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                O escríbenos por WhatsApp
              </a>
            </div>
          ) : (
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
                    placeholder="Tu nombre"
                    className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                  <ValidationError
                    prefix="Nombre"
                    field="nombre"
                    errors={state.errors}
                    className="text-xs text-destructive"
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
                    placeholder="tu@email.com"
                    className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                  />
                  <ValidationError
                    prefix="Correo"
                    field="correo"
                    errors={state.errors}
                    className="text-xs text-destructive"
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
                    defaultValue=""
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
                  <ValidationError
                    prefix="País"
                    field="pais"
                    errors={state.errors}
                    className="text-xs text-destructive"
                  />
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
                    defaultValue=""
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
                  <ValidationError
                    prefix="Nivel"
                    field="nivel"
                    errors={state.errors}
                    className="text-xs text-destructive"
                  />
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
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  className="resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
                <ValidationError
                  prefix="Mensaje"
                  field="mensaje"
                  errors={state.errors}
                  className="text-xs text-destructive"
                />
              </div>

              {/* Form-level errors */}
              <ValidationError
                errors={state.errors}
                className="mt-3 text-center text-sm text-destructive"
              />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-transform hover:scale-105 disabled:pointer-events-none disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {state.submitting ? "Enviando..." : "Enviar Mensaje"}
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
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
