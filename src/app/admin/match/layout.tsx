import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ürün Eşleştirme - Lila Coffee & Bistro',
  description: 'Lila Coffee & Bistro ürün eşleştirme sayfası',
}

export default function MatchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 