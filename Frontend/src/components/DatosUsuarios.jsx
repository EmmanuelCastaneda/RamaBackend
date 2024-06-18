import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DatosUsuarios({usuario}) {

  const navigate = useNavigate();

  return (
      <div style={{background: 'gray'}} onClick={() => {navigate(`/usuario/${usuario.id}`)}}> 
          <p><b>Nombres: </b>{usuario.nombres}</p>
          <p><b>Apellidos: </b>{usuario.apellidos}</p>
          <p><b>Numero de documento: </b>{usuario.numero_documento}</p>
          <p><b>Correo electronico: </b>{usuario.correo_electronico}</p>
          <p><b>Genero: </b>{usuario.genero}</p>
          <br />
          <br />
      </div>
  )
}
