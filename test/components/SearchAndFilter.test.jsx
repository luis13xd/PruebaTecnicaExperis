import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchAndFilter from '../../src/components/SearchAndFilter';

describe('SearchAndFilter', () => {
  it('debería renderizar el campo de búsqueda y el selector de tamaño de página', () => {
    render(
      <SearchAndFilter
        searchTerm="test"
        onSearchChange={() => {}}
        pageSize={10}
        onPageSizeChange={() => {}}
      />
    );

    // Verificar que el campo de búsqueda esté presente
    expect(screen.getByPlaceholderText(/Search by ID, UserID, Title, or Body/i)).toBeInTheDocument();

    // Verificar que el selector de tamaño de página esté presente
     expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
