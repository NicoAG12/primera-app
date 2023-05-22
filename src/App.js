import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselPrincipal } from "./Components/Carousel";
import { NavPrincipal } from "./Components/Navbar";
import { CardProductos } from "./Components/CardProductos";

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
