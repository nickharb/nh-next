import Link from 'next/link'
import { JetBrains_Mono } from 'next/font/google'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className={jetBrainsMono.className}>
      <header className='flex items-center justify-between px-8 py-6'>
        <h1 className='text-white text-xl font-bold uppercase'>Nick Harbaugh</h1>
      </header>
      <main className='max-w-3xl mx-auto px-8 py-10'>{children}</main>
    </body>
  )
}