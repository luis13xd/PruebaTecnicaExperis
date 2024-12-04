import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostTable from '../../src/components/PostTable';
import '@testing-library/jest-dom';

describe('Pruebas en PostTable', () => {
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  const mockPosts = [
    { id: 1, userId: 101, title: 'Post 1', body: 'Body of Post 1' },
    { id: 2, userId: 102, title: 'Post 2', body: 'Body of Post 2' },
  ];

  it('Verifica que se renderice la tabla con datos', () => {
    render(<PostTable posts={mockPosts} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    // Verifica que se renderizan los encabezados de la tabla
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();

    // Verifica que se muestran los datos de los posts
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Body of Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
    expect(screen.getByText('Body of Post 2')).toBeInTheDocument();
  });

  it('Verifica que se muestra el mensaje cuando no hay posts', () => {
    render(<PostTable posts={[]} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    expect(screen.getByText('No posts available')).toBeInTheDocument();
  });

  it('Verifica que funcionen los dos botones al hacer click', () => {
    render(<PostTable posts={mockPosts} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
  
    // Simula el clic en el botón de edición del primer post
    const editButton = screen.getByLabelText(/Edit post 1/i); 
    fireEvent.click(editButton);
    expect(mockOnEdit).toHaveBeenCalledWith(mockPosts[0]);
  
    // Simula el clic en el botón de eliminación del primer post
    const deleteButton = screen.getByLabelText(/Delete post 1/i);
    fireEvent.click(deleteButton);
    expect(mockOnDelete).toHaveBeenCalledWith(mockPosts[0].id);
  });
  
});
