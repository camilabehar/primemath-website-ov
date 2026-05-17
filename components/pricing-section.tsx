import { BookOpen, GraduationCap, Zap, Check } from "lucide-react"

const WHATSAPP_NUMBER = "56934654076"

const plans = [
  {
    icon: BookOpen,
    name: "Plan Refuerzo Escolar",
    tagline: "Ideal para secundaria",
    highlight: false,
    features: [
      "Seguimiento semanal personalizado",
      "Ejercicios adaptados al programa de tu colegio",
      "Material de apoyo incluido",
      "Reportes de avance mensuales",
    ],
    message: encodeURIComponent(
      "Hola PrimeMath, me interesa el Plan Refuerzo Escolar para secundaria. ¿Me dan más información?"
    ),
  },
  {
    icon: GraduationCap,
    name: "Plan Intensivo Universitario",
    tagline: "Para ingresos y exámenes complejos",
    highlight: true,
    badge: "Recomendado",
    features: [
      "Preparación intensiva para exámenes de ingreso",
      "Simulacros y pruebas de práctica reales",
      "Sesiones ilimitadas de consultas",
      "Acompañamiento hasta el día del examen",
      "Acceso a material exclusivo",
    ],
    message: encodeURIComponent(
      "Hola PrimeMath, me interesa el Plan Intensivo Universitario. ¿Me dan más información y precios?"
    ),
  },
  {
    icon: Zap,
    name: "Clases Individuales / Express",
    tagline: "Pago por hora para dudas puntuales",
    highlight: false,
    features: [
      "Sin compromiso de suscripción",
      "Reserva cuando lo necesites",
      "Ideal para dudas antes de exámenes",
      "Sesiones de 1 o 2 horas",
    ],
    message: encodeURIComponent(
      "Hola PrimeMath, me interesa agendar una Clase Individual / Express. ¿Cuál es la disponibilidad?"
    ),
  },
]

export function PricingSection() {
  return (
    <section id="planes" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Planes
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-foreground md:text-4xl">
            Planes y Precios
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen
            clase de prueba gratuita.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.highlight
                  ? "border-accent bg-card shadow-lg shadow-accent/10"
                  : "border-border bg-card shadow-sm"
              }`}
            >
              {/* Badge */}
              {plan.highlight && plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-md shadow-accent/25">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 ${
                  plan.highlight
                    ? "bg-accent/15 text-accent"
                    : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                }`}
              >
                <plan.icon className="h-7 w-7" />
              </div>

              {/* Plan name */}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.tagline}
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-border" />

              {/* Features */}
              <ul className="flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        plan.highlight ? "text-accent" : "text-primary"
                      }`}
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price note */}
              <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground/80">
                Precios adaptados a la moneda local de tu país. Consulta
                facilidades de pago.
              </p>

              {/* CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${plan.message}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-105 ${
                  plan.highlight
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                    : "border border-primary bg-primary text-primary-foreground shadow-sm"
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar este Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
