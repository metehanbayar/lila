import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menü - Lila Coffee & Bistro',
  description: 'Lila Coffee & Bistro menü sayfası',
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 