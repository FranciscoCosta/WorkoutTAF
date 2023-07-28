import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Navbar, Footer } from '@/components'
import { Toaster } from 'react-hot-toast'
export const metadata: Metadata = {
  title: 'WORKOUTTAF',
  description: 'Consultorias Personalizadas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
        <Toaster position="top-center"/>
        <Footer />
    </html>
  )
}
