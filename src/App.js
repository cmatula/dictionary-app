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
          <h1>the Dictionary</h1>
          <Dictionary />
        </main>
        <small>
          <footer className="App-footer">
            This project is open source coded on{" "}
            <a
              href="https://github.com/cmatula/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/cara-matula-3b0090141"
              target="_blank"
              rel="noreferrer"
            >
              Cara Matula{" "}
            </a>
          </footer>
        </small>
      </div>
    </div>
  );
}
