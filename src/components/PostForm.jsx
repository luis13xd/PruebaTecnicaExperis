import React,{ useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Button, Card } from "react-bootstrap";

const PostForm = ({
  initialData = { title: "", body: "" },
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.body.trim()) {
      alert("Title and Body are required.");
      return;
    }
    onSubmit(formData);
    setFormData({ title: "", body: "" });
  };

  const handleCancel = () => {
    setFormData({ title: "", body: "" });
    onCancel();
  };

  return (
    <Card
      className="p-4 mb-4 shadow-sm"
      style={{ maxWidth: "400px", margin: "auto" }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </Form.Group>
        <Form.Group controlId="formBody" className="mb-3">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Enter body"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
        {initialData.id && (
          <Button
            variant="secondary"
            onClick={handleCancel}
            className="w-100 mt-2"
          >
            Cancel
          </Button>
        )}
      </Form>
    </Card>
  );
};

PostForm.propTypes = {
  initialData: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default PostForm;
