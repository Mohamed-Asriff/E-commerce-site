import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import CreateAccountPage from './pages/CreateAccountPage.jsx'
import AdminLoginPage from './pages/AdminLoginPage.jsx'
import AdminProductsPage from './pages/AdminProductsPage.jsx'
import AdminOrdersPage from './pages/AdminOrdersPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Navigate to="/admin" replace />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/admin" element={<AdminLoginPage />} />
        <Route path="/admin/products" element={<AdminProductsPage />} />
        <Route path="/admin/orders" element={<AdminOrdersPage />} />
        <Route path="/admin/dashboard" element={<Navigate to="/admin/products" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
