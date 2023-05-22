import { ModalNav } from "./Modal";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const NavPrincipal = () => {
  return (
    <Navbar bg="light">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#home">
          <img
            src="https://icons.iconarchive.com/icons/grafikartes/flat-retro-modern/512/rainbow-apple-logo-icon.png"
            width="50px"
            height="50px"
            className="d-inline-block align-top"
            alt="Apple Logo"
          />
        </Navbar.Brand>
        <ModalNav />
      </Container>
    </Navbar>
  );
};
