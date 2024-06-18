import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navegacion from './components/Navegacion'
import PaginaUsuarios from './pages/PaginaUsuarios'
import FormUsuario from './pages/FormUsuario'

export default function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path='/' element={<Navigate to={'/usuarios'} />} />
        <Route path='/usuarios' element={<PaginaUsuarios />} />
        <Route path='/registrarUsuario' element={<FormUsuario />} />
        <Route path='/usuario/:id' element={<FormUsuario />} />
      </Routes>
    </BrowserRouter>
  )
}
