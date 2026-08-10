/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../pages/LoginPage';

describe('Pruebas Unitarias - LoginPage Component', () => {
  it('debería renderizar los campos de cédula y nombre correctamente', () => {
    render(<LoginPage onLogin={jest.fn()} />);
    expect(screen.getByText(/Cédula del Paciente/i)).toBeInTheDocument();
    expect(screen.getByText(/Nombre Completo/i)).toBeInTheDocument();
  });

  it('debería invocar la función onLogin al enviar el formulario', () => {
    const mockOnLogin = jest.fn();
    render(<LoginPage onLogin={mockOnLogin} />);

    const btn = screen.getByRole('button', { name: /Ingresar al Portal/i });
    fireEvent.click(btn);

    expect(mockOnLogin).toHaveBeenCalledTimes(1);
    expect(mockOnLogin).toHaveBeenCalledWith({
      cedula: '8-888-8888',
      nombre: 'Juan Perez'
    });
  });
});