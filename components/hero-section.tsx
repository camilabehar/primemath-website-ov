import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-16"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 lg:flex-row lg:gap-16 lg:px-8 lg:py-32">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Play className="h-3 w-3 fill-primary" />
            Clases 100% Online
          </span>

          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Domina las Matemáticas{" "}
            <span className="text-accent">a tu Propio Ritmo</span> con
            PrimeMath
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Clases personalizadas con profesores expertos para estudiantes de
            toda Latinoamérica. Desde apoyo escolar hasta ingreso universitario,
            te acompañamos en cada paso.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-transform hover:scale-105"
            >
              Reserva tu Clase Gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Conoce Nuestros Servicios
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-card bg-primary/20 flex items-center justify-center text-xs font-bold text-primary"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                +500 estudiantes
              </p>
              <p className="text-xs text-muted-foreground">
                ya confían en PrimeMath
              </p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative flex-1">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero-illustration.jpg"
              alt="Estudiante aprendiendo matemáticas online con PrimeMath"
              width={600}
              height={450}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg border border-border lg:-bottom-6 lg:-left-6">
            <p className="text-2xl font-extrabold text-accent">98%</p>
            <p className="text-xs text-muted-foreground">de aprobación</p>
          </div>
        </div>
      </div>
    </section>
  )
}
