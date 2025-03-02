import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kategori Yönetimi - Lila Coffee & Bistro',
  description: 'Lila Coffee & Bistro kategori yönetimi sayfası',
}

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 