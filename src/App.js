import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CardProductos } from "./components/CardProductos";
function App() {
  return (
    <div className="m-3">
      <CardProductos />
    </div>
  );
}

export default App;
