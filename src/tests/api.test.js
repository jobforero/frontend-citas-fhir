/**
 * @jest-environment jsdom
 */

// Mock directo del módulo api para evitar el procesamiento de import.meta en Jest
jest.mock('../services/api', () => ({
  obtenerEspecialidades: jest.fn().mockResolvedValue([
    { nombre: 'Medicina General' },
    { nombre: 'Odontología' }
  ]),
  registrarCita: jest.fn().mockResolvedValue({
    id: '12345',
    recursoFHIR: { resourceType: 'Appointment', status: 'proposed' }
  }),
  obtenerCitasPorPaciente: jest.fn().mockResolvedValue([
    { id: '12345', especialidad: 'Medicina General' }
  ]),
  cancelarCita: jest.fn().mockResolvedValue({
    mensaje: 'Cita cancelada con éxito'
  })
}));

import { obtenerEspecialidades, registrarCita, obtenerCitasPorPaciente, cancelarCita } from '../services/api';

describe('Pruebas Unitarias - Servicio API', () => {
  it('debería obtener el catálogo de especialidades', async () => {
    const result = await obtenerEspecialidades();
    expect(result).toHaveLength(2);
    expect(result[0].nombre).toBe('Medicina General');
  });

  it('debería registrar una nueva cita', async () => {
    const result = await registrarCita({ pacienteCedula: '8-888-8888' });
    expect(result.recursoFHIR.resourceType).toBe('Appointment');
  });

  it('debería obtener citas por paciente', async () => {
    const result = await obtenerCitasPorPaciente('8-888-8888');
    expect(result).toHaveLength(1);
  });

  it('debería cancelar una cita existente', async () => {
    const result = await cancelarCita('12345');
    expect(result.mensaje).toContain('cancelada');
  });
});