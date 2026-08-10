/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AgendarPage from '../pages/AgendarPage';

describe('Pruebas Unitarias - AgendarPage Component', () => {
  it('debería permitir seleccionar especialidad, tipo de seguro, modalidad y enviar la cita', () => {
    const mockOnAgendar = jest.fn();
    render(<AgendarPage onAgendar={mockOnAgendar} cargando={false} />);

    const selects = screen.getAllByRole('combobox');
    
    // Cambiar Especialidad (1er select)
    fireEvent.change(selects[0], { target: { value: 'Odontología' } });
    // Cambiar Tipo de Seguro (2do select)
    fireEvent.change(selects[1], { target: { value: 'PRIVADO' } });
    // Cambiar Modalidad (3er select)
    fireEvent.change(selects[2], { target: { value: 'TELEMEDICINA' } });

    // Cambiar Número de Seguro mediante querySelector o getByRole
    const inputs = screen.getAllByRole('textbox');
    const inputSeguro = inputs[0]; 
    fireEvent.change(inputSeguro, { target: { value: 'POL-999' } });

    const btnSubmit = screen.getByRole('button', { name: /Confirmar Cita/i });
    fireEvent.click(btnSubmit);

    expect(mockOnAgendar).toHaveBeenCalledWith(
      expect.objectContaining({
        especialidad: 'Odontología',
        tipoSeguro: 'PRIVADO',
        modalidad: 'TELEMEDICINA',
        numeroSeguro: 'POL-999'
      })
    );
  });

  it('debería deshabilitar el botón y mostrar texto de carga cuando cargando es true', () => {
    render(<AgendarPage onAgendar={jest.fn()} cargando={true} />);
    const btn = screen.getByRole('button', { name: /Registrando en Quarkus.../i });
    expect(btn).toBeDisabled();
  });
});