import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const poppins5 = Poppins({ weight: ['500'], style: ['normal'], subsets: ['latin'], variable: "--font-poppins5" });
const poppins6 = Poppins({ weight: ['600'], style: ['normal'], subsets: ['latin'], variable: "--font-poppins6" });
const poppins7 = Poppins({ weight: ['700'], style: ['normal'], subsets: ['latin'], variable: "--font-poppins7" });

export const metadata: Metadata = {
  title: 'Dr Gerardo León',
  description: 'Urólogo Dr. Gerardo León | Somos tu mejor opción para la mejora de tu vida sexual',
  icons: {
    icon: '/logos/favicon-drgl.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="mytheme" lang="es">
      <body className={`
        ${poppins5.variable} 
        ${poppins6.variable} 
        ${poppins7.variable}
        `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
