import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Eventos from './pages/Eventos.jsx'
import EventoDetalle from './pages/EventoDetalle.jsx'
import Contacto from './pages/Contacto.jsx'
import Inscripcion from './pages/Inscripcion.jsx'
import InscripcionConfirmada from './pages/InscripcionConfirmada.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App() {
  /* const [isAuthed, setIsAuthed] = useState(false)
 
   function login() {
     setIsAuthed(true)
   }
 
   function logout() {
     setIsAuthed(false)
   }*/

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/eventos/:id" element={<EventoDetalle />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  )
}