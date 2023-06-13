import { ModalNav } from "./Modal";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import data from "../Mocks/phones.json";
import { useState } from "react";
import Card from "react-bootstrap/Card";

export const NavPrincipal = () => {
  const celulares = data.phones;

  const [viewModal, setViewModal] = useState(false);
  const [searchPhone, setSearchPhone] = useState(null);
  const [disable, setDisable] = useState(true);
  const handleClose = () => setViewModal(false);

  const searchButton = (event) => {
    const inputSearch = event.target.form[0].value;
    const celular = celulares.find((item) =>
      item.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    if (celular) {
      setSearchPhone(celular);
      setViewModal(true);
    } else {
      setSearchPhone("El telefono no existe");
    }

    return celular;
  };

  const handleOnChange = (e) => {
    e.target.value.length > 0 ? setDisable(false) : setDisable(true);
  };

  return (
    <>
      {viewModal && (
        <>
          <Modal show={viewModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{searchPhone.name} </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
              <Card style={{ width: "200px", border: "none" }}>
                <Card.Img
                  variant="top"
                  src={searchPhone.image}
                  width="200px"
                  height="200px"
                />
                <Card.Body className="p-2">
                  <Card.Text>{searchPhone.Description}</Card.Text>
                  <Card.Text>{searchPhone.price}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={handleClose}>
                      Cerrar
                    </Button>

                    <Button variant="primary">Comprar</Button>
                  </div>
                </Card.Body>
              </Card>
            </Modal.Body>
          </Modal>
        </>
      )}

      <Navbar bg="light">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">
            <img
              src="https://assets.stickpng.com/images/58e383a9204d556bbd97b149.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Apple Logo"
            />
          </Navbar.Brand>
          {/*
          <ModalNav />
        */}

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar Productos"
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleOnChange(e)}
            />
            <Button
              disabled={disable}
              id="boton"
              variant="dark"
              onClick={searchButton}
            >
              Buscar
            </Button>
          </Form>
        </Container>
      </Navbar>
    </>
  );
};
