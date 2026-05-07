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
import PanelNavegacion from './pages/PanelNavegacion.jsx'
import AccesoDemo from './pages/AccesoDemo.jsx'
import Registro from './pages/Registro.jsx'
import Confirmacion from './pages/Confirmacion.jsx'
import Reserva from './pages/Reserva.jsx'
import ReservaConfirmada from './pages/ReservaConfirmada.jsx'
import FormularioBusqueda from './pages/FormularioBusqueda.jsx'
import Resultados from './pages/Resultados.jsx'
import EditarProducto from './pages/EditarProducto.jsx'
import LoginSimulado from './pages/LoginSimulado.jsx'
import Dashboard from './pages/Dashboard.jsx'



export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/panel" element={<PanelNavegacion />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/productos" element={<ProductosLayout />}>
          <Route index element={<Productos />} />
          <Route path=":productoId" element={<ProductoDetalle />} />
        </Route>
        <Route path='/acceso' element={<AccesoDemo />} />

        <Route path='/registro' element={<Registro />} />

        <Route path='/confirmacion' element={<Confirmacion />} />

        <Route path='/reserva' element={<Reserva />} />

        <Route path='/reserva-confirmada'
          element={<ReservaConfirmada />}
        />

        <Route path='/buscar' element={<FormularioBusqueda />} />
        <Route path='/resultados' element={<Resultados />} />

        <Route path="/editar-producto" element={<EditarProducto />} />
        <Route path="/login" element={<LoginSimulado />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Route>
    </Routes>
  )
}