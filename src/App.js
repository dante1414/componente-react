import logo from "./logo.svg";
import "./App.css";
import Contenedor from "./container/componenteA";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contenedor
          nombre="Ezequiel"
          apellido="Solis"
          email="danteezequielsolis@gmail.com"
        />
      </header>
    </div>
  );
}

export default App;
