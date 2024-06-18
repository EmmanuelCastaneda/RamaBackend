import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form' // librería para validar formularios
import { registrarUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario } from '../api/usuarios';
import { useNavigate, useParams } from 'react-router-dom'

export default function FormUsuario() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  // Función onSubmit para controlar el envío del formulario
  const onSubmit = handleSubmit(async (data) => {

    if (params.id) {
      try {
        await actualizarUsuario(params.id, data);
      } catch (error) {
        console.error(`Ocurrio un problema al actualizar al usuario: ${error}`);
      }
    } else {
      try {
        await registrarUsuario(data);
      } catch (error) {
        console.error(`Ocurrio un problema al registrar al usuario: ${error}`);
      }
    }
    navigate('/usuarios');
  })

  useEffect(() => {
    async function cargarUsuario() {
      if (params.id) {
        try {
          const res = await obtenerUsuario(params.id);
          setValue('nombres', res.data.nombres)
          setValue('apellidos', res.data.apellidos)
          setValue('numero_documento', res.data.numero_documento)
          setValue('correo_electronico', res.data.correo_electronico)
          setValue('genero', res.data.genero)
        } catch (error) {
          console.error(`Error al obtener al usuario: ${error}`);
        }
      }
    }
    cargarUsuario();
  }, [])

  // Función para eliminar datos
  const handleDelete = async () => {
    const confirmacion = window.confirm(`¿Estas seguro que deseas eliminar al usuario?`);
    if (confirmacion) {
      try {
        await eliminarUsuario(params.id);
        navigate('/usuarios');
      } catch (error) {
        console.error(`Ocurrió un problema al eliminar al usuario: ${error}`);
      }
    }
  }

  return (
    <div>
      {/* a la propiedad onSubmit se le entrega la función onSubmit que creamos */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder='Nombres'
          {...register('nombres', { required: true })} /> {/* register, registra los inputs o textareas en la librería useForm para poder válidarlos */}
        {errors.nombres && <span>Escribe tu nombre para continuar</span>} {/* cuando no se llenan los campos captura el error y muestra un mensaje */}
        <input
          type="text"
          placeholder='Apellidos'
          {...register('apellidos', { required: true })} />
        {errors.apellidos && <span>Escribe tus apellidos para continuar</span>}
        <input
          type="text"
          placeholder='Número de documento'
          {...register('numero_documento', { required: true })} />
        {errors.numero_documento && <span>Escribe tu numero de documento para continuar</span>}
        <input
          type="text"
          placeholder='Correo electrónico'
          {...register('correo_electronico', { required: true })} />
        {errors.correo_electronico && <span>Escribe tu correo electronico para continuar</span>}
        <input
          type="text"
          placeholder='Genero'
          {...register('genero', { required: true })} />
        {errors.genero && <span>Escribe tu genero para continuar</span>}
        <button>{params.id ? 'Actualizar' : 'Aceptar'}</button>
      </form>

      {/* condicional para que el botón solo aparezca al momento de actualizar un usuario, y no aparezca cuando apenas se está registrando */}
      {params.id && (
        <button onClick={handleDelete}>Eliminar</button>
      )}
    </div>
  )
}
