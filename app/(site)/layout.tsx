import Link from 'next/link'
import Image from 'next/image'
import { JetBrains_Mono } from 'next/font/google'
import nhLogoSm from '@/public/nh-logo-sm.png'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className={jetBrainsMono.className}>
      <header className='flex items-center px-8 py-6 gap-3'>
        <Image
          src={nhLogoSm}
          alt='Nick Harbaugh logo'
          width={80}
          height={80}
        />
        <h1 className='text-white text-xl font-bold uppercase tracking-wide'>Nick Harbaugh</h1>
      </header>
      <main className='max-w-3xl mx-auto px-8 py-10'>{children}</main>
    </body>
  )
}