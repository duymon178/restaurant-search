import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <SearchBox />
      </div>
    </div>
  );
}

export default App;
