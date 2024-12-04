import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import UserIcon from '../../src/components/UserIcon';
import generateColor from '../../src/utils/GenerateColor'; // Importar para usar el mock

jest.mock('../../src/utils/GenerateColor'); // Mock del módulo generateColor

describe('Pruebas en UserIcon', () => {
  it('debe renderizar el userId correcto', () => {

    const userId = 5;
    render(<UserIcon userId={userId} />);

    const iconElement = screen.getByText(userId);
    
    // Verifica si se muestra el userId
    expect(iconElement).toBeInTheDocument();

  });
});
