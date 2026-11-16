import { useMemo } from 'react'
import { Navigate } from 'react-router-dom'
import AdminLayout from '../components/AdminLayout'
import { initialOrders } from '../data/adminSeed'

function AdminOrdersPage() {
  const isAuthenticated = useMemo(() => localStorage.getItem('admin-auth') === 'true', [])

  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />
  }

  return (
    <AdminLayout
      title="Received orders"
      subtitle="Recent customer orders and delivery details."
    >
      <section className="admin-card admin-card--wide" id="orders">
        <div className="section-head">
          <div>
            <h2>Orders list</h2>
            <p>Review the latest orders received from customers.</p>
          </div>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Order</th>
                  <th>Customer name</th>
                  <th>Item name</th>
                  <th>Quantity</th>
                  <th>Total price</th>
                  <th>Contact number</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {initialOrders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.customer}</td>
                    <td>{order.itemName}</td>
                    <td>{order.quantity}</td>
                  <td>LKR {order.total.toLocaleString()}</td>
                    <td>{order.contactNumber}</td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AdminLayout>
  )
}

export default AdminOrdersPage
