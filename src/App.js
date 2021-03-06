import "./App.css";

import Dictionary from "./Dictionary";
import logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <p>The English Dictionary</p>
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <small>
          <footer className="App-footer">
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/cara-matula-3b0090141"
              target="_blank"
              rel="noreferrer"
            >
              Cara Matula
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/cmatula/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub{" "}
            </a>{" "}
          </footer>
        </small>
      </div>
    </div>
  );
}
