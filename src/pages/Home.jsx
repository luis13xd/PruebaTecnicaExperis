import React, { useState, useEffect, useRef } from "react";
import PostTable from "../components/PostTable";
import PostForm from "../components/PostForm";
import NotificationModal from "../components/NotificationModal";
import SearchAndFilter from "../components/SearchAndFilter";
import { getPosts, createPost, updatePost, deletePost } from "../services/api";
import { Pagination, Container } from "react-bootstrap";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const formRef = useRef(null);

  const fetchPosts = async (page = 1, size = 10, query = "") => {
    try {
      const posts = await getPosts(page, size, query);
  
      const sanitizedPosts = posts.map(post => ({
        ...post,
        userId: post.userId || 0, 
      }));
  
      setPosts(sanitizedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  

  useEffect(() => {
    fetchPosts(currentPage, pageSize, searchTerm);
  }, [currentPage, pageSize, searchTerm]);

  const handleSearchChange = (event) => {
    if (event && event.target) {
      setSearchTerm(event.target.value);
      setCurrentPage(1);
    } else {
      console.error("Evento no válido", event);
    }
  };
  

  const handleCreateOrUpdate = async (post) => {
    try {
      if (post.id) {
        await updatePost(post.id, post);
        setMessage("Post updated successfully!");
      } else {
        await createPost(post);
        setMessage("Post created successfully!");
      }
      fetchPosts(currentPage, pageSize, searchTerm);
      setCurrentPost(null);
      setShowModal(true);
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setMessage("Post deleted successfully!");
      fetchPosts(currentPage, pageSize, searchTerm);
      setShowModal(true);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handlePageSizeChange = (event) => {
    setPageSize(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleCancel = () => {
    setCurrentPost(null);
  };

  const handleEdit = (post) => {
    setCurrentPost(post);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container style={{ maxWidth: "90%", marginTop: "20px" }}>
      <div ref={formRef}>
        <PostForm
          onSubmit={handleCreateOrUpdate}
          initialData={currentPost || { title: "", body: "" }}
          onCancel={handleCancel}
        />
      </div>
      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />
      <PostTable posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      <Pagination className="justify-content-center mt-3">
        <Pagination.Prev
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        />
        <Pagination.Item active>{currentPage}</Pagination.Item>
        <Pagination.Next onClick={() => setCurrentPage((prev) => prev + 1)} />
      </Pagination>

      <NotificationModal
        show={showModal}
        message={message}
        onClose={() => setShowModal(false)}
      />
    </Container>
  );
};

export default Home;
