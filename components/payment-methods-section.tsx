import { CreditCard, Building2, ShieldCheck } from "lucide-react"

const paymentMethods = [
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .757-.643h6.583c2.184 0 3.694.462 4.486 1.374.37.427.612.882.718 1.353.112.498.113 1.094.003 1.822l-.008.047v.42l.328.186a2.85 2.85 0 0 1 .667.467c.28.312.462.702.54 1.155.08.465.057 1.019-.067 1.643-.143.717-.375 1.341-.69 1.854a3.84 3.84 0 0 1-1.09 1.183 4.42 4.42 0 0 1-1.467.664c-.546.14-1.166.21-1.842.21h-.438a1.32 1.32 0 0 0-.868.32 1.33 1.33 0 0 0-.449.794l-.033.186-.554 3.512-.025.134a.16.16 0 0 1-.046.098.15.15 0 0 1-.094.035H7.076z" />
        <path d="M18.283 7.824c-.015.094-.032.19-.052.29-.676 3.469-2.992 4.665-5.946 4.665H10.79a.73.73 0 0 0-.722.618l-.77 4.876-.218 1.383a.385.385 0 0 0 .38.444h2.666a.64.64 0 0 0 .632-.54l.026-.135.501-3.177.032-.174a.64.64 0 0 1 .633-.541h.398c2.58 0 4.6-1.048 5.19-4.078.246-1.265.119-2.321-.533-3.063a2.54 2.54 0 0 0-.726-.548z" />
      </svg>
    ),
    name: "PayPal",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM3 6h18v2H3V6zm0 12v-6h18v6H3zm2-2h4v1H5v-1zm6 0h2v1h-2v-1z" />
      </svg>
    ),
    name: "Western Union",
  },
  {
    icon: CreditCard,
    name: "Visa / Mastercard",
  },
  {
    icon: Building2,
    name: "Transferencia Local",
  },
]

export function PaymentMethodsSection() {
  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Pagos Seguros
          </span>
          <h2 className="mt-3 text-balance text-2xl font-extrabold text-foreground md:text-3xl">
            Metodos de Pago Internacionales
          </h2>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-8 lg:gap-14">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-110"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                {typeof method.icon === "function" ? (
                  <method.icon />
                ) : (
                  <method.icon className="h-8 w-8" />
                )}
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                {method.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <span>Todos los pagos son seguros y verificados</span>
        </div>
      </div>
    </section>
  )
}
