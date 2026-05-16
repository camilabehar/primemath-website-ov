import { BookOpen, GraduationCap, School, FileText } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Apoyo Escolar Secundaria",
    description:
      "Refuerza tus conocimientos y mejora tus calificaciones con clases adaptadas al programa de tu país.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: GraduationCap,
    title: "Preparación Universitaria",
    description:
      "Prepárate para los exámenes de ingreso con ejercicios prácticos y simulacros reales.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: School,
    title: "Ingreso a Colegios y Facultades",
    description:
      "Programas especializados para que ingreses al colegio o facultad de tus sueños.",
    color: "bg-chart-3/15 text-chart-3",
  },
  {
    icon: FileText,
    title: "Exámenes y Tutorías Especiales",
    description:
      "Sesiones intensivas para exámenes parciales, finales y preparación de concursos.",
    color: "bg-chart-4/15 text-chart-4",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Nuestros Servicios
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-foreground md:text-4xl">
            Niveles que se adaptan a ti
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Sin importar en qué etapa estés, tenemos el plan perfecto para que
            alcances tus metas en matemáticas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg ${service.color}`}
              >
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
