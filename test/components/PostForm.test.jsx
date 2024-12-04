import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostForm from '../../src/components/PostForm';
import '@testing-library/jest-dom';

describe('Pruebas en PostForm', () => {
  let mockOnSubmit, mockOnCancel;

  beforeEach(() => {
    mockOnSubmit = jest.fn();
    mockOnCancel = jest.fn();
  });

  it('Verifica el formulario con los datos iniciales', () => {
    render(
      <PostForm
        initialData={{ title: 'Test Title', body: 'Test Body' }}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    // Verifica que los campos de entrada contienen el valor inicial
    expect(screen.getByPlaceholderText('Enter title')).toHaveValue('Test Title');
    expect(screen.getByPlaceholderText('Enter body')).toHaveValue('Test Body');
  });

  it('Verifica que se llama el Submit con los datos del formulario', () => {
    render(
      <PostForm
        initialData={{ title: '', body: '' }}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    // Simula la entrada de datos en los campos de texto
    fireEvent.change(screen.getByPlaceholderText('Enter title'), {
      target: { value: 'New Title' },
    });
    fireEvent.change(screen.getByPlaceholderText('Enter body'), {
      target: { value: 'New Body' },
    });

    // Simula el envío del formulario
    fireEvent.click(screen.getByText('Submit'));

    // Verifica que se llamó a onSubmit con los datos correctos
    expect(mockOnSubmit).toHaveBeenCalledWith({
      title: 'New Title',
      body: 'New Body',
    });

    // Verifica que el formulario se reinició
    expect(screen.getByPlaceholderText('Enter title')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter body')).toHaveValue('');
  });

  it('Verifica que salga la alerta por campos vacios en el foprmulario', () => {
    window.alert = jest.fn(); // Mock de alert

    render(
      <PostForm
        initialData={{ title: '', body: '' }}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    // Simula el envío del formulario sin datos
    fireEvent.click(screen.getByText('Submit'));

    // Verifica que se muestra un alert
    expect(window.alert).toHaveBeenCalledWith('Title and Body are required.');

    // Verifica que no se llamó a onSubmit
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it(' Verifica que el formulario quede vacio al adr en el botond e cancelar', () => {
    render(
      <PostForm
        initialData={{ id: 1, title: 'Test Title', body: 'Test Body' }}
        onSubmit={mockOnSubmit}
        onCancel={mockOnCancel}
      />
    );

    // Simula el clic en el botón Cancel
    fireEvent.click(screen.getByText('Cancel'));

    // Verifica que se llamó a onCancel
    expect(mockOnCancel).toHaveBeenCalled();

    // Verifica que el formulario se reinició
    expect(screen.getByPlaceholderText('Enter title')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter body')).toHaveValue('');
  });
});
