import { Monitor, Users, Clock, Globe } from "lucide-react"

const benefits = [
  {
    icon: Monitor,
    title: "Clases 100% Online",
    description:
      "Estudia desde la comodidad de tu hogar con nuestra plataforma interactiva y fácil de usar.",
  },
  {
    icon: Users,
    title: "Profesores Expertos",
    description:
      "Nuestro equipo está formado por docentes con amplia experiencia y pasión por la enseñanza.",
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    description:
      "Elige los horarios que mejor se adapten a tu rutina. Clases de mañana, tarde o noche.",
  },
  {
    icon: Globe,
    title: "Adaptado a cada País",
    description:
      "Contenido alineado al plan de estudios de cada país de Latinoamérica.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Beneficios
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-foreground md:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            En PrimeMath combinamos tecnología y experiencia para ofrecerte la
            mejor experiencia de aprendizaje.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <benefit.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
