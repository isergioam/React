import { Routes, Route } from 'react-router-dom'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

function App() {
  return (
    <Routes>
      <Route path="products" element={<Products />} />
      <Route path="products/:productId" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
