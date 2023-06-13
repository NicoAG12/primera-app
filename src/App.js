import logo from "./logo.svg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavPrincipal } from "./components/Navbar";
import Container from "react-bootstrap/Container";
import { CardProductos } from "./components/CardProductos";

function App() {
  return (
    <>
      <NavPrincipal />
      <Container>
        <CardProductos />
      </Container>
      master
    </>
  );
}
export default App;
