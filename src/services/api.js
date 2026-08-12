import axios from 'axios';

// Obtiene la URL base asegurando que termine sin '/'
const getBaseUrl = () => {
  let url = 'http://localhost:8080';
  if (typeof process !== 'undefined' && process.env && process.env.VITE_API_URL) {
    url = process.env.VITE_API_URL;
  } else {
    try {
      url = import.meta.env.VITE_API_URL || 'http://localhost:8080';
    } catch (e) {
      url = 'http://localhost:8080';
    }
  }
  // Si la variable de entorno incluye /api al final, se remueve para no duplicar rutas
  return url.replace(/\/api\/?$/, '');
};

const API_BASE_URL = getBaseUrl();

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const obtenerEspecialidades = async () => {
  const response = await api.get('/api/especialidades');
  return response.data;
};

export const registrarCita = async (datosCita) => {
  const response = await api.post('/api/citas', datosCita);
  return response.data;
};

export const obtenerCitasPorPaciente = async (cedula) => {
  const response = await api.get(`/api/citas/paciente/${cedula}`);
  return response.data;
};

export const cancelarCita = async (citaId) => {
  const response = await api.put(`/api/citas/${citaId}/cancelar`);
  return response.data;
};

export default api;