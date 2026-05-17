import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, MessageCircle } from "lucide-react"

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
            Domina las Matematicas{" "}
            <span className="text-accent">a tu Propio Ritmo</span> con
            PrimeMath
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Clases personalizadas con profesores expertos para estudiantes de
            toda Latinoamerica. Desde apoyo escolar hasta ingreso universitario,
            te acompanamos en cada paso.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`https://wa.me/56934654076?text=${encodeURIComponent("Hola, me interesa una clase de prueba con PrimeMath. ¿Me pueden dar más información?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#25D366]/25 transition-transform duration-200 hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Chatear con un Asesor Academico
            </a>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Conoce Nuestros Servicios
              <ArrowRight className="h-4 w-4" />
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
                ya confian en PrimeMath
              </p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative flex-1">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero-illustration.jpg"
              alt="Estudiante aprendiendo matematicas online con PrimeMath"
              width={600}
              height={450}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg border border-border lg:-bottom-6 lg:-left-6">
            <p className="text-2xl font-extrabold text-accent">98%</p>
            <p className="text-xs text-muted-foreground">de aprobacion</p>
          </div>
        </div>
      </div>
    </section>
  )
}
