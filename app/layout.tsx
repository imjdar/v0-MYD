import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Feria Mueble y Decoración - 5ta Edición | Quito, Ecuador',
  description: 'La feria de muebles y decoración más reconocida de Quito. Artesanos, diseñadores y marcas del país reunidos en el Centro de Exposiciones Quito.',
  keywords: ['feria', 'muebles', 'decoración', 'Quito', 'Ecuador', 'artesanos', 'exposición'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
