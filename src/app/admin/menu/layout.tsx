import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menü Yönetimi - Lila Coffee & Bistro',
  description: 'Lila Coffee & Bistro menü yönetimi sayfası',
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 