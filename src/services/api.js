import axios from 'axios';

// Comprobación compatible tanto para Vite en navegador como para Jest en Node
const getBaseUrl = () => {
  if (typeof process !== 'undefined' && process.env && process.env.VITE_API_URL) {
    return process.env.VITE_API_URL;
  }
  try {
    return import.meta.env.VITE_API_URL || 'http://localhost:8080';
  } catch (e) {
    return 'http://localhost:8080';
  }
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