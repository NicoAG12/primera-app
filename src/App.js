import logo from "./logo.svg";
import { NavPrincipal } from "./Components/Navbar";
import "./App.css";
import { CardProductos } from "./Components/CardProductos";
function App() {
  return (
    <>
      <NavPrincipal />
      <CardProductos />
    </>
  );
}

export default App;
