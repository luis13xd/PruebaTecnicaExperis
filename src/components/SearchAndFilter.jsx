import React from 'react';
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchAndFilter = ({
  searchTerm,
  onSearchChange,
  pageSize,
  onPageSizeChange,
}) => (
  <Row className="align-items-center mb-3">
    <Col md={10}>
      <Form.Control
        type="text"
        placeholder="Search by ID, UserID, Title, or Body"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </Col>
    <Col md={2}>
      <Form.Select value={pageSize} onChange={onPageSizeChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </Form.Select>
    </Col>
  </Row>
);

SearchAndFilter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
};

export default SearchAndFilter;

