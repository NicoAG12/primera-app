import logo from "./logo.svg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselPrincipal } from "./Components/Carousel";
import { NavPrincipal } from "./Components/Navbar";
import Container from "react-bootstrap/Container";
import { CardProductos } from "./Components/CardProductos";

function App() {
  return (
    <>
      <NavPrincipal />
      <CarouselPrincipal />
    <Container>
    <CardProductos />
    </Container>

    master
    </>
  );
}
export default App;
