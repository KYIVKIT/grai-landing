import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GRAI Landing',
  description: 'Landing page for GRAI project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
