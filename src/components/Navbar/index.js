import { ModalNav } from "./Modal"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NavPrincipal = () => {

  return (
    <Navbar bg="light">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#home">
          <img
            src="https://assets.stickpng.com/images/58e383a9204d556bbd97b149.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Apple Logo"
          />
        </Navbar.Brand>
        <ModalNav />
      </Container>
    </Navbar>
  );


}