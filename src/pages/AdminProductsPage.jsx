import { useEffect, useMemo, useState } from 'react'
import { Navigate } from 'react-router-dom'
import AdminLayout from '../components/AdminLayout'
import { initialProducts } from '../data/adminSeed'
import { loadAdminProducts, saveAdminProducts } from '../data/adminProductsStore'

function AdminProductsPage() {
  const [products, setProducts] = useState(() => loadAdminProducts(initialProducts))
  const [form, setForm] = useState({
    name: '',
    sku: '',
    category: 'Arduino Boards',
    price: '',
    stockStatus: 'In stock',
    imageUrl: '',
    description: ''
  })
  const [editingProduct, setEditingProduct] = useState(null)
  const [editForm, setEditForm] = useState({ price: '', stockStatus: 'In stock' })
  const [message, setMessage] = useState('')

  const isAuthenticated = useMemo(() => localStorage.getItem('admin-auth') === 'true', [])

  useEffect(() => {
    saveAdminProducts(products)
  }, [products])

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />
  }

  const handleChange = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
    setMessage('')
  }

  const handleAddProduct = (event) => {
    event.preventDefault()

    const nextProduct = {
      id: Date.now(),
      name: form.name.trim(),
      sku: form.sku.trim(),
      category: form.category,
      price: Number(form.price),
      stockStatus: form.stockStatus,
      imageUrl: form.imageUrl.trim() || 'https://placehold.co/120x120/png?text=Store',
      description: form.description.trim()
    }

    setProducts((current) => [nextProduct, ...current])
    setForm({
      name: '',
      sku: '',
      category: 'Arduino Boards',
      price: '',
      stockStatus: 'In stock',
      imageUrl: '',
      description: ''
    })
    setMessage(`${nextProduct.name} added to store products.`)
  }

  const openEdit = (product) => {
    setEditingProduct(product)
    setEditForm({ price: String(product.price), stockStatus: product.stockStatus ?? 'In stock' })
    setMessage('')
  }

  const closeEdit = () => {
    setEditingProduct(null)
    setEditForm({ price: '', stockStatus: 'In stock' })
  }

  const handleEditChange = (field) => (event) => {
    setEditForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSaveEdit = (event) => {
    event.preventDefault()

    if (!editingProduct) {
      return
    }

    setProducts((current) =>
      current.map((product) =>
        product.id === editingProduct.id
          ? {
              ...product,
              price: Number(editForm.price),
              stockStatus: editForm.stockStatus
            }
          : product
      )
    )

    setMessage(`${editingProduct.name} updated successfully.`)
    closeEdit()
  }

  const handleDeleteProduct = (productId) => {
    setProducts((current) => current.filter((product) => product.id !== productId))
    setMessage('Product removed from store list.')
  }

  return (
    <AdminLayout
      title="Upload products"
      subtitle="Add and manage items available on the store."
    >
      <section className="admin-card admin-card--wide" id="products">
        <div className="section-head">
          <div>
            <h2>Add new product</h2>
            <p>Upload a new store item and keep the catalog up to date.</p>
          </div>
        </div>

        <form className="admin-form" onSubmit={handleAddProduct}>
          <input required placeholder="Product name" value={form.name} onChange={handleChange('name')} />
          <input required placeholder="SKU" value={form.sku} onChange={handleChange('sku')} />
          <select value={form.category} onChange={handleChange('category')}>
            <option>Arduino Boards</option>
            <option>ESP Modules</option>
            <option>Sensors</option>
            <option>LED & Lighting</option>
            <option>Displays</option>
            <option>Motors & Drivers</option>
            <option>Power & Charging</option>
            <option>Tools & Testers</option>
          </select>
          <input required type="number" min="0" placeholder="Price" value={form.price} onChange={handleChange('price')} />
          <select value={form.stockStatus} onChange={handleChange('stockStatus')}>
            <option value="In stock">In stock</option>
            <option value="Out of stock">Out of stock</option>
          </select>
          <input placeholder="Image URL" value={form.imageUrl} onChange={handleChange('imageUrl')} />
          <textarea rows="3" placeholder="Description" value={form.description} onChange={handleChange('description')} />
          <button type="submit" className="primary">
            Upload Item
          </button>
        </form>

        <div className="admin-note">
          <strong>Total products in store:</strong> {products.length}
        </div>

        <div className="admin-table-wrap admin-product-table">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>
                    {editingProduct?.id === product.id ? (
                      <input
                        className="admin-table-input"
                        type="number"
                        min="0"
                        value={editForm.price}
                        onChange={handleEditChange('price')}
                      />
                    ) : (
                      `LKR ${product.price.toLocaleString()}`
                    )}
                  </td>
                  <td>
                    {editingProduct?.id === product.id ? (
                      <select
                        className="admin-table-select"
                        value={editForm.stockStatus}
                        onChange={handleEditChange('stockStatus')}
                      >
                        <option value="In stock">In stock</option>
                        <option value="Out of stock">Out of stock</option>
                      </select>
                    ) : (
                      <span className={`stock-pill ${product.stockStatus === 'In stock' ? 'stock-pill--in' : 'stock-pill--out'}`}>
                        {product.stockStatus}
                      </span>
                    )}
                  </td>
                  <td>
                    <div className="admin-actions">
                      {editingProduct?.id === product.id ? (
                        <>
                          <button type="button" className="ghost small" onClick={closeEdit}>
                            Cancel
                          </button>
                          <button type="button" className="primary small-button" onClick={handleSaveEdit}>
                            Save
                          </button>
                        </>
                      ) : (
                        <>
                          <button type="button" className="ghost small" onClick={() => openEdit(product)}>
                            Edit
                          </button>
                          <button type="button" className="ghost small" onClick={() => handleDeleteProduct(product.id)}>
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {message && <div className="admin-success">{message}</div>}
      </section>
    </AdminLayout>
  )
}

export default AdminProductsPage
