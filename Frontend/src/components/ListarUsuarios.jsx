import React, { useEffect, useState } from 'react'
import { obtenerUsuarios } from '../api/usuarios'
import DatosUsuarios from './DatosUsuarios';

export default function ListarUsuarios() {
    const [usuarios, setUsuarios] = useState([]); // estado para guardar los usuarios 
    useEffect(() => {
        // función asincrona para poder obtener los datos en segundo plano
        async function cargarUsuarios() {
            try {
                const res = await obtenerUsuarios() // se obtienen los datos de los usuarios desde la API
                setUsuarios(res.data) // Actualizar el estado con los datos recibidos
            } catch (error) {
                console.error(`Error al obtener a los usuarios: ${error}`);
            }
        }
        cargarUsuarios()
    }, [])

    return (
        <div>
            <h1>Usuarios registrados</h1>
            {/* Bucle para recorrer la lista */}
            {usuarios.map(usuario => (
                <DatosUsuarios key={usuario.id} usuario={usuario} />
            ))}
        </div>
    )
}
