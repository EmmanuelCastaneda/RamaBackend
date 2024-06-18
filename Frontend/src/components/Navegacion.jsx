import React from 'react'
import { Link } from 'react-router-dom'

// componente para navegar entre páginas

export default function Navegacion() {
  return (
    <div>
        <Link to="/usuarios">
            <h1>Inicio</h1>
        </Link>
        <button>
            <Link to="/registrarUsuario">Agregar</Link>
        </button>
    </div>
  )
}
