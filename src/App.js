import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselPrincipal } from "./components/Carousel";
import { NavPrincipal } from "./components/Navbar";
import { CardProductos } from "./components/CardProductos";

function App() {
  return (
    <>
      <NavPrincipal />
      <CarouselPrincipal />
      <CardProductos />
    </>
  );
}
export default App;
