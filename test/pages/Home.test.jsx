
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../../src/pages/Home";
import { getPosts, createPost, updatePost, deletePost } from "../../src/services/api";
import "@testing-library/jest-dom";

// Mock de las funciones de la API
jest.mock("../../src/services/api", () => ({
  getPosts: jest.fn(),
  createPost: jest.fn(),
  updatePost: jest.fn(),
  deletePost: jest.fn(),
}));

describe("Pruebas en Home", () => {
  beforeEach(() => {
    // Simular una respuesta de posts para getPosts
    getPosts.mockResolvedValue([
      { id: 1, title: "Post 1", body: "Contenido 1" },
      { id: 2, title: "Post 2", body: "Contenido 2" },
    ]);
  });

  it("debe renderizar los componentes correctamente", async () => {
    render(<Home />);
  
    // Verifica si los posts están en el documento
    expect(await screen.findByText(/Post 1/)).toBeInTheDocument();
    expect(await screen.findByText(/Post 2/)).toBeInTheDocument();
  
    // Verifica si el botón 'Submit' (en lugar de "Nuevo post") está presente en el formulario
    expect(await screen.findByText(/Submit/)).toBeInTheDocument();
  });

  it("debe cambiar la página correctamente al hacer clic en la paginación", async () => {
    render(<Home />);

    // Verifica que la página inicial es 1
    expect(screen.getByText("1")).toBeInTheDocument();

    // Simula el clic en el botón 'Next' para cambiar la página
    fireEvent.click(screen.getByText(/Next/));

    // Verifica que la página ha cambiado a 2
    await waitFor(() => expect(screen.getByText("2")).toBeInTheDocument());
  });

});
