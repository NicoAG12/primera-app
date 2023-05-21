import logo from "./logo.svg";
import "./App.css";

import { NavPrincipal } from "./components/Navbar";
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
