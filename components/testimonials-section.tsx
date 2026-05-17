import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos M.",
    country: "Colombia",
    avatar: "C",
    result: "Ingresó a la Universidad Nacional",
    text: "Gracias a PrimeMath logré aprobar mi examen de admisión a la primera. Los simulacros y la atención personalizada hicieron toda la diferencia. Totalmente recomendado.",
    stars: 5,
  },
  {
    name: "Sofía R.",
    country: "Chile",
    avatar: "S",
    result: "Subió sus notas en 1 mes",
    text: "Mi hija pasó de tener un 4.0 a un 6.5 en matemáticas en solo un mes. Los profesores son increíbles y se adaptan al ritmo de cada estudiante.",
    stars: 5,
  },
  {
    name: "Mateo V.",
    country: "Argentina",
    avatar: "M",
    result: "Aprobó Análisis Matemático II",
    text: "Estaba por recursar la materia, pero con PrimeMath entendí conceptos que llevaba meses sin poder resolver. Las clases son claras y muy bien organizadas.",
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Testimonios
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold text-foreground md:text-4xl">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Historias reales de alumnos y padres que confiaron en PrimeMath para
            alcanzar sus metas academicas.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Quote icon */}
              <Quote className="mb-4 h-8 w-8 text-accent/20" />

              {/* Review text */}
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${t.text}"`}
              </p>

              {/* Stars */}
              <div className="mt-5">
                <StarRating count={t.stars} />
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-border" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}{" "}
                    <span className="font-normal text-muted-foreground">
                      de {t.country}
                    </span>
                  </p>
                  <p className="text-xs font-medium text-accent">{t.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
