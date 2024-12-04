import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getPosts, getPost, createPost, updatePost, deletePost } from "../../src/services/api"; 

// Crear un mock de axios
const mock = new MockAdapter(axios);

describe("Pruebas en Api", () => {
  beforeEach(() => {
    // Limpiar el mock antes de cada prueba
    mock.reset();
  });

  it("debe obtener una lista de posts correctamente", async () => {
    // Simular la respuesta para la API de posts
    mock.onGet("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10&q=test").reply(200, [
      { id: 1, title: "Post 1", body: "Contenido 1" },
      { id: 2, title: "Post 2", body: "Contenido 2" }
    ]);

    const posts = await getPosts(1, 10, "test");

    expect(posts).toHaveLength(2);
    expect(posts[0].title).toBe("Post 1");
    expect(posts[1].body).toBe("Contenido 2");
  });

  it("debe obtener un post por ID correctamente", async () => {
    // Simular la respuesta para obtener un post específico
    mock.onGet("https://jsonplaceholder.typicode.com/posts/1").reply(200, { id: 1, title: "Post 1", body: "Contenido" });

    const post = await getPost(1);

    expect(post.data.title).toBe("Post 1");
    expect(post.data.body).toBe("Contenido");
  });

  it("debe crear un post correctamente", async () => {
    const newPost = { title: "Nuevo Post", body: "Contenido del nuevo post" };

    // Simular la respuesta de crear un post
    mock.onPost("https://jsonplaceholder.typicode.com/posts", newPost).reply(201, { id: 3, ...newPost });

    const post = await createPost(newPost);

    expect(post.data.id).toBe(3);
    expect(post.data.title).toBe("Nuevo Post");
  });

  it("debe actualizar un post correctamente", async () => {
    const updatedPost = { title: "Post Actualizado", body: "Nuevo contenido" };

    // Simular la respuesta de actualizar un post
    mock.onPut("https://jsonplaceholder.typicode.com/posts/1", updatedPost).reply(200, { id: 1, ...updatedPost });

    const post = await updatePost(1, updatedPost);

    expect(post.data.title).toBe("Post Actualizado");
    expect(post.data.body).toBe("Nuevo contenido");
  });

  it("debe eliminar un post correctamente", async () => {
    // Simular la respuesta de eliminar un post
    mock.onDelete("https://jsonplaceholder.typicode.com/posts/1").reply(200);

    await expect(deletePost(1)).resolves.not.toThrow();
  });
});
