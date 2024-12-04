import React from "react";
import PropTypes from "prop-types";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import UserIcon from "./UserIcon";

const PostTable = ({ posts, onEdit, onDelete }) => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>ID</th>
        <th>User</th>
        <th>Title</th>
        <th>Body</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {posts.length === 0 ? (
        <tr>
          <td colSpan="5" style={{ textAlign: "center" }}>
            No posts available
          </td>
        </tr>
      ) : (
        posts.map((post) => (
          <tr key={post.id}>
            <td className="align-middle" style={{ verticalAlign: "middle" }}>
              {post.id}
            </td>
            <td className="align-middle" style={{ verticalAlign: "middle" }}>
              <UserIcon userId={post.userId} />
            </td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td
              className=" align-items-center"
              style={{ verticalAlign: "middle" }}
            >
              <Button
                variant="warning"
                onClick={() => onEdit(post)}
                className="me-2"
                aria-label={`Edit post ${post.id}`}
                style={{
                  padding: "5px 10px",
                  height: "auto",
                  marginBottom: "10px",
                }}
              >
                <FaEdit className="fs-6" />
              </Button>
              <Button
                variant="danger"
                onClick={() => onDelete(post.id)}
                className="me-2"
                aria-label={`Delete post ${post.id}`}
                style={{ 
                  padding: "5px 10px", 
                  height: "auto" 
                }}
              >
                <FaTrash className="fs-6" />
              </Button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </Table>
);

PostTable.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default PostTable;
