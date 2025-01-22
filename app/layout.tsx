import './global.css'
import type { Metadata } from 'next'
import { aventra, prettywiseBlack, prettywiseBold, objectivity, petale, handtekening, } from './fonts/fonts'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: '2024 Portfolio - Teun Elshout',
  description: 'Web Design, Social Media, Web Developing, Video Editing, and Marketing portfolio of Teun Elshout',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${aventra.variable} ${prettywiseBlack.variable} ${prettywiseBold.variable} ${objectivity.variable} ${petale.variable} ${handtekening.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}

