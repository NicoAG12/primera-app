import { ModalNav } from "./Modal"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import data from "../Mocks/phones.json";
import { useState } from "react"

export const NavPrincipal = () => {

  const celulares = data.phones;

  const [viewModal, setViewModal] = useState(false);
  const [searchPhone, setSearchPhone] = useState();
  const searchButton = (event) => {
    const inputSearch = event.target.form[0].value;

    const celular = celulares.find((item) => item.name === inputSearch);
    if (celular) {
      setSearchPhone(celular);
      return setViewModal(true);

    }
    setSearchPhone("El telefono no existe")

    return celular;
  }


  return (
    <>

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
        */
          }

          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Buscar Productos"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark"
              onClick={(searchButton)}>Buscar</Button>
          </Form>


        </Container>
      </Navbar>


    </>
  )
}