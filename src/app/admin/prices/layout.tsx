import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fiyat Güncelleme - Lila Coffee & Bistro',
  description: 'Lila Coffee & Bistro fiyat güncelleme sayfası',
}

export default function PricesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 