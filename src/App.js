import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Logo</header>
        <main>
          <Dictionary />
        </main>
        <small>
          <footer className="App-footer">
            Open source code by Cara Matula
          </footer>
        </small>
      </div>
    </div>
  );
}
