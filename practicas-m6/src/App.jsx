import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Inscripcion from './pages/Inscripcion.jsx'
import InscripcionConfirmada from './pages/InscripcionConfirmada.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App() {
  const [isAuthed, setIsAuthed] = useState(false)

  function login() {
    setIsAuthed(true)
  }

  function logout() {
    setIsAuthed(false)
  }

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/inscripcion" element={<Inscripcion />} />
        <Route path="/inscripcion-confirmada" element={<InscripcionConfirmada />} />
        <Route path="/login" element={<Login isAuthed={isAuthed} onLogin={login} />} />
        <Route path="/dashboard" element={<ProtectedRoute isAuthed={isAuthed}><Dashboard onLogout={logout} /></ProtectedRoute>} />
      </Route>
    </Routes>
  )
}