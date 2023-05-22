import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import { CardProductos } from "./Components/CardProductos";

function App() {
  return (
    <>
      <Container>

        <CardProductos />

      </Container>
    </>
  );
}

export default App;
