/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MisCitasPage from '../pages/MisCitasPage';

describe('Pruebas Unitarias - MisCitasPage Component', () => {
  const mockCitas = [
    {
      id: '6a78994a267f13b93cd530e4',
      especialidad: 'Medicina General',
      tipoCita: 'Consulta General',
      modalidad: 'PRESENCIAL',
      fecha: '2026-08-15T10:00:00',
      recursoFHIR: { status: 'proposed' }
    },
    {
      id: '6a78994a267f13b93cd530e5',
      especialidad: 'Odontología',
      tipoCita: 'Limpieza',
      modalidad: 'PRESENCIAL',
      fecha: '2026-08-16T10:00:00',
      recursoFHIR: { status: 'cancelled' }
    }
  ];

  it('debería mostrar mensaje cuando está cargando', () => {
    render(<MisCitasPage misCitas={[]} cargando={true} onCancelar={jest.fn()} />);
    expect(screen.getByText(/Cargando datos desde MongoDB Atlas/i)).toBeInTheDocument();
  });

  it('debería mostrar mensaje de lista vacía cuando no hay citas', () => {
    render(<MisCitasPage misCitas={[]} cargando={false} onCancelar={jest.fn()} />);
    expect(screen.getByText(/No tienes citas registradas actualmente/i)).toBeInTheDocument();
  });

  it('debería renderizar la lista de citas activas y canceladas', () => {
    render(<MisCitasPage misCitas={mockCitas} cargando={false} onCancelar={jest.fn()} />);
    expect(screen.getByText('Medicina General')).toBeInTheDocument();
    expect(screen.getByText('Odontología')).toBeInTheDocument();
    expect(screen.getByText('ACTIVA')).toBeInTheDocument();
    expect(screen.getByText('CANCELADA')).toBeInTheDocument();
  });

  it('debería llamar a onCancelar cuando se presiona el botón Cancelar Cita', () => {
    const mockCancelar = jest.fn();
    render(<MisCitasPage misCitas={mockCitas} cargando={false} onCancelar={mockCancelar} />);
    
    const btnCancelar = screen.getByRole('button', { name: /Cancelar Cita/i });
    fireEvent.click(btnCancelar);

    expect(mockCancelar).toHaveBeenCalledWith('6a78994a267f13b93cd530e4');
  });
});