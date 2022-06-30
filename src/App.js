import "./App.css";

import Dictionary from "./Dictionary";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <h1>Dictionary</h1>
          <Dictionary />
        </main>
        <small>
          <footer className="App-footer">
            <a
              href="https://github.com/cmatula/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Open source{" "}
            </a>{" "}
            code by Cara Matula
          </footer>
        </small>
      </div>
    </div>
  );
}
