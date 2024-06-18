// en este documento se interactua con el backend, permitiendo consumir el api 

import axios from "axios";

// Configuración de Axios para la URL base de la API
const usuariosAPI = axios.create({
  baseURL: "http://localhost:8000/usuarios/v1/usuario/",
});

// CRUD utilizando Axios
export const obtenerUsuarios = () => usuariosAPI.get("/");
export const obtenerUsuario = (id) => usuariosAPI.get(`/${id}/`);
export const registrarUsuario = (usuario) => usuariosAPI.post("/", usuario);
export const actualizarUsuario = (id, usuario) => usuariosAPI.put(`/${id}/`, usuario);  
export const eliminarUsuario = (id) => usuariosAPI.delete(`/${id}`);
