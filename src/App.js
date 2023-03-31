import logo from "./assets/images/logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Seminários, Simpósios e Cursos Técnicos</p>
        <a className="App-link" href="/" rel="noopener noreferrer">
          Próximos Eventos
        </a>
      </header>
    </div>
  );
}

export default App;
