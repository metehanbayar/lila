import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Favorilerim - Lila Coffee & Bistro',
  description: 'Lila Coffee & Bistro favori ürünlerim sayfası',
}

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 