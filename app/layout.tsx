import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'PrimeMath - Clases de Matemática Online para toda Latinoamérica',
  description:
    'Domina las matemáticas con clases online personalizadas. Apoyo escolar, preparación universitaria, ingreso a colegios y facultades. Profesores expertos para toda Latinoamérica.',
  keywords: [
    'clases de matemática online',
    'matemáticas Latinoamérica',
    'tutorías matemáticas',
    'preparación universitaria',
    'apoyo escolar',
  ],
}

export const viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
