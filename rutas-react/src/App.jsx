import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Productos from './pages/Productos.jsx'
import ProductosLayout from './pages/ProductosLayout.jsx'
import ProductoDetalle from './pages/ProductoDetalle.jsx'
import Contacto from './pages/Contacto.jsx'
import Ayuda from './pages/Ayuda.jsx'
import Servicios from './pages/Servicios.jsx'
import Libros from './pages/Libros.jsx'
import LibrosLayout from './pages/LibrosLayout.jsx'
import LibroDetalle from './pages/LibroDetalle.jsx'
import Busqueda from './pages/Busqueda.jsx'
import BusquedaCursos from './pages/BusquedaCursos.jsx'
import BusquedaLibros from './pages/BusquedaLibros.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/libros" element={<LibrosLayout />}>
          <Route index element={<Libros />} />
          <Route path=":libroId" element={<LibroDetalle />} />
        </Route>
        <Route path="/busqueda" element={<Busqueda />} />
        <Route path="/busqueda-cursos" element={<BusquedaCursos />} />
        <Route path="/busqueda-libros" element={<BusquedaLibros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/servicios" element={<Servicios />} />
      </Route>
    </Routes>
  )
}