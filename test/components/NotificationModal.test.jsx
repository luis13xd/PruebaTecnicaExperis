import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotificationModal from '../../src/components/NotificationModal';
import '@testing-library/jest-dom';

describe('Pruebas es NotificationModal', () => {
  let mockOnClose;

  // Se ejecuta antes de cada prueba para reiniciar el mock de onClose
  beforeEach(() => {
    // Crea una función simulada para manejar el evento de cierre
    mockOnClose = jest.fn();
  });

  it(' Verificar que el modal se renderiza correctamente con el mensaje y botones adecuados cuando show es true.', () => {
    // Renderiza el componente con el modal visible, en true
    render(<NotificationModal show={true} message="Test notification" onClose={mockOnClose} />);

    // Verifica que el título del modal se muestra correctamente
    expect(screen.getByText('Notification')).toBeInTheDocument();

     // Verifica que el mensaje pasado como prop aparece en el modal
    expect(screen.getByText('Test notification')).toBeInTheDocument();

    // // Verifica que se han renderizado dos botones
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2); 
  });

  it('Verificar que la función onClose se ejecuta al hacer clic en el botón "Close" del footer', () => {
    // Renderiza el componente con el modal visible, en true
    render(<NotificationModal show={true} message="Another test" onClose={mockOnClose} />);

    // Seleccionar específicamente el botón del footer usando getAllByRole y filtrando
    const footerCloseButton = screen
      .getAllByRole('button', { name: /close/i })// Encuentra todos los botones con nombre "Close"
      .find((button) => button.textContent === 'Close');// Filtra el botón que tiene como texto "Close"
    // Simula el evento de clic en el botón del footer
    fireEvent.click(footerCloseButton);
    // Verifica que la función mock de onClose se llamó exactamente una vez
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('Verifica que el modal no se renderiza cuando show es false', () => {
    // Renderiza el componente con el modal oculto, en false
    render(<NotificationModal show={false} message="Hidden message" onClose={mockOnClose} />);

    // Verifica que el mensaje no está en el documento cuando el modal no se muestra
    expect(screen.queryByText('Hidden message')).not.toBeInTheDocument();
     // Verifica que no hay ningún elemento con el rol "dialog"
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
