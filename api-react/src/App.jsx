import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import ProductCreate from './pages/ProductCreate.jsx'
import ProductEditDemo from './pages/ProductEditDemo.jsx'
import ProductDeleteDemo from './pages/ProductDeleteDemo.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="products" element={<Products />} />
      <Route path="products/:productId" element={<ProductDetail />} />
      <Route path="products/new" element={<ProductCreate />} />
      <Route path="products/edit-demo" element={<ProductEditDemo />} />
      <Route path="products/delete-demo" element={<ProductDeleteDemo />} />
    </Routes>
  )
}