import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

interface Feature {
  name: string;
  value: string;
}

interface Variation {
  id: string;
  name: string;
  price: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  categoryImage: string;
  features: Feature[];
  mssqlProductName: string;
  variations?: Variation[];
}

// Route segment config
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

const PRODUCTS_FILE = path.join(process.cwd(), 'data', 'products.json')

// Ürünleri dosyadan oku
async function readProducts(): Promise<Product[]> {
  try {
    const data = await fs.readFile(PRODUCTS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Ürünleri okuma hatası:', error)
    return []
  }
}

// Ürünleri dosyaya kaydet
async function writeProducts(products: Product[]) {
  try {
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2))
  } catch (error) {
    console.error('Ürünleri kaydetme hatası:', error)
    throw error
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split('/').pop()
    const products = await readProducts()
    const productIndex = products.findIndex((p) => p.id === id)
    
    if (productIndex === -1) {
      return NextResponse.json(
        { error: 'Ürün bulunamadı' },
        { status: 404 }
      )
    }
    
    // Ürünü diziden çıkar
    products.splice(productIndex, 1)
    
    // Güncellenmiş listeyi kaydet
    await writeProducts(products)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Ürün silme hatası:', error)
    return NextResponse.json(
      { error: 'Ürün silinirken bir hata oluştu' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.pathname.split('/').pop()
    const data = await request.json() as Partial<Product>

    const products = await readProducts()
    const productIndex = products.findIndex((p) => p.id === id)
    
    if (productIndex === -1) {
      return NextResponse.json(
        { error: 'Ürün bulunamadı' },
        { status: 404 }
      )
    }

    // Ürünü güncelle
    products[productIndex] = {
      ...products[productIndex],
      ...data,
    }

    // Değişiklikleri kaydet
    await writeProducts(products)

    return NextResponse.json(products[productIndex])
  } catch (error) {
    console.error('Ürün güncelleme hatası:', error)
    return NextResponse.json(
      { error: 'Ürün güncellenirken bir hata oluştu' },
      { status: 500 }
    )
  }
} 