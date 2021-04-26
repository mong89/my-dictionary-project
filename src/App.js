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
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by Monika
      </footer>
    </div></div>
  );
}

