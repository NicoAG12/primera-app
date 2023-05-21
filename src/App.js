import logo from "./logo.svg";
import { NavPrincipal } from "./components/Navbar";
import "./App.css";
import { CardProductos } from "./components/CardProductos";
function App() {
  return (
    <>
      <NavPrincipal />
      <CardProductos />
    </>
  );
}

export default App;
