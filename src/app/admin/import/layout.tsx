import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'XML Import - Lila Coffee & Bistro',
  description: 'Lila Coffee & Bistro XML import sayfası',
}

export default function ImportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 