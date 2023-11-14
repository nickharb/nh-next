import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const inter = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nick Harbaugh',
  description: 'Nick Harbaugh is an artist and computer programmer working with data and artificial intelligence to explore what it means to be human in a technological world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">{children}</html>
  )
}