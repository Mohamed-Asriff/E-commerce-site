const STORAGE_KEY = 'eltronic-admin-products'

function normalizeProduct(product) {
  if (!product || typeof product !== 'object') {
    return product
  }

  const stockStatus =
    product.stockStatus ?? (Number(product.stock) > 0 ? 'In stock' : 'Out of stock')

  return {
    id: product.id,
    name: product.name,
    sku: product.sku,
    category: product.category,
    price: product.price,
    stockStatus,
    imageUrl: product.imageUrl,
    description: product.description
  }
}

export function loadAdminProducts(initialProducts) {
  if (typeof window === 'undefined') {
    return initialProducts.map(normalizeProduct)
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return initialProducts
    }

    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) && parsed.length > 0
      ? parsed.map(normalizeProduct)
      : initialProducts.map(normalizeProduct)
  } catch {
    return initialProducts.map(normalizeProduct)
  }
}

export function saveAdminProducts(products) {
  if (typeof window === 'undefined') {
    return
  }

  const normalized = products.map(normalizeProduct)
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized))
}
