import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Productos from './pages/Productos.jsx'
import Contacto from './pages/Contacto.jsx'
import Ayuda from './pages/Ayuda.jsx'
import Servicios from './pages/Servicios.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/ayuda" element={<Ayuda />} />
      <Route path="/servicios" element={<Servicios />} />
    </Routes>
  )
}