import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NotificationModal = ({ show, message, onClose }) => (
  <Modal show={show} onHide={onClose} centered>
    <Modal.Header closeButton>
      <Modal.Title className="text-center">Notification</Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-center" style={{ fontSize: '1.1rem', color: '#333' }}>
      {message}
    </Modal.Body>
    <Modal.Footer className="justify-content-center">
      <Button variant="secondary" onClick={onClose} style={{ width: '100px' }}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

NotificationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NotificationModal;
