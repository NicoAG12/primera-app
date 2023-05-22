import { Form } from "./Form";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ModalNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="d-flex justify-content-center">
          <Modal.Title>
            <img
              src="https://icons.iconarchive.com/icons/grafikartes/flat-retro-modern/512/rainbow-apple-logo-icon.png"
              alt="Apple Logo retro"
              height="40px"
              width="40px"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="secondary">Iniciar Sesion</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
