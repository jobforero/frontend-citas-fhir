/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import EspecialidadesPage from '../pages/EspecialidadesPage';

describe('Pruebas Unitarias - EspecialidadesPage Component', () => {
  it('debería renderizar la lista de especialidades', () => {
    const mockEspecialidades = [{ nombre: 'Medicina General' }, { nombre: 'Odontología' }];
    render(<EspecialidadesPage especialidades={mockEspecialidades} />);

    expect(screen.getByText('Medicina General')).toBeInTheDocument();
    expect(screen.getByText('Odontología')).toBeInTheDocument();
  });
});