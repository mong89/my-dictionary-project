import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
     MyDictionary App
      </header>
      <hr></hr>
      <h1>What are you looking for?</h1>
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by 
        <a
            href="https://github.com/mong89"
            target="_blank"
            rel="noreferrer"
            title="Monika's GitHub profile"
            class="github-link text-decoration-none"
            > Monika</a>
      </footer>
    </div>
    </div>
  );
}

